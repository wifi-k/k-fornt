/**
 * Created by saiying.ding on 2018/5/29.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api'
export default {     
    loginCheck(param){
        return Vue.axios.post(''+$http+'/user/loginCheck',qs.stringify(param));
    },
    logout(param){
        return Vue.axios.post(''+$http+'/user/quit');
    },
    getLogin(param){
        return Vue.axios.post(''+$http+'/user/signin/passwd',param);
    },
    getImgCode(param){
        return Vue.axios.post(''+$http+'/user/imgcode/get',qs.stringify(param));
    },
    getPhoneCode(param){
        return Vue.axios.post(''+$http+'/user/vcode/get',param);
    },
    reg(param){
        return Vue.axios.post(''+$http+'/user/signup/passwd',param);
    },
    forgetPasswd(param){
        return Vue.axios.post(''+$http+'/user/passwd/forget',param);
    },
    resetPasswd(param){
        return Vue.axios.post(''+$http+'/user/passwd/reset',param);
    },
    verifyMobile(param){
        return Vue.axios.post(''+$http+'/user/mobile/verify',param);
    },
    getInfo(param){
        return Vue.axios.post(''+$http+'/user/info/get',param);
    },
    setInfo(param){
        return Vue.axios.post(''+$http+'/user/info/set',param);
    },
    modifyEmail(param){
        return Vue.axios.post(''+$http+'/user/email/modify',param);
    },
    verifyEmail(param){
      return Vue.axios.post(''+$http+'/user/email/verify',param);
  },
}