import { defaultSections } from './ExportWrod/config'
export default class Constant {
  static WordUIPage = 'magic-ui-page' // word-entry-flag 需要导出word的页面入口标识
  static WordUiContainer = 'magic-ui-container'
  static WordUiComponent = 'magic-ui-component'

  static WordUiEchartModule = 'magic-ui-echart-module' // 1. echarts 组件级别
  static WordUiCanvasModule = 'magic-ui-canvas-module' // 2. canvas  组件级别
  static WordUiImageModule = 'magic-ui-image-module' // 3. 本身是图片、矢量图、二维码 组件级别
  static WordUiAreaModule = 'magic-ui-area-module' // 4. 某个区域要转成图片 组级别
  static WordUiTableModule = 'magic-ui-table-module' // 5.table com标识 组件级别
  static WordUIWidthFill = "magic-ui-width-fill" // 100% 填充

  // table header
  static TableInnerWraper = 'el-table__inner-wrapper'
  static TableHeaderWraper = 'el-table__header'
  static TableTheadTagName = 'thead'
  static TableTrTagName = 'tr'
  // table body
  static TableBodyWrapper = 'el-table__body-wrapper'
  static TableTBodyTagName = 'tbody'
  static TableBodyRow = 'el-table__row'
  // header and tbody cell
  static TableCell = 'el-table__cell'
  static TableInnerCell = 'cell'

  static MaxStackLen = 15000
  static pageWidth = 12000
  static pageHeight = 17000
  static FontRemScale = 200
  static MaxWidthPerWord = 800
  static FontPxScale = 2
  static singleTags = ['br', 'img']
  static singleRowTags = ['br']

  static setConfigClass(classnames: Object) {
    for (const classname in classnames) {
      this[classname] = classnames[classname]
    }
  }

  static mainSize() {
    const {
      left,
      right,
      top,
      bottom,
    } = defaultSections[0].properties.page.margin
    const mainWidth = this.pageWidth - left - right
    const mainHeight = this.pageHeight - top - bottom
    return {
      width: mainWidth,
      height: mainHeight,
    }
  }
}
