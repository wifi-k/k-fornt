<template>
  <div>
    <el-row>
       <el-input size="small" style="width:180px;" v-model="inputid" placeholder="输入id查询调用记录"></el-input>
         <el-button size="small" @click="search" type="primary"><i class="el-icon-search"></i></el-button>
        <div style="display:inline-block;margin-left:20px;">
          <span class="demonstration"></span>
          <el-date-picker
            size="small"
            v-model="value1"
            type="daterange"
            value-format="timestamp"
            range-separator="-"
            @change="timechange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        
    </el-row>
    <el-row style="margin-top:15px;">
      
        <el-table :data="tableData" v-loading="loading"  stripe >
           <el-table-column v-for="(table,index) in tableList" :label="table.label" :prop="table.prop" :width="table.width" :key="index" align="center"></el-table-column>
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
    // self.getHttpList(self.param) 
    
    // console.log(new Date().getTime())
    // console.log(new Date().getTime()-86400)
    self.param.startTime = new Date().getTime()-86400000
    self.param.endTime=new Date().getTime()
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
      console.log(val);
      // console.log("change");
      self.param.startTime = val[0];
      self.param.endTime = val[1];
      self.param.id=''
      self.getHttpList(self.param);
    },
    search(){
      // console.log(self.inputid)
    self.param.id=self.inputid 
    self.getHttpList(self.param) 

    },
     handleCurrentChange(e){
          self.param.pageNo = e// 点击分页显示对应分页内容
          // self.getList(self.param)
        },
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
