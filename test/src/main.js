// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {baseUrl} from './env'

Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(VueAxios,axios);
/*require('echarts/theme/thtopic');*/
axios.defaults.baseURL=baseUrl
//element UI
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/';
// import vuePopper from 'element-ui/lib/utils/vue-popper';

//页面顶部进度条

// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';


// 自己封装的 vue 插件（js）
/*import onePass from './utils/validate';
import checkPass from './utils/validate';
Vue.use(onePass ); 
Vue.use(checkPass ); */
Vue.prototype.$token=function(){
  this.$notify({
    title:"",
    message:"请重新登录",
    type:'error',
    duration: 1500
});
  this.$store.dispatch('remove_userinfo').then(() => {
  this.$router.push('/login');
  });
}
router.beforeEach((to,from,next)=>{
  window.scroll(0,0);
  var userinfo = store.state.userinfo.userinfo;

axios.defaults.headers.common['Api-Token'] = userinfo.token;
axios.defaults.headers.common['Api-Version'] = '2018.11.30';
  var _arr = new treeMenu(userinfo.menuArray).init('cc0eeb9e67374f05ac2c9d3aefbd1a2e');
  store.dispatch('update_menu',{
      sysMenu:_arr
  });
  if(!userinfo.token && (to.path !== '/login' && to.path !== '/forget' && to.path !== '/register' && to.path !== '/email' )){
    store.dispatch('remove_userinfo');
    next('/login');
  }
  else{
      // NProgress.start();
      next();
  }
});
function treeMenu(a){
	this.tree=a||[];
	this.groups={};
};
treeMenu.prototype={
	init:function(pid){
			this.group();
			return this.getDom(this.groups[pid]);
	},
	group:function(){
			for(var i=0;i<this.tree.length;i++){
				var key = this.tree[i];
					if(this.groups[key.uplink]){
							this.groups[key.uplink].push(key);
					}else{
							this.groups[key.uplink]=[];
							this.groups[key.uplink].push(key);
					}
			}
	},
	getDom:function(a){
			if(!a){return []}
			var arr=[];
			for(var i=0;i<a.length;i++){
					a[i].children = this.getDom(this.groups[a[i].id]);
					arr.push(a[i]);
			};
			return arr;
	}
};


// router.afterEach(transition =>{
// 	NProgress.done();
// });

/* eslint-disable no-new */
const appAdmin = new Vue({
	el: '#app',
	router,
		store,
	render:h => h(App)
})
