<template>
    <Layout>
        <div>
            <h1>{{$page.post.title}}</h1>
            <p>{{$page.post.content}}</p>
        </div>
    </Layout>
</template>

<!-- ID 指定类型 ！不能为空 -->

<page-query>
    query ($id:ID!) { 
        post(id:$id){
            id
            title
            content
        }
    }
</page-query>


<script>
export default {
    name:"Post Page",
    metaInfo(){
        return{
            title:this.$page.post.title // 页面标题
        }
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
