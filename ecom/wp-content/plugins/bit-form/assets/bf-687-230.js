var I=Object.defineProperty;var x=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&c(t,s,e[s]);if(x)for(var s of x(e))v.call(e,s)&&c(t,s,e[s]);return t};import{w as N,v as w,r as i,j as a,S as C,_ as f}from"./main-601.js";import{I as y}from"./bf-242-329.js";import{s as F}from"./bf-644-360.js";import{h as u,i as k}from"./bf-648-392.js";import{S as E}from"./bf-123-393.js";import"./bf-548-69.js";import"./bf-409-72.js";import"./bf-92-74.js";function B({formFields:t,setIntegration:e,integrations:s,allIntegURL:h}){const g=N(),{id:d,formID:L}=w(),[n,o]=i.useState(l({},s[d])),[j,m]=i.useState(!1),[S,p]=i.useState({show:!1});return a.jsxs("div",{style:{width:900},children:[a.jsx(C,{snack:S,setSnackbar:p}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>u(r,n,o),name:"name",value:n.name,type:"text",placeholder:f("Integration Name...")})]}),a.jsx("br",{}),a.jsx(E,{formFields:t,handleInput:r=>u(r,n,o,m),sendFoxConf:n,setSendFoxConf:o,isLoading:j,setIsLoading:m,setSnackbar:p}),a.jsx(y,{edit:!0,saveConfig:()=>F(s,e,h,n,g,d,1),disabled:k(n)}),a.jsx("br",{})]})}export{B as default};
