/**
 * Created by Administrator on 2017/6/9.
 */
import Store from '../store';
import actions from './actions';
import mutations from './mutations';
const state = {
    userinfo : Store.get('userinfo') || {},
    sysMenu : {},
    logininfo: Store.get('logininfo') || {},
    rememberMe : Store.get('rememberMe') ? true : false
};

export default {
    state,
    actions,
    mutations
}