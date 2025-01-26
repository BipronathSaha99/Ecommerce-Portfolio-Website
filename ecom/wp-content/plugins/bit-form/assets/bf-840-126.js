var Y=Object.defineProperty,G=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var E=(t,l,o)=>l in t?Y(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,f=(t,l)=>{for(var o in l||(l={}))Z.call(l,o)&&E(t,o,l[o]);if(T)for(var o of T(l))q.call(l,o)&&E(t,o,l[o]);return t},b=(t,l)=>G(t,X(l));import{r as J,h as K,a9 as Q,u as I,a as ee,j as e,_ as x,k as se,I as w,a6 as n,C as F,dX as _,g as A,G as N,dY as ae,dZ as re,a8 as te,at as le,$ as oe,a$ as ne}from"./main-601.js";import{A as D,S as z,B as ie,a as ce}from"./bf-554-311.js";import{C as M}from"./bf-44-310.js";import"./bf-833-79.js";import"./bf-443-82.js";import"./bf-409-72.js";import"./bf-184-110.js";import"./bf-635-81.js";import"./bf-548-69.js";import"./bf-737-109.js";import"./bf-583-108.js";import"./bf-542-112.js";import"./bf-159-149.js";function ke(){var P,B,O,H,L,R;const t=J.useRef(null),[l,o]=K(te),{standaloneSettings:r={},conversationalSettings:k={}}=l,C=Q(le),$=I(oe),v=I(ne),{css:a}=ee(),u=(s,d)=>{if(!w)return!0;const h=`standaloneSettings->${s}`;o(i=>A(i,c=>{N(c,h,d)})),C(i=>b(f({},i),{unsaved:!0}))},g=(s,d)=>{if(!w)return!0;const h=`standaloneSettings->${s}`;o(i=>A(i,c=>{ae(d)?Object.keys(d).forEach(j=>{N(c,`${h}->${j}`,d[j])}):N(c,h,d),c.standaloneSettings.styles=re(c.standaloneSettings.styles)})),C(i=>b(f({},i),{unsaved:!0}))},p={};r.active?(p.opacity=1,p.pointerEvents="auto",p.userSelect="auto"):(p.opacity=.6,p.pointerEvents="none",p.userSelect="none");const U=`${$.siteURL}/${r.customUrl||`?bit-form=${v}`}`,S=`${$.siteURL}/${r.customUrl||`?bit-conversational-form=${v}`}`,V=`<iframe id="bit-form" width="100%" height="500px" style="min-height: 500px; width: 100%" frameborder="0" src="${U}&embedded=1"></iframe>`,W=`<iframe id="bit-form" width="100%" height="500px" style="min-height: 500px; width: 100%" frameborder="0" src="${S}&embedded=1"></iframe>`,y=(s,d=[])=>d.reduce((h,i)=>{var c,j;return b(f({},h),{[i]:((j=(c=r.styles)==null?void 0:c[s])==null?void 0:j[i])||""})},{});return e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("h2",{className:"m-0",children:x("Landing Page")}),e.jsx(se,{name:"status",action:s=>u("active",s.target.checked),checked:r.active||!1,className:"ml-2 flx"})]}),e.jsxs("h5",{className:"mt-3",children:[x("How to setup Landinge Page"),":",e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"yt-txt ml-1 mr-1",children:x("YouTube")}),e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",className:"doc-txt",children:x("Documentation")})]}),!w&&e.jsx("div",{className:"pro-blur flx",style:{height:"111%",left:-53,width:"104%"},children:e.jsxs("div",{className:"pro",children:[x("Available On"),e.jsx("a",{href:"https://www.bitapps.pro/bit-form",target:"_blank",rel:"noreferrer",children:e.jsx("span",{className:"txt-pro",children:x("Premium")})})]})}),e.jsx("div",{className:"w-10",children:e.jsx("div",{style:p,className:"mt-4",children:e.jsxs("div",{className:a(n.w10,n.flxi,{gp:20}),children:[e.jsxs("div",{className:a(n.w4),children:[e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Custom URL"}),e.jsx("input",{"aria-label":"Custom URL",type:"text",placeholder:`?bit-form=${v}`,name:"message",className:"btcd-paper-inp",onChange:s=>u("customUrl",s.target.value),value:r.customUrl||""}),e.jsxs("p",{className:a(n.mt1),children:[e.jsx("strong",{children:"Note: "}),"Please try to avoid any duplicate custom url, as it will conflict between the page and Bit Form."]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Page Title"}),e.jsx("input",{"aria-label":"Page Title",type:"text",placeholder:"Bit Form",name:"message",className:"btcd-paper-inp",onChange:s=>u("pageTitle",s.target.value),value:r.pageTitle||""})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Share via Direct URL"}),e.jsx(F,{value:U,className:"field-key-cpy w-12 ml-0",readOnly:!0})]}),k.enable&&e.jsxs("div",{children:[e.jsx("h4",{className:a({my:10}),children:"Share via Direct URL (Conversational Form)"}),e.jsx(F,{value:S,className:"field-key-cpy w-12 ml-0",readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a(n.mb2),children:"Embed via HTML Code"}),e.jsx("textarea",{ref:t,rows:4,readOnly:!0,className:a(n.w10,m.embed),onClick:()=>_({ref:t}),value:V})]}),k.enable&&e.jsxs("div",{children:[e.jsx("h4",{className:a(n.mb2),children:"Embed via HTML Code (Conversational Form)"}),e.jsx("textarea",{ref:t,rows:4,readOnly:!0,className:a(n.w10,m.embed),onClick:()=>_({ref:t}),value:W})]})]}),e.jsxs("div",{className:a(n.w3,n.pl4),children:[e.jsx("h4",{className:a({my:10}),children:"Styling"}),e.jsx(D,{title:"Body",open:!0,children:e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{className:a(n.m0),children:"Background"}),e.jsx(M,{value:y(".standalone-form-container",["background-color","background-image","background-position","background-repeat"]),onChangeHandler:s=>g("styles->.standalone-form-container",s),colorProp:"background-color"})]})}),e.jsxs(D,{title:"Wrapper",open:!0,children:[e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Width"}),e.jsx(z,{value:((B=(P=r==null?void 0:r.styles)==null?void 0:P[".standalone-form-wrapper"])==null?void 0:B.width)||"40%",onChangeHandler:s=>u("styles->.standalone-form-wrapper->width",s),width:130})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Height"}),e.jsx(z,{value:((H=(O=r==null?void 0:r.styles)==null?void 0:O[".standalone-form-wrapper"])==null?void 0:H.height)||"100%",onChangeHandler:s=>u("styles->.standalone-form-wrapper->height",s),width:130})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Background"}),e.jsx(M,{value:y(".standalone-form-wrapper",["background-color","background-image","background-position","background-repeat"]),onChangeHandler:s=>g("styles->.standalone-form-wrapper",s),colorProp:"background-color"})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Border"}),e.jsx(ie,{value:y(".standalone-form-wrapper",["border-color","border-width","border-style","border-radius"]),onChangeHandler:s=>g("styles->.standalone-form-wrapper",s)})]}),e.jsxs("div",{className:a(m.prop),children:[e.jsx("p",{children:"Padding"}),e.jsx(ce,{value:(R=(L=r==null?void 0:r.styles)==null?void 0:L[".standalone-form-wrapper"])==null?void 0:R.padding,onChangeHandler:s=>g("styles->.standalone-form-wrapper->padding",s)})]})]})]})]})})})]})}const m={embed:{curp:1,bc:"var(--white-0-95) !important",brs:8,b:"1px solid var(--white-0-89)",h:"70px !important"},prop:{flx:"between",px:20}};export{ke as default};
