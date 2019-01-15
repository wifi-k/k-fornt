<template>
  <el-row class="wrapper">
    <el-form  label-width="120px" :model="data">
      <el-form-item label="用户名：" prop="name">
       <span class="lableData">{{data.name}}</span>   <a  @click="handleEditUserName">修改</a>
      </el-form-item>
      <el-form-item label="E-mail：" prop="email">
        <span class="lableData">{{data.email}}</span>  <a v-show="data.email =='' || data.email == null"  @click="handleEditEmail">添加</a> <a v-show="!data.email ==''" @click="handleEditEmail">修改</a>
      </el-form-item>
      <el-form-item label="手机号码：" prop="mobile">
       <span class="lableData">{{data.mobile}}</span>  <a @click="handleEditPhone">修改</a>
      </el-form-item>
      <el-form-item label="登录密码：" prop="passpass">
       <span class="lableData">{{data.pass}}</span>  <a @click="handleEditPassword">修改</a>
      </el-form-item>          
    </el-form>  
    <el-dialog :visible.sync="userName.isShow" :inline="true"  :show-close="false" :title="userName.title"    >
        <el-form :model="data" :inline="true"  label-width="100px" ref="userName" :rules="userNameRules">
            <el-form-item label="用户名：" prop="name">
                <el-input v-model="data.name" maxlength="10"></el-input>
            </el-form-item>  
        </el-form>
        <!-- <div v-show="addMerchantShow" class="showError"><i class="fa fa-warning"></i>{{showMessage}}</div> -->
        
        <div class="dialog-footer" slot="footer">
            <el-button @click="cancleForm('userName')" >取 消</el-button>
            <el-button type="primary" @click="submitEditUserName('userName')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog width="40%" :visible.sync="email.isShow"  :show-close="false" :inline="true" :title="email.title">
        <el-form  :model="data" :inline="true"  label-width="100px" ref="emailForm" :rules="emailRules" @submit.native.preven>
            <el-form-item label="E-mail：" prop="email" >
                <el-input v-model="data.email"></el-input>
            </el-form-item>  
        </el-form>        
        <div class="dialog-footer" slot="footer">
            <el-button @click="cancleForm('emailForm')" >取 消</el-button>
            <el-button type="primary" @click="submitEditEmail('emailForm')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :visible.sync="phone.isShow" :show-close="false" :inline="true" :title="phone.title"    >
        <el-form :model="data" :inline="true"  label-width="130px" ref="phone" :rules="phoneRules">
                <!--BaseFormPhone :labelName="phone.title" :isRequire="true" :prop="data.mobile"></BaseFormPhone-->
                <el-form-item prop='mobile' label="手机号码：" >
                    <el-input type="text"  auto-complete="off"  v-model='data.mobile' maxlength="11" ></el-input>
                </el-form-item>
                <el-form-item prop='imgCode' label="图形验证码：">
                    <el-input type="text" auto-complete="off" v-model='data.imgCode' style="width:95px;"
                   maxlength="4" @keyup.native="showPhoneBtn"></el-input>
                    <img :src="captcha" style="width:110px;  vertical-align: middle;cursor:pointer;" @click="refreshCaptcha">
                    <span @click="refreshCaptcha" class="captcha">(换一张)</span>
                </el-form-item> 
                <el-form-item prop='vcode' label="手机验证码：" >
                    <el-input type="text" auto-complete="off"  v-model='data.vcode' style="width:200px;"></el-input>
                       <div class="smsBtn"> <el-button type="primary"  @click="onGetPhoneCode" v-show="show" :disabled="smsBtnShow">获取验证码</el-button>
            <el-button type="primary"  disabled v-show="!show" >重新获取({{count}})</el-button></div>
                    <!--span @click=onGetPhoneCode><send-sms-btn ></send-sms-btn></span-->
                </el-form-item>  
        </el-form>
        
        <div class="dialog-footer" slot="footer">
            <el-button @click="cancleForm('phone')" >取 消</el-button>
            <el-button type="primary" @click="submitEditPhone('phone')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :visible.sync="password.isShow" :show-close="false" :inline="true" :title="password.title" >
        <el-form :model="ruleForm" :inline="true"  label-width="100px" ref="passwordForm" :rules="passwordRules">
            <el-form-item label="新密码：" prop="passwd">
                <el-input type="password" maxlength="20" v-model="ruleForm.passwd"></el-input>
            </el-form-item> 
            <el-form-item label="确认密码：" prop="checkPassword">
                <el-input type="password" maxlength="20" v-model="ruleForm.checkPassword"></el-input>
            </el-form-item>  
        </el-form>        
        <div class="dialog-footer" slot="footer">
            <el-button @click="cancleForm('passwordForm')" >取 消</el-button>
            <el-button type="primary" @click="submitEditPassword('passwordForm')">确 定</el-button>
        </div>
    </el-dialog>
  </el-row>


</template>

<style lang="less" scoped>
@import '../../../theme/theme.less'; 
.lableData{
  display: inline-block;
  width:170px;
}
.el-dialog__wrapper >.el-dialog--small{
  width:40%;
}
</style>
<script>
  module.exports = require('./personal');
</script>
