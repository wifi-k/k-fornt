/**
 * Created by saiying.ding on 2018/5/29.
 */
import Login from '../../config/management/login';

import Md5 from '../../utils/md5.js';
import Common from '../common'
var self = {};
export default {
    name: 'email', 
    components:Common, 
    data(){
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {

          callback();
        }
      };
        return {
            winSize: {
                width: '',
                height: '',
                paddingTop: ''
            },
            ruleForm: {
              checkPass: '',
              token:'',
              email:''
            },
            rules2:{
              checkPass: [
                { validator: validatePass2, trigger: 'blur' }
              ],
            },
            widthNum:320
            
           
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
        
        onReg(ref) { 
         
            const h = self.$createElement;
            // this.$notify({
            //   title: '',
            //   message: h('p', { style: 'color: black'}, '修改成功')
            // })
            this.$refs[ref].validate((valid)=>{
              // console.log(valid)
              if(valid){
                let param = {
                  token:self.ruleForm.token,
                  passwd:Md5(self.ruleForm.checkPass)
                }
                Login.verifyEmail(param).then(p=>{
                  var res = p.data
                  console.log(res)
                  if(res.code === 0){
                    self.$notify({
                      // title:"成功",
                      message:"邮箱绑定成功",
                      type:'success',
                      duration: 1500
                  });
                    self.$router.push('/')
                  }else{
                    self.$notify({
                      title:"失败",
                      message:`${res.msg}`,
                      type:'error',
                      duration: 1500
                  });
                  }
                },p=>{})
              }
            })
               
        },
         adaptPhone() {
          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
              /*window.location.href="你的手机版地址";*/
              self.widthNum = 200
          }
          else {
              // alert("pc")
              self.widthNum = 320
          }
      }
    },
    beforeCreate () {
        self = this;
    },
    mounted(){   
      self.setSize();
      window.onresize = function () {
          self.setSize();
      };
      self.adaptPhone()
      var emailToken = self.$route.query
        var obj
        for (let key in emailToken) {
              obj = key
        }
        // console.log(obj)
      self.ruleForm.email = obj.split('email=')[1]
      self.ruleForm.token = obj.split('token=')[1].split('&')[0]
    }
}