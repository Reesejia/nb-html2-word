System.register(["./commonConfig-legacy.c5b0b5bf.js","./useApp-legacy.d06aeb34.js","./useStyle-legacy.3c20cb1b.js","./util-legacy.a8cddc4f.js","./index-legacy.9e5cf6a3.js"],(function(e,t){"use strict";var o,n,i,r,s,l,c,a,u=document.createElement("style");return u.textContent=".t-inline-block[data-v-669028c4]{display:inline-block}\n",document.head.appendChild(u),{setters:[e=>{o=e.l},e=>{n=e.u},e=>{i=e.u,r=e.a},e=>{s=e.s,l=e.d,c=e.e},e=>{a=e._}],execute:function(){const t=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(e){const t=e;n(t);const a=Vue.ref(null),u=Vue.shallowRef(),d=()=>{const{dataList:e,colors:o}=t.config.dataSourceModel,{showLabel:n,centerX:i,centerY:r,itemBorderWidth:s,itemBorderColor:l,itemBorderRadius:a,innerRadius:u,outerRadius:d}=t.config,p={type:"pie",...c({centerX:i,centerY:r,innerRadius:u,outerRadius:d}),data:e?.map(((e,t)=>{const[n,i]=e,r={name:n,value:i},s=o[t];return s&&(r.itemStyle={color:s}),r})),label:{show:n},labelLine:{show:n},itemStyle:{borderRadius:a||0,borderColor:l,borderWidth:s||0}};return{series:[p]}};Vue.onMounted((()=>{const{config:e}=t,n={legend:[o(e)],tooltip:[{show:e.tooltip,trigger:"item"}],series:[]};u.value=i(n,a).value,Vue.watch((()=>t.config),((e,t={})=>{const o=u.value?.getOption(),n=s(e,t);l(n,o,e),n("tooltip")&&(o.tooltip[0].show=e.tooltip),((e,t)=>{const o=t();e.series=o.series})(o,d),u.value.setOption(o)}),{immediate:!0})}));const p=r(t,u);return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refCpie",ref:a,style:Vue.normalizeStyle(Vue.unref(p))},null,4))}});e("default",a(t,[["__scopeId","data-v-669028c4"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/cpie/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.acebee29.js.map