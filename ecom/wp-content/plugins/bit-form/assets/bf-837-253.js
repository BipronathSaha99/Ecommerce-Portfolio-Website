var v=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(t,s,a)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,l=(t,s)=>{for(var a in s||(s={}))P.call(s,a)&&f(t,a,s[a]);if(j)for(var a of j(s))S.call(s,a)&&f(t,a,s[a]);return t};import{r as c,j as e,_ as i,L as w,ba as E,c as L}from"./main-601.js";import{t as b}from"./bf-305-185.js";import{T}from"./bf-218-119.js";import{A as B}from"./bf-126-398.js";import{N as F}from"./bf-273-399.js";import{r as K}from"./bf-2-382.js";import"./bf-548-69.js";import"./bf-409-72.js";import"./bf-92-74.js";function O({enchargeConf:t,setEnchargeConf:s,step:a,setstep:k,setSnackbar:x,isInfo:m}){const[d,A]=c.useState(!1),[h,g]=c.useState({name:"",api_key:""}),[N,_]=c.useState(!1),[p,u]=c.useState(!1),z=()=>{const r=l({},t);if(!r.name||!r.api_key){g({name:r.name?"":i("Integration name cann't be empty"),api_key:r.api_key?"":i("API Key cann't be empty")});return}u("auth");const o={api_key:r.api_key};L(o,"bitforms_encharge_authorize").then(n=>{n!=null&&n.success&&(A(!0),x({show:!0,msg:i("Authorized Successfully")})),_(!0),u(!1)})},y=r=>{const o=l({},t),n=l({},h);n[r.target.name]="",o[r.target.name]=r.target.value,g(n),s(o)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2),K(t,s,u,x)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:b.encharge.title,youTubeLink:b.encharge.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:t.name,type:"text",placeholder:i("Integration Name..."),disabled:m}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.name}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("API Key:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"api_key",value:t.api_key,type:"text",placeholder:i("API key"),disabled:m}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.api_key}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get API , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:"https://app.encharge.io/account/info",target:"_blank",rel:"noreferrer",children:i("Encharge API Console")})]}),p==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(w,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),N&&!d&&!p&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:" mr-2",style:{fontSize:30,marginTop:-5},children:e.jsx(E,{size:"15"})}),"Sorry, API key is invalid"]}),!m&&e.jsxs(e.Fragment,{children:[e.jsx(B,{isAuthorized:d,isLoading:p,handleAuthorize:()=>z()}),e.jsx("br",{}),e.jsx(F,{nextPageHandler:()=>I(),disabled:!d})]})]})]})}export{O as default};
