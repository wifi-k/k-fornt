/**
 *  Created by saiyingding  on 2018/5/29.
 */
module.exports = {
	headNav: resolve => require(['./headNav/headNav.vue'], resolve),
	leftMenu: resolve => require(['./leftMenu/leftMenu.vue'], resolve),
	bread: resolve => require(['./bread/bread.vue'], resolve),
	WebMain: resolve => require(['../routeView/main.vue'], resolve),
  sendSmsBtn: resolve => require(['./sendSmsBtn/sendSmsBtn.vue'], resolve),
  BaseFormPhone: resolve => require(['./myForm/BaseFormPhone.vue'], resolve)



};
