/**
 * Created by Administrator on 2018/9/3.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {
    queryByPage(param){
        return Vue.axios.post( ''+$http+'/user/node/list',param);
    },
    bindbatch(param){
        return Vue.axios.post( ''+$http+'/user/node/bindbatch/',param);//批量绑定
    },
    bind(param){
      return Vue.axios.post( ''+$http+'/user/node/bind/',param);//单个 节点绑定
    },
    unbindbatch(param){
        return Vue.axios.post( ''+$http+'/user/node/unbind/',param);
    },
    join(param){
        return Vue.axios.post( ''+$http+'/user/node/share/join',param);
    },
    quit(param){
        return Vue.axios.post( ''+$http+'/user/node/share/quit',param);
    },
    
}