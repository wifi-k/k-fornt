/**
 * Created by Administrator on 2018/9/3.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {
    dayList(param){
        return Vue.axios.post( ''+$http+'/user/share/stat/day/',param);
    },
    sum(param){
        return Vue.axios.post( ''+$http+'/user/share/stat/sum/',qs.stringify(param));
    }

}