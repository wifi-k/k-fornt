/**
 * Created by saiying.ding on 2018/5/29.
 */
import Login from '../../config/management/login';
import Agreement from './agreement.js';

import Md5 from '../../utils/md5.js';
import Common from '../common'
var self = {};
export default {
    name: 'register', 
    components:Common, 
    data(){
        var validatePass = (rule, value, callback) => {
             if (value === '') {
                 callback(new Error('请输入密码'));
             } else {
                if(/^[a-zA-Z0-9]{6,20}$/.test(value)){
                    if (this.ruleForm.checkPassword !== '') {
                        this.$refs.ruleForm.validateField('checkPassword');
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
            type: 1,
            customTemp: {
                title: '',
                isShow: true,
                btn: '',
                msg: ''
            },
            tempArr:[{
                title: '注册树熊云',
                isShow: true,
                btn: '注册',
                msg: '注册成功'
            },{
                title: '忘记密码',
                isShow: false,
                btn: '提交',
                msg: '密码重置成功'
            }],
            show: true,
            smsBtnShow: true,
            count: '',
            timeCount: 60,
            isFormShow: true,            
            token:this.$route.query.token,
            agreement: Agreement,
            dialogVisible: false,
            winSize: {
                width: '',
                height: '',
                paddingTop: ''
            },
            ruleForm: {
                mobile: '',
                imgCode: '',
                imgCodeId: '',
                vcode: '',
                passwd: '',
                checkPassword: '',                
                checked: []
            },
            captcha: '',
            rules: {
                mobile: [{required: true,  validator:(rule, value, callback)=>{
                        if (value === '') {
                            callback(new Error('请输入手机号码'));
                        } else {
                            var reg=11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
                            if(reg.test(value)){
                                callback();
                            }else{
                                callback(new Error('手机号码格式不对!'));
                            }
                        }
                    }, trigger: 'blur'}],  
                imgCode: [{required: true, message: '请输入图形验证码', trigger: 'blur'}],  
                vcode: [{required: true, message: '请输入手机验证码', trigger: 'blur'}],                
                passwd: [{ required: true, validator: validatePass, trigger: 'blur' }],
                checkPassword: [{ required: true, validator: validatePass2, trigger: 'blur'}],
                checked:[{type: 'array', required: true,message: '请仔细阅读《树熊云注册协议》 ',   trigger: 'change'}]
            }
        }
    },
    methods: {
        setSize() {
            self.winSize.width = window.innerWidth + "px";
            var wHeight = parseInt(window.innerHeight),
                pTop = (wHeight- 520) / 2 ;
            self.winSize['padding-top'] = pTop  + 'px';
            self.winSize.height = wHeight - pTop + "px";           
        },   
        showPhoneBtn(){
            if(self.ruleForm.imgCode.length == 4){
                self.smsBtnShow = false;
            }
        },
        refreshCaptcha(){
            Login.getImgCode().then(p=>{
                let Json = p.data.data;
                self.captcha = Json.imgCodeUrl;
                self.ruleForm.imgCodeId = Json.imgCodeId;
            },p=>{})
        },  
         getCode(){
          
        } ,
        onGetPhoneCode(){
            let params = {
                type: self.type,
                mobile: self.ruleForm.mobile,
                imgCodeId: self.ruleForm.imgCodeId,
                imgCode: self.ruleForm.imgCode
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
                    const TIME_COUNT = this.timeCount;
                    if (!this.timer) {
                      this.count = TIME_COUNT;
                      this.show = false;
                      this.timer = setInterval(() => {
                      if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                       } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                       }
                      }, 1000)
                     }
                } 
            },p=>{})
        },
        onReg(ref) {
            self.$refs[ref].validate((valid) => {
               if (valid) {                   
                    let params = {
                        mobile: self.ruleForm.mobile,
                        vcode: self.ruleForm.vcode,
                        passwd: Md5(self.ruleForm.passwd)
                    };
                    if(self.type != 2){
                        Login.reg(params).then(p=>{
                            let JSON = p.data;
                            if(JSON.code == '0'){
                                self.isFormShow = false;
                            }else{
                                this.$notify({                                    
                                    title:"注册失败",
                                    message: JSON.msg,
                                    type:'error',
                                    duration: 1500
                                });
                            }
                        },p=>{})
                    }else{
                        Login.forgetPasswd(params).then(p=>{
                            let JSON = p.data;
                            if(JSON.code == '0'){
                                self.isFormShow = false;
                            }else{
                                this.$notify({                                    
                                    title:"密码重置失败!",
                                    message: JSON.msg,
                                    type:'error',
                                    duration: 1500
                                });
                            }
                        },p=>{})
                    }
                    
                    
                    

               }
            });
        },
        resetForm(ref) {
            self.$refs[ref].resetFields();
        }
    },
    beforeCreate () {
        self = this;
    },
    mounted(){   

        let _type = self.$route.query.type;
        let checkedString = self.rules.checked;
        let type = (_type == undefined) ? 1 : parseInt(_type);       
        self.type = type; 
        self.customTemp = self.tempArr[type-1];
        if(type == 2){
            delete self.rules.checked
        }else{
            self.rules.checked = checkedString
        }
        
        self.setSize();
        self.refreshCaptcha();
        window.onresize = function () {
            self.setSize();
        };
    }
}