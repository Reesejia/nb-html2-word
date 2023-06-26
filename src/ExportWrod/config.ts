import { PageOrientation, NumberFormat, BorderStyle, ShadingType } from 'docx'
export const defaultSections = [
  {
    children: [],
    properties: {
      page: {
        size: {
          orientation: PageOrientation.PORTRAIT,
        },
        margin: {
          top: 800,
          right: 1500,
          bottom: 800,
          left: 1500,
          header: 300,
          footer: 200,
        },
        pageNumbers: {
          start: 1,
          formatType: NumberFormat.DECIMAL,
        },
      },
    },
  },
]

export const defaultStyle = {
  //文档的样式属性，用来自定义样式
  default: {
    //系统默认的一些元素的属性，如一级标题，二级标题
  },
  paragraphStyles: [
    //数组，表明可以定义不同的样式，使用id在引用时加以区分
    {
      id: 'paragraph_style1', //
      name: 'paragraph_style1',
      basedOn: 'Normal',
      next: 'Normal',
      quickFormat: true,
      run: {
        //段落文字属性定义
        font: {
          //只用于设置字体，color和size设置在这里是无效的,同时外面也无法设置字体
          ascii: 'Times New Roman', //设置英文字体
          eastAsia: '宋体', //设置中文，要设置eastAsia,否则中文有问题
          cs: 'minorBidi',
          hAnsi: 'minorHAnsi',
        },
        color: '#000000', //加不加#都行
        size: 20, //字号‘四号’对应磅值14
      },
      paragraph: {
        border: {
          top: {
            color: '#FFFFFF',
            space: 20,
            style: BorderStyle.SINGLE,
            size: 1,
          },
          bottom: {
            color: '#FFFFFF',
            space: 20,
            style: BorderStyle.SINGLE,
            size: 1,
          },
        },
        spacing: {
          before: 0.4 * 20 * 16,
          after: 0.4 * 20 * 14, //设置一级标题为行距为0.8倍的字体大小，以twip(缇）为单位，一磅等于20twip
        },
      },
    },
  ],
}
