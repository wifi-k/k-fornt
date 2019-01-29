<template>
  <el-row>
    <h4 style="color:rgb(94,97,102);font-size:15px;">实名认证</h4>
    <el-col :span="24">
      <el-form :model="ruleForm2"  :rules="rules2" ref="ruleForm2" label-width="110px" class="demo-ruleForm">
         <el-form-item label="认证状态：">
           <span>{{statusText}}{{reason}}</span>
        </el-form-item>
        <el-form-item label="真实姓名：" prop="name"  >
          <el-input style="width:120px;" type="text" v-model="ruleForm2.name" autocomplete="off" :disabled='formdisabled'></el-input>
        </el-form-item>
        <el-form-item label="身份证号：" prop="idNums"  >
          <el-input maxlength="18" style="width:240px;" v-model="ruleForm2.idNums" :disabled="formdisabled" autocomplete="off"></el-input>
        </el-form-item>
          <el-form-item label="身份证上传：" :model="imgIdUser" prop="imgID"  ref="imgIDrule">
           <el-upload
              class="uploadBox"
              :action="actionPath" 
              :data='postData'
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :disabled="formdisabled"
              accept='image/*'
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div class="el-upload__tip" slot="tip">手持身份证半身照<i class="fa fa-search-plus" @click="dialogShow"></i></div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="imageUrl" alt="">
            </el-dialog>
            <el-dialog :visible.sync="dialogVisibleBlack">
                <img width="100%" :src="imageUrlBack" alt="">
            </el-dialog>
             <el-upload 
                  class="uploadBox"
                  :action="actionPath"
                  :data='postData'
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessBack"
                  :disabled="formdisabled"
                  accept='image/*'
                  >
                  <img v-if="imageUrlBack" :src="imageUrlBack" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <div class="el-upload__tip" slot="tip">身份证反面 <i class="fa fa-search-plus" @click="dialogShowblack"></i></div>
            </el-upload>
            <p class="uploadTip">请确保图片清晰，上传图片大小不超过5MB，图片格式支持JPG，PNG，BMP，GIF。</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" :disabled="formdisabled">提交</el-button>
          <!-- <el-button type="primary" @click="resetForm('ruleForm2')" :disabled="formdisabled">重置</el-button> -->
        </el-form-item>
     </el-form>
    </el-col>
  </el-row>
