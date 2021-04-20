export default {
    srcDir: "src/client",
    root: "/learning/",
    title: "Codestar Learning",
    description:
      "Codestar Learning",
    theme: "blog",
    plugins: ["blog"],
    nav: [
      { text: "Homepage", link: "/learning/app.html", icon: "czs-home-l" },
      { text: "About", link: "/learning/about.html", icon: "czs-about-l" },
    ],
    blog: {
      social: {
        github: "code-star",
        twitter: "CodestarNL",
      },
    },
  };