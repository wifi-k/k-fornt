/**
 * Created by Administrator on 2017/6/9.
 */
import * as types from '../mutation-types';

export default {
    update_userinfo:({
        commit
    },{userinfo})=>{
        return new Promise((resolve,reject)=>{
            commit(types.UPDATE_USERINFO,{
                userinfo
            });
            resolve();
        })
    },
    remove_userinfo:({
        commit
    })=>{
        return new Promise((resolve,reject) => {
            commit(types.REMOVE_USERINFO);
            resolve();
        })
    },
    getUserInfo(state){
        return state.userinfo;
    },
    update_menu:({
        commit
    },menuArray) => {
        commit(types.SET_LEFT_MENU,menuArray);
    },
    update_logininfo:({
        commit
    },{logininfo})=>{
        return new Promise((resolve,reject)=>{
            commit(types.UPDATE_LOGININFO,{
                logininfo
            });
            resolve();
        })
    },
    remove_logininfo:({
        commit
    })=>{
        return new Promise((resolve,reject) => {
            commit(types.REMOVE_LOGININFO);
            resolve();
        })
    },
    getUserInfo(state){
        return state.logininfo;
    },
}