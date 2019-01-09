<template>
    <div class="login" :style="winSize">        
        <div class="content" :style="formOffset">
            <el-form label-position="left" label-width="0px" class="demo-ruleForm  loginform" :model='data'  :rules="rule_data" ref='ruleForm' @submit.native.prevent>
                <div class="form-wrap">
                    <h3 class="title">登陆树熊云</h3>
                    <el-form-item prop='mobile'>
                        <el-input type="text" auto-complete="off" placeholder="手机号码" v-model='data.mobile' @focus="initError" maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item prop='passwd'>
                        <el-input maxlength="20" type="password" auto-complete="off" placeholder="密码"
                            v-model='data.passwd' @focus="initError" @keyup.native.enter="onLogin('ruleForm',true)"></el-input>
                    </el-form-item>
                    <el-form-item prop='imgCode'>
                        <el-input type="text" auto-complete="off" placeholder="图形验证码" v-model='data.imgCode' style="width:100px;" @focus="initError"></el-input>
                        <img :src="captcha" @click="refreshCaptcha" style="width:120px;cursor:pointer;">
                        <span @click="refreshCaptcha" class="captcha">(换一张)</span>
                    </el-form-item>          
                    <el-form-item >                            
                       <div v-show="error.errorShow" class="showError"><i class="fa fa-times-circle"></i><span>{{error.errorMessage}}</span></div>                   
                    </el-form-item> 
                    <el-form-item class="button-area">
                        <el-button type="primary"  native-type="submit"  @click='onLogin("ruleForm")'>登录
                        </el-button>
                    </el-form-item>
                    <el-form-item >
                        还没有账号？<router-link :to="'/register'">立即注册</router-link>
                        <router-link :to="{ path: '/register', query: { type: 2 }}"  class="fr">忘记密码</router-link>                            
                    </el-form-item>
                </div>
            </el-form>
        </div>            
    </div>
</template>

<script>
    module.exports = require('./login');
</script>

<style scoped lang='less'>
    @import './login.less';
    @import '../../theme/theme.less'; 
</style>