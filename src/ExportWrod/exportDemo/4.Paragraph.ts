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
  HeadingLevel,
  Tab,
  TextRun,
  Run,
  XmlComponent,
} from 'docx'
export const testAttr = () => {
  const container_p = new Paragraph({
    shading: {
      type: ShadingType.NIL,
      color: '00FFFF',
      fill: '#F79D05',
    },
    spacing: {
      before: 700,
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
    ],
  })
  container_p
    // .addChildElement(
    //   new TextRun({
    //     text: '债基222',
    //     bold: true,
    //     size: 40,
    //     color: 'ff0000',
    //   }),
    // )
    .addChildElement(
      new TextRun({
        text: '债基222',
      }),
    )
    .addChildElement(
      new TextRun({
        text: '债基4444',
      }),
    )
    .addChildElement(
      new TextRun({
        text: '债基45555',
      }),
    )

  // console.log('container_p.fileChild', container_p.prepForXml)
  //   new Paragraph({
  //     text: "Test heading1, bold and italicized",
  //     heading: HeadingLevel.HEADING_1,
  // }),
  const run = new Run({ bold: true })
  run.addChildElement(
    new Paragraph({
      shading: {
        type: ShadingType.NIL,
        color: '00FFFF',
        fill: '#F79D05',
      },
      spacing: {
        before: 700,
        after: 500,
      },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'strikeUnderlineCharacter',
          bold: true,
          size: 40,
          color: 'ff0000',
        }),
      ],
    }),
  )
  //   container_p.addChildElement('ddddd')

  //   new Paragraph({
  //     text: "Test heading1, bold and italicized",
  //     heading: HeadingLevel.HEADING_1,
  // }),
  // new TextRun({
  //   text: 'strikeUnderlineCharacter',
  //   bold: true,
  //   size: 40,
  //   color: 'ff0000',
  // }),
  const config = {
    sections: [
      {
        properties: {},
        children: [container_p],
      },
    ],
  }
  return config
}
