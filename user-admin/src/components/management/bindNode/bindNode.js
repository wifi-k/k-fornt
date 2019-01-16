/**
 *  Created by saiyingding on 2018/5/29.
 */

let self = {};
import Node from '../../../config/management/node';

export default {
    name: 'bind-node',
    data(){
        return {            
            ruleForm:{
                file: ''
            },
            nodeRules:{
                file:[
                    { required:true,message:"请输入节点编号",trigger:'blur'}
                ]
            }
        }
    },
    beforeCreate () {
        self = this;
    },
    methods:{
        cancleForm(formName){
            // self.$refs[formName].resetFields();
            self.$router.push('/management/node/bindList')
        },
        submitForm(formName){
            self.$refs[formName].validate((valid)=> {
                if (valid) {
                    let param = {};
                    param = {
                        fileType: 1,
                        file : self.ruleForm.file,
                    }
                    // console.log(param.file.indexOf('\n'))
                    // console.log(param.file.split('\n'))
                    if(param.file.indexOf('\n')>0){
                      Node.bindbatch(param).then(p=>{
                        // console.log(p.data)
                          if(p.data.code == 0){
                              self.$notify({
                                  title:"成功",
                                  message:"节点绑定成功！",
                                  type:'success',
                                  duration: 1500,
                              });
                              self.$router.push('/management/node/bindList');
  
                          }
                          else{
                              this.$notify({
                                  title:"绑定失败",
                                  message:p.data.msg,
                                  type:'error',
                                  duration: 1500,
                              });
                          }
  
                      },p=>{});
                    }else{
                      Node.bind({nodeId:self.ruleForm.file}).then(p=>{
                        console.log(p.data)
                          if(p.data.code == 0){
                              self.$notify({
                                  title:"成功",
                                  message:"节点绑定成功！",
                                  type:'success',
                                  duration: 1500,
                              });
                              self.$router.push('/management/node/bindList');
  
                          }
                          else{
                              this.$notify({
                                  title:"绑定失败",
                                  message:p.data.msg,
                                  type:'error',
                                  duration: 1500,
                              });
                          }
  
                      },p=>{});
                     
                    }
                }
                else{
                    return false;
                }
            });
        }
    },
    mounted(){
      
    }
}