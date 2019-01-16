/**
 * Created by Administrator on 2017/6/6.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {
    queryByPage(param){
        return Vue.axios.post( ''+$http+'/router/list',qs.stringify(param));
    },
    infoById(param){
        return Vue.axios.get( ''+$http+'/router/info/'+ param);
    },
    unbindById(param){
        return Vue.axios.get( ''+$http+'/router/unbind/'+ param);
    },
    viewReboot(param){
        return Vue.axios.post( ''+$http+'/router/reboot/info',qs.stringify(param));
    },
    addReboot(param){
        return Vue.axios.post( ''+$http+'/router/reboot/save',qs.stringify(param));
    },
    viewUpdate(param){
        return Vue.axios.post( ''+$http+'/router/update/info',qs.stringify(param));
    },
    addUpdate(param){
        return Vue.axios.post( ''+$http+'/router/update/save',qs.stringify(param));
    },
    viewConfig(param){
        return Vue.axios.post( ''+$http+'/router/config/info',qs.stringify(param));
    },
    addConfig(param){
        return Vue.axios.post( ''+$http+'/router/config/save',qs.stringify(param));
    },
    updateNow(param){
        return Vue.axios.post( ''+$http+'/router/updateNow/save',qs.stringify(param));
    },
    upgradeNow(param){
        return Vue.axios.post( ''+$http+'/router/software/update',qs.stringify(param));
    },
    updateInfo(param){
        return Vue.axios.post( ''+$http+'/router/software/updateInfo',qs.stringify(param));
    },
    updateVersion(param){
        return Vue.axios.post( ''+$http+'/router/update/version',qs.stringify(param));
    },
    checkOnline(param){
        return Vue.axios.post( ''+$http+'/router/online/check',qs.stringify(param));
    }  



}