import Constant from '../Constant'
import { ComponentType } from '../types'
class ParseHtml {
  static format(ele) {
    this.walk(ele)
    this.comsMap = this.sortMap(this.comsMap)
    return this.comsMap
  }

  ele!: Element
  static comsMap = new Map()

  // 条件1：有component 没有 container
  // 先广度遍历，是否有magic-ui-area-module，级别的container，
  // 如果有，放入map，直接转成图片，不进行深度遍历
  // 如果没有
  //   是否满足 条件1,
  //     是则依次加入map, 遍历map
  //   如果遇到 有chart或 img 并且 满足条件1，可以走chart img 策略。
  //   剩余情况，需要先判断子元素是否有chart img，如果有 先将chart img 转成图片，并给此区域添加有图片标记，todo
  //   剩余情况将文本结构 匹配节点和样式策略。
  //   换行情况 nbsb需要处理

  static walk(ele: Element) {
    const classList = ele.classList
    if (classList.contains(Constant.WordUiAreaModule)) {
      this.setComsMap(ele)
    } else {
      const isComponent =
        !classList.contains(Constant.WordUiContainer) &&
        classList.contains(Constant.WordUiComponent)
      if (isComponent) {
        this.setComsMap(ele)
      } else {
        if (ele.hasChildNodes()) {
          Array.from(ele.children).forEach((node) => this.walk(node))
        }
      }
    }
  }

  static order = 0
  static async setComsMap(ele: Element) {
    // COM_TYPE: 'COM' 'AREA_IMG' 'IMG' 'TABLE'
    const comType = this.getComType(ele)
    const domObj = {
      addTop: this.addContainerTop(ele),
      comType,
      dom: ele,
      tag: ele.localName,
      attributes: {},
      childNodes: [],
      children: [],
      parentNode: ele.parentNode,
      parentClass: {},
    }
    this.comsMap.set(ele, { selfInfo: domObj })
    this.order++
  }

  static sortMap(map) {
    const sortedArray = [...map].sort(
      (a, b) => a[1].selfInfo.addTop - b[1].selfInfo.addTop
    )
    const sortedMap = new Map(sortedArray)
    console.log('sortedMap', sortedMap)
    return sortedMap
  }

  /**
   *
   * @param ele dom节点
   * @returns position top Number
   * 返回该元素相对于外层节点WordUIPage的top值，
   * 将该元素的position top值，和该元素的祖先节点的position top值累加，
   * 确定改元素相对于页面top值，从而确定该元素在页面展示顺序
   */
  static addContainerTop(ele: Element) {
    let node = ele
    let top = 0
    let isContinue = true
    while (node && isContinue) {
      if (node.classList.contains(Constant.WordUIPage)) {
        isContinue = false
      } else {
        const curTop = parseInt(
          getComputedStyle(node, null).getPropertyValue('top')
        )
        if (curTop) {
          top += curTop
        }
        node = node.parentElement
      }
    }
    return top
  }

  static getComType(ele: Element) {
    // COM_TYPE: 'NORMAL_COM' 'AREA_IMG' 'IMG' 'TABLE' 'ECHART'
    const classList = ele.classList
    if (classList.contains(Constant.WordUiAreaModule)) {
      return ComponentType.AREA_IMG
    } else if (classList.contains(Constant.WordUiTableModule)) {
      return ComponentType.TABLE
    } else if (classList.contains(Constant.WordUiImageModule)) {
      return ComponentType.IMG
    } else if (classList.contains(Constant.WordUiEchartModule)) {
      return ComponentType.ECHART
    } else {
      return ComponentType.NORMAL_COM
    }
  }
}

export default ParseHtml
