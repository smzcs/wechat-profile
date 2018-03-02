const app = getApp();

Page({
  userInfo: {},
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo
      })
    })
  },
  data: {
    intro: [
      '6年多外企软件开发工程师工作经验，口语流利，可无障碍自带翻墙梯查询英文技术文档。',
      '熟悉HTML5，CSS3，Javascript(及ES6版本)，jQuery框架，了解React框架；熟悉Boostrap 3框架，能够独立制作完成常规CSS3动画及特效，会设计及开发响应式页面(手机、平板电脑及普通PC机均适用)，会使用Sass预编译样式，能解决常见浏览器兼容样式问题；熟悉Webpack等打包工具的常规配置，熟练使用Nodejs的NPM包管理器及Express框架，ejs及Jade模板引擎；有防XSS攻击的经验。',
      '曾开发基于Asp.net的B/S模式的系统，熟练掌握C#语言，熟练使用Asp.net MVC框架；能开发RESTful风格的webApi；熟悉SQL Server2008及2012版本数据库，能写SQL语句、存储过程及触发器，有防SQL注入攻击的经验，会Mongodb的常规增删改查操作，并能在Nodejs环境下使用Mongoose等ORM框架。',
      '熟悉代码版本控制，先后使用过Microsoft的TFS，SVN，Perforce，Git及IBM的Clearcase等代码管理工具；先后使用过SharePoint及Sitecore等CMS系统；有使用Adobe InDesign的经验。',
      '熟悉瀑布流及敏捷开发模式。',
      '熟悉文档编写及交付流程，能较好的参与需求确认、开发、SIT、UAT及最终交付的各个阶段。',
      '较强的抗压能力，不排斥中短期出差，有过到客户方短期出差的经历(香港)并获得客户的数封感谢信。',
      '有带领小型项目（3人）并及时交付的经验。',
      '严格遵守公司各项规章制度及管理流程，所有工作过的公司年终Performance评审Rating至少是良。',
      '较强的学习、搜索能力及Trouble shooting的能力，常利用业余时间学习流行的技术；性格外向、风趣幽默能与PM及团队成员和睦相处。',
      '大学毕业后先后在上海、深圳及成都工作，适应能力强。',
      '业余爱好旅行及烹饪，会制作土豆炖牛肉、辣子鸡和麻辣香锅等常规四川风味菜食。'
    ]
  }
})