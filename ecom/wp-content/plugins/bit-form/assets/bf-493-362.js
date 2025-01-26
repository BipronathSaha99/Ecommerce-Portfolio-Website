var $=Object.defineProperty;var A=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(d,c,t)=>c in d?$(d,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[c]=t,b=(d,c)=>{for(var t in c||(c={}))q.call(c,t)&&_(d,t,c[t]);if(A)for(var t of A(c))I.call(c,t)&&_(d,t,c[t]);return d};import{j as a,_ as i,y as w,T as h,u as O,$ as R,f as V}from"./main-601.js";import{S as z,M as P,u as U}from"./bf-548-69.js";import{h as M,d as B,a as k,b as D,c as T,e as E,f as G}from"./bf-644-360.js";import{r as H,a as L}from"./bf-927-361.js";function Z({i:d,formFields:c,field:t,sheetConf:e,setSheetConf:r,addressField:p}){const u=t.required,x=p.filter(s=>!s.required);return a.jsxs("div",{className:"flx flx-around mt-2 mr-1",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:s=>M(s,d,e,r),children:[a.jsx("option",{value:"",children:i("Select Field")}),c.map(s=>s.type!=="file-up"&&a.jsx("option",{value:s.key,children:s.name},`ff-zhcrm-${s.key}`))]}),a.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpAddressField",value:t.mailChimpAddressField||"",onChange:s=>M(s,d,e,r),disabled:u,children:[a.jsx("option",{value:"",children:i("Select Field")}),u?Object.values(p).map((s,n)=>a.jsx("option",{value:s.tag,children:s.name},`add-${n*2}`)):Object.values(x).map((s,n)=>a.jsx("option",{value:s.tag,children:s.name},`add-${n*2}`))]}),!u&&a.jsx("button",{onClick:()=>B(d,e,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx(w,{})})]})}function J({sheetConf:d,setSheetConf:c,formFields:t,address:e}){var p,u,x;const r=(s,n)=>{const l=b({},d);n==="update"&&(s.target.checked?l.actions.update=!0:delete l.actions.update),n==="double_opt_in"&&(s.target.checked?l.actions.double_opt_in=!0:delete l.actions.double_opt_in),n==="address"&&(s.target.checked?(l.actions.address=!0,l.address_field=e.filter(o=>o.required).map(o=>({formField:"",mailChimpAddressField:o.tag,required:!0}))):(delete l.actions.address,l.address_field="")),c(b({},l))};return a.jsxs("div",{className:"pos-rel d-flx w-8",children:[a.jsx(h,{checked:((p=d.actions)==null?void 0:p.address)||!1,onChange:s=>r(s,"address"),className:"wdt-200 mt-4 mr-2",value:"address",title:i("Add Address Field"),subTitle:i("Add Address Field")}),a.jsx(h,{checked:((u=d.actions)==null?void 0:u.double_opt_in)||!1,onChange:s=>r(s,"double_opt_in"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:i("Double Opt-in"),subTitle:i("Add Double Opt-in")}),a.jsx(h,{checked:((x=d.actions)==null?void 0:x.update)||!1,onChange:s=>r(s,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:i("Update Mail Chimp"),subTitle:i("Update Responses with MailChimp exist Aduience?")})]})}function K({i:d,formFields:c,field:t,sheetConf:e,setSheetConf:r}){var x,s,n;const p=O(R),{isPro:u}=p;return a.jsxs("div",{className:"flx mt-2 mr-1",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:l=>k(l,d,e,r),children:[a.jsx("option",{value:"",children:i("Select Field")}),a.jsx("optgroup",{label:"Form Fields",children:c.map(l=>l.type!=="file-up"&&a.jsx("option",{value:l.key,children:l.name},`ff-zhcrm-${l.key}`))}),a.jsx("option",{value:"custom",children:i("Custom...")}),a.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((x=z)==null?void 0:x.map(l=>a.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),t.formField==="custom"&&a.jsx(P,{onChange:l=>D(l,d,e,r),label:i("Custom Value"),className:"mr-2",type:"text",value:t.customValue,placeholder:i("Custom Value")}),a.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpField",value:t.mailChimpField||"",onChange:l=>k(l,d,e,r),children:[a.jsx("option",{value:"",children:i("Select Field")}),((n=(s=e.default)==null?void 0:s.fields)==null?void 0:n[e.listId])&&Object.values(e.default.fields[e.listId]).map((l,o)=>a.jsx("option",{value:l.tag,children:l.name},`mchimp-${o*2}`))]})]}),a.jsx("button",{onClick:()=>T(d,e,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>E(d,e,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx(w,{})})]})}function S({formID:d,formFields:c,handleInput:t,sheetConf:e,setSheetConf:r,isLoading:p,setisLoading:u,setSnackbar:x,a:s}){var o,g,v,N,F,y;const n=[{tag:"addr1",name:"Address 1",required:!0},{tag:"addr2",name:"Address 2",required:!1},{tag:"city",name:"City",required:!0},{tag:"zip",name:"Zip",required:!0},{tag:"state",name:"State",required:!0},{tag:"country",name:"Country",required:!1}],l=m=>{const j=b({},e);m?j.tags=m?m.split(","):[]:delete j.tags,r(b({},j))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-150 d-in-b",children:i("Audience List:")}),a.jsxs("select",{onChange:t,name:"listId",value:e.listId,className:"btcd-paper-inp w-6",children:[a.jsx("option",{value:"",children:i("Select Audience List")}),((o=e==null?void 0:e.default)==null?void 0:o.audiencelist)&&Object.keys(e.default.audiencelist).map(m=>a.jsx("option",{value:e.default.audiencelist[m].listId,children:e.default.audiencelist[m].listName},m))]}),a.jsx("button",{onClick:()=>H(d,e,r,u,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Audience list"'},type:"button",disabled:p,children:"↻"}),a.jsx("br",{}),a.jsx("br",{}),a.jsxs("div",{className:"d-flx",children:[a.jsx("b",{style:{marginTop:"15px"},className:"wdt-150 d-in-b",children:i("Tags: ")}),a.jsx(U,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-6",options:((g=e==null?void 0:e.default)==null?void 0:g.audienceTags)&&Object.keys(e.default.audienceTags).map(m=>({label:e.default.audienceTags[m].tagName,value:e.default.audienceTags[m].tagName})),onChange:m=>l(m)}),a.jsx("button",{onClick:()=>L(d,e,r,u,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh MailChimp Tags")}'`},type:"button",disabled:p,children:"↻"})]}),p&&a.jsx(V,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((N=(v=e.default)==null?void 0:v.fields)==null?void 0:N[e.listId])&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Map Fields")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Form Fields")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Mail Chimp Fields")})})]}),e.field_map.map((m,j)=>a.jsx(K,{i:j,field:m,sheetConf:e,formFields:c,setSheetConf:r},`sheet-m-${j+9}`)),a.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:a.jsx("button",{onClick:()=>T(e.field_map.length,e,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{}),((F=e.actions)==null?void 0:F.address)&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Address Field Map")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Form Address Fields")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Mail Chimp Address Fields")})})]}),(y=e==null?void 0:e.address_field)==null?void 0:y.map((m,j)=>a.jsx(Z,{i:j,field:m,sheetConf:e,formFields:c,setSheetConf:r,addressField:n},`sheet-m-${j+9}`)),a.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:a.jsx("button",{onClick:()=>G(e.address_field.length,e,r),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),a.jsx("br",{}),a.jsx("br",{})]}),e.listId&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Actions")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsx(J,{sheetConf:e,setSheetConf:r,formFields:c,address:n})]})]})}export{S as M};
