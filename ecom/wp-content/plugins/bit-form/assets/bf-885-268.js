import{w as b,v as k,r as i,j as e,S as j,_ as S}from"./main-601.js";import"./bf-548-69.js";import{S as I}from"./bf-218-119.js";import{s as M,b as w}from"./bf-92-74.js";import{I as H}from"./bf-242-329.js";import{N as Z}from"./bf-273-399.js";import _ from"./bf-288-247.js";import{h as v,c as y,r as N}from"./bf-339-345.js";import{Z as P}from"./bf-171-346.js";import"./bf-409-72.js";import"./bf-305-185.js";import"./bf-126-398.js";function q({formFields:f,setIntegration:c,integrations:d,allIntegURL:h}){const g=b(),{formID:r}=k(),[l,n]=i.useState(!1),[o,p]=i.useState(1),[u,s]=i.useState({show:!1}),[t,m]=i.useState({name:"Zoho Marketing Hub API",type:"Zoho Marketing Hub",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]});i.useEffect(()=>{window.opener&&M("zohoMarkatingHub")},[]);const x=a=>{if(a===3){if(!y(t)){s({show:!0,msg:S("Please map mandatory fields")});return}t.list!==""&&t.table!==""&&t.field_map.length>0&&p(a)}else p(a),a===2&&!t.list&&N(r,t,m,n,s)};return e.jsxs("div",{children:[e.jsx(j,{snack:u,setSnackbar:s}),e.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:e.jsx(I,{step:3,active:o})}),e.jsx(_,{formID:r,marketingHubConf:t,setMarketingHubConf:m,step:o,setstep:p,isLoading:l,setisLoading:n,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%"},children:[e.jsx(P,{formID:r,formFields:f,handleInput:a=>v(a,r,t,m,n,s),marketingHubConf:t,setMarketingHubConf:m,isLoading:l,setisLoading:n,setSnackbar:s}),e.jsx(Z,{nextPageHandler:()=>x(3),disabled:t.list===""||t.table===""||t.field_map.length<1})]}),e.jsx(H,{step:o,saveConfig:()=>w(d,c,h,t,g)})]})}export{q as default};
