import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,g as p,b as n,e as s,h as o}from"./app.7119fecc.js";const c={},l=n("p",null,[s("\u4F60\u53EF\u4EE5\u5728 "),n("code",null,".vuepress/styles"),s(" \u4E2D\u901A\u8FC7\u5728 "),n("code",null,"config.scss"),s(" \u548C "),n("code",null,"palette.scss"),s(" \u6587\u4EF6\u4E2D\u5199\u5165\u53D8\u91CF\u503C\u6765\u66F4\u6539\u4E3B\u9898\u7684\u6837\u5F0F\u3002")],-1),i=n("p",null,[s("\u4F60\u4E5F\u53EF\u4EE5\u5728 "),n("code",null,".vuepress/styles/index.scss"),s(" \u4E2D\u6DFB\u52A0\u4F60\u81EA\u5DF1\u7684\u6837\u5F0F\u3002")],-1),u=o(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> \u7528\u4E8E\u7EAF\u53D8\u91CF\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u662F\u652F\u6301\u7684\u53D8\u91CF\u4E0E\u9ED8\u8BA4\u503C\u3002</p><p>\u54CD\u5E94\u5F0F\u5E03\u5C40\u65AD\u70B9:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>\u4EE3\u7801\u5757:</p><ul><li><code>$code-light-theme</code>: \u65E5\u95F4\u6A21\u5F0F\u4EE3\u7801\u5757\u4E3B\u9898</li><li><code>$code-dark-theme</code>: \u591C\u95F4\u6A21\u5F0F\u4EE3\u7801\u5757\u4E3B\u9898</li><li><code>$code-lang</code>: \u4EE3\u7801\u5757\u8BED\u8A00</li></ul><p>\u5185\u5BB9\u7C7B\u540D: <code>$content-class</code></p><p>\u989C\u8272\u5217\u8868: <code>$colors</code></p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u4FEE\u6539\u65E5\u95F4\u6A21\u5F0F\u4EE3\u7801\u4E3B\u9898</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;coy&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4FEE\u6539\u7535\u8111\u54CD\u5E94\u5F0F\u5E03\u5C40\u65AD\u70B9</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u9ED8\u8BA4\u503C</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* responsive breakpoints */</span>

<span class="token comment">// wide screen</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1440px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// desktop</span>
<span class="token property"><span class="token variable">$laptop</span></span><span class="token punctuation">:</span> 1280px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// narrow desktop / iPad</span>
<span class="token property"><span class="token variable">$pad</span></span><span class="token punctuation">:</span> 959px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// wide mobile</span>
<span class="token property"><span class="token variable">$tablet</span></span><span class="token punctuation">:</span> 719px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// narrow mobile</span>
<span class="token property"><span class="token variable">$mobile</span></span><span class="token punctuation">:</span> 419px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Content Class */</span>
<span class="token property"><span class="token variable">$content-class</span></span><span class="token punctuation">:</span> <span class="token string">&quot;.theme-hope-content&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Color list */</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> #cf1322<span class="token punctuation">,</span> #fa541c<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #2ecc71<span class="token punctuation">,</span> #25a55b<span class="token punctuation">,</span> #10a5a5<span class="token punctuation">,</span> #096dd9<span class="token punctuation">,</span> #aa6fe9<span class="token punctuation">,</span>
  #eb2f96 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">/* Code Block */</span>
<span class="token comment">// theme</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;one-light&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$code-dark-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;one-dark&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// code languages</span>
<span class="token property"><span class="token variable">$code-lang</span></span><span class="token punctuation">:</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;cpp&quot;</span> <span class="token string">&quot;cs&quot;</span> <span class="token string">&quot;css&quot;</span> <span class="token string">&quot;dart&quot;</span> <span class="token string">&quot;docker&quot;</span> <span class="token string">&quot;fs&quot;</span> <span class="token string">&quot;go&quot;</span> <span class="token string">&quot;html&quot;</span> <span class="token string">&quot;java&quot;</span> <span class="token string">&quot;js&quot;</span>
  <span class="token string">&quot;json&quot;</span> <span class="token string">&quot;kt&quot;</span> <span class="token string">&quot;less&quot;</span> <span class="token string">&quot;makefile&quot;</span> <span class="token string">&quot;md&quot;</span> <span class="token string">&quot;php&quot;</span> <span class="token string">&quot;py&quot;</span> <span class="token string">&quot;rb&quot;</span> <span class="token string">&quot;rs&quot;</span> <span class="token string">&quot;sass&quot;</span> <span class="token string">&quot;scss&quot;</span> <span class="token string">&quot;sh&quot;</span>
  <span class="token string">&quot;ts&quot;</span> <span class="token string">&quot;vue&quot;</span> <span class="token string">&quot;yml&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> \u7528\u4E8E CSS \u53D8\u91CF\u5199\u5165\uFF0C\u4EE5\u4E0B\u662F\u652F\u6301\u7684\u914D\u7F6E\u4E0E\u9ED8\u8BA4\u503C\u3002</p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u6B64\u5904\u7684\u6240\u6709\u53D8\u91CF (\u5305\u62EC\u4F60\u65B0\u6DFB\u52A0\u7684\u53D8\u91CF) \u90FD\u4F1A\u88AB\u8F6C\u6362\u4E3A kebab-case \u7684\u683C\u5F0F\u6CE8\u5165\u4E3A CSS \u53D8\u91CF\u3002</p><p>\u5982 <code>$theme-color</code> \u4F1A\u88AB\u6CE8\u5165\u4E3A <code>--theme-color</code>\uFF0C<code>$backgroundColor</code> \u4F1A\u88AB\u6CE8\u5165\u4E3A <code>--background-color</code>\u3002</p></div><h3 id="\u989C\u8272\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272\u8BBE\u7F6E" aria-hidden="true">#</a> \u989C\u8272\u8BBE\u7F6E</h3><p>\u5BF9\u4E8E\u6240\u6709\u989C\u8272\uFF0C\u5982\u679C\u5176\u5728\u6D45\u8272\u6A21\u5F0F\u548C\u6DF1\u8272\u6A21\u5F0F\u989C\u8272\u76F8\u540C\uFF0C\u53EF\u76F4\u63A5\u8BBE\u7F6E\uFF1B\u5426\u5219\uFF0C\u8BF7\u8BBE\u7F6E\u4E00\u4E2A Map \u7C7B\u578B\u7684 Sass \u53D8\u91CF\u5206\u522B\u7ED9\u51FA\u6D45\u8272\u548C\u6DF1\u8272\u6A21\u5F0F\u4E0B\u7684\u989C\u8272\u503C\u3002</p><p>\u53EF\u7528\u7684\u989C\u8272\u53D8\u91CF:</p><ul><li><code>$theme-color</code>: \u4E3B\u9898\u8272</li><li><code>$text-color</code>: \u5B57\u4F53\u989C\u8272</li><li><code>$bg-color</code>: \u80CC\u666F\u8272</li><li><code>$bg-color-light</code>: \u6D45\u80CC\u666F\u8272</li><li><code>$bg-color-active</code>: \u7528\u4E8E\u6FC0\u6D3B\u5143\u7D20\u7684\u80CC\u666F\u8272</li><li><code>$bg-color-back</code>: \u7528\u4E8E\u80CC\u666F\u5143\u7D20\u7684\u80CC\u666F\u8272</li><li><code>$bg-color-float</code>: \u7528\u4E8E\u6D6E\u52A8\u5143\u7D20\u7684\u80CC\u666F\u8272</li><li><code>$bg-color-blur</code>: \u7528\u4E8E\u6A21\u7CCA\u5143\u7D20\u7684\u80CC\u666F\u8272</li><li><code>$bg-color-float-blur</code>: \u7528\u4E8E\u6D6E\u52A8\u6A21\u7CCA\u5143\u7D20\u7684\u80CC\u666F\u8272</li><li><code>$border-color</code>: \u8FB9\u6846\u989C\u8272</li><li><code>$box-shadow</code>: \u5143\u7D20\u9634\u5F71\u8272</li><li><code>$card-shadow</code>: \u5361\u7247\u9634\u5F71\u8272</li></ul><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u5C06\u4E3B\u9898\u989C\u8272\u8BBE\u7F6E\u4E3A\u7EA2\u8272</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u8FB9\u6846\u989C\u8272\u52A0\u6DF1</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #444<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u9ED8\u8BA4\u503C</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #1d2025<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-light</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #252934<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-active</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #252934<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-back</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #1d2025<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-float</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #252934<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-blur</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>29<span class="token punctuation">,</span> 32<span class="token punctuation">,</span> 37<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$bg-color-float-blur</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>37<span class="token punctuation">,</span> 41<span class="token punctuation">,</span> 52<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #302d28<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// shadow</span>
<span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #f0f1f2<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #282a32<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$card-shadow</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u5E03\u5C40\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40\u8BBE\u7F6E" aria-hidden="true">#</a> \u5E03\u5C40\u8BBE\u7F6E</h3><p>\u53EF\u7528\u7684\u5E03\u5C40\u53D8\u91CF:</p><p>\u5BFC\u822A\u680F:</p><ul><li><code>$navbar-height</code>: \u5BFC\u822A\u680F\u9AD8\u5EA6</li><li><code>$navbar-horizontal-padding</code>: \u5BFC\u822A\u680F\u6C34\u5E73\u586B\u5145</li><li><code>$navbar-vertical-padding</code>: \u5BFC\u822A\u680F\u5782\u76F4\u586B\u5145</li><li><code>$navbar-mobile-height</code>: \u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u5BFC\u822A\u680F\u9AD8\u5EA6</li><li><code>$navbar-mobile-horizontal-padding</code>: \u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u5BFC\u822A\u680F\u6C34\u5E73\u586B\u5145</li><li><code>$navbar-mobile-vertical-padding</code>: \u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u5BFC\u822A\u680F\u5782\u76F4\u586B\u5145</li></ul><p>\u4FA7\u8FB9\u680F:</p><ul><li><code>$sidebar-width</code>: \u4FA7\u8FB9\u680F\u5BBD\u5EA6</li><li><code>$sidebar-mobile-width</code>: \u79FB\u52A8\u8BBE\u5907\u4FA7\u8FB9\u680F\u5BBD\u5EA6</li></ul><p>\u5185\u5BB9:</p><ul><li><code>$content-width</code>: \u4E3B\u8981\u5185\u5BB9\u7684\u5BBD\u5EA6</li><li><code>$home-page-width</code>: \u4E3B\u9875\u5185\u5BB9\u7684\u5BBD\u5EA6</li></ul><p>\u5B57\u4F53:</p><ul><li><code>$font-family</code>: \u666E\u901A\u6587\u672C\u4E0A\u4F7F\u7528\u7684\u5B57\u4F53</li><li><code>$font-family-fancy:</code> \u7528\u4E8E\u82B1\u54E8\u5143\u7D20\u7684\u5B57\u4F53</li></ul><p>\u4EE3\u7801:</p><ul><li><code>$font-family-code</code>: \u4EE3\u7801\u4E0A\u4F7F\u7528\u7684\u5B57\u4F53</li><li><code>$line-numbers-width</code>: \u4EE3\u7801\u5757\u4E2D\u884C\u53F7\u7684\u5BBD\u5EA6</li></ul><p>\u8FC7\u6E21:</p><ul><li><code>$color-transition</code>: \u7528\u4E8E\u989C\u8272\u7684\u8FC7\u6E21</li><li><code>$transform-transition</code>: \u7528\u4E8E\u53D8\u6362\u52A8\u753B\u7684\u8FC7\u6E21</li></ul><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u52A0\u5927\u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u5BFC\u822A\u680F\u9AD8\u5EA6</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

<span class="token comment">// \u5C06 Windows \u7F51\u9875\u5B57\u4F53\u8BBE\u7F6E\u4E3A\u601D\u6E90\u5B8B\u4F53 (\u5F53\u7136\u4F60\u4E5F\u8981\u8BB0\u5F97\u5BFC\u5165\u8FD9\u4E2A\u5B57\u4F53)</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Noto Serif SC&quot;, &quot;Microsoft Yahei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;ST Heiti&quot;, sans-serif&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u9ED8\u8BA4\u503C</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* layout */</span>
<span class="token comment">// navbar</span>
<span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 3.75rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-horizontal-padding</span></span><span class="token punctuation">:</span> 1.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-vertical-padding</span></span><span class="token punctuation">:</span> 0.7rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-horizontal-padding</span></span><span class="token punctuation">:</span> 1rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$navbar-mobile-vertical-padding</span></span><span class="token punctuation">:</span> 0.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// sidebar</span>
<span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 18rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sidebar-mobile-width</span></span><span class="token punctuation">:</span> 16rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// content</span>
<span class="token property"><span class="token variable">$content-width</span></span><span class="token punctuation">:</span> 740px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$home-page-width</span></span><span class="token punctuation">:</span> 1160px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// font</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-family-fancy</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia Pro, Crimson, Georgia, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// code</span>
<span class="token property"><span class="token variable">$font-family-code</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace&#39;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-numbers-width</span></span><span class="token punctuation">:</span> 2.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// transition</span>
<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> <span class="token string">&quot;0.3s ease&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> <span class="token string">&quot;0.3s ease&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>\u586B\u5165\u6B64\u6587\u4EF6\u6240\u6709\u5185\u5BB9\u90FD\u5C06\u89E3\u6790\u4E3A\u6807\u51C6 CSS\uFF0C\u7136\u540E\u5728\u4E3B\u9898\u548C\u63D2\u4EF6\u6837\u5F0F\u4E4B\u540E\u6CE8\u5165\u3002</p><p>\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u6DFB\u52A0\u65B0\u6837\u5F0F\u6216\u8986\u76D6\u6837\u5F0F:</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u5728\u5BFC\u822A\u680F\u4E2D\u5C06\u7AD9\u70B9\u540D\u79F0\u6539\u4E3A\u659C\u4F53</span>
<span class="token selector">.site-name </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,39);function d(r,k){return e(),t("div",null,[l,i,p(" more "),u])}const b=a(c,[["render",d],["__file","style.html.vue"]]);export{b as default};
