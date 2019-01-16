/**
 * Created by saiying.ding on 2018/5/29.
 */

module.exports = {
    Management: require('./management/'),
    WebMain: resolve => require(['./routeView/main.vue'],resolve),
    ChildMain: resolve => require(['./routeViewChild/main.vue'],resolve),
    Login: resolve => require(['./login/login.vue'],resolve),
    Register: resolve => require(['./register/register.vue'],resolve),
    Email: resolve => require(['./email/email.vue'],resolve),
    Forget: resolve => require(['./forget/forget.vue'],resolve),
};
