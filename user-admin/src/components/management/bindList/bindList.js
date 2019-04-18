/**
 *  Created by saiyingding on 2018/5/29.
 */
var self = {};
import Node from '../../../config/management/node';
import Table from './table.js';
import Util from '../../../utils/index';

export default {
    name: 'bind-list',
    data(){
        return {
            tableList: Table,
            isShow: true,
            loading:false,
            tableData: [],
            page_size:10,
            current_page:1,
            total: 0,
            total_page:0,
            param: {
                status:[],
                pageNo: 1,
                pageSize:10,
                nodeId:''
            },
            options: [{
              value: [1,2,3],
              label: '在线'
            },
            {
              value: [0],
              label: '离线'
            },
            {
              value: [],
              label: '全部'
            }
          ],
          value:'全部',
          bindNum:'',
          selectchangeFlag:false,
        }
    },
    beforeCreate () {
        self = this;
    },
    methods:{
      search(){
        // console.log(self.bindNum)
        self.param.nodeId=self.bindNum
        self.getList(self.param)
      },
      visiblechange(a){
        // console.log(a)
        self.selectchangeFlag=a
      },
      selectchange(value){
        if(self.selectchangeFlag){
          // console.log(value)
          if(value=='全部'){
            self.param.status=[]  
          }else{
            self.param.status=value
          }
        }  
      },
        getList(params){
            var _this = this;
            _this.loading = true;
            Node.queryByPage(params).then(p=>{
                if(p.data.code == 0){
                    let record = p.data.data;
                    let lists = record.page;   
                    lists.forEach(function(o,i){
                        o.bindTime = (new Date(o.bindTime)).format('yyyy-MM-dd hh:mm:ss');
                        switch( o.status){
                            case 0:
                              o.statusText = "离线";
                              break;
                            case 1:
                              o.statusText = "在线";
                            break;
                            case 2:
                              o.statusText = "在线";
                            break;
                            default:
                              o.statusText = "在线";
                              break;
                          }

                    });          
                  console.log(record)
                    this.total = record.count; 
                    // this.total_page = record.pages;
                    // this.current_page = record.pageNum;
                    this.tableData = lists;
                    this.loading = false;
                   
                }else{ 
                  if(p.data.code ==1 || p.data.code == 2){
                          self.$token()
                      }
                }
            },p=>{})
        },
        handleUnbind(index, row){
          this.$confirm('你确定解绑节点吗?', '确认解绑', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(()=>{
           Node.unbindbatch({nodeId: row.nodeId}).then(function(data){
                if(data.data.code == 0){
                    self.$notify({
                        title:"成功",
                        message:"解绑节点成功！",
                        type:'success',
                        duration: 1500
                    });
                    self.getList(self.param)
                }
                if( data.data.code == 1 || data.data.code == 2){
                  self.$token()
              } 
            });
        }).catch((e)=>{//捕获异常不然会报错
          // console.log(e)
        })
        },
        handleQuit(index, row){
            Node.quit({nodeId: row.nodeId}).then(function(data){
                if(data.data.code == 0){
                    self.$notify({
                        title:"成功",
                        message:"退出共享计算成功！",
                        type:'success',
                        duration: 1500
                    });
                    self.getList(self.param)
                }
                if( data.data.code == 1 || p.data.code == 2){
                  self.$token()
              } 
            });
        },
        handleJoin(index, row){
            Node.join({nodeId: row.nodeId}).then(function(data){
                if(data.data.code == 0){
                  // row.isShare = 1
                    self.$notify({
                        title:"成功",
                        message:"加入共享计算成功！",
                        type:'success',
                        duration: 1500
                    });
                    self.getList(self.param)
                   
                }
                if( data.data.code == 1 || data.data.code == 2){
                    self.$token()
                } 
                
            });
        },
        handleCurrentChange(e){
          self.param.pageNo = e// 点击分页显示对应分页内容
          self.getList(self.param)
        },
    },
    mounted(){
        // console.log(self.param)       
        self.getList(self.param)
    }
}