import Constant from '../Constant'
import getParseHtml from '../ParseLayout/ParseHtml'
import { optionToFile } from '../utils/Export'
import Creator from './Creator'
import { defaultSections, defaultStyle } from './config'
class WrodFactory {
  constructor(id: string) {
    this.entryId = id
  }
  entryId!: string
  sections = defaultSections

  async createComsNode() {
    const outerEle = document.querySelector(`#${this.entryId}`)
    const comsMap = getParseHtml.format(outerEle)
    console.log('this.comsMap', comsMap)
    const values = comsMap.values()
    for (const value of values) {
      const paragraphWraper = await Creator.createNode(value)
      this.sections[0].children.push(paragraphWraper)
      console.log('xxx sectionChildren', paragraphWraper)
    }
    return this.sections
  }
}

export const exportWrod = async ({ id, filename, config }) => {
  try {
    if (config && typeof config !== undefined) {
      Constant.setConfigClass(config)
    }
    const wordInstance = new WrodFactory(id)
    const option = await wordInstance.createComsNode()
    console.log('exportWrod option', option)
    await optionToFile({ sections: option, styles: defaultStyle }, filename)
  } catch (err) {
    console.error('生成失败：' + err.message)
  }
}
