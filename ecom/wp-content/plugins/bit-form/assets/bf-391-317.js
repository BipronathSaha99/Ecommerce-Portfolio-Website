import{j as Rt}from"./main-601.js";import{_ as Z,ao as Mt,aa as Y,a9 as rt,K as Ft,ap as Ht,aq as Bt,u as K,q as Ut,o as Lt,x as ot,ar as Wt,as as $t,j as ut,w as kt,at as wt,v as it,$ as J,au as vt,av as Xt,aw as Zt,ax as jt,T as st,ay as Q,h as Et,az as X,P as qt,aA as ht,aB as Tt,aC as ft,aD as ct,d as mt,t as gt,aE as pt,C as x,aF as yt,a3 as tt,Z as Jt,aG as Kt,aH as Qt,aI as Yt,f as Ct,aJ as xt,S as bt,aK as te,aL as ee,aM as ae,aN as re,aO as ie,aP as ne,ah as oe,ai as se,ag as le,aj as ue,ak as ve,al as he,am as fe}from"./bf-48-86.js";import"./bf-409-72.js";import"./bf-753-130.js";import"./bf-443-82.js";import"./bf-548-69.js";import"./bf-635-81.js";var ce=function(s){Z(e,s);function e(){var t=s!==null&&s.apply(this,arguments)||this;return t.type=e.type,t.hasSymbolVisual=!0,t}return e.prototype.getInitialData=function(t){return Mt(null,this,{useEncodeDefaulter:!0})},e.prototype.getLegendIcon=function(t){var a=new Y,o=rt("line",0,t.itemHeight/2,t.itemWidth,0,t.lineStyle.stroke,!1);a.add(o),o.setStyle(t.lineStyle);var r=this.getData().getVisual("symbol"),i=this.getData().getVisual("symbolRotate"),n=r==="none"?"circle":r,u=t.itemHeight*.8,l=rt(n,(t.itemWidth-u)/2,(t.itemHeight-u)/2,u,u,t.itemStyle.fill);a.add(l),l.setStyle(t.itemStyle);var c=t.iconRotate==="inherit"?i:t.iconRotate||0;return l.rotation=c*Math.PI/180,l.setOrigin([t.itemWidth/2,t.itemHeight/2]),n.indexOf("empty")>-1&&(l.style.stroke=l.style.fill,l.style.fill="#fff",l.style.lineWidth=2),a},e.type="series.line",e.dependencies=["grid","polar"],e.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},e}(Ft),me=ce,ge=function(s){Z(e,s);function e(t,a,o,r){var i=s.call(this)||this;return i.updateData(t,a,o,r),i}return e.prototype._createSymbol=function(t,a,o,r,i){this.removeAll();var n=rt(t,-1,-1,2,2,null,i);n.attr({z2:100,culling:!0,scaleX:r[0]/2,scaleY:r[1]/2}),n.drift=pe,this._symbolType=t,this.add(n)},e.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},e.prototype.getSymbolType=function(){return this._symbolType},e.prototype.getSymbolPath=function(){return this.childAt(0)},e.prototype.highlight=function(){Ht(this.childAt(0))},e.prototype.downplay=function(){Bt(this.childAt(0))},e.prototype.setZ=function(t,a){var o=this.childAt(0);o.zlevel=t,o.z=a},e.prototype.setDraggable=function(t,a){var o=this.childAt(0);o.draggable=t,o.cursor=!a&&t?"move":o.cursor},e.prototype.updateData=function(t,a,o,r){this.silent=!1;var i=t.getItemVisual(a,"symbol")||"circle",n=t.hostModel,u=e.getSymbolSize(t,a),l=i!==this._symbolType,c=r&&r.disableAnimation;if(l){var v=t.getItemVisual(a,"symbolKeepAspect");this._createSymbol(i,t,a,u,v)}else{var f=this.childAt(0);f.silent=!1;var h={scaleX:u[0]/2,scaleY:u[1]/2};c?f.attr(h):K(f,h,n,a),Ut(f)}if(this._updateCommon(t,a,u,o,r),l){var f=this.childAt(0);if(!c){var h={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:f.style.opacity}};f.scaleX=f.scaleY=0,f.style.opacity=0,Lt(f,h,n,a)}}c&&this.childAt(0).stopAnimation("leave")},e.prototype._updateCommon=function(t,a,o,r,i){var n=this.childAt(0),u=t.hostModel,l,c,v,f,h,p,y,b,m;if(r&&(l=r.emphasisItemStyle,c=r.blurItemStyle,v=r.selectItemStyle,f=r.focus,h=r.blurScope,y=r.labelStatesModels,b=r.hoverScale,m=r.cursorStyle,p=r.emphasisDisabled),!r||t.hasItemOption){var g=r&&r.itemModel?r.itemModel:t.getItemModel(a),d=g.getModel("emphasis");l=d.getModel("itemStyle").getItemStyle(),v=g.getModel(["select","itemStyle"]).getItemStyle(),c=g.getModel(["blur","itemStyle"]).getItemStyle(),f=d.get("focus"),h=d.get("blurScope"),p=d.get("disabled"),y=ot(g),b=d.getShallow("scale"),m=g.getShallow("cursor")}var P=t.getItemVisual(a,"symbolRotate");n.attr("rotation",(P||0)*Math.PI/180||0);var I=Wt(t.getItemVisual(a,"symbolOffset"),o);I&&(n.x=I[0],n.y=I[1]),m&&n.attr("cursor",m);var S=t.getItemVisual(a,"style"),_=S.fill;if(n instanceof $t){var A=n.style;n.useStyle(ut({image:A.image,x:A.x,y:A.y,width:A.width,height:A.height},S))}else n.__isEmptyBrush?n.useStyle(ut({},S)):n.useStyle(S),n.style.decal=null,n.setColor(_,i&&i.symbolInnerColor),n.style.strokeNoScale=!0;var L=t.getItemVisual(a,"liftZ"),k=this._z2;L!=null?k==null&&(this._z2=n.z2,n.z2+=L):k!=null&&(n.z2=k,this._z2=null);var w=i&&i.useNameLabel;kt(n,y,{labelFetcher:u,labelDataIndex:a,defaultText:D,inheritColor:_,defaultOpacity:S.opacity});function D(G){return w?t.getName(G):wt(t,G)}this._sizeX=o[0]/2,this._sizeY=o[1]/2;var E=n.ensureState("emphasis");E.style=l,n.ensureState("select").style=v,n.ensureState("blur").style=c;var z=b==null||b===!0?Math.max(1.1,3/this._sizeY):isFinite(b)&&b>0?+b:1;E.scaleX=this._sizeX*z,E.scaleY=this._sizeY*z,this.setSymbolScale(1),it(this,f,h,p)},e.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},e.prototype.fadeOut=function(t,a,o){var r=this.childAt(0),i=J(this).dataIndex,n=o&&o.animation;if(this.silent=r.silent=!0,o&&o.fadeLabel){var u=r.getTextContent();u&&vt(u,{style:{opacity:0}},a,{dataIndex:i,removeOpt:n,cb:function(){r.removeTextContent()}})}else r.removeTextContent();vt(r,{style:{opacity:0},scaleX:0,scaleY:0},a,{dataIndex:i,cb:t,removeOpt:n})},e.getSymbolSize=function(t,a){return Xt(t.getItemVisual(a,"symbolSize"))},e}(Y);function pe(s,e){this.parent.drift(s,e)}var lt=ge;function et(s,e,t,a){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(a.isIgnore&&a.isIgnore(t))&&!(a.clipShape&&!a.clipShape.contain(e[0],e[1]))&&s.getItemVisual(t,"symbol")!=="none"}function dt(s){return s!=null&&!jt(s)&&(s={isIgnore:s}),s||{}}function St(s){var e=s.hostModel,t=e.getModel("emphasis");return{emphasisItemStyle:t.getModel("itemStyle").getItemStyle(),blurItemStyle:e.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:e.getModel(["select","itemStyle"]).getItemStyle(),focus:t.get("focus"),blurScope:t.get("blurScope"),emphasisDisabled:t.get("disabled"),hoverScale:t.get("scale"),labelStatesModels:ot(e),cursorStyle:e.get("cursor")}}var ye=function(){function s(e){this.group=new Y,this._SymbolCtor=e||lt}return s.prototype.updateData=function(e,t){this._progressiveEls=null,t=dt(t);var a=this.group,o=e.hostModel,r=this._data,i=this._SymbolCtor,n=t.disableAnimation,u=St(e),l={disableAnimation:n},c=t.getSymbolPoint||function(v){return e.getItemLayout(v)};r||a.removeAll(),e.diff(r).add(function(v){var f=c(v);if(et(e,f,v,t)){var h=new i(e,v,u,l);h.setPosition(f),e.setItemGraphicEl(v,h),a.add(h)}}).update(function(v,f){var h=r.getItemGraphicEl(f),p=c(v);if(!et(e,p,v,t)){a.remove(h);return}var y=e.getItemVisual(v,"symbol")||"circle",b=h&&h.getSymbolType&&h.getSymbolType();if(!h||b&&b!==y)a.remove(h),h=new i(e,v,u,l),h.setPosition(p);else{h.updateData(e,v,u,l);var m={x:p[0],y:p[1]};n?h.attr(m):K(h,m,o)}a.add(h),e.setItemGraphicEl(v,h)}).remove(function(v){var f=r.getItemGraphicEl(v);f&&f.fadeOut(function(){a.remove(f)},o)}).execute(),this._getSymbolPoint=c,this._data=e},s.prototype.updateLayout=function(){var e=this,t=this._data;t&&t.eachItemGraphicEl(function(a,o){var r=e._getSymbolPoint(o);a.setPosition(r),a.markRedraw()})},s.prototype.incrementalPrepareUpdate=function(e){this._seriesScope=St(e),this._data=null,this.group.removeAll()},s.prototype.incrementalUpdate=function(e,t,a){this._progressiveEls=[],a=dt(a);function o(u){u.isGroup||(u.incremental=!0,u.ensureState("emphasis").hoverLayer=!0)}for(var r=e.start;r<e.end;r++){var i=t.getItemLayout(r);if(et(t,i,r,a)){var n=new this._SymbolCtor(t,r,this._seriesScope);n.traverse(o),n.setPosition(i),this.group.add(n),t.setItemGraphicEl(r,n),this._progressiveEls.push(n)}}},s.prototype.eachRendered=function(e){Zt(this._progressiveEls||this.group,e)},s.prototype.remove=function(e){var t=this.group,a=this._data;a&&e?a.eachItemGraphicEl(function(o){o.fadeOut(function(){t.remove(o)},a.hostModel)}):t.removeAll()},s}(),be=ye;function Nt(s,e,t){var a=s.getBaseAxis(),o=s.getOtherAxis(a),r=de(o,t),i=a.dim,n=o.dim,u=e.mapDimension(n),l=e.mapDimension(i),c=n==="x"||n==="radius"?1:0,v=st(s.dimensions,function(p){return e.mapDimension(p)}),f=!1,h=e.getCalculationInfo("stackResultDimension");return Q(e,v[0])&&(f=!0,v[0]=h),Q(e,v[1])&&(f=!0,v[1]=h),{dataDimsForPoint:v,valueStart:r,valueAxisDim:n,baseAxisDim:i,stacked:!!f,valueDim:u,baseDim:l,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function de(s,e){var t=0,a=s.scale.getExtent();return e==="start"?t=a[0]:e==="end"?t=a[1]:Et(e)&&!isNaN(e)?t=e:a[0]>0?t=a[0]:a[1]<0&&(t=a[1]),t}function Ot(s,e,t,a){var o=NaN;s.stacked&&(o=t.get(t.getCalculationInfo("stackedOverDimension"),a)),isNaN(o)&&(o=s.valueStart);var r=s.baseDataOffset,i=[];return i[r]=t.get(s.baseDim,a),i[1-r]=o,e.dataToPoint(i)}function Se(s,e){var t=[];return e.diff(s).add(function(a){t.push({cmd:"+",idx:a})}).update(function(a,o){t.push({cmd:"=",idx:o,idx1:a})}).remove(function(a){t.push({cmd:"-",idx:a})}).execute(),t}function _e(s,e,t,a,o,r,i,n){for(var u=Se(s,e),l=[],c=[],v=[],f=[],h=[],p=[],y=[],b=Nt(o,e,i),m=s.getLayout("points")||[],g=e.getLayout("points")||[],d=0;d<u.length;d++){var P=u[d],I=!0,S=void 0,_=void 0;switch(P.cmd){case"=":S=P.idx*2,_=P.idx1*2;var A=m[S],L=m[S+1],k=g[_],w=g[_+1];(isNaN(A)||isNaN(L))&&(A=k,L=w),l.push(A,L),c.push(k,w),v.push(t[S],t[S+1]),f.push(a[_],a[_+1]),y.push(e.getRawIndex(P.idx1));break;case"+":var D=P.idx,E=b.dataDimsForPoint,z=o.dataToPoint([e.get(E[0],D),e.get(E[1],D)]);_=D*2,l.push(z[0],z[1]),c.push(g[_],g[_+1]);var G=Ot(b,o,e,D);v.push(G[0],G[1]),f.push(a[_],a[_+1]),y.push(e.getRawIndex(D));break;case"-":I=!1}I&&(h.push(P),p.push(p.length))}p.sort(function(q,O){return y[q]-y[O]});for(var N=l.length,M=X(N),C=X(N),T=X(N),F=X(N),H=[],d=0;d<p.length;d++){var j=p[d],V=d*2,R=j*2;M[V]=l[R],M[V+1]=l[R+1],C[V]=c[R],C[V+1]=c[R+1],T[V]=v[R],T[V+1]=v[R+1],F[V]=f[R],F[V+1]=f[R+1],H[d]=h[j]}return{current:M,next:C,stackedOnCurrent:T,stackedOnNext:F,status:H}}var B=Math.min,U=Math.max;function $(s,e){return isNaN(s)||isNaN(e)}function nt(s,e,t,a,o,r,i,n,u){for(var l,c,v,f,h,p,y=t,b=0;b<a;b++){var m=e[y*2],g=e[y*2+1];if(y>=o||y<0)break;if($(m,g)){if(u){y+=r;continue}break}if(y===t)s[r>0?"moveTo":"lineTo"](m,g),v=m,f=g;else{var d=m-l,P=g-c;if(d*d+P*P<.5){y+=r;continue}if(i>0){for(var I=y+r,S=e[I*2],_=e[I*2+1];S===m&&_===g&&b<a;)b++,I+=r,y+=r,S=e[I*2],_=e[I*2+1],m=e[y*2],g=e[y*2+1],d=m-l,P=g-c;var A=b+1;if(u)for(;$(S,_)&&A<a;)A++,I+=r,S=e[I*2],_=e[I*2+1];var L=.5,k=0,w=0,D=void 0,E=void 0;if(A>=a||$(S,_))h=m,p=g;else{k=S-l,w=_-c;var z=m-l,G=S-m,N=g-c,M=_-g,C=void 0,T=void 0;if(n==="x"){C=Math.abs(z),T=Math.abs(G);var F=k>0?1:-1;h=m-F*C*i,p=g,D=m+F*T*i,E=g}else if(n==="y"){C=Math.abs(N),T=Math.abs(M);var H=w>0?1:-1;h=m,p=g-H*C*i,D=m,E=g+H*T*i}else C=Math.sqrt(z*z+N*N),T=Math.sqrt(G*G+M*M),L=T/(T+C),h=m-k*i*(1-L),p=g-w*i*(1-L),D=m+k*i*L,E=g+w*i*L,D=B(D,U(S,m)),E=B(E,U(_,g)),D=U(D,B(S,m)),E=U(E,B(_,g)),k=D-m,w=E-g,h=m-k*C/T,p=g-w*C/T,h=B(h,U(l,m)),p=B(p,U(c,g)),h=U(h,B(l,m)),p=U(p,B(c,g)),k=m-h,w=g-p,D=m+k*T/C,E=g+w*T/C}s.bezierCurveTo(v,f,h,p,m,g),v=D,f=E}else s.lineTo(m,g)}l=m,c=g,y+=r}return b}var zt=function(){function s(){this.smooth=0,this.smoothConstraint=!0}return s}(),De=function(s){Z(e,s);function e(t){var a=s.call(this,t)||this;return a.type="ec-polyline",a}return e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new zt},e.prototype.buildPath=function(t,a){var o=a.points,r=0,i=o.length/2;if(a.connectNulls){for(;i>0&&$(o[i*2-2],o[i*2-1]);i--);for(;r<i&&$(o[r*2],o[r*2+1]);r++);}for(;r<i;)r+=nt(t,o,r,i,i,1,a.smooth,a.smoothMonotone,a.connectNulls)+1},e.prototype.getPointOn=function(t,a){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var o=this.path,r=o.data,i=qt.CMD,n,u,l=a==="x",c=[],v=0;v<r.length;){var f=r[v++],h=void 0,p=void 0,y=void 0,b=void 0,m=void 0,g=void 0,d=void 0;switch(f){case i.M:n=r[v++],u=r[v++];break;case i.L:if(h=r[v++],p=r[v++],d=l?(t-n)/(h-n):(t-u)/(p-u),d<=1&&d>=0){var P=l?(p-u)*d+u:(h-n)*d+n;return l?[t,P]:[P,t]}n=h,u=p;break;case i.C:h=r[v++],p=r[v++],y=r[v++],b=r[v++],m=r[v++],g=r[v++];var I=l?ht(n,h,y,m,t,c):ht(u,p,b,g,t,c);if(I>0)for(var S=0;S<I;S++){var _=c[S];if(_<=1&&_>=0){var P=l?ft(u,p,b,g,_):ft(n,h,y,m,_);return l?[t,P]:[P,t]}}n=m,u=g;break}}},e}(Tt),Pe=function(s){Z(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e}(zt),Ie=function(s){Z(e,s);function e(t){var a=s.call(this,t)||this;return a.type="ec-polygon",a}return e.prototype.getDefaultShape=function(){return new Pe},e.prototype.buildPath=function(t,a){var o=a.points,r=a.stackedOnPoints,i=0,n=o.length/2,u=a.smoothMonotone;if(a.connectNulls){for(;n>0&&$(o[n*2-2],o[n*2-1]);n--);for(;i<n&&$(o[i*2],o[i*2+1]);i++);}for(;i<n;){var l=nt(t,o,i,n,n,1,a.smooth,u,a.connectNulls);nt(t,r,i+l-1,l,n,-1,a.stackedOnSmooth,u,a.connectNulls),i+=l+1,t.closePath()}},e}(Tt);function _t(s,e){if(s.length===e.length){for(var t=0;t<s.length;t++)if(s[t]!==e[t])return;return!0}}function Dt(s){for(var e=1/0,t=1/0,a=-1/0,o=-1/0,r=0;r<s.length;){var i=s[r++],n=s[r++];isNaN(i)||(e=Math.min(i,e),a=Math.max(i,a)),isNaN(n)||(t=Math.min(n,t),o=Math.max(n,o))}return[[e,t],[a,o]]}function Pt(s,e){var t=Dt(s),a=t[0],o=t[1],r=Dt(e),i=r[0],n=r[1];return Math.max(Math.abs(a[0]-i[0]),Math.abs(a[1]-i[1]),Math.abs(o[0]-n[0]),Math.abs(o[1]-n[1]))}function It(s){return Et(s)?s:s?.5:0}function Ae(s,e,t){if(!t.valueDim)return[];for(var a=e.count(),o=X(a*2),r=0;r<a;r++){var i=Ot(t,s,e,r);o[r*2]=i[0],o[r*2+1]=i[1]}return o}function W(s,e,t,a){var o=e.getBaseAxis(),r=o.dim==="x"||o.dim==="radius"?0:1,i=[],n=0,u=[],l=[],c=[],v=[];if(a){for(n=0;n<s.length;n+=2)!isNaN(s[n])&&!isNaN(s[n+1])&&v.push(s[n],s[n+1]);s=v}for(n=0;n<s.length-2;n+=2)switch(c[0]=s[n+2],c[1]=s[n+3],l[0]=s[n],l[1]=s[n+1],i.push(l[0],l[1]),t){case"end":u[r]=c[r],u[1-r]=l[1-r],i.push(u[0],u[1]);break;case"middle":var f=(l[r]+c[r])/2,h=[];u[r]=h[r]=f,u[1-r]=l[1-r],h[1-r]=c[1-r],i.push(u[0],u[1]),i.push(h[0],h[1]);break;default:u[r]=l[r],u[1-r]=c[1-r],i.push(u[0],u[1])}return i.push(s[n++],s[n++]),i}function Le(s,e){var t=[],a=s.length,o,r;function i(c,v,f){var h=c.coord,p=(f-h)/(v.coord-h),y=re(p,[c.color,v.color]);return{coord:f,color:y}}for(var n=0;n<a;n++){var u=s[n],l=u.coord;if(l<0)o=u;else if(l>e){r?t.push(i(r,u,e)):o&&t.push(i(o,u,0),i(o,u,e));break}else o&&(t.push(i(o,u,0)),o=null),t.push(u),r=u}return t}function ke(s,e,t){var a=s.getVisual("visualMeta");if(!(!a||!a.length||!s.count())&&e.type==="cartesian2d"){for(var o,r,i=a.length-1;i>=0;i--){var n=s.getDimensionInfo(a[i].dimension);if(o=n&&n.coordDim,o==="x"||o==="y"){r=a[i];break}}if(r){var u=e.getAxis(o),l=st(r.stops,function(d){return{coord:u.toGlobalCoord(u.dataToCoord(d.value)),color:d.color}}),c=l.length,v=r.outerColors.slice();c&&l[0].coord>l[c-1].coord&&(l.reverse(),v.reverse());var f=Le(l,o==="x"?t.getWidth():t.getHeight()),h=f.length;if(!h&&c)return l[0].coord<0?v[1]?v[1]:l[c-1].color:v[0]?v[0]:l[0].color;var p=10,y=f[0].coord-p,b=f[h-1].coord+p,m=b-y;if(m<.001)return"transparent";Ct(f,function(d){d.offset=(d.coord-y)/m}),f.push({offset:h?f[h-1].offset:.5,color:v[1]||"transparent"}),f.unshift({offset:h?f[0].offset:.5,color:v[0]||"transparent"});var g=new xt(0,0,0,0,f,!0);return g[o]=y,g[o+"2"]=b,g}}}function we(s,e,t){var a=s.get("showAllSymbol"),o=a==="auto";if(!(a&&!o)){var r=t.getAxesByScale("ordinal")[0];if(r&&!(o&&Ee(r,e))){var i=e.mapDimension(r.dim),n={};return Ct(r.getViewLabels(),function(u){var l=r.scale.getRawOrdinalNumber(u.tickValue);n[l]=1}),function(u){return!n.hasOwnProperty(e.get(i,u))}}}}function Ee(s,e){var t=s.getExtent(),a=Math.abs(t[1]-t[0])/s.scale.count();isNaN(a)&&(a=0);for(var o=e.count(),r=Math.max(1,Math.round(o/5)),i=0;i<o;i+=r)if(lt.getSymbolSize(e,i)[s.isHorizontal()?1:0]*1.5>a)return!1;return!0}function Te(s,e){return isNaN(s)||isNaN(e)}function Ce(s){for(var e=s.length/2;e>0&&Te(s[e*2-2],s[e*2-1]);e--);return e-1}function At(s,e){return[s[e*2],s[e*2+1]]}function Ne(s,e,t){for(var a=s.length/2,o=t==="x"?0:1,r,i,n=0,u=-1,l=0;l<a;l++)if(i=s[l*2+o],!(isNaN(i)||isNaN(s[l*2+1-o]))){if(l===0){r=i;continue}if(r<=e&&i>=e||r>=e&&i<=e){u=l;break}n=l,r=i}return{range:[n,u],t:(e-r)/(i-r)}}function Gt(s){if(s.get(["endLabel","show"]))return!0;for(var e=0;e<bt.length;e++)if(s.get([bt[e],"endLabel","show"]))return!0;return!1}function at(s,e,t,a){if(te(e,"cartesian2d")){var o=a.getModel("endLabel"),r=o.get("valueAnimation"),i=a.getData(),n={lastFrameIndex:0},u=Gt(a)?function(h,p){s._endLabelOnDuring(h,p,i,n,r,o,e)}:null,l=e.getBaseAxis().isHorizontal(),c=ee(e,t,a,function(){var h=s._endLabel;h&&t&&n.originalX!=null&&h.attr({x:n.originalX,y:n.originalY})},u);if(!a.get("clip",!0)){var v=c.shape,f=Math.max(v.width,v.height);l?(v.y-=f,v.height+=f*2):(v.x-=f,v.width+=f*2)}return u&&u(1,c),c}else return ae(e,t,a)}function Oe(s,e){var t=e.getBaseAxis(),a=t.isHorizontal(),o=t.inverse,r=a?o?"right":"left":"center",i=a?"middle":o?"top":"bottom";return{normal:{align:s.get("align")||r,verticalAlign:s.get("verticalAlign")||i}}}var ze=function(s){Z(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.init=function(){var t=new Y,a=new be;this.group.add(a.group),this._symbolDraw=a,this._lineGroup=t},e.prototype.render=function(t,a,o){var r=this,i=t.coordinateSystem,n=this.group,u=t.getData(),l=t.getModel("lineStyle"),c=t.getModel("areaStyle"),v=u.getLayout("points")||[],f=i.type==="polar",h=this._coordSys,p=this._symbolDraw,y=this._polyline,b=this._polygon,m=this._lineGroup,g=!a.ssr&&t.get("animation"),d=!c.isEmpty(),P=c.get("origin"),I=Nt(i,u,P),S=d&&Ae(i,u,I),_=t.get("showSymbol"),A=t.get("connectNulls"),L=_&&!f&&we(t,u,i),k=this._data;k&&k.eachItemGraphicEl(function(O,Vt){O.__temp&&(n.remove(O),k.setItemGraphicEl(Vt,null))}),_||p.remove(),n.add(m);var w=f?!1:t.get("step"),D;i&&i.getArea&&t.get("clip",!0)&&(D=i.getArea(),D.width!=null?(D.x-=.1,D.y-=.1,D.width+=.2,D.height+=.2):D.r0&&(D.r0-=.5,D.r+=.5)),this._clipShapeForSymbol=D;var E=ke(u,i,o)||u.getVisual("style")[u.getVisual("drawType")];if(!(y&&h.type===i.type&&w===this._step))_&&p.updateData(u,{isIgnore:L,clipShape:D,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),g&&this._initSymbolLabelAnimation(u,i,D),w&&(v=W(v,i,w,A),S&&(S=W(S,i,w,A))),y=this._newPolyline(v),d?b=this._newPolygon(v,S):b&&(m.remove(b),b=this._polygon=null),f||this._initOrUpdateEndLabel(t,i,ct(E)),m.setClipPath(at(this,i,!0,t));else{d&&!b?b=this._newPolygon(v,S):b&&!d&&(m.remove(b),b=this._polygon=null),f||this._initOrUpdateEndLabel(t,i,ct(E));var z=m.getClipPath();if(z){var G=at(this,i,!1,t);Lt(z,{shape:G.shape},t)}else m.setClipPath(at(this,i,!0,t));_&&p.updateData(u,{isIgnore:L,clipShape:D,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),(!_t(this._stackedOnPoints,S)||!_t(this._points,v))&&(g?this._doUpdateAnimation(u,S,i,o,w,P,A):(w&&(v=W(v,i,w,A),S&&(S=W(S,i,w,A))),y.setShape({points:v}),b&&b.setShape({points:v,stackedOnPoints:S})))}var N=t.getModel("emphasis"),M=N.get("focus"),C=N.get("blurScope"),T=N.get("disabled");if(y.useStyle(mt(l.getLineStyle(),{fill:"none",stroke:E,lineJoin:"bevel"})),gt(y,t,"lineStyle"),y.style.lineWidth>0&&t.get(["emphasis","lineStyle","width"])==="bolder"){var F=y.getState("emphasis").style;F.lineWidth=+y.style.lineWidth+1}J(y).seriesIndex=t.seriesIndex,it(y,M,C,T);var H=It(t.get("smooth")),j=t.get("smoothMonotone");if(y.setShape({smooth:H,smoothMonotone:j,connectNulls:A}),b){var V=u.getCalculationInfo("stackedOnSeries"),R=0;b.useStyle(mt(c.getAreaStyle(),{fill:E,opacity:.7,lineJoin:"bevel",decal:u.getVisual("style").decal})),V&&(R=It(V.get("smooth"))),b.setShape({smooth:H,stackedOnSmooth:R,smoothMonotone:j,connectNulls:A}),gt(b,t,"areaStyle"),J(b).seriesIndex=t.seriesIndex,it(b,M,C,T)}var q=function(O){r._changePolyState(O)};u.eachItemGraphicEl(function(O){O&&(O.onHoverStateChange=q)}),this._polyline.onHoverStateChange=q,this._data=u,this._coordSys=i,this._stackedOnPoints=S,this._points=v,this._step=w,this._valueOrigin=P,t.get("triggerLineEvent")&&(this.packEventData(t,y),b&&this.packEventData(t,b))},e.prototype.packEventData=function(t,a){J(a).eventData={componentType:"series",componentSubType:"line",componentIndex:t.componentIndex,seriesIndex:t.seriesIndex,seriesName:t.name,seriesType:"line"}},e.prototype.highlight=function(t,a,o,r){var i=t.getData(),n=pt(i,r);if(this._changePolyState("emphasis"),!(n instanceof Array)&&n!=null&&n>=0){var u=i.getLayout("points"),l=i.getItemGraphicEl(n);if(!l){var c=u[n*2],v=u[n*2+1];if(isNaN(c)||isNaN(v)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(c,v))return;var f=t.get("zlevel")||0,h=t.get("z")||0;l=new lt(i,n),l.x=c,l.y=v,l.setZ(f,h);var p=l.getSymbolPath().getTextContent();p&&(p.zlevel=f,p.z=h,p.z2=this._polyline.z2+1),l.__temp=!0,i.setItemGraphicEl(n,l),l.stopSymbolAnimation(!0),this.group.add(l)}l.highlight()}else x.prototype.highlight.call(this,t,a,o,r)},e.prototype.downplay=function(t,a,o,r){var i=t.getData(),n=pt(i,r);if(this._changePolyState("normal"),n!=null&&n>=0){var u=i.getItemGraphicEl(n);u&&(u.__temp?(i.setItemGraphicEl(n,null),this.group.remove(u)):u.downplay())}else x.prototype.downplay.call(this,t,a,o,r)},e.prototype._changePolyState=function(t){var a=this._polygon;yt(this._polyline,t),a&&yt(a,t)},e.prototype._newPolyline=function(t){var a=this._polyline;return a&&this._lineGroup.remove(a),a=new De({shape:{points:t},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(a),this._polyline=a,a},e.prototype._newPolygon=function(t,a){var o=this._polygon;return o&&this._lineGroup.remove(o),o=new Ie({shape:{points:t,stackedOnPoints:a},segmentIgnoreThreshold:2}),this._lineGroup.add(o),this._polygon=o,o},e.prototype._initSymbolLabelAnimation=function(t,a,o){var r,i,n=a.getBaseAxis(),u=n.inverse;a.type==="cartesian2d"?(r=n.isHorizontal(),i=!1):a.type==="polar"&&(r=n.dim==="angle",i=!0);var l=t.hostModel,c=l.get("animationDuration");tt(c)&&(c=c(null));var v=l.get("animationDelay")||0,f=tt(v)?v(null):v;t.eachItemGraphicEl(function(h,p){var y=h;if(y){var b=[h.x,h.y],m=void 0,g=void 0,d=void 0;if(o)if(i){var P=o,I=a.pointToCoord(b);r?(m=P.startAngle,g=P.endAngle,d=-I[1]/180*Math.PI):(m=P.r0,g=P.r,d=I[0])}else{var S=o;r?(m=S.x,g=S.x+S.width,d=h.x):(m=S.y+S.height,g=S.y,d=h.y)}var _=g===m?0:(d-m)/(g-m);u&&(_=1-_);var A=tt(v)?v(p):c*_+f,L=y.getSymbolPath(),k=L.getTextContent();y.attr({scaleX:0,scaleY:0}),y.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:A}),k&&k.animateFrom({style:{opacity:0}},{duration:300,delay:A}),L.disableLabelAnimation=!0}})},e.prototype._initOrUpdateEndLabel=function(t,a,o){var r=t.getModel("endLabel");if(Gt(t)){var i=t.getData(),n=this._polyline,u=i.getLayout("points");if(!u){n.removeTextContent(),this._endLabel=null;return}var l=this._endLabel;l||(l=this._endLabel=new Jt({z2:200}),l.ignoreClip=!0,n.setTextContent(this._endLabel),n.disableLabelAnimation=!0);var c=Ce(u);c>=0&&(kt(n,ot(t,"endLabel"),{inheritColor:o,labelFetcher:t,labelDataIndex:c,defaultText:function(v,f,h){return h!=null?Kt(i,h):wt(i,v)},enableTextSetter:!0},Oe(r,a)),n.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},e.prototype._endLabelOnDuring=function(t,a,o,r,i,n,u){var l=this._endLabel,c=this._polyline;if(l){t<1&&r.originalX==null&&(r.originalX=l.x,r.originalY=l.y);var v=o.getLayout("points"),f=o.hostModel,h=f.get("connectNulls"),p=n.get("precision"),y=n.get("distance")||0,b=u.getBaseAxis(),m=b.isHorizontal(),g=b.inverse,d=a.shape,P=g?m?d.x:d.y+d.height:m?d.x+d.width:d.y,I=(m?y:0)*(g?-1:1),S=(m?0:-y)*(g?-1:1),_=m?"x":"y",A=Ne(v,P,_),L=A.range,k=L[1]-L[0],w=void 0;if(k>=1){if(k>1&&!h){var D=At(v,L[0]);l.attr({x:D[0]+I,y:D[1]+S}),i&&(w=f.getRawValue(L[0]))}else{var D=c.getPointOn(P,_);D&&l.attr({x:D[0]+I,y:D[1]+S});var E=f.getRawValue(L[0]),z=f.getRawValue(L[1]);i&&(w=Qt(o,p,E,z,A.t))}r.lastFrameIndex=L[0]}else{var G=t===1||r.lastFrameIndex>0?L[0]:0,D=At(v,G);i&&(w=f.getRawValue(G)),l.attr({x:D[0]+I,y:D[1]+S})}if(i){var N=Yt(l);typeof N.setLabelText=="function"&&N.setLabelText(w)}}},e.prototype._doUpdateAnimation=function(t,a,o,r,i,n,u){var l=this._polyline,c=this._polygon,v=t.hostModel,f=_e(this._data,t,this._stackedOnPoints,a,this._coordSys,o,this._valueOrigin),h=f.current,p=f.stackedOnCurrent,y=f.next,b=f.stackedOnNext;if(i&&(h=W(f.current,o,i,u),p=W(f.stackedOnCurrent,o,i,u),y=W(f.next,o,i,u),b=W(f.stackedOnNext,o,i,u)),Pt(h,y)>3e3||c&&Pt(p,b)>3e3){l.stopAnimation(),l.setShape({points:y}),c&&(c.stopAnimation(),c.setShape({points:y,stackedOnPoints:b}));return}l.shape.__points=f.current,l.shape.points=h;var m={shape:{points:y}};f.current!==h&&(m.shape.__points=f.next),l.stopAnimation(),K(l,m,v),c&&(c.setShape({points:h,stackedOnPoints:p}),c.stopAnimation(),K(c,{shape:{stackedOnPoints:b}},v),l.shape.points!==c.shape.points&&(c.shape.points=l.shape.points));for(var g=[],d=f.status,P=0;P<d.length;P++){var I=d[P].cmd;if(I==="="){var S=t.getItemGraphicEl(d[P].idx1);S&&g.push({el:S,ptIdx:P})}}l.animators&&l.animators.length&&l.animators[0].during(function(){c&&c.dirtyShape();for(var _=l.shape.__points,A=0;A<g.length;A++){var L=g[A].el,k=g[A].ptIdx*2;L.x=_[k],L.y=_[k+1],L.markRedraw()}})},e.prototype.remove=function(t){var a=this.group,o=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),o&&o.eachItemGraphicEl(function(r,i){r.__temp&&(a.remove(r),o.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},e.type="line",e}(x),Ge=ze;function Ve(s,e){return{seriesType:s,plan:ie(),reset:function(t){var a=t.getData(),o=t.coordinateSystem,r=t.pipelineContext,i=e||r.large;if(o){var n=st(o.dimensions,function(h){return a.mapDimension(h)}).slice(0,2),u=n.length,l=a.getCalculationInfo("stackResultDimension");Q(a,n[0])&&(n[0]=l),Q(a,n[1])&&(n[1]=l);var c=a.getStore(),v=a.getDimensionIndex(n[0]),f=a.getDimensionIndex(n[1]);return u&&{progress:function(h,p){for(var y=h.end-h.start,b=i&&X(y*u),m=[],g=[],d=h.start,P=0;d<h.end;d++){var I=void 0;if(u===1){var S=c.get(v,d);I=o.dataToPoint(S,null,g)}else m[0]=c.get(v,d),m[1]=c.get(f,d),I=o.dataToPoint(m,null,g);i?(b[P++]=I[0],b[P++]=I[1]):p.setItemLayout(d,I.slice())}i&&p.setLayout("points",b)}}}}}}function Re(s){s.registerChartView(Ge),s.registerSeriesModel(me),s.registerLayout(Ve("line",!0)),s.registerVisual({seriesType:"line",reset:function(e){var t=e.getData(),a=e.getModel("lineStyle").getLineStyle();a&&!a.stroke&&(a.stroke=t.getVisual("style").fill),t.setVisual("legendLineStyle",a)}}),s.registerProcessor(s.PRIORITY.PROCESSOR.STATISTIC,ne("line"))}le([ue,ve,he,Re,fe]);function Xe({dataList:s,field:e,title:t}){const a=s.map(u=>u.value),r={type:"category",data:s.map(u=>u.label)},n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:r,yAxis:{type:"value"},series:[{name:"Total",type:"line",barWidth:"60%",data:a}]};return Rt.jsx(oe,{echarts:se,option:n,notMerge:!0,lazyUpdate:!0})}export{Xe as default};
