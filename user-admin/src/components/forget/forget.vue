<template>
    <div class="reg" :style="winSize">        
        <div class="content" >
            <el-form label-position="left" label-width="0px" class="demo-ruleForm  loginform" :model='ruleForm1' :rules="rule_data" ref='ruleForm' v-show="!isOneShow">
                <div class="form-wrap">
                <h3 class="title">
                    通过手机找回密码
                </h3>
                <p>请输入您的登录账号，以进行密码重设</p>
                <el-form-item prop='mobile'>
                    <el-input type="number" auto-complete="off" placeholder="手机号码" v-model='ruleForm1.mobile'></el-input>
                </el-form-item>
                <el-form-item prop='captcha'>
                    <el-input type="text" auto-complete="off" placeholder="图形验证码" v-model='ruleForm1.imgCode' style="width:95px;"></el-input>
                    <img :src="captcha" style="width:110px;cursor:pointer;" @click="refreshCaptcha">
                    <span @click="refreshCaptcha">(换一张)</span>
                </el-form-item> 
                <el-form-item prop='vcode'>
                    <el-input type="text" auto-complete="off" placeholder="手机验证码" v-model='ruleForm1.vcode' style="width:200px;"></el-input>
                    <span @click=onGetPhoneCode><send-sms-btn ></send-sms-btn></span>
                </el-form-item>                   
                <el-form-item>         
                    <el-button type="primary" @click='onLogin("ruleForm")'>下一步
                    </el-button>
                </el-form-item>
                </div>
            </el-form>
            <el-form label-position="left" label-width="0px" class="demo-ruleForm  loginform" :model='ruleForm' :rules="rules" ref='ruleForm' v-show="isOneShow">
                <div class="form-wrap">
                <h3 class="title">
                    设置新密码
                </h3>
                <p>请输入新密码，以进行密码重设</p>
                <el-form-item prop='password'>
                    <el-input type="password"  placeholder="密码"
                        v-model='ruleForm.password' @keyup.native.enter="onLogin('ruleForm',true)"></el-input>
                    <span>字母和数字，6-20个字符，不支持空格</span>
                </el-form-item>
                <el-form-item prop='checkPassword'>
                    <el-input type="password"  placeholder="确认密码"
                        v-model='ruleForm.checkPassword' @keyup.native.enter="onLogin('ruleForm',true)"></el-input>
                </el-form-item>                
                <el-form-item>         
                    <el-button type="primary" class="w100" @click='onLogin("ruleForm")'>提交
                    </el-button>
                </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../register/reg.less';
@import '../../theme/theme.less'; 
</style>
<script>
    module.exports = require('./forget');
</script>