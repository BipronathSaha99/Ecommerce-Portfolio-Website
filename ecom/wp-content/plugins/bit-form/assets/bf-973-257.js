var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,l=(a,t)=>{for(var s in t||(t={}))z.call(t,s)&&u(a,s,t[s]);if(x)for(var s of x(t))f.call(t,s)&&u(a,s,t[s]);return a};import{r as j,j as e,_ as r,C as T}from"./main-601.js";import{A as _}from"./bf-126-398.js";import{N as E}from"./bf-273-399.js";import{c as S}from"./bf-648-392.js";import"./bf-409-72.js";function H({sendFoxConf:a,setSendFoxConf:t,step:s,setstep:g,isLoading:b,setIsLoading:N,setSnackbar:A,redirectLocation:k,isInfo:n}){const[i,v]=j.useState(!1),[o,d]=j.useState({dataCenter:"",clientId:""}),y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g(2)},m=c=>{const h=l({},a),p=l({},o);p[c.target.name]="",h[c.target.name]=c.target.value,d(p),t(h)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:m,name:"name",value:a.name,type:"text",placeholder:r("Integration Name..."),disabled:n}),e.jsxs("small",{className:"d-blk mt-3",children:[r("To Get Client Auth token, Please Visit")," ",e.jsx("a",{className:"btcd-link",href:"https://sendfox.com/account/oauth",target:"_blank",rel:"noreferrer",children:r("SendFox Access Token")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Authorized Redirect URIs:")})}),e.jsx(T,{value:k||`${window.location.href}`,className:"field-key-cpy w-6 ml-0",readOnly:n,setSnackbar:A}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Access Token:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:m,name:"access_token",value:a.access_token,type:"text",placeholder:r("Access Token..."),disabled:n}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.access_token}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(_,{isAuthorized:i,isLoading:b,handleAuthorize:()=>S(a,t,d,v,N)}),e.jsx("br",{}),e.jsx(E,{nextPageHandler:()=>y(),disabled:!i})]})]})}export{H as default};
