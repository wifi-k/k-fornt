<template>
  <div class="left-menu" :style="getHeight" ref="leftMenu">
    <!--走自己配置的router-->
    <el-menu router>
    <router-link v-for="(route,index) in $router.options.routes[4].children"  :data-en="route.eName" :to="route.path" active-class= "is-active" class="el-menu-item" tag = "li" :key="index"><i></i> {{route.name}} </router-link>	 			    
    </el-menu>
    <!--Vuex-->
  </div>
</template>
<script>
module.exports = require('./leftMenu');

</script>
<style>
.el-menu {
  background: #0d1b2e;
  border:none;
}
.left-menu {

  width: 135px;
  height: 100%;
  background: #0d1b2e;
}

.el-menu-item {
  text-align: left;
  background: #0d1b2e;
  color: #fff;

}

.el-menu-item:hover,
.el-menu-item:hover a {
  color: #333;
  background: #ffffff;
}

.is-active,
.el-menu-item:hover {
  color: #333!important;
  background: #ffffff;
}


.el-menu-item:first-child i,
.el-menu-item:nth-child(2) i,
.el-menu-item:nth-child(3) i,
.el-menu-item:nth-child(4) i,
.el-menu-item:nth-child(5) i,
.el-menu-item:nth-child(6) i {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  display: inline-block;
  background: url("/static/img/icon.png") no-repeat;
}

.el-menu-item:first-child i {
  background-position: 0px -170px
}

.el-menu-item.is-active:first-child i,
.el-menu-item:hover:first-child i {
  background-position: -50px -170px
}

.el-menu-item:nth-child(2) i {
  background-position: 0 -119px
}

.el-menu-item:nth-child(2).is-active i,
.el-menu-item:hover:nth-child(2) i {
  background-position: -50px -119px
}

.el-menu-item:nth-child(3) i {
  background-position: 0 -72px;
}

.el-menu-item.is-active:nth-child(3) i,
.el-menu-item:hover:nth-child(3) i {
  background-position: -50px -72px;
}

.el-menu-item:nth-child(4) i {
  background-position: 0 -221px;
}

.el-menu-item.is-active:nth-child(4) i,
.el-menu-item:hover:nth-child(4) i {
  background-position: -50px -221px;
}

.el-menu-item:nth-child(5) i {
  background-position: 0 -272px;
}

.el-menu-item.is-active:nth-child(5) i,
.el-menu-item:hover:nth-child(5) i {
  background-position: -50px -272px;
}
.el-menu-item:nth-child(6) i {
  background-position: 0 -323px;
}

.el-menu-item.is-active:nth-child(6) i,
.el-menu-item:hover:nth-child(6) i {
  background-position: -50px -323px;
}
</style>
