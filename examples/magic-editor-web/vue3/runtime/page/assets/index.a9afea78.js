import{C as i}from"./Component.7fb42065.js";import{u as r}from"./useApp.8bd6dbd4.js";import{_ as c}from"./index.d2badf28.js";const s=Vue.defineComponent({components:{"magic-ui-component":i},props:{config:{type:Object,default:()=>({})}},setup(e){const o=r(e);return{style:Vue.computed(()=>o==null?void 0:o.transformStyle(e.config.style||{})),refresh(){window.location.reload()}}}}),a=["id"];function u(e,o,l,m,p,d){const t=Vue.resolveComponent("magic-ui-component");return Vue.openBlock(),Vue.createElementBlock("div",{id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-page magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,n=>(Vue.openBlock(),Vue.createBlock(t,{key:n.id,config:n},null,8,["config"]))),128))],14,a)}const _=c(s,[["render",u],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/page/src/index.vue"]]);export{_ as default};
//# sourceMappingURL=index.a9afea78.js.map