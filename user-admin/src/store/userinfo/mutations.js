/**
 * Created by Administrator on 2017/6/9.
 */
import * as types from '../mutation-types';
import Store from '../store';
export default {
    [types.UPDATE_USERINFO](state,user_db){
        state.userinfo = user_db.userinfo || {};
        Store.set('userinfo',state.userinfo,1);
    },
    [types.REMOVE_USERINFO](state){
        Store.remove('userinfo');
        state.userinfo = {};
    },
    [types.SET_LEFT_MENU](state,menuArray){
        state.sysMenu = menuArray.sysMenu;
    },
    [types.UPDATE_LOGININFO](state,user_db){
        state.logininfo = user_db.logininfo || {};
        Store.set('logininfo',state.logininfo,1);
    },
    [types.REMOVE_LOGININFO](state){
        Store.remove('logininfo');
        state.logininfo = {};
    }

}