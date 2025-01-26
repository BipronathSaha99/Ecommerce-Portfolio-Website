var z=Object.defineProperty;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(s,e,o)=>e in s?z(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,h=(s,e)=>{for(var o in e||(e={}))R.call(e,o)&&_(s,o,e[o]);if(k)for(var o of k(e))E.call(e,o)&&_(s,o,e[o]);return s};import{_ as c,ed as g,Y as I,$ as D,c as w}from"./main-601.js";const H=(s,e,o,l,i,a)=>{if(!s.dataCenter||!s.clientId||!s.clientSecret){o({dataCenter:s.dataCenter?"":c("Data center cann't be empty"),clientId:s.clientId?"":c("Client ID cann't be empty"),clientSecret:s.clientSecret?"":c("Secret key cann't be empty")});return}if(!g(s.ownerEmail)){o({ownerEmail:g(s.ownerEmail)?"":c("Email is invalid")});return}const t=I(D);i(!0);const r="ZohoAnalytics.metadata.read,ZohoAnalytics.data.read,ZohoAnalytics.data.create,ZohoAnalytics.data.update,ZohoAnalytics.usermanagement.read,ZohoAnalytics.share.create",d=`https://accounts.zoho.${s.dataCenter}/oauth/v2/auth?scope=${r}&response_type=code&client_id=${s.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(t.zohoRedirectURL)}`,n=window.open(d,"zohoAnalytics","width=400,height=609,toolbar=off"),b=setInterval(()=>{if(n.closed){clearInterval(b);let f={},u=!1;const p=localStorage.getItem("__bitforms_zohoAnalytics");if(p&&(u=!0,f=JSON.parse(p),localStorage.removeItem("__bitforms_zohoAnalytics")),!f.code||f.error||!f||!u){const m=f.error?`Cause: ${f.error}`:"";a({show:!0,msg:`${c("Authorization failed")} ${m}. ${c("please try again")}`}),i(!1)}else{const m=h({},s);m.accountServer=f["accounts-server"],U(f,m,e,l,i,a)}}},500)},U=(s,e,o,l,i,a)=>{const t=I(D),r=h({},s);r.dataCenter=e.dataCenter,r.clientId=e.clientId,r.clientSecret=e.clientSecret,r.redirectURI=encodeURIComponent(t.zohoRedirectURL),w(r,"bitforms_zanalytics_generate_token").then(d=>d).then(d=>{if(d&&d.success){const n=h({},e);n.tokenDetails=d.data,o(n),l(!0),a({show:!0,msg:c("Authorized Successfully")})}else d&&d.data&&d.data.data||!d.success&&typeof d.data=="string"?a({show:!0,msg:`${c("Authorization failed Cause:")}${d.data.data||d.data}. ${c("please try again")}`}):a({show:!0,msg:c("Authorization failed. please try again")});i(!1)})},P=(s,e,o,l,i,a)=>{let t=h({},e);const{name:r,value:d}=s.target;switch(t[r]=d,r){case"workspace":t=A(t,l,o,i,a);break;case"table":t=v(t,l,o,i,a);break}o(h({},t))},A=(s,e,o,l,i)=>{var t,r,d,n,b,f,u,p,m;const a=h({},s);return a.table="",a.field_map=[{formField:"",zohoFormField:""}],(r=(t=a==null?void 0:a.default)==null?void 0:t.tables)!=null&&r[s.workspace]?Object.keys((n=(d=a==null?void 0:a.default)==null?void 0:d.tables)==null?void 0:n[s.workspace]).length===1&&(a.table=(f=(b=a==null?void 0:a.default)==null?void 0:b.tables)==null?void 0:f[s.workspace][0].viewName,(m=(p=(u=a==null?void 0:a.default)==null?void 0:u.tables)==null?void 0:p.headers)!=null&&m[a.table]||$(e,a,o,l,i)):F(e,a,o,l,i),s.default.users||Z(e,s,o,l,i),a},v=(s,e,o,l,i)=>{var t,r,d;const a=h({},s);return a.field_map=[{formField:"",zohoFormField:""}],(d=(r=(t=a==null?void 0:a.default)==null?void 0:t.tables)==null?void 0:r.headers)!=null&&d[s.table]||$(e,a,o,l,i),a},W=(s,e,o,l,i)=>{l(!0);const a={formID:s,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};w(a,"bitforms_zanalytics_refresh_workspaces").then(t=>{if(t&&t.success){const r=h({},e);r.default||(r.default={}),t.data.workspaces&&(r.default.workspaces=t.data.workspaces),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),i({show:!0,msg:c("Workspaces refreshed")}),o(h({},r))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?i({show:!0,msg:`${c("Workspaces refresh failed Cause:")}${t.data.data||t.data}. ${c("please try again")}`}):i({show:!0,msg:c("Workspaces refresh failed. please try again")});l(!1)}).catch(()=>l(!1))},Z=(s,e,o,l,i)=>{l(!0);const a={formID:s,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};w(a,"bitforms_zanalytics_refresh_users").then(t=>{if(t&&t.success){const r=h({},e);r.default||(r.default={}),t.data.users&&(r.default.users=t.data.users),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),i({show:!0,msg:c("Users refreshed")}),o(h({},r))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?i({show:!0,msg:`${c("Users refresh failed Cause:")}${t.data.data||t.data}. ${c("please try again")}`}):i({show:!0,msg:c("Users refresh failed. please try again")});l(!1)}).catch(()=>l(!1))},F=(s,e,o,l,i)=>{const{workspace:a}=e;if(!a)return;l(!0);const t={formID:s,workspace:a,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};w(t,"bitforms_zanalytics_refresh_tables").then(r=>{if(r&&r.success){const d=h({},e);r.data.tables&&(d.default.tables||(d.default.tables={}),d.default.tables[a]=r.data.tables),r.data.tokenDetails&&(d.tokenDetails=r.data.tokenDetails),i({show:!0,msg:c("Tables refreshed")}),o(h({},d))}else i({show:!0,msg:c("Tables refresh failed. please try again")});l(!1)}).catch(()=>l(!1))},$=(s,e,o,l,i)=>{const{workspace:a,table:t}=e;if(!t)return;l(!0);const r={formID:s,workspace:a,table:t,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};w(r,"bitforms_zanalytics_refresh_table_headers").then(d=>{if(d&&d.success){const n=h({},e);d.data.table_headers?(n.default.tables.headers||(n.default.tables.headers={}),n.default.tables.headers[t]=d.data.table_headers,i({show:!0,msg:c("Table Headers refreshed")})):i({show:!0,msg:c("Zoho didn't provide column names for this table")}),d.data.tokenDetails&&(n.tokenDetails=d.data.tokenDetails),o(h({},n))}else i({show:!0,msg:c("Table Headers refresh failed. please try again")});l(!1)}).catch(()=>l(!1))};export{F as a,$ as b,H as c,P as h,W as r};
