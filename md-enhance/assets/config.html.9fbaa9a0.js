import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,b as n,d as s,a as e,f as c,e as t,r as p}from"./app.962ca9ea.js";const d={},r=n("p",null,"You can pass these options to the plugin:",-1),u=n("h2",{id:"gfm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gfm","aria-hidden":"true"},"#"),s(" gfm")],-1),m=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"boolean")]),n("li",null,[s("Default: "),n("code",null,"false")])],-1),v=n("p",null,"Whether to support full GFM syntax.",-1),b={class:"custom-container note"},h=n("p",{class:"custom-container-title"},"Note",-1),k={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"We are not 100% supporting it to be honestly, we only supply it\u2019s syntax including tasklists, footnote and so on.",-1),f=n("p",null,[s("Some of the behavior might be different, for example to allow Vue syntax, we are not disallowing "),n("code",null,"<script>"),s(" tags. But in most situation, the behavior should be same.")],-1),y=t(`<h2 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable custom container including</p><ul><li>info</li><li>note</li><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The last 4 items conflict with default theme and will override it\u2019s style.</p></div><h2 id="linkcheck" tabindex="-1"><a class="header-anchor" href="#linkcheck" aria-hidden="true">#</a> linkCheck</h2><ul><li>Type: <code>&quot;always&quot; | &quot;dev&quot; | &quot;build&quot; | &quot;never&quot; | boolean</code></li><li>Default: <code>&quot;dev&quot;</code></li></ul><p>Whether to enable link check.</p><div class="custom-container note"><p class="custom-container-title">Note</p><ul><li><code>true</code> equals to <code>&#39;always&#39;</code></li><li><code>false</code> equals to <code>&#39;never&#39;</code></li></ul></div><h2 id="vpre" tabindex="-1"><a class="header-anchor" href="#vpre" aria-hidden="true">#</a> vpre</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable v-pre wrapper.</p><h2 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> tabs</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable tabs.</p><h2 id="codetabs" tabindex="-1"><a class="header-anchor" href="#codetabs" aria-hidden="true">#</a> codetabs</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable codetabs.</p><h2 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> align</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable custom align.</p><h2 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> attrs</h2><ul><li><p>Type: <code>AttrsOptions | boolean</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * left delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * right delimiter
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * allowed attributes
   *
   * <span class="token keyword">@description</span> An empty list means allowing all attribute
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable attribute cutomize support.</p><h2 id="sup" tabindex="-1"><a class="header-anchor" href="#sup" aria-hidden="true">#</a> sup</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the upper format support.</p><h2 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable the lower corner format support.</p><h2 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> footnote</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable footnote format support.</p><h2 id="lazyload" tabindex="-1"><a class="header-anchor" href="#lazyload" aria-hidden="true">#</a> lazyLoad</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to lazy load every images in page in native way.</p><h2 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable mark support.</p><h2 id="imagemark" tabindex="-1"><a class="header-anchor" href="#imagemark" aria-hidden="true">#</a> imageMark</h2><ul><li>Type: <code>ImageMarkOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enable image mark support.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** lightmode only IDs */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** darkmode only IDs */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> tasklist</h2><ul><li>Type: <code>TaskListOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable tasklist format support. You can pass an object to config task list.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="katex" tabindex="-1"><a class="header-anchor" href="#katex" aria-hidden="true">#</a> katex</h2><ul><li>Type: <code>KatexOptions &amp; { mhchem?: boolean } | boolean</code></li><li>Default: <code>false</code></li></ul>`,49),x=n("p",null,[s("Whether to enable "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"TeX")]),n("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])]),s(" syntax support through "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"KaTeX")]),n("annotation",{encoding:"application/x-tex"},"\\KaTeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"K"),n("span",{class:"mspace",style:{"margin-right":"-0.17em"}}),n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6833em"}},[n("span",{style:{top:"-2.905em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm mtight sizing reset-size6 size3"},"A")])])])])]),n("span",{class:"mspace",style:{"margin-right":"-0.15em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])])]),s(". You can pass an object to config "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"KaTeX")]),n("annotation",{encoding:"application/x-tex"},"\\KaTeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"K"),n("span",{class:"mspace",style:{"margin-right":"-0.17em"}}),n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6833em"}},[n("span",{style:{top:"-2.905em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm mtight sizing reset-size6 size3"},"A")])])])])]),n("span",{class:"mspace",style:{"margin-right":"-0.15em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])])]),s(".")],-1),w=n("p",null,[s("In particular, you can enable the mhchem extension with "),n("code",null,"katex.mhchem: true"),s(".")],-1),q={href:"https://katex.org/docs/options.html",target:"_blank",rel:"noopener noreferrer"},T=n("h2",{id:"mathjax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mathjax","aria-hidden":"true"},"#"),s(" mathjax")],-1),_=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"MathJaxOptions | boolean")]),n("li",null,[s("Default: "),n("code",null,"false")])],-1),D=n("p",null,[s("Whether to enable "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"TeX")]),n("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])]),s(" syntax support through Math Jax. You can pass an object to config Math Jax.")],-1),P={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/src/shared/mathjax.ts",target:"_blank",rel:"noopener noreferrer"},W=t(`<h2 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h2><ul><li><p>Type: <code>IncludeOptions | boolean</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * handle include filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  getPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether deep include files in included markdown files
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable Markdown import support. You can pass in a function for path resolution.</p><h2 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> chart</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable chart support</p><h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable ECharts support</p><h2 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> flowchart</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable flowchart support</p><h2 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> mermaid</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul>`,14),M={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},O=t(`<h2 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> stylize</h2><ul><li><p>Type: <code>StylizeOptions | false</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tag name
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attributes settings
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tag content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StylizeItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Inline token matcher
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Content Replacer
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> MarkdownEnv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StylizeOptions</span> <span class="token operator">=</span> StylizeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Stylize inline tokens to create snippet you want.</p><h2 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> playground</h2><ul><li><p>Type: <code>PlaygroundGlobalOptions</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CompilerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Code block extension
   *
   * <span class="token keyword">@description</span> It&#39;s based on filename, not code fence language
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code block content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of Playground
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map file name
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground iles info
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/** File name */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** File detail */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground settings
   *
   * <span class="token keyword">@description</span> It&#39;s parsed result of json content after setting directive
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * hash key based on playground content
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Playground container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground component name
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Props getter
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSPresetPlaygroundOptions</span> <span class="token keyword">extends</span> <span class="token class-name">CompilerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://www.typescriptlang.org/play&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VuePresetPlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://sfc.vuejs.org/&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to use dev version
   *
   * <span class="token keyword">@default</span> false
   */</span>
  dev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundGlobalOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Playground presets */</span>
  presets<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ts&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vue&quot;</span> <span class="token operator">|</span> PlaygroundOptions<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Playground config */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ts<span class="token operator">?</span><span class="token operator">:</span> TSPresetPlaygroundOptions<span class="token punctuation">;</span>
    vue<span class="token operator">?</span><span class="token operator">:</span> VuePresetPlaygroundOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Playground options.</p><h2 id="vueplayground" tabindex="-1"><a class="header-anchor" href="#vueplayground" aria-hidden="true">#</a> vuePlayground</h2><ul><li><p>Type: <code>VuePlaygroundOptions | boolean</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether to show code in playground
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify the version of vue
   */</span>
  vueVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify default URL to import Vue runtime from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/runtime-dom@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/runtime-dom.esm-browser.js&quot;
   */</span>
  defaultVueRuntimeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Specify default URL to import Vue Server Renderer from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/server-renderer@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/server-renderer.esm-browser.js&quot;
   */</span>
  defaultVueServerRendererURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable repl&#39;s editor resizable
   *
   * <span class="token keyword">@default</span> true
   */</span>
  autoResize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show JS, CSS, SSR panel
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCompileOutput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show import map
   *
   * <span class="token keyword">@default</span> true
   */</span>
  showImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to clear console
   *
   * <span class="token keyword">@default</span> false
   */</span>
  clearConsole<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout
   *
   * <span class="token keyword">@default</span> &#39;vertical&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;horizontal&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Options to configure the \`vue/compiler-sfc\`
   */</span>
  sfcOptions<span class="token operator">?</span><span class="token operator">:</span> SFCOptions<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> true
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li></ul><p>Whether to enable vue playground support.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><ul><li>Type: <code>CodeDemoGlobalOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable code demo support.</p><h3 id="demo-jslib" tabindex="-1"><a class="header-anchor" href="#demo-jslib" aria-hidden="true">#</a> demo.jsLib</h3><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle requires an external JS library for dating.</p><h3 id="demo-csslib" tabindex="-1"><a class="header-anchor" href="#demo-csslib" aria-hidden="true">#</a> demo.cssLib</h3><ul><li>Type: <code>string[]</code></li><li>Required: No</li></ul><p>CodePen, JsFiddle need an external CSS library for dating.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The above two options are only used by third-party code demo service, you need to import these libraries in <code>head</code>.</p></div><h3 id="demo-jsfiddle" tabindex="-1"><a class="header-anchor" href="#demo-jsfiddle" aria-hidden="true">#</a> demo.jsfiddle</h3><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the JSFiddle button</p><h3 id="demo-codepen" tabindex="-1"><a class="header-anchor" href="#demo-codepen" aria-hidden="true">#</a> demo.codepen</h3><ul><li>Type: <code>boolean</code></li><li>Default value: <code>true</code></li></ul><p>Whether to display the CodePen button</p><h3 id="demo-codepenlayout" tabindex="-1"><a class="header-anchor" href="#demo-codepenlayout" aria-hidden="true">#</a> demo.codepenLayout</h3><ul><li>Type: <code>&quot;top&quot; | &quot;left&quot; | &quot;correct&quot;</code></li><li>Default value: <code>&quot;left&quot;</code></li></ul><p>CodePen editor layout</p><h3 id="demo-codepeneditors" tabindex="-1"><a class="header-anchor" href="#demo-codepeneditors" aria-hidden="true">#</a> demo.codepenEditors</h3><ul><li>Type: <code>string</code></li><li>Default value: <code>&quot;101&quot;</code></li></ul><p>CodePen editor status</p><h3 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> others</h3><p>The following are the library links used by the third-party code demo service. Unless your environment cannot visit unpkg or the speed is slow, you probably don\u2019t need to override the default values.</p><h4 id="demo-babel" tabindex="-1"><a class="header-anchor" href="#demo-babel" aria-hidden="true">#</a> demo.babel</h4><p>Default value: <code>&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</code></p><h4 id="demo-vue" tabindex="-1"><a class="header-anchor" href="#demo-vue" aria-hidden="true">#</a> demo.vue</h4><p>Default value: <code>&quot;https://unpkg.com/vue/dist/vue.global.prod.js&quot;</code></p><h4 id="demo-react" tabindex="-1"><a class="header-anchor" href="#demo-react" aria-hidden="true">#</a> demo.react</h4><p>Default value: <code>&quot;https://unpkg.com/react/umd/react.production.min.js&quot;</code></p><h4 id="demo-reactdom" tabindex="-1"><a class="header-anchor" href="#demo-reactdom" aria-hidden="true">#</a> demo.reactDOM</h4><p>Default value: <code>&quot;https://unpkg.com/react-dom/umd/react-dom.production.min.js&quot;</code></p><h2 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> presentation</h2><ul><li>Type: <code>PresentationOptions | boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable presentation syntax support.</p><p>You can set it with an object, the object will be used to config reveal.js.</p><h3 id="presentation-plugins" tabindex="-1"><a class="header-anchor" href="#presentation-plugins" aria-hidden="true">#</a> presentation.plugins</h3><ul><li><p>Type: <code>RevealPlugin[]</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RevealPlugin</span> <span class="token operator">=</span> <span class="token string">&quot;highlight&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;math&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;search&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;notes&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Plugins you want to use on reveal.js.</p><p>Acceptable values are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul>`,50),R=t(`<h3 id="presentation-revealconfig" tabindex="-1"><a class="header-anchor" href="#presentation-revealconfig" aria-hidden="true">#</a> presentation.revealConfig</h3><ul><li>Type: <code>Partial&lt;RevealOptions&gt;</code></li><li>Required: No</li></ul><p>Config which you want to pass to reveal.js.</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>Type: <code>number</code></li><li>Default: <code>500</code></li></ul><p>The delay of operating dom, in ms.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p></div><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>Type: <code>MarkdownEnhanceLocaleConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Default Title text for info block
   */</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for note block
   */</span>
  note<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for tip block
   */</span>
  tip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for warning block
   */</span>
  warning<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for danger block
   */</span>
  danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for details block
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> MarkdownEnhanceLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for Markdown Enhance Plugin.</p>`,10);function C(S,j){const a=p("ExternalLinkIcon");return i(),o("div",null,[r,u,m,v,n("div",b,[h,n("p",null,[s("For full GFM syntax, see "),n("a",k,[s("GFM"),e(a)]),s(".")]),g,f]),y,x,w,n("p",null,[s("Please see "),n("a",q,[s("Katex Docs"),e(a)]),s(" for available options.")]),T,_,D,n("p",null,[s("Please see "),n("a",P,[s("source code"),e(a)]),s(" for available options.")]),W,n("p",null,[s("Whether to enable "),n("a",M,[s("Mermaid"),e(a)]),s(" support.")]),O,c(' - `"anything"`\n- `"audio"`\n- `"chalkboard"` '),R])}const E=l(d,[["render",C],["__file","config.html.vue"]]);export{E as default};
