import{j as t,a as l}from"./main-601.js";import{e as c,f as p}from"./bf-409-72.js";function u({size:i,stroke:e=2}){return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 30 30",children:[t.jsx("ellipse",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:e,cx:"15",cy:"15",rx:"12.75",ry:"12.85"}),t.jsx("path",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:e,strokeLinecap:"round",d:"M11.3,10.73v0a3.58,3.58,0,0,1,1-2.53l.25-.25a3.56,3.56,0,0,1,5,0h0a3.56,3.56,0,0,1,0,5.05l-1.43,1.43a3.85,3.85,0,0,0-1.13,2.75v2.4"}),t.jsx("line",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:e,strokeLinecap:"round",x1:"15",y1:"23.12",x2:"15",y2:"23.12"})]})}function m({className:i,children:e,width:n="auto",icnSize:s=20,tip:a=!1}){const{css:r}=l();return t.jsx(c,{animateFill:!0,plugins:[p],duration:150,theme:"material",animation:"shift-away",interactive:!0,maxWidth:n,content:t.jsx("div",{className:r(o.tipBody),children:e}),children:t.jsx("div",{role:"button",tabIndex:"0","data-tipbtn":!0,className:`${r(o.popper_icn)} ${i}`,children:a?e:t.jsx(u,{size:s})})})}const o={popper_icn:{dy:"inline-grid",placeContent:"center",cr:"var(--dp-blue-bg)",oy:.3,ml:5,":hover":{oy:1,cur:"help"}},tipBody:{fw:300,p:2}};export{m as C};
