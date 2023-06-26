import { Document, Packer } from 'docx'
import { saveAs } from 'file-saver'
import Constant from '../Constant'

const exportBuffer = (option) => {
  if (!option) {
    console.log('exportBuffer option', option)
    throw new Error(`${option} is must exisit`)
  }
  const doc = new Document(option)

  //  browser runtime
  if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
    // console.log('is browser runtime')
    return Packer.toBlob(doc)
  } else if (
    // runtime
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null &&
    typeof module === 'object' &&
    typeof module.exports === 'object'
  ) {
    // console.log('is node runtime')
    return Packer.toBuffer(doc)
  }
}

const optionToFile = async (options, filename = 'one.docx') => {
  const buffer = await exportBuffer(options)
  await saveAs(buffer, filename)
  console.log(`${filename} 文件生成成功`)
}

// 23px => [23, px]; 23rem => [23, rem]
export const transSizeUnit = (str) => {
  let size = parseFloat(str)
  const unit = str.replace(size, '')
  if (unit === 'rem') {
    size = size * Constant.FontRemScale
  } else if (unit === 'px') {
    size = size * Constant.FontPxScale
  }
  return [size, unit]
}

export { exportBuffer, optionToFile }
