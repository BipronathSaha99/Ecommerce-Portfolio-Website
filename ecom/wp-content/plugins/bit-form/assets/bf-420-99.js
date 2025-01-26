import{a as U,v as G,h as y,bR as m,j as o,a6 as c,bT as T,bS as v,bG as W,bU as J,bt as L,bI as M,bJ as q,bV as P,bW as Q,bx as X,aE as Y,bw as Z,bF as _}from"./main-601.js";import{B}from"./bf-542-112.js";import{S as V}from"./bf-737-109.js";import{c as tt}from"./bf-275-111.js";import{b as F}from"./bf-184-110.js";import"./bf-548-69.js";import"./bf-409-72.js";import"./bf-583-108.js";import"./bf-833-79.js";import"./bf-635-81.js";import"./bf-443-82.js";import"./bf-285-80.js";function bt({objectPaths:r,id:x}){const{css:l}=U(),{"*":j}=G(),[$,k]=y(X),[H,z]=y(Y),[D,E]=y(Z),[I,K]=j.split("/"),g=e=>_(e,{themeVars:$,styles:H,themeColors:D}),u=e=>m(g(e.object),W(g(e.object),e.path)),i=[];if(Array.isArray(r))r.forEach(e=>{const{paths:s,object:n}=e;Object.keys(e.paths).forEach(d=>{i[d]={object:n,path:s[d]}})});else{const{paths:e,object:s}=r;Object.keys(e).forEach(a=>{i[a]={object:s,path:e[a]}})}const t={"outline-color":"","outline-width":"","outline-offset":"","outline-style":""},f=Object.keys(i);for(let e=0;e<f.length;e+=1){const s=f[e];if(f.length===2&&s==="outline"){const n=u(i[s]),a=n==null?void 0:n.split(/(?!\(.*)\s(?![^(]*?\))/g);t["outline-width"]=m(i[s],a[0])||"",t["outline-style"]=m(i[s],a[1])||"",t["outline-color"]=m(i[s],a[2])||"";break}s!=="outline-offset"&&(t[s]=u(i[s]))}t["outline-offset"]=u(i["outline-offset"]);const O=(e,s)=>{if(e==="outline-width")return s||"0px";if(e==="outline-style")return s||"solid";if(e==="outline-color")return s||"hsla(0, 0%, 0%, 0.5)"},w=(e,s)=>{var C;let n,a=s;if(f.length===2&&Object.keys(i).includes("outline")&&s!=="outline-offset"){a="outline";const A=st(u(i.outline));n=Object.entries(A).map(([S,R])=>S===s?O(s,e):O(S,R)).join(" ")}Object.keys(i).includes("outline-offset")&&s==="outline-offset"&&(n=e);const{object:d,path:p}=i[a];n=((C=u(i[a]))==null?void 0:C.indexOf("!important"))>=0?`${e} !important`:n,J(d,p,n,{setThemeVars:k,setThemeColors:E,setStyles:z}),L(M(I,K,a,n,{[d]:q(d)}))},h=({unit:e,value:s,prop:n,oldVal:a})=>{if(s){const d=v(a),N=`${P(e,s,d)}${e||"px"}`;w(N,n)}};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:l(c.flxcb,c.mb2,{w:200}),children:[o.jsx("span",{className:l(c.fs12,c.fw500),children:"Type"}),o.jsx(tt,{options:et,value:t==null?void 0:t["outline-style"],onChange:e=>w(e,"outline-style"),w:130,h:30,id:`${x}-style`})]}),o.jsxs("div",{className:l(c.flxcb,c.mb2,{w:200}),children:[o.jsx("span",{className:l(c.fs12,c.fs12,c.fw500),children:"Color"}),o.jsx(V,{action:{onChange:e=>w(e,"outline-color")},value:t==null?void 0:t["outline-color"]})]}),o.jsx("div",{className:l(c.mb2,{w:200}),children:o.jsxs("div",{className:l(b.titleContainer),children:[o.jsx("span",{className:l(b.title),children:"Width"}),o.jsx("span",{className:l(c.flxc)}),o.jsx("div",{className:l({p:2}),children:o.jsx(F,{min:"0",inputHandler:({unit:e,value:s})=>h({unit:e,value:s,prop:"outline-width"}),sizeHandler:({unitKey:e,unitValue:s})=>h({value:s,unit:e,prop:"outline-width",oldVal:t==null?void 0:t["outline-width"]}),id:"0",label:o.jsx(B,{size:14}),value:(t==null?void 0:t["outline-width"])&&T(t==null?void 0:t["outline-width"]),unit:(t==null?void 0:t["outline-width"])&&v(t==null?void 0:t["outline-width"]),options:["px","em","rem","%"],width:"128px",dataTestId:"outline-width-control"})})]})}),o.jsx("div",{className:l(c.mb2,{w:200}),children:o.jsxs("div",{className:l(b.titleContainer),children:[o.jsx("span",{className:l(b.title),children:"Offset"}),o.jsx("span",{className:l(c.flxc)}),o.jsx("div",{className:l({p:2}),children:o.jsx(F,{min:"0",inputHandler:({value:e,unit:s})=>h({value:e,unit:s,prop:"outline-offset"}),sizeHandler:({unitKey:e,unitValue:s})=>h({value:s,unit:e,prop:"outline-offset",oldVal:t==null?void 0:t["outline-offset"]}),id:"0",label:o.jsx(B,{size:14}),value:(t==null?void 0:t["outline-offset"])&&T(t==null?void 0:t["outline-offset"]),unit:(t==null?void 0:t["outline-offset"])&&v(t==null?void 0:t["outline-offset"]),options:["px","em","rem","%"],width:"128px",dataTestId:"outline-width-control"})})]})})]})}const b={titleContainer:{flx:"center-between"},title:{fs:12,fw:500}},et=[{label:"Solid",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"Ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"None",value:"none"}],st=r=>{const[x,l,j]=Q(r);return{"outline-width":x,"outline-style":l,"outline-color":j}};export{bt as default};
