/**
 * Created by Administrator on 2017/6/5.
 */

module.exports = {
    personal: resolve => require(['./personal/personal.vue'],resolve),
    account: resolve => require(['./account/account.vue'],resolve),    
    bindNode: resolve => require(['./bindNode/bindNode.vue'],resolve),
    bindList: resolve => require(['./bindList/bindList.vue'],resolve),
    profit: resolve => require(['./profit/profit.vue'],resolve),
}