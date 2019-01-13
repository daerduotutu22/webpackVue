<template>
    <div class="">
        <h1>我是好看博客</h1>
    </div>
</template>
<script>
export default {
    name: 'goodbook',
    data() {
        return {
            login:'我是data里面的login'
        }
    },
    methods:{
        tohome(){
            this.$router.push({name: 'home'})
        }
    }
}
</script>
<style>
   .loginbox{
       text-align: center;
       margin-top: 100px;
    }
</style>

