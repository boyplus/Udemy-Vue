import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-http-e0103.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
    // console.log(request);
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        console.log('hello');
        console.log(response);
        response.json = () => {
            return { messgae: response.body };
        };
    });
});
new Vue({
    render: h => h(App)
}).$mount('#app');
