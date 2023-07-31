(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetConfigs = factory());
})(this, (function () { 'use strict';

  const page = [
    {
      name: "layout",
      text: "\u5BB9\u5668\u5E03\u5C40",
      type: "select",
      options: [
        { value: "absolute", text: "\u7EDD\u5BF9\u5B9A\u4F4D" },
        { value: "relative", text: "\u6D41\u5F0F\u5E03\u5C40" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    }
  ];

  const container = [
    {
      name: "layout",
      text: "\u5BB9\u5668\u5E03\u5C40",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "\u7EDD\u5BF9\u5B9A\u4F4D" },
        { value: "relative", text: "\u6D41\u5F0F\u5E03\u5C40" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          model.displayMode = "block";
        }
        const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
        if (el) {
          model.style.height = el.getBoundingClientRect().height;
        }
      }
    },
    {
      type: "switch",
      name: "isImageArea",
      text: "\u56FE\u7247\u533A\u57DF"
    },
    {
      name: "displayMode",
      text: "\u5E03\u5C40\u6A21\u5F0F",
      type: "radio-group",
      display: (_, { model }) => model.layout === "relative",
      defaultValue: "block",
      options: [
        {
          value: "block",
          text: "\u5757\u5E03\u5C40block"
        },
        {
          value: "flex",
          text: "\u5F39\u6027\u5E03\u5C40flex"
        }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        model.style.display = v;
      }
    },
    {
      name: "flexDirection",
      text: "\u4E3B\u8F74\u65B9\u5411",
      type: "radio-group",
      display: (_, { model }) => model.displayMode === "flex",
      defaultValue: "row",
      options: [
        {
          value: "row",
          text: "\u6C34\u5E73"
        },
        {
          value: "column",
          text: "\u5782\u76F4"
        }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        model.style["flex-direction"] = v;
      }
    },
    {
      name: "flexMainAxis",
      text: "\u4E3B\u8F74\u5BF9\u9F50",
      type: "radio-group",
      display: (_, { model }) => model.displayMode === "flex",
      options: [
        {
          value: "flex-start",
          text: "\u5DE6\u5BF9\u9F50"
        },
        {
          value: "flex-end",
          text: "\u53F3\u5BF9\u9F50"
        },
        {
          value: "center",
          text: "\u5C45\u4E2D"
        },
        {
          value: "space-between",
          text: "\u4E24\u7AEF\u5BF9\u9F50"
        },
        {
          value: "space-around",
          text: "\u6A2A\u5411\u5E73\u5206"
        }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        model.style.justifyContent = v;
      }
    },
    {
      name: "flexCrossAxis",
      text: "\u4EA4\u53C9\u8F74\u5BF9\u9F50",
      type: "radio-group",
      display: (_, { model }) => model.displayMode === "flex",
      options: [
        {
          value: "flex-start",
          text: "\u4E0A\u5BF9\u9F50"
        },
        {
          value: "flex-end",
          text: "\u4E0B\u5BF9\u9F50"
        },
        {
          value: "center",
          text: "\u5C45\u4E2D"
        },
        {
          value: "baseline",
          text: "\u57FA\u7EBF\u5BF9\u9F50"
        },
        {
          value: "stretch",
          text: "\u6491\u6EE1\u5BB9\u5668"
        }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        model.style.alignItems = v;
      }
    },
    {
      name: "flexWrap",
      text: "\u6362\u884C",
      type: "radio-group",
      display: (_, { model }) => model.displayMode === "flex",
      options: [
        {
          value: "nowrap",
          text: "\u4E0D\u6362\u884C"
        },
        {
          value: "wrap",
          text: "\u6362\u884C"
        },
        {
          value: "wrap-reverse",
          text: "\u9006\u5E8F\u6362\u884C"
        }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        model.style.flexWrap = v;
        if (v !== "nowrap") {
          model.style.alignContent = "flex-start";
        }
      }
    }
  ];

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
  const legendFormConfig = () => [
    {
      name: "legendShow",
      text: "\u662F\u5426\u663E\u793A\u56FE\u4F8B",
      type: "switch"
    },
    {
      display: (_, { model }) => model.legendShow,
      name: "dataSourceModel",
      text: " ",
      type: "lengendList"
    },
    {
      type: "row",
      text: "\u56FE\u4F8B\u6392\u5217\u65B9\u5F0F",
      display: (_, { model }) => model.legendShow,
      items: [
        {
          name: "legendOrient",
          type: "select",
          clearable: false,
          options: [
            {
              text: "\u5782\u76F4",
              value: "vertical"
            },
            {
              text: "\u6C34\u5E73",
              value: "horizontal"
            }
          ],
          span: 12
        }
      ]
    },
    {
      text: "\u56FE\u4F8B\u4F4D\u7F6E\u6C34\u5E73/\u5782\u76F4",
      display: (_, { model }) => model.legendShow,
      type: "row",
      items: [
        {
          type: "select",
          name: "legendLeft",
          span: 12,
          clearable: false,
          options: [
            {
              text: "\u9760\u5DE6",
              value: "left"
            },
            {
              text: "\u5C45\u4E2D",
              value: "center"
            },
            {
              text: "\u9760\u53F3",
              value: "right"
            }
          ]
        },
        {
          type: "select",
          name: "legendTop",
          span: 12,
          clearable: false,
          options: [
            {
              text: "\u9760\u4E0A",
              value: "top"
            },
            {
              text: "\u5C45\u4E2D",
              value: "middle"
            },
            {
              text: "\u9760\u4E0B",
              value: "bottom"
            }
          ]
        }
      ]
    },
    {
      text: "\u56FE\u4F8B\u5BBD/\u9AD8",
      type: "row",
      display: (_, { model }) => model.legendShow,
      items: [
        {
          name: "legendItemWidth",
          type: "number",
          span: 12,
          min: 0
        },
        {
          name: "legendItemHeight",
          type: "number",
          span: 12,
          min: 0
        }
      ]
    },
    {
      text: "\u56FE\u4F8B\u5B57\u4F53\u5927\u5C0F",
      type: "number",
      display: (_, { model }) => model.legendShow,
      name: "legendFontSize",
      min: 0
    }
  ];
  const centerRadiusFormConfig = () => [
    {
      text: "\u4E2D\u5FC3\u5750\u6807X/Y",
      type: "row",
      items: [
        {
          name: "centerX",
          span: 12
        },
        {
          name: "centerY",
          span: 12
        }
      ]
    },
    {
      text: "\u534A\u5F84\u5185/\u5916",
      type: "row",
      items: [
        {
          name: "innerRadius",
          span: 12
        },
        {
          name: "outerRadius",
          span: 12
        }
      ]
    }
  ];
  const markSymbolFormConfig = () => [
    {
      type: "row",
      text: "\u6807\u8BB0\u56FE\u5F62/\u5927\u5C0F",
      items: [
        {
          span: 12,
          name: "markSymbol",
          type: "select",
          clearable: false,
          options: [
            {
              text: "\u7A7A\u5FC3\u5706",
              value: "emptyCircle"
            },
            {
              text: "\u5B9E\u5FC3\u5706",
              value: "circle"
            },
            {
              text: "\u5B9E\u5FC3\u65B9\u5757",
              value: "rect"
            }
          ]
        },
        {
          type: "number",
          name: "symbolSize",
          min: 0,
          span: 12
        }
      ]
    }
  ];
  const seriesLabelFormConfig = () => [
    {
      type: "row",
      text: "\u663E\u793A\u6570\u503C",
      items: [
        {
          name: "showSeriesLabel",
          span: 6,
          type: "switch"
        },
        {
          display: (_, { model }) => model.showSeriesLabel,
          name: "seriesLabelFontSize",
          placeholder: "\u5927\u5C0F",
          type: "number",
          min: 0,
          span: 6
        },
        {
          display: (_, { model }) => model.showSeriesLabel,
          name: "seriesLabelColor",
          type: "colorPicker",
          span: 6
        }
      ]
    }
  ];

  const button = [
    {
      text: "\u6587\u672C",
      name: "text"
    },
    ...LinearBackGround.formConfig,
    ...BoxShadow.formConfig
  ];

  const text = [
    {
      type: "textDataSource",
      text: "\u6587\u672C",
      name: "text"
    },
    {
      name: "multiple",
      text: "\u591A\u884C\u6587\u672C",
      type: "switch"
    },
    {
      name: "italic",
      text: "\u659C\u4F53",
      type: "switch"
    },
    {
      name: "underline",
      text: "\u4E0B\u5212\u7EBF",
      type: "switch"
    },
    {
      name: "lineClamp",
      text: "\u591A\u884C\u7701\u7565",
      type: "number"
    },
    {
      text: "\u6587\u5B57\u6E10\u53D8\u8272",
      type: "row",
      items: [
        {
          name: "textColor1",
          text: "\u524D\u666F\u8272",
          span: 6,
          labelWidth: "40px",
          type: "colorPicker"
        },
        {
          name: "textColor2",
          span: 6,
          labelWidth: "40px",
          text: "\u540E\u666F\u8272",
          type: "colorPicker"
        },
        {
          name: "textDeg",
          span: 12,
          labelWidth: "80px",
          type: "number",
          text: "\u6E10\u53D8\u89D2\u5EA6"
        }
      ]
    },
    {
      text: "\u80CC\u666F\u6E10\u53D8\u8272",
      type: "row",
      items: [
        {
          name: "color1",
          text: "\u524D\u666F\u8272",
          labelWidth: "40px",
          span: 6,
          type: "colorPicker"
        },
        {
          name: "color2",
          text: "\u540E\u666F\u8272",
          span: 6,
          labelWidth: "40px",
          type: "colorPicker"
        },
        {
          name: "deg",
          span: 12,
          labelWidth: "80px",
          type: "number",
          text: "\u6E10\u53D8\u89D2\u5EA6"
        }
      ]
    },
    {
      name: "textShadow",
      text: "\u6587\u5B57\u9634\u5F71",
      span: 10,
      type: "select",
      defaultValue: "",
      options: [
        { text: "\u65E0", value: "" },
        { text: "\u5185\u9634\u5F711", value: "innerShadow1" },
        { text: "\u5185\u9634\u5F712", value: "innerShadow2" },
        { text: "\u5185\u9634\u5F713", value: "innerShadow3" },
        { text: "\u73AF\u7ED5\u9634\u5F711", value: "dropShadow1" },
        { text: "\u73AF\u7ED5\u9634\u5F712", value: "dropShadow2" },
        { text: "\u73AF\u7ED5\u9634\u5F713", value: "dropShadow3" },
        { text: "\u5916\u9634\u5F711", value: "outShadow1" },
        { text: "\u5916\u9634\u5F712", value: "outShadow2" },
        { text: "\u5916\u9634\u5F713", value: "outShadow3" },
        { text: "3D\u9634\u5F71", value: "3d" }
      ]
    },
    {
      type: "row",
      text: "\u8FB9\u6846\u9634\u5F71",
      items: [
        {
          placeholder: "x\u504F\u79FB\u91CF",
          type: "number",
          name: "boxShadowX",
          span: 5
        },
        {
          placeholder: "y\u504F\u79FB\u91CF",
          type: "number",
          name: "boxShadowY",
          span: 5
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
          name: "boxShadowSpreadR",
          span: 5
        },
        {
          placeholder: "\u9634\u5F71\u989C\u8272",
          type: "colorPicker",
          name: "boxShadowColor",
          span: 4
        }
      ]
    }
  ];

  const img = [
    {
      text: "\u56FE\u7247",
      type: "imgUpload",
      name: "src"
    },
    {
      type: "row",
      items: [
        {
          name: "hueRotate",
          text: "\u8272\u8C03\u503C",
          type: "number",
          span: 12
        },
        {
          name: "blur",
          text: "\u6A21\u7CCA",
          type: "number",
          span: 12
        }
      ]
    },
    {
      name: "opacity",
      text: "\u900F\u660E\u5EA6",
      type: "slider"
    }
  ];

  const qrcode = [
    {
      text: "\u4E8C\u7EF4\u7801\u94FE\u63A5",
      name: "url"
    },
    {
      text: "\u56FE\u6807",
      name: "iconUrl",
      type: "imgUpload"
    },
    {
      text: "\u56FE\u6807\u5BBD\u5EA6",
      name: "iconWidth",
      type: "number"
    },
    {
      text: "\u56FE\u6807\u9AD8\u5EA6",
      name: "iconHeight",
      type: "number"
    }
  ];

  const overlay = [];

  const richtext = [
    {
      text: "\u5BCC\u6587\u672C",
      name: "html",
      type: "editor",
      onChange: (formState, v, { model }) => {
        console.log("rich text editor:", formState, v, model);
        return v;
      }
    }
  ];

  var ShapeType = /* @__PURE__ */ ((ShapeType2) => {
    ShapeType2["rectangle"] = "rectangle";
    ShapeType2["circle"] = "circle";
    ShapeType2["triangle"] = "triangle";
    ShapeType2["line"] = "line";
    ShapeType2["customize"] = "customize";
    return ShapeType2;
  })(ShapeType || {});

  const shape = [
    {
      name: "shape",
      text: "\u5F62\u72B6",
      type: "select",
      defaultValue: ShapeType.rectangle,
      options: [
        { value: ShapeType.rectangle, text: "\u65B9\u5F62" },
        { value: ShapeType.circle, text: "\u5706\u5F62" },
        { value: ShapeType.triangle, text: "\u4E09\u89D2\u5F62" },
        { value: ShapeType.line, text: "\u7EBF\u5F62" },
        { value: ShapeType.customize, text: "\u81EA\u5B9A\u4E49" }
      ]
    },
    {
      text: "\u81EA\u5B9A\u4E49\u56FE\u5F62",
      name: "polygon",
      display: (_, { model }) => model.shape === "customize"
    },
    ...BoxShadow.formConfig,
    ...BackGround.formConfig
  ];

  const cline = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u6570\u636E",
      collapsible: true,
      items: [
        {
          name: "dataSourceModel",
          type: "chartData"
        }
      ]
    },
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      collapsible: true,
      items: [
        {
          name: "hasAreaStyle",
          text: "\u662F\u5426\u9762\u79EF\u56FE",
          type: "switch"
        },
        {
          display: (_, { model }) => model.hasAreaStyle,
          name: "areaStyleOpacity",
          text: "\u9762\u79EF\u56FE\u662F\u5426\u7EBF\u6027\u81F3\u900F\u660E",
          type: "switch"
        },
        {
          type: "colorPicker",
          text: "\u5750\u6807\u989C\u8272",
          name: "xAxisAxisLineColor"
        },
        ...legendFormConfig(),
        ...markSymbolFormConfig(),
        {
          name: "smooth",
          text: "\u662F\u5426\u5E73\u6ED1",
          type: "switch"
        },
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        ...seriesLabelFormConfig(),
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "X\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u540D\u79F0",
          items: [
            {
              name: "xAxisName",
              span: 12
            },
            {
              display: (_, { model }) => model.xAxisName,
              name: "xAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u5927\u5C0F",
          items: [
            {
              type: "number",
              name: "xAxisFontSize",
              min: 0,
              span: 12
            },
            {
              name: "xAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u65CB\u8F6C\u89D2\u5EA6",
          items: [
            {
              type: "number",
              name: "xAxisAxisLabelRotate",
              min: -90,
              max: 90,
              span: 12
            }
          ]
        },
        {
          text: "\u663E\u793AX\u8F74\u523B\u5EA6\u7EBF",
          type: "switch",
          name: "showXAxisAxisTick"
        },
        {
          type: "switch",
          text: "X\u8F74\u603B\u662F\u663E\u793A\u9996\u5C3E",
          name: "xAxisHeadTailTextFormat"
        },
        {
          text: "Y\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          text: "\u663E\u793A\u7F51\u683C\u7EBF",
          type: "switch",
          name: "showSplitLine"
        },
        {
          text: "\u7F51\u683C\u7EBF\u7EBF\u6761",
          type: "row",
          display: (_, { model }) => model.showSplitLine,
          items: [
            {
              type: "select",
              name: "splitLineType",
              span: 12,
              clearable: false,
              options: [
                {
                  text: "\u5B9E\u7EBF",
                  value: "solid"
                },
                {
                  text: "\u865A\u7EBF",
                  value: "dashed"
                }
              ]
            },
            {
              name: "splitLineColor",
              type: "colorPicker"
            }
          ]
        },
        {
          text: "\u663E\u793AY\u8F74\u6570\u503C",
          type: "switch",
          name: "showYAxisText"
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u540D\u79F0",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisName",
              span: 12
            },
            {
              display: (_, { model }) => model.showYAxisText && model.yAxisName,
              name: "yAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "Y\u8F74\u5B57\u4F53\u5927\u5C0F",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisFontSize",
              type: "number",
              min: 0,
              span: 12
            },
            {
              name: "yAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "Y\u8F74\u6587\u672C\u540E\u7F00",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisTextSuffix",
              span: 12
            }
          ]
        },
        {
          name: "yAxisShowZero",
          text: "\u663E\u793AY\u8F740\u523B\u5EA6",
          type: "switch",
          display: (_, { model }) => model.showYAxisText
        }
      ]
    }
  ];

  const clinebar = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u6570\u636E",
      collapsible: true,
      items: [
        {
          name: "dataSourceModel",
          type: "chartData"
        }
      ]
    },
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      collapsible: true,
      items: [
        {
          type: "colorPicker",
          text: "\u5750\u6807\u989C\u8272",
          name: "xAxisAxisLineColor"
        },
        ...legendFormConfig(),
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        ...seriesLabelFormConfig(),
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "\u67F1\u72B6\u56FE\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          text: "\u67F1\u5F62\u5706\u89D2",
          type: "row",
          items: [
            {
              name: "borderRadiusLT",
              placeholder: "\u5DE6\u4E0A",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusRT",
              placeholder: "\u53F3\u4E0A",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusRB",
              placeholder: "\u53F3\u4E0B",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusLB",
              placeholder: "\u5DE6\u4E0B",
              type: "number",
              min: 0,
              span: 6
            }
          ]
        },
        {
          text: "\u6298\u7EBF\u56FE\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          text: "\u662F\u5426\u9762\u79EF\u56FE",
          type: "switch",
          name: "hasAreaStyle"
        },
        {
          display: (_, { model }) => model.hasAreaStyle,
          name: "areaStyleOpacity",
          text: "\u9762\u79EF\u56FE\u662F\u5426\u7EBF\u6027\u81F3\u900F\u660E",
          type: "switch"
        },
        {
          text: "\u9762\u79EF\u56FE\u5E95\u5C42\u663E\u793A",
          type: "switch",
          name: "lineChartLowestLevel"
        },
        {
          text: "\u662F\u5426\u5E73\u6ED1",
          type: "switch",
          name: "smooth"
        },
        {
          text: "X\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u540D\u79F0",
          items: [
            {
              name: "xAxisName",
              span: 12
            },
            {
              display: (_, { model }) => model.xAxisName,
              name: "xAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u5927\u5C0F",
          items: [
            {
              type: "number",
              name: "xAxisFontSize",
              min: 0,
              span: 12
            },
            {
              name: "xAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u65CB\u8F6C\u89D2\u5EA6",
          items: [
            {
              type: "number",
              name: "xAxisAxisLabelRotate",
              min: -90,
              max: 90,
              span: 12
            }
          ]
        },
        {
          text: "\u663E\u793AX\u8F74\u523B\u5EA6\u7EBF",
          type: "switch",
          name: "showXAxisAxisTick"
        },
        ...markSymbolFormConfig(),
        {
          text: "Y\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          text: "\u663E\u793A\u7F51\u683C\u7EBF",
          type: "switch",
          name: "showSplitLine"
        },
        {
          text: "\u7F51\u683C\u7EBF\u7EBF\u6761",
          type: "row",
          items: [
            {
              type: "select",
              name: "splitLineType",
              span: 12,
              options: [
                {
                  text: "\u5B9E\u7EBF",
                  value: "solid"
                },
                {
                  text: "\u865A\u7EBF",
                  value: "dashed"
                }
              ]
            },
            {
              name: "splitLineColor",
              type: "colorPicker"
            }
          ]
        },
        {
          text: "\u663E\u793AY\u8F74\u6570\u503C",
          type: "switch",
          name: "showYAxisText"
        },
        {
          text: "\u5DE6/\u53F3Y\u8F74\u540D\u79F0",
          type: "row",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisLeftName",
              span: 12
            },
            {
              name: "yAxisRightName",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u989C\u8272",
          display: (_, { model }) => model.showYAxisText && model.showYAxisText,
          items: [
            {
              name: "yAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "Y\u8F74\u5B57\u4F53\u5927\u5C0F",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisFontSize",
              type: "number",
              min: 0,
              span: 12
            },
            {
              name: "yAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          text: "\u5DE6/\u53F3Y\u8F74\u6587\u672C\u540E\u7F00",
          type: "row",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisLeftSuffix",
              span: 12
            },
            {
              name: "yAxisRightSuffix",
              span: 12
            }
          ]
        },
        {
          name: "yAxisShowZero",
          text: "\u663E\u793AY\u8F740\u523B\u5EA6",
          type: "switch",
          display: (_, { model }) => model.showYAxisText
        }
      ]
    }
  ];

  const carea = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      items: [
        {
          name: "hasAreaStyle",
          text: "\u662F\u5426\u9762\u79EF\u56FE",
          type: "switch"
        },
        {
          name: "legendShow",
          text: "\u662F\u5426\u663E\u793A\u56FE\u4F8B",
          type: "switch"
        },
        {
          text: "\u56FE\u4F8B\u5BBD/\u9AD8",
          type: "row",
          items: [
            {
              name: "legendItemWidth",
              type: "number",
              span: 12
            },
            {
              name: "legendItemHeight",
              type: "number",
              span: 12
            }
          ]
        },
        {
          name: "smooth",
          text: "\u662F\u5426\u5E73\u6ED1",
          type: "switch"
        },
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        {
          name: "axisLabelTextColor",
          text: "\u5750\u6807\u5B57\u4F53\u989C\u8272",
          type: "colorPicker"
        },
        {
          type: "number",
          text: "X\u8F74\u5B57\u4F53\u5927\u5C0F",
          name: "xAxisFontSize"
        },
        {
          type: "colorPicker",
          text: "X\u8F74\u5750\u6807\u7EBF\u989C\u8272",
          name: "xAxisAxisLineColor"
        },
        {
          name: "yAxisFontSize",
          text: "Y\u8F74\u5B57\u4F53\u5927\u5C0F",
          type: "number"
        },
        {
          name: "yAxisTextSuffix",
          text: "Y\u8F74\u6587\u672C\u540E\u7F00"
        },
        {
          name: "yAxisShowZero",
          text: "\u663E\u793AY\u8F740\u523B\u5EA6",
          type: "switch"
        },
        {
          text: "\u5206\u5272\u7EBF\u7C7B\u578B/\u989C\u8272",
          type: "row",
          items: [
            {
              type: "select",
              name: "splitLineType",
              span: 12,
              options: [
                {
                  text: "\u5B9E\u7EBF",
                  value: "solid"
                },
                {
                  text: "\u865A\u7EBF",
                  value: "dashed"
                }
              ]
            },
            {
              name: "splitLineColor",
              type: "colorPicker"
            }
          ]
        },
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "\u6570\u636E\u6E90",
          type: "dataSource",
          name: "dataSourceModel"
        }
      ]
    }
  ];

  const cbar = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u6570\u636E",
      collapsible: true,
      items: [
        {
          name: "dataSourceModel",
          type: "chartData"
        }
      ]
    },
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      collapsible: true,
      items: [
        {
          type: "colorPicker",
          text: "\u5750\u6807\u989C\u8272",
          name: "xAxisAxisLineColor"
        },
        ...legendFormConfig(),
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        {
          text: "\u67F1\u5F62\u5706\u89D2",
          type: "row",
          items: [
            {
              name: "borderRadiusLT",
              placeholder: "\u5DE6\u4E0A",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusRT",
              placeholder: "\u53F3\u4E0A",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusRB",
              placeholder: "\u53F3\u4E0B",
              type: "number",
              min: 0,
              span: 6
            },
            {
              name: "borderRadiusLB",
              placeholder: "\u5DE6\u4E0B",
              type: "number",
              min: 0,
              span: 6
            }
          ]
        },
        {
          type: "row",
          text: "\u67F1\u72B6\u56FE\u65B9\u5411",
          items: [
            {
              type: "radio-group",
              name: "orient",
              options: [
                {
                  value: "horizontal",
                  text: "\u6A2A\u5411",
                  span: 6
                },
                {
                  value: "vertical",
                  text: "\u7EB5\u5411",
                  span: 6
                }
              ]
            }
          ]
        },
        ...seriesLabelFormConfig(),
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "X\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u540D\u79F0",
          items: [
            {
              name: "xAxisName",
              span: 12
            },
            {
              display: (_, { model }) => model.xAxisName,
              name: "xAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u5927\u5C0F",
          items: [
            {
              type: "number",
              name: "xAxisFontSize",
              min: 0,
              span: 12
            },
            {
              name: "xAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "X\u8F74\u5B57\u4F53\u65CB\u8F6C\u89D2\u5EA6",
          items: [
            {
              type: "number",
              name: "xAxisAxisLabelRotate",
              min: -90,
              max: 90,
              span: 12
            }
          ]
        },
        {
          text: "\u663E\u793AX\u8F74\u523B\u5EA6\u7EBF",
          type: "switch",
          name: "showXAxisAxisTick"
        },
        {
          text: "Y\u8F74\u5C5E\u6027",
          type: "row",
          items: [],
          className: "row-placeholder"
        },
        {
          text: "\u663E\u793A\u7F51\u683C\u7EBF",
          type: "switch",
          name: "showSplitLine"
        },
        {
          text: "\u7F51\u683C\u7EBF\u7EBF\u6761",
          type: "row",
          items: [
            {
              type: "select",
              name: "splitLineType",
              span: 12,
              options: [
                {
                  text: "\u5B9E\u7EBF",
                  value: "solid"
                },
                {
                  text: "\u865A\u7EBF",
                  value: "dashed"
                }
              ]
            },
            {
              name: "splitLineColor",
              type: "colorPicker"
            }
          ]
        },
        {
          text: "\u663E\u793AY\u8F74\u6570\u503C",
          type: "switch",
          name: "showYAxisText"
        },
        {
          type: "row",
          text: "\u5750\u6807\u8F74\u540D\u79F0",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisName",
              span: 12
            },
            {
              display: (_, { model }) => model.showYAxisText && model.yAxisName,
              name: "yAxisNameColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "Y\u8F74\u5B57\u4F53\u5927\u5C0F",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisFontSize",
              type: "number",
              min: 0,
              span: 12
            },
            {
              name: "yAxisFontSizeColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "Y\u8F74\u6587\u672C\u540E\u7F00",
          display: (_, { model }) => model.showYAxisText,
          items: [
            {
              name: "yAxisTextSuffix",
              span: 12
            }
          ]
        },
        {
          name: "yAxisShowZero",
          text: "\u663E\u793AY\u8F740\u523B\u5EA6",
          type: "switch",
          display: (_, { model }) => model.showYAxisText
        }
      ]
    }
  ];

  const cpie = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u6570\u636E",
      collapsible: true,
      items: [
        {
          name: "dataSourceModel",
          type: "chartData"
        }
      ]
    },
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      collapsible: true,
      items: [
        ...legendFormConfig(),
        ...centerRadiusFormConfig(),
        {
          type: "row",
          text: "\u6247\u5757\u8FB9\u6846\u5BBD\u5EA6/\u989C\u8272",
          items: [
            {
              name: "itemBorderWidth",
              type: "number",
              min: 0,
              span: 12
            },
            {
              name: "itemBorderColor",
              type: "colorPicker",
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "\u6247\u5757\u5706\u89D2",
          items: [
            {
              name: "itemBorderRadius",
              type: "number",
              min: 0,
              span: 12
            }
          ]
        },
        {
          name: "showLabel",
          text: "\u663E\u793A\u6807\u7B7E",
          type: "switch"
        },
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        }
      ]
    }
  ];

  const cradar = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      items: [
        {
          name: "shape",
          type: "select",
          text: "\u7ED8\u5236\u7C7B\u578B",
          options: [
            {
              text: "\u5706\u5F62",
              value: "circle"
            },
            {
              text: "\u591A\u8FB9\u5F62",
              value: "polygon"
            }
          ]
        },
        ...legendFormConfig(),
        ...centerRadiusFormConfig(),
        ...markSymbolFormConfig(),
        {
          text: "\u6807\u7B7E\u989C\u8272",
          name: "axisNameColor",
          type: "colorPicker"
        },
        {
          text: "\u73AF\u72B6\u5206\u5272\u7EBF\u989C\u8272",
          name: "splitLineColor",
          type: "colorPicker"
        },
        {
          text: "\u73AF\u72B6\u5757\u80CC\u666F\u8272",
          name: "splitAreaColor",
          type: "colorPicker"
        },
        {
          text: "\u53CD\u5C04\u7EBF\u989C\u8272",
          name: "axisLineColor",
          type: "colorPicker"
        },
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "\u6570\u636E\u6E90",
          type: "dataSource",
          name: "dataSourceModel"
        }
      ]
    }
  ];

  const ckline = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      items: [
        ...legendFormConfig(),
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        {
          name: "axisLabelTextColor",
          text: "\u5750\u6807\u5B57\u4F53\u989C\u8272",
          type: "colorPicker"
        },
        {
          type: "number",
          text: "X\u8F74\u5B57\u4F53\u5927\u5C0F",
          name: "xAxisFontSize",
          min: 0
        },
        {
          type: "colorPicker",
          text: "X\u8F74\u5750\u6807\u7EBF\u989C\u8272",
          name: "xAxisAxisLineColor"
        },
        {
          type: "switch",
          text: "X\u8F74\u603B\u662F\u663E\u793A\u9996\u5C3E",
          name: "xAxisHeadTailTextFormat"
        },
        {
          name: "yAxisFontSize",
          text: "Y\u8F74\u5B57\u4F53\u5927\u5C0F",
          type: "number",
          min: 0
        },
        {
          name: "yAxisTextSuffix",
          text: "Y\u8F74\u6587\u672C\u540E\u7F00"
        },
        {
          name: "yAxisShowZero",
          text: "\u663E\u793AY\u8F740\u523B\u5EA6",
          type: "switch"
        },
        {
          text: "\u5206\u5272\u7EBF\u7C7B\u578B/\u989C\u8272",
          type: "row",
          items: [
            {
              type: "select",
              name: "splitLineType",
              span: 12,
              options: [
                {
                  text: "\u5B9E\u7EBF",
                  value: "solid"
                },
                {
                  text: "\u865A\u7EBF",
                  value: "dashed"
                }
              ]
            },
            {
              name: "splitLineColor",
              type: "colorPicker"
            }
          ]
        },
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "\u6570\u636E\u6E90",
          type: "dataSource",
          name: "dataSourceModel"
        }
      ]
    }
  ];

  const cplot = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      items: [
        ...legendFormConfig(),
        {
          text: "\u7F51\u683C\u8FB9\u8DDD",
          type: "row",
          items: [
            {
              name: "gridTop",
              placeholder: "\u4E0A",
              span: 6
            },
            {
              name: "gridRight",
              placeholder: "\u53F3",
              span: 6
            },
            {
              name: "gridBottom",
              placeholder: "\u4E0B",
              span: 6
            },
            {
              name: "gridLeft",
              placeholder: "\u5DE6",
              span: 6
            }
          ]
        },
        {
          name: "sort",
          text: "\u663E\u793A\u987A\u5E8F",
          type: "radio-group",
          options: [
            {
              value: "ascending",
              text: "\u6B63\u5E8F"
            },
            {
              value: "descending",
              text: "\u5012\u5E8F"
            }
          ]
        },
        {
          name: "gap",
          text: "\u95F4\u9694",
          type: "number",
          min: 0
        },
        {
          name: "tooltip",
          text: "\u663E\u793A\u63D0\u793A\u6846",
          type: "switch"
        },
        {
          text: "\u6570\u636E\u6E90",
          type: "dataSource",
          name: "dataSourceModel"
        }
      ]
    }
  ];

  const cgauge = [
    {
      type: "fieldset",
      legend: "\u56FE\u8868\u5C5E\u6027",
      items: [
        {
          name: "axisLineLineStyleWidth",
          text: "\u8F74\u7EBF\u5BBD\u5EA6",
          type: "number",
          min: 2
        },
        {
          name: "axisLineLineStyleColor",
          text: "\u8F74\u7EBF\u989C\u8272",
          type: "colorPicker"
        },
        {
          name: "axisTickShow",
          text: "\u663E\u793A\u66F4\u5C0F\u523B\u5EA6",
          type: "switch"
        },
        {
          name: "splitLineLength",
          text: "\u523B\u5EA6\u7EBF\u957F\u77ED",
          type: "number",
          min: 0
        },
        {
          name: "splitLineLineStyleColor",
          text: "\u523B\u5EA6\u7EBF\u989C\u8272",
          type: "colorPicker"
        },
        {
          name: "axisLabelColor",
          text: "\u523B\u5EA6\u5B57\u989C\u8272",
          type: "colorPicker"
        },
        {
          name: "axisLabelFontSize",
          text: "\u523B\u5EA6\u5B57\u5927\u5C0F",
          type: "number",
          min: 8
        },
        {
          name: "progressItemStyleColor",
          text: "\u8FDB\u5EA6\u6761\u989C\u8272",
          type: "colorPicker"
        },
        {
          name: "pointerLength",
          text: "\u6307\u9488\u957F\u5EA6",
          type: "number",
          min: 0,
          max: 100
        },
        {
          name: "data",
          text: "\u503C",
          type: "number",
          min: 0
        },
        {
          name: "detailFontSize",
          text: "\u503C\u5B57\u5927\u5C0F",
          type: "number",
          min: 8
        },
        {
          name: "detailColor",
          text: "\u503C\u5B57\u989C\u8272",
          type: "colorPicker"
        }
      ]
    }
  ];

  const table = [
    {
      type: "fieldset",
      legend: "\u8868\u683C\u5C5E\u6027",
      collapsible: true,
      padding: "15px 10px 0 10px",
      items: [
        {
          type: "tableData",
          text: "",
          name: "dataSourceModel"
        }
      ]
    },
    {
      type: "fieldset",
      legend: "\u8868\u683C\u5C5E\u6027",
      collapsible: true,
      items: [
        {
          type: "row",
          text: "\u6700\u5927\u6EDA\u52A8\u9AD8\u5EA6",
          items: [
            {
              name: "maxHeight",
              type: "number",
              min: 120,
              span: 12
            }
          ]
        },
        {
          type: "row",
          text: "\u56FA\u5B9A\u5217",
          items: [
            {
              type: "radio-group",
              name: "fixedCol",
              options: [
                {
                  value: "",
                  text: "\u65E0",
                  span: 6
                },
                {
                  value: "first",
                  text: "\u7B2C\u4E00\u5217",
                  span: 6
                },
                {
                  value: "last",
                  text: "\u6700\u540E\u4E00\u5217",
                  span: 6
                }
              ]
            }
          ]
        },
        {
          type: "row",
          text: "\u8FB9\u6846",
          items: [
            {
              type: "switch",
              name: "border",
              span: 4
            },
            {
              type: "colorPicker",
              name: "borderColor",
              span: 4,
              display: (_, { model }) => model.border
            }
          ]
        },
        {
          type: "switch",
          text: "\u8868\u5934\u662F\u5426\u663E\u793A\u8FB9\u6846",
          display: (_, { model }) => model.border,
          name: "headerShowBorder",
          defaultValue: true
        },
        {
          type: "row",
          text: "\u6591\u9A6C\u7EBF",
          items: [
            {
              type: "switch",
              name: "stripe",
              span: 4
            },
            {
              type: "colorPicker",
              name: "stripeColor",
              span: 4,
              display: (_, { model }) => model.stripe
            }
          ]
        },
        {
          type: "switch",
          text: "\u5E8F\u53F7",
          name: "index",
          defaultValue: false
        },
        {
          type: "colorPicker",
          text: "\u8868\u5934\u80CC\u666F\u8272",
          name: "headerBgColor",
          defaultValue: "none"
        },
        {
          type: "colorPicker",
          text: "\u8868\u5934\u5B57\u4F53\u8272",
          name: "headerFontColor",
          defaultValue: ""
        },
        {
          type: "row",
          text: "\u5706\u89D2",
          items: [
            {
              name: "borderRadiusLeftTop",
              placeholder: "\u5DE6\u4E0A",
              span: 6,
              labelWidth: "0px",
              type: "number",
              min: 0
            },
            {
              name: "borderRadiusRightTop",
              placeholder: "\u53F3\u4E0A",
              span: 6,
              labelWidth: "0px",
              type: "number",
              min: 0
            },
            {
              name: "borderRadiusLeftBottom",
              placeholder: "\u5DE6\u4E0B",
              span: 6,
              labelWidth: "0px",
              type: "number",
              min: 0
            },
            {
              name: "borderRadiusRightBottom",
              placeholder: "\u53F3\u4E0B",
              span: 6,
              labelWidth: "0px",
              type: "number",
              min: 0
            }
          ]
        }
      ]
    }
  ];

  const audio = [
    {
      type: "row",
      items: [
        {
          type: "textarea",
          text: "\u94FE\u63A5",
          name: "src",
          defaultValue: ""
        }
      ]
    },
    {
      type: "row",
      items: [
        {
          type: "number",
          text: "\u97F3\u91CF",
          name: "volume",
          min: 10,
          max: 100
        }
      ]
    },
    {
      type: "row",
      items: [
        {
          type: "switch",
          text: "\u81EA\u52A8\u64AD\u653E",
          name: "autoPlay",
          defaultValue: false
        }
      ]
    },
    {
      type: "switch",
      text: "\u5FAA\u73AF\u64AD\u653E",
      name: "loop",
      defaultValue: false
    },
    {
      text: "\u900F\u660E\u5EA6",
      type: "number",
      name: "opacity",
      defaultValue: 100,
      min: 0,
      max: 100
    }
  ];

  const svg = [
    {
      name: "fill",
      text: "\u56FE\u6807\u989C\u8272",
      type: "colorPicker",
      defaultValue: "#fff"
    },
    {
      name: "src",
      text: "\u4E0A\u4F20\u56FE\u6807",
      type: "svgUpload"
    },
    {
      name: "svgHtmlStr",
      text: "\u4ECE\u56FE\u6807\u5E93\u9009\u53D6",
      type: "svgSelect"
    }
  ];

  const video = [
    {
      type: "row",
      items: [
        {
          type: "switch",
          text: "\u662F\u5426\u663E\u793A\u64AD\u653E\u63A7\u4EF6",
          labelWidth: "120px",
          name: "playControl",
          defaultValue: true
        }
      ]
    },
    {
      type: "row",
      items: [
        {
          type: "switch",
          text: "\u662F\u5426\u9759\u97F3",
          name: "mute",
          defaultValue: false
        }
      ]
    },
    {
      type: "row",
      items: [
        {
          type: "switch",
          text: "\u5FAA\u73AF\u64AD\u653E",
          name: "loop",
          defaultValue: false
        }
      ]
    },
    {
      type: "row",
      items: [
        {
          type: "videoPoster",
          text: "\u89C6\u9891\u5C01\u9762",
          name: "poster"
        }
      ]
    },
    {
      type: "textarea",
      text: "\u89C6\u9891\u94FE\u63A5",
      name: "src",
      defaultValue: ""
    },
    {
      text: "\u81EA\u5B9A\u4E49\u4EE3\u7801",
      type: "textarea",
      name: "code",
      defaultValue: ""
    }
  ];

  const configs = {
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

  return configs;

}));
//# sourceMappingURL=index.umd.cjs.map
