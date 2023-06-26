import Constant from '../Constant'
export const getEleByClass = (classname: string) => {
  return document.querySelectorAll(`.${classname}`)
}
export let getStyle = function (ele: HTMLElement, attr: string): number {
  if (typeof getComputedStyle !== 'undefined') {
    getStyle = function (ele, attr: string) {
      // @ts-ignore
      return parseInt(getComputedStyle(ele as Element, null)[attr])
    }
  } else {
    getStyle = function (ele, attr: string) {
      // @ts-ignore
      return parseInt(ele.currentStyle[attr])
    }
  }
  return getStyle(ele, attr)
}
// 在一个容器中找类名为class 的节点
export const searchNode = (container, className) => {
  let stackLen = 1
  function searchNode(node) {
    stackLen++
    console.log('xxx searchEntry Node', node)
    const classList = node.attributes && node.attributes.class
    if (classList && classList.includes(className)) {
      return node
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        const iNode = node.childNodes[i]
        if (stackLen < Constant.MaxStackLen) {
          return searchNode(iNode)
        }
      }
    }
  }
  return searchNode(container)
}
