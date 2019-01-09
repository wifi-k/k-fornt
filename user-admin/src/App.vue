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
      // window.addEventListener('beforeunload',e=>{
      //   debugger
      //   console.log(e)
      //   // self.quit()
      // })
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

