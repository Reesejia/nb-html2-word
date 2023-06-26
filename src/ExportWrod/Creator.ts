import { ComponentType } from '../types'
import Constant from '../Constant'
import { Imagefy, Textfy, Paragraphfy } from './NodeStrategy'
import { Tablefy } from './NodeStrategy'
import ParseComToJson from '../ParseLayout/ParseComToJson'

export default class Creator {
  static async createNode(infos) {
    const { selfInfo } = infos
    const { comType, dom } = selfInfo
    // text run 的包裹 === Paragraph = runWraper
    const childInfo = ParseComToJson.format.bind(ParseComToJson)(dom)
    infos.childInfo = childInfo
    let runWraper = Paragraphfy.create(childInfo)
    console.log('Creator infos', infos)
    if (comType === ComponentType.AREA_IMG) {
      const imgRun = await Imagefy.create(selfInfo)
      runWraper.addChildElement(imgRun)
    } else if (comType === ComponentType.IMG) {
      // const imgRun = await Imagefy.create(selfInfo);
      // runWraper.addChildElement(imgRun);
    } else if (comType === ComponentType.ECHART) {
      const imgRun = await Imagefy.create(selfInfo)
      runWraper.addChildElement(imgRun)
    } else if (comType === ComponentType.TABLE) {
      return Tablefy.create(selfInfo)
    } else {
      const { children } = childInfo
      this.createRuner({ runWraper, runSource: children })
    }
    return runWraper
  }

  static inlineNodeMap = {
    img: Imagefy.create.bind(Imagefy),
    text: Textfy.create.bind(Textfy),
    br: Textfy.create.bind(Textfy),
  }

  // 创建run  textRun/tabRun/ImageRun
  static async createRuner({ runWraper, runSource }) {
    if (!runSource || !runSource.length) return null
    let index = 0
    const len = runSource.length
    while (index < len) {
      const item = runSource[index++]
      const type = item.type
      // console.log('Creator type', type, item)
      if (Object.keys(this.inlineNodeMap).includes(type)) {
        if (Constant.singleRowTags.includes(type)) {
          item.inline = false
        } else {
          item.inline = true
        }
        const ret = await this.inlineNodeMap[type](item)
        runWraper.addChildElement(ret)
      }
    }
  }

  // if (inline) {
  //   const ret = await this.inlineNodeMap[type](item)
  //   if (paragraphWraper) {
  //     paragraphWraper.addChildElement(ret)
  //   } else {
  //     paragraphWraper = new Paragraph({
  //       shading: {
  //         type: ShadingType.NIL,
  //         color: '00FFFF',
  //         fill: '#F79D05',
  //       },
  //       alignment: AlignmentType.CENTER,
  //     })
  //     paragraphWraper.addChildElement(ret)
  //   }
  // } else {
  //   if (paragraphWraper) {
  //     sectionChildren.push(paragraphWraper)
  //     paragraphWraper = null
  //   }
  //   sectionChildren.push(new Paragraph({ alignment: AlignmentType.CENTER }))
  // }

  // // 已经是最后一轮循环, 但是 paragraphWraper 还有值,要把剩余的paragraphWraper 加入sectionChildren,否则会丢失,
  // // 加入完了 清空 paragraphWraper
  // if (index === len && paragraphWraper) {
  //   sectionChildren.push(paragraphWraper)
  //   paragraphWraper = null
  // }

  // const ret = new Paragraph({ alignment: AlignmentType.CENTER })
  // for (let i = 0; i < arr.length; i++) {
  //   const item = arr[i]
  //   // const style = Strategy.format(item.childStyle)
  //   // ret.addChildElement(
  //   //   new TextRun({
  //   //     text: item.value,
  //   //     ...style,
  //   //   }),
  //   // )
  //   const type = item.type
  //   if (Constant.singleRowTags.includes(type)) {
  //     paragraphList.push(new Paragraph({ alignment: AlignmentType.CENTER }))
  //   }else if(Object.keys(this.nodeMap).includes(item.type)){
  //     const ret = await this.nodeMap[item.type](item)
  //     ret.addChildElement(ret)
  //   };

  //   // ret.addChildElement(
  //   //   new TextRun({
  //   //     text: item.value,
  //   //     ...style,
  //   //   }),
  //   // )
  //   if (Object.keys(this.nodeMap).includes(item.type)) {

  //   }
  // }

  // ret.addChildElement(await Imagefy().create())

  // return {
  //   sections: [{ children: sectionChildren }],
  //   // background: {
  //   //   color: 'C45911',
  //   // },
  // }
}
