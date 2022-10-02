import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as t,b as n,e as s,a as e,h as c,r as o}from"./app.7119fecc.js";const p={},d=c(`<p>You can add the following options to <code>locales[localePath]</code> in theme options to customize the theme&#39;s multilingual options.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HopeThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Current lang code
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Outlook
   */</span>
  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Theme Color
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Theme mode
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Fullscreen text
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Blog
   */</span>
  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** \u6587\u7AE0\u6587\u5B57 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u6587\u7AE0\u5217\u8868\u6587\u5B57 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5206\u7C7B\u6587\u5B57 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u6807\u7B7E\u6587\u5B57 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u65F6\u95F4\u8F74\u6587\u5B57 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u65F6\u95F4\u8F74\u6807\u9898\u6587\u5B57 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5168\u90E8\u6587\u5B57 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u4E2A\u4EBA\u4ECB\u7ECD */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u641C\u85CF\u6587\u5B57 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u5E7B\u706F\u7247 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** \u52A0\u5BC6 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Pagination
   */</span>
  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Previous page button label text
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next page button label text
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation hint label text
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation button label text
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Error text when invalid page number
     *
     * <span class="token keyword">@description</span> \`$page\` will be replaced by total page number automatically
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Encrypt
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Aria label for encrypt icon
     */</span>
    iconLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Password placeholder
     */</span>
    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Whether remember password
     */</span>
    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Passwrod error hint
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Navbar
   */</span>
  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Aria label of of the language selection dropdown
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Language name of current locale
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page meta
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Author label text
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Writing date label text
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Label text marked as original
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page views label text
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Tag label text
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Category label text
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Expect reading time label text
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Words label Text
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Table of contents
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Previous link
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next link
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * last updated text
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Contributors text
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Edit link text
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 404 page msgs
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to homepage
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to last page
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * screen reader only message in \`&lt;ExternalLinkIcon&gt;\`
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Meanwhile, some i18n options are controlled by plugins, including:</p>`,3),r={href:"https://vuepress-theme-hope.github.io/v2/comment/config/waline.html#walinelocales",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vuepress-theme-hope.github.io/v2/copy-code/config.html#locales",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vuepress-theme-hope.github.io/v2/copyright/config.html#locales",target:"_blank",rel:"noopener noreferrer"},u={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/config.html#locales",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vuepress-theme-hope.github.io/v2/photo-swipe/config.html#locales",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuepress-theme-hope.github.io/v2/pwa/config.html#locales",target:"_blank",rel:"noopener noreferrer"};function g(h,f){const a=o("ExternalLinkIcon");return l(),t("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[n("a",r,[s("plugins.comment.walineLocales"),e(a)]),s(": Waline Comment Service")])]),n("li",null,[n("p",null,[n("a",m,[s("plugins.copyCode.locales"),e(a)]),s(": Code block copy button")])]),n("li",null,[n("p",null,[n("a",v,[s("plugins.copyright.locales"),e(a)]),s(": Copyright information")])]),n("li",null,[n("p",null,[n("a",u,[s("plugins.mdEnhance.locales"),e(a)]),s(": Markdown enhance")])]),n("li",null,[n("p",null,[n("a",b,[s("plugins.photoSwipe.locales"),e(a)]),s(": Photo preview")])]),n("li",null,[n("p",null,[n("a",k,[s("plugins.pwa.locales"),e(a)]),s(": PWA")])])])])}const w=i(p,[["render",g],["__file","i18n.html.vue"]]);export{w as default};
