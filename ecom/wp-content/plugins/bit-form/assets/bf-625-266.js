import{w,v as S,r,j as t,S as I,_ as f}from"./main-601.js";import"./bf-548-69.js";import{S as D}from"./bf-218-119.js";import{s as b,b as _}from"./bf-92-74.js";import{I as P}from"./bf-242-329.js";import{N as Z}from"./bf-273-399.js";import v from"./bf-485-245.js";import{h as y,c as N,b as z}from"./bf-527-341.js";import{Z as C}from"./bf-562-342.js";import"./bf-409-72.js";import"./bf-305-185.js";import"./bf-126-398.js";function q({formFields:l,setIntegration:h,integrations:g,allIntegURL:u}){const x=w(),{formID:n}=S(),[d,i]=r.useState(!1),[a,p]=r.useState(1),[k,s]=r.useState({show:!1}),[e,m]=r.useState({name:"Zoho Desk API",type:"Zoho Desk",clientId:"",clientSecret:"",orgId:"",department:"",field_map:[{formField:"",zohoFormField:""}],actions:{}});r.useEffect(()=>{window.opener&&b("zohoDesk")},[]);const j=o=>{var c;if(o===3){if(!N(e)){s({show:!0,msg:f("Please map mandatory fields")});return}if(!((c=e.actions)!=null&&c.ticket_owner)){s({show:!0,msg:f("Please select a ticket owner")});return}e.department!==""&&e.table!==""&&e.field_map.length>0&&p(o)}else p(o),o===2&&!e.department&&z(n,e,m,i,s)};return t.jsxs("div",{children:[t.jsx(I,{snack:k,setSnackbar:s}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(D,{step:3,active:a})}),t.jsx(v,{formID:n,deskConf:e,setDeskConf:m,step:a,setstep:p,isLoading:d,setisLoading:i,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"100%"},children:[t.jsx(C,{formID:n,formFields:l,handleInput:o=>y(o,e,m,n,i,s),deskConf:e,setDeskConf:m,isLoading:d,setisLoading:i,setSnackbar:s}),t.jsx(Z,{nextPageHandler:()=>j(3),disabled:e.department===""||e.table===""||e.field_map.length<1})]}),t.jsx(P,{step:a,saveConfig:()=>_(g,h,u,e,x)})]})}export{q as default};
