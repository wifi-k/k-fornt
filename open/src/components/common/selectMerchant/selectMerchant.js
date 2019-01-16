/**
 *  Created by saiyingding on 2018/5/29.
 */

import SelectMerchant from '../../../config/management/selectMerchant';

export default {
    name: 'select-merchant',
    
    data(){
        return {  
            formInline: {
                provs: [],
                provsItems: [],
                bizTypes:[],
                bizTypeItems: []

            } ,
            provsVal: '',
            provsItemVal: '',
            bizTypeVal: '',
            bizTypeItemVal: '',
            title: '',           
            page_size: 5,
            total: 0,
            total_page: 0,
            current_page: 1,
            currArr: [],
            showArr: [],
            merchantData: [],// 表格数据
            multipleSelectionAll: [],   // 所有选中的数据包含跨页数据
            multipleSelection: [],   // 当前页选中的数据
　　        idKey: 'personId', // 标识列表数据中每一行的唯一键的名称(需要按自己的数据改一下)
            showNums: 50
        }
    },
    computed:{
    },
    methods:{
        init(){
            var param = {
                pid: 0
            }
            SelectMerchant.baseArea(param).then(p=>{                
                if(p.data.success == true){
                    this.formInline.provs = p.data.resultData;
                    this.formInline.provs.unshift({realValue:'',showValue:'请选择'})
                }
            },p=>{});
            SelectMerchant.baseBizType(param).then(p=>{                
                if(p.data.success == true){
                    this.formInline.bizTypes = p.data.resultData;
                    this.formInline.bizTypes.unshift({realValue:'',showValue:'请选择'})
                }
            },p=>{});
            this.getList({pageSize: this.page_size, pageNum: 1});
        },
        handleDel(index, idKey){  
            var sArr = []
            this.multipleSelectionAll.forEach(function(o, i){
                if(o.idKey == idKey){

                    o.arr.forEach(function(m, n){
                
                        if(m.index == index){
                            o.arr.splice(n, 1); 
                            sArr = o.arr;
                        }
                    });
                }
            });
            var that = this;      
                sArr.forEach(function(o, i){
                    that.merchantData.forEach(function(m, n){
                        if(o.index == m.index){
                            that.$refs.table.toggleRowSelection(m, true)
                        }
                    });
                });                   
              
            var showArr = [];
            this.multipleSelectionAll.forEach(function(o, i){
                o.arr.forEach(function(m, n){
                    showArr.push(m)
                });
            });
            this.showArr = showArr;
        },
        handleCancleForm(){
            console.log('handleCancleForm');
            console.log(this.showArr);          
            this.$emit('cancleForm', this.showArr);
        },
        hadleSelect(selection, val){           
            this.multipleSelection = selection;
            this.changePageCoreRecordData();
            
        },
        hadleSeletAll(selection,val){
            this.multipleSelection = selection;
            this.changePageCoreRecordData();
        },
        // 记忆选择核心方法
        changePageCoreRecordData () {
            var item = {
                idKey: this.current_page,
                arr: this.multipleSelection
            },multipleSelectionAll= this.multipleSelectionAll;
              
            if(multipleSelectionAll.length == 0){
                multipleSelectionAll.push(item);
            }else{
                multipleSelectionAll.forEach(function(o, i){                                
                    if(o.idKey == item.idKey){
                        multipleSelectionAll.splice(i, 1);                        
                        return;                        
                    }                    
                });
                multipleSelectionAll.push(item);               
            }
           
            this.multipleSelectionAll = multipleSelectionAll;
        
            var showArr = [];
            this.multipleSelectionAll.forEach(function(o, i){
                o.arr.forEach(function(m, n){
                    showArr.push(m)
                });
            });
            this.showArr = showArr;
        },
        setSelectRow() {
                if (!this.multipleSelectionAll || this.multipleSelectionAll.length <= 0) {
                    return;
                }
                // 标识当前行的唯一键的名称
                let idKey = this.current_page;
                let selectAllIds = [];
                let that = this;

                this.multipleSelectionAll.forEach(row=>{             
                    if(row.idKey == idKey){
                        selectAllIds = row.arr;
                    }
                    
                })
             
                setTimeout(function(){
                    selectAllIds.forEach(function(o, i){
                        that.merchantData.forEach(function(m, n){
                            if(o.index == m.index){
                                that.$refs.table.toggleRowSelection(m, true)
                            }
                        });
                    });
                    
                },500)
        } ,
         toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.table.toggleRowSelection(row);
          });
        } else {
          this.$refs.table.clearSelection();
        }
      },
        handleSelectionChange(selection,val){ 
            this.multipleSelection = selection;
        },

        handleCurrentChange(val){
            this.current_page = val;
            var that = this;
            let param = {
                pageNum: this.current_page,
                pageSize: this.page_size,
                title: this.title,
                areaCode: this.provsItemVal,
                bizType: this.bizTypeItemVal
            }
            this.getList(param);
            
        },
        handleChangeProv(val){       
            if(val == ''){
                this.formInline.provsItems = [];
                this.provsItemVal = '';
                return false;
            }

            var param = {
                pid: val
            }
            SelectMerchant.baseArea(param).then(p=>{                
                if(p.data.success == true){
                    var arr = p.data.resultData;
                    this.formInline.provsItems = arr;
                    if(arr.length > 0){
                        this.provsItemVal = arr[0].realValue;
                    }
                    

                }
            },p=>{});
        },
        handleChangeType(val){
            if(val == ''){
                this.formInline.bizTypeItems = [];
                this.bizTypeItemVal = '';
                return false;
            }
            var param = {
                pid: val
            }
            SelectMerchant.baseBizType(param).then(p=>{                
                if(p.data.success == true){
                    var arr = p.data.resultData;
                    this.formInline.bizTypeItems = arr;
                    if(arr.length > 0){
                        this.bizTypeItemVal = arr[0].realValue;
                    }
                }
            },p=>{});
        },
        handleSearch(){
            var param = {
                pageSize: this.page_size,
                title: this.title,
                areaCode: this.provsItemVal,
                bizType: this.bizTypeItemVal
            }
            this.getList(param);
            this.changePageCoreRecordData();
            
        },
        getList(param){          
            var selectRow = [];
            this.currArr.forEach(function(o,i){
                if(o.page == param.pageNum){
                    selectRow.push(o.arr);
                }
            });
            SelectMerchant.merchantList(param).then(p=>{
                if(p.data.success == true){
                    this.merchantData = p.data.resultData.list;
                    this.merchantData.forEach(function(o,i){
                        o.idKey = param.pageNum;
                        o.index = i + (param.pageNum -1)*param.pageSize
                    });
                    this.total = p.data.resultData.total;
                    this.total_page =  p.data.resultData.pages;
                    this.current_page = p.data.resultData.pageNum;
                    this.loading = false;

                    this.setSelectRow();
                }
            },p=>{});
        }
    },
    props:['isNew'],
    mounted(){
        var that = this;
        that.init();
    },
    watch: {
        isNew (val, oldVal) {
            console.log(oldVal)
            if(oldVal < 1){
                this.showArr = [];
                this.multipleSelectionAll = [];  
                this.multipleSelection = [];
                this.toggleSelection();
            }
        }
    },
}
