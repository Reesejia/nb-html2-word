import Constant from '../Constant'
import ParseHtml from '../ParseLayout/ParseHtml'
import { banner, optionToFile } from '../utils/Export'
import Creator from './Creator'
import { defaultSections, defaultStyle } from './config'
export interface ExportConfig {
  id: string
  filename?: string
  config?: object
  success?: Function
  fail?: Function
  complete?: Function
}
class WrodFactory {
  constructor(id: string) {
    this.entryId = id
  }
  entryId!: string
  sections = defaultSections

  async createComsNode() {
    const outerEle = document.querySelector(`#${this.entryId}`)
    const htmlInstance = new ParseHtml(outerEle)
    const comsMap = htmlInstance.format(outerEle)
    console.log('this.comsMap', comsMap)
    const values = comsMap.values()
    const children = []
    for (const value of values) {
      const paragraphWraper = await Creator.createNode(value)
      children.push(paragraphWraper)
      console.log('xxx sectionChildren', paragraphWraper)
    }
    this.sections[0].children = children
    console.log('xxx this.sections', this.sections)
    return this.sections
  }
}

export const exportWrod = async ({
  id,
  filename,
  config,
  success,
  fail,
  complete,
}: ExportConfig) => {
  try {
    if (config && typeof config !== undefined) {
      Constant.setConfigClass(config)
    }
    banner()
    const wordInstance = new WrodFactory(id)
    const option = await wordInstance.createComsNode()
    console.log('exportWrod option', option)
    await optionToFile({ sections: option, styles: defaultStyle }, filename)
    success && success()
  } catch (err) {
    console.error('生成失败：' + err.message)
    fail && fail(err)
  }
  complete && complete()
}
