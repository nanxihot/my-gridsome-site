<template>
  <Layout>
    <div>
      <div>Posts 1</div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
    import axios from 'axios'
export default {
  name: "name",
  data() {
    return {
        posts:[],
    };
  },
  async created() {
    // 此处的数据只在客户端渲染，不会再服务端生成页面不利于seo优化
    const {data} = await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.posts = data
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
