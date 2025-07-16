import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {getDocusaurusTheme} from '@codexcommunion/liturgical-theme';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Get the liturgical theme for today's date
const liturgicalTheme = getDocusaurusTheme();

const config: Config = {
  title: 'PrintPrayPeel.com',
  tagline: 'Print, Pray, Peel - Share Faith Through Stickers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://printpraypeel.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codexcommunion', // Usually your GitHub org/user name.
  projectName: 'printpraypeel.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove edit URL since this is not a collaborative docs site
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove edit URL since this is not a collaborative blog
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Apply liturgical theme colors
    ...liturgicalTheme,
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PrintPrayPeel.com',
      logo: {
        alt: 'PrintPrayPeel Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/stickers',
          label: 'Stickers',
          position: 'left',
        },
        {
          to: '/how-it-works',
          label: 'How It Works',
          position: 'left',
        },
        {
          to: '/prayers',
          label: 'Prayers',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/codexcommunion/printpraypeel.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'How It Works',
              to: '/how-it-works',
            },
            {
              label: 'Sticker Library',
              to: '/stickers',
            },
            {
              label: 'Prayers',
              to: '/prayers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/codexcommunion/printpraypeel.com/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/codexcommunion/printpraypeel.com',
            },
            {
              label: 'CodexCommunion',
              href: 'https://github.com/codexcommunion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodexCommunion. Made with 🙏 for the Catholic community.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
