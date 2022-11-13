// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +--------------------------------------------------------------
// 生成随机字符串
export default function (len = 32) {
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}
