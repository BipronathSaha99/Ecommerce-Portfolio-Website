import{v as w,w as S,h as C,u as b,r as k,dS as A,a as E,j as e,dr as B,N as M,b as x,_ as i,ax as P,aY as _,$ as H,q as r,g as j}from"./main-601.js";import{B as I}from"./bf-409-72.js";import{S as R,T as q}from"./bf-548-69.js";function O(){var h;const{formType:d,formID:n,id:s}=w(),$=S(),[l,m]=C(P),c=b(_),[o]=k.useState(()=>c.filter(a=>!A.includes(a.typ))),{css:p}=E(),g=b(H),{isPro:u}=g,v=a=>{const t=r(l);t[s].title=a.target.value,m(t)},y=a=>{const t=r(l);t[s].sub=a.target.value,m(t)},T=a=>{m(t=>j(t,F=>{F[s].body=a}))},f=a=>{const t=r(l);t[s].sub+=a.target.value,m(t)},N=()=>{const a=j(l,t=>{t.push({updateTem:1})});m(a),$(`/form/settings/${d}/${n}/email-templates`)};return l.length<1?e.jsx(B,{to:`/form/settings/edit/${n}/email-templates`,replace:!0}):e.jsxs("div",{style:{width:900},children:[e.jsxs(M,{to:`/form/settings/${d}/${n}/email-templates`,className:`${p(x.btn)} btcd-btn-o-gray`,children:[e.jsx(I,{className:"mr-1"}),i("Back")]}),e.jsx("button",{id:"secondary-update-btn",onClick:N,className:`${p(x.btn)} blue f-right`,type:"button",children:i("Update Template")}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{style:{width:102},children:i("Template Name:")}),e.jsx("input",{onChange:v,type:"text",className:"btcd-paper-inp w-9",placeholder:"Name",value:l[s].title})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{style:{width:100},children:i("Subject:")}),e.jsx("input",{onChange:y,type:"text",className:"btcd-paper-inp w-7",placeholder:i("Email Subject Here"),value:l[s].sub}),e.jsxs("select",{onChange:f,className:"btcd-paper-inp ml-2",style:{width:150},children:[e.jsx("option",{value:"",children:i("Add field")}),e.jsx("optgroup",{label:"Form Fields",children:o!==null&&o.map(a=>!a.type.match(/^(file-up|recaptcha)$/)&&e.jsx("option",{value:`\${${a.key}}`,children:a.name},a.key))}),e.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((h=R)==null?void 0:h.map(a=>e.jsx("option",{value:`\${${a.name}}`,children:a.label},`ff-rm-${a.name}`)))})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("div",{children:e.jsx("b",{children:i("Body:")})}),e.jsx("label",{htmlFor:`t-m-e-${s}-${n}`,className:"mt-2 w-10",children:e.jsx(q,{id:`mail-tem-${n}`,formFields:c,value:l[s].body,onChangeHandler:T,width:"100%",mapAllFieldWithTable:!0,mapAllField:!0})})]})]})}export{O as default};
