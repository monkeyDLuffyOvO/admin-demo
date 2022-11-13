// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
export function modelSure (formRequestPromise, Title) {
    return new Promise((resolve, reject) => {
        this.$Modal.confirm({
            title: Title,
            content: '<p>确定要删除吗？</p><p>删除后将无法恢复，请谨慎操作！</p>',
            onOk: () => {
                formRequestPromise.then(({ data }) => {
                }).catch(() => {
                    this.$Message.error('表单加载失败')
                })
            }
            // onCancel: () => {
            //     this.$Message.info('取消成功');
            // }
        });
    })
}
