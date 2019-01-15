/**
 *  Created by saiyingding on 2018/5/29.
 */

var self = {};
import Login from '../../../config/management/login';
import Util from '../../../utils/index.js';
import Md5 from '../../../utils/md5.js';
import Common from '../../common/';
import {validatePhone, validateEMail} from '../../../utils/validate.js';
export default {
    name: 'personal',
    components: Common,
    data(){         
         var validatePass = (rule, value, callback) => {
             if (value === '') {
                 callback(new Error('请输入密码'));
             } else {
                if(/^[a-zA-Z0-9]{6,20}$/.test(value)){
                    if (this.ruleForm.checkPassword !== '') {
                        this.$refs.passwordForm.validateField('checkPassword');
                    }
                    callback();
                }else{
                    callback(new Error('字母和数字，6-20个字符，不支持空格'));
                }
                 
             }
         };
         var validatePass2 = (rule, value, callback) => {
             if (value === '') {
                 callback(new Error('请再次输入密码'));
             } else if (value !== this.ruleForm.passwd) {
                 callback(new Error('两次输入密码不一致!'));
             } else {
                 callback();
             }
         };
        return {
            title:'我是父组件的数据',
            data: {
                name: '',
                email: '',
                mobile: '',
                pass: '******',
                imgCode: '',
                imgCodeId: '',
                passwd: '',
                checkPassword: '',
                vcode: ''
            },
            ruleForm: {
                passwd: '',
                checkPassword: '', 
            },
            userName: {
                title: '用户名修改',
                isShow: false
            },
            userNameRules: {
                userName: [{required: true, message: '请输入用户名', trigger: 'blur'}], 
            },
            email: {
                title: '邮箱绑定',
                isShow: false
            },
            emailRules: {
                email: [ { required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }], 
            },
            show: true,
            phone: {
                
                title: '手机号码绑定',
                isShow: false
            },
            smsBtnShow: true,
            captcha: '',
            phoneRules: {
                mobile: [{required: true,  validator: validatePhone, trigger: 'blur'}],  
                imgCode: [{required: true, message: '请输入图形验证码', trigger: 'blur'}],  
                vcode: [{required: true, message: '请输入手机验证码', trigger: 'blur'}], 
            },
            password: {
                title: '密码修改',
                isShow: false
            },
            passwordRules: {
                passwd: [{ required: true,validator: validatePass, trigger: 'blur' }],
                checkPassword: [{ required: true,validator: validatePass2, trigger: 'blur'}],
            },
            emailForm: {
                email: ''
            },
            emailRules: {
                email:[
                  { required: true, validator: validateEMail, trigger: 'blur' }
                ]
            },
            timeCount: 60,
            count: ''
        }
    },
    beforeCreate () {
        self = this;
    },
    methods:{
        showPhoneBtn(){
            if(self.data.imgCode.length == 4){
                self.smsBtnShow = false;
            }
        },
        onGetPhoneCode(){
            let params = {
                type: 3,
                mobile: self.data.mobile,
                imgCodeId: self.data.imgCodeId,
                imgCode: self.data.imgCode
            }
            Login.getPhoneCode(params).then(p=>{
                let JSON = p.data;
                if(JSON.code != '0'){
                    this.$notify({                                    
                        title:"获取失败",
                        message: JSON.msg,
                        type:'error',
                        duration: 1500
                    });
                }else{
                    const TIME_COUNT = self.timeCount;
                    if (!self.timer) {
                        
                      self.count = TIME_COUNT;
                      self.show = false;
                      self.timer = setInterval(() => {
                      if (self.count > 0 && self.count <= TIME_COUNT) {
                        console.log(1)
                        self.count--;
                       } else {
                        self.show = true;
                        clearInterval(self.timer);
                        self.timer = null;
                       }
                      }, 1000)
                     }
                } 
            },p=>{})
        },
        refreshCaptcha(){
            Login.getImgCode().then(p=>{
                let Json = p.data.data;
                self.captcha = Json.imgCodeUrl;
                self.data.imgCodeId = Json.imgCodeId;
            },p=>{})
        },
        handleClose(formName){
           
            if (this.$refs[formName] !== undefined) {
           
                //this.$refs[formName].resetFields();
                this.data.passwd= '';
                this.data.checkPassword = '';
            }
        },
        cancleForm(formName){
            if (this.$refs[formName] !== undefined) {
                this.$refs[formName].resetFields();
            }
            //this.$refs[formName].resetFields();
            this.userName.isShow = false;
            this.email.isShow = false;
            this.phone.isShow = false;
            this.password.isShow = false;

            self.timeCount = 60;
            self.show = true;
            self.data.vcode ='';
            self.data.imgCode = '';
            self.smsBtnShow = true;
        },
        handleEditUserName(){
            this.userName.isShow = true;
        },
        submitEditUserName(formName){
            self.$refs[formName].validate((valid)=> {               
                if (valid) {
                    let param = {};
                    param = {
                        name : self.data.name
                    }
                    
                    
                    Login.setInfo(param).then(p=>{                        
                        if(p.data.code == 0){
                            self.updateLoginInfo(param);
                            this.$notify({
                                title:"修改",
                                message:"用户名修改成功！",
                                type:'success',
                                duration: 3000
                            });
                            this.userName.isShow = false;
                        }
                        else{
                            //通用报错 
                             //通用报错
                             if( p.data.code == 1 || p.data.code == 2){
                              self.$token()
                        } 
                        }
                    });
                }
                else{
                    return false;
                }
            });
        },
        handleEditEmail(){
            this.email.isShow = true;
        },
        submitEditEmail(formName){
            this.$refs[formName].validate((valid)=> {

                if (valid) {
                    let param = {};
                    param = {
                        email : this.data.email
                    }
                    Login.modifyEmail(param).then(p=>{                        
                        if(p.data.code == 0){
                            self.updateLoginInfo(param);
                            this.$notify({
                                title:"绑定",
                                message:"E-mail绑定成功,请去邮箱激活。",
                                type:'success',
                                duration: 3000
                            });
                            this.email.isShow = false;  
                        }
                        else{
                            //通用报错 
                             //通用报错
                             if( p.data.code == 1 || p.data.code == 2){
                              self.$token()
                        } 
                        }
                    })
                               
                }
                else{
                    return false;
                }
            });
        },
        handleEditPhone(){
            self.phone.isShow = true;
            self.refreshCaptcha();
        },
        submitEditPhone(formName){            
            this.$refs[formName].validate((valid)=> {               
                if (valid) {
                    let param = {};
                    param = {
                        mobile : self.data.mobile,
                        vcode: self.data.vcode
                    }
                    Login.verifyMobile(param).then(p=>{                        
                        if(p.data.code == 0){
                            self.updateLoginInfo({mobile: self.data.mobile});
                            this.$notify({
                                title:"手机绑定",
                                message:"手机号码重新绑定成功！",
                                type:'success',
                                duration: 3000
                            });
                        this.phone.isShow = false;   

                        self.timeCount = 60;
                        self.show = true;
                        self.data.vcode ='';
                        self.data.imgCode = '';
                        self.smsBtnShow = true;
                        }
                        else{
                            //通用报错 
                             //通用报错
                             if( p.data.code == 1 || p.data.code == 2){
                              self.$token()
                        } 
                        }
                    });
                              
                }
                else{
                    return false;
                }
            });
        },
        handleEditPassword(){
            this.password.isShow = true;
        },
        submitEditPassword(formName){
           
            // 校验有问题？？
            this.$refs[formName].validate((valid)=> {   
                       
                if (valid) {
                    let param = {};
                    param = {
                        passwd : Md5(self.ruleForm.passwd)
                    }
                    Login.resetPasswd(param).then(p=>{                        
                        if(p.data.code == 0){
                            self.$notify({
                            title:"修改密码",
                            message:"密码修改成功！",
                            type:'success',
                            duration: 3000
                        });
                        self.password.isShow = false;  
                        self.$refs[formName].resetFields();   
                        }
                        else{
                            //通用报错
                            if( p.data.code == 1 || p.data.code == 2){
                                  self.$token()
                            } 
                        }
                    })
                            
                }else{
                    return false;
                }
            });
            
        },
        updateLoginInfo(param){
            var logininfo = self.$store.state.userinfo.logininfo;
            var newLoginInfo = Util.extend(logininfo, param);    
            self.$store.dispatch('update_logininfo',{
                logininfo: newLoginInfo
            });

        },
    },
    mounted(){
      setTimeout(() => {//此处不加延时器 会造成页面空白 刷新后才会显示个人信息
         let infoData = self.$store.state.userinfo.logininfo;
              self.data.mobile = infoData.mobile;
              self.data.name = infoData.name;
              self.data.email = infoData.email;
      }, 200); 
    },
}