var h=Object.defineProperty,b=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(d,e,t)=>e in d?h(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t,n=(d,e)=>{for(var t in e||(e={}))j.call(e,t)&&r(d,t,e[t]);if(a)for(var t of a(e))u.call(e,t)&&r(d,t,e[t]);return d},c=(d,e)=>b(d,p(e));import{a as m,j as l}from"./main-601.js";function C({dataList:d}){const{css:e}=m(),t=d.reduce((s,x)=>s+x.value,0),i=d.map(s=>c(n({},s),{percentage:`${(s.value/t*100).toFixed(1)}%`}));return l.jsx("div",{className:e(o.mainWrap),children:l.jsxs("table",{className:e(o.table),children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Option Label"}),l.jsx("th",{children:"Count/Value"}),l.jsx("th",{children:"%"})]})}),l.jsx("tbody",{children:i.map(s=>l.jsxs("tr",{children:[l.jsx("td",{children:s.label}),l.jsx("td",{children:s.value}),l.jsx("td",{children:s.percentage})]},s.label))})]})})}const o={mainWrap:{w:"100%",h:"100%",dy:"flex",fd:"column",jc:"space-between"},table:{b:"1px solid #ddd",borderCollapse:"collapse","& th":{bb:"1px solid #ddd"},"& td":{ta:"center",b:"1px solid #e4e4e4",bxs:"border-box",p:3},"& tr":{b:"1px solid #e4e4e4"},"& tr:nth-child(odd)>td":{bd:"#f1f1f1"}}};export{C as default};
