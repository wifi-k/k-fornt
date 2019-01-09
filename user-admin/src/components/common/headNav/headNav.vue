<template>
    <div class="head-nav">
        <el-row>
            <!-- <el-col :span="14" class="logo-container" >
                <img src="/static/img/user.png" alt=""  /> 
                <span>{{$store.state.userinfo.logininfo.name}}</span>            
            </el-col>
            <el-col  class="nav-container" router>
                <router-link v-for="(route,index) in $router.options.routes[4].children"  :data-en="route.eName" :to="route.path" class="none"  tag = "div">
                    <router-link v-if="routeChild.name!=='节点绑定'" v-for="(routeChild,index) in route.children" :to="routeChild.path"  tag = "a" >                    
                    {{routeChild.name}}<br>
                    {{routeChild.eName}}
                    </router-link>
                </router-link>      
            </el-col> -->
            <el-col :span="6" class="title">
              <p>树熊云用户平台</p>
            </el-col>
            <el-col :span="8" class="user-container" >  
                <!-- <span class='username'>{{$store.state.userinfo.logininfo.mobile}}&nbsp;&nbsp;</span> -->
                <i class="fa fa-power-off logout" @click='logout' alt='退出'></i>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>

@import '../../../theme/theme.less'; 

.head-nav {
    height: 50px;
	  background: #0d1b2e;
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
