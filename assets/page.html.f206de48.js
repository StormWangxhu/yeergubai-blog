import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,b as t,e,a as n,w as l,h as a,r}from"./app.7119fecc.js";const u={},p=a(`<p>VuePress is markdown-centered. Each Markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2><p>By default, the route path of a page is determined by the relative path of your Markdown file.</p><p>Assuming this is the directory structure of your Markdown files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 docs
   \u251C\u2500 guide
   \u2502  \u251C\u2500 getting-started.md
   \u2502  \u2514\u2500 README.md
   \u251C\u2500 contributing.md
   \u2514\u2500 README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=t("code",null,"docs",-1),m={href:"https://v2.vuepress.vuejs.org/reference/cli.md",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"vuepress dev docs",-1),g=a('<table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>',2),v={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You must have noticed that those fields are similar with the Site Config in Config File. You can override <code>lang</code>, <code>title</code>, <code>description</code>, etc., of current page via frontmatter. So you can take frontmatter as page scope config.</p><p>Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.</p>`,3),_={class:"custom-container tip"},b=t("p",{class:"custom-container-title"},"Tips",-1),w={href:"https://v2.vuepress.vuejs.org/reference/frontmatter.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.md",target:"_blank",rel:"noopener noreferrer"},x=t("h2",{id:"content",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#content","aria-hidden":"true"},"#"),e(" Content")],-1),M=t("p",null,[e("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),t("code",null,"<template>"),e(" of Vue SFC.")],-1),E={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function R(V,T){const o=r("ExternalLinkIcon"),s=r("RouterLink");return i(),c("div",null,[p,t("p",null,[e("Take the "),h,e(" directory as your "),t("a",m,[e("sourceDir"),n(o)]),e(", e.g. you are running "),f,e(" command. Then the route paths of your Markdown files would be:")]),g,t("p",null,[e("A Markdown file could contain a "),t("a",v,[e("YAML"),n(o)]),e(" frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:")]),k,t("div",_,[b,t("p",null,[e("Check out the "),t("a",w,[e("Frontmatter Reference"),n(o)]),e(" for a full list of VuePress built-in frontmatter.")]),t("p",null,[e("Check out the "),t("a",y,[e("Default Theme > Frontmatter Reference"),n(o)]),e(" for the frontmatter of default theme.")])]),x,M,t("p",null,[e("With the power of "),t("a",E,[e("markdown-it"),n(o)]),e(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the "),n(s,{to:"/cookbook/vuepress/markdown.html"},{default:l(()=>[e("Markdown")]),_:1}),e(" guide for all the extensions of Markdown in VuePress.")])])}const D=d(u,[["render",R],["__file","page.html.vue"]]);export{D as default};
