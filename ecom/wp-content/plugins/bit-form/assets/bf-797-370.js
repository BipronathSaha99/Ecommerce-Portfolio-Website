var T=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var _=(e,t,l)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,p=(e,t)=>{for(var l in t||(t={}))A.call(t,l)&&_(e,l,t[l]);if(y)for(var l of y(t))P.call(t,l)&&_(e,l,t[l]);return e};import{c as j,d as N,_ as r,u as S,j as o,y as V,$}from"./main-601.js";import{S as w,M as C}from"./bf-548-69.js";import{B as q}from"./bf-428-359.js";const O=(e,t,l,a)=>{const s=p({},l);s[e].splice(t,0,{}),a(p({},s))},E=(e,t,l,a)=>{const s=p({},l);s[e].length>1&&s[e].splice(t,1),a(p({},s))},b=(e,t,l,a,s)=>{const i=p({},a);i[e][l][t.target.name]=t.target.value,s(p({},i))},z=e=>!((e!=null&&e.post_map?e.post_map.filter(l=>!l.formField&&l.postField&&l.required):[]).length>0),G=e=>!((e!=null&&e.acf_map?e.acf_map.filter(l=>!l.formField&&l.acfField&&l.required):[]).length>0),U=(e,t,l)=>{const a=j({post_type:e==null?void 0:e.post_type},"bitforms_get_custom_field").then(s=>{var i,c,d,f;return s!==void 0&&s.success&&((i=s==null?void 0:s.data)!=null&&i.acfFields&&t(s.data.acfFields),(c=s==null?void 0:s.data)!=null&&c.acfFile&&l(s.data.acfFile)),((d=s==null?void 0:s.data)==null?void 0:d.acfFields.length)!==0||((f=s==null?void 0:s.data)==null?void 0:f.acfFile.length)!==0?"Successfully refresh ACF Fields.":"ACF Fields not found"});N.promise(a,{success:s=>s,error:r("Error Occured"),loading:r("Loading ACF Fields...")})},H=(e,t)=>{const l=j({},"bitforms_get_post_type").then(a=>{var s,i,c;if(a&&a.success){let d=p({},e);return(s=a==null?void 0:a.data)!=null&&s.post_types&&(d=Object.values((i=a==null?void 0:a.data)==null?void 0:i.post_types),t(d)),((c=a==null?void 0:a.data)==null?void 0:c.post_types.length)!==0?"Successfully refresh Post Types.":" Post Types not found"}});N.promise(l,{success:a=>a,error:r("Error Occured"),loading:r("Loading Post Types...")})};function J({i:e,type:t,formFields:l,field:a,dataConf:s,setDataConf:i,customFields:c,fieldType:d}){var g;const f={acf:{propName:"acf_map",fldName:"acfField"},post:{propName:"post_map",fldName:"postField"},acfFile:{propName:"acf_file_map",fldName:"acfFileUpload"}},v=S($),{isPro:h}=v,{propName:m,fldName:u}=f[t],k=(n,M)=>{const x=p({},s);x[m][M].customValue=n.target.value,i(x)},F=!!c.find(n=>n.key===a[u]&&n.required);return o.jsxs("div",{className:"flx mt-2 mr-1",children:[o.jsxs("div",{className:"flx integ-fld-wrp",children:[o.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:n=>b(m,n,e,s,i),children:[o.jsx("option",{value:"",children:r("Select Field")}),t!=="acfFile"?o.jsxs(o.Fragment,{children:[o.jsx(q,{formFields:l,notAllowFieldType:["file-up"]}),o.jsx("option",{value:"custom",children:r("Custom...")})]}):o.jsx("optgroup",{label:"Form Fields",children:l.map(n=>n.type==="file-up"&&o.jsx("option",{value:n.key,children:n.name},`ff-zhcrm-${n.key}`))}),d!=="file"&&o.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((g=w)==null?void 0:g.map(n=>o.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),a.formField==="custom"&&o.jsx(C,{onChange:n=>k(n,e),label:r("Custom Value"),className:"mr-2",type:"text",value:a.customValue,placeholder:r("Custom Value")}),o.jsxs("select",{className:"btcd-paper-inp",name:u,value:a[u]||"",onChange:n=>b(m,n,e,s,i),disabled:F,defaultValue:"0",children:[o.jsx("option",{value:"0",children:r("Select Field")}),c==null?void 0:c.map(n=>o.jsx("option",{value:n.key,children:`${n.name}`},`${n.key}-1`))]})]}),!F&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>O(m,e,s,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),o.jsx("button",{onClick:()=>E(m,e,s,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:o.jsx(V,{})})]})]})}export{J as F,O as a,G as b,z as c,H as d,U as r};
