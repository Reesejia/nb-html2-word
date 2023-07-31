(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetValues = factory());
})(this, (function () { 'use strict';

  const page = {
    items: [],
    style: {
      width: "100%",
      height: "100%"
    }
  };

  const container = {
    items: [],
    isImageArea: false,
    style: {
      width: "100%",
      height: "100"
    }
  };

  const BackGround = {
    formConfig: [
      {
        type: "row",
        text: "\u80CC\u666F",
        span: 24,
        items: [
          {
            type: "radio-group",
            name: "backgroundRadioGroup",
            options: [
              {
                value: 1,
                text: "\u9009\u62E9"
              },
              {
                value: 3,
                text: "\u6E10\u53D8\u8272"
              }
            ],
            defaultValue: 1
          },
          {
            type: "row",
            span: 24,
            items: [
              {
                name: "backgroundColor",
                type: "colorPicker",
                display: (_, { model }) => model.backgroundRadioGroup === 1
              },
              {
                type: "row",
                display: (_, { model }) => model.backgroundRadioGroup === 3,
                items: [
                  {
                    name: "color1",
                    text: "\u524D\u666F\u8272",
                    type: "colorPicker",
                    labelWidth: "60px",
                    span: 6
                  },
                  {
                    name: "color2",
                    text: "\u540E\u666F\u8272",
                    type: "colorPicker",
                    labelWidth: "60px",
                    span: 6
                  },
                  {
                    name: "deg",
                    span: 10,
                    type: "number",
                    text: "\u6E10\u53D8\u89D2\u5EA6",
                    labelWidth: "80px"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    initValue: {
      backgroundRadioGroup: 1,
      backgroundColor: "blue",
      background: "#fff",
      backgroundImage: "",
      color1: "",
      color2: "",
      deg: 0
    }
  };
  const LinearBackGround = {
    formConfig: [
      {
        type: "row",
        items: [
          {
            name: "color1",
            text: "\u524D\u666F\u8272",
            type: "colorPicker",
            labelWidth: "80px",
            span: 4
          },
          {
            name: "color2",
            text: "\u540E\u666F\u8272",
            type: "colorPicker",
            labelWidth: "80px",
            span: 4
          },
          {
            name: "deg",
            span: 10,
            type: "number",
            text: "\u6E10\u53D8\u89D2\u5EA6",
            labelWidth: "100px"
          }
        ]
      }
    ],
    initValue: {
      color1: "",
      color2: "",
      deg: 0
    }
  };
  const BoxShadow = {
    formConfig: [
      {
        type: "row",
        text: "\u5916\u9634\u5F71",
        span: 12,
        items: [
          {
            placeholder: "x\u504F\u79FB\u91CF",
            type: "number",
            name: "boxShadowX"
          },
          {
            placeholder: "y\u504F\u79FB\u91CF",
            type: "number",
            name: "boxShadowY"
          },
          {
            placeholder: "\u9634\u5F71\u6A21\u7CCA\u534A\u5F84",
            type: "number",
            min: 0,
            name: "boxShadowBlurR"
          },
          {
            placeholder: "\u9634\u5F71\u6269\u6563\u534A\u5F84",
            type: "number",
            min: 0,
            name: "boxShadowSpreadR"
          },
          {
            placeholder: "\u9634\u5F71\u989C\u8272",
            type: "colorPicker",
            name: "boxShadowColor"
          }
        ]
      }
    ],
    initValue: {
      boxShadowRadioGroup: 1,
      boxShadowX: 0,
      boxShadowY: 0,
      boxShadowBlurR: 0,
      boxShadowSpreadR: 0,
      boxShadowColor: ""
    }
  };
  const legendInitValue = (initValue) => ({
    legendShow: true,
    legendItemWidth: 20,
    legendItemHeight: 10,
    legendOrient: initValue?.legendOrient || "vertical",
    legendLeft: initValue?.legendLeft || "left",
    legendTop: initValue?.legendTop || "top",
    legendFontSize: 12
  });
  const centerRadiusValue = (outerRadius) => ({
    centerX: "50%",
    centerY: "50%",
    innerRadius: 0,
    outerRadius: outerRadius || "50%"
  });
  const seriesLabelValue = () => ({
    showSeriesLabel: false,
    seriesLabelFontSize: 12,
    seriesLabelColor: "#0f0f0f"
  });

  const button = {
    text: "\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9",
    multiple: true,
    style: {
      height: "36",
      border: 0
    },
    ...LinearBackGround.initValue,
    ...BoxShadow.initValue
  };

  const text = {
    type: "text",
    text: "\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9",
    multiple: true,
    underline: false,
    italic: false,
    bold: false,
    deg: 0,
    color1: "",
    color2: "",
    textDeg: 0,
    textColor1: "",
    textColor2: "",
    lineClamp: 2,
    style: {
      width: "100",
      height: "auto"
    },
    boxShadowX: 0,
    boxShadowY: 0,
    boxShadowBlurR: 0,
    boxShadowSpreadR: 0,
    boxShadowColor: "",
    textShadow: ""
  };

  const img = {
    src: "/magic-editor-web/images/img_default.png",
    hueRotate: 0,
    blur: 0,
    opacity: 100,
    style: {
      position: "absolute",
      left: "57",
      width: "176",
      height: "176"
    }
  };

  const qrcode = {
    url: "https://m.film.qq.com",
    iconUrl: "",
    iconWidth: 40,
    iconHeight: 40,
    style: {
      position: "absolute",
      left: "57"
    }
  };

  const overlay = {
    style: {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    items: []
  };

  const richtext = {
    html: {
      text: '<span style="color:#333;font-size:12px">\u8BF7\u8F93\u5165\u5BCC\u6587\u672C</span>',
      indicator: null
    }
  };

  var ShapeType = /* @__PURE__ */ ((ShapeType2) => {
    ShapeType2["rectangle"] = "rectangle";
    ShapeType2["circle"] = "circle";
    ShapeType2["triangle"] = "triangle";
    ShapeType2["line"] = "line";
    ShapeType2["customize"] = "customize";
    return ShapeType2;
  })(ShapeType || {});

  const shape = {
    shape: ShapeType.rectangle,
    borderType: "",
    borderColor: "",
    polygon: "",
    style: {
      position: "absolute",
      width: "176",
      height: "176"
    },
    ...BoxShadow.initValue,
    ...BackGround.formConfig
  };

  const cline = {
    xAxisFontSizeColor: "#0f0f0f",
    yAxisFontSizeColor: "#0f0f0f",
    style: {
      position: "absolute",
      width: "100%",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "X\u8F74"
        },
        {
          label: "\u56FE\u88681",
          color: "#f00",
          gradient: ["#f00", "rgba(0,0,0,0)"]
        },
        {
          label: "\u56FE\u88682",
          color: "#00f",
          gradient: ["#00f", "rgba(0,0,0,0)"]
        }
      ],
      dataList: [
        ["A", 30, 40],
        ["B", 40, 50],
        ["C", 10, 40]
      ]
    },
    gridTop: 40,
    gridRight: 15,
    gridBottom: 5,
    gridLeft: 5,
    xAxisFontSize: 12,
    yAxisFontSize: 12,
    yAxisTextSuffix: "",
    yAxisShowZero: true,
    smooth: false,
    tooltip: true,
    splitLineType: "solid",
    splitLineColor: "#ccc",
    hasAreaStyle: false,
    ...legendInitValue({
      legendOrient: "horizontal",
      legendLeft: "center"
    }),
    xAxisAxisLabelRotate: 0,
    xAxisAxisLineColor: "#ccc",
    yAxisNameColor: "#0f0f0f",
    xAxisName: "",
    xAxisNameColor: "#0f0f0f",
    yAxisName: "",
    showXAxisAxisTick: true,
    showSplitLine: true,
    showYAxisText: true,
    markSymbol: "emptyCircle",
    xAxisHeadTailTextFormat: false,
    ...seriesLabelValue(),
    symbolSize: 0
  };

  const clinebar = {
    dataSourceModel: {
      colList: [
        {
          label: "X\u8F74"
        },
        {
          label: "\u56FE\u88681",
          type: "line",
          color: "#f00",
          gradient: ["#f00", "rgba(0,0,0,0)"],
          smooth: false,
          suffix: ""
        },
        {
          label: "\u56FE\u88682",
          type: "bar",
          round: false,
          roundSize: 0,
          color: "#00f",
          gradient: ["#00f", "rgba(0,0,0,0)"],
          suffix: ""
        },
        {
          label: "\u56FE\u88683",
          type: "bar",
          round: false,
          roundSize: 0,
          color: "#0f0",
          gradient: ["#0f0", "rgba(0,0,0,0)"],
          suffix: ""
        }
      ],
      dataList: [
        ["A", 30, 40, 10],
        ["B", 40, 50, 30],
        ["C", 10, 40, 15]
      ]
    },
    xAxisFontSizeColor: "#0f0f0f",
    yAxisFontSizeColor: "#0f0f0f",
    style: {
      position: "absolute",
      width: "100%",
      height: "300"
    },
    gridTop: 40,
    gridRight: 5,
    gridBottom: 5,
    gridLeft: 5,
    xAxisFontSize: 12,
    yAxisFontSize: 12,
    yAxisTextSuffix: "",
    yAxisShowZero: true,
    tooltip: true,
    splitLineType: "solid",
    splitLineColor: "#ccc",
    ...legendInitValue({
      legendOrient: "horizontal",
      legendLeft: "center"
    }),
    xAxisName: "",
    xAxisNameColor: "#0f0f0f",
    showXAxisAxisTick: true,
    showSplitLine: true,
    showYAxisText: true,
    xAxisAxisLabelRotate: 0,
    xAxisAxisLineColor: "#ccc",
    yAxisNameColor: "#0f0f0f",
    yAxisLeftSuffix: "",
    yAxisRightSuffix: "",
    yAxisLeftName: "",
    yAxisRightName: "",
    hasAreaStyle: false,
    smooth: false,
    borderRadiusLT: null,
    borderRadiusRT: null,
    borderRadiusRB: null,
    borderRadiusLB: null,
    orient: "vertical",
    lineChartLowestLevel: false,
    markSymbol: "emptyCircle",
    ...seriesLabelValue()
  };

  const carea = {
    axisLabelTextColor: "#0f0f0f",
    style: {
      position: "absolute",
      width: "100%",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "X\u8F74"
        },
        {
          label: "\u88681",
          color: "#f00",
          gradient: ["#f00", "rgba(0,0,0,0)"]
        },
        {
          label: "\u88682",
          color: "#00f",
          gradient: ["#00f", "rgba(0,0,0,0)"]
        }
      ],
      dataList: [
        ["A", 30, 40],
        ["B", 40, 50],
        ["C", 10, 40]
      ]
    },
    gridTop: 40,
    gridRight: 15,
    gridBottom: 5,
    gridLeft: 5,
    xAxisFontSize: 12,
    yAxisFontSize: 12,
    yAxisTextSuffix: "",
    yAxisShowZero: true,
    smooth: false,
    tooltip: true,
    splitLineType: "solid",
    splitLineColor: "#ccc",
    hasAreaStyle: true,
    legendShow: true,
    legendItemWidth: 20,
    legendItemHeight: 10,
    xAxisAxisLineColor: "#ccc"
  };

  const cbar = {
    xAxisFontSizeColor: "#0f0f0f",
    yAxisFontSizeColor: "#0f0f0f",
    style: {
      position: "absolute",
      width: "100%",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "X\u8F74"
        },
        {
          label: "\u56FE\u88681",
          color: "#f00",
          round: false,
          roundSize: 0,
          gradient: ["#f00", "rgba(0,0,0,0)"]
        },
        {
          label: "\u56FE\u88682",
          color: "#00f",
          round: false,
          roundSize: 0,
          gradient: ["#00f", "rgba(0,0,0,0)"]
        }
      ],
      dataList: [
        ["A", 30, 40],
        ["B", 40, 50],
        ["C", 10, 40]
      ]
    },
    gridTop: 40,
    gridRight: 15,
    gridBottom: 5,
    gridLeft: 5,
    xAxisFontSize: 12,
    yAxisFontSize: 12,
    yAxisTextSuffix: "",
    yAxisShowZero: true,
    tooltip: true,
    splitLineType: "solid",
    splitLineColor: "#ccc",
    ...legendInitValue({
      legendOrient: "horizontal",
      legendLeft: "center"
    }),
    xAxisAxisLabelRotate: 0,
    xAxisAxisLineColor: "#ccc",
    yAxisNameColor: "#0f0f0f",
    xAxisName: "",
    xAxisNameColor: "#0f0f0f",
    yAxisName: "",
    showXAxisAxisTick: true,
    showSplitLine: true,
    showYAxisText: true,
    borderRadiusLT: null,
    borderRadiusRT: null,
    borderRadiusRB: null,
    borderRadiusLB: null,
    orient: "vertical",
    ...seriesLabelValue()
  };

  const cpie = {
    style: {
      position: "absolute",
      width: "300",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "\u6247\u5757"
        },
        {
          label: "\u56FE\u88681"
        }
      ],
      dataList: [
        ["A", 30],
        ["B", 40],
        ["C", 10],
        ["D", 10]
      ],
      colors: ["rgba(84, 112, 198, 1)", "rgba(145, 204, 117, 1)", "rgba(250, 200, 88, 1)", "rgba(238, 102, 102, 1)"]
    },
    tooltip: true,
    ...legendInitValue(),
    showLabel: false,
    itemBorderWidth: 0,
    itemBorderColor: "#fff",
    itemBorderRadius: 0,
    ...centerRadiusValue()
  };

  const cradar = {
    style: {
      position: "absolute",
      width: "300",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "\u6307\u793A\u5668"
        },
        {
          label: "\u56FE\u88681",
          color: "#f00",
          gradient: ["#f00", "#f00"]
        },
        {
          label: "\u56FE\u88682",
          color: "#00f",
          gradient: ["#00f", "#00f"]
        }
      ],
      dataList: [
        ["A", 30, 90],
        ["B", 40, 30],
        ["C", 10, 70],
        ["D", 70, 10],
        ["E", 10, 40]
      ]
    },
    tooltip: true,
    ...legendInitValue(),
    ...centerRadiusValue("70%"),
    shape: "circle",
    axisNameColor: "#333",
    axisLineColor: "rgba(255,255,255,0.5)",
    splitLineColor: "rgba(255,255,255,0.5)",
    splitAreaColor: "rgba(255,255,255,0.1)",
    markSymbol: "none"
  };

  const ckline = {
    axisLabelTextColor: "#0f0f0f",
    style: {
      position: "absolute",
      width: "300",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "X\u8F74"
        },
        {
          label: "\u56FE\u88681",
          type: "candlestick"
        },
        {
          label: "\u56FE\u88682",
          type: "line",
          color: "#f00",
          hasSymbol: false
        }
      ],
      dataList: [
        ["2013/1/24", "2320.26,2020.26,1287.3,2362.94", 1023],
        ["2013/1/25", "2300,2291.3,2288.26,2308.38", 1123],
        ["2013/1/28", "2295.35,2346.5,2295.35,2346.92", 1063],
        ["2013/1/29", "2347.22,2358.98,2337.35,2363.8", 1323],
        ["2013/1/30", "2360.75,2382.48,2347.89,2383.76", 1023],
        ["2013/1/31", "2383.43,2385.42,2371.23,2391.82", 2023],
        ["2013/2/1", "2377.41,2419.02,2369.57,2421.15", 1423],
        ["2013/2/4", "2425.92,2428.15,2417.58,2440.38", 1723],
        ["2013/2/5", "2411,2433.13,2403.3,2437.42", 1013],
        ["2013/2/6", "2432.68,2434.48,427.7,2441.73", 2023],
        ["2013/2/7", "2430.69,2418.53,2394.22,2433.89", 3023],
        ["2013/2/8", "2416.62,2432.4,2414.4,2443.03", 123],
        ["2013/2/18", "2441.91,2421.56,415.43,2444.8", 1236],
        ["2013/2/19", "2420.26,2382.91,2373.53,2427.07", 1923],
        ["2013/2/20", "2383.49,2397.18,370.61,2397.94", 1023],
        ["2013/2/21", "2378.82,2325.95,2309.17,2378.82", 2023],
        ["2013/2/22", "2322.94,2314.16,2308.76,2330.88", 1323],
        ["2013/2/25", "2320.62,2325.82,2315.01,2338.78", 1523],
        ["2013/2/26", "2313.74,2293.34,2289.89,2340.71", 623],
        ["2013/2/27", "2297.77,2313.22,2292.03,2324.63", 1023]
      ]
    },
    ...legendInitValue({
      legendOrient: "horizontal",
      legendLeft: "center"
    }),
    gridTop: 40,
    gridRight: 15,
    gridBottom: 5,
    gridLeft: 5,
    xAxisFontSize: 12,
    yAxisFontSize: 12,
    yAxisTextSuffix: "",
    yAxisShowZero: true,
    tooltip: true,
    splitLineType: "solid",
    splitLineColor: "#ccc",
    xAxisAxisLineColor: "#ccc",
    xAxisHeadTailTextFormat: false
  };

  const cplot = {
    style: {
      position: "absolute",
      width: "300",
      height: "300"
    },
    dataSourceModel: {
      colList: [
        {
          label: "\u5757"
        },
        {
          label: "\u56FE\u88681"
        }
      ],
      dataList: [
        ["A", 60],
        ["B", 40],
        ["C", 20],
        ["D", 80],
        ["E", 100]
      ],
      colors: Array(5).fill("")
    },
    tooltip: true,
    ...legendInitValue({
      legendOrient: "horizontal",
      legendLeft: "center"
    }),
    sort: "ascending",
    gap: 2,
    gridTop: 30,
    gridRight: 0,
    gridBottom: 0,
    gridLeft: 0
  };

  const cgauge = {
    style: {
      position: "absolute",
      width: "300",
      height: "300"
    },
    axisLineLineStyleWidth: 10,
    axisLineLineStyleColor: "#E6EBF8",
    progressItemStyleColor: "#5470c6",
    data: 70,
    detailFontSize: 30,
    detailColor: "#000",
    axisLabelColor: "#919090",
    axisLabelFontSize: 15,
    splitLineLength: 6,
    splitLineLineStyleColor: "#919090",
    pointerLength: 60,
    axisTickShow: true
  };

  const table = {
    type: "table",
    style: {
      width: "300"
    },
    dataSourceModel: {
      tagList: [
        { label: "\u6807\u7B7E", prop: "label", color: "#333", type: "text" },
        { label: "\u8FDB\u5EA6\u6761", prop: "value", color: "#333", type: "text", height: "", showRadius: false }
      ],
      list: [
        { label: "A,b,c", value: 80 },
        { label: "B", value: 30 }
      ]
    },
    border: false,
    borderColor: "#ebeef5",
    stripe: false,
    stripeColor: "#fafafa",
    headerBgColor: "",
    headerFontColor: "",
    index: false,
    headerShowBorder: true,
    maxHeight: 120,
    fixedCol: ""
  };

  const audio = {
    type: "audio",
    style: {
      width: "300",
      height: "auto"
    },
    src: "",
    volume: 10,
    autoPlay: false,
    opacity: 100,
    loop: false
  };

  const svg = {
    svgHtmlStr: `<svg t="1683686902729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" width="200" height="200"><path d="M299.707317 821.622634m18.731707 0l387.121952 0q18.731707 0 18.731707 18.731707l0 0q0 18.731707-18.731707 18.731708l-387.121952 0q-18.731707 0-18.731707-18.731708l0 0q0-18.731707 18.731707-18.731707Z" fill="#2179FF" p-id="2378"></path><path d="M493.268293 684.25678m18.731707 0l0 0q18.731707 0 18.731707 18.731708l0 137.365853q0 18.731707-18.731707 18.731708l0 0q-18.731707 0-18.731707-18.731708l0-137.365853q0-18.731707 18.731707-18.731708Z" fill="#2179FF" p-id="2379"></path><path d="M736.780488 460.744585a18.731707 18.731707 0 0 1 18.731707 18.731708c0 134.493659-109.018537 243.512195-243.512195 243.512195s-243.512195-109.018537-243.512195-243.512195a18.731707 18.731707 0 1 1 37.463415 0 206.04878 206.04878 0 1 0 412.09756 0 18.731707 18.731707 0 0 1 18.731708-18.731708z" fill="#2179FF" p-id="2380"></path><path d="M512 159.768976a124.878049 124.878049 0 0 1 124.878049 124.878048v199.804878a124.878049 124.878049 0 0 1-249.756098 0v-199.804878a124.878049 124.878049 0 0 1 124.878049-124.878048z m0 37.463414a87.414634 87.414634 0 0 0-87.414634 87.414634v199.804878a87.414634 87.414634 0 0 0 174.829268 0v-199.804878A87.414634 87.414634 0 0 0 512 197.23239z" fill="#2179FF" p-id="2381"></path></svg>`,
    fill: "#1677FF",
    size: 60,
    src: "",
    style: {
      position: "absolute",
      width: 60,
      height: 60
    }
  };

  const video = {
    type: "video",
    style: {
      width: "300",
      height: "auto"
    },
    src: "",
    playControl: true,
    mute: false,
    loop: false,
    poster: "",
    customCode: ""
  };

  const values = {
    "page": page,
    "container": container,
    "button": button,
    "text": text,
    "img": img,
    "qrcode": qrcode,
    "overlay": overlay,
    "richtext": richtext,
    "shape": shape,
    "cline": cline,
    "clinebar": clinebar,
    "carea": carea,
    "cbar": cbar,
    "cpie": cpie,
    "cradar": cradar,
    "ckline": ckline,
    "cplot": cplot,
    "cgauge": cgauge,
    "table": table,
    "audio": audio,
    "svg": svg,
    "video": video
  };

  return values;

}));
//# sourceMappingURL=index.umd.cjs.map
