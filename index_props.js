import projectConfig from '/pagic.config.js';
import App from './index_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'feature/visualisation' },
    'pagePath': "index.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "",
    'content': React.createElement(App, { config: {
            blog: {
                social: {
                    github: 'code-star',
                    twitter: 'CodestarNL'
                }
            },
            branch: 'feature/visualisation',
            description: 'Codestar Learning',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            include: undefined,
            nav: [
                {
                    icon: 'czs-home-l',
                    link: '/learning/index.html',
                    text: 'Homepage'
                },
                {
                    icon: 'czs-about-l',
                    link: '/learning/about/index.html',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'blog'
            ],
            port: 8000,
            root: '/',
            serve: false,
            srcDir: 'src/client',
            theme: 'blog',
            title: 'Codestar Learning',
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "index.html", pagePath: "index.tsx", script: null, title: "" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
