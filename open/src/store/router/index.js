/**
 * Created by Administrator on 2017/6/9.
 */
import * as types from '../mutation-types';
import actions from './actions';
import mutations from './mutations';
const state = {
    //头部当前路由，匹配高亮所用
    headerCurRouter: '',

    //左侧当前路由，匹配高亮所用
    leftCurRouter: ''
};

export default {
    state,
    actions,
    mutations
}