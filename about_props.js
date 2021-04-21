import projectConfig from '/learning/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "about.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about.html",
    'title': "About Codestar Learning",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>About Codestar Learning</h1>\n<p>Read here about our study guide.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/learning/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "About Codestar Learning"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Read here about our study guide.</p>'
        } }),
    'toc': null,
    'author': "M.D. van Es",
    'contributors': [
        "M.D. van Es"
    ],
    'date': "2021-04-21T10:45:39.000Z",
    'updated': null,
    'excerpt': "Read here about our study guide.",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
