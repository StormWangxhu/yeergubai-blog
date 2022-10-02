import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,e as s}from"./app.7d52ffa4.js";const i={},l=s(`<h2 id="\u63D2\u4EF6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u9009\u9879" aria-hidden="true">#</a> \u63D2\u4EF6\u9009\u9879</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u90E8\u7F72\u7684\u57DF\u540D</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>\u7C7B\u578B: <code>string | ((page: Page) =&gt; string)</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u4F5C\u8005\u4FE1\u606F</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>\u7C7B\u578B: <code>string | ((page: Page) =&gt; string)</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u534F\u8BAE\u4FE1\u606F</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>100</code></li></ul><p>\u89E6\u53D1\u9644\u52A0\u7248\u6743\u7684\u6700\u5C0F\u5B57\u6570</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u662F\u5426\u5168\u5C40\u542F\u7528</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u590D\u5236</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u9009\u62E9</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>\u7C7B\u578B: <code>CopyrightLocaleConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u4F5C\u8005\u6587\u5B57
   *
   * <span class="token keyword">@description</span> \`:author\` \u5C06\u4F1A\u88AB\u4F5C\u8005\u66FF\u6362
   */</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u534F\u8BAE\u6587\u5B57
   *
   * <span class="token keyword">@description</span> \`:license\` \u4F1A\u88AB\u5F53\u524D\u534F\u8BAE\u66FF\u6362
   */</span>
  license<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u94FE\u63A5\u6587\u5B57
   *
   * <span class="token keyword">@description</span> \`:url\` \u4F1A\u66FF\u6362\u4E3A\u5F53\u524D\u9875\u9762\u94FE\u63A5
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5FC5\u586B: \u5426</p></li></ul><p>\u7248\u6743\u63D2\u4EF6\u7684\u56FD\u9645\u5316\u914D\u7F6E\u3002</p><h2 id="frontmatter-options" tabindex="-1"><a class="header-anchor" href="#frontmatter-options" aria-hidden="true">#</a> Frontmatter Options</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>100</code></li></ul><p>\u89E6\u53D1\u9644\u52A0\u7248\u6743\u7684\u6700\u5C0F\u5B57\u6570</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u590D\u5236</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u7981\u7528\u9009\u62E9</p>`,35),o=[l];function c(d,r){return a(),n("div",null,o)}const u=e(i,[["render",c],["__file","config.html.vue"]]);export{u as default};
