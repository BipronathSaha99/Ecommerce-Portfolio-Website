var v=Object.defineProperty;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,x=(t,e)=>{for(var s in e||(e={}))S.call(e,s)&&p(t,s,e[s]);if(m)for(var s of m(e))N.call(e,s)&&p(t,s,e[s]);return t};import{w,v as C,r as n,j as a,S as D,_ as c}from"./main-601.js";import{b as y}from"./bf-92-74.js";import{I as _}from"./bf-242-329.js";import{h as k,D as E}from"./bf-334-385.js";function q({allIntegURL:t,formFields:e,integrations:s,setIntegration:l}){const f=w(),{id:r,formID:u}=C(),[o,i]=n.useState(x({},s[r])),[d,b]=n.useState(!1),[g,h]=n.useState({show:!1}),j=()=>{y(s,l,t,o,f,r,1)};return a.jsxs("div",{style:{width:900},children:[a.jsx(D,{snack:g,setSnackbar:h}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:I=>k(I,o,i),name:"name",value:o.name,type:"text",placeholder:c("Integration Name...")})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(E,{formID:u,formFields:e,dropboxConf:o,setDropboxConf:i,isLoading:d,setIsLoading:b}),a.jsx(_,{edit:!0,saveConfig:j,disabled:o.field_map.length<1,isLoading:d}),a.jsx("br",{})]})}export{q as default};
