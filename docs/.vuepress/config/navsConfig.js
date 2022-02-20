module.exports = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about/' },
  { text: 'foo', link: '/foo/' },
  //   { text: 'External', link: 'https://google.com' },
  {
    text: '下拉分组',
    // ariaLabel: 'Language Menu',
    // items: [
    //   { text: 'about', link: '/about/' },
    //   { text: 'mast', link: '/mast/' },
    //   { text: 'foo', link: '/foo/' },
    //   { text: 'bar', link: '/bar/' },
    // ],
    items: [
      // 分组
      {
        text: 'Group1',
        items: [
          { text: 'foo1', link: '/foo/' },
          { text: 'bar2', link: '/bar/' },
        ],
      },
      {
        text: 'Group2',
        items: [
          { text: 'G1', link: '/about/' },
          { text: 'G2', link: '/mast/' },
        ],
      },
    ],
  },
]
