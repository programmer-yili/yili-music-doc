---

prev: /service/day22-springboot-role-permission.md

---
# Day23：Vue3后台角色权限判断


## 重点内容

### nickname取值机制

对登陆后nickname首字母获取getter改造

`src/store/modules/user.js`

```javascript

const getters = {
  nicknameFirstWord: state => {
    return state.currentUser && state.currentUser.nickname
      ? state.currentUser.nickname.slice(0, 1)
      : '';
  }
};

```

### 角色判断机制

在router守卫中增加上下文用户的角色判断，若为 `ROLE_ADMIN`继续访问；若不是提示错误并清空登录信息

`src/permission.js`

```javascript
// 代码省略
if (hasToken) {
if (to.path === '/login') {
  next({ path: '/' });
} else {
  const currentUser = store.state.user.currentUser;
  const adminRole = currentUser.roles.find(item => {
    return item.name === 'ROLE_ADMIN';
  });
  if (adminRole) {
    next();
  } else {
    await store.dispatch('user/logout');
    Notify.create({
      type: 'negative',
      message: '你无权限访问后台',
      position: 'top'
    });
    next(`/login?redirect=${to.path}`);
  }
}
} 
//代码省略
```

### 全局错误请求拦截

若接口遇到错误信息，单独用 `handleError`方法统一处理，针对 `401：无登录` 或 `403：无权限` 统一清楚登录信息处理。

`src/api/request.js`

```javascript
// 代码忽略
const handleErrorResponse = response => {
  if (response.status === 401 || response.status === 403) {
    store.dispatch('user/logout').then(() => window.location.reload());
  }
  Notify.create({
    type: 'negative',
    message: response.data.message,
    position: 'top'
  });
};
// 代码忽略
```

### 头部增加退出 `menu`

头部头像显示区域增加下拉 `menu`并提供退出登录功能

`src/pages/Layout.vue`

```vue
<q-avatar color="teal" text-color="white"
  >{{ nicknameFirstWord }}
  <q-menu fit>
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup @click="logout">
        <q-item-section>退出</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-avatar>


```

## 代码差异

* [GitHub](https://github.com/programmer-yili/yili-music-admin/commit/4328926389a475113168b63d8d992b72d0b45b95)


* [Gitee](https://gitee.com/programmer-yili/yili-music-admin/commit/4328926389a475113168b63d8d992b72d0b45b95)



## 录播视频

::: tip
录播视频预计1月23日更新
:::







