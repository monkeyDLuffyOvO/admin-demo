// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'home_';

export default {
    path: '/admin/home/',
    name: 'home',
    header: 'home',
    redirect: {
        name: `${pre}index`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: '/',
            name: `${pre}index`,
            meta: {
                auth: ['admin-index-index'],
                title: '主页'
            },
            component: () => import('@/pages/index/index')
        }
    ]
};
