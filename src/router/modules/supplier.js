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

const pre = 'supplier_';

export default {

    // 顶部导航供应商
    path: '/admin/supplier',
    name: 'supplier',
    header: 'supplier',
    // redirect: {
    //     name: `${pre}supplier`
    // },
    component: BasicLayout,
    // 供应商侧边栏
    children: [
        {
            path: 'supplier/index',
            name: `${pre}menu`,
            meta: {
                auth: ['admin-supplier-supplier-index'],
                title: '供应商菜单'
            },
            component: () => import('@/pages/supplier/supplierList/index')
        },
        {
            path: 'menu/list',
            name: `${pre}menulist`,
            meta: {
                auth: ['admin-supplier-menu-list'],
                title: '供应商管理'
            },
            component: () => import('@/pages/supplier/supplier-supplier_list/index')
        },
        {
            path: 'supplierAdd/:id?',
            name: `${pre}supplier`,
            meta: {
                auth: ['admin-supplier-supplierAdd'],
                title: '供应商添加'
            },
            component: () => import('@/pages/supplier/supplierAdd/index')
        },
        {
            path: 'orderList/index',
            name: `${pre}orderList`,
            meta: {
                auth: ['admin-supplier-orderList'],
                title: '订单列表'
            },
            component: () => import('@/pages/supplier/orderList/index')
        },
        {
            path: 'afterOrder/index',
            name: `${pre}afterOrder`,
            meta: {
                auth: ['admin-supplier-afterOrder'],
                title: '售后订单'
            },
            component: () => import('@/pages/supplier/afterOrder/index')
        },
        {
            path: 'orderStatistics/index',
            name: `${pre}orderStatistics`,
            meta: {
                auth: ['admin-supplier-supplier_list'],
                title: '订单统计'
            },
            component: () => import('@/pages/supplier/orderStatistics/index')
        },

    ]
};
