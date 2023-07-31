import Constant from '../Constant'
import { ComponentType } from '../types'
class ParseHtml {
  constructor(id: string) {
    const ele = document.querySelector(`#${id}`)
    if(typeof ele == 'undefined'){
      console.error(`id为：${id}的元素不存在!`)
      return 
    }
    this.ele = ele  
  }
  format() {  
    this.findPageChild()
    console.log('ParseHtml this.comsMap', this.comsMap)
    this.comsMap = this.sortMap(this.comsMap)
    return this.comsMap
  }

  ele!: Element
  comsMap = new Map()



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

  findPageChild(){
    //  node.classList.contains(Constant.WordUIPage)
    const uiPage = this.ele.querySelector(`.${Constant.WordUIPage}`)
    const uiContainers = Array.from(uiPage.children)
   
    uiContainers.forEach((container,index) =>{
      this.walk(container, index)
    });
  }

  walk(ele: Element, containerOrder) {
    const classList = ele.classList
    if (classList.contains(Constant.WordUiAreaModule)) {
      this.setComsMap(ele, containerOrder)
    } else {
      const isComponent =
        !classList.contains(Constant.WordUiContainer) &&
        classList.contains(Constant.WordUiComponent)
      if (isComponent) {
        this.setComsMap(ele, containerOrder)
      } else {
        if (ele.hasChildNodes()) {
          Array.from(ele.children).forEach((node) => this.walk(node, containerOrder))
        }
      }
    }
  }

  order = 0
  async setComsMap(ele: Element,containerOrder: number) {
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
    this.comsMap.set(ele, { selfInfo: domObj, order:  containerOrder })
    this.order++
  }

  sortMap(map) {
    const sortedArray = [...map].sort((a, b) => {
      if(a[1].order !== b[1].order){
        return a[1].order - b[1].order
      }
       return  a[1].selfInfo.addTop - b[1].selfInfo.addTop
      }
    )
    const sortedMap = new Map(sortedArray)
    console.log('ParseHtml sortedMap', sortedMap)
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
  addContainerTop(ele: Element) {
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

  getComType(ele: Element) {
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

export  {ParseHtml}


const map = new Map();
map.set('a', {order: 2, selfInfo: {addTop: 20}});
map.set('b', {order: 1, selfInfo: {addTop: 10}});
map.set('c', {order: 2, selfInfo: {addTop: 10}});
map.set('d', {order: 1, selfInfo: {addTop: 20}});
map.set('e', {order: 1, selfInfo: {addTop: 20}});
map.set('e', {order: 1, selfInfo: {addTop: 10}});