import { ShadingType } from 'docx'
import { Colorfy } from './Colorfy'

class Backgroundfy {
  static format(bgColor, needKey = false) {
    if (!bgColor) return
    const o = {
      type: ShadingType.CLEAR,
      fill: Colorfy.format(bgColor),
      color: 'auto',
    }
    return needKey ? { shading: o } : o
  }

  static handle_bgColor(bgColor, needKey = false) {
    const o = {
      type: ShadingType.CLEAR,
      fill: Colorfy.format(bgColor),
      color: 'auto',
    }
    return needKey ? { shading: o } : o
  }
}
export { Backgroundfy }
