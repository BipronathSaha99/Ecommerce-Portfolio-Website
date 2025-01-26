var ee=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var X=(s,d,r)=>d in s?ee(s,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[d]=r,_=(s,d)=>{for(var r in d||(d={}))se.call(d,r)&&X(s,r,d[r]);if(Q)for(var r of Q(d))te.call(d,r)&&X(s,r,d[r]);return s};import{r as A,j as e,T as $,_ as a,e as O,f as S,u as le,y as ae,$ as ce}from"./main-601.js";import{T as oe,a as de,b as re,c as ne}from"./bf-409-72.js";import{r as me,a as ie,b as he,d as ue}from"./bf-854-333.js";import{h as Y,c as xe,d as V,e as pe}from"./bf-92-74.js";import{u as R,S as je,M as ve}from"./bf-548-69.js";function Ne({tab:s,formID:d,formFields:r,biginConf:t,setBiginConf:c,setSnackbar:n}){var o,b,z,I,P,g,D,U,E,L,q,W,B,G,H,J,K;const[h,p]=A.useState(!1),[F,v]=A.useState(!1),[u,y]=A.useState({show:!1}),[w,T]=A.useState(!1),j=(l,i,m)=>{const N=_({},t);s===0?m!==void 0?m?N.actions[i]=l:delete N.actions[i]:l?N.actions[i]=l:delete N.actions[i]:m!==void 0?m?N.relatedlists[s-1].actions[i]=l:delete N.relatedlists[s-1].actions[i]:l?N.relatedlists[s-1].actions[i]=l:delete N.relatedlists[s-1].actions[i],c(_({},N))},x=s===0?t.module:t.relatedlists[s-1].module,Z=()=>{var i,m,N;const l=[{title:"Tags",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return(N=(m=(i=t==null?void 0:t.default)==null?void 0:i.moduleData)==null?void 0:m[x])!=null&&N.tags&&(l[0].childs=Object.values(t.default.moduleData[x].tags).map(f=>({label:f.tagName,value:f.tagId}))),l[1].childs=r.map(f=>({label:f.name,value:`\${${f.key}}`})),l},k=()=>{y({show:!1})},M=(l,i)=>{const m=_({},t);m.actions.note||(m.actions.note={}),l==="field"?(m.actions.note.content||(m.actions.note.content=""),m.actions.note.content+=i):i?m.actions.note[l]=i:delete m.actions.note[l],c(_({},m))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[((b=(o=t==null?void 0:t.relatedlists)==null?void 0:o[s-1])==null?void 0:b.module)!=="Notes"&&e.jsxs(e.Fragment,{children:[e.jsx($,{onChange:l=>j(!0,"workflow",l.target.checked),checked:s===0?"workflow"in t.actions:"workflow"in((I=(z=t.relatedlists)==null?void 0:z[s-1])==null?void 0:I.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow"),subTitle:a("Trigger workflows in Zoho Bigin.")}),e.jsx($,{onChange:l=>j(!0,"approval",l.target.checked),checked:s===0?"approval"in t.actions:"approval"in((g=(P=t.relatedlists)==null?void 0:P[s-1])==null?void 0:g.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval"),subTitle:a("Send entries to approval list in Zoho Bigin.")}),s===0&&!["Calls","Events","Tasks"].includes(t.module)&&e.jsx($,{onChange:()=>v(!0),checked:"note"in t.actions&&("title"in((D=t.actions)==null?void 0:D.note)||"content"in((U=t.actions)==null?void 0:U.note)),className:"wdt-200 mt-4 mr-2",value:"notes",title:a("Add a Note"),subTitle:a("Add a note from bitform to pushed to Zoho Bigin.")})]}),["Contacts","Accounts","Products"].includes(x)&&e.jsx($,{onChange:()=>y({show:"photo"}),checked:s===0?"photo"in t.actions:"photo"in t.relatedlists[s-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Upload Photo"),subTitle:`Add a photo to ${x} in Zoho Bigin.`}),e.jsx($,{onChange:()=>y({show:"attachments"}),checked:s===0?"attachments"in t.actions:"attachments"in t.relatedlists[s-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment"),subTitle:a("Add attachments from BitForm to Zoho Bigin.")})]}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:u.show==="attachments",close:k,action:k,title:a("Select Attachment"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields")}),e.jsx(R,{defaultValue:s===0?t.actions.attachments:t.relatedlists[s-1].actions.attachments,className:"mt-2 w-9",onChange:l=>j(l,"attachments"),options:r.filter(l=>l.type==="file-up").map(l=>({label:l.name,value:l.key}))})]}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:u.show==="photo",close:k,action:k,title:a("Upload Photo"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields")}),e.jsx(R,{defaultValue:s===0?t.actions.photo:t.relatedlists[s-1].actions.photo,className:"mt-2 w-9",onChange:l=>j(l,"photo"),options:r.filter(l=>l.type==="file-up").map(l=>({label:l.name,value:l.key})),singleSelect:!0})]}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:h,close:()=>p(!1),action:()=>p(!1),title:a("Record Owner"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),w?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:s===0?t.actions.owner:t.relatedlists[s-1].actions.owner,options:((E=t.default)==null?void 0:E.users)&&Object.values(t.default.users).map(l=>({label:l.userName,value:l.userId})),onChange:l=>j(l,"owner"),customValue:!0}),e.jsx("button",{onClick:()=>me(d,t,c,T,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Users"'},type:"button",disabled:w,children:"↻"})]})]}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:u.show==="tag_rec",close:k,action:k,title:a("Tags"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:`Add a tag to ${x} pushed to Zoho Bigin`}),e.jsx("div",{className:"mt-2",children:a("Tag Name")}),w?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:s===0?t.actions.tag_rec:t.relatedlists[s-1].actions.tag_rec,options:Z(),onChange:l=>j(l,"tag_rec")}),e.jsx("button",{onClick:()=>ie(s,d,t,c,T,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Tags"'},type:"button",disabled:w,children:"↻"})]})]}),s===0&&e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:F,close:()=>v(!1),action:()=>v(!1),title:a("Notes"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),w?e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-2 mb-1",children:a("Note Title")}),e.jsx("input",{type:"text",className:"btcd-paper-inp",placeholder:a("Note Title"),onChange:l=>M("title",l.target.value),value:s===0?((q=(L=t.actions)==null?void 0:L.note)==null?void 0:q.title)||"":((B=(W=t.relatedlists[s-1].actions)==null?void 0:W.note)==null?void 0:B.title)||""}),e.jsx("div",{className:"mt-2 mb-1",children:a("Note Content")}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:l=>M("field",l.target.value),children:[e.jsx("option",{value:"",children:a("Field")}),r.map(l=>l.type!=="file-up"&&e.jsx("option",{value:`\${${l.key}}`,children:l.name},`ff-zhcrm-${l.key}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:l=>M("content",l.target.value),value:s===0?((H=(G=t.actions)==null?void 0:G.note)==null?void 0:H.content)||"":((K=(J=t.relatedlists[s-1].actions)==null?void 0:J.note)==null?void 0:K.content)||""})]})]})]})}function C({i:s,uploadFields:d,formFields:r,field:t,biginConf:c,setBiginConf:n,tab:h}){var y,w,T,j,x,Z,k,M;const p=h===0?c.module:(w=(y=c.relatedlists)==null?void 0:y[h-1])==null?void 0:w.module,F=le(ce),{isPro:v}=F,u=t.zohoFormField===""||((x=(j=(T=c.default.moduleData)==null?void 0:T[p])==null?void 0:j.required)==null?void 0:x.indexOf(t.zohoFormField))===-1;return e.jsxs("div",{className:"flx mt-2 mr-1",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:o=>Y(o,s,c,n,d,h),children:[e.jsx("option",{value:"",children:a("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:d?r.map(o=>o.type==="file-up"&&e.jsx("option",{value:o.key,children:o.name},`ff-zhcrm-${o.key}`)):r.map(o=>o.type!=="file-up"&&e.jsx("option",{value:o.key,children:o.name},`ff-zhcrm-${o.key}`))}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"custom",children:a("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${v?"":"(PRO)"}`,children:v&&((Z=je)==null?void 0:Z.map(o=>e.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`)))})]})]}),t.formField==="custom"&&e.jsx(ve,{onChange:o=>xe(o,s,c,n,h),label:a("Custom Value"),className:"mr-2",type:"text",value:t.customValue,placeholder:a("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!u,name:"zohoFormField",value:t.zohoFormField||"",onChange:o=>Y(o,s,c,n,d,h),children:[e.jsx("option",{value:"",children:a("Select Field")}),((M=(k=c.default.moduleData)==null?void 0:k[p])==null?void 0:M.fields)&&Object.values(c.default.moduleData[p].fields).map(o=>u?!o.required&&e.jsx("option",{value:o.api_name,children:o.display_label},o.api_name):e.jsx("option",{value:o.api_name,children:o.display_label},o.api_name))]})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>V(s,c,n,d,h),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>pe(s,c,n,d,h),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(ae,{})})]})]})}function we({tab:s,settab:d,formID:r,formFields:t,biginConf:c,setBiginConf:n,isLoading:h,setSnackbar:p}){var F,v,u,y,w,T;return A.useEffect(()=>{he(0,d)},[]),e.jsxs(e.Fragment,{children:[h&&e.jsx(S,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((u=(v=(F=c.default)==null?void 0:F.moduleData)==null?void 0:v[c.module])==null?void 0:u.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map Fields")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),c.field_map.map((j,x)=>e.jsx(C,{i:x,field:j,biginConf:c,formFields:t,setBiginConf:n,tab:s,setSnackbar:p},`bigin-m-${x+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>V(c.field_map.length,c,n,!1,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((T=(w=(y=c.default)==null?void 0:y.moduleData)==null?void 0:w[c.module])==null?void 0:T.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map Attachments")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields")})})]}),c.upload_field_map.map((j,x)=>e.jsx(C,{uploadFields:1,i:x,field:j,biginConf:c,formFields:t,setBiginConf:n,tab:s,setSnackbar:p},`crm-m-${x+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>V(c.upload_field_map.length,c,n,!0,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Ne,{tab:s,formID:r,formFields:t,biginConf:c,setBiginConf:n,setSnackbar:p})]})]})}function _e({tab:s,settab:d,formID:r,formFields:t,handleInput:c,biginConf:n,setBiginConf:h,isLoading:p,setisLoading:F,setSnackbar:v}){return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Module:")}),e.jsxs("select",{onChange:c,name:"module",value:n.module,className:"btcd-paper-inp w-7",disabled:s===1,children:[e.jsx("option",{value:"",children:a("Select Module")}),n.default&&n.default.modules&&Object.values(n.default.modules).map(u=>e.jsx("option",{value:u.api_name,children:u.plural_label},u.api_name))]}),s===0&&e.jsx("button",{onClick:()=>ue(r,n,h,F,v),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Bigin Modules")}'`},type:"button",disabled:p,children:"↻"}),e.jsx("br",{}),e.jsxs(oe,{selectedTabClassName:"s-t-l-active",children:[e.jsx(de,{className:"flx mt-2 mb-0",children:e.jsx(re,{className:"btcd-s-tab-link mb-0",children:a("New Record")})}),e.jsx("div",{className:"btcd-hr"}),e.jsx(ne,{children:e.jsx(we,{tab:s,settab:d,formID:r,formFields:t,biginConf:n,setBiginConf:h,isLoading:p,setSnackbar:v})})]})]})}export{_e as Z};
