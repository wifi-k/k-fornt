<template>
    <el-row size="small"  :class="isShow? 'wrapper' : ''">
         <el-row class="" style="margin:10px 0 20px" type="flex" justify="space-between"> 
            <!-- <el-col :span="10"> -->
              <div>
              <el-input style="width:180px;" v-model="bindNum" placeholder="输入节点编号进行搜索"></el-input>
              <el-select style="width:80px;"  v-model="value"  :change='selectchange(value)' @visible-change="visiblechange($event)" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
                  <el-button type="primary" @click="search"><i class="el-icon-search "></i></el-button>
              </div>
            
              <!-- </el-col>     -->
            <router-link to="/management/node"><el-button type="primary">绑定节点</el-button></router-link>    
        </el-row>
        <el-row class="wrapper" v-show="isShow">
            <!--el-col :span="24">
                <div class="grid-content bg-purple-dark">全部0台  在线0台  离线0台</div>
            </el-col-->
      <el-table v-loading="loading" :data="tableData"  fit>
              <el-table-column v-for="(table,index) in tableList" :label="table.label" :prop="table.prop" :width="table.width" :key="index" align="center"></el-table-column>
              <el-table-column label="操作" >
                  <template slot-scope="user">
                      <a href="javascript:void(0)" v-show="user.row.isShare == 0" @click="handleJoin(user.$index,user.row)"> 加入共享</a>
                      <a href="javascript:void(0)" v-show="user.row.isShare == 1" @click="handleQuit(user.$index,user.row)">退出共享</a>
                      <a href="javascript:void(0)" class="staricon icon-allow" v-show="user.row.isBind == 1" @click="handleUnbind(user.$index,user.row)">解绑节点</a>                    
                  </template>
              </el-table-column>
          </el-table>
          <div class="pageContainer">
              <el-pagination @current-change="handleCurrentChange" :current-page="current_page" :page-size="page_size" layout="total,prev,pager,next ,jumper" :page-count="total_page" :total="total"></el-pagination>
          </div>
        </el-row>
    </el-row>
</template>
<style lang="less" scoped>
.pageContainer .el-pager li.active {
    border-color: #30B6B9;
    background-color: #30B6B9;
}
.pageContainer .el-pager li:hover,.pageContainer .el-pagination .btn-next:hover, .pageContainer .el-pagination .btn-prev:hover {
    color:#30B6B9;
}
@import '../../../theme/theme.less'; 

</style>
<script>
    module.exports = require('./bindList');
</script>
