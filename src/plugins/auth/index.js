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
 * @description 鉴权指令
 * 当传入的权限当前用户没有时，会移除该组件
 * 用例：<Tag v-auth="['admin']">text</Tag>
 * */
import store from '@/store';
import { includeArray } from '@/libs/system';

export default {
    inserted (el, binding, vnode) {
        const { value } = binding;
        const access = store.state.admin.user.info.access;

        if (value && value instanceof Array && value.length && access && access.length) {
            const isPermission = includeArray(value, access);
            if (!isPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
    }
}
