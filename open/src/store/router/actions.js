import * as types from '../mutation-types';

export default {
    set_header_route: ({
        commit
    }, paths) => {
        commit(types.SET_CUR_ROUTE, paths);
    }
};