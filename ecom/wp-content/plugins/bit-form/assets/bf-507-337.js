var D=Object.defineProperty,R=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var w=(e,t,d)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,c=(e,t)=>{for(var d in t||(t={}))A.call(t,d)&&w(e,d,t[d]);if(I)for(var d of I(t))U.call(t,d)&&w(e,d,t[d]);return e},z=(e,t)=>R(e,k(t));import{_ as f,Y as $,$ as y,c as F}from"./main-601.js";const P=(e,t,d,s,l,a)=>{if(!e.dataCenter||!e.clientId||!e.clientSecret){d({dataCenter:e.dataCenter?"":f("Data center cann't be empty"),clientId:e.clientId?"":f("Client ID cann't be empty"),clientSecret:e.clientSecret?"":f("Secret key cann't be empty")});return}const i=$(y);l(!0);const n="ZohoCreator.dashboard.READ,ZohoCreator.meta.application.READ,ZohoCreator.meta.form.READ,ZohoCreator.form.CREATE,ZohoCreator.report.CREATE,ZohoCreator.report.UPDATE",o=`https://accounts.zoho.${e.dataCenter}/oauth/v2/auth?scope=${n}&response_type=code&client_id=${e.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(i.zohoRedirectURL)}`,r=window.open(o,"zohoCreator","width=400,height=609,toolbar=off"),h=setInterval(()=>{if(r.closed){clearInterval(h);let p={},_=!1;const g=localStorage.getItem("__bitforms_zohoCreator");if(g&&(_=!0,p=JSON.parse(g),localStorage.removeItem("__bitforms_zohoCreator")),!p.code||p.error||!p||!_){const m=p.error?`Cause: ${p.error}`:"";a({show:!0,msg:`${f("Authorization failed")} ${m}. ${f("please try again")}`}),l(!1)}else{const m=c({},e);m.accountServer=p["accounts-server"],b(p,m,t,s,l,a)}}},500)},b=(e,t,d,s,l,a)=>{const i=$(y),n=c({},e);n.dataCenter=t.dataCenter,n.clientId=t.clientId,n.clientSecret=t.clientSecret,n.redirectURI=encodeURIComponent(i.zohoRedirectURL),F(n,"bitforms_zcreator_generate_token").then(o=>o).then(o=>{if(o&&o.success){const r=c({},t);r.tokenDetails=o.data,d(r),s(!0),a({show:!0,msg:f("Authorized Successfully")})}else o&&o.data&&o.data.data||!o.success&&typeof o.data=="string"?a({show:!0,msg:`${f("Authorization failed Cause:")}${o.data.data||o.data}. ${f("please try again")}`}):a({show:!0,msg:f("Authorization failed. please try again")});l(!1)})},x=(e,t,d,s,l,a,i,n,o)=>{let r=c({},t);if(i){const h=c({},n);h[e.target.name]="",o(c({},h))}switch(r[e.target.name]=e.target.value,e.target.name){case"applicationId":r=q(r,s,d,l,a);break;case"formId":r=E(r,s,d,l,a);break}d(c({},r))},q=(e,t,d,s,l)=>{var i,n;const a=c({},e);return a.department="",a.field_map=[{formField:"",zohoFormField:""}],a.actions={},(n=(i=a==null?void 0:a.default)==null?void 0:i.forms)!=null&&n[a.applicationId]||v(t,a,d,s,l),a},E=(e,t,d,s,l)=>{var i,n;const a=c({},e);return a.field_map=[{formField:"",zohoFormField:""}],a.upload_field_map=[{formField:"",zohoFormField:""}],a.actions={},(n=(i=a==null?void 0:a.default)==null?void 0:i.fields)!=null&&n[a.orgId]?(a.field_map=u(a),Object.keys(a.default.fields[a.applicationId][a.formId].fileUploadFields).length>0&&(a.upload_field_map=u(a,!0))):O(t,a,d,s,l),a},j=(e,t,d,s,l)=>{s(!0);const a={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};F(a,"bitforms_zcreator_refresh_applications").then(i=>{if(i&&i.success){const n=c({},t);i.data.applications&&(n.default=z(c({},n.default),{applications:i.data.applications})),l({show:!0,msg:f("Applications refreshed")}),d(c({},n))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?l({show:!0,msg:`${f("Applications refresh failed Cause:")}${i.data.data||i.data}. ${f("please try again")}`}):l({show:!0,msg:f("Applications refresh failed. please try again")});s(!1)}).catch(()=>s(!1))},v=(e,t,d,s,l)=>{const{accountOwner:a,applicationId:i}=t;s(!0);const n={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,accountOwner:a,applicationId:i};F(n,"bitforms_zcreator_refresh_forms").then(o=>{if(o&&o.success){const r=c({},t);r.default.forms||(r.default.forms={}),o.data.forms&&(r.default.forms[i]=o.data.forms),o.data.tokenDetails&&(r.tokenDetails=o.data.tokenDetails),l({show:!0,msg:f("Forms refreshed")}),d(c({},r))}else o&&o.data&&o.data.data||!o.success&&typeof o.data=="string"?l({show:!0,msg:`${f("Forms refresh failed Cause:")}${o.data.data||o.data}. ${f("please try again")}`}):l({show:!0,msg:f("Forms refresh failed. please try again")});s(!1)}).catch(()=>s(!1))},O=(e,t,d,s,l)=>{const{accountOwner:a,applicationId:i,formId:n}=t;s(!0);const o={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,accountOwner:a,applicationId:i,formId:n};F(o,"bitforms_zcreator_refresh_fields").then(r=>{if(r&&r.success){const h=c({},t);r.data.fields?(h.default.fields||(h.default.fields={}),h.default.fields[i]||(h.default.fields[i]={}),h.default.fields[i][n]=c({},r.data),h.field_map=u(h),Object.keys(r.data.fileUploadFields).length>0&&(h.upload_field_map=u(h,!0)),r.data.tokenDetails&&(h.tokenDetails=r.data.tokenDetails),l({show:!0,msg:f("Fields refreshed")})):l({show:!0,msg:`${f("Fields refresh failed Cause:")}${r.data.data||r.data}. ${f("please try again")}`}),r.data.tokenDetails&&(h.tokenDetails=r.data.tokenDetails),d(c({},h))}else l({show:!0,msg:f("Fields refresh failed. please try again")});s(!1)}).catch(()=>s(!1))},u=(e,t)=>{const{applicationId:d,formId:s}=e;return t?e.default.fields[d][s].requiredFileUploadFields.length>0?e.default.fields[d][s].requiredFileUploadFields.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]:e.default.fields[d][s].required.length>0?e.default.fields[d][s].required.map(l=>({formField:"",zohoFormField:l})):[{formField:"",zohoFormField:""}]},M=e=>{const t=e!=null&&e.field_map?e.field_map.filter(s=>{var l,a,i,n;return!s.formField&&s.zohoFormField&&((n=(i=(a=(l=e==null?void 0:e.default)==null?void 0:l.fields)==null?void 0:a[e.applicationId])==null?void 0:i[e.formId])==null?void 0:n.required.indexOf(s.zohoFormField))!==-1}):[],d=e!=null&&e.upload_field_map?e.upload_field_map.filter(s=>{var l,a,i,n;return!s.formField&&s.zohoFormField&&((n=(i=(a=(l=e==null?void 0:e.default)==null?void 0:l.fields)==null?void 0:a[e.applicationId])==null?void 0:i[e.formId])==null?void 0:n.requiredFileUploadFields.indexOf(s.zohoFormField))!==-1}):[];return!(t.length>0||d.length>0)};export{v as a,O as b,M as c,P as d,x as h,j as r};
