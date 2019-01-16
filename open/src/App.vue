<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
  import Login from './config/management/login'
  var self = {};
	export default {
    name: 'app',
    beforeCreate () {
        self = this;
    },
    mounted(){
        // self.$token()
    },
    methods:{
      quit(){
        // Login.logout().then(()=>{
                self.$store.dispatch('remove_userinfo')
            // });
      }
    },
}
</script>
<style lang="less" >
   body {
   	margin: 0
   }
</style>

