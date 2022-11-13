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

const pre = 'order_';

export default {
    path: '/admin/order',
    name: 'order',
    header: 'order',
    // redirect: {
    //     name: `${pre}list`
    // },
    component: BasicLayout,
    children: [
        {
            path: 'list',
            name: `${pre}list`,
            meta: {
                auth: ['admin-order-storeOrder-index'],
                title: '订单管理'
            },
            component: () => import('@/pages/order/orderList/index')
        },
        {
            path: 'split_list',
            name: `${pre}split_list`,
            meta: {
                auth: ['admin-order-storeOrder-index'],
                title: '子订单列表'
            },
            component: () => import('@/pages/order/orderList/splitList.vue')
        },
        {
            path: 'offline',
            name: `${pre}offline`,
            meta: {
                auth: ['admin-order-offline'],
                title: '收银订单'
            },
            component: () => import('@/pages/order/offline/index')
        },
        {
            path: 'refund',
            name: `${pre}refund`,
            meta: {
                auth: ['admin-order-refund'],
                title: '售后订单'
            },
            component: () => import('@/pages/order/refund/index')
        },
        {
            path: 'invoice/list',
            name: `${pre}invoice`,
            meta: {
                auth: ['admin-order-startOrderInvoice-index'],
                title: '发票管理'
            },
            component: () => import('@/pages/order/invoice/index')
        },
        {
            path: 'invoice/setup',
            name: `${pre}invoicesetup`,
            meta: {
                auth: ['admin-order-invoice-setup'],
                title: '发票设置'
            },
            props: {
                typeMole: 'invoice'
            },
            component: () => import('@/components/fromSubmit/commonForm.vue')
        },
        {
            path: 'queue/list',
            name: `${pre}queue`,
            meta: {
                // auth: ['admin-order-startOrderInvoice-index'],
                title: '任务列表'
            },
            component: () => import('@/pages/order/orderList/handle/queueList')
        }
    ]
};
