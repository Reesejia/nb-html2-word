System.register(["./useApp-legacy.d06aeb34.js","./index-legacy.9e5cf6a3.js"],(function(e,o){"use strict";var t,n,a=document.createElement("style");return a.textContent=".t-inline-block[data-v-493cd0cb]{display:inline-block}\n",document.head.appendChild(a),{setters:[e=>{t=e.u},e=>{n=e._}],execute:function(){const o=Vue.defineComponent({props:{config:{type:Object,default:()=>({})}},setup(e){let o=null;return t(e),Vue.watch((()=>e.config),((t,n)=>{var a;n.loop!==t.loop&&(a=t.loop,o.loop=a),n.autoPlay!==t.autoPlay&&function(e){e?o.play():o.pause()}(t.autoPlay),o.volume=e.config.volume/100})),Vue.onMounted((()=>{o=Vue.getCurrentInstance()?.proxy.$refs.audio,o.volume=e.config.volume/100})),{audioDom:o}}}),a=["src","autoplay"];e("default",n(o,[["render",function(e,o,t,n,u,c){return Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block",style:Vue.normalizeStyle({opacity:e.config.opacity/100})},[Vue.createElementVNode("audio",{controls:"",src:e.config.src,autoplay:e.config.autoPlay,ref:"audio"},null,8,a)],4)}],["__scopeId","data-v-493cd0cb"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/audio/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.737f9e34.js.map