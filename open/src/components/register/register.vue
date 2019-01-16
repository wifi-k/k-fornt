<template>
    <div class="reg" :style="winSize">        
        <div class="content" >
            <el-form label-position="left" label-width="0px" class="demo-ruleForm  loginform" :model='ruleForm' :rules="rules" ref='ruleForm' v-show="isFormShow">
                <div class="form-wrap">
                <h3 class="title">
                    <span>{{customTemp.title}}</span>
                </h3>
                <el-form-item prop='mobile'>
                    <el-input type="text" auto-complete="off" placeholder="手机号码" v-model='ruleForm.mobile' maxlength="11" ></el-input>
                </el-form-item>
                <el-form-item prop='imgCode'>
                    <el-input type="text" auto-complete="off" placeholder="图形验证码" v-model='ruleForm.imgCode' style="width:95px;"
                   maxlength="4" @keyup.native="showPhoneBtn"></el-input>
                    <img :src="captcha" style="width:110px;  vertical-align: middle;cursor:pointer;" @click="refreshCaptcha">
                    <span @click="refreshCaptcha" class="captcha">(换一张)</span>
                </el-form-item> 
                <el-form-item prop='vcode'>
                    <el-input type="text" auto-complete="off" placeholder="手机验证码" v-model='ruleForm.vcode' style="width:200px;"></el-input>
                       <div class="smsBtn"> <el-button type="primary"  @click="onGetPhoneCode" v-show="show" :disabled="smsBtnShow">获取验证码</el-button>
            <el-button type="primary"  disabled v-show="!show" >重新获取({{count}})</el-button></div>
                    <!--span @click=onGetPhoneCode><send-sms-btn ></send-sms-btn></span-->
                </el-form-item>  
                <el-form-item prop='passwd'>
                    <el-input type="password" maxlength="20"  placeholder="密码"
                        v-model='ruleForm.passwd' ></el-input>
                    <span>字母和数字，6-20个字符，不支持空格</span>
                </el-form-item>
                <el-form-item prop='checkPassword'>
                    <el-input type="password"  placeholder="确认密码"
                        v-model='ruleForm.checkPassword' ></el-input>
                </el-form-item>    
                <el-form-item prop="checked">    
                    <el-checkbox-group v-model="ruleForm.checked" v-show="customTemp.isShow" >
                        <el-checkbox label="我已经认真阅读并同意" name="checked" required="true"></el-checkbox><a @click="dialogVisible = true">《树熊云注册协议》</a>
                    </el-checkbox-group>                  
                    <el-button type="primary" class="w100" @click='onReg("ruleForm")'>{{customTemp.btn}}
                    </el-button>
                </el-form-item>
                </div>
            </el-form>
            <el-dialog :title="agreement.title" :visible.sync="dialogVisible"
              width="100%">
              <span >
                    {{agreement.content}}
               </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
            <div class="reg-success" v-show="!isFormShow">
                <i ></i>
                {{customTemp.msg}}，直接 <router-link :to="'/login/'">登录</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../../theme/theme.less'; 
@import 'reg.less';
.el-button--primary.el-button.is-disabled, .el-button--primary.el-button.is-disabled:focus, .el-button--primary.el-button.is-disabled:hover{
    background: #eef1f6;
    border: none;   
    font-size: 16px;
    &:focus, &:hover {
        background: #eef1f6;
    }

}
</style>
<script>
    module.exports = require('./register');
</script>