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

const pre = 'agent_';
const meta = {
    auth: true
};
export default {
    path: '/admin/agent',
    name: 'agent',
    header: 'agent',
    // redirect: {
    //     name: `${pre}agentManage`
    // },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'agent_manage/index',
            name: `${pre}agentManage`,
            meta: {
                auth: ['agent-agent-manage'],
                title: '分销员管理'
            },
            component: () => import('@/pages/agent/agentManage')
        },
        {
            path: 'agreement',
            name: `${pre}agreementt`,
            meta: {
                auth: ['agent-agreement'],
                title: '分销说明'
            },
            component: () => import('@/pages/agent/agreement')
        }
    ]
};
