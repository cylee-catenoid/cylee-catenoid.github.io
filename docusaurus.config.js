// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */

// docusaurus.config.js
const config = {
  title: 'Guide Hub',
  url: 'https://cylee-catenoid.github.io', // 허브 자체 도메인
  baseUrl: '/',                                   // 루트
  organizationName: 'cylee-catenoid',
  projectName: 'cylee-catenoid.github.io',  // 리포 이름 그대로
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  themeConfig: {
    navbar: {
      title: 'Kollus 개발자 센터',
      items: [
        { to: '/docs/intro', label: '문서', position: 'left' }, // 필요하면 유지/삭제
        {
          type: 'html',
          position: 'right',
          value: `
            <div class="navbar__searchWrap">
              <input type="search" placeholder="검색..." class="navbar__search" />
            </div>
          `,
        },
      ],
    },
  }
};
module.exports = config;
