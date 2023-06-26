import {
  PositionalTab,
  PositionalTabAlignment,
  PositionalTabLeader,
  PositionalTabRelativeTo,
  TextRun,
} from 'docx'
import { NodeConfigJson } from '../../types'
import { Backgroundfy, Colorfy } from '../StyleStrategy'
import { FormatStyles } from '../StyleStrategy/FormatStyles'
class Textfy {
  static create(info) {
    const { mergedStyle } = info
    const bgImg = mergedStyle['background-image']
    // 处理文字渐变色
    if (bgImg) {
      mergedStyle.color = mergedStyle['background-image']
    }
    const strategy = {
      'background-image': Colorfy.format.bind(Colorfy),
    }
    const style = FormatStyles.format(mergedStyle, strategy, info)
    console.log('xxx Textfy style', style, info)
    try {
      const block = info.inline ? {} : { break: 1 }

      const textRun =
        info.value && info.value.length > 0
          ? new TextRun({
              text: info.value,
              ...block,
              ...style,
            })
          : null
      return textRun
    } catch (err) {
      console.log('Textfy create err', info)
    }
  }
}

export { Textfy }
