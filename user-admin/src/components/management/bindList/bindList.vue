<template>
    <el-row size="small"  :class="isShow? 'wrapper' : ''">
         <el-row class="" style="margin:10px 0 20px" type="flex" justify="end"> 
            <el-col :span="6" >
              </el-col>           
            <router-link to="/management/node"><el-button type="primary">绑定节点</el-button></router-link>    
        </el-row>
        <div class="wrapper-nodata" v-show="!isShow">            
            <router-link to="/management/node"><el-button type="primary">绑定节点</el-button></router-link>    
            <div class="small">如未节点绑定 ，请先完成绑定</div>
        </div>
        <el-row class="wrapper" v-show="isShow">
            <!--el-col :span="24">
                <div class="grid-content bg-purple-dark">全部0台  在线0台  离线0台</div>
            </el-col-->
            <el-table v-loading="loading" :data="tableData" :max-height="maxheight" fit>
                    <el-table-column v-for="table in tableList" :label="table.label" :prop="table.prop" :width="table.width"></el-table-column>
                    <el-table-column label="操作" :prop="isShare">
                        <template slot-scope="scope">
                            <a href="javascript:void(0)" v-show="scope.row.isShare == 0" @click="handleJoin(scope.$index,scope.row)"> 加入共享</a>
                            <a href="javascript:void(0)" v-show="scope.row.isShare == 1" @click="handleQuit(scope.$index,scope.row)">退出共享</a>
                            <a href="javascript:void(0)" class="staricon icon-allow" v-show="scope.row.isBind == 1" @click="handleUnbind(scope.$index,scope.row)">解绑节点</a>
                            
                                
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
