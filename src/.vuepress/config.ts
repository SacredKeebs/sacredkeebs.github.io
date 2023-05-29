import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/ua/": {
      lang: "uk-UA",
      title: "Демо блог",
      description: "vuepress-theme-hope демо блог",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
