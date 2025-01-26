import{j as s,v as p,a9 as u,aI as v,w as z,aT as w,bX as g,_ as f,cX as b,cM as F,cN as m,cn as N,cO as C,cT as k,a as y}from"./main-601.js";import{q as M,r as S,T as D,a as L,C as R,R as T,N as $,D as P,c as B,U as G,d as O,e as U,M as W,W as E,f as H,g as _,G as X,B as q,o as A,k as V,m as J,n as Q,l as Y,b as Z,P as K,F as ss,p as es,i as is,j as ns,I as ts,h as as,S as cs}from"./bf-403-132.js";import{C as rs}from"./bf-833-79.js";import{D as os}from"./bf-113-133.js";import{R as ls}from"./bf-263-78.js";import{U as ds}from"./bf-119-128.js";function xs({w:i}){return s.jsxs("svg",{className:"btc-line-icn",viewBox:"0 0 172.3 163.8",width:i,children:[s.jsx("path",{className:"line-icn",d:`M146.6,150.5h-118c-11.4,0-20.7-9.3-20.7-20.7V28.7C8,17.3,17.3,8,28.7,8h118c11.4,0,20.7,9.3,20.7,20.7v101.1
          C167.3,141.2,158.1,150.5,146.6,150.5z`}),s.jsx("path",{className:"line-icn",strokeWidth:"12",d:"M31.5,106.2l34-47.6c2.1-3,6.5-3.1,8.8-0.2l31.4,39.5"}),s.jsx("path",{className:"line-icn",strokeWidth:"12",d:"M93.2,86l12.8-15.1c2.1-3,6.5-3.1,8.8-0.2l31.4,39.5"}),s.jsx("path",{className:"line-icn",strokeWidth:"9",d:`M126,38.3L126,38.3c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h0c2.1,0,3.8,1.7,3.8,3.8v0
          C129.8,36.6,128.1,38.3,126,38.3z`})]})}function js({icn:i,title:t,subTitle:a,fieldKey:e}){const{formType:n,formID:o}=p(),r=u(v),l=z(),c=w(`.${e}-fld-wrp.drag`),h=()=>{r(e),c&&c.classList.remove("drag-hover"),l(`/form/builder/${n}/${o}/field-settings/${e}`)},x=I=>{if(!c)return;const{type:j}=I;j==="mouseenter"?c.classList.add("drag-hover"):j==="mouseleave"&&c.classList.remove("drag-hover")};return s.jsx("button",{type:"button","data-testid":`fld-lst-itm-${i}-${e}`,onClick:h,onMouseEnter:x,onMouseLeave:x,className:"btc-s-l mt-2",children:s.jsxs("div",{className:"flx flx-between ",children:[s.jsxs("div",{className:"flx w-9",children:[s.jsx("span",{className:"lft-icn mr-2 flx br-50",children:typeof i=="string"?ms(i):i}),s.jsxs("div",{className:"w-nwrp o-h",children:[s.jsx("div",{className:"txt-o o-h mb-1",children:g(t)}),a&&s.jsxs("small",{children:[f("Key:"),` ${a}`]})]})]}),s.jsx(b,{size:18})]})})}const ms=i=>({title:s.jsx(M,{w:"14"}),divider:s.jsx(S,{w:"14"}),image:s.jsx(xs,{w:"14"}),text:s.jsx(D,{size:"14"}),username:s.jsx(ds,{size:"14"}),textarea:s.jsx(L,{size:"14"}),check:s.jsx(R,{w:"14"}),radio:s.jsx(T,{size:"14"}),number:s.jsx($,{w:"14"}),"html-select":s.jsx(rs,{size:"14"}),select:s.jsx(P,{w:"14"}),password:s.jsx(B,{size:"14"}),email:s.jsx(F,{size:"14"}),url:s.jsx(G,{w:"14"}),"file-up":s.jsx(m,{w:"14"}),date:s.jsx(os,{w:"14"}),time:s.jsx(O,{size:"14"}),"datetime-local":s.jsx(U,{w:"14"}),month:s.jsx(W,{w:"14"}),week:s.jsx(E,{size:"14"}),color:s.jsx(H,{w:"14"}),recaptcha:s.jsx(ls,{size:"14"}),"decision-box":s.jsx(_,{size:"14"}),gdpr:s.jsx(X,{size:"14"}),button:s.jsx(q,{size:"14"}),html:s.jsx(N,{size:"14"}),shortcode:s.jsx(A,{size:"14"}),paypal:s.jsx(V,{w:"14"}),stripe:s.jsx(J,{size:"18"}),mollie:s.jsx(Q,{size:"18"}),razorpay:s.jsx(Y,{w:"14",h:"19"}),"advanced-file-up":s.jsx(m,{w:"14"}),currency:s.jsx(Z,{size:"15"}),"phone-number":s.jsx(K,{size:"15"}),country:s.jsx(ss,{size:"14"}),section:s.jsx(es,{size:"14"}),repeater:s.jsx(is,{size:"14"}),rating:s.jsx(C,{size:"18"}),signature:s.jsx(ns,{size:"18"}),"image-select":s.jsx(ts,{size:"16"}),turnstile:s.jsx(as,{size:"16"}),range:s.jsx(cs,{size:"16"})})[i];function d(){const i=k(),t=Object.entries(i).filter(([,e])=>{var n;return(n=e==null?void 0:e.valid)==null?void 0:n.hide}),a=Object.entries(i).filter(([,e])=>{var n;return!((n=e==null?void 0:e.valid)!=null&&n.hide)});return s.jsxs(s.Fragment,{children:[s.jsx(d.Group,{title:`Hidden Fields (${t.length})`,filteredFields:t}),s.jsx(d.Group,{title:`Fields (${a.length})`,filteredFields:a})]})}const hs=({title:i,filteredFields:t})=>{const{css:a}=y();return t.length?s.jsxs("div",{children:[s.jsx("div",{className:a(Is.title),children:i}),t.map(([e,n])=>{let{lbl:o}=n;const{typ:r,adminLbl:l,txt:c}=n;return["decision-box","gdpr"].includes(r)?o=l:r==="button"&&(o=c),s.jsx(js,{fieldKey:e,icn:r,title:o||l||r,subTitle:e},e)})]}):s.jsx(s.Fragment,{children:" "})};d.Group=hs;const Is={title:{fw:500,fs:16,mx:8,pn:"sticky",pt:14,tp:0,bd:"var(--white)",h:40}};export{d as default};
