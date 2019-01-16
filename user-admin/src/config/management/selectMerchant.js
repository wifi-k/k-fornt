/**
 * Created by Administrator on 2018/9/3.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {
    merchantList(param){
        return Vue.axios.post( ''+$http+'/merchant/flowPackage/list/',qs.stringify(param));
    },
    baseArea(param){
        return Vue.axios.post( ''+$http+'/merchant/base/area/',qs.stringify(param));
    },
    baseBizType(param){
        return Vue.axios.post( ''+$http+'/merchant/base/bizType/',qs.stringify(param));
    },
   

 

}