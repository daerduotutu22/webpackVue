<template>
    <div>
        <ul>
            <li v-for="(item, index) in todolist" :key="index" @click="switchh(index)">{{item.txt}}</li>
        </ul>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'home',
    data(){
        return{
            todolist:[
                { id:1, txt:'首页' },
                { id:2, txt:'好看博客' },
                { id:1, txt:'帮助' },
                { id:1, txt:'我的' },
            ]
        }
    },
    methods: {
        switchh(index){
            if(index == 0){
                this.$router.push({name: 'shouye'})
            }else if(index == 1){
                this.$router.push({name: 'goodbook'})
            }else if(index == 2){
                this.$router.push({name: 'help'})
            }else if(index == 3){
                this.$router.push({name: 'me'})
            }
        }
    }
}
</script>
<style>
ul li{
    float: left;
    margin: 100px
}
</style>

