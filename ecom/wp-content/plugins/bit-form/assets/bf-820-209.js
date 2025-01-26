var K=Object.defineProperty;var I=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var $=(o,n,d)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[n]=d,f=(o,n)=>{for(var d in n||(n={}))L.call(n,d)&&$(o,d,n[d]);if(I)for(var d of I(n))Q.call(n,d)&&$(o,d,n[d]);return o};import{w as V,v as X,r as h,c as j,j as e,S as Y,_ as c}from"./main-601.js";import{p as Z,S as T}from"./bf-940-369.js";import{C as b}from"./bf-635-81.js";import{b as ee}from"./bf-92-74.js";import{F as v,a as F,r as q,c as te,b as se}from"./bf-797-370.js";import"./bf-409-72.js";import"./bf-548-69.js";import"./bf-428-359.js";function he({formFields:o,setIntegration:n,integrations:d,allIntegURL:R}){var N;const D=V(),{id:g}=X(),[E,z]=h.useState([]),[O,_]=h.useState([]),[U,p]=h.useState([]),[B,W]=h.useState([]),[s,r]=h.useState(f({},d[g])),[G,u]=h.useState({show:!1});h.useEffect(()=>{j({},"bitforms_get_post_type").then(t=>{var a,l;t!=null&&t.success&&(z(Object.values((a=t==null?void 0:t.data)==null?void 0:a.post_types)),W((l=t==null?void 0:t.data)==null?void 0:l.users))}),j({post_type:s==null?void 0:s.post_type},"bitforms_get_custom_field").then(t=>{var a,l;t!=null&&t.success&&t!==void 0&&(_((a=t==null?void 0:t.data)==null?void 0:a.acfFields),p((l=t==null?void 0:t.data)==null?void 0:l.acfFile))})},[]);const x=(t,a,l)=>{const i=f({},s);l?i[t]=Number(a):i[t]=a,r(i)},H=(t,a)=>{const l=f({},s);l[t]=a,j({post_type:a},"bitforms_get_custom_field").then(i=>{var y,C,S,w,A,k,P,M;i!=null&&i.success&&i!==void 0&&(_((y=i==null?void 0:i.data)==null?void 0:y.acfFields),p((C=i==null?void 0:i.data)==null?void 0:C.acfFile),(S=i==null?void 0:i.data)!=null&&S.acfFields&&(l.acf_map=(A=(w=i==null?void 0:i.data)==null?void 0:w.acfFields)==null?void 0:A.filter(m=>m.required).map(m=>({formField:"",acfField:m.key,required:m.required})),((k=l==null?void 0:l.acf_map)==null?void 0:k.length)<1&&(l.acf_map=[{}])),(P=i==null?void 0:i.data)!=null&&P.acfFile&&(l.acf_file_map=i.data.acfFile.filter(m=>m.required).map(m=>({formField:"",acfFileUpload:m.key,required:m.required})),((M=l==null?void 0:l.acf_file_map)==null?void 0:M.length)<1&&(l.acf_file_map=[{}])),r(l))})},J=()=>{if(!te(s)){u({show:!0,msg:c("Please map mandatory fields")});return}if(!se(s)){u({show:!0,msg:c("Please map mandatory fields")});return}ee(d,n,R,s,D,g,"edit")};return e.jsxs("div",{style:{width:900},children:[e.jsx(Y,{snack:G,setSnackbar:u}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:c("Integration Name ")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>x(t.target.name,t.target.value),name:"name",value:s.name,type:"text",placeholder:c("Integration Name...")}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:c("Post Type")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select one of the defined WordPress post types Or custom post types for the post.",e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_type",onChange:t=>H(t.target.name,t.target.value),value:s.post_type,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:"Select Post Type"}),E.map((t,a)=>e.jsx("option",{value:t==null?void 0:t.name,children:t==null?void 0:t.label},`acf-${a*2}`))]})}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:c("Post Status")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled",e.jsx("br",{})]})})]}),e.jsxs("select",{name:"post_status",onChange:t=>x(t.target.name,t.target.value),value:s.post_status,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{value:"publish",children:"Publish"}),e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"auto-draft",children:"Auto-Draft"}),e.jsx("option",{value:"private",children:"Private"}),e.jsx("option",{value:"pending",children:"Pending"})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:c("Author")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select the user to be assigned to the post.",e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_author",onChange:t=>x(t.target.name,t.target.value),value:s.post_author,className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:c("Select Author")}),B.map((t,a)=>e.jsx("option",{value:t.ID,children:t.display_name},`acf-${a*2}`))]})}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:c("Comment Status")})}),e.jsxs("select",{name:"comment_status",onChange:t=>x(t.target.name,t.target.value),value:s.comment_status,className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:c("Field Mapping")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Post Fields")})})]})]}),(N=s==null?void 0:s.post_map)==null?void 0:N.map((t,a)=>e.jsx(v,{i:a,type:"post",field:t,formFields:o,dataConf:s,setDataConf:r,customFields:Z},`analytics-m-${a+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>{var t;return F("post_map",(t=s==null?void 0:s.post_map)==null?void 0:t.length,s,r)},className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("div",{children:e.jsxs("p",{className:"p-1 f-m",children:[e.jsx("strong",{children:"Note"})," ",": All your taxonomies will be mapped automatically from your form fields."]})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-3 mb-1",children:[e.jsx("b",{children:c("ACF fields Mapping")}),e.jsx("button",{onClick:()=>q(s,p,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh ACF fields")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("ACF Fields")})})]})]}),s.acf_map.map((t,a)=>e.jsx(v,{i:a,type:"acf",field:t,formFields:o,dataConf:s,setDataConf:r,customFields:O,fieldType:"field"},`analytics-m-${a+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>F("acf_map",s.acf_map.length,s,r),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-3 mb-1",children:[e.jsx("b",{children:c("ACF File Upload Fields Map")}),e.jsx("button",{onClick:()=>q(s,p,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh ACF fields")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("ACF Fields")})})]})]}),s.acf_file_map.map((t,a)=>e.jsx(v,{i:a,type:"acfFile",field:t,formFields:o,dataConf:s,setDataConf:r,customFields:U,fieldType:"file"},`analytics-m-${a+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>F("acf_file_map",s.acf_file_map.length,s,r),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx(T,{onClick:()=>J()})]})}export{he as default};
