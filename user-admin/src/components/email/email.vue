<template>
    <div class="reg" :style="winSize">        
        <div class="content" :style="{width:widthNum+'px'}">
            <el-form label-position="left" label-width="0px" class="demo-ruleForm  loginform"     ref='ruleForm' :model="ruleForm" :rules="rules2">
                <div class="form-wrap">
                <h4 class="h4"><i></i>请输入密码确认您的邮箱地址</h4>
                <el-form-item style="text-align:center">
                     {{ruleForm.email}}
                </el-form-item>  
                <el-form-item prop='checkPass'>
                    <el-input type="password" v-model="ruleForm.checkPass"  placeholder="确认密码"
                        ></el-input>
                </el-form-item>  
                <el-button type="primary" class="w100" @click='onReg("ruleForm")'>确定
                    </el-button>
               </div>
            </el-form>
           
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../../theme/theme.less'; 
@import '../register/reg.less';

.h4 {
    padding-top: 30px;
    text-align: center;
     font-weight: normal;
     i {
            display: block;
            margin: 0 auto; margin-bottom: 20px;
            width: 60px;
            height: 41px;
            background: url(/static/img/logo.png);
            background-size: 60px;
        }
}
</style>
<script>
    module.exports = require('./email');
</script>