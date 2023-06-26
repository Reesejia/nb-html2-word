import { BorderStyle } from 'docx'
import { Colorfy } from './Colorfy'
import { transSizeUnit } from 'packages/nb-html2-word/src/utils/Export'

class Borderfy {
  static format(borderStr, needKey = false) {
    // console.log('borderStr', borderStr)
    if (!borderStr) return
    const res = this.getProperties(borderStr)
    if (!res) return {}
    let { borderSize, borderStyle, borderColor } = res
    borderStyle = this.formatBorderStyle(borderStyle)
    borderColor = borderColor && Colorfy.format(borderColor)
    const [size, unit] = (borderSize && transSizeUnit(borderSize)) || [1, 'px']
    if (borderSize && borderStyle && borderColor) {
      const o = {}
      const b = { size, unit, borderStyle, borderColor }
      Object.assign(o, this.formatBorder('top', b))
      Object.assign(o, this.formatBorder('right', b))
      Object.assign(o, this.formatBorder('bottom', b))
      Object.assign(o, this.formatBorder('left', b))
      const ret = { border: o }
      // console.log('Borderfy format ret', ret)
      return needKey ? ret : o
    }
  }

  static getProperties(str) {
    var regex = /^(\d+px)\s+(\w+)\s+([\w().,%\s]+)$/
    var match = str.match(regex)
    if (match) {
      return {
        borderSize: match[1],
        borderStyle: match[2],
        borderColor: match[3],
      }
    } else {
      return null
    }
  }

  static formatBorder(direction, { size, unit, borderStyle, borderColor }) {
    const o = {
      color: borderColor || 'auto',
      space: 1,
      style: BorderStyle[borderStyle] || BorderStyle.NIL,
      size,
    }
    return { [direction]: o }
  }

  static formatBorderStyle(borderStyle) {
    borderStyle = borderStyle && borderStyle.toLocaleUpperCase()
    if (borderStyle === 'SOLID') {
      borderStyle = 'SINGLE'
    } else if (!borderStyle || borderStyle === 'NONE') {
      borderStyle = 'NIL'
    }
    return borderStyle
  }
}

export { Borderfy }
