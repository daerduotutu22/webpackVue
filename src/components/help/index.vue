<template>
    <div class="">
        我是帮助中心
    </div>
</template>
<script>
export default {
    name: 'help',
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

