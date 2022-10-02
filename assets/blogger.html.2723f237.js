import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,g as p,b as n,a as r,w as e,h as d,r as m,e as s}from"./app.7119fecc.js";const k="/yeergubai-blog/assets/blogger-info-light.5eb00ff1.png",b="/yeergubai-blog/assets/blogger-info-dark.7bced54d.png",v={},g=n("p",null,"Themes allow you to display basic information about the blogger.",-1),h=d('<p><img src="'+k+'" alt="Blogger info" data-mode="lightmode-only" loading="lazy"><img src="'+b+'" alt="Blogger info" data-mode="darkmode-only" loading="lazy"></p><h2 id="avatar-and-blogger-name" tabindex="-1"><a class="header-anchor" href="#avatar-and-blogger-name" aria-hidden="true">#</a> Avatar and blogger name</h2><p>You can config blogger avatar and name displayed through <code>blog.avatar</code> and <code>blog.name</code>.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>If you don\u2019t set those options, they automatically fall back to the site logo (<code>logo</code> in theme options) and site name.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>If you want the avatar to be clipped with round shape, set <code>blog.roundAvatar: true</code>.</p></div><h2 id="motto-social-media-profile-link" tabindex="-1"><a class="header-anchor" href="#motto-social-media-profile-link" aria-hidden="true">#</a> Motto, Social Media &amp; Profile Link</h2><p>You can use <code>blog.description</code> to set your own introduction, motto or slogan.</p><p>You can also specify a personal introduction page link through <code>blog.intro</code>, so when users click on the avatar and name, they will be direct to that page.</p><p>You can also config your social media links with <code>blog.medias</code> option.</p><ul><li><p>If the social media icon is available below, you can set <code>MediaName: MediaLink</code> directly.</p></li><li><p>Otherwise, you should pass in a tuple <code>MediaName: [MediaLink , MediaSvgIconString or MediaSvgIconPath]</code>,</p><p>The second element in the tuple must be a valid SVG string or a full path of a existing SVG file.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">Available social media:</p><ul><li><code>&quot;Baidu&quot;</code></li><li><code>&quot;Bitbucket&quot;</code></li><li><code>&quot;Dingding&quot;</code></li><li><code>&quot;Discord&quot;</code></li><li><code>&quot;Dribbble&quot;</code></li><li><code>&quot;Email&quot;</code></li><li><code>&quot;Evernote&quot;</code></li><li><code>&quot;Facebook&quot;</code></li><li><code>&quot;Flipboard&quot;</code></li><li><code>&quot;Gitee&quot;</code></li><li><code>&quot;GitHub&quot;</code></li><li><code>&quot;Gitlab&quot;</code></li><li><code>&quot;Gmail&quot;</code></li><li><code>&quot;Instagram&quot;</code></li><li><code>&quot;Line&quot;</code></li><li><code>&quot;Linkedin&quot;</code></li><li><code>&quot;Pinterest&quot;</code></li><li><code>&quot;Pocket&quot;</code></li><li><code>&quot;QQ&quot;</code></li><li><code>&quot;Qzone&quot;</code></li><li><code>&quot;Reddit&quot;</code></li><li><code>&quot;Rss&quot;</code></li><li><code>&quot;Steam&quot;</code></li><li><code>&quot;Twitter&quot;</code></li><li><code>&quot;Wechat&quot;</code></li><li><code>&quot;Weibo&quot;</code></li><li><code>&quot;Whatsapp&quot;</code></li><li><code>&quot;Youtube&quot;</code></li><li><code>&quot;Zhihu&quot;</code></li></ul></div>',11),q={class:"custom-container details"},y=n("summary",null,"Example",-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  thene`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    blog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      media`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        GitHub`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        MediaX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        MediaY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"blog"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"media"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub Icon is available"),s(`
        `),n("span",{class:"token literal-property property"},"GitHub"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaX" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon string"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},'// A custom Media called "MediaY" (just an example)'),s(`
        `),n("span",{class:"token literal-property property"},"MediaY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// link"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// icon path"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(M,x){const a=m("CodeTabs");return l(),u("div",null,[g,p(" more "),h,n("details",q,[y,r(a,{id:"200",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:t,value:o,isActive:i})=>[f]),tab1:e(({title:t,value:o,isActive:i})=>[_]),_:1})])])}const G=c(v,[["render",w],["__file","blogger.html.vue"]]);export{G as default};
