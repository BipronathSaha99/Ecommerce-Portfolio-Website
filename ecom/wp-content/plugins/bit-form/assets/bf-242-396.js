var _=Object.defineProperty;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&l(e,t,a[t]);if(c)for(var t of c(a))g.call(a,t)&&l(e,t,a[t]);return e};import{_ as n,c as k}from"./main-601.js";const b=(e,a,t,d,u,o,h,s)=>{const r=i({},a),{name:m}=e.target;e.target.value!==""?r[m]=e.target.value:delete r[m],t(i({},r))},z=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.twilioField||!t.formField==="custom"&&!t.customValue):[]).length>0),F=(e,a,t,d,u,o)=>{if(!e.sid||!e.token||!e.from_num){t({sid:e.sid?"":n("Account SID can't be empty"),token:e.token?"":n("Auth Token can't be empty"),from_num:e.from_num?"":n("Phone number can't be empty")});return}t({}),u(!0);const h={sid:e.sid,token:e.token,from_num:e.from_num};k(h,"bitforms_twilio_authorization").then(s=>s).then(s=>{if(s&&s.success){const r=i({},e);r.tokenDetails=s.data,a(r),d(!0),o({show:!0,msg:n("Authorized Successfully")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?o({show:!0,msg:`${n("Authorization failed Cause:")}${s.data.data||s.data}. ${n("please try again")}`}):o({show:!0,msg:n("Authorization failed. please try again")});u(!1)})};export{F as a,z as c,b as h};
