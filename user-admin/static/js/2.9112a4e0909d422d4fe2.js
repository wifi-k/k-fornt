webpackJsonp([2],{498:function(e,t,r){function o(e){r(979)}var a=r(202)(r(690),r(993),o,"data-v-3a7d7592",null);e.exports=a.exports},521:function(e,t,r){e.exports={headNav:function(e){return r.e(15).then(function(){var t=[r(553)];e.apply(null,t)}.bind(this)).catch(r.oe)},leftMenu:function(e){return r.e(14).then(function(){var t=[r(554)];e.apply(null,t)}.bind(this)).catch(r.oe)},bread:function(e){return r.e(17).then(function(){var t=[r(552)];e.apply(null,t)}.bind(this)).catch(r.oe)},WebMain:function(e){return r.e(16).then(function(){var t=[r(489)];e.apply(null,t)}.bind(this)).catch(r.oe)},sendSmsBtn:function(e){return r.e(13).then(function(){var t=[r(556)];e.apply(null,t)}.bind(this)).catch(r.oe)},BaseFormPhone:function(e){return r.e(18).then(function(){var t=[r(555)];e.apply(null,t)}.bind(this)).catch(r.oe)}}},524:function(e,t){function r(e){return p(o(u(e),e.length*h))}function o(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,o=-271733879,a=-1732584194,c=271733878,u=0;u<e.length;u+=16){var p=r,m=o,h=a,v=c;r=n(r,o,a,c,e[u+0],7,-680876936),c=n(c,r,o,a,e[u+1],12,-389564586),a=n(a,c,r,o,e[u+2],17,606105819),o=n(o,a,c,r,e[u+3],22,-1044525330),r=n(r,o,a,c,e[u+4],7,-176418897),c=n(c,r,o,a,e[u+5],12,1200080426),a=n(a,c,r,o,e[u+6],17,-1473231341),o=n(o,a,c,r,e[u+7],22,-45705983),r=n(r,o,a,c,e[u+8],7,1770035416),c=n(c,r,o,a,e[u+9],12,-1958414417),a=n(a,c,r,o,e[u+10],17,-42063),o=n(o,a,c,r,e[u+11],22,-1990404162),r=n(r,o,a,c,e[u+12],7,1804603682),c=n(c,r,o,a,e[u+13],12,-40341101),a=n(a,c,r,o,e[u+14],17,-1502002290),o=n(o,a,c,r,e[u+15],22,1236535329),r=i(r,o,a,c,e[u+1],5,-165796510),c=i(c,r,o,a,e[u+6],9,-1069501632),a=i(a,c,r,o,e[u+11],14,643717713),o=i(o,a,c,r,e[u+0],20,-373897302),r=i(r,o,a,c,e[u+5],5,-701558691),c=i(c,r,o,a,e[u+10],9,38016083),a=i(a,c,r,o,e[u+15],14,-660478335),o=i(o,a,c,r,e[u+4],20,-405537848),r=i(r,o,a,c,e[u+9],5,568446438),c=i(c,r,o,a,e[u+14],9,-1019803690),a=i(a,c,r,o,e[u+3],14,-187363961),o=i(o,a,c,r,e[u+8],20,1163531501),r=i(r,o,a,c,e[u+13],5,-1444681467),c=i(c,r,o,a,e[u+2],9,-51403784),a=i(a,c,r,o,e[u+7],14,1735328473),o=i(o,a,c,r,e[u+12],20,-1926607734),r=s(r,o,a,c,e[u+5],4,-378558),c=s(c,r,o,a,e[u+8],11,-2022574463),a=s(a,c,r,o,e[u+11],16,1839030562),o=s(o,a,c,r,e[u+14],23,-35309556),r=s(r,o,a,c,e[u+1],4,-1530992060),c=s(c,r,o,a,e[u+4],11,1272893353),a=s(a,c,r,o,e[u+7],16,-155497632),o=s(o,a,c,r,e[u+10],23,-1094730640),r=s(r,o,a,c,e[u+13],4,681279174),c=s(c,r,o,a,e[u+0],11,-358537222),a=s(a,c,r,o,e[u+3],16,-722521979),o=s(o,a,c,r,e[u+6],23,76029189),r=s(r,o,a,c,e[u+9],4,-640364487),c=s(c,r,o,a,e[u+12],11,-421815835),a=s(a,c,r,o,e[u+15],16,530742520),o=s(o,a,c,r,e[u+2],23,-995338651),r=l(r,o,a,c,e[u+0],6,-198630844),c=l(c,r,o,a,e[u+7],10,1126891415),a=l(a,c,r,o,e[u+14],15,-1416354905),o=l(o,a,c,r,e[u+5],21,-57434055),r=l(r,o,a,c,e[u+12],6,1700485571),c=l(c,r,o,a,e[u+3],10,-1894986606),a=l(a,c,r,o,e[u+10],15,-1051523),o=l(o,a,c,r,e[u+1],21,-2054922799),r=l(r,o,a,c,e[u+8],6,1873313359),c=l(c,r,o,a,e[u+15],10,-30611744),a=l(a,c,r,o,e[u+6],15,-1560198380),o=l(o,a,c,r,e[u+13],21,1309151649),r=l(r,o,a,c,e[u+4],6,-145523070),c=l(c,r,o,a,e[u+11],10,-1120210379),a=l(a,c,r,o,e[u+2],15,718787259),o=l(o,a,c,r,e[u+9],21,-343485551),r=d(r,p),o=d(o,m),a=d(a,h),c=d(c,v)}return Array(r,o,a,c)}function a(e,t,r,o,a,n){return d(c(d(d(t,e),d(o,n)),a),r)}function n(e,t,r,o,n,i,s){return a(t&r|~t&o,e,t,n,i,s)}function i(e,t,r,o,n,i,s){return a(t&o|r&~o,e,t,n,i,s)}function s(e,t,r,o,n,i,s){return a(t^r^o,e,t,n,i,s)}function l(e,t,r,o,n,i,s){return a(r^(t|~o),e,t,n,i,s)}function d(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function c(e,t){return e<<t|e>>>32-t}function u(e){for(var t=Array(),r=(1<<h)-1,o=0;o<e.length*h;o+=h)t[o>>5]|=(e.charCodeAt(o/h)&r)<<o%32;return t}function p(e){for(var t=m?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<4*e.length;o++)r+=t.charAt(e[o>>2]>>o%4*8+4&15)+t.charAt(e[o>>2]>>o%4*8&15);return r}var m=0,h=8;e.exports=r},690:function(e,t,r){e.exports=r(705)},704:function(e,t){var r={title:"树熊云注册协议",content:"本免费Wi-Fi服务由用户当前上网环境所在的技术服务商提供并由杭州树熊网络有限公司开发和提供技术支持。"};e.exports=r},705:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(203),a=r(704),n=r.n(a),i=r(524),s=r.n(i),l=r(521),d=r.n(l),c={};t.default={name:"register",components:d.a,data:function(){var e=this,t=function(t,r,o){""===r?o(new Error("请输入密码")):/^[a-zA-Z0-9]{6,20}$/.test(r)?(""!==e.ruleForm.checkPassword&&e.$refs.ruleForm.validateField("checkPassword"),o()):o(new Error("字母和数字，6-20个字符，不支持空格"))},r=function(t,r,o){""===r?o(new Error("请再次输入密码")):r!==e.ruleForm.passwd?o(new Error("两次输入密码不一致!")):o()};return{type:1,customTemp:{title:"",isShow:!0,btn:"",msg:""},tempArr:[{title:"注册树熊云",isShow:!0,btn:"注册",msg:"注册成功"},{title:"忘记密码",isShow:!1,btn:"提交",msg:"密码重置成功"}],show:!0,smsBtnShow:!0,count:"",timeCount:60,isFormShow:!0,token:this.$route.query.token,agreement:n.a,dialogVisible:!1,winSize:{width:"",height:"",paddingTop:""},ruleForm:{mobile:"",imgCode:"",imgCodeId:"",vcode:"",passwd:"",checkPassword:"",checked:[]},captcha:"",rules:{mobile:[{required:!0,validator:function(e,t,r){if(""===t)r(new Error("请输入手机号码"));else{/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(t)?r():r(new Error("手机号码格式不对!"))}},trigger:"blur"}],imgCode:[{required:!0,message:"请输入图形验证码",trigger:"blur"}],vcode:[{required:!0,message:"请输入手机验证码",trigger:"blur"}],passwd:[{required:!0,validator:t,trigger:"blur"}],checkPassword:[{required:!0,validator:r,trigger:"blur"}],checked:[{type:"array",required:!0,message:"请仔细阅读《树熊云注册协议》 ",trigger:"change"}]}}},methods:{setSize:function(){c.winSize.width=window.innerWidth+"px";var e=parseInt(window.innerHeight),t=(e-520)/2;c.winSize["padding-top"]=t+"px",c.winSize.height=e-t+"px"},showPhoneBtn:function(){4==c.ruleForm.imgCode.length&&(c.smsBtnShow=!1)},refreshCaptcha:function(){o.a.getImgCode().then(function(e){var t=e.data.data;c.captcha=t.imgCodeUrl,c.ruleForm.imgCodeId=t.imgCodeId},function(e){})},getCode:function(){},onGetPhoneCode:function(){var e=this,t={type:c.type,mobile:c.ruleForm.mobile,imgCodeId:c.ruleForm.imgCodeId,imgCode:c.ruleForm.imgCode};o.a.getPhoneCode(t).then(function(t){var r=t.data;if("0"!=r.code)e.$notify({title:"获取失败",message:r.msg,type:"error",duration:1500});else{var o=e.timeCount;e.timer||(e.count=o,e.show=!1,e.timer=setInterval(function(){e.count>0&&e.count<=o?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3))}},function(e){})},onReg:function(e){var t=this;c.$refs[e].validate(function(e){if(e){var r={mobile:c.ruleForm.mobile,vcode:c.ruleForm.vcode,passwd:s()(c.ruleForm.passwd)};2!=c.type?o.a.reg(r).then(function(e){var r=e.data;"0"==r.code?c.isFormShow=!1:t.$notify({title:"注册失败",message:r.msg,type:"error",duration:1500})},function(e){}):o.a.forgetPasswd(r).then(function(e){var r=e.data;"0"==r.code?c.isFormShow=!1:t.$notify({title:"密码重置失败!",message:r.msg,type:"error",duration:1500})},function(e){})}})},resetForm:function(e){c.$refs[e].resetFields()}},beforeCreate:function(){c=this},mounted:function(){var e=c.$route.query.type,t=c.rules.checked,r=void 0==e?1:parseInt(e);c.type=r,c.customTemp=c.tempArr[r-1],2==r?delete c.rules.checked:c.rules.checked=t,c.setSize(),c.refreshCaptcha(),window.onresize=function(){c.setSize()}}}},712:function(e,t,r){t=e.exports=r(487)(!1),t.push([e.i,"html[data-v-3a7d7592]{font-family:-apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;word-break:break-word;text-rendering:optimizeLegibility;color:#333}body[data-v-3a7d7592]{margin:0}.fr[data-v-3a7d7592]{float:right}.grid-content[data-v-3a7d7592]{border-radius:4px;min-height:36px;line-height:36px;color:#fff;text-indent:10px}.bg-purple-dark[data-v-3a7d7592]{background:#99a9bf}.el-pager li.active[data-v-3a7d7592]{border-color:#30b6b9;background-color:#30b6b9}.el-pager li[data-v-3a7d7592]:hover,.el-pagination .btn-next[data-v-3a7d7592]:hover,.el-pagination .btn-prev[data-v-3a7d7592]:hover{color:#30b6b9}.el-pager li.active[data-v-3a7d7592]:hover{color:#fff}.pageContainer[data-v-3a7d7592]{float:right;margin:20px 0}.el-form-item.button-area[data-v-3a7d7592]{margin-bottom:10px}a[data-v-3a7d7592]{color:#30b6b9;text-decoration:none;cursor:pointer}a[data-v-3a7d7592]:hover{color:#5bd5d8}.showError[data-v-3a7d7592]{position:absolute;top:-18px;left:-50px;padding-left:50px;color:#ff4949}.el-button--primary[data-v-3a7d7592]{background:#30b6b9;border:none;font-size:16px}.el-button--primary[data-v-3a7d7592]:focus,.el-button--primary[data-v-3a7d7592]:hover{background:#5bd5d8}.el-button--default.el-button[data-v-3a7d7592]:hover{color:#30b6b9;border-color:#30b6b9}.fa-times-circle[data-v-3a7d7592]{margin-right:5px;vertical-align:middle;font-size:22px}.reg[data-v-3a7d7592]{background:url(/static/img/reg_bg.png) repeat-x #0d1b2e}.reg .el-form-item__content[data-v-3a7d7592]{color:#999}.none[data-v-3a7d7592]{display:none}.myActive[data-v-3a7d7592]{display:block}.font14[data-v-3a7d7592]{font-size:14px;line-height:200%}.wrapper-nodata[data-v-3a7d7592]{padding-top:80px;text-align:center}.wrapper-nodata .small[data-v-3a7d7592]{font-size:14px;line-height:200%}.smsBtn[data-v-3a7d7592]{width:110px;display:inline-block;margin-left:5px;font-size:13px}.smsBtn .el-button+.el-button[data-v-3a7d7592]{margin-left:0}.smsBtn .el-button--primary[data-v-3a7d7592]{font-size:14px;height:36px}.captcha[data-v-3a7d7592]{cursor:pointer}.reg[data-v-3a7d7592]{background-size:100% 100%}.reg .content[data-v-3a7d7592]{margin:0 auto;padding:20px 70px;width:320px;height:480px;background:#fff}.reg .content .title[data-v-3a7d7592]{text-align:center}.reg .el-button--primary.w100[data-v-3a7d7592]{width:100%}.reg .el-form-item__content[data-v-3a7d7592]{line-height:150%}.reg .el-checkbox[data-v-3a7d7592]{padding-bottom:8px}.reg .reg-success[data-v-3a7d7592]{text-align:center}.reg .reg-success i[data-v-3a7d7592]{display:block;margin:0 auto;margin-bottom:30px;margin-top:150px;width:60px;height:58px;background:url(/static/img/icon_success.png);background-size:60px}.el-button--primary.el-button.is-disabled[data-v-3a7d7592],.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:focus,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:hover{background:#eef1f6;border:none;font-size:16px}.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:focus,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:focus:focus,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:focus:hover,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:hover,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:hover:focus,.el-button--primary.el-button.is-disabled[data-v-3a7d7592]:hover:hover{background:#eef1f6}",""])},979:function(e,t,r){var o=r(712);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(488)("bcc1e0b4",o,!0,{})},993:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg",style:e.winSize},[r("div",{staticClass:"content"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.isFormShow,expression:"isFormShow"}],ref:"ruleForm",staticClass:"demo-ruleForm  loginform",attrs:{"label-position":"left","label-width":"0px",model:e.ruleForm,rules:e.rules}},[r("div",{staticClass:"form-wrap"},[r("h3",{staticClass:"title"},[r("span",[e._v(e._s(e.customTemp.title))])]),e._v(" "),r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"手机号码",maxlength:"11"},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"imgCode"}},[r("el-input",{staticStyle:{width:"95px"},attrs:{type:"text","auto-complete":"off",placeholder:"图形验证码",maxlength:"4"},nativeOn:{keyup:function(t){return e.showPhoneBtn(t)}},model:{value:e.ruleForm.imgCode,callback:function(t){e.$set(e.ruleForm,"imgCode",t)},expression:"ruleForm.imgCode"}}),e._v(" "),r("img",{staticStyle:{width:"110px","vertical-align":"middle",cursor:"pointer"},attrs:{src:e.captcha},on:{click:e.refreshCaptcha}}),e._v(" "),r("span",{staticClass:"captcha",on:{click:e.refreshCaptcha}},[e._v("(换一张)")])],1),e._v(" "),r("el-form-item",{attrs:{prop:"vcode"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{type:"text","auto-complete":"off",placeholder:"手机验证码"},model:{value:e.ruleForm.vcode,callback:function(t){e.$set(e.ruleForm,"vcode",t)},expression:"ruleForm.vcode"}}),e._v(" "),r("div",{staticClass:"smsBtn"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{type:"primary",disabled:e.smsBtnShow},on:{click:e.onGetPhoneCode}},[e._v("获取验证码")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{type:"primary",disabled:""}},[e._v("重新获取("+e._s(e.count)+")")])],1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"passwd"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"密码"},model:{value:e.ruleForm.passwd,callback:function(t){e.$set(e.ruleForm,"passwd",t)},expression:"ruleForm.passwd"}}),e._v(" "),r("span",[e._v("字母和数字，6-20个字符，不支持空格")])],1),e._v(" "),r("el-form-item",{attrs:{prop:"checkPassword"}},[r("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.ruleForm.checkPassword,callback:function(t){e.$set(e.ruleForm,"checkPassword",t)},expression:"ruleForm.checkPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"checked"}},[r("el-checkbox-group",{directives:[{name:"show",rawName:"v-show",value:e.customTemp.isShow,expression:"customTemp.isShow"}],model:{value:e.ruleForm.checked,callback:function(t){e.$set(e.ruleForm,"checked",t)},expression:"ruleForm.checked"}},[r("el-checkbox",{attrs:{label:"我已经认真阅读并同意",name:"checked",required:"true"}}),r("a",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("《树熊云注册协议》")])],1),e._v(" "),r("el-button",{staticClass:"w100",attrs:{type:"primary"},on:{click:function(t){e.onReg("ruleForm")}}},[e._v(e._s(e.customTemp.btn)+"\n                ")])],1)],1)]),e._v(" "),r("el-dialog",{attrs:{title:e.agreement.title,visible:e.dialogVisible,width:"100%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("span",[e._v("\n                "+e._s(e.agreement.content)+"\n           ")]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFormShow,expression:"!isFormShow"}],staticClass:"reg-success"},[r("i"),e._v("\n            "+e._s(e.customTemp.msg)+"，直接 "),r("router-link",{attrs:{to:"/login/"}},[e._v("登录")])],1)],1)])},staticRenderFns:[]}}});