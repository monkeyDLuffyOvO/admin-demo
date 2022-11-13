// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
import Vue from 'vue';
import Vuex from 'vuex';

import admin from './modules/admin'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        admin
    }
})
