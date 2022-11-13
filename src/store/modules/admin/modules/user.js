// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
/**
 * 用户信息
 * */
export default {
    namespaced: true,
    state: {
        // 用户信息
        info: {},
        pageName: ''
    },
    mutations: {
        setPageName(state,id){
            state.pageName = id
        },
    },
    actions: {
        getPageName ({ commit }) {
            let storage = window.localStorage;
            commit('setPageName', storage.getItem('pageName'));
        },
        /**
         * @description 设置用户数据
         * @param {Object} state vuex state
         * @param {Object} dispatch vuex dispatch
         * @param {*} info info
         */
        set ({ state, dispatch }, info) {
            return new Promise(async resolve => {
                // store 赋值
                state.info = info;
                // 持久化
                await dispatch('admin/db/set', {
                    dbName: 'sys',
                    path: 'user.info',
                    value: info,
                    user: true
                }, { root: true });
                // end
                resolve();
            })
        },
        /**
         * @description 从数据库取用户数据
         * @param {Object} state vuex state
         * @param {Object} dispatch vuex dispatch
         */
        load ({ state, dispatch }) {
            return new Promise(async resolve => {
                // store 赋值
                state.info = await dispatch('admin/db/get', {
                    dbName: 'sys',
                    path: 'user.info',
                    defaultValue: {},
                    user: true
                }, { root: true });
                // end
                resolve();
            })
        }
    }
}
