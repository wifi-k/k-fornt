// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {baseUrl} from './env'

Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL=baseUrl


Vue.use(VueAxios,axios);
//element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App';
Vue.use(ElementUI);

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/';

//页面顶部进度条

// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

Vue.prototype.$token=function(){
  this.$notify({
    title:"登录超时",
    message:"请重新登录！",
    type:'warning',
    duration: 1500
});
  this.$store.dispatch('remove_userinfo').then(() => {
  this.$router.push('/login');
  });
}
// axios.interceptors.response.use( (response)=> {
//   if(response.hasOwnProperty("data") && typeof response.data == "object"){//是否还有data属性 并且 data是一个object
//       if(response.data.code === 1 || response.data.code ===2){// 登录超时 跳转至登录页面
//         Vms.$token()
//         return Promise.reject(response)
//       }else if (response.data.code === 0) {// 成功
//         return Promise.resolve(response)
//       }
//   } else {
//         return Promise.resolve(response)
//   }

// }, function (error) {
//   // 请求取消 不弹出
//   // 请求错误时做些事
//   return Promise.reject(error)
// })




// 自己封装的 vue 插件（js）
/*import onePass from './utils/validate';
import checkPass from './utils/validate';
Vue.use(onePass ); 
Vue.use(checkPass ); */
// axios.defaults.baseURL = 'http://test.open.famwifi.com/api/open/'

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
 let Vms=new Vue({//定义一个全局变量  在 别的局部变量中访问 如 axios拦截器中
	el: '#app',
	router,
		store,
	render:h => h(App)
})
