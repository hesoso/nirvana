/**
 * 数组转为select组件所需要的options
 */
function obj2options(arr, labelField, valueField) {
  return arr.map((item) => {
    return {
      label: item[labelField],
      value: item[valueField]
    }
  })
}

export { obj2options }
