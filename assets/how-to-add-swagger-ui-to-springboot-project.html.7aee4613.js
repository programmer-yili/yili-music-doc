import{e as n}from"./app.dd8de508.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h1 id="springboot\u96C6\u6210swagger-3-0" tabindex="-1"><a class="header-anchor" href="#springboot\u96C6\u6210swagger-3-0" aria-hidden="true">#</a> SpringBoot\u96C6\u6210Swagger 3.0</h1><p>3.0\u7248\u672C\u5728\u914D\u7F6E\u4E0A\u4E0E2.9\u7A0D\u6709\u5DEE\u522B\uFF0C\u5305\u62EC\u4F9D\u8D56\u5305\u6539\u4E3A: springfox-boot-starter\uFF0C\u542F\u7528\u6CE8\u89E3\u66F4\u6539\u4E3A: @EnableOpenApi\u7B49\u3002</p><h2 id="_1-\u5F15\u5165\u4F9D\u8D56springfox-boot-starter" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u5165\u4F9D\u8D56springfox-boot-starter" aria-hidden="true">#</a> 1. \u5F15\u5165\u4F9D\u8D56springfox-boot-starter</h2><p>maven\u4E3A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.springfox&lt;/groupId&gt;
    &lt;artifactId&gt;springfox-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;3.0.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u81EA\u5B9A\u4E49\u914D\u7F6E\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49\u914D\u7F6E\u4FE1\u606F" aria-hidden="true">#</a> 2. \u81EA\u5B9A\u4E49\u914D\u7F6E\u4FE1\u606F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Configuration
@EnableOpenApi
public class SwaggerConfig {
    @Bean
    public Docket docket(){
       return new Docket(DocumentationType.OAS_30)
                .apiInfo(apiInfo()).enable(true)
                .select()
                .apis(RequestHandlerSelectors.basePackage(&quot;com.bilitech.controller&quot;))
                .paths(PathSelectors.any())
                .build();
    }
    
    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                .title(&quot;XX\u9879\u76EE\u63A5\u53E3\u6587\u6863&quot;)
                .description(&quot;XX\u9879\u76EE\u63CF\u8FF0&quot;)
                .contact(new Contact(&quot;\u4F5C\u8005&quot;, &quot;\u4F5C\u8005URL&quot;, &quot;\u4F5C\u8005Email&quot;))
                .version(&quot;1.0&quot;)
                .build();
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_3-\u5728controller\u4E0A\u6DFB\u52A0swagger\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-\u5728controller\u4E0A\u6DFB\u52A0swagger\u6CE8\u89E3" aria-hidden="true">#</a> 3. \u5728Controller\u4E0A\u6DFB\u52A0Swagger\u6CE8\u89E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
@Api(tags=&quot;\u7528\u6237\u7BA1\u7406&quot;)
@RestController
@RequestMapping(&quot;/user&quot;)
public class UserController {

