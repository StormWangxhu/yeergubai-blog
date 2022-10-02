import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.568ff9ed.js";const t={},p=e(`<p>\u672C\u63D2\u4EF6\u53EF\u4EE5\u81EA\u52A8\u5904\u7406\u4F60\u7AD9\u70B9\u7684\u91CD\u5B9A\u5411\u3002</p><h2 id="\u63A7\u5236\u9875\u9762\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u9875\u9762\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u63A7\u5236\u9875\u9762\u91CD\u5B9A\u5411</h2><p>\u5982\u679C\u4F60\u6539\u52A8\u4E86\u5DF2\u6709\u9875\u9762\u7684\u5730\u5740\uFF0C\u4F60\u53EF\u4EE5\u5728 Frontmatter \u4E2D\u4F7F\u7528 <code>redirectFrom</code> \u9009\u9879\u8BBE\u7F6E\u91CD\u5B9A\u5411\u5230\u6B64\u9875\u9762\u7684\u5730\u5740\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u7528\u6237\u5728\u8BBF\u95EE\u65E7\u94FE\u63A5\u65F6\u91CD\u5B9A\u5411\u5230\u65B0\u7684\u5730\u5740\u3002</p><p>\u5982\u679C\u4F60\u9700\u8981\u5C06\u5DF2\u6709\u7684\u9875\u9762\u91CD\u5B9A\u5411\u5230\u65B0\u7684\u9875\u9762\uFF0C\u53EF\u4EE5\u5728 Frontmatter \u4E2D\u4F7F\u7528 <code>redirectTo</code> \u9009\u9879\u8BBE\u7F6E\u9700\u8981\u91CD\u5B9A\u5411\u5230\u7684\u5730\u5740\u3002\u8FD9\u6837\u8BE5\u9875\u9762\u4F1A\u5728\u8BBF\u95EE\u65F6\u91CD\u5B9A\u5411\u5230\u65B0\u7684\u5730\u5740\u3002</p><h2 id="\u91CD\u5B9A\u5411\u5230\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u5230\u9875\u9762" aria-hidden="true">#</a> \u91CD\u5B9A\u5411\u5230\u9875\u9762</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u63D2\u4EF6\u9009\u9879\u4E2D\u7684 <code>config</code> \u8BBE\u7F6E\u4E00\u4E2A\u91CD\u5B9A\u5411\u6620\u5C04\u3002\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684\u6BCF\u4E2A\u952E\u503C\u5BF9\u90FD\u662F\u4E00\u4E2A\u91CD\u5B9A\u5411\u7684\u6620\u5C04\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E2A\u91CD\u5B9A\u5411\u6620\u5C04\u6765\u8BF4\uFF0C\u952E\u540D\u662F\u91CD\u5B9A\u5411\u7684\u6E90\u5730\u5740\uFF0C\u952E\u503C\u662F\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u5730\u5740\u3002\u5176\u4E2D\u952E\u540D\u5FC5\u987B\u662F\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u952E\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B8C\u6574\u8DEF\u5F84\u3002</p><p>\u5F53\u4F60\u5728\u63D2\u4EF6\u9009\u9879\u4F20\u5165 <code>hostname</code> \u65F6\uFF0C\u6240\u6709\u7EDD\u5BF9\u8DEF\u5F84\u5F62\u5F0F\u91CD\u5B9A\u5411\u5730\u5740\u5747\u4F1A\u6DFB\u52A0 <code>hostname</code> \u4E0E <code>base</code> \u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B8C\u6574\u8DEF\u5F84\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u4F8B\u5B50</p><p>\u5F53\u4F60\u901A\u8FC7\u4E0B\u5217\u9009\u9879\u8C03\u7528\u63D2\u4EF6\u4E14 <code>base</code> \u4E3A <code>/</code> \u65F6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/foo.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bar.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/baz.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/qux.html&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u4EF6\u4F1A\u5C06 <code>/foo.html</code> \u91CD\u5B9A\u5411\u5230 <code>https://example.com/bar.html</code>\uFF0C<code>/baz.html</code> \u91CD\u5B9A\u5411\u5230 <code>https://example.com/qux.html</code>\u3002</p><p>\u800C\u5F53\u4F60\u4E0D\u8BBE\u7F6E\u4E0A\u65B9 <code>hostname</code> \u65F6\uFF0C\u63D2\u4EF6\u4F1A\u5C06 <code>/foo.html</code> \u91CD\u5B9A\u5411\u5230 <code>/bar.html</code>\uFF0C<code>/baz.html</code> \u91CD\u5B9A\u5411\u5230 <code>https://example.com/qux.html</code>\u3002</p></div><p><code>config</code> \u9009\u9879\u4E5F\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\u4E3A <code>App</code> \u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C06\u4F1A\u88AB\u89E3\u6790\u4E3A\u4E00\u4E2A\u91CD\u5B9A\u5411\u6620\u5C04\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u51FD\u6570\u6765\u5B8C\u5168\u81EA\u5B9A\u4E49\u91CD\u5B9A\u5411\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u4F8B\u5B50</p><p>\u5047\u8BBE\u6211\u4EEC\u5DF2\u7ECF\u5728 <code>post</code> \u6587\u4EF6\u5939\u4E0B\u6709\u4E00\u4E9B\u6587\u7AE0\uFF0C\u800C\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\uFF0C\u6211\u4EEC\u5C06 <code>post</code> \u91CD\u547D\u540D\u4E3A <code>posts</code>\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\u4E00\u4E2A\u91CD\u5B9A\u5411\u6620\u5C04:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>
      app<span class="token punctuation">.</span>pages
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/posts/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/posts\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u91CD\u5B9A\u5411\u7AD9\u70B9" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u7AD9\u70B9" aria-hidden="true">#</a> \u91CD\u5B9A\u5411\u7AD9\u70B9</h2><p>\u6709\u65F6\u4F60\u53EF\u80FD\u4F1A\u66F4\u6539 <code>base</code> \u6216\u4E3A\u4F60\u7684\u7AD9\u70B9\u4F7F\u7528\u65B0\u57DF\u540D\uFF0C\u56E0\u6B64\u4F60\u53EF\u80FD\u5E0C\u671B\u539F\u59CB\u7AD9\u70B9\u81EA\u52A8\u91CD\u5B9A\u5411\u5230\u65B0\u7AD9\u70B9\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u63D2\u4EF6\u63D0\u4F9B\u4E86 <code>vp-redirect</code> \u811A\u624B\u67B6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4F7F\u7528:
  $ vp-redirect generate <span class="token punctuation">[</span>\u6E90\u6587\u4EF6\u5939<span class="token punctuation">]</span>

