<template>
    <el-container class="main-layout">
        <head-nav></head-nav>
        <div class="main-layout-content">
            <left-menu class="main-layui-left"></left-menu>
            <main class="main-layout-main">
                <router-view></router-view>
            </main>
        </div>         
    </el-container>
</template>
<style lang="less" scoped>
.main-layout {
  background: url(/static/img/left_bg.jpg) repeat-y;
  .main-layout-content {
      // width: 0;
    
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-flow: row;
    box-sizing: border-box;
    // min-width: 0;
  }
  .main-layui-left{
    // flex:1;
    // margin-right:50px;
  }
  .main-layout-main {
    flex: 1;
    padding: 20px;
    overflow: hidden;
    background: url(/static/img/body_bg.png) repeat-x #f0f2f5;
    
  }
}

.wrapper {
  background:rgba(255,255,255,1);
  box-shadow:1px 1px 12px 0px rgba(174,174,174,0.5);
  padding: 20px;
  text-align: left;  
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