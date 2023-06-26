import {
  Fontfy,
  Positionfy,
  Colorfy,
  Borderfy,
  Backgroundfy,
  WidthHeightfy,
  Indentfy,
} from './index'

class FormatStyles {
  static format(styleObj, strategy, info) {
    const obj = {}

    for (let key in styleObj) {
      if (this.strategyMap[key]) {
        let ret
        const strategyKeys = Object.keys(strategy)
        if (strategyKeys.length > 0 && strategyKeys.includes(key)) {
          ret = strategy[key](styleObj[key], true)
        } else {
          ret = this.strategyMap[key](styleObj[key], true)
        }
        if (ret && typeof ret !== undefined) {
          Object.assign(obj, ret)
        }
      }
    }
    console.log('xxx Strategy format obj', obj, info)
    return obj
  }

  static strategyMap = {
    // color: hexColorValue,
    border: Borderfy.format.bind(Borderfy),
    bold: Fontfy.handle_fontWeight.bind(Fontfy),
    'font-size': Fontfy.format.bind(Fontfy),
    'font-weight': Fontfy.handle_fontWeight.bind(Fontfy),
    'text-align': Positionfy.format.bind(Positionfy),
    'text-indent': Indentfy.format.bind(Indentfy),
    background: Backgroundfy.format.bind(Backgroundfy),
    'background-color': Backgroundfy.format.bind(Backgroundfy),
    color: Colorfy.format.bind(Colorfy),
    'background-image': Backgroundfy.format.bind(Backgroundfy),
    width: WidthHeightfy.format_width.bind(WidthHeightfy),
    height: WidthHeightfy.format_height.bind(WidthHeightfy),
  }
}

export { FormatStyles }
