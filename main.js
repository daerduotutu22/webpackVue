import Vue from 'vue';
import router from './src/router';
import app from './src/app.vue'
import iview from'iview'
import 'iview/dist/styles/iview.css';

Vue.use(iview)
Vue.use(router)

new Vue({
    router,
    render: (h) => h(app)
}).$mount('#root');
