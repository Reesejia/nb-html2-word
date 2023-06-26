import { Paragraph, VerticalPositionAlign } from 'docx'
import { NodeConfigJson } from '../../types'
import {
  Backgroundfy,
  Borderfy,
  Indentfy,
  WidthHeightfy,
} from '../StyleStrategy'
import { FormatStyles } from '../StyleStrategy/FormatStyles'

// text runner 的包裹 === Paragraph = runerWraper
class Paragraphfy {
  static create(info, fillText = false) {
    let style
    try {
      const strategy = {
        'background-image': Backgroundfy.format.bind(Backgroundfy),
      }
      const { inlineStyle } = info
      style = FormatStyles.format(inlineStyle, strategy, info)
      console.log('Paragraphfy try style, info', style, info)
      let textValue = fillText && info.value ? { text: info.value } : {}
      return new Paragraph({
        style: 'paragraph_style1',
        ...style,
        ...textValue,
      })
    } catch (err) {
      console.log('Paragraphfy catch err style', style)
      console.log('Paragraphfy create err, info', err, info)
    }
  }
}

// const defaultOptions = {
//   border: '',
//   heading: '',
//   pageBreakBefore: '',
//   style: '',
//   bullet: {
//     level: 0,
//   },
//   shading: {
//     type: '',
//     position: '',
//     leader: '',
//   },
//   widowControl: '',
//   wordWrap: '',
//   frame: {
//     width: 0,
//     height: 0,
//     x: 0,
//     y: 0,
//     alignmentX: HorizontalPositionAlign,
//     alignmentY: VerticalPositionAlign,
//   },
// }

// readonly border?: IBordersOptions;
// readonly heading?: HeadingLevel;
// readonly bidirectional?: boolean;
// readonly pageBreakBefore?: boolean;
// readonly tabStops?: readonly TabStopDefinition[];
// readonly style?: string;
// readonly bullet?: {
//     readonly level: number;
// };
// readonly shading?:Array{
//   readonly type: TabStopType;
//   readonly position: number | TabStopPosition;
//   readonly leader?: LeaderType;
// };
// readonly widowControl?: boolean;
// readonly frame?: {
//   readonly anchorLock?: boolean;
//   readonly dropCap?: DropCapType;
//   readonly width: number;
//   readonly height: number;
//   readonly x?: number;
//   readonly y?: number;
//   readonly wrap?: FrameWrap;
//   readonly lines?: number;
//   readonly anchorHorizontal?: FrameAnchorType;
//   readonly anchorVertical?: FrameAnchorType;
//   readonly spaceHorizontal?: number;
//   readonly spaceVertical?: number;
//   readonly rule?: HeightRule;
//   readonly alignmentX?: HorizontalPositionAlign;
//   readonly alignmentY?: VerticalPositionAlign;
// }
// readonly suppressLineNumbers?: boolean;
// readonly wordWrap?: boolean;
// readonly scale?: number;
// readonly autoSpaceEastAsianText?: boolean;
export { Paragraphfy }
