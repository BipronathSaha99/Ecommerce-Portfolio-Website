var Le=Object.defineProperty,Oe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var ce=(t,n,e)=>n in t?Le(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,G=(t,n)=>{for(var e in n||(n={}))ke.call(n,e)&&ce(t,e,n[e]);if(ue)for(var e of ue(n))Fe.call(n,e)&&ce(t,e,n[e]);return t},oe=(t,n)=>Oe(t,me(n));var le=(t,n,e)=>new Promise((d,V)=>{var S=E=>{try{v(e.next(E))}catch(C){V(C)}},R=E=>{try{v(e.throw(E))}catch(C){V(C)}},v=E=>E.done?d(E.value):Promise.resolve(E.value).then(S,R);v((e=e.apply(t,n)).next())});import{bb as _e,co as ye,cp as Ne,cq as Me,cr as qe,r as h,cs as xe,ct as u,cu as We,cv as pe,cw as fe,cx as de,cy as y,cz as Pe,cA as B,cB as Ue,cC as Re,cD as He,cE as he,cF as je,c as ze,cG as Ge}from"./main-601.js";const Ee=_e.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(n=>{t.status="fulfilled",t.value=n},n=>{t.status="rejected",t.reason=n}),t)}),K={dedupe:!0},Be=(t,n,e)=>{const{cache:d,compare:V,suspense:S,fallbackData:R,revalidateOnMount:v,revalidateIfStale:E,refreshInterval:C,refreshWhenHidden:Y,refreshWhenOffline:J,keepPreviousData:Se}=e,[N,ve,A,be]=Me.get(d),[s,Q]=qe(t),W=h.useRef(!1),k=h.useRef(!1),M=h.useRef(s),p=h.useRef(n),P=h.useRef(e),c=()=>P.current,U=()=>c().isVisible()&&c().isOnline(),[w,H,De,Te]=xe(d,s),F=h.useRef({}).current,Ve=u(R)?e.fallback[s]:R,X=(a,r)=>{for(const l in F){const i=l;if(i==="data"){if(!V(a[i],r[i])&&(!u(a[i])||!V(x,r[i])))return!1}else if(r[i]!==a[i])return!1}return!0},Z=h.useMemo(()=>{const a=(()=>!s||!n?!1:u(v)?c().isPaused()||S?!1:u(E)?!0:E:v)(),r=f=>{const D=je(f);return delete D._k,a?G({isValidating:!0,isLoading:!0},D):D},l=w(),i=Te(),b=r(l),m=l===i?b:r(i);let o=b;return[()=>{const f=r(w());return X(f,o)?(o.data=f.data,o.isLoading=f.isLoading,o.isValidating=f.isValidating,o.error=f.error,o):(o=f,f)},()=>m]},[d,s]),I=We.useSyncExternalStore(h.useCallback(a=>De(s,(r,l)=>{X(l,r)||a()}),[d,s]),Z[0],Z[1]),$=!W.current,Ce=N[s]&&N[s].length>0,L=I.data,O=u(L)?Ve:L,q=I.error,ee=h.useRef(O),x=Se?u(L)?ee.current:L:O,te=(()=>Ce&&!u(q)?!1:$&&!u(v)?v:c().isPaused()?!1:S?u(O)?!1:E:u(O)||E)(),se=!!(s&&n&&$&&te),Ae=u(I.isValidating)?se:I.isValidating,we=u(I.isLoading)?se:I.isLoading,_=h.useCallback(a=>le(void 0,null,function*(){const r=p.current;if(!s||!r||k.current||c().isPaused())return!1;let l,i,b=!0;const m=a||{},o=!A[s]||!m.dedupe,f=()=>he?!k.current&&s===M.current&&W.current:s===M.current,D={isValidating:!1,isLoading:!1},ae=()=>{H(D)},re=()=>{const g=A[s];g&&g[1]===i&&delete A[s]},ie={isValidating:!0};u(w().data)&&(ie.isLoading=!0);try{if(o&&(H(ie),e.loadingTimeout&&u(w().data)&&setTimeout(()=>{b&&f()&&c().onLoadingSlow(s,e)},e.loadingTimeout),A[s]=[r(Q),pe()]),[l,i]=A[s],l=yield l,o&&setTimeout(re,e.dedupingInterval),!A[s]||A[s][1]!==i)return o&&f()&&c().onDiscarded(s),!1;D.error=fe;const g=ve[s];if(!u(g)&&(i<=g[0]||i<=g[1]||g[1]===0))return ae(),o&&f()&&c().onDiscarded(s),!1;const T=w().data;D.data=V(T,l)?T:l,o&&f()&&c().onSuccess(l,s,e)}catch(g){re();const T=c(),{shouldRetryOnError:j}=T;T.isPaused()||(D.error=g,o&&f()&&(T.onError(g,s,T),(j===!0||de(j)&&j(g))&&(!c().revalidateOnFocus||!c().revalidateOnReconnect||U())&&T.onErrorRetry(g,s,T,Ie=>{const z=N[s];z&&z[0]&&z[0](y.ERROR_REVALIDATE_EVENT,Ie)},{retryCount:(m.retryCount||0)+1,dedupe:!0})))}return b=!1,ae(),!0}),[s,d]),ne=h.useCallback((...a)=>Pe(d,M.current,...a),[]);if(B(()=>{p.current=n,P.current=e,u(L)||(ee.current=L)}),B(()=>{if(!s)return;const a=_.bind(fe,K);let r=0;const i=Ue(s,N,(b,m={})=>{if(b==y.FOCUS_EVENT){const o=Date.now();c().revalidateOnFocus&&o>r&&U()&&(r=o+c().focusThrottleInterval,a())}else if(b==y.RECONNECT_EVENT)c().revalidateOnReconnect&&U()&&a();else{if(b==y.MUTATE_EVENT)return _();if(b==y.ERROR_REVALIDATE_EVENT)return _(m)}});return k.current=!1,M.current=s,W.current=!0,H({_k:Q}),te&&(u(O)||Re?a():He(a)),()=>{k.current=!0,i()}},[s]),B(()=>{let a;function r(){const i=de(C)?C(w().data):C;i&&a!==-1&&(a=setTimeout(l,i))}function l(){!w().error&&(Y||c().isVisible())&&(J||c().isOnline())?_(K).then(r):r()}return r(),()=>{a&&(clearTimeout(a),a=-1)}},[C,Y,J,s]),h.useDebugValue(x),S&&u(O)&&s){if(!he&&Re)throw new Error("Fallback data is required when using suspense in SSR.");p.current=n,P.current=e,k.current=!1;const a=be[s];if(!u(a)){const r=ne(a);Ee(r)}if(u(q)){const r=_(K);u(x)||(r.status="fulfilled",r.value=!0),Ee(r)}else throw q}return{mutate:ne,get data(){return F.data=!0,x},get error(){return F.error=!0,q},get isValidating(){return F.isValidating=!0,Ae},get isLoading(){return F.isLoading=!0,we}}},Ke=Ne(Be),Ye=t=>(n,e,d)=>(d.revalidateOnFocus=!1,d.revalidateIfStale=!1,d.revalidateOnReconnect=!1,t(n,e,d)),Je=ye(Ke,Ye),ge=t=>{var n;return(t==null?void 0:t.success)&&!((n=t==null?void 0:t.data)!=null&&n.errors)&&!Ge(t.data)},Ze=(t,n,e={})=>{const V=("fetchCondition"in e?e.fetchCondition:!0)?t:null,S=Je(V,R=>{const v=ze(n,Array.isArray(R)?R[0]:R);return e.onLoading&&S.isLoading&&e.onLoading(),v},oe(G({},e),{onSuccess:R=>e.onSuccess&&ge(R)&&e.onSuccess(R.data)}));return h.useEffect(()=>{if(!ge(S.data))return;const{data:R}=S.data;e.onMount?e.onMount(R):e.onSuccess&&e.onSuccess(R)},[]),S};export{Ze as u};
