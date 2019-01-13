<template>
    <div>
       <h2>我是首页</h2>
    </div>
</template>
<script>
export default {
    name: 'shouye',
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

