import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as m,c as k,f as v,a,w as e,b as n,d as s,e as t,r as o}from"./app.962ca9ea.js";const b={},g=n("p",null,"Let you insert code demos in your Markdown file.",-1),h=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),s(" Config")],-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Code Demo"),s(`
      demo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Code Demo"),s(`
      `),n("span",{class:"token literal-property property"},"demo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=t(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>You should use the following syntax:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: [type]-demo Optional title text

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html"><span class="token comment">&lt;!-- \u2191 use available ones --&gt;</span>
<span class="token comment">&lt;!-- your code here --&gt;</span>
<span class="token comment">&lt;!-- you can have multiple code block, but each language must appear only once. --&gt;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token comment">// json block is for config</span>
<span class="token punctuation">{</span>
  <span class="token comment">// your config here (optional)</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"Tips",-1),x=t('<p>The plugin support three types:</p><ul><li>normal (default)</li><li>vue</li><li>react</li></ul><h2 id="available-languages" tabindex="-1"><a class="header-anchor" href="#available-languages" aria-hidden="true">#</a> Available Languages</h2><p>You can use different language in your demo block.</p><p>When you set language which can not run on browsers, since the plugin is not able to resolve them, so demo display will be disabled. The plugin will only show the code and provide you a button to open it in CodePen.</p><p>Available HTML languages:</p><ul><li><code>&quot;html&quot;</code> (default)</li><li><code>&quot;slim&quot;</code></li><li><code>&quot;haml&quot;</code></li><li><code>&quot;markdown&quot;</code></li></ul><blockquote><p>You can also use <code>md</code> in code block.</p></blockquote><p>Available JS languages:</p><ul><li><code>&quot;javascript&quot;</code> (default)</li><li><code>&quot;coffeescript&quot;</code></li><li><code>&quot;babel&quot;</code></li><li><code>&quot;livescript&quot;</code></li><li><code>&quot;typescript&quot;</code></li></ul><blockquote><p>You can also use <code>js</code>, <code>ts</code>, <code>coffee</code> and <code>ls</code> in code block.</p></blockquote><p>Available CSS languages:</p><ul><li><code>&quot;css&quot;</code> (default)</li><li><code>&quot;less&quot;</code></li><li><code>&quot;scss&quot;</code></li><li><code>&quot;sass&quot;</code></li><li><code>&quot;stylus&quot;</code></li></ul><blockquote><p>You can also use <code>styl</code> in code block.</p></blockquote><h3 id="not-supported-language-demo" tabindex="-1"><a class="header-anchor" href="#not-supported-language-demo" aria-hidden="true">#</a> Not Supported Language Demo</h3>',15),T=n("div",{class:"language-markdown ext-md line-numbers-mode"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"#"),s(" Title")]),s(`

is very powerful!
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"VuePress Theme Hope"'),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-scss ext-scss line-numbers-mode"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"+ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=t(`<details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: normal-demo A normal demo

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">md</span>
<span class="token code-block language-md"><span class="token title important"><span class="token punctuation">#</span> Title</span>

is very powerful!</span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;VuePress Theme Hope&quot;</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message<span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">scss</span>
<span class="token code-block language-scss"><span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>

  <span class="token selector">+ p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function V(A,E){const l=o("CodeTabs"),c=o("RouterLink"),i=o("CodeDemo");return m(),k("div",null,[g,v(" more "),h,a(l,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:u,value:p,isActive:d})=>[y]),tab1:e(({title:u,value:p,isActive:d})=>[f]),_:1}),q,n("div",_,[w,n("p",null,[s("The json block is optional, for config please see "),a(c,{to:"/config.html#demo"},{default:e(()=>[s("config")]),_:1}),s(".")])]),x,a(i,{id:"code-demo-159",type:"normal",title:"A%20demo%20using%20language%20not%20supported%20by%20browsers",code:"eNotjc1KA0EQhF+lbC+KGsh1xXsOCoKLp76E2U52YLZnne5VQsi72/mBPnVVfd+RpoE6ukefvQgrazb8Sjtgrn/Sdku5Y6VncotWqmqOScy2e+lg3rLu8Qam70U+W/zRjzIJNnUWptczbqhpmUR99bME9UuKJK/tgWlcMz2usqq0Tf/xHpgbOGYhtGRn5bjGkRXYVfUX80MJb/ZtyelCB54wXxtAqqW2Dk2GyIATaxyd/gGW+0yv"},{default:e(()=>[T,C,j]),_:1}),S])}const N=r(b,[["render",V],["__file","index.html.vue"]]);export{N as default};
