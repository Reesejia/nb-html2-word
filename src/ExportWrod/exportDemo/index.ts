import { optionToFile } from '../../utils/Export'
import { paragraph_demo1 } from './2.Paragraph'
// import { paragraph_demo1 } from './2.Paragraph'
import { testAttr } from './3.Paragraph'
export const exportDemo = async () => {
  const paragraph1 = paragraph_demo1()
  // const paragraph1 = testAttr()
  console.log('xxx paragraph_demo1', paragraph1)
  await optionToFile(paragraph1)
}
