// +----------------------------------------------------------------------
// | HIGOSHOP [ HIGOSHOP助力中小企业数字化转型 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.higoshop.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed HIGOSHOP并不是自由软件，未经许可不能去掉HIGOSHOP相关版权
// +----------------------------------------------------------------------
// | Author: HIGOSHOP Team <higoshop@126.com>
// +----------------------------------------------------------------------
export function formatRichText(html) {
  let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
    match = match
      .replace(/style="[^"]+"/gi, "")
      .replace(/style='[^']+'/gi, "");
    match = match
      .replace(/width="[^"]+"/gi, "")
      .replace(/width='[^']+'/gi, "");
    match = match
      .replace(/height="[^"]+"/gi, "")
      .replace(/height='[^']+'/gi, "");
    return match;
  });
  newContent = newContent.replace(
    /style="[^"]+"/gi,
    function (match, capture) {
      match = match
        .replace(/width:[^;]+;/gi, "max-width:100%;")
        .replace(/width:[^;]+;/gi, "max-width:100%;");
      return match;
    }
  );
  newContent = newContent.replace(/<br[^>]*\/>/gi, "");
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
  );
  return newContent;
}