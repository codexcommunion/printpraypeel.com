import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { getDocusaurusTheme } from "@codexcommunion/liturgical-theme";
import type { Configuration } from "webpack";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Get the liturgical theme for today's date
const liturgicalTheme = getDocusaurusTheme();

const config: Config = {
  title: "PrintPrayPeel.com",
  tagline: "Print, Pray, Peel - Share Faith Through Stickers",
  favicon: "img/favicon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // url: "https://codexcommunion.github.io",
  url: "https://printpraypeel.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/printpraypeel.com/",
  baseUrl: "/",


  // GitHub pages deployment config.
  organizationName: "codexcommunion", // Usually your GitHub org/user name.
  projectName: "printpraypeel.com", // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch that GitHub Pages will deploy from
  trailingSlash: false, // GitHub Pages adds trailing slashes by default

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: "./sidebarsGuides.ts",
        editUrl: undefined,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "stickers",
        path: "stickers",
        routeBasePath: "stickers",
        sidebarPath: "./sidebarsStickers.ts",
        editUrl: undefined,
        exclude: [
          "**/source/**",
          "**/*.xcf",
          "**/*.psd",
          "**/*.ai",
          "**/*.sketch",
        ],
      },
    ],
    // Custom plugin to expose stickers frontmatter data
    "./plugins/stickers-frontmatter-plugin.js",
    // Plugin to configure webpack to ignore binary design files
    "./plugins/webpack-ignore-plugin.js",
  ],

  presets: [
    [
      "classic",
      {
        docs: false, // Disable the default docs plugin since we're using separate plugins
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove edit URL since this is not a collaborative blog
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Apply liturgical theme colors
    ...liturgicalTheme,
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "PrintPrayPeel.com",
      items: [
        {
          to: "/stickers",
          label: "Stickers",
          position: "left",
        },
        {
          to: "/prayers",
          label: "Prayers",
          position: "left",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          href: "https://github.com/codexcommunion/printpraypeel.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Getting Started",
          items: [
            {
              label: "Guides",
              to: "/guides/how-to-make-stickers",
            },
            {
              label: "Sticker Library",
              to: "/stickers",
            },
            {
              label: "Prayers",
              to: "/prayers",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "About Us",
              to: "/about",
            },
            {
              label: "GitHub Issues",
              href: "https://github.com/codexcommunion/printpraypeel.com/issues",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/codexcommunion/printpraypeel.com",
            },
            {
              label: "CodexCommunion",
              href: "https://github.com/codexcommunion",
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
