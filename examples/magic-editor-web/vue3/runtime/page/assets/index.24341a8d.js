import{u as a,b as i}from"./useGetStyle.de696904.js";import{u as l}from"./useApp.8bd6dbd4.js";import{_ as u}from"./index.d2badf28.js";var o=(t=>(t.rectangle="rectangle",t.circle="circle",t.triangle="triangle",t.line="line",t.customize="customize",t))(o||{});const d={class:"magic-ui-shape t-inline-block"},p=Vue.defineComponent({__name:"index",props:{config:{type:Object,required:!0},model:{type:Object,required:!1}},setup(t){const c=t;l(c);const r=Vue.computed(()=>{const{shape:n}=c.config;console.log(n,"clipPath");const e={width:"100%",height:"100%"};switch(n){case o.rectangle:e.borderRadius="0";break;case o.circle:e.borderRadius="50%";break;case o.triangle:e.clipPath="polygon(50% 0px, 100% 100%, 0px 100%, 50% 0px)";break;case o.line:e.height="1px",e.position="absolute",e.top="50%",e.transform="translateY(-50%)";break;case o.customize:e.clipPath=c.config.polygon;break}return console.log(e.clipPath,"bodyStyle.clipPath"),e}),s=Vue.computed(()=>{const{boxShadowStyle:n}=a(c.config),{backgroundStyle:e}=i(c.config);return{...r.value,...e,...n}});return(n,e)=>(Vue.openBlock(),Vue.createElementBlock("div",d,[Vue.createElementVNode("div",{class:"shape-body",style:Vue.normalizeStyle(Vue.unref(s))},null,4)]))}});const m=u(p,[["__scopeId","data-v-85bc0520"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/shape/src/index.vue"]]);export{m as default};
//# sourceMappingURL=index.24341a8d.js.map