export default {
    srcDir: "src/client",
    title: "Codestar Learning",
    description:
      "Codestar Learning",
    theme: "blog",
    plugins: ["blog"],
    // plugins: ["sidebar", "prev_next"],
    nav: [
      { text: "Homepage", link: "/learning/index.html", icon: "czs-home-l" },
    //   {
    //     text: "Categories",
    //     link: "/learning/categories/index.html",
    //     icon: "czs-category-l",
    //   },
    //   { text: "Tags", link: "/learning/tags/index.html", icon: "czs-tag-l" },
      { text: "About", link: "/learning/about/index.html", icon: "czs-about-l" },
    ],
    blog: {
      social: {
        github: "code-star",
        twitter: "CodestarNL",
      },
    },
  };