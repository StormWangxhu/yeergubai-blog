import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,g as d,b as s,h as l}from"./app.7119fecc.js";const c={},a=s("p",null,"\u6211\u4EEC\u6C38\u8FDC\u6B22\u8FCE\u4F60\u5BF9\u9879\u76EE\u8FDB\u884C\u8D21\u732E! \u8FD9\u91CC\u662F\u4E00\u4EFD\u76F8\u5173\u6307\u5357\u3002",-1),o=l(`<h2 id="\u514B\u9686\u5E76\u5B89\u88C5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u5E76\u5B89\u88C5\u9879\u76EE" aria-hidden="true">#</a> \u514B\u9686\u5E76\u5B89\u88C5\u9879\u76EE</h2><p>\u4F7F\u7528 Git \u514B\u9686\u9879\u76EE\u5230\u672C\u5730\uFF0C\u5E76\u4F7F\u7528 <code>pnpm</code> \u8FDB\u884C\u4F9D\u8D56\u7684\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:vuepress-theme-hope/vuepress-theme-hope.git

<span class="token function">pnpm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u5E76\u672A\u5B89\u88C5 pnpm\uFF0C\u8BF7\u4F7F\u7528\u4E0B\u5217\u547D\u4EE4\u5B89\u88C5\u5B83:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.11.0 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u9879\u76EE\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u6587\u4EF6\u7ED3\u6784</h2><p>\u672C\u9879\u76EE\u662F\u4E00\u4E2A monorepo\uFF0C\u4F7F\u7528 pnpm \u7BA1\u7406\u3002</p><ul><li>docs: \u653E\u7F6E\u5404\u63D2\u4EF6\u4E0E\u4E3B\u9898\u7684\u6587\u6863\uFF0C\u6BCF\u4E2A\u5B50\u6587\u4EF6\u5939\u4E3A\u4E00\u4E2A\u9879\u76EE</li><li>demo: \u4E3B\u9898\u6F14\u793A\u9879\u76EE</li><li>packages: \u653E\u7F6E\u5404\u63D2\u4EF6\u4E0E\u4E3B\u9898\u7684\u4EE3\u7801\uFF0C\u6BCF\u4E2A\u5B50\u6587\u4EF6\u5939\u4E3A\u4E00\u4E2A\u9879\u76EE</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 .github \u2192 GitHub \u914D\u7F6E
\u251C\u2500\u2500 .husky \u2192 husky \u914D\u7F6E
\u2502
\u251C\u2500\u2500 demo \u2192 \u4E3B\u9898\u6F14\u793A\u9879\u76EE
\u2502
\u251C\u2500\u2500 docs \u2192 \u6587\u6863\u76EE\u5F55
\u2502 \u251C\u2500\u2500 blog \u2192 blog2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 comment \u2192 comment2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 components \u2192 components \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 copy-code \u2192 copy-code2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 feed \u2192 feed2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 lightgallery \u2192 lightgallery \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 md-enhance \u2192 md-enhance \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 photo-swipe \u2192 photo-swipe \u6587\u6863
\u2502 \u251C\u2500\u2500 pwa \u2192 pwa2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 reading-time \u2192 reading-time2 \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 sass-palette \u2192 sass-palette \u63D2\u4EF6\u6587\u6863
\u2502 \u251C\u2500\u2500 seo \u2192 seo2 \u63D2\u4EF6\u6587\u6863
\u2502 \u2514\u2500\u2500 theme \u2192 \u4E3B\u9898\u6587\u6863
\u2502
\u251C\u2500\u2500 packages \u2192 \u9879\u76EE\u6E90\u4EE3\u7801
\u2502 \u251C\u2500\u2500 blog2 \u2192 blog2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 comment2 \u2192 comment2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 components \u2192 components \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 copy-code2 \u2192 copy-code2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 create \u2192 create-vuepress-theme-hope \u52A9\u624B
\u2502 \u251C\u2500\u2500 feed2 \u2192 feed2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 lightgallery \u2192 lightgallery \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 md-enhance \u2192 md-enhance \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 photo-swipe \u2192 photo-swipe \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 pwa2 \u2192 pwa2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 reading-time2 \u2192 reading-time2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 sass-palette \u2192 sass-palette \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 seo2 \u2192 seo2 \u63D2\u4EF6
\u2502 \u251C\u2500\u2500 shared \u2192 \u5171\u4EAB\u6587\u4EF6
\u2502 \u251C\u2500\u2500 sitemap2 \u2192 sitemap2 \u63D2\u4EF6
\u2502 \u2514\u2500\u2500 theme \u2192 vuepress-theme-hope \u4E3B\u9898
\u2502
\u251C\u2500\u2500 scripts \u2192 \u547D\u4EE4\u811A\u672C
\u2502
\u251C\u2500\u2500 ... \u2192 \u4E00\u4E9B\u914D\u7F6E\u6587\u4EF6
\u2502
\u251C\u2500\u2500 LICENSE \u2192 \u534F\u8BAE
\u251C\u2500\u2500 package.json \u2192 \u9879\u76EE\u6839 package.json
\u251C\u2500\u2500 README.md \u2192 \u9879\u76EE\u4ECB\u7ECD
\u251C\u2500\u2500 SECURITY.md \u2192 \u5B89\u5168\u653F\u7B56\u6587\u4EF6
\u2502
\u2514\u2500\u2500 tsconfig.* \u2192 TypeScript \u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u6863\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u4FEE\u6539" aria-hidden="true">#</a> \u6587\u6863\u4FEE\u6539</h2><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 docs \u6587\u4EF6\u5939\u5185\u627E\u5230\u5BF9\u5E94\u9879\u76EE\uFF0C\u5E76\u4FEE\u6539\u5BF9\u5E94\u7684 Markdown\u3002</p><p>\u786E\u4FDD <code>pnpm lint</code> \u4E0E <code>pnpm lint:md</code> \u547D\u4EE4\u6CA1\u6709\u9519\u8BEF\u540E\uFF0C\u5373\u53EF\u63D0\u4EA4\u5230 GitHub \u53D1\u8D77 PR\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u9884\u89C8\u6587\u6863</p><p>\u7531\u4E8E\u6587\u6863\u4F7F\u7528\u7684\u662F\u672C\u5730\u4E3B\u9898\u548C\u63D2\u4EF6\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u901A\u8FC7 <code>pnpm build</code> \u6784\u5EFA\u672C\u5730\u9879\u76EE\u3002</p><p>\u4E4B\u540E\u5728 <code>docs</code> \u76EE\u5F55\u4E0B\u7684\u6B63\u786E\u6587\u6863\u9879\u76EE\u6587\u4EF6\u5939\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FD0\u884C <code>pnpm docs:vite-dev</code> (\u4F7F\u7528 vite) \u6216 <code>pnpm docs:webpack-dev</code> (\u4F7F\u7528 webpack)\u3002</p></div><h2 id="\u9879\u76EE\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4FEE\u6539" aria-hidden="true">#</a> \u9879\u76EE\u4FEE\u6539</h2><p>\u6BCF\u4E2A\u9879\u76EE\u7684\u7ED3\u6784\u90FD\u5927\u81F4\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 lib \u2192 \u7F16\u8BD1\u540E\u7684\u8F93\u51FA\u6587\u4EF6
\u2502 \u2502
\u2502 \u251C\u2500\u2500 client \u2192 \u5BA2\u6237\u7AEF\u4FA7\u4EE3\u7801
\u2502 \u2502
\u2502 \u2514\u2500\u2500 node \u2192 Node.js \u4FA7\u4EE3\u7801
\u2502
\u2514\u2500\u2500 src \u2192 \u6E90\u6587\u4EF6
  \u2502
  \u251C\u2500\u2500 client \u2192 \u5BA2\u6237\u7AEF\u4FA7\u4EE3\u7801
  \u2502
  \u251C\u2500\u2500 node \u2192 Node.js \u4FA7\u4EE3\u7801
  \u2502
  \u2514\u2500\u2500 shared \u2192 \u5BA2\u6237\u7AEF\u548C Node.js \u7684\u5171\u4EAB\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5BA2\u6237\u7AEF\u4E00\u4FA7\u4F7F\u7528 ES Module (import/export)\uFF0C\u800C Node.js \u7AEF\u4E00\u4FA7\u4F7F\u7528 commonjs (require/exports)\uFF0C\u4E0D\u80FD\u4EA4\u53C9\u5F15\u7528 node \u548C client \u6587\u4EF6\u5939\u5185\u7684\u4EE3\u7801\u3002</p><ul><li><code>client</code> \u6587\u4EF6\u5939\u5B58\u653E\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF0C\u4F7F\u7528 esm \u683C\u5F0F\u7F16\u8BD1</li><li><code>node</code> \u6587\u4EF6\u5939\u5B58\u653E Node.js \u7AEF\u4EE3\u7801\uFF0C\u4F7F\u7528 cjs \u683C\u5F0F\u7F16\u8BD1</li><li><code>shared</code> \u6587\u4EF6\u5939\u4E3B\u8981\u5B58\u653E TypeScript \u7C7B\u578B\u3002\u5B83\u53EF\u4EE5\u88AB client \u548C node \u6587\u4EF6\u5939\u5F15\u7528\uFF0C\u5E76\u7F16\u8BD1\u4E3A cjs \u683C\u5F0F\u3002</li></ul><p>\u4E3A\u4E86\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u6240\u6709\u63D2\u4EF6\u5728\u53D1\u5E03\u65F6\u90FD\u4F1A\u4F7F\u7528 rollup \u8FDB\u884C\u6253\u5305\u5E76\u538B\u7F29\u3002</p><h2 id="\u9879\u76EE\u7684\u8FD0\u884C\u4E0E\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7684\u8FD0\u884C\u4E0E\u5F00\u53D1" aria-hidden="true">#</a> \u9879\u76EE\u7684\u8FD0\u884C\u4E0E\u5F00\u53D1</h2><h3 id="\u6784\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> \u6784\u5EFA\u65B9\u5F0F</h3><ul><li>\u4E3A\u4E86\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u6240\u6709\u63D2\u4EF6\u5728\u53D1\u5E03\u65F6\u90FD\u4F1A\u4F7F\u7528 <code>rollup</code> \u8FDB\u884C\u6253\u5305\u5E76\u538B\u7F29\u3002</li><li>\u4F7F\u7528 <code>cpx</code> \u63D0\u4F9B\u7684\u590D\u5236\u4E0E\u6587\u4EF6\u76D1\u542C\u547D\u4EE4\uFF0C\u5C06\u5176\u4ED6\u683C\u5F0F\u7684\u6587\u4EF6\u4ECE\u6E90\u6587\u4EF6\u62F7\u8D1D\u5230\u8F93\u51FA\u76EE\u5F55\u3002</li></ul><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><ol><li><p>\u6784\u5EFA\u9879\u76EE: <code>pnpm build</code></p><ul><li>\u4F7F\u7528 rollup \u6253\u5305\u5E76\u538B\u7F29\u4EE3\u7801\uFF0C\u5E76\u8F93\u51FA\u5230 <code>lib</code> \u6587\u4EF6\u5939</li><li>\u4F7F\u7528 <code>rollup-plugin-copy</code> \u590D\u5236\u5176\u4ED6\u6587\u4EF6\u5230 <code>lib</code> \u6587\u4EF6\u5939</li></ul></li><li><p>\u5F00\u53D1\u9879\u76EE: <code>pnpm dev</code></p><ul><li>\u4F7F\u7528 <code>tsc</code> \u7F16\u8BD1 TypeScript \u6587\u4EF6\u5230 <code>lib</code> \u6587\u4EF6\u5939</li><li>Use <code>cpx</code> \u590D\u5236\u5176\u4ED6\u6587\u4EF6\u5230 <code>lib</code> \u6587\u4EF6\u5939</li></ul></li><li><p>\u683C\u5F0F\u5316\u9879\u76EE: <code>pnpm lint</code></p><p>\u5B83\u5C06\u4F7F\u7528 prettier\u3001eslint \u548C stylelint \u683C\u5F0F\u5316\u9879\u76EE\u3002</p><p>\u5982\u679C\u4F60\u4FEE\u6539\u4E86 Markdown\uFF0C\u4F60\u8FD8\u9700\u8981\u8FD0\u884C <code>pnpm lint:md</code> \u547D\u4EE4\u3002</p></li></ol><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u4E0D\u8981\u6DF7\u7528\u6784\u5EFA\u548C\u5F00\u53D1\u547D\u4EE4\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u6784\u5EFA\u65B9\u5F0F\u5B8C\u5168\u4E0D\u540C\u3002</p><p>\u4F60\u53EF\u80FD\u9700\u8981\u6267\u884C <code>pnpm clean</code> \u547D\u4EE4\u6765\u6E05\u9664\u4E0A\u4E00\u6B21\u7684\u6784\u5EFA\u7ED3\u679C\u3002</p></div><h2 id="\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4" aria-hidden="true">#</a> \u63D0\u4EA4</h2><p>\u9879\u76EE\u4F7F\u7528 <code>husky</code> \u6DFB\u52A0\u4E86\u989D\u5916\u7684 Git Hooks \u8FDB\u884C\u9A8C\u8BC1:</p><ul><li><p>\u5728 <code>precommit</code> \u9636\u6BB5\u6211\u4EEC\u4F7F\u7528 <code>lint-staged</code> \u914D\u5408\u5BF9\u5E94 Linter \u5BF9\u6539\u52A8\u7684\u4EE3\u7801\u8FDB\u884C\u68C0\u9A8C</p><p>\u8FD9\u610F\u5473\u7740\u4F60\u9700\u8981\u4FDD\u8BC1\u4F60\u7684\u4EE3\u7801\u6309\u7167\u9879\u76EE\u8981\u6C42\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u53EF\u4EE5\u901A\u8FC7 Linter\u3002</p></li><li><p>\u5728 <code>commit-msg</code> \u9636\u6BB5\u6211\u4EEC\u4F7F\u7528 <code>commitlint</code> \u5BF9\u63D0\u4EA4\u5907\u6CE8\u8FDB\u884C\u6821\u9A8C\u3002</p><p>\u8FD9\u610F\u5473\u7740\u4F60\u9700\u8981\u4FDD\u8BC1\u4F60\u7684\u63D0\u4EA4\u6CE8\u91CA\u7B26\u5408\u8BED\u4E49\u5316\u63D0\u4EA4 (Semantic)</p></li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u4E0D\u80FD\u901A\u8FC7\u4E0A\u8FF0 Git Hooks\uFF0C\u4F60\u5C06\u65E0\u6CD5\u5B8C\u6210 <code>git commit</code>\u3002</p><p>\u5982\u679C\u4F60\u5DF2\u7ECF\u8FDB\u884C\u8D21\u732E\u4E86\u4E00\u4E9B\u5185\u5BB9\uFF0C\u4F46\u65E0\u6CD5\u5B8C\u6210\u63D0\u4EA4\u4E14\u4E0D\u4F1A\u4FEE\u590D\uFF0C\u4F60\u53EF\u4EE5\u5728\u63D0\u4EA4\u65F6\u6DFB\u52A0 <code>--no-verify</code> Flag \u7ED5\u8FC7 Git Hooks\u3002</p></div>`,28);function r(t,p){return i(),n("div",null,[a,d(" more "),o])}const u=e(c,[["render",r],["__file","contribution.html.vue"]]);export{u as default};
