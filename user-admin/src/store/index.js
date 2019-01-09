/**
 * Created by Administrator on 2017/6/9.
 */
import 'babel-polyfill';
import  Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import router from './router';
import userinfo from './userinfo';
export default  new Vuex.Store({
    modules: {
        router,
        userinfo,
        

   }
});