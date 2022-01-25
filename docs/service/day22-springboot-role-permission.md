---

prev: /app/day21-app-homepage-category-banner.md
next: /admin/day23-vue3-role-based-permission.md

---

# Day22：SpringBoot 用户角色权限

## 重点内容

### 主要角色划分
```
ROLE_USER : 普通用户 ->  拿到自己信息; 更改自己的信息; 观看音乐列表; ... 无法登录后台; 注册场景接口;...
ROLE_ADMIN: 管理员用户-> (登录后台 -> vue3);  获取用户(检索)列表; 删除用户; 添加用户;...
```

### 实现上下文用户的特权获取方法 `getAuthorities`

src/main/java/com/bilitech/yilimusic/entity/User.java

```java
@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    List<GrantedAuthority> authorities = new ArrayList<>();
    for (Role role : roles) {
        authorities.add(new SimpleGrantedAuthority(role.getName()));
    }
    return authorities;
}
```

### 在上下文用户中写入角色

src/main/java/com/bilitech/yilimusic/filter/JwtAuthorizationFilter.java

```java
User user = userService.loadUserByUsername(username);
return new UsernamePasswordAuthenticationToken(username, null, user.getAuthorities());

```

### 启动注解机制的安全确认

src/main/java/com/bilitech/yilimusic/config/SecurityConfig.java

```java
...
@EnableGlobalMethodSecurity(
        prePostEnabled = true,
        securedEnabled = true,
        jsr250Enabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
...
}
```

### 接口增加 `PreAuthorize` 注解

```java

@GetMapping
@ApiOperation("用户检索")
@PreAuthorize("hasRole('ROLE_ADMIN')")
Page<UserVo> search(@PageableDefault(sort = {"createdTime"}, direction = Sort.Direction.ASC) Pageable pageable) {
    return userService.search(pageable).map(userMapper::toVo);
}
```


### 更多SpringSecurity文献

> https://www.baeldung.com/security-spring

## 代码差异

* [GitHub](https://github.com/programmer-yili/yili-music/commit/455a21bbd4ca8163f6c4a072555c06da6af97e2e)


* [Gitee](https://gitee.com/programmer-yili/yili-music/commit/455a21bbd4ca8163f6c4a072555c06da6af97e2e)



## 录播视频

::: tip
录播视频预计1月29日更新
:::