</template>
<script>
import Login from '../../config/management/login'
import Store from '../../store/store'
let self = {};
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
          const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;
           if (value === '') {
          return callback(new Error('身份证号不能为空'));
        }else 
      
          if(!idcardReg.test(value)) {
            return callback(new Error('身份证号格式不对'));
          }else{
            callback();
          }
      };
      var validatePass = (rule, value, callback) => {
        var regName =/^[\u4e00-\u9fa5]{2,4}$/;
        if (value === '') {
          callback(new Error('姓名不能为空'));
        } else if(!regName.test(value)){
          return callback(new Error('请输入真实姓名'))
        }  {
          callback();
        }
      };
      var checkImg = (rule,value,callback)=>{
        if(self.imageUrl==='' || self.imageUrlBack ==='' ){
          return callback(new Error('请上传图片'))
        }else{
          callback();
        }
      }
      return {
        ruleForm2: {
          name: '',
          idNums: '',
        },
        rules2: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          idNums: [
            { validator: checkAge, trigger: 'blur' }
          ],
          imgID:[
            {validator: checkImg}
          ]
        },
        postData:{
          token:'',
        },
        imageUrl:'',//上传时候显示正面地址（非服务器的）
        imageUrlBack:'',
        actionPath:'https://upload.qiniup.com',
        imgIdBack:'',//请求到的服务器图片地址
        imgIdUser:'',
        statusText:'未认证',//审核的状态
        reason:'',//审核失败原因
        formdisabled:false,
        fileList:[],
        dialogVisibleBlack:false,
        dialogVisible:false,
      };
    },
    methods: {
       handleAvatarSuccess(res, file) {//正面照片上传成功的回调
        self.imageUrl = URL.createObjectURL(file.raw);
        self.imgIdUser = res.key
        // console.log(this.$refs['imgIDrule'])
        // this.$refs['ruleForm2'].clearValidate('ruleForm2')
        Store.set('imgIdUserkey',res.key)
      },
      handleAvatarSuccessBack(res, file) {//身份证背面上传成功的回调
        // console.log(res.key)
        self.imgIdBack = res.key
        self.imageUrlBack = URL.createObjectURL(file.raw);
        Store.set('imgIdbackey',res.key)
      },
      submitForm(formName) {
        self.$refs[formName].validate((valid) => {
          // console.log(valid)
          if (valid) {
            var param ={
                  name:self.ruleForm2.name,
                  idNum:self.ruleForm2.idNums,
                  imgIdBack:self.imgIdBack,
                  imgIdUser:self.imgIdUser,
            }
            if(self.imgIdBack=="" && self.imgIdUser!=""){//图片为空时不进行提交 否则返回的图片地址找不到
                   param ={
                    name:self.ruleForm2.name,
                    idNum:self.ruleForm2.idNums,
                    imgIdUser:self.imgIdUser,
                }
            }
            if(self.imgIdUser=="" &&　self.imgIdBack!==''){//只提交有（key）图片的值
                   param ={
                    name:self.ruleForm2.name,
                    idNum:self.ruleForm2.idNums,
                    imgIdBack:self.imgIdBack,
                }
            }
            if(self.imgIdUser=="" &&　self.imgIdBack==''){
                   param ={
                    name:self.ruleForm2.name,
                    idNum:self.ruleForm2.idNums,
                }
            }
            Login.applyDeveloper(param).then((res)=>{//form提交
                // console.log(res)
                if(res.data.code == 0){
                  this.$notify({
                    title: '成功',
                    message: '提交成功',
                    type: 'success'
                  });
                }else{
                  if(res.data.code == 1 || res.data.code ==2){
                     self.$token()
                }
                }
            })
          }else {
            // console.log('valite false')
            return false;
          }
        });
      },
      dialogShow(){//正面大图弹窗
        self.dialogVisible = true
      },
       dialogShowblack(){//反面大图弹窗
        self.dialogVisibleBlack = true
      },
      resetForm(formName) {//清空form所有
        // console.log(formName)
        self.$refs[formName].resetFields();
        self.imageUrl=''
        self.imageUrlBack=''
        Store.remove('imgIdbackey')
        Store.remove('imgIdUserkey') 

      },
      getToken(){//获取七牛云token 上传图片
        Login.GetTokenqiniu().then(p=>{
          if(p.data.code == 0){
            self.postData.token = p.data.data.token
          }
        })
      },
      resetApikey(){
        self.$confirm('你确定解重置apikey吗?', '确认重置', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(()=>{
            Login.apikeyReset().then((p)=>{
              if(p.data.code==0){
                self.$notify({
                  title:'成功',
                  message:"重置成功",
                  type:'success',
                  duration:1500
                })
              }else if(p.data.code== 1 || p.data.code==2){
                  self.$token()
              }else{
                self.$notify({
                  title:'失败',
                  message:`${p.data.msg}`,
                  type:'error',
                  duration:1500
                })
              }
              
            })
        }).catch(()=>{

        })
      },   
    },
    mounted(){
    // console.log(self.$refs.idImgform.$el)
    self.getToken()
    // console.log(api)
    const imgIdbackey = Store.get('imgIdbackey') || ''
    const imgIdUserkey = Store.get('imgIdUserkey') || ''
    self.imgIdBack=imgIdbackey
    self.imgIdUser=imgIdUserkey
    Login.applyResult().then((res)=>{//获取认证信息 
      // console.log(res.data)
      const p = res.data
      if(p.data==null){
          self.statusText = "未认证";
      }
      if(res.data.code==0 && p.data!=null){
          self.ruleForm2.name=p.data.name
          self.ruleForm2.idNums=p.data.idNum
          self.imageUrl=p.data.imgIdUser
          self.imageUrlBack=p.data.imgIdBack
          // self.statusText=res.data.data.status
          switch(p.data.status){
                case 0:
                  self.statusText = "审核中";
                  break;
                case 1:
                  self.statusText = "审核通过";
                  self.formdisabled = true
                break;
                case 2:
                  self.statusText = "审核失败";
                  self.reason ="："+p.data.reason
                break;
                default:
                  self.statusText = "未认证";
                  break;
              }
      }
      self.$emit('selfStatus',self.statusText)//将审核状态传到父组件 pereson.vue
      if(res.data.code==1 ||　res.data.code==2){//token过期跳转到登录
           self.$token()
      }
    })
    },
    beforeCreate(){
      self = this;
    },
  }
</script>

<style lang="less">
@import '../../theme/theme.less'; 
.uploadBox{
  display:inline-block;
  margin-right:20px;
  position:relative;
}

.uploadBox .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .uploadBox .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width:120px;
    height: 80px;
    // position:absolute;
    display:block;
  }
  .uploadBox .el-upload__tip{
    margin-top:0;
    line-height:16px;
    font-size:12px;
    display:flex;
    justify-content: space-between;
}
.uploadBox .el-upload__tip i{
  font-size:16px;
  cursor:pointer;
}
.uploadTip{
  font-size:12px;
  width:280px;
  line-height:20px;
}
</style>

