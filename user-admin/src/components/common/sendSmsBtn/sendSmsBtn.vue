<template>
    <div>
        <el-button type="primary"  @click="getCode" v-show="show">获取验证码</el-button>
        <el-button type="primary"  disabled v-show="!show" >重新获取({{count}})</el-button>
    </div>
</template>

<style>


</style>
<script>
module.exports = require('./sendSmsBtn');
</script>
<style scoped lang='less'>
    div {
        width: 110px; display: inline-block;
        margin-left: 5px;
        font-size: 13px;
    }
    .el-button+.el-button {
        margin-left: 0;
    }
    .el-button--primary {
        font-size: 14px;
        height: 36px;
    }
</style>
