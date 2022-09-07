<!-- 再pages中创建的页面会自动生成路由可以直接访问 -->
<template>
    <div>
        <h1>Foo Page</h1>
    </div>
</template>

<script>
export default {
    name:'FooPage',
    metaInfo:{
        title:"Foo",
        meta:[
            {name:'author',content:'NanXi Hot'}// 生成meta标签插入到头部当中
        ]
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
