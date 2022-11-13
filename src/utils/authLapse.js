// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
export function authLapse (data) {
    return new Promise((resolve, reject) => {
        this.$Notice.warning({
            title: data.title,
            duration: 3,
            desc: data.info,
            render: h => {
                return h('div', [
                    h('a', {
                        attrs: {
                            href: 'http://www.crmeb.com'
                        }
                    }, data.info)
                ])
            }
        });
        // if(data.status === false){
        //
        // }
    })
}
