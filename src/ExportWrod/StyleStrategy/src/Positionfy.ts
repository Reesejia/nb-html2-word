import { Alignment, AlignmentType } from 'docx'

class Positionfy {
  static format(value: string, needKey = false) {
    // console.log('Positionfy value', value)
    AlignmentType[value.toLocaleUpperCase()]
    const o = AlignmentType[value.toLocaleUpperCase()] || AlignmentType.LEFT
    return needKey ? { alignment: o } : o
  }
}
export { Positionfy }
