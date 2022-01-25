---

prev: /app/day25-flutter-homepage-musician-banner.md

---

# Day26：SpringBoot 微信OAuth接口集成

## 重点内容

### 理解OAuth2.0

[理解OAuth2.0](./oauth2.md)


### Java微信SDK: WxJava

* SKD仓库：[https://github.com/Wechat-Group/WxJava](https://github.com/Wechat-Group/WxJava)
* WIKI： [https://github.com/wechat-group/WxJava/wiki](https://github.com/wechat-group/WxJava/wiki)


### WxSDK 装配

* 增加appId和appSecret配置项
* 封装`WxMpService Bean`，定义`WxMpDefaultConfigImpl`

文件位置: `src/main/java/com/bilitech/yilimusic/config/WeChatConfig.java`

```java

@Configuration
public class WeChatConfig {

    @Value("${weixin.mp.app-id}")
    private String appId;

    @Value("${weixin.mp.app-secret}")
    private String appSecret;

    @Bean
    WxMpService wxMpService() {
        WxMpService wxMpService = new WxMpServiceImpl();
        WxMpDefaultConfigImpl config = new WxMpDefaultConfigImpl();
        config.setAppId(appId);
        config.setSecret(appSecret);
        wxMpService.setWxMpConfigStorage(config);
        return wxMpService;
    }

}
```


### 授权地址接口 ``/weixin/auth_url``

增加一个授权地址生成接口，返回前端微信授权地址，需要传入授权成功后跳转的`redirectUrl`参数

文件位置： `src/main/java/com/bilitech/yilimusic/controller/WeixinController.java`


```java


    @GetMapping("/auth_url")
    public String getAuthUrl(@PathParam("redirectUrl") String redirectUrl) {
        return wxMpService.getOAuth2Service().buildAuthorizationUrl(
                redirectUrl,
                WxConsts.OAuth2Scope.SNSAPI_USERINFO,
                null
        );
    }

 
```


### 返回微信基本用户信息接口 `/weixin/get_user_info`

* 第一步中，用户授权过的 `code` 返回 `access_token` 和 `refresh_token`，这一步骤可以是前端不可见

* 获取 `access_token` 后，直接获取用户基本信息，通过本接口返回。

文件位置： `src/main/java/com/bilitech/yilimusic/controller/WeixinController.java`

```java

    @PostMapping("/get_user_info")
    public WxOAuth2UserInfo getUserInfo(@PathParam("code") String code) throws WxErrorException {
        WxOAuth2AccessToken wxOAuth2AccessToken = wxMpService.getOAuth2Service().getAccessToken(code);
        return wxMpService.getOAuth2Service().getUserInfo(wxOAuth2AccessToken, null);
    }

```

## 录播视频

::: tip
录播视频预计2月2日更新
:::
