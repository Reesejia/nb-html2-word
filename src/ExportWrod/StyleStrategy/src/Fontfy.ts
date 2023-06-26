import { transSizeUnit } from 'packages/nb-html2-word/src/utils/Export'
import Constant from '../../../Constant'

class Fontfy {
  static format(str: string, needKey = false) {
    if (!str) return
    const [size] = transSizeUnit(str)
    return needKey ? { size } : size
  }

  static handle_fontWeight(str) {
    return { bold: true }
  }
}

export { Fontfy }
