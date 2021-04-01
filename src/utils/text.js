// 过滤html标签
export function filterHtml(html, length) {
  let re = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
  html = html.replace(re, ""); //执行替换成空字符
  html = html.replace(/&nbsp;/gi, ""); //替换HTML空格
  if (String(parseFloat(length)) === "NaN") {
    length = 0;
  }
  length = parseInt(length);
  if (length && length > 0) {
    html = html.substring(0, length);
  }
  return html;
}
