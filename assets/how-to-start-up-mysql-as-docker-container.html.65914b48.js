import{e}from"./app.dd8de508.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h1 id="docker-\u5BB9\u5668\u5185\u542F\u52A8mysql-5-7-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u5185\u542F\u52A8mysql-5-7-\u670D\u52A1" aria-hidden="true">#</a> Docker \u5BB9\u5668\u5185\u542F\u52A8MySQL 5.7 \u670D\u52A1</h1><blockquote><p>\u6211\u4EEC\u5C06\u91C7\u7528docker\u5BB9\u5668\u65B9\u5F0F\u542F\u52A8 mysql 5.7\u7248\u672C\uFF0C\u65B9\u4FBF\u5F53\u524D\u5F00\u53D1</p></blockquote><h2 id="\u5BB9\u5668\u5B89\u88C5\u5E76\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5B89\u88C5\u5E76\u8FD0\u884C" aria-hidden="true">#</a> \u5BB9\u5668\u5B89\u88C5\u5E76\u8FD0\u884C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// MYSQL_ROOT_PASSWORD=root \u73AF\u5883\u53D8\u91CF\u8868\u793Aroot\u5BC6\u7801
//  --name mysql5.7 \u5BF9\u5E94\u7684\u662F\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u540D\u79F0

docker run --name mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7


// \u82E5M1\u82AF\u7247

docker run --name  mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d amd64/mysql:5.7

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5BB9\u5668\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u542F\u52A8" aria-hidden="true">#</a> \u5BB9\u5668\u542F\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker start mysql5.7


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5BB9\u5668\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u505C\u6B62" aria-hidden="true">#</a> \u5BB9\u5668\u505C\u6B62</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker stop mysql5.7

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8);function r(l,c){return a}var t=n(s,[["render",r]]);export{t as default};
