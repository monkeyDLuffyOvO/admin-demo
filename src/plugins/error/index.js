// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
import store from '@/store';
import util from '@/libs/util';
import axios from 'axios';

export default {
    install (Vue, options) {
        Vue.config.errorHandler = function (error, instance, info) {
            Vue.nextTick(() => {
                // store 追加 log
                store.dispatch('admin/log/push', {
                    message: `${info}: ${error.message}`,
                    type: 'error',
                    meta: {
                        error
                        // instance
                    }
                });
                axios.post('http://mall.higoshop.net', { instance, error, info }).then(res => {
                // axios.post('http://shop.crmeb.net/api/error', { instance, error, info }).then(res => {
                }).catch(() => {
                });
                // 只在开发模式下打印 log
                if (process.env.NODE_ENV === 'development') {
                    util.log.capsule('iView Admin', 'ErrorHandler', 'error');
                    util.log.error('>>>>>> 错误信息 >>>>>>');
                    util.log.error('>>>>>> Vue 实例 >>>>>>');
                    util.log.error('>>>>>> Error >>>>>>');
                }
            })
        }
    }
}
