module.exports = {
  // 站点配置
//   lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['meta', { name: 'Keywords', content: 'lixin123' }],
  ],
  // 主题和它的配置
//   theme: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    // 导航栏 Logo
    logo: '/assets/img/hero.png',
    sidebar: 'auto',
    // 禁用导航栏
    // navbar: false,
    // 自动生成侧边栏
    // 导航栏链接
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'foo', link: '/foo/' },
      //   { text: 'External', link: 'https://google.com' },
      {
        text: '下拉分组',
        // ariaLabel: 'Language Menu',
        items: [
          { text: 'about', link: '/about/' },
          { text: 'mast', link: '/mast/' },
          { text: 'foo', link: '/foo/' },
          { text: 'bar', link: '/bar/' },
        ],
        // items: [
        //   // 分组
        //   {
        //     text: 'Group1',
        //     items: [
        //       { text: 'G1', link: '/about/' },
        //       { text: 'G2', link: '/mast/' },
        //       /*  */
        //     ],
        //   },
        //   {
        //     text: 'Group2',
        //     items: [
        //       { text: 'G1', link: '/about/' },
        //       { text: 'G2', link: '/mast/' },
        //     ],
        //   },
        // ],
      },
    ],
    sidebar: [
      //   '',
      //   'about',
      //   {
      //     title: 'Group 1', // 必要的
      //     path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: ['/foo/one', '/foo/two'],
      //   },
    ],
    // sidebar: [
    //   {
    //     title: 'Group 1', // 必要的
    //     path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/foo/one', '/foo/two'],
    //   },
    //   {
    //     title: 'Group 2', // 必要的
    //     path: '/bar/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/bar/one', '/bar/two'],
    //   },
    // ],
    // 侧边栏分组
    sidebar: {
      '/foo/': [
        '' /* /foo/ */,
        'one' /* /foo/one.html */,
        'two' /* /foo/two.html */,
      ],
      // '/bar/': [
      //   '' /* /bar/ */,
      //   'one' /* /bar/three.html */,
      //   'two' /* /bar/four.html */,
      // ],
      // // fallback
      // '/': [
      //   '',        /* / */
      //   'mast', /* /contact.html */
      //   'about'    /* /about.html */
      // ]
    },
  },
}
