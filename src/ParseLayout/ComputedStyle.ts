import { getStyle } from "../utils/dom";

class ComputedStyle {
  static format(ele, domObj) {
    const computedStyle = this.onComputedStyle(ele);
    domObj.computedStyle = computedStyle;
    // console.log('xxx ele.childStyle', domObj.childStyle)
    if (domObj.childStyle) {
      domObj.mergedStyle = Object.assign({}, domObj.childStyle, computedStyle);
    }
  }

  static onComputedStyle(ele) {
    const o = {};
    for (const attr of this.attrs) {
      const value = getComputedStyle(ele, null).getPropertyValue(attr);
      //   const value = getStyle(ele, attr)
      if (
        this.attrDefaultValue[attr] &&
        !this.attrDefaultValue[attr].includes(value) &&
        value.indexOf("none") < 0
      ) {
        o[attr] = value;
      }
    }
    // console.log('ComputedStyle o', ele, o)
    return o;
  }

  static attrDefaultValue = {
    width: ["auto"],
    height: ["auto"],
    border: ["0px none rgb(255, 0, 0)", "none"], // 需要处理 todo
    color: ["rgb(255, 255, 255)"],
    indent: ["", undefined],
    margin: ["0px"],
    padding: ["0px"],
    position: ["static"],
    top: ["auto"],
    left: ["auto"],
    transform: ["none"],
    "background-color": ["rgb(255, 255, 255)"],
    "line-height": ["normal"],
    "word-wrap": ["normal"],
    "z-index": ["auto", 0],
    "text-align": ["start"],
    "border-radius": ["0px"],
    "font-family": ['"PingFang SC"'],
    "font-weight": ["400"],
    "font-size": ["14px"],
  };
  static attrs = Object.keys(this.attrDefaultValue);
}

export default ComputedStyle;
