/**
 * Created by saiying.ding on 2018/5/29.
 */
import Vue from 'vue';
let qs = require('qs');
const $http = '/api/open'
// const $http = ''
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
    applyDeveloper(param){//申请成为个人开发者
      return  Vue.axios.post(''+$http+'/user/personal/auth',param)
    },
    applyResult(param){//个人开发者信息和审核结果
      return  Vue.axios.post(''+$http+'/user/personal/get')
    },
    apikeyReset(param){//重置apikey
      return  Vue.axios.post(''+$http+'/user/apikey/reset')
    },
    GetTokenqiniu(param){//获取七牛云token
      return  Vue.axios.post(''+$http+'/user/qiniu/get')
    },
    GetapplyResult(param){//获取七牛云token
      return  Vue.axios.post(''+$http+'user/personal/get')
    }
    


    
}