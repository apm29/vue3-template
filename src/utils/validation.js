export const minLen = l => v => (v && v.length >= l) || `至少输入${l}个字符`;
export const maxLen = l => v => (v && v.length <= l) || `至多输入${l}个字符`;
export const exactLen = l => v => (v && v.length === l) || `必须输入${l}个字符`;
export const required = msg => v => Boolean(v) || msg;
export const requiredArray = msg => v =>
  (Array.isArray(v) && v.length >= 1) || msg;
