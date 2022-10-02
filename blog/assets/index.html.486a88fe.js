import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as r,a as l,w as s,b as n,d as e,e as p,r as d}from"./app.92210660.js";const g={},m=n("h2",{id:"how-to-use",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-use","aria-hidden":"true"},"#"),e(" How to use")],-1),b=n("h3",{id:"install",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),e(" Install")],-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-blog2@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-blog2@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-blog2@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("h3",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" blogPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-blog2"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"blogPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" blogPlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-blog2"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"blogPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// your options"),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=p('<h2 id="migrating-from-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-v1" aria-hidden="true">#</a> Migrating from V1</h2><p>This plugin wasn\u2019t released in V1.</p><p>If you were using <code>@vuepress/plugin-blog</code> in VuePress1, you should know that this plugin is targeting a total different level with <code>@vuepress/plugin-blog</code>.</p><ul><li><p><code>@vuepress/plugin-blog</code> is more like a blogging utils collection targeting users.</p><p>It gives you detailed options to filter with frontmatter, dir and other conditions. Also, it&#39;s combined with feed, sitemap, mailchimp, panigation and other blog related features. Mainly, you get collections you want using compicated options, and the results are mixined globally with panigation.</p></li><li><p><code>vuepress-plugin-blog2</code> however, is targeting theme developers, and only have &lt; 1kb gzipped client chunk size.</p><p>Since <code>siteData.pages</code> is no longer available in VuePress2 for scalability reasons, the plugin is only injecting them to routeMeta on node side and provide compoistion apis for you to get them on client side. While it does not provide any related features such as panigation, feed, sitemap. Mainly, you will get collections through functions returning values from page objects, and you will need to use other plugins to provide other features, and handle panigation yourself.</p></li></ul>',4);function x(V,j){const o=d("CodeTabs");return u(),r("div",null,[m,b,l(o,{id:"6",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:s(({title:a,value:t,isActive:i})=>[h]),tab1:s(({title:a,value:t,isActive:i})=>[v]),tab2:s(({title:a,value:t,isActive:i})=>[k]),_:1}),f,l(o,{id:"20",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:a,value:t,isActive:i})=>[_]),tab1:s(({title:a,value:t,isActive:i})=>[y]),_:1}),w])}const T=c(g,[["render",x],["__file","index.html.vue"]]);export{T as default};
