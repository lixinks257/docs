const moment = require('moment')
const secret = require('./secret')
module.exports = {
  // 时间组件
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      // const moment = require('moment')
      return new Date(timestamp).toUTCString()
      moment.locale('zh-cn')
      return moment(timestamp).format('LLLL')
    },
  },
  // vssue组件（github不成功，本地成功）
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'lixinks257',
    repo: 'docs',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    // Vssue 会自动尝试为你创建 Issue
    autoCreateIssue: true,
  },
  // 返回头部插件
  '@vuepress/back-to-top': true,
}
