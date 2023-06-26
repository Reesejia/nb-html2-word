import { Alignment, AlignmentType } from 'docx'
import { transSizeUnit } from 'packages/nb-html2-word/src/utils/Export'

class Indentfy {
  static format(str, needKey = false) {
    if (!str) return
    const [size] = transSizeUnit(str)
    const o = { left: size }
    return needKey ? { indent: o } : o
  }
}

export { Indentfy }

// readonly start?: number | UniversalMeasure;
// readonly end?: number | UniversalMeasure;
// readonly left?: number | UniversalMeasure;
// readonly right?: number | UniversalMeasure;
// readonly hanging?: number | PositiveUniversalMeasure;
// readonly firstLine?: number | PositiveUniversalMeasure;
