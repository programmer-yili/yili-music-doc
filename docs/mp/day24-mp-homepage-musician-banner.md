---

prev: /admin/day23-vue3-role-based-permission.md
next: /app/day25-flutter-homepage-musician-banner.md

---

# Day24：小程序首页推荐音乐人

## 重点内容

### 自定义组件样式隔离

启用 `styleIsolotioan: 'isolate'`

```javascript

// 在Component类中增加 `options`属性

  options: {
    styleIsolation: 'isolated'
  }
```

### MusicBanner组件

* 可接受 `title` 和 `list` 属性

具体代码查看 `miniprogram/components/musician-banner`

### MusicianCard组件

* 接口 `item` 属性
* 点击卡片，触发 `click` 事件并把当前item的信息payload出去

具体代码查看 `miniprogram/components/musician-card`

## 代码差异

* [GitHub](https://github.com/programmer-yili/yili-music-mp/commit/0a8e4f80cf675bf2fe468b0e1f5d0047d1a27f25)


* [Gitee](https://gitee.com/programmer-yili/yili-music-mp/commit/0a8e4f80cf675bf2fe468b0e1f5d0047d1a27f25)

## 录播视频

::: tip
录播视频预计1月31日更新
:::
