<template>
    <el-container>
       <el-header class="el-header" style="height:50px;">
         <head-nav></head-nav>
       </el-header>
       <el-container>
           <el-aside style="width:135px;">
          <left-menu></left-menu>
       </el-aside>
        <el-main>
           <router-view></router-view>
        </el-main>
       </el-container>
    </el-container>
</template>
<style lang="less" scoped>
.el-header{
  padding:0;

}




</style>
<script>
    import Common from '../common/'
    export default{
        data(){
            return {}
        },
        name:'home',
        components:Common,
        computed:{},
        mounted(){}
    }
</script>