    @ApiOperation(&quot;\u7528\u6237\u5217\u8868&quot;)
    @GetMapping(&quot;/{id}&quot;)
    public JsonResult getViewObjectMapping(@PathVariable(&quot;id&quot;) Long id) throws Exception{
        return super.getViewObject(id, UserVO.class);
    }
    ...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_4-\u767D\u540D\u5355\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_4-\u767D\u540D\u5355\u8BBF\u95EE" aria-hidden="true">#</a> 4. \u767D\u540D\u5355\u8BBF\u95EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/swagger**/**
/webjars/**
/v3/**
/doc.html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-\u542F\u52A8\u5E94\u7528-\u8BBF\u95EE-swagger-ui-index-html" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8\u5E94\u7528-\u8BBF\u95EE-swagger-ui-index-html" aria-hidden="true">#</a> 5. \u542F\u52A8\u5E94\u7528\uFF0C\u8BBF\u95EE<code>/swagger-ui/index.html</code></h2><h1 id="\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF" aria-hidden="true">#</a> \u9519\u8BEF</h1><blockquote><p>Springboot 2.6.0 / swagger 2.9.2 \u65E0\u6CD5\u542F\u52A8 bean &#39;documentationPluginsBootstrapper&#39;</p></blockquote><h2 id="\u62A5\u9519\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u62A5\u9519\u63D0\u793A" aria-hidden="true">#</a> \u62A5\u9519\u63D0\u793A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>org.springframework.context.ApplicationContextException: Failed to start bean &#39;documentationPluginsBootstrapper&#39;; nested exception is java.lang.NullPointerException: Cannot invoke &quot;org.springframework.web.servlet.mvc.condition.PatternsRequestCondition.getPatterns()&quot; because &quot;this.condition&quot; is null
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h2><p>\u8FD9\u4E2A\u95EE\u9898\u662F\u7531Springfox \u4E2D\u7684\u4E00\u4E2A\u9519\u8BEF\u5F15\u8D77\u7684\u3002\u5B83\u5BF9 Spring MVC \u7684\u8BBE\u7F6E\u65B9\u5F0F\u505A\u51FA\u4E86\u5047\u8BBE\uFF0C\u4F46\u5E76\u4E0D\u603B\u662F\u5982\u6B64\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5B83\u5047\u8BBE MVC \u7684\u8DEF\u5F84\u5339\u914D\u5C06\u4F7F\u7528\u57FA\u4E8E Ant \u7684\u8DEF\u5F84\u5339\u914D\u5668\u800C\u4E0D\u662F\u57FA\u4E8E PathPattern \u7684\u5339\u914D\u5668\u3002\u57FA\u4E8E PathPattern \u7684\u5339\u914D\u5DF2\u7ECF\u6210\u4E3A\u4E00\u4E2A\u9009\u9879\u6709\u4E00\u6BB5\u65F6\u95F4\u4E86\uFF0C\u5E76\u4E14\u662F Spring Boot 2.6 \u7684\u9ED8\u8BA4\u9009\u9879\u3002</p><p>\u5982Spring Boot 2.6\u2019s release notes \u4E2D\u6240\u8FF0\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728\u60A8\u7684\u6587\u4EF6\u4E2D\u8BBE\u7F6Espring.mvc.pathmatch.matching-strategyto\u6765\u6062\u590D Springfox \u5047\u5B9A\u5C06\u4F7F\u7528\u7684\u914D\u7F6E\u3002\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4EC5\u5728\u60A8\u4E0D\u4F7F\u7528 Spring Boot \u7684 Actuator \u65F6\u624D\u6709\u6548\u3002\u6267\u884C\u5668\u59CB\u7EC8\u4F7F\u7528\u57FA\u4E8E PathPattern \u7684\u89E3\u6790\uFF0C\u800C\u4E0D\u7BA1\u914D\u7F6E\u7684. \u5982\u679C\u60A8\u60F3\u5728 Spring Boot 2.6 \u53CA\u66F4\u9AD8\u7248\u672C\u4E2D\u5C06\u5176\u4E0E Actuator \u4E00\u8D77\u4F7F\u7528\uFF0C\u5219\u9700\u8981\u5BF9 Springfox \u8FDB\u884C\u66F4\u6539\u3002ant-path-matcherapplication.propertiesmatching-strategy</p><h2 id="\u89E3\u51B3\u529E\u6CD51" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD51" aria-hidden="true">#</a> \u89E3\u51B3\u529E\u6CD51</h2><p>\u7528\u4E86\u6BD4\u8F83\u61D2\u7684\u529E\u6CD5\uFF0C\u628ASpringboot 2.6.0 \u964D\u5230\u4E86 Springboot 2.5.6</p><p>\u6B64\u6587\u6863\u4EC5\u7528\u4E8E\u8BB0\u5F55\u81EA\u5DF1\u9047\u5230\u6B64\u95EE\u9898\u7684\u539F\u56E0\u53CA\u89E3\u51B3\u65B9\u6CD5\u3002</p><h2 id="\u89E3\u51B3\u65B9\u68482" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u68482" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u68482</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://stackoverflow.com/questions/70178343/springfox-3-0-0-is-not-working-with-spring-boot-2-6-0
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

            private &lt;T extends RequestMappingInfoHandlerMapping&gt; void customizeSpringfoxHandlerMappings(List&lt;T&gt; mappings) {
                List&lt;T&gt; copy = mappings.stream()
                        .filter(mapping -&gt; mapping.getPatternParser() == null)
                        .collect(Collectors.toList());
                mappings.clear();
                mappings.addAll(copy);
            }

            @SuppressWarnings(&quot;unchecked&quot;)
            private List&lt;RequestMappingInfoHandlerMapping&gt; getHandlerMappings(Object bean) {
                try {
                    Field field = ReflectionUtils.findField(bean.getClass(), &quot;handlerMappings&quot;);
                    field.setAccessible(true);
                    return (List&lt;RequestMappingInfoHandlerMapping&gt;) field.get(bean);
                } catch (IllegalArgumentException | IllegalAccessException e) {
                    throw new IllegalStateException(e);
                }
            }
        };
    }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="\u89E3\u51B3\u65B9\u68483" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u68483" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u68483</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.mvc.pathmatch.matching-strategy=ANT_PATH_MATCHER

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u6765\u6E90-https-python-iitter-com-other-267324-html" tabindex="-1"><a class="header-anchor" href="#\u6765\u6E90-https-python-iitter-com-other-267324-html" aria-hidden="true">#</a> \u6765\u6E90\uFF1Ahttps://python.iitter.com/other/267324.html</h2>`,27);function r(t,i){return s}var o=e(a,[["render",r]]);export{o as default};
