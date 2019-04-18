import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import { Management,IPinfo, WebMain, Login, Register, Email, Forget, ChildMain } from '../components/';

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
        name: '我的信息',
        path: '/management/user',
        component: ChildMain,
        children: [{
          name: '用户信息',
          eName: 'User information',
          path: '/management/user',
          component: Management.personal,
        }]
      },
      {
        name: '代理记录',
        path: '/management/IPinfo',
        component: ChildMain,
        children: [{
          name: '调用记录',
          eName: 'http_proxy',
          path: '/management/IPinfo',
          component: IPinfo,
        }]
      },
    ]
  },
  ],
  linkActiveClass: 'myActive'
});