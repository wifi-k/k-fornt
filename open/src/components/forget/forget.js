/**
 * Created by saiying.ding on 2018/5/29.
 */
var self = {};
import Login from '../../config/management/login';
import Md5 from '../../utils/md5.js';
import Common from '../common'
export default {
    name: 'forget',
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
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            isOneShow: true,            
            winSize: {
                width: '',
                height: '',
                paddingTop: ''
            },
            ruleForm1: {
                mobile: '',
                imgCode: '',
                imgCodeId: '',
                vcode: ''
            },
            captcha: '',
            ruleForm: {
                password: '',
                checkPassword: '',
            },
            rules: {
                password: [{ validator: validatePass, trigger: 'blur' }],
                checkPassword: [{ validator: validatePass2, trigger: 'blur'}],
            }
        }
    },methods: {
        setSize() {
            self.winSize.width = window.innerWidth + "px";
            var wHeight = parseInt(window.innerHeight),
                pTop = (wHeight- 520) / 2 ;
            self.winSize['padding-top'] = pTop  + 'px';
            self.winSize.height = wHeight - pTop + "px";
           
        },
        refreshCaptcha(){
            Login.getImgCode().then(p=>{
                let Json = p.data.data;
                self.captcha = Json.imgCodeUrl;
                self.ruleForm1.imgCodeId = Json.imgCodeId;
            },p=>{})
        },  
        onGetPhoneCode(){
            let params = {
                type: 2,
                mobile: self.ruleForm1.mobile,
                imgCodeId: self.ruleForm1.imgCodeId,
                imgCode: self.ruleForm1.imgCode
            }
            Login.getPhoneCode(params).then(p=>{
                let Json = p.data.data;
                console.log(Json)
                
            },p=>{})
        },
        onLogin(ref) {
            self.$refs[ref].validate((valid) => {
               if (valid) {
                    let params = {
                        
                       
                    };


               }
            });
        },
        resetForm(ref) {
            self.$refs[ref].resetFields();
        }
    },
    beforeCreate () {
        self = this;
        console.log(self)
    },
    mounted(){   
        self.refreshCaptcha();   
        self.setSize();
        window.onresize = function () {
            self.setSize();
        };
    }
}