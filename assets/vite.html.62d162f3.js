import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as d,g as p,a as u,w as s,h as t,r as h,b as e,e as n}from"./app.7119fecc.js";const m={},v=t('<h2 id="slow-in-a-cold-boot-with-vite" tabindex="-1"><a class="header-anchor" href="#slow-in-a-cold-boot-with-vite" aria-hidden="true">#</a> Slow in a cold boot with Vite</h2><p>This is the expect behaviour. We are adding more features, which means we have 2\xD7 to 8\xD7 lines of code comparing with <code>@vuepress/theme-default</code> according to the functions you are using. So transpiling and sending the theme and plugins code to broswer is expected to increase from <code>0.8s - 2s</code> in <code>@vuepress/theme-default</code> to <code>3s - 10s</code> (range due to machine performance).</p><div class="custom-container info"><p class="custom-container-title">Tree-shaking burden</p><p>In order to fully support Tree-shaking in functionality and styles, themes and plugins do additional work, including modularization, partial injection, generation of temp files, etc. These extra behaviors ensure that unused feature code is removed at build stage, but it also means that more logic needs to be performed and more fragmented files need to be loaded in development mode.</p><p>Dude, you can&#39;t expect to have the full power of tree-shaking support and still be extremely fast when the development server starts up, they are contradictory.</p></div><div class="custom-container info"><p class="custom-container-title">style system</p><p>In order to make component styles binding with component, we split the styles according to the component hierarchy and imported them in components, which greatly slowed down the speed.</p><ul><li><p><code>@vuepress/theme-default</code> is placing all the styles together at <code>styles</code> folder and importing them entirly, so that <code>sass</code> will only need to compile once and vite only need to send 1 extra web request. That\u2019s why it\u2019s fast.</p><p>But this will let style unbinded with components, and they will be injected anyway. So that when you override a component or a layout, you have to override old styles to build styles you want.</p></li><li><p><code>vuepress-theme-hope</code> is binding styles with components, but that means <code>sass</code> has to compile styles for each component, and vite need to send an extra request for each components. Due to <code>vuepress-theme-hope</code> has 2\xD7 to 6\xD7 components (depending on whether you enable blog featues or not) comparing with <code>@vuepress/theme-default</code>, it will take extra time of <code>2.4s - 4s</code> for that.</p><p>But, you can easily override a component together with it\u2019s styles in this way.</p></li></ul><p>So, due to the above reasons, <code>vuepress-theme-hope</code> will have an average of 4\xD7 code and 10\xD7 requests comparing with <code>@vuepress/theme-default</code>, so the time increasing from <code>2s</code> to <code>10s</code> is reasonable and expected.</p></div><div class="custom-container tip"><p class="custom-container-title">No effect on HMR and online speed</p><p>Don&#39;t worry, the above extra overhead mainly exists in code boot. Due to the large size of the unoptimized code in the development environment, the corresponding time will also increase after refreshing.</p><ul><li><p>These extra overheads do not affect HMR, so when editing the Markdown file, the page&#39;s HMR response can still remain at the 100 ms level.</p></li><li><p>Unused code twill be removed during the build phase with well design, so the production environment usually only adds additional 200 KB - 500 KB size in JS entry comparing the default theme and about 100 ms of extra script execution time, so the online impact is very small.</p></li></ul></div><h2 id="import-in-css-does-not-work" tabindex="-1"><a class="header-anchor" href="#import-in-css-does-not-work" aria-hidden="true">#</a> <code>@import()</code> in CSS does not work</h2><p>In VuePress2, importing web CSS via <code>@import</code> in <code>index.scss</code> has no effect. You may need to manually import it in the <code>head</code> option of your VuePress configuration.</p>',7),g=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
  head`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token punctuation"},"["),n(`
      `),e("span",{class:"token string"},'"link"'),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"{"),n(`
        rel`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},'"stylesheet"'),e("span",{class:"token punctuation"},","),n(`
        href`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},'"YOUR_CSS_URL"'),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`

  `),e("span",{class:"token comment"},"// ..."),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"head"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token punctuation"},"["),n(`
      `),e("span",{class:"token string"},'"link"'),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token literal-property property"},"rel"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},'"stylesheet"'),e("span",{class:"token punctuation"},","),n(`
        `),e("span",{class:"token literal-property property"},"href"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},'"YOUR_CSS_URL"'),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`

  `),e("span",{class:"token comment"},"// ..."),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=t('<div class="custom-container info"><p class="custom-container-title">Reason</p><ol><li>CSS imported via <code>@import</code> in Sass will be compiled into standard CSS <code>@import</code> syntax.</li><li>The CSS <code>@import</code> syntax only works at the top of css file.</li><li>To give user styles a higher priority, we will import user styles after theme and plugin styles.</li><li>During vite builds VuePress2 app, all styles are compressed into a single CSS file.</li></ol><p>The above results in the user\u2019s CSS <code>@import</code> imports in Sass appearing in the middle of the final CSS file and thus invalid.</p><p>The default theme also has the same problem, and this cannot be fixed on the theme side.</p></div>',1);function k(y,w){const a=h("CodeTabs");return r(),d("div",null,[v,p(` \`\`\`js 5-13}
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  head: [
    [
      "link",
      {
        rel: "preload",
        as: "style",
        onload: 'this.onload=null;this.rel="stylesheet"',
        href: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",
      },
    ],
  ],

  // ...
});
\`\`\` `),u(a,{id:"64",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:o,value:i,isActive:l})=>[g]),tab1:s(({title:o,value:i,isActive:l})=>[b]),_:1}),f])}const _=c(m,[["render",k],["__file","vite.html.vue"]]);export{_ as default};
