<template>
    <el-row class="wrapper">
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple">昨日收益 {{total.yesterday}}</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">可用收益 {{total.balance}}</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">累计收益 {{total.sum}}</div></el-col>
          <el-col :span="12"><el-date-picker
                  v-model="value7"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="logTimeChange" style="float:right; margin-right: 100px;">
                </el-date-picker></el-col>
        </el-row>    
        <div>
            
        </div>
        <div id="homeChart" style="height: 400px; margin-top: 20px;"></div>
        

        
    </el-row>
</template>

<style lang="less" scoped>
@import '../../../theme/theme.less'; 
.el-col {
    border-radius: 4px;
  }
  
  .bg-purple {
    background: #99a9bf;
  }

</style>
 
<script>
    module.exports = require('./profit');
</script>
