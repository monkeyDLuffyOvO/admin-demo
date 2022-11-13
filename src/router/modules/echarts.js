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

const pre = 'echarts_';

export default {
    path: '/admin/echarts',
    name: 'echarts',
    header: 'echarts',
    // redirect: {
    //     name: `${pre}/trade/order`
    // },
    component: BasicLayout,
    children: [
        {
            path: 'trade/order',
            name: `${pre}/trade/order`,
            meta: {
                auth: ['admin-order-storeOrder-index'],
                title: '交易统计'
            },
            component: () => import('@/pages/echarts/trade/order')
        },
        {
            path: 'trade/product',
            name: `${pre}/trade/product`,
            meta: {
                auth: ['admin-order-storeOrder-index'],
                title: '商品统计'
            },
            component: () => import('@/pages/echarts/trade/product')
        }
    ]
};
