# SpringBoot集成Swagger 3.0

3.0版本在配置上与2.9稍有差别，包括依赖包改为: springfox-boot-starter，启用注解更改为: @EnableOpenApi等。

## 1. 引入依赖springfox-boot-starter

maven为例：

```
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-boot-starter</artifactId>
    <version>3.0.0</version>
</dependency>
```


## 2. 自定义配置信息

```
@Configuration
@EnableOpenApi
public class SwaggerConfig {
    @Bean
    public Docket docket(){
       return new Docket(DocumentationType.OAS_30)
                .apiInfo(apiInfo()).enable(true)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.bilitech.controller"))
                .paths(PathSelectors.any())
                .build();
    }
    
    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                .title("XX项目接口文档")
                .description("XX项目描述")
                .contact(new Contact("作者", "作者URL", "作者Email"))
                .version("1.0")
                .build();
    }
}
```


## 3. 在Controller上添加Swagger注解


```

@Api(tags="用户管理")
@RestController
@RequestMapping("/user")
public class UserController {

    @ApiOperation("用户列表")
    @GetMapping("/{id}")
    public JsonResult getViewObjectMapping(@PathVariable("id") Long id) throws Exception{
        return super.getViewObject(id, UserVO.class);
    }
    ...
}
```


## 4. 白名单访问

```
/swagger**/**
/webjars/**
/v3/**
/doc.html
```


## 5. 启动应用，访问`/swagger-ui/index.html`




# 错误



> Springboot 2.6.0 / swagger 2.9.2 无法启动 bean 'documentationPluginsBootstrapper'


## 报错提示
org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException: Cannot invoke "org.springframework.web.servlet.mvc.condition.PatternsRequestCondition.getPatterns()" because "this.condition" is null
        at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:181) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.context.support.DefaultLifecycleProcessor.access$200(DefaultLifecycleProcessor.java:54) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.context.support.DefaultLifecycleProcessor$LifecycleGroup.start(DefaultLifecycleProcessor.java:356) ~[spring-context-5.3.13.jar:5.3.13]
        at java.base/java.lang.Iterable.forEach(Iterable.java:75) ~[na:na]
        at org.springframework.context.support.DefaultLifecycleProcessor.startBeans(DefaultLifecycleProcessor.java:155) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.context.support.DefaultLifecycleProcessor.onRefresh(DefaultLifecycleProcessor.java:123) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:935) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:586) ~[spring-context-5.3.13.jar:5.3.13]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:145) ~[spring-boot-2.6.0.jar:2.6.0]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) ~[spring-boot-2.6.0.jar:2.6.0]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:412) ~[spring-boot-2.6.0.jar:2.6.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:302) ~[spring-boot-2.6.0.jar:2.6.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1301) ~[spring-boot-2.6.0.jar:2.6.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1290) ~[spring-boot-2.6.0.jar:2.6.0]
        at com.example.springfox.SpringFoxApplication.main(SpringFoxApplication.java:10) ~[main/:na]
## 原因
这个问题是由Springfox 中的一个错误引起的。它对 Spring MVC 的设置方式做出了假设，但并不总是如此。具体来说，它假设 MVC 的路径匹配将使用基于 Ant 的路径匹配器而不是基于 PathPattern 的匹配器。基于 PathPattern 的匹配已经成为一个选项有一段时间了，并且是 Spring Boot 2.6 的默认选项。

如Spring Boot 2.6’s release notes 中所述，您可以通过在您的文件中设置spring.mvc.pathmatch.matching-strategyto来恢复 Springfox 假定将使用的配置。请注意，这仅在您不使用 Spring Boot 的 Actuator 时才有效。执行器始终使用基于 PathPattern 的解析，而不管配置的. 如果您想在 Spring Boot 2.6 及更高版本中将其与 Actuator 一起使用，则需要对 Springfox 进行更改。ant-path-matcherapplication.propertiesmatching-strategy

## 解决办法1 
用了比较懒的办法，把Springboot 2.6.0 降到了 Springboot 2.5.6

此文档仅用于记录自己遇到此问题的原因及解决方法。


## 解决方案2

```
https://stackoverflow.com/questions/70178343/springfox-3-0-0-is-not-working-with-spring-boot-2-6-0
    @Bean
    public static BeanPostProcessor springfoxHandlerProviderBeanPostProcessor() {
        return new BeanPostProcessor() {

            @Override
            public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
                if (bean instanceof WebMvcRequestHandlerProvider) {
                    customizeSpringfoxHandlerMappings(getHandlerMappings(bean));
                }
                return bean;
            }

            private <T extends RequestMappingInfoHandlerMapping> void customizeSpringfoxHandlerMappings(List<T> mappings) {
                List<T> copy = mappings.stream()
                        .filter(mapping -> mapping.getPatternParser() == null)
                        .collect(Collectors.toList());
                mappings.clear();
                mappings.addAll(copy);
            }

            @SuppressWarnings("unchecked")
            private List<RequestMappingInfoHandlerMapping> getHandlerMappings(Object bean) {
                try {
                    Field field = ReflectionUtils.findField(bean.getClass(), "handlerMappings");
                    field.setAccessible(true);
                    return (List<RequestMappingInfoHandlerMapping>) field.get(bean);
                } catch (IllegalArgumentException | IllegalAccessException e) {
                    throw new IllegalStateException(e);
                }
            }
        };
    }
```


## 解决方案3

```
spring.mvc.pathmatch.matching-strategy=ANT_PATH_MATCHER

```
## 来源：https://python.iitter.com/other/267324.html