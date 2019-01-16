/**
 * Created by saiying.ding on 2018/5/29.
 */
var self = {};
import Login from '../../../config/management/login';
export default {
		name:'head-nav',
		data(){
			return {
				mobile: '',
				name: ''
			}
		},
		mounted(){   
      self.getInfo();
		},
		beforeCreate () {
			self = this;
		},
		methods:{
			getInfo(){				
			Login.getInfo().then(p=>{
					if(p.data.code == 0){
						let Result = p.data.data;
						self.$store.dispatch('update_logininfo',{
						    logininfo: Result
						}).then(()=>{ 
						    // self.$router.push('/');
						});			
					}
				},p=>{});
			},
			/**
			 * 退出登录
			 */
			logout() {
					// this.$confirm('你确定退出登录么?', '确认退出', {
					// 		confirmButtonText: '确定',
					// 		cancelButtonText: '取消',
					// 		type: 'warning'
					// }).then(() => {
							Login.logout().then(p=>{
									self.$store.dispatch('remove_userinfo').then(() => {
											self.$router.push('/login');
									});
							},p=>{});

				  // });
			},
			updateCurMenu(route) {			
				var route = route || self.$route;
				if (route.matched.length) {
					let rootPath = route.matched[0].path,
						fullPath = route.path;
					this.$store.dispatch('set_header_route', {
						rootPath,
						fullPath
					});
				}
			}
			},
			created() {
			//this.updateCurMenu();
		},
}