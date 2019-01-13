<template>
    <div class="">
        <h2>我是我的</h2>
    </div>
</template>
<script>
export default {
    name: 'me',
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

