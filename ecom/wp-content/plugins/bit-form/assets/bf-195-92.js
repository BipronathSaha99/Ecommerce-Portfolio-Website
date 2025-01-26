var st=Object.defineProperty,at=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var F=(t,r,a)=>r in t?st(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,G=(t,r)=>{for(var a in r||(r={}))it.call(r,a)&&F(t,a,r[a]);if(R)for(var a of R(r))lt.call(r,a)&&F(t,a,r[a]);return t},V=(t,r)=>at(t,ot(r));import{a as U,v as Y,h as nt,u as Z,r as P,bX as ct,dp as g,j as s,a6 as w,L as dt,g as N,G as B,bt as y,bI as $,bJ as j,bR as D,aE as pt,bw as ut,dq as K,a9 as bt,m as ht,ds as mt,aN as ft,bA as gt}from"./main-601.js";import{s as L}from"./bf-587-141.js";import{S as wt,G as J}from"./bf-184-110.js";import{T as xt,a as v,B as yt,b as $t,c as Q,S as jt,d as vt}from"./bf-848-146.js";import{C as Pt}from"./bf-275-111.js";import{O as Ct}from"./bf-163-150.js";import{R as X}from"./bf-807-84.js";import"./bf-833-79.js";import"./bf-409-72.js";import"./bf-635-81.js";import"./bf-443-82.js";import"./bf-583-108.js";import"./bf-159-149.js";import"./bf-285-80.js";import"./bf-548-69.js";import"./bf-579-107.js";import"./bf-737-109.js";import"./bf-542-112.js";import"./bf-333-113.js";import"./bf-218-114.js";import"./bf-432-115.js";import"./bf-743-71.js";function kt({element:t,componentTitle:r,isMultistep:a}){var O;const{css:n}=U(),{fieldKey:b,formID:C,formType:A}=Y(),[h,k]=nt(pt),M=Z(ut),[W,tt]=P.useState(!0),[S,T]=P.useState(""),H=St(C,t,S),i=(O=h.form)==null?void 0:O[H],m=Object.keys(i||{}),_=[{label:"Default",icn:"Default",show:["icn"],tip:"Default Style"}],{states:f}=g[t]||{};f==null||f.map(e=>{const o=e?ct(e):"Default";_.push({label:o,icn:o,show:["icn"],tip:`${o} Style`})});const et=e=>{T(e==="Default"?"":e)};P.useEffect(()=>{tt(!1),"form"in h&&H in h.form},[]);const E=Object.keys(g[t].properties).filter(e=>!(m!=null&&m.includes(e))),c=e=>`form->${H}->${e}`,d=e=>{k(o=>N(o,l=>{Array.isArray(e)?e.forEach(p=>K(l,c(p))):K(l,c(e))})),y($(t,b,`Delete ${e}`,"",{styles:j("styles")}))},rt=e=>{let o="";typeof g[t].properties[e]!="object"&&(o=g[t].properties[e]),k(l=>N(l,p=>{B(p,c(e),o)})),y($(t,b,e,o,{styles:j("styles")}))},x=e=>{k(o=>N(o,l=>{Array.isArray(e)?e.forEach(p=>B(l,c(p),"")):B(l,c(e),"")})),Array.isArray(e)?y($(t,b,`${e[0]} Clear`,"",{styles:j("styles")})):y($(t,b,`${e} Clear`,"",{styles:j("styles")}))},I=e=>{const o={object:"styles",paths:{}},l=g[t].properties[e];let p=[e];typeof l=="object"?(p=Object.keys(l),p.map(q=>{o.paths[q]=c(q)})):o.paths[e]=c(e);const z=["background-image","background-position","background-repeat","background-size","backdrop-filter"];switch(e){case"background":return s.jsx(vt,{title:"Background",subtitle:`${r} Background`,value:D(M,(i==null?void 0:i["background-image"])||(i==null?void 0:i.background)),modalId:`${t}-cnr-bd`,stateObjName:"styles",objectPaths:o,deleteable:!0,delPropertyHandler:()=>d([...z,"background"]),clearHandler:()=>x(z),allowImportant:!0});case"color":return s.jsx(jt,{title:"Text Color",subtitle:`${r} Color`,value:D(M,i==null?void 0:i.color),modalId:`${t}-cnr-clr`,stateObjName:"styles",propertyPath:o.paths.color,deleteable:!0,delPropertyHandler:()=>d("color"),clearHandler:()=>x("color"),allowImportant:!0,canSetVariable:!0});case"padding":return s.jsx(v,{delPropertyHandler:()=>d("padding"),title:"Padding",children:s.jsx(Q,{mainTitle:"Padding",allowImportant:!0,action:{type:"spacing-control"},subtitle:`${r} Padding`,objectPaths:o,id:`${t}-paddn-ctrl`})});case"margin":return s.jsx(v,{delPropertyHandler:()=>d("margin"),title:"Margin",children:s.jsx(Q,{mainTitle:"Margin",allowImportant:!0,action:{type:"spacing-control"},subtitle:`${r} Margin`,objectPaths:o,id:`${t}-mrg-ctrl`})});case"box-shadow":return s.jsx($t,{title:"Box-shadow",subtitle:`${r} Box Shadow`,value:i==null?void 0:i["box-shadow"],modalId:`${t}-cnr-box-shd`,stateObjName:"styles",propertyPath:o.paths["box-shadow"],deleteable:!0,delPropertyHandler:()=>d("box-shadow"),clearHandler:()=>x("box-shadow"),allowImportant:!0});case"border":return s.jsx(v,{delPropertyHandler:()=>d(["border","border-style","border-color","border-width","border-radius"]),title:"Border",children:s.jsxs("span",{className:n(w.flxc),children:[s.jsx(X,{propertyPath:[String(Object.values(o.paths))],stateObjName:"styles"}),s.jsx(yt,{subtitle:`${r} Border`,objectPaths:o,id:`${t}-bdr-ctrl`})]})});case"outline":return s.jsxs(v,{delPropertyHandler:()=>d("outline"),title:"Outline",children:[s.jsx(X,{propertyPath:[String(Object.values(o.paths))],stateObjName:"styles",id:"fld-wrp-outline"}),s.jsx(Ct,{allowImportant:!0,subtitle:`${r} Outline`,objectPaths:o,id:"fld-wrp-cont-outline"})]});case"transition":return s.jsx(xt,{title:"Transition",subtitle:`${r} Transition`,value:i==null?void 0:i.transition,modalId:`${t}-cnr-trnsn`,stateObjName:"styles",propertyPath:c("transition"),deleteable:!0,delPropertyHandler:()=>d("transition"),clearHandler:()=>x("transition"),allowImportant:!0})}};return s.jsxs("div",{className:n(w.ml2,{pn:"relative"}),children:[s.jsx(wt,{square:!0,noShadow:!0,defaultActive:"Default",options:_,size:60,component:"button",onChange:e=>et(e),show:["icn"],variant:"lightgray",width:"100%",wideTab:!0}),m.length===0&&W&&s.jsx(dt,{size:50,clr:"#006aff",className:"ml-2"}),s.jsx(J,{overflw:"",open:S.toLowerCase()==="",children:m.map((e,o)=>I(e))}),f==null?void 0:f.map(e=>s.jsx(J,{overflw:"",open:S.toLowerCase()===e.toLowerCase(),children:m.map((o,l)=>I(o))})),E.length>0&&s.jsx(Pt,{id:`${t}-prop`,properties:E,setProperty:rt})]})}const St=(t,r,a)=>{let n=a?`:${a}`:"";switch((a==="active"||a==="disabled"||a==="completed")&&(n=`.${a}`),r){case"stp-icn-cntn":if(a==="active")return`._frm-b${t}-stp-hdr.active ._frm-b${t}-${r}`;if(a==="disabled")return`._frm-b${t}-stp-hdr.disabled ._frm-b${t}-${r}`;if(a==="completed")return`._frm-b${t}-stp-hdr.completed ._frm-b${t}-${r}`;break;case"prev-step-btn":case"next-step-btn":if(a==="focus")return`._frm-b${t}-${r}:focus`;if(a==="active")return`._frm-b${t}-${r}:active`;if(a==="disabled")return`._frm-b${t}-${r}:disabled`;break}return`._frm-b${t}-${r}${n}`};function Yt(){const{css:t}=U(),{formType:r,formID:a,element:n}=Y(),b=bt(ft),C=Z(gt);P.useEffect(()=>{b(h=>V(G({},h),{styleMode:!0}))},[]);const A=()=>({"quick-tweaks":"Multi Step Quick Tweaks","stp-cntnr":"Step Container","stp-hdr-wrpr":"Step Header Wrapper","stp-hdr":"Step Header","stp-icn-cntn":"Step Icon","stp-hdr-lbl":"Step Header Label","stp-hdr-sub-titl":"Step Header Subtitle","stp-wrpr":"Step Wrapper","stp-progress-wrpr":"Step Progress Wrapper","stp-progress-bar":"Step Progress Bar","stp-cntn":"Step Content","stp-btn-wrpr":"Step Button Wrapper","stp-btn":"Step Button"})[n]||"Theme Customization";return s.jsxs("div",{className:t(u.mainWrapper),children:[s.jsxs("div",{className:t(w.pb1,L.flxColumn,L.fixed,C&&L.shw),children:[s.jsxs("span",{className:t({flxi:"center",mt:10}),children:[s.jsxs(ht,{to:`/form/builder/${r}/${a}/themes`,className:t([u.breadcumbLink,w.fontBody,u.l1]),children:[s.jsx(mt,{size:"14"})," ","Themes /"," "]}),s.jsx("span",{className:t([u.breadcumbLink,w.fontBody,u.l2]),children:"Multi Step Customize"})]}),s.jsxs("h4",{className:t(u.title),children:[A()," ","(Global)"]})]}),s.jsxs("div",{className:t(u.wrp),children:[n==="quick-tweaks"&&s.jsx("span",{children:"Multi step quick tweaks is not availabe. this feature will comming soon."}),n!=="quick-tweaks"&&s.jsx(kt,{element:n,isMultistep:!0})]})]})}const u={title:{mt:5,mb:2,fs:18},breadcumbLink:{fs:11,flxi:"center",mr:3,":focus":{bs:"none"}},l1:{cr:"var(--white-0-61)",":hover":{textDecoration:"underline !important"}},l2:{cr:"var(--white-0-21)"},wrp:{ml:5,mr:8,mt:10,fs:12},mainWrapper:{bd:"var(--white-100)",w:"97%"},subTitle:{mt:10,mb:5,fs:15,cr:"var(--white-0-31)"},divider:{bb:"1px solid var(--white-0-83)",mx:3,my:10},thmBtn:{flxi:"center",cg:4,h:30,ws:"nowrap",fs:12,fw:500,b:"none",bd:"transparent",curp:1,py:8,px:15,brs:20,pn:"relative",':hover:not([data-active="true"])':{bd:"var(--b-79-96)"}},clrActive:{bd:"var(--b-50)",cr:"var(--white-100)"}};export{Yt as default};
