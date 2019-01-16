/**
 * Created by saiying.ding on 2018/5/29.
 */
let self = {};
import Login from '../../config/management/login';
import Md5 from '../../utils/md5.js';
export default {
    name: 'login',
    data(){
        return {
            error: {
                errorShow: false,
                errorMessage: ''
            },            
            token:this.$route.query.token,
            winSize: {
                width: '',
                height: ''
            },
            formOffset:{
                'padding-top': ''
            },
            data: {
                imgCode: '',
                imgCodeId: '',
                mobile: '',
                passwd: ''
            },
            captcha: '',
            rule_data: {
                mobile: [{
                    validator:(rule, value, callback)=>{
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
                    },
                    trigger: 'blur'
                }],
                passwd: [{
                    validator:(rule, value, callback)=>{
                        if (value === '') {
                            callback(new Error('请输入密码'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }],
                imgCode: [{
                    validator:(rule, value, callback)=>{
                        if (value === '') {
                            callback(new Error('请输入图形验证码'));
                        } else {
                            callback();
                        }
                    },                 
                    trigger: 'blur'
                }]
            },
        }
    },
    methods: {
        setSize() {
            self.winSize.width = window.innerWidth + "px";
            self.winSize.height = window.innerHeight + "px";
            self.formOffset['padding-top'] = (parseInt(self.winSize.height)- 500) / 2  + 'px';
        },
        initError(){
            self.error.errorShow = false;
            self.error.errorMessage = '';
        },
        refreshCaptcha(){
            Login.getImgCode().then(p=>{
                let Json = p.data.data;
                self.captcha = Json.imgCodeUrl;
                self.data.imgCodeId = Json.imgCodeId;
            },p=>{})
        },
        onLogin(ref) {            
            self.$refs[ref].validate((valid) => {
               if (valid) {
                    // 使用params = data的时候，params.passwd值变化 影响到data里面的值
                    let params = {
                        imgCode: self.data.imgCode,
                        imgCodeId: self.data.imgCodeId,
                        mobile: self.data.mobile,
                        passwd: Md5(self.data.passwd)
                    };
                    Login.getLogin(params).then(p=>{
                        var _data = p.data;
                        if(_data.code == '0'){                            
                            self.$store.dispatch('update_userinfo',{
                                userinfo: {
                                    token: _data.data.token
                                }
                            }).then(()=>{ 
                                self.$router.push('/');
                            });
                        }
                        else{
                            self.error.errorShow = true;
                            self.error.errorMessage = _data.msg;
                        }
                    },p=>{});
               }
            });
        },
    },
    beforeCreate () {
        self = this;
    },
    mounted(){
        self.refreshCaptcha();      
        self.setSize();
        window.onresize = function () {
            self.setSize();
        };
    }
}