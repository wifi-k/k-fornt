<template>
  <div>
    <el-row>
      <span class="demonstration">ID：</span>
       <el-input size="" style="width:260px;" v-model="inputid" placeholder="请输入id"></el-input>
        <div style="display:inline-block;margin-left:20px;">
          <span class="demonstration">时间范围：</span>
          <el-date-picker
            size=""
            v-model="value1"
            type="daterange"
            value-format="timestamp"
            range-separator="-"
            @change="timechange"
            :start-placeholder="new Date().format('yyyy-MM-dd ')"            
            :end-placeholder="new Date().format('yyyy-MM-dd ')"
          ></el-date-picker>
        </div>
        <el-button size="" @click="search" type="primary"><i class="el-icon-search"></i></el-button>        
    </el-row>
    <el-row style="margin-top:25px;">
        <el-table :data="tableData" v-loading="loading"  stripe fit>
          
           <el-table-column label="请求时间" width="200" prop="reqTime" align="center"></el-table-column>
            <el-table-column label="请求地址" align="center">
                <template slot-scope="user">
                  <p>
                    <span v-show="user.row.reqScheme">{{user.row.reqScheme}}://</span><span v-show="user.row.reqHost">{{user.row.reqHost}}</span><span v-show="user.row.reqPort!=80">:{{user.row.reqPort}}</span><span v-show="user.row.reqPath">{{user.row.reqPath}}</span>
                  </p>     
                  <!-- reqScheme://reqHost:reqPort/reqPath?reqQuery  -->
                </template>
           </el-table-column>           
           <el-table-column label="响应状态码" width="100" prop="rspCode" align="center"></el-table-column>           
           <el-table-column label="响应结果" width="140" prop="rspReason" align="center"></el-table-column>
           <el-table-column label="请求方式" width="100" prop="reqMethod" align="center"></el-table-column>
           <el-table-column label="ID" prop="id" align="center"></el-table-column>
          
          
        </el-table>
        <div class="pageContainer">
              <el-pagination @current-change="handleCurrentChange" :current-page="current_page" :page-size="page_size" layout="total,prev,pager,next ,jumper" :page-count="total_page" :total="total"></el-pagination>
        </div>
    </el-row>
  </div>
</template>
<script>
var self = {};
import Login from "../../config/management/login";
import Util from '../../utils/index';
import Table from './table';
// HttpproxyList
export default {
  data() {
    return {
       inputid:"",
       page_size:10,
       total_page:0,
       total: 0,
       current_page:1,
       value1: "",
       tableData: [],
       param: {
        id:'',
        startTime: "",
        endTime: "",
        pageNo: 1,
        pageSize: 10
      },
      tableList: Table,
      loading: false
    };
  },
  beforeCreate() {
    self = this;
  },
  mounted() {
    self.settimevalue()
    self.getHttpList(self.param);
  },
  methods: {
    getHttpList(param) {
      self.loading = true
      Login.HttpproxyList(param).then(res => {
        if(res.data.code == 0){
              let record = res.data.data;
              let lists = record.page;   
              lists.forEach(function(o,i){
                if(o.reqTime){o.reqTime = (new Date(o.reqTime)).format('yyyy-MM-dd hh:mm:ss');}
                if(o.rspTime){o.rspTime = (new Date(o.rspTime)).format('yyyy-MM-dd hh:mm:ss');}
              });          
              self.total = record.total; 
              self.tableData = lists;
              self.loading = false; 
              self.settimevalue()
            }else  
              if(res.data.code == 1 || res.data.code ==2){
                  self.$token()
                }else{
                  this.$notify({
                  title:"错误",
                  message:`${res.data.msg}`,
                  type:'error',
                  duration: 1500
              });
        }
      });
    },
    timechange(val) {
      // console.log(val[0])
     if(val){
        self.param.startTime = val[0];
        self.param.endTime = val[1];
        self.param.id=''
        self.getHttpList(self.param);
     }
    },
    search(){
      // console.log(self.inputid)
    self.param.id=self.inputid 
    self.getHttpList(self.param) 

    },
     handleCurrentChange(e){
          console.log(e)
          self.param.pageNo = e// 点击分页显示对应分页内容
          self.getHttpList(self.param)
    },
    settimevalue(){
        self.param.startTime = new Date().getTime()-86400000
        self.param.endTime=new Date().getTime()
    }
  }
};
</script>
<style lang="less" scoped>
.demonstration{
  font-size:14px;
  color:#666;
}
.pageContainer{
  float:right;
  margin:20px 0;
}
.pageContainer .el-pager li.active {
    border-color: #30B6B9;
    background-color: #30B6B9;
}
.pageContainer .el-pager li:hover,.pageContainer .el-pagination .btn-next:hover, .pageContainer .el-pagination .btn-prev:hover {
    color:#30B6B9;
}
</style>
