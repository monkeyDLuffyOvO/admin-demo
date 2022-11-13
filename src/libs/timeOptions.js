// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +--------------------------------------------------------------
export default {
    shortcuts: [
        {
            text: '今天',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))
                return [start, end]
            }
        },
        {
            text: '昨天',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1)))
                end.setTime(end.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() -1 )))
                return [start, end]
            }
        },
        {
            text: '最近7天',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 6)))
                return [start, end]
            }
        },
        {
            text: '最近30天',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 29)))
                return [start, end]
            }
        },
        {
            text: '本月',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), 1)))
                return [start, end]
            }
        },
        {
            text: '本年',
            value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setTime(new Date(new Date().getFullYear(), 0, 1)))
                return [start, end]
            }
        }
    ]
}