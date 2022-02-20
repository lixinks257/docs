// 采用对象的形式
module.exports = {
  '/foo/': [
    '' /* /foo/ */,
    'one' /* /foo/one.html */,
    'two' /* /foo/two.html */,
  ],
  '/bar/': [
    '' /* /bar/ */,
    'one' /* /bar/three.html */,
    'two' /* /bar/four.html */,
  ],
  '/about/': ['' /* /bar/ */],
  '/mast/': ['' /* /bar/ */],
  // fallback
  // '/': [
  //   '',        /* / */
  //   'mast', /* /contact.html */
  //   'about'    /* /about.html */
  // ]
}
// 采用数组的形式
// module.exports = [
//   '',
//   'about',
//   {
//     title: 'foo', // 必要的
//     path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//     collapsable: false, // 可选的, 默认值是 true,
//     sidebarDepth: 1, // 可选的, 默认值是 1
//     children: ['/foo/one', '/foo/two'],
//   },
// ]
