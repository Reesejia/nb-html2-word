import Constant from '../Constant'
import ComputedStyle from './ComputedStyle'

/**
 * 拿到渲染完毕的renderTree信息，转成ast语法树
 */
class ParseComToJson {
  // 将dom结构转成json
  static format(dom, parentNode = null) {
    let domObj
    if (dom.nodeType === 1) {
      // 如果是element节点
      domObj = {
        dom,
        tag: dom.localName,
        attributes: {},
        childNodes: [],
        children: [],
        parentNode: parentNode,
        parentClass: {},
      }
      this.formatAttrs(dom, domObj)
      // console.log("xxxdomObj", domObj);
      let childList = dom.childNodes
      // console.log('xxx childList', childList)
      if (!Constant.singleTags.includes(domObj.tag)) {
        for (let i = 0, l = childList.length; i < l; i++) {
          const childJson = this.format(childList[i], domObj)
          if (childJson) {
            domObj.childNodes.push(childJson)
          }
        }
      } else {
        domObj.tag = dom.localName
        const computedStyle = ComputedStyle.format(dom, domObj)
        domObj.children.push(childList[0])
        domObj.computedStyle = computedStyle
        this.mergeParentAttrs(domObj)
      }
    } else if (dom.nodeType === 3) {
      // 如果是text节点
      const textValue = dom.textContent.trim()
      let computedStyle
      if (textValue) {
        domObj = {
          dom,
          type: 'text',
          value: textValue,
          computedStyle,
          parentNode: parentNode,
          // children: [Creator.Creator(textValue)],
        }
        this.mergeParentAttrs(domObj)
        if (dom.parentNode) {
          ComputedStyle.format(dom.parentNode, domObj)
        }
      }
    }
    return domObj
  }

  // 合并所有父级节点的 style和class
  static mergeParentAttrs(node) {
    const oldNode = node
    let nodeClass = []
    let nodeStyle = {}
    while (node && node.parentNode) {
      const attributes = node.parentNode && node.parentNode.attributes
      const classList = attributes && attributes.class
      const inlineStyle = node.parentNode && node.parentNode.inlineStyle
      // todo 条件可能要调整
      if (classList && classList.includes(Constant.WordUIPage)) {
        break
      } else {
        node = node.parentNode
        if (classList && classList.length > 0) {
          nodeClass = [...nodeClass, ...classList]
        }
        if (inlineStyle) {
          // todo 待确认 1.父子合并策略是否正确 2.是否有必要单独拿行内样式，直接拿computed样式不是可以
          // 合并parent的样式，以当前节点样式合并parent样式，当前节点样式优先
          nodeStyle = Object.assign({}, inlineStyle, nodeStyle)
        }
      }
    }
    oldNode.childClass = nodeClass
    oldNode.childStyle = nodeStyle
    node.children = [...node.children, oldNode]
    // console.log("xxx ele INode", node);
  }
  // 格式化节点的所有属性 style和class
  static formatAttrs(node: Element, domObj) {
    let attlist = node.attributes
    for (let i = 0, l = attlist.length; i < l; i++) {
      // .name获取属性名，.value获取属性值
      const name = attlist[i].name
      if (name === 'style') {
        this.fromatStyleAttr(domObj, attlist[i])
      } else {
        domObj.attributes[attlist[i].name] = attlist[i].value.split(' ')
      }
    }
  }

  // 格式化样式属性
  static fromatStyleAttr(domObj, attr) {
    const o = {}
    const attrs = attr.value.split(';').filter((item) => item.trim().length > 0)
    attrs.forEach((attr) => {
      let [name, value] = attr.split(':')
      o[name.trim()] = value.trim()
    })
    domObj.inlineStyle = o
  }
}

export default ParseComToJson
