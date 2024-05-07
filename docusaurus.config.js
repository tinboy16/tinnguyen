// @ts-check

// CTRL+F for "set this" to find all the fields with placeholder values.
// For other configuration options,
// see: https://docusaurus.io/docs/api/themes/configuration

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Trang lưu trữ tài liệu',  // set this
    favicon: 'img/favicon.ico',

    // The url for your site: <url>/<baseUrl>/
    url: 'https://docs.tinnguyen.xyz',  // set this
    baseUrl: '/',  // set this

    // (optional) GitHub pages deployment config.
    organizationName: 'Tín Nguyễn',  // set this – GitHub Org or Username
    projectName: 'TinNguyen',  // set this – repo name
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.scss',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // set this - Replace with your project's social card
            image: 'img/logo.svg',
            docs: {
                sidebar: {
                    hideable: true,
                }
            },
            // set this – navbar items
            // See: https://docusaurus.io/docs/api/themes/configuration#navbar
            navbar: {
                title: 'Tín Nguyễn',  // set this
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',  // set this to your main docs page name
                        position: 'left',
                        label: 'Get Started',
                    },
                    {
                        href:             'https://github.com/tinboy16/',  // set this
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            // set this – to the links you want
            // See: https://docusaurus.io/docs/api/themes/configuration#footer-1
            footer: {
                style: 'dark',
                links: [
                  {
                    title: 'Docs',
                    items: [
                      {
                        label: 'Tài liệu',
                        to: '/docs/intro',
                      },
                    ],
                  },
                  {
                    title: 'Contract',
                    items: [
                      {
                        label: 'Telegram',
                        href: 'https://t.me/tinnboy',
                      },
                      {
                        label: 'Twitter',
                        href: 'https://twitter.com/NguynThngTn7',
                      },
                    ],
                  },
                  {
                    title: 'More',
                    items: [
                      {
                        label: 'Blog',
                        to: '/blog',
                      },
                      {
                        label: 'GitHub',
                        href: 'https://github.com/tinboy16',
                      },
                    ],
                  },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Tín nguyễn, Inc.`,
              },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    plugins: [
        'docusaurus-plugin-sass',
        async function disableUsedExports() {
          return {
            name: 'disable-used-exports',
            configureWebpack() {
              return {
                optimization: {
                  usedExports: false
                }
              }
            }
          }
        },
        [
          '@docusaurus/plugin-google-gtag',
          {
            trackingID: 'G-9X3YKECFCL',
            anonymizeIP: true, 
          }
        ],
      ],
      

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                indexBlog: false,
            }),
        ],
    ],
};

export default config;
