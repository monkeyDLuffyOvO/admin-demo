// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
import { export_json_to_excel } from '../vendor/Export2Excel'

/** 
* @method exportExcel
* @param {Array} header   表头
* @param {Array} filterVal 表头属性字段
* @param {String} filename 文件名称
* @param {Array} tableData 列表数据
**/
export default function exportExcel(header, filterVal, filename, tableData) {
  var data = formatJson(filterVal, tableData)
  export_json_to_excel(
    header,
    data,
    filename
  )
}

function formatJson(filterVal, tableData) {
  return tableData.map(v => {
    return filterVal.map(j => {
      return v[j]
    })
  })
}