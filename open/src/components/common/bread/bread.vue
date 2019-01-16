<template>
    <div>
        <el-row>
            <el-col :span="24">
                <h1 class="title">{{$route.name}}</h1>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .title {
        margin: 0;
        padding: 10px 20px;
        color: #00d1ec;
      text-align: left;
      font-size: 18px;
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td {
      color: #333;
    }
    .el-table tr {
      color: #fff;
    }
    .el-table {
      border: 1px solid #095173;
    }
    .el-table td {
      background-color: #095173;
      border:1px solid #095173;
    }
    .el-table__body {
      border:1px solid #095173;
    }
    .el-table::before {
      background-color: #095173;
    }
</style>
<script>
    export default{
        name: 'bread',
        data(){
            return{

            }
        },
        components:{

        },
    }
</script>
