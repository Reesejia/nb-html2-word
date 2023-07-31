import Constant from '../Constant'
import {ParseHtml} from '../ParseLayout/ParseHtml'
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
  sections = defaultSections
  async createComsNode(id: string) {
    const htmlInstance = new ParseHtml(id)
    const comsMap = htmlInstance.format()
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
    const wordInstance = new WrodFactory()
    const option = await wordInstance.createComsNode(id)
    console.log('exportWrod option', option)
    await optionToFile({ sections: option, styles: defaultStyle }, filename)
    success && success()
  } catch (err) {
    console.error('生成失败：' + err.message)
    fail && fail(err)
  }
  complete && complete()
}
