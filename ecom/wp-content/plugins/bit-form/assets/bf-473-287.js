import{r as s,bi as x,w as b,v as k,j as t,S as j}from"./main-601.js";import"./bf-548-69.js";import{t as o}from"./bf-305-185.js";import{S as v,T as f,W as g}from"./bf-218-119.js";import{b as S}from"./bf-92-74.js";import"./bf-409-72.js";const w=s.lazy(()=>x(()=>import("./bf-59-189.js"),["./bf-59-189.js","./main-601.js","./main-601.css","./bf-548-69.js","./bf-409-72.js","./bf-634-410.css","./bf-555-409.css","./bf-428-359.js"],import.meta.url));function E({formFields:r,setIntegration:p,integrations:n,allIntegURL:c}){const m=b(),{formID:l}=k(),[e,d]=s.useState(1),[u,a]=s.useState({show:!1}),[i,h]=s.useState({name:"Zapier Web Hooks",type:"Zapier",method:"POST",url:"",apiConsole:"https://zapier.com/app/dashboard"});return t.jsxs("div",{children:[t.jsx(j,{snack:u,setSnackbar:a}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(v,{step:2,active:e})}),t.jsx(f,{title:o.zapier.title,youTubeLink:o.zapier.link}),t.jsx("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"100%"},children:t.jsx(w,{formID:l,formFields:r,webHooks:i,setWebHooks:h,step:e,setstep:d,setSnackbar:a,create:!0})}),t.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,minHeight:e===2&&"900px"},children:t.jsx(g,{step:e,saveConfig:()=>S(n,p,c,i,m)})})]})}export{E as default};