Options:
  <span class="token parameter variable">--hostname</span> <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>  \u91CD\u5B9A\u5411\u5230\u7684\u57DF\u540D <span class="token punctuation">(</span>\u4F8B\u5982: https://new.example.com/<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u9ED8\u8BA4: /<span class="token punctuation">)</span>
  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
  -o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>output<span class="token operator">&gt;</span>  \u8BBE\u7F6E\u8F93\u51FA\u76EE\u5F55 <span class="token punctuation">(</span>\u9ED8\u8BA4: .vuepress/redirect<span class="token punctuation">)</span>
  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        \u8BBE\u7F6E\u7F13\u5B58\u6587\u4EF6\u7684\u76EE\u5F55
  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      \u8BBE\u7F6E\u4E34\u65F6\u6587\u4EF6\u7684\u76EE\u5F55
  --clean-cache          \u751F\u6210\u524D\u6E05\u7406\u7F13\u5B58\u6587\u4EF6
  --clean-temp           \u751F\u6210\u524D\u6E05\u7406\u4E34\u65F6\u6587\u4EF6
  -h, <span class="token parameter variable">--help</span>             \u663E\u793A\u6B64\u6D88\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u9700\u8981\u4F20\u5165 VuePress \u9879\u76EE\u6E90\u76EE\u5F55\u5E76\u8BBE\u7F6E <code>hostname</code> \u9009\u9879\u3002\u91CD\u5B9A\u5411\u52A9\u624B\u811A\u624B\u67B6\u5C06\u521D\u59CB\u5316\u4F60\u7684 VuePress \u9879\u76EE\u4EE5\u83B7\u53D6\u9875\u9762\uFF0C\u7136\u540E\u5728\u8F93\u51FA\u76EE\u5F55\u751F\u6210\u91CD\u5B9A\u5411 html \u6587\u4EF6\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u5C06\u8F93\u51FA\u5230\u6E90\u6587\u4EF6\u5939\u4E0B\u7684 .vuepress/redirect \u76EE\u5F55\u3002\u4F60\u5E94\u8BE5\u5C06\u5176\u4E0A\u4F20\u5230\u4F60\u7684\u539F\u59CB\u7AD9\u70B9\u4EE5\u63D0\u4F9B\u91CD\u5B9A\u5411\u3002</p>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","guide.html.vue"]]);export{d as default};
