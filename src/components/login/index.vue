<template>
    <div class="loginbox">
        <Button type="primary" @click="tohome">我要登录</Button>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            login:'我是data里面的login'
        }
    },
    methods:{
        tohome(){
            this.$router.push({name: 'home', params: {id: 'shouye'}})
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

