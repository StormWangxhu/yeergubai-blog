import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as a,g as i,b as e,e as n,a as d,h as l,r}from"./app.7119fecc.js";const c="/yeergubai-blog/assets/slides-light.4d065fbe.png",m="/yeergubai-blog/assets/slides-dark.377abe9e.png",p={},u=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" allows you to add slides pages.")],-1),h=e("p",null,[n("You need to set "),e("code",null,"layout: Slide"),n(" in the frontmatter of the corresponding page to enable the slides page.")],-1),g=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),_={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},v=l('<p><img src="'+c+'" alt="Slide page screenshot" data-mode="lightmode-only" loading="lazy"><img src="'+m+`" alt="Slide page screenshot" data-mode="darkmode-only" loading="lazy"></p><h2 id="attention" tabindex="-1"><a class="header-anchor" href="#attention" aria-hidden="true">#</a> Attention</h2><div class="custom-container warning"><p class="custom-container-title">Enable presentation</p><p>You should enable presentation feature in <code>vuepress-plugin-md-enhance</code> by setting <code>plugins.mdEnhance.presentation</code> in theme options, otherwise the layout won\u2019t be rendered correctly.</p></div><div class="custom-container warning"><p class="custom-container-title">No multiple slides</p><p>You should only include a single slide syntax on this page to avoid rendering problems.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@slidestart [your theme]

// your slides

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4);function b(f,y){const s=r("ExternalLinkIcon");return o(),a("div",null,[u,h,i(" more "),g,e("p",null,[e("a",_,[n("Here is a demo containing all the slide features"),d(s)]),n(".")]),v])}const w=t(p,[["render",b],["__file","slides.html.vue"]]);export{w as default};
