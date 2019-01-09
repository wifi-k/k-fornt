/**
 *  Created by saiyingding on 2018/5/29.
 */

import FlowPackage from '../../../config/management/flowPackage';
import Common from '../../common/';

export default {
    name: 'addFlowPackage',
    components: Common,
    data(){
        return {  
            pageTitle: '添加套餐', 
            addTip: true,
            form: {
                title: '',
                type: '1',
                vipNum: '',
                price: '',
                maxSpeed: '11',
                timeLength: '',
                maxBuyNum: 1,
                upLimitSpeed: '',
                downLimitSpeed: '',
                merchantIds  : '',
                merchantNum: 0               
            },
            packageId: '',
            vipFlag: false,
            isNew: 0,
            videoFlag: true,
            merchantDialogShow: false,
            typeDisable: false,
            merchantData: [],
            merchantDialogTitle: '店铺选择',
            isfullscreen: true,  
            addShow: false,                
            formRules:{ 
                title:[
                    { required:true,message:"请输入套餐名称",trigger:'focus'}
                ],
                timeLength:[
                    { required:true,message:"请输入套餐时长",trigger:'focus'}
                ],
                price:[
                    { required:true,message:"请输入套餐价格",trigger:'focus'}
                ],
                upLimitSpeed:[
                    { required:true,message:"请输入上行限速值",trigger:'focus'}
                ],
                downLimitSpeed:[
                    { required:true,message:"请输入下行限速值",trigger:'focus'}
                ],
                maxSpeed:[
                    { required:true,message:"请输入套餐限速",trigger:'focus'}
                ],
                maxBuyNum:[
                    { required:true,message:"请输入最大购买人数",trigger:'focus'}
                ]     
            },
        }
    },
    computed:{

    },
    watch:{
        '$route'(){
            this.form = {
                title: '',
                type: '1',
                vipNum: '',
                price: '',
                maxSpeed: '',
                timeLength: '',
                maxBuyNum: 1,
                upLimitSpeed: '',
                downLimitSpeed: '',
                merchantIds  : '',
                merchantNum: 0   
            };
            this.pageTitle = "添加套餐";
            this.addTip = true; 
            this.typeDisable = false; 
              
        }
    },
    methods:{
        proving1(){
            this.form.upLimitSpeed=this.form.upLimitSpeed.replace(/[^\.\d]/g,'');
            this.form.upLimitSpeed=this.form.upLimitSpeed.replace('.','');

            this.form.downLimitSpeed=this.form.downLimitSpeed.replace(/[^\.\d]/g,'');
            this.form.downLimitSpeed=this.form.downLimitSpeed.replace('.','');

            /*this.form.price=this.form.price.replace(/[^\.\d]/g,'');
            this.form.price=this.form.price.replace('.','');*/

            this.form.timeLength=this.form.timeLength.replace(/[^\.\d]/g,'');
            this.form.timeLength=this.form.timeLength.replace('.','');

            this.form.maxBuyNum=this.form.maxBuyNum.replace(/[^\.\d]/g,'');
            this.form.maxBuyNum=this.form.maxBuyNum.replace('.','');
        },
        provingPrice(){
            if(this.form.price < 0){
                this.form.price = '';
            }

        },
        numLength(){
            this.form.vipNum = this.form.vipNum.replace(/[^\w\.\/]/ig,'')
          
            if(this.form.vipNum.length > 6){
                this.form.vipNum = this.form.vipNum.substring(0,6)
            }
        },
        handleCancleForm(mArr){   
          
            if(mArr && mArr.length == 0){
                alert("至少添加一个店铺！");
                return false;
            }
            this.addShow = false;
            var merchatArr = [];
            mArr.forEach(function(o,i){
                merchatArr.push(o.merchantId);
            });
            this.form.merchantIds = merchatArr.join(',');
            this.form.merchantNum = merchatArr.length;
          
          if(this.form.merchantNum > 50){
            alert("最多只能选择50家");
          }else{
            this.merchantDialogShow = false;
          }         
            
            
        },
        closeDialog(mArr){
          
           // this.handleCancleForm(mArr)
        },
        handleRadio(val){          
            this.form.type = val;
            this.videoFlag = (val == '3') ? false : true;
            this.vipFlag = (val == '0') ? true : false;

        },
        submitFormAdd(formName){
            let param = this.form;
            
           if(this.addTip){
                this.$refs[formName].validate((valid)=> { 
                    if(param.merchantNum  == 0){
                        this.addShow = true;
                        return false;
                    }             
                    if (valid) {                 
                        
                        FlowPackage.addFlow(param).then(p=>{   
                                           
                            if(p.data.success){
                                this.$notify({
                                    title:"成功",
                                    message:"添加流量包成功！",
                                    type:'success',
                                    duration: 1300,
                                    offset: this.notifyTop
                                });
                                this.$refs["form"].resetFields();
                                this.form.merchantNum = 0;
                                this.isNew = 0;
                            }
                            else{                                
                                if(p.data.resultCode == "0001003"){
                                    this.$notify({                                    
                                        title:"失败",
                                        message: p.data.message,
                                        type:'error',
                                        duration: 1500,
                                        offset: this.notifyTop
                                    });
                                }else{                              
                                    this.$router.push('/login');
                                }                         
                            }
                         },p=>{});

                    }else{
                        return false;
                    }
                });
           }else{                
                param.packageId = this.packageId;
               
                FlowPackage.updateFlow(param).then(p=>{                        
                    if(p.data.success){
                        this.$notify({
                            title:"成功",
                            message:"修改流量包成功！",
                            type:'success',
                            duration: 1300,
                            offset: this.notifyTop
                        });
                        this.$router.push('/management/flowPackage');                           

                    }
                    else{
                        if(p.data.resultCode == "0001003"){
                            this.$notify({                                      
                                title:"修改失败",
                                message:p.data.message,
                                type:'error',
                                duration: 1500,
                                offset: this.notifyTop
                            });
                        }else{                               
                            this.$router.push('/login');
                        }                            
                    }
                },p=>{});                
            }
        },
        handleAddShop(){            
            this.merchantDialogShow = true;
            this.isNew = this.isNew + 1;
        },
        getFlow(id){
            var that = this;
            FlowPackage.gelFlow({ packageId: id}).then(p=>{
                var JSON = p.data.resultData;   
                this.form = JSON;   
                this.form.type = String(JSON.type);
              
            },p=>{});
        }
    },
    mounted(){   
       
        var id = this.$route.query.id;
        this.packageId = id;
        
        if(id){
            this.pageTitle = "修改套餐";         
            this.addTip = false;
            this.typeDisable = true;
            this.getFlow(id);

        }
    }
}
