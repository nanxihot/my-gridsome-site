// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '首页', // 可以配置网站的标题 在页面中也能够拿到
  siteDescription:'上海', // 配置meta标签，seo优化 网站的基本介绍
  titleTemplate:'%s-魔都的生活', // 标题的模板
  plugins: [],
  templates:{ // 添加集合的页面模板
    Post:[{
      path:'/posts/:id',// id是集合数据中一个真实的数据
      component:'./src/templates/Post.vue'
    }]
  }
}
