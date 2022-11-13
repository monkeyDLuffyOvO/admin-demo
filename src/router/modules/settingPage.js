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

const pre = 'devise_';

export default {
    path: '/admin/setting/pages',
    name: 'devise',
    header: 'devise',
    // redirect: {
    //     name: `${pre}devise`
    // },
    component: BasicLayout,
    children: [
				{
						path: '/admin/setting/pages/devise',
						name: `${pre}devise`,
						meta: {
								auth: ['admin-setting-pages-devise'],
								title: '店铺装修'
						},
						component: () => import('@/pages/setting/devise/list')
				},
				{
						path: '/admin/setting/theme_style',
						name: `${pre}themeStyle`,
						meta: {
								auth: ['admin-setting-theme_style'],
								title: '主题风格'
						},
						component: () => import('@/pages/setting/themeStyle/index')
				},
				{
				    path: '/admin/setting/system_visualization_data',
				    name: `${pre}systemGroupData`,
				    meta: {
				        auth: ['admin-setting-system_visualization_data'],
				        title: '数据配置'
				    },
				    component: () => import('@/pages/system/group/visualization')
				},
				{
				    path: '/admin/setting/pc_group_data',
				    name: `${pre}systemGroupDataGroup`,
				    meta: {
				        auth: ['setting-system-pc_data'],
				        title: 'PC商城'
				    },
				    component: () => import('@/pages/system/group/pc')
				}
    ]
};
