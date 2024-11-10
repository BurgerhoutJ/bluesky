// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bluesky.ms',
  tagline: 'Search the Microsoft community on Bluesky!',
  url: 'https://bluesky.ms',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merill', // Usually your GitHub org/user name.
  projectName: 'bluesky', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/merill/bluesky/tree/main/website',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bluesky.ms',
        logo: {
          alt: 'Bluesky Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: '/starterpacks',
            label: 'Starter Packs',
          },
          {
            href: '/tips',
            label: 'Tips',
          },
          {
            href: '/about',
            label: 'About',
          },

          {
            href: 'https://cmd.ms',
            label: 'cmd.ms',
            position: 'right',
          },
          {
            href: 'https://entra.news',
            label: 'entra.news',
            position: 'right',
          },
          {
            href: 'https://merill.net',
            label: 'merill.net',
            position: 'right',
          },
          {
            href: 'https://github.com/merill/bluesky',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'About me',
                to: 'https://merill.net/about/',
              },
            ],
          },
          {
            title: 'My Projects',
            items: [
              {
                label: 'Graph X-Ray',
                href: 'https://graphxray.merill.net',
              },
              {
                label: 'Graph Permissions Explorer',
                href: 'https://graphpermissions.merill.net',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Bluesky',
                to: 'https://bsky.app/profile/merill.net',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/merill/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Merill Fernando.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    themes: [
      // ... Your other themes.

    ],

    plugins: [
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
};

module.exports = config;
