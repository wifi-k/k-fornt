/**
 * Created by Administrator on 2017/6/6.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {
    queryByPage(param){
        return Vue.axios.post(''+$http+'/merchant/list',qs.stringify(param));
    },
    add(param){
        return Vue.axios.post(''+$http+'/merchant/router/bind',qs.stringify(param));
    },
    addCity(param){
        return Vue.axios.post(''+$http+'/merchant/destination/add',qs.stringify(param));
    },
    viewCity(param){
        return Vue.axios.post(''+$http+'/merchant/destination/info',qs.stringify(param));
    },
    viewConfig(param){
        return Vue.axios.post(''+$http+'/merchant/config/info',qs.stringify(param));
    },
    addConfig(param){
        return Vue.axios.post(''+$http+'/merchant/config/add',qs.stringify(param));
    } 

}