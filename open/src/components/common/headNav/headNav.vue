<template>
    <div class="head-nav">
        <el-row>
            <el-col :span="6" class="title">
              <p>树熊云开放平台</p>
            </el-col>
            <el-col :span="12" class="user-container" > 
                <i class="fa fa-power-off logout" @click='logout'></i>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>

@import '../../../theme/theme.less'; 

.head-nav {
    height: 50px;
    background: #0d1b2e;
    width:100%;
    .logo-container {
        width:175px;
        text-align: center;
        color:#fff;
        img {
            margin: 8px 0;
            width: 64px;
            height: 64px;
            border-radius: 64px;
            vertical-align: middle;
        }
        span {
        display:block;
        font-size: 12px;
        }
    }
    .title{
      color:#fff;
      text-align:left;
      font-size:14px;
      margin-left: 20px;
    }
    .nav-container  {
        width: 360px;
        padding: 25px 0;
        a {
            padding: 5px 0;
            padding-left: 20px;
            float: left;
            width: 159px;
            height: 45px;
            font-size: 14px;
            color:#61666D;
            display: block;
            text-align:left;
            line-height: 150%;
            border-left: 1px solid #00F9FF
        }
        a.router-link-exact-active.myActive, a.active {
           color: #fff
        }
       
    }
    .user-container {
        float: right; text-align: right;
        margin-top: 5px;
        img {
            width: 34px; height:34px;
            border-radius: 34px;
            vertical-align: middle;
        }
    }
    .logout {
        width: 60px; margin-top: 5px; margin-left: 20px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        float: right;
        cursor: pointer;
        color: #fff; 
        // border-left: 1px solid #e4e4e4;
    }
    .logout:hover{
      color:red;
    }
}
.username {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    color: #fff; 
    font-size: 12px;
}
</style>
<script>
module.exports = require('./headNav');
</script>
