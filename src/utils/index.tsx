/**
 * @description 复制文本到剪切板
 * @param {string} text 文本
 */
const copyText = (text) => {
  return navigator.clipboard.writeText(text)
}

export { copyText }
