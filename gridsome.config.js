// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem', // 用于读取本地md文件,转换为html
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md', // 本地文件的路径
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-strapi', // 使用strapi
      options: {
        apiURL: 'http://localhost:1337',// strapi接口地址
        queryLimit: 1000, // Defaults to 100 最多查询多少条数据
        contentTypes: ['post'], // 查询的数据类型
        // singleTypes: ['impressum'], // 单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: { // 有些数据是受保护的 需要登录 
          // identifier: '',// 登录的信息
          // password: '' // 登录的信息
        // }
      }
    }
  ]
}
