import { transSizeUnit } from 'packages/nb-html2-word/src/utils/Export'
export default class WidthHeightfy {
  static format_width(str, needKey = false) {
    if (!str) return
    const [size] = transSizeUnit(str)
    return needKey ? { width: size } : size
  }

  static format_height(str, needKey = false) {
    if (!str) return
    const [size] = transSizeUnit(str)
    return needKey ? { height: size * 10 } : size * 10
  }
}
export { WidthHeightfy }
