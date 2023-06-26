import {
  AlignmentType,
  HeightRule,
  IShadingAttributesProperties,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
  convertInchesToTwip,
} from 'docx'
import Constant from '../../Constant'
import ParseComToJson from '../../ParseLayout/ParseComToJson'
import { Backgroundfy } from '../StyleStrategy'
import { Paragraphfy } from './Paragraphfy'
import { Textfy } from './Textfy'
import { FormatStyles } from '../StyleStrategy/FormatStyles'

class Tablefy {
  static create(infos) {
    console.log('Tablefy infos', infos)
    const table = this.parseTable(infos)
    console.log('Tablefy create table ', table)
    return table
  }
  static parseTable(infos) {
    const { dom } = infos
    const headerTrs = dom.querySelectorAll(
      `.${Constant.WordUiTableModule} .${Constant.TableInnerWraper} .${Constant.TableHeaderWraper} ${Constant.TableTheadTagName} ${Constant.TableTrTagName}`
    )
    const bodyTrs = dom.querySelectorAll(
      `.${Constant.WordUiTableModule} .${Constant.TableInnerWraper} .${Constant.TableBodyWrapper} ${Constant.TableTBodyTagName} ${Constant.TableTrTagName}`
    )
    // console.log(' Tablefy headerRows', headerTrs)
    // console.log(' Tablefy bodyRows', bodyTrs)
    const headerRows = this.createTr(headerTrs, 'header')
    const bodyRows = this.createTr(bodyTrs, 'body')

    const table = new Table({
      rows: [...headerRows, ...bodyRows],
      width: {
        size: 6535,
        type: WidthType.AUTO,
      },
      margins: {
        top: convertInchesToTwip(0.07),
        bottom: convertInchesToTwip(0.07),
        right: convertInchesToTwip(0.07),
        left: convertInchesToTwip(0.07),
      },
      //   indent: {
      //     size: 1200,
      //     type: WidthType.DXA,
      //   },
    })
    return table
  }

  static createTr(trs, type) {
    const rowWraper = []
    const rowOptions = {
      cantSplit: true,
      tableHeader: true,
      height: { value: 200, rule: HeightRule.AUTO },
    }

    let columnWidth = 0
    for (let i = 0; i < trs.length; i++) {
      const row = new TableRow({ children: [], ...rowOptions })
      const tr = trs[i]
      const cells = tr.querySelectorAll(
        `.${Constant.TableCell} .${Constant.TableInnerCell}`
      )
      if (type === 'header' && i === 0) {
        const columnNum = cells.length
        columnWidth = Math.floor(Constant.mainSize().width / columnNum)
      }

      for (let j = 0; j < cells.length; j++) {
        const td = cells[j]
        const cell = this.createCell(td, columnWidth)
        row.addChildElement(cell)
      }
      rowWraper.push(row)
      //   table.addChildElement(row)
    }
    return rowWraper
  }

  static createCell(td: Element, columnWidth) {
    const domObj = ParseComToJson.format(td)
    console.log('createCell domObj', domObj)
    const { children } = domObj
    const cellWraper = []
    const strategy = {
      // 'background-image': Backgroundfy.format.bind(Backgroundfy),
    }

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      child.inlineStyle = child.mergedStyle
      const style = FormatStyles.format(child.mergedStyle, strategy, domObj)
      const text = new TextRun({
        text: child.value,
        ...style,
      })
      cellWraper.push(
        new Paragraph({
          children: [text],
          alignment: AlignmentType.CENTER,
        })
      )
    }

    let shading
    // if (cellMergedStyle['background-color']) {
    //   shading = Backgroundfy.format(
    //     cellMergedStyle['background-color'],
    //   ) as IShadingAttributesProperties
    //   console.log('Tablefy shading', shading)
    // }
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      children: cellWraper,
      shading,
      // width: { size: columnWidth, type: WidthType.PERCENTAGE },
      //   shading: {
      //     type: ShadingType.CLEAR,
      //     fill: 'ff0000',
      //     color: 'auto',
      //   },
    })
  }
}
export { Tablefy }
