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

export default {
    install (Vue, options) {
        // 快速打印 log
        Vue.prototype.$log = {
            ...util.log,
            push (data) {
                if (typeof data === 'string') {
                    // 如果传递来的数据是字符串
                    // 赋值给 message 字段
                    // 为了方便使用
                    // eg: this.$log.push('foo text')
                    store.dispatch('admin/log/push', {
                        message: data
                    });
                } else if (typeof data === 'object') {
                    // 如果传递来的数据是对象
                    store.dispatch('admin/log/push', data);
                }
            }
        }
    }
}
