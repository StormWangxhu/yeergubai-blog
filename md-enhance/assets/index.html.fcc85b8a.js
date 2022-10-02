import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as m,c as h,a as s,w as t,b as e,d as n,e as l,r as o}from"./app.962ca9ea.js";const b={},v=e("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),k=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),g=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  plugins`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token function"},"mdEnhancePlugin"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token comment"},"// Enable presentation"),n(`
      presentation`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"plugins"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token function"},"mdEnhancePlugin"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token comment"},"// Enable presentation"),n(`
      `),e("span",{class:"token literal-property property"},"presentation"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=l('<p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><!-- - `&quot;anything&quot;`\n- `&quot;audio&quot;`\n- `&quot;chalkboard&quot;` --></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p>',4),y={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},w=l(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),q=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),j=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),E=e("p",null,[n("You can set "),e("code",null,"reveal"),n(" to pass options to reveal.js per page in frontmatter, you can also set "),e("code",null,"presentation"),n(" in plugin options to set reveal.js globally.")],-1),P={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function C(R,F){const c=o("CodeTabs"),a=o("ExternalLinkIcon"),i=o("RouterLink");return m(),h("div",null,[v,k,s(c,{id:"6",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:r,value:u,isActive:d})=>[g]),tab1:t(({title:r,value:u,isActive:d})=>[_]),_:1}),f,e("p",null,[n("Reveal.js also provides "),e("a",y,[n("more plugins"),s(a)]),n(". If you need a specific plugin, please submit a "),e("a",x,[n("Feature Request"),s(a)]),n(" on GitHub.")]),w,e("p",null,[n("For details, see "),s(i,{to:"/guide/presentation/themes.html"},{default:t(()=>[n("Themes demo")]),_:1}),n(".")]),q,e("p",null,[n("Please see "),s(i,{to:"/guide/presentation/demo.html"},{default:t(()=>[n("Presentation Demo")]),_:1})]),j,E,e("p",null,[n("For more options, see "),e("a",P,[n("reveal.js config"),s(a)]),n(". For more usage, see "),e("a",T,[n("reveal.js documatation"),s(a)])])])}const B=p(b,[["render",C],["__file","index.html.vue"]]);export{B as default};
