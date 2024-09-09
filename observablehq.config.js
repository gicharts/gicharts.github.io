// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Guardium Insights charts",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">'
    //+ '<link href="https://cdn.jsdelivr.net/npm/carbon-components@10.56.0/css/carbon-components.css" rel="stylesheet" />'
    //+ '<link href="https://cdn.jsdelivr.net/npm/@carbon/charts@1.0.4/styles.css" rel="stylesheet" />'
  ,
  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "deep-space", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs

  // async dynamicPaths() {
  //   console.log("READING");
  //   let arr = [];
  //   for await (f of fs.readdirSync("src/examples_json")) {
  //     console.log("EXAMPLE " + f);
  //     arr.push(`/examples/${f}`);
  //   }
  //   return arr;
  // },

  style: "custom-style.css",
};
