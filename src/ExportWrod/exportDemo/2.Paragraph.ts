import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  ShadingType,
  FrameAnchorType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  Tab,
  TextRun,
} from 'docx'
const paragraph_demo1 = () => {
  return {
    styles: {
      characterStyles: [
        {
          id: 'myRedStyle',
          name: 'My Wonky Style',
          basedOn: 'Normal',
          run: {
            color: '990000',
            italics: true,
          },
        },
        {
          id: 'strong',
          name: 'Strong',
          basedOn: 'Normal',
          run: {
            bold: true,
          },
        },
      ],
    },
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            frame: {
              position: {
                x: 1000,
                y: 3000,
              },
              width: 8000,
              height: 3000,
              anchor: {
                horizontal: FrameAnchorType.MARGIN,
                vertical: FrameAnchorType.MARGIN,
              },
              alignment: {
                x: HorizontalPositionAlign.CENTER,
                y: VerticalPositionAlign.CENTER,
              },
            },
            widowControl: true,
            shading: {
              type: ShadingType.NIL,
              color: '00FFFF',
              fill: '#F79D05',
            },
            border: {
              top: {
                color: '#FFFFFF',
                space: 2000,
                style: BorderStyle.INSET,
                size: 6,
              },
              right: {
                color: '#FFC0CB',
                space: 100,
                style: BorderStyle.SINGLE,
                size: 6,
              },
              bottom: {
                color: '#8B008B',
                space: 1,
                style: BorderStyle.SINGLE,
                size: 26,
              },
              left: {
                color: '#0000FF',
                space: 1,
                style: BorderStyle.SINGLE,
                size: 6,
              },
            },
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '纯债加点料',
                bold: true,
                size: 30,
                color: '#ffffff',
                position: '50cm',
              }),
            ],
          }),
          new Paragraph({
            shading: {
              type: ShadingType.NIL,
              color: '00FFFF',
              fill: '#F79D05',
            },
            spacing: {
              before: 1200,
              after: 500,
            },
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '债基',
                bold: true,
                size: 40,
                color: 'ff0000',
              }),
              new TextRun({
                text: '投资新思路',
                bold: true,
                size: 40,
                color: '#ff0000',
              }),
              new TextRun({
                children: [new Tab(), '投资新思路22'],
                bold: true,
              }),
              new TextRun({
                text: '333',
                bold: true,
                size: 40,
              }),
            ],
          }),
        ],
      },
    ],
  }
}

// floating: {
//   horizontalPosition: {
//       offset: 2014400,
//   },
//   verticalPosition: {
//       offset: 2014400,
//   },
//   wrap: {
//       type: TextWrappingType.SQUARE,
//       side: TextWrappingSide.BOTH_SIDES,
//   },
//   margins: {
//       top: 201440,
//       bottom: 201440,
//   },
// },

export { paragraph_demo1 }
