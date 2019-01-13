import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/index.vue'
import home from '../components/home/index.vue'
import shouye from '../components/shouye/index.vue'
import goodbook from '../components/goodbook/index.vue'
import help from '../components/help/index.vue'
import me from '../components/me/index.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/shouye',
            component: home,
            children:[
                {
                    path:'/shouye',
                    name: 'shouye',
                    component: shouye
                },
                {
                    path:'/goodbook',
                    name: 'goodbook',
                    component: goodbook
                },
                {
                    path:'/help',
                    name: 'help',
                    component: help
                },
                {
                    path:'/me',
                    name: 'me',
                    component: me
                }
            ]
        }
    ]
})