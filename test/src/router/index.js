import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import { Management, WebMain, Login, Register, Email, Forget, ChildMain  } from '../components/';

export default new Router({
	mode: 'hash',
	routes: [{
			path: '/',
			name: '首页',
			redirect: '/management/user'
		},
		{
			path: '/login',
			name: '登录',
			hidden: true,
			component: Login
		},
		
		{
			path: '/register',
			name: '注册',
			hidden: true,
			component: Register
		},
		{
			path: '/forget',
			name: '忘记密码',
			hidden: true,
			component: Forget
		},
		{
			path: '/management',
			name: '管理',
			component: WebMain,
			children: [
				{
					name: '节点信息',
					eName: 'bindNode',
					path: '/management/node/bindList',
					component: ChildMain,
					children: [ {
						name: '节点列表',
						eName: ' Node list',
						path: '/management/node/bindList',
						component: Management.bindList,
          },
          {
						name: '节点绑定',
						eName: 'Node binding',
						path: '/management/node',
						component: Management.bindNode,
					},]
				},
				{
					name: '共享收益',
					eName: 'profit',
					path: '/management/profit',
					component: Management.profit,
					children: [{
							name: '共享 收益',
							eName: 'Revenue management',
							path: '/management/profit',
							component: Management.profit,
						}]
          },
          {
            name: '我的信息',
            path: '/management/user',
            component: ChildMain,					
            children: [{
              name: '用户信息',
              eName: 'User information',
              path: '/management/user',
              component: Management.personal,
            }/*, {
              name: '账户中心',
              eName: ' Account center',
              path: '/management/user/account',
              component: Management.account,
            }*/]
          },
					/*{
							name: '应用市场',
							eName: 'bindNode',
							path: '/management/bindNode',
							component: Management.bindNode
					},
					{
							name: '帮助中心',
							eName: 'bindNode',
							path: '/management/bindNode',
							component: Management.bindNode
					}*/

			]},
			{
			path: '/email',
			name: '邮箱',
			hidden: true,
			component: Email
    }
		],
		linkActiveClass: 'myActive'
	});