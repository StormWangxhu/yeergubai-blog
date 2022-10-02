import { getDirname, path } from "@vuepress/utils";
import { config } from "docs-shared";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default config(
  { indexName: "vuepress-theme-hope-theme-v2" },
  {
    head: [
      [
        "meta",
        {
          name: "google-site-verification",
          content: "qG3soux9jAKB4Q_DYf7yj1p5cEIuib6yG4zDhpmv2_E",
        },
      ],
    ],

    locales: {
      "/": {
        lang: "en-US",
        title: "vuepress-theme-hope",
        description: "A vuepress theme with tons of features✨",
      },
      "/zh/": {
        lang: "zh-CN",
        title: "春秋的博客",
        description: "专注于学习、交流和分享✨",
      },
      "/ru/": {
        lang: "ru-RU",
        title: "vuepress-theme-hope",
        description: "Тема vuepress с множеством функций✨",
      },
    },

    theme,

    pagePatterns: [
      "**/*.md",
      "!**/*.snippet.md",
      "!.vuepress",
      "!node_modules",
    ],

    alias: {
      "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
      "@KatexPlayground": path.resolve(
        __dirname,
        "./components/KatexPlayground"
      ),
      "@NetlifyBadge": path.resolve(__dirname, "./components/NetlifyBadge"),
    },

    define: () => ({
      IS_NETLIFY: "NETLIFY" in process.env,
    }),
  }
);
