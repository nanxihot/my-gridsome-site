// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

const axios  = require("axios")

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // 数据预取的处理
    const collection = addCollection('Post')

    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.body,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // 此处也可以创建页面 如下：
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue',
    })
    createPage({
      path: '/fun-user/:id(\\d+)', // 使用正则限定id必须是数字，否则不会被匹配到
      component: './src/templates/User.vue',
    })
  })
}
