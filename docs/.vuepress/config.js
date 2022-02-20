const headConf = require('./config/headerConfig')
const pluginsConf = require('./config/pluginsConfig')
const navsConf = require('./config/navsConfig')
const sidebarConf = require('./config/sidebarConfig')
module.exports = {
  // 站点配置
  //   lang: 'zh-CN',
  base: '/docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: headConf,
  plugins: pluginsConf,
  // 主题和它的配置
  //   theme: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    // 导航栏 Logo
    logo: '/assets/img/hero.png',
    // 自动生成侧边栏
    // sidebar: 'auto',
    // 是否禁用导航栏
    // navbar: false,
    // 导航栏链接
    nav: navsConf,
    // 侧边栏分组,采用对象的形式
    sidebar: sidebarConf,
  },
}
