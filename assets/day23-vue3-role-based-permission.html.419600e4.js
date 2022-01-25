import{r as t,o as e,c as o,a as n,b as p,F as c,e as l,d as s}from"./app.dd8de508.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=l(`<h1 id="day23-vue3\u540E\u53F0\u89D2\u8272\u6743\u9650\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#day23-vue3\u540E\u53F0\u89D2\u8272\u6743\u9650\u5224\u65AD" aria-hidden="true">#</a> Day23\uFF1AVue3\u540E\u53F0\u89D2\u8272\u6743\u9650\u5224\u65AD</h1><h2 id="\u91CD\u70B9\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u91CD\u70B9\u5185\u5BB9" aria-hidden="true">#</a> \u91CD\u70B9\u5185\u5BB9</h2><h3 id="nickname\u53D6\u503C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#nickname\u53D6\u503C\u673A\u5236" aria-hidden="true">#</a> nickname\u53D6\u503C\u673A\u5236</h3><p>\u5BF9\u767B\u9646\u540Enickname\u9996\u5B57\u6BCD\u83B7\u53D6getter\u6539\u9020</p><p><code>src/store/modules/user.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">nicknameFirstWord</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>currentUser <span class="token operator">&amp;&amp;</span> state<span class="token punctuation">.</span>currentUser<span class="token punctuation">.</span>nickname
      <span class="token operator">?</span> state<span class="token punctuation">.</span>currentUser<span class="token punctuation">.</span>nickname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u89D2\u8272\u5224\u65AD\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272\u5224\u65AD\u673A\u5236" aria-hidden="true">#</a> \u89D2\u8272\u5224\u65AD\u673A\u5236</h3><p>\u5728router\u5B88\u536B\u4E2D\u589E\u52A0\u4E0A\u4E0B\u6587\u7528\u6237\u7684\u89D2\u8272\u5224\u65AD\uFF0C\u82E5\u4E3A <code>ROLE_ADMIN</code>\u7EE7\u7EED\u8BBF\u95EE\uFF1B\u82E5\u4E0D\u662F\u63D0\u793A\u9519\u8BEF\u5E76\u6E05\u7A7A\u767B\u5F55\u4FE1\u606F</p><p><code>src/permission.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4EE3\u7801\u7701\u7565</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>hasToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentUser <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>currentUser<span class="token punctuation">;</span>
  <span class="token keyword">const</span> adminRole <span class="token operator">=</span> currentUser<span class="token punctuation">.</span>roles<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;ROLE_ADMIN&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>adminRole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/logout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Notify<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;negative&#39;</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">&#39;\u4F60\u65E0\u6743\u9650\u8BBF\u95EE\u540E\u53F0&#39;</span><span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
<span class="token comment">//\u4EE3\u7801\u7701\u7565</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u5168\u5C40\u9519\u8BEF\u8BF7\u6C42\u62E6\u622A" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u9519\u8BEF\u8BF7\u6C42\u62E6\u622A" aria-hidden="true">#</a> \u5168\u5C40\u9519\u8BEF\u8BF7\u6C42\u62E6\u622A</h3><p>\u82E5\u63A5\u53E3\u9047\u5230\u9519\u8BEF\u4FE1\u606F\uFF0C\u5355\u72EC\u7528 <code>handleError</code>\u65B9\u6CD5\u7EDF\u4E00\u5904\u7406\uFF0C\u9488\u5BF9 <code>401\uFF1A\u65E0\u767B\u5F55</code> \u6216 <code>403\uFF1A\u65E0\u6743\u9650</code> \u7EDF\u4E00\u6E05\u695A\u767B\u5F55\u4FE1\u606F\u5904\u7406\u3002</p><p><code>src/api/request.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4EE3\u7801\u5FFD\u7565</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleErrorResponse</span> <span class="token operator">=</span> <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">||</span> response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">403</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/logout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  Notify<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;negative&#39;</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
    position<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u4EE3\u7801\u5FFD\u7565</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u5934\u90E8\u589E\u52A0\u9000\u51FA-menu" tabindex="-1"><a class="header-anchor" href="#\u5934\u90E8\u589E\u52A0\u9000\u51FA-menu" aria-hidden="true">#</a> \u5934\u90E8\u589E\u52A0\u9000\u51FA <code>menu</code></h3><p>\u5934\u90E8\u5934\u50CF\u663E\u793A\u533A\u57DF\u589E\u52A0\u4E0B\u62C9 <code>menu</code>\u5E76\u63D0\u4F9B\u9000\u51FA\u767B\u5F55\u529F\u80FD</p><p><code>src/pages/Layout.vue</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-avatar</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>teal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>white<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>{{ nicknameFirstWord }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-menu</span> <span class="token attr-name">fit</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-list</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-width</span><span class="token punctuation">:</span> 100px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-item</span> <span class="token attr-name">clickable</span> <span class="token attr-name">v-close-popup</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-item-section</span><span class="token punctuation">&gt;</span></span>\u9000\u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-item-section</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-list</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-menu</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-avatar</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4EE3\u7801\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5DEE\u5F02" aria-hidden="true">#</a> \u4EE3\u7801\u5DEE\u5F02</h2>`,19),k={href:"https://github.com/programmer-yili/yili-music-admin/commit/4328926389a475113168b63d8d992b72d0b45b95",target:"_blank",rel:"noopener noreferrer"},m=s("GitHub"),d={href:"https://gitee.com/programmer-yili/yili-music-admin/commit/4328926389a475113168b63d8d992b72d0b45b95",target:"_blank",rel:"noopener noreferrer"},b=s("Gitee"),g=n("h2",{id:"\u5F55\u64AD\u89C6\u9891",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F55\u64AD\u89C6\u9891","aria-hidden":"true"},"#"),s(" \u5F55\u64AD\u89C6\u9891")],-1),h=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"\u5F55\u64AD\u89C6\u9891\u9884\u8BA11\u670830\u65E5\u66F4\u65B0")],-1);function v(f,_){const a=t("ExternalLinkIcon");return e(),o(c,null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[m,p(a)])])]),n("li",null,[n("p",null,[n("a",d,[b,p(a)])])])]),g,h],64)}var q=u(r,[["render",v]]);export{q as default};
