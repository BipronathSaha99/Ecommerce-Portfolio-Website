var v=Object.defineProperty;var c=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var l=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))S.call(e,s)&&l(t,s,e[s]);if(c)for(var s of c(e))w.call(e,s)&&l(t,s,e[s]);return t};import{w as N,v as y,r as p,j as a,S as C,_ as d}from"./main-601.js";import{b as k}from"./bf-92-74.js";import{I as H}from"./bf-242-329.js";import{h as f,H as _,c as E}from"./bf-273-365.js";import"./bf-548-69.js";import"./bf-409-72.js";function z({formFields:t,setIntegration:e,integrations:s,allIntegURL:h}){const x=N(),{id:m}=y(),[n,o]=p.useState(u({},s[m])),[g,b]=p.useState(!1),[j,r]=p.useState({show:!1}),I=()=>{if(!E(n)){r({show:!0,msg:d("Please map mandatory fields")});return}k(s,e,h,n,x,m,1)};return a.jsxs("div",{style:{width:900},children:[a.jsx(C,{snack:j,setSnackbar:r}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,n,o),name:"name",value:n.name,type:"text",placeholder:d("Integration Name...")})]}),a.jsx("br",{}),a.jsx(_,{formFields:t,handleInput:i=>f(i,n,o),hubspotConf:n,setHubspotConf:o,isLoading:g,setIsLoading:b,setSnackbar:r}),a.jsx(H,{edit:!0,saveConfig:I,disabled:n.field_map.length<1}),a.jsx("br",{})]})}export{z as default};
