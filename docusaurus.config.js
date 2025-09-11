// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guide Hub',
  url: 'https://cylee-catenoid.github.io', // 허브 도메인
  baseUrl: '/',                             // 루트
  organizationName: 'cylee-catenoid',
  projectName: 'cylee-catenoid.github.io',  // 리포 이름 그대로
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // ✅ classic 프리셋 추가 (custom.css 로드)
  presets: [
    [
      'classic',
      {
        docs: false, // 허브는 문서 플러그인 비활성화(원하면 true로 바꾸고 docs 폴더 준비)
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Kollus 서포트 센터',
      items: [
        // 허브에 docs 플러그인을 안 쓰면 404 나므로 잠시 주석/삭제 권장
        // { to: '/docs/intro', label: '문서', position: 'left' },

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

    // (선택) 코드 하이라이트 테마
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;