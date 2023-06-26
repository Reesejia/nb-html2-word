import {
  Document,
  Packer,
  Paragraph,
  Tab,
  TextRun,
  PositionalTab,
  PositionalTabAlignment,
  PositionalTabLeader,
  PositionalTabRelativeTo,
  FrameAnchorType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  ShadingType,
  ImageRun,
  AlignmentType,
  SectionType,
  BorderStyle,
  TabStopType,
  TabStopPosition,
} from 'docx'

const twoTabStops = [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }]
const arr = []

const textRun = new TextRun('Hello World!')
// @ts-ignore
// textRun.size(24) // 设置字体大小
// // @ts-ignore
// textRun.bold() // 加粗
// // @ts-ignore
// textRun.break() // 换行
// // 在 TextRun 中使用样式（类似CSS）
// // @ts-ignore
// textRun.style('margin', '10px')
// // @ts-ignore
// textRun.style('padding', '20px')
// // @ts-ignore
// textRun.style('line-height', '1.5')

for (let i = 0; i < 1; i++) {
  arr.push(
    new Paragraph({
      tabStops: twoTabStops,
      spacing: {
        before: 2400,
        after: 120,
      },
      shading: {
        type: ShadingType.CLEAR,
        color: '00FFFF',
        fill: 'FF0000',
      },

      // border: {
      //   top: {
      //     color: 'auto',
      //     space: 3000,
      //     style: BorderStyle.SINGLE,
      //     size: 6,
      //   },
      //   bottom: {
      //     color: 'auto',
      //     space: 1,
      //     style: BorderStyle.SINGLE,
      //     size: 6,
      //   },
      // },
      alignment: AlignmentType.CENTER,
      frame: {
        position: {
          x: 0,
          y: 1500,
        },
        width: 4000,
        height: 4000,
        anchor: {
          horizontal: FrameAnchorType.PAGE,
          vertical: FrameAnchorType.PAGE,
        },
        alignment: {
          x: HorizontalPositionAlign.CENTER,
          y: VerticalPositionAlign.CENTER,
        },
      },
      children: [
        // textRun,
        new TextRun({
          text: 'Foo Bar33333',
          border: {
            color: 'auto',
            space: 4000,
            style: BorderStyle.INSET,
            size: 1,
          },
          style: 'line-height:1.5',
        }),
        // new TextRun({
        //   text: 'Foo Bar',
        //   bold: true,
        //   size: 40,
        //   // children: [
        //   //   new PositionalTab({
        //   //     alignment: PositionalTabAlignment.RIGHT,
        //   //     relativeTo: PositionalTabRelativeTo.MARGIN,
        //   //     leader: PositionalTabLeader.DOT,
        //   // }),
        //   // "John Doe",
        //   // ]
        // }),
        // new TextRun({
        //   children: [new Tab(), 'Github is the best'],
        //   bold: true,
        // }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Foo Bar33333',
          border: {
            color: 'auto',
            space: 4000,
            style: BorderStyle.OUTSET,
            size: 1,
          },
        }),
      ],
    }),
    // new Paragraph({
    //   shading: {
    //     type: ShadingType.CLEAR,
    //     color: '00FFFF',
    //     fill: 'FFF200',
    //   },
    //   frame: {
    //     position: {
    //       x: 0,
    //       y: 0,
    //     },
    //     width: 4000,
    //     height: 2000,
    //     anchor: {
    //       horizontal: FrameAnchorType.MARGIN,
    //       vertical: FrameAnchorType.MARGIN,
    //     },
    //     alignment: {
    //       x: HorizontalPositionAlign.CENTER,
    //       y: VerticalPositionAlign.TOP,
    //     },
    //   },

    //   children: [
    //     new TextRun('Hello World'),
    //     new TextRun({
    //       text: 'Foo Bar',
    //       bold: true,
    //       size: 40,
    //     }),

    //     // new TextRun({
    //     //   text: 'Foo Bar',
    //     //   bold: true,
    //     //   size: 40,
    //     //   // children: [
    //     //   //   new PositionalTab({
    //     //   //     alignment: PositionalTabAlignment.RIGHT,
    //     //   //     relativeTo: PositionalTabRelativeTo.MARGIN,
    //     //   //     leader: PositionalTabLeader.DOT,
    //     //   // }),
    //     //   // "John Doe",
    //     //   // ]
    //     // }),
    //     // new TextRun({
    //     //   children: [new Tab(), 'Github is the best'],
    //     //   bold: true,
    //     // }),
    //   ],
    // }),
  )
}
const paragraph_demo1 = () => {
  return {
    sections: [
      {
        SectionType: SectionType.CONTINUOUS,
        properties: {},
        children: arr,
      },
    ],
  }
}

export { paragraph_demo1 }
