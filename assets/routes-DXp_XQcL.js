import{n as e,r as t,t as n}from"./index-Mu_n7iIa.js";var r=t(e(),1),i=n(),a=20;function o({code:e,caption:t}){let[n,o]=(0,r.useState)(!1),s=e.split(`
`),c=s.length-a;return(0,i.jsxs)(`figure`,{className:`mt-8`,children:[(0,i.jsx)(`pre`,{className:`overflow-x-auto rounded-sm border border-border bg-secondary/60 p-5 text-[0.8rem] leading-relaxed text-foreground/90`,children:(0,i.jsx)(`code`,{className:`font-mono`,children:n?e:s.slice(0,a).join(`
`)})}),c>0?(0,i.jsx)(`button`,{type:`button`,onClick:()=>o(e=>!e),className:`mt-3 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline`,children:n?`Collapse script`:`Show full script (${s.length} lines)`}):null,t?(0,i.jsx)(`figcaption`,{className:`mt-3 text-xs text-muted-foreground`,children:t}):null]})}var s=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),c=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),l=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),u=e=>{let t=l(e);return t.charAt(0).toUpperCase()+t.slice(1)},d={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},f=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},p=(0,r.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a=``,children:o,iconNode:c,...l},u)=>(0,r.createElement)(`svg`,{ref:u,...d,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:s(`lucide`,a),...!o&&!f(l)&&{"aria-hidden":`true`},...l},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),m=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...i},a)=>(0,r.createElement)(p,{ref:a,iconNode:t,className:s(`lucide-${c(u(e))}`,`lucide-${e}`,n),...i}));return n.displayName=u(e),n},h=m(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),g=m(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),_=m(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),v=m(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),y=m(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),b=m(`zoom-in`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]);function x(e){return Object.prototype.toString.call(e)===`[object Object]`}function S(e){return x(e)||Array.isArray(e)}function C(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}function w(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||JSON.stringify(Object.keys(e.breakpoints||{}))!==JSON.stringify(Object.keys(t.breakpoints||{}))?!1:n.every(n=>{let r=e[n],i=t[n];return typeof r==`function`?`${r}`==`${i}`:!S(r)||!S(i)?r===i:w(r,i)})}function T(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function E(e,t){if(e.length!==t.length)return!1;let n=T(e),r=T(t);return n.every((e,t)=>{let n=r[t];return w(e,n)})}function D(e){return typeof e==`number`}function O(e){return typeof e==`string`}function k(e){return typeof e==`boolean`}function A(e){return Object.prototype.toString.call(e)===`[object Object]`}function j(e){return Math.abs(e)}function M(e){return Math.sign(e)}function N(e,t){return j(e-t)}function ee(e,t){return e===0||t===0||j(e)<=j(t)?0:j(N(j(e),j(t))/e)}function P(e){return Math.round(e*100)/100}function F(e){return B(e).map(Number)}function I(e){return e[L(e)]}function L(e){return Math.max(0,e.length-1)}function R(e,t){return t===L(e)}function z(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function B(e){return Object.keys(e)}function V(e,t){return[e,t].reduce((e,t)=>(B(t).forEach(n=>{let r=e[n],i=t[n];e[n]=A(r)&&A(i)?V(r,i):i}),e),{})}function H(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function te(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return O(e)?n[e](r):e(t,r,i)}return{measure:o}}function U(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function ne(e,t,n,r){let i=U(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function re(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function W(e=0,t=0){let n=j(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function ie(e,t,n){let{constrain:r}=W(0,e),i=e+1,a=o(t);function o(e){return n?j((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return ie(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function ae(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let{cross:y,direction:b}=e,x=[`INPUT`,`SELECT`,`TEXTAREA`],S={passive:!1},C=U(),w=U(),T=W(50,225).constrain(p.measure(20)),E={mouse:300,touch:400},D={mouse:500,touch:600},O=m?43:25,A=!1,P=0,F=0,I=!1,L=!1,R=!1,z=!1;function B(e){if(!v)return;function n(t){(k(v)||v(e,t))&&ae(t)}let r=t;C.add(r,`dragstart`,e=>e.preventDefault(),S).add(r,`touchmove`,()=>void 0,S).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,se).add(r,`contextmenu`,se).add(r,`click`,ce,!0)}function V(){C.clear(),w.clear()}function te(){let e=z?n:t;w.add(e,`touchmove`,oe,S).add(e,`touchend`,se).add(e,`mousemove`,oe,S).add(e,`mouseup`,se)}function ne(e){let t=e.nodeName||``;return x.includes(t)}function re(){return(m?D:E)[z?`mouse`:`touch`]}function ie(e,t){let n=d.add(M(e)*-1),r=u.byDistance(e,!m).distance;return m||j(e)<T?r:g&&t?r*.5:u.byIndex(n.get(),0).distance}function ae(e){let t=H(e,r);z=t,R=m&&t&&!e.buttons&&A,A=N(i.get(),o.get())>=2,!(t&&e.button!==0)&&(ne(e.target)||(I=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),te(),P=a.readPoint(e),F=a.readPoint(e,y),f.emit(`pointerDown`)))}function oe(e){if(!H(e,r)&&e.touches.length>=2)return se(e);let t=a.readPoint(e),n=a.readPoint(e,y),o=N(t,P),c=N(n,F);if(!L&&!z&&(!e.cancelable||(L=o>c,!L)))return se(e);let u=a.pointerMove(e);o>h&&(R=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(b(u)),e.preventDefault()}function se(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*re(),r=ie(b(n),t),i=ee(n,r),o=O-10*i,s=_+i/50;L=!1,I=!1,w.clear(),l.useDuration(o).useFriction(s),c.distance(r,!m),z=!1,f.emit(`pointerUp`)}function ce(e){R&&=(e.stopPropagation(),e.preventDefault(),!1)}function le(){return I}return{init:B,destroy:V,pointerDown:le}}function oe(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(H(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&j(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function se(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function ce(e){function t(t){return t/100*e}return{measure:t}}function le(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function p(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(j(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(k(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function m(){d=!0,c&&c.disconnect()}return{init:p,destroy:m}}function ue(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=M(a),d=u,x}function p(){return j(r.get()-t.get())<.001}function m(){return c}function h(){return s}function g(){return o}function _(){return y(i)}function v(){return b(a)}function y(e){return c=e,x}function b(e){return l=e,x}let x={direction:h,duration:m,velocity:g,seek:f,settled:p,useBaseFriction:v,useBaseDuration:_,useFriction:b,useDuration:y};return x}function de(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=W(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=j(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&j(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function fe(e,t,n,r,i){let a=W(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return N(e,t)<=1}function u(){let e=o[0],t=I(o);return W(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=R(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function pe(e,t,n){let r=t[0];return{limit:W(n?r-e:I(t),r)}}function me(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=W(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1&&a(n.get())}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function he(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function ge(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>I(e)[o]-e[0][a]).map(j)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-j(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function _e(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=R(n,t);return r?z(I(n[0])+1):i?z(L(a)-I(n)[0]+1,I(n)[0]):e})}return{slideRegistry:l}}function ve(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>j(e)-j(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>j(e.diff)-j(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>M(e)===r);return a.length?c(a):I(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function ye(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function be(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function f(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));D(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,d,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(k(s)||s(u,e))&&f(t)},c)})}function d(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function xe(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return D(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function Se(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=P(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function Ce(e,t,n,r,i,a,o,s,c){let l=.5,u=F(i),d=F(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:xe(-1),translate:Se(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){let e=t-o[0]-1;return g(m(u,e),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function b(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function x(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:x,loop:b,loopPoints:f}}function we(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(k(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function Te(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return B(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function Ee(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=h(),f=n.map(o),p=g();function m(){if(!l)return 0;let e=n[0];return j(t[s]-e[s])}function h(){if(!l)return 0;let e=a.getComputedStyle(I(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function g(){return n.map((e,t,n)=>{let r=!t,i=R(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(j)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function De(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:d}=e,f=D(n);function p(e,t){return F(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?F(e).reduce((n,f,p)=>{let m=I(n)||0,h=m===0,g=f===L(e),_=i[l]-a[m][l],v=i[l]-a[f][u],y=!r&&h?d(o):0,b=j(v-(!r&&g?d(s):0)-(_+y));return p&&b>t+c&&n.push(f),g&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function h(e){return f?p(e,n):m(e)}return{groupSlides:h}}function Oe(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:b,watchDrag:x,watchFocus:S}=a,C=se(),w=C.measure(t),T=n.map(C.measure),E=re(c,l),D=E.measureSize(w),O=ce(D),k=te(s,D),A=!d&&!!v,{slideSizes:j,slideSizesWithGaps:M,startGap:N,endGap:ee}=Ee(E,w,T,n,d||!!v,i),P=De(E,D,g,d,w,T,N,ee,2),{snaps:R,snapsAligned:z}=ge(E,k,w,T,P),B=-I(R)+I(M),{snapsContained:V,scrollContainLimit:H}=fe(D,B,z,v,2),W=A?V:z,{limit:Oe}=pe(B,W,d),ke=ie(L(W),u,d),Ae=ke.clone(),je=F(n),Me=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},Ne=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},Pe=ne(r,i,()=>Me(qe),e=>Ne(qe,e)),Fe=.68,Ie=W[ke.get()],Le=xe(Ie),Re=xe(Ie),G=xe(Ie),K=xe(Ie),ze=ue(Le,G,Re,K,f,Fe),Be=ve(d,W,B,Oe,K),Ve=ye(Pe,ke,Ae,ze,Be,K,o),He=he(Oe),Ue=U(),We=Te(t,n,o,h),{slideRegistry:Ge}=_e(A,v,W,H,P,je),Ke=be(e,n,Ge,Ve,ze,Ue,o,S),qe={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:T,animation:Pe,axis:E,dragHandler:ae(E,e,r,i,K,oe(E,i),Le,Pe,Ve,ze,Be,ke,o,O,p,m,_,Fe,x),eventStore:Ue,percentOfView:O,index:ke,indexPrevious:Ae,limit:Oe,location:Le,offsetLocation:G,previousLocation:Re,options:a,resizeHandler:le(t,o,i,n,E,y,C),scrollBody:ze,scrollBounds:de(Oe,G,K,ze,O),scrollLooper:me(B,Oe,G,[Le,G,Re,K]),scrollProgress:He,scrollSnapList:W.map(He.get),scrollSnaps:W,scrollTarget:Be,scrollTo:Ve,slideLooper:Ce(E,D,B,j,M,R,W,G,n),slideFocus:Ke,slidesHandler:we(t,o,b),slidesInView:We,slideIndexes:je,slideRegistry:Ge,slidesToScroll:P,target:K,translate:Se(E,t)};return qe}function ke(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}var Ae={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function je(e){function t(e,t){return V(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,B(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>B(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function Me(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function Ne(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=je(i),o=Me(a),s=U(),c=ke(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:f,off:p,emit:m}=c,h=D,g=!1,_,v=l(Ae,Ne.globalOptions),y=l(v),b=[],x,S,C;function w(){let{container:t,slides:n}=y;S=(O(t)?e.querySelector(t):t)||e.children[0];let r=O(n)?S.querySelectorAll(n):n;C=[].slice.call(r||S.children)}function T(t){let n=Oe(e,S,C,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?T(Object.assign({},t,{loop:!1})):n}function E(e,t){g||(v=l(v,e),y=u(v),b=t||b,w(),_=T(y),d([v,...b.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,D)),y.active&&(_.translate.to(_.location.get()),_.animation.init(),_.slidesInView.init(),_.slideFocus.init(W),_.eventHandler.init(W),_.resizeHandler.init(W),_.slidesHandler.init(W),_.options.loop&&_.slideLooper.loop(),S.offsetParent&&C.length&&_.dragHandler.init(W),x=o.init(W,b)))}function D(e,t){let n=L();k(),E(l({startIndex:n},e),t),c.emit(`reInit`)}function k(){_.dragHandler.destroy(),_.eventStore.clear(),_.translate.clear(),_.slideLooper.clear(),_.resizeHandler.destroy(),_.slidesHandler.destroy(),_.slidesInView.destroy(),_.animation.destroy(),o.destroy(),s.clear()}function A(){g||(g=!0,s.clear(),k(),c.emit(`destroy`),c.clear())}function j(e,t,n){!y.active||g||(_.scrollBody.useBaseFriction().useDuration(t===!0?0:y.duration),_.scrollTo.index(e,n||0))}function M(e){j(_.index.add(1).get(),e,-1)}function N(e){j(_.index.add(-1).get(),e,1)}function ee(){return _.index.add(1).get()!==L()}function P(){return _.index.add(-1).get()!==L()}function F(){return _.scrollSnapList}function I(){return _.scrollProgress.get(_.offsetLocation.get())}function L(){return _.index.get()}function R(){return _.indexPrevious.get()}function z(){return _.slidesInView.get()}function B(){return _.slidesInView.get(!1)}function V(){return x}function H(){return _}function te(){return e}function ne(){return S}function re(){return C}let W={canScrollNext:ee,canScrollPrev:P,containerNode:ne,internalEngine:H,destroy:A,off:p,on:f,emit:m,plugins:V,previousScrollSnap:R,reInit:h,rootNode:te,scrollNext:M,scrollPrev:N,scrollProgress:I,scrollSnapList:F,scrollTo:j,selectedScrollSnap:L,slideNodes:re,slidesInView:z,slidesNotInView:B};return E(t,n),setTimeout(()=>c.emit(`init`),0),W}Ne.globalOptions=void 0;function Pe(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[a,o]=(0,r.useState)(),[s,c]=(0,r.useState)(),l=(0,r.useCallback)(()=>{a&&a.reInit(n.current,i.current)},[a]);return(0,r.useEffect)(()=>{w(n.current,e)||(n.current=e,l())},[e,l]),(0,r.useEffect)(()=>{E(i.current,t)||(i.current=t,l())},[t,l]),(0,r.useEffect)(()=>{if(C()&&s){Ne.globalOptions=Pe.globalOptions;let e=Ne(s,n.current,i.current);return o(e),()=>e.destroy()}o(void 0)},[s,o]),[c,a]}Pe.globalOptions=void 0;function Fe(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Fe(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Ie(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Fe(e))&&(r&&(r+=` `),r+=t);return r}var Le=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Re=(e,t)=>({classGroupId:e,validator:t}),G=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),K=`-`,ze=[],Be=`arbitrary..`,Ve=e=>{let t=We(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Ue(e);let n=e.split(K);return He(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Le(i,t):t:i||ze}return n[e]||ze}}},He=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=He(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(K):e.slice(t).join(K),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Ue=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Be+r:void 0})(),We=e=>{let{theme:t,classGroups:n}=e;return Ge(n,t)},Ge=(e,t)=>{let n=G();for(let r in e){let i=e[r];Ke(i,n,r,t)}return n},Ke=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];qe(i,t,n,r)}},qe=(e,t,n,r)=>{if(typeof e==`string`){Je(e,t,n);return}if(typeof e==`function`){Ye(e,t,n,r);return}Xe(e,t,n,r)},Je=(e,t,n)=>{let r=e===``?t:Ze(t,e);r.classGroupId=n},Ye=(e,t,n,r)=>{if(Qe(e)){Ke(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Re(n,e))},Xe=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Ke(o,Ze(t,a),n,r)}},Ze=(e,t)=>{let n=e,r=t.split(K),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=G(),n.nextPart.set(t,i)),n=i}return n},Qe=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,$e=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},et=`!`,tt=`:`,nt=[],rt=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),it=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===tt){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(et)?(c=s.slice(0,-1),l=!0):s.startsWith(et)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return rt(t,l,c,u)};if(t){let e=t+tt,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):rt(nt,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},at=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},ot=e=>({cache:$e(e.cacheSize),parseClassName:it(e),sortModifiers:at(e),postfixLookupClassGroupIds:st(e),...Ve(e)}),st=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ct=/\s+/,lt=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ct),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+et:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},ut=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=dt(n))&&(i&&(i+=` `),i+=r);return i},dt=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=dt(e[r]))&&(n&&(n+=` `),n+=t);return n},ft=(e,...t)=>{let n,r,i,a,o=o=>(n=ot(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=lt(e,n);return i(e,a),a};return a=o,(...e)=>a(ut(...e))},pt=[],q=e=>{let t=t=>t[e]||pt;return t.isThemeGetter=!0,t},mt=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ht=/^\((?:(\w[\w-]*):)?(.+)\)$/i,gt=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,_t=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,bt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,St=e=>gt.test(e),J=e=>!!e&&!Number.isNaN(Number(e)),Y=e=>!!e&&Number.isInteger(Number(e)),Ct=e=>e.endsWith(`%`)&&J(e.slice(0,-1)),X=e=>_t.test(e),wt=()=>!0,Tt=e=>vt.test(e)&&!yt.test(e),Et=()=>!1,Dt=e=>bt.test(e),Ot=e=>xt.test(e),kt=e=>!Z(e)&&!Q(e),At=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),jt=e=>Kt(e,Xt,Et),Z=e=>mt.test(e),Mt=e=>Kt(e,Zt,Tt),Nt=e=>Kt(e,Qt,J),Pt=e=>Kt(e,en,wt),Ft=e=>Kt(e,$t,Et),It=e=>Kt(e,Jt,Et),Lt=e=>Kt(e,Yt,Ot),Rt=e=>Kt(e,tn,Dt),Q=e=>ht.test(e),zt=e=>qt(e,Zt),Bt=e=>qt(e,$t),Vt=e=>qt(e,Jt),Ht=e=>qt(e,Xt),Ut=e=>qt(e,Yt),Wt=e=>qt(e,tn,!0),Gt=e=>qt(e,en,!0),Kt=(e,t,n)=>{let r=mt.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},qt=(e,t,n=!1)=>{let r=ht.exec(e);return r?r[1]?t(r[1]):n:!1},Jt=e=>e===`position`||e===`percentage`,Yt=e=>e===`image`||e===`url`,Xt=e=>e===`length`||e===`size`||e===`bg-size`,Zt=e=>e===`length`,Qt=e=>e===`number`,$t=e=>e===`family-name`,en=e=>e===`number`||e===`weight`,tn=e=>e===`shadow`,nn=ft(()=>{let e=q(`color`),t=q(`font`),n=q(`text`),r=q(`font-weight`),i=q(`tracking`),a=q(`leading`),o=q(`breakpoint`),s=q(`container`),c=q(`spacing`),l=q(`radius`),u=q(`shadow`),d=q(`inset-shadow`),f=q(`text-shadow`),p=q(`drop-shadow`),m=q(`blur`),h=q(`perspective`),g=q(`aspect`),_=q(`ease`),v=q(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),Q,Z],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[Q,Z,c],T=()=>[St,`full`,`auto`,...w()],E=()=>[Y,`none`,`subgrid`,Q,Z],D=()=>[`auto`,{span:[`full`,Y,Q,Z]},Y,Q,Z],O=()=>[Y,`auto`,Q,Z],k=()=>[`auto`,`min`,`max`,`fr`,Q,Z],A=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],j=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],M=()=>[`auto`,...w()],N=()=>[St,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],ee=()=>[St,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],P=()=>[St,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],F=()=>[e,Q,Z],I=()=>[...b(),Vt,It,{position:[Q,Z]}],L=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],R=()=>[`auto`,`cover`,`contain`,Ht,jt,{size:[Q,Z]}],z=()=>[Ct,zt,Mt],B=()=>[``,`none`,`full`,l,Q,Z],V=()=>[``,J,zt,Mt],H=()=>[`solid`,`dashed`,`dotted`,`double`],te=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],U=()=>[J,Ct,Vt,It],ne=()=>[``,`none`,m,Q,Z],re=()=>[`none`,J,Q,Z],W=()=>[`none`,J,Q,Z],ie=()=>[J,Q,Z],ae=()=>[St,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[X],breakpoint:[X],color:[wt],container:[X],"drop-shadow":[X],ease:[`in`,`out`,`in-out`],font:[kt],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[X],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[X],shadow:[X],spacing:[`px`,J],text:[X],"text-shadow":[X],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,St,Z,Q,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,Q,Z]}],"container-named":[At],columns:[{columns:[J,Z,Q,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Y,`auto`,Q,Z]}],basis:[{basis:[St,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[J,St,`auto`,`initial`,`none`,Z]}],grow:[{grow:[``,J,Q,Z]}],shrink:[{shrink:[``,J,Q,Z]}],order:[{order:[Y,`first`,`last`,`none`,Q,Z]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...A(),`normal`]}],"justify-items":[{"justify-items":[...j(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...j()]}],"align-content":[{content:[`normal`,...A()]}],"align-items":[{items:[...j(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...j(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...j(),`baseline`]}],"place-self":[{"place-self":[`auto`,...j()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:N()}],"inline-size":[{inline:[`auto`,...ee()]}],"min-inline-size":[{"min-inline":[`auto`,...ee()]}],"max-inline-size":[{"max-inline":[`none`,...ee()]}],"block-size":[{block:[`auto`,...P()]}],"min-block-size":[{"min-block":[`auto`,...P()]}],"max-block-size":[{"max-block":[`none`,...P()]}],w:[{w:[s,`screen`,...N()]}],"min-w":[{"min-w":[s,`screen`,`none`,...N()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...N()]}],h:[{h:[`screen`,`lh`,...N()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...N()]}],"max-h":[{"max-h":[`screen`,`lh`,...N()]}],"font-size":[{text:[`base`,n,zt,Mt]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Gt,Pt]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Ct,Z]}],"font-family":[{font:[Bt,Ft,t]}],"font-features":[{"font-features":[Z]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Q,Z]}],"line-clamp":[{"line-clamp":[J,`none`,Q,Nt]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,Q,Z]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Q,Z]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...H(),`wavy`]}],"text-decoration-thickness":[{decoration:[J,`from-font`,`auto`,Q,Mt]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[J,`auto`,Q,Z]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[Y,Q,Z]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Q,Z]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Q,Z]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:I()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:R()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Y,Q,Z],radial:[``,Q,Z],conic:[Y,Q,Z]},Ut,Lt]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:z()}],"gradient-via-pos":[{via:z()}],"gradient-to-pos":[{to:z()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:V()}],"border-w-x":[{"border-x":V()}],"border-w-y":[{"border-y":V()}],"border-w-s":[{"border-s":V()}],"border-w-e":[{"border-e":V()}],"border-w-bs":[{"border-bs":V()}],"border-w-be":[{"border-be":V()}],"border-w-t":[{"border-t":V()}],"border-w-r":[{"border-r":V()}],"border-w-b":[{"border-b":V()}],"border-w-l":[{"border-l":V()}],"divide-x":[{"divide-x":V()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":V()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...H(),`hidden`,`none`]}],"divide-style":[{divide:[...H(),`hidden`,`none`]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-bs":[{"border-bs":F()}],"border-color-be":[{"border-be":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...H(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[J,Q,Z]}],"outline-w":[{outline:[``,J,zt,Mt]}],"outline-color":[{outline:F()}],shadow:[{shadow:[``,`none`,u,Wt,Rt]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":[`none`,d,Wt,Rt]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:V()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[J,Mt]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":V()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":[`none`,f,Wt,Rt]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[J,Q,Z]}],"mix-blend":[{"mix-blend":[...te(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[J]}],"mask-image-linear-from-pos":[{"mask-linear-from":U()}],"mask-image-linear-to-pos":[{"mask-linear-to":U()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":U()}],"mask-image-t-to-pos":[{"mask-t-to":U()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":U()}],"mask-image-r-to-pos":[{"mask-r-to":U()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":U()}],"mask-image-b-to-pos":[{"mask-b-to":U()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":U()}],"mask-image-l-to-pos":[{"mask-l-to":U()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":U()}],"mask-image-x-to-pos":[{"mask-x-to":U()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":U()}],"mask-image-y-to-pos":[{"mask-y-to":U()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[Q,Z]}],"mask-image-radial-from-pos":[{"mask-radial-from":U()}],"mask-image-radial-to-pos":[{"mask-radial-to":U()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[J]}],"mask-image-conic-from-pos":[{"mask-conic-from":U()}],"mask-image-conic-to-pos":[{"mask-conic-to":U()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:I()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Q,Z]}],filter:[{filter:[``,`none`,Q,Z]}],blur:[{blur:ne()}],brightness:[{brightness:[J,Q,Z]}],contrast:[{contrast:[J,Q,Z]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Wt,Rt]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:[``,J,Q,Z]}],"hue-rotate":[{"hue-rotate":[J,Q,Z]}],invert:[{invert:[``,J,Q,Z]}],saturate:[{saturate:[J,Q,Z]}],sepia:[{sepia:[``,J,Q,Z]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Q,Z]}],"backdrop-blur":[{"backdrop-blur":ne()}],"backdrop-brightness":[{"backdrop-brightness":[J,Q,Z]}],"backdrop-contrast":[{"backdrop-contrast":[J,Q,Z]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,J,Q,Z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[J,Q,Z]}],"backdrop-invert":[{"backdrop-invert":[``,J,Q,Z]}],"backdrop-opacity":[{"backdrop-opacity":[J,Q,Z]}],"backdrop-saturate":[{"backdrop-saturate":[J,Q,Z]}],"backdrop-sepia":[{"backdrop-sepia":[``,J,Q,Z]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Q,Z]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[J,`initial`,Q,Z]}],ease:[{ease:[`linear`,`initial`,_,Q,Z]}],delay:[{delay:[J,Q,Z]}],animate:[{animate:[`none`,v,Q,Z]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Q,Z]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:re()}],"rotate-x":[{"rotate-x":re()}],"rotate-y":[{"rotate-y":re()}],"rotate-z":[{"rotate-z":re()}],scale:[{scale:W()}],"scale-x":[{"scale-x":W()}],"scale-y":[{"scale-y":W()}],"scale-z":[{"scale-z":W()}],"scale-3d":[`scale-3d`],skew:[{skew:ie()}],"skew-x":[{"skew-x":ie()}],"skew-y":[{"skew-y":ie()}],transform:[{transform:[Q,Z,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ae()}],"translate-x":[{"translate-x":ae()}],"translate-y":[{"translate-y":ae()}],"translate-z":[{"translate-z":ae()}],"translate-none":[`translate-none`],zoom:[{zoom:[Y,Q,Z]}],accent:[{accent:F()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Q,Z]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":F()}],"scrollbar-track-color":[{"scrollbar-track":F()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Q,Z]}],fill:[{fill:[`none`,...F()]}],"stroke-w":[{stroke:[J,zt,Mt,Nt]}],stroke:[{stroke:[`none`,...F()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function rn(...e){return nn(Ie(e))}var an=Object.defineProperty,on=(e,t)=>an(e,`name`,{value:t,configurable:!0});function sn(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}on(sn,`setRef`);function cn(...e){return t=>{let n=!1,r=e.map(e=>{let r=sn(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():sn(e[t],null)}}}}on(cn,`composeRefs`);function ln(...e){return r.useCallback(cn(...e),e)}on(ln,`useComposedRefs`);var un=Object.defineProperty,$=(e,t)=>un(e,`name`,{value:t,configurable:!0});function dn(e){let t=r.forwardRef((t,n)=>{let{children:i,...a}=t,o=null,s=!1,c=[];bn(i)&&typeof wn==`function`&&(i=wn(i._payload)),r.Children.forEach(i,e=>{if(vn(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;bn(n)&&typeof wn==`function`&&(n=wn(n._payload)),o=hn(t,n),c.push(o?.props?.children)}else c.push(e)}),o?o=r.cloneElement(o,void 0,c):!s&&r.Children.count(i)===1&&r.isValidElement(i)&&(o=i);let l=o?_n(o):void 0,u=ln(n,l);if(!o){if(i||i===0)throw Error(s?Cn(e):Sn(e));return i}let d=gn(a,o.props??{});return o.type!==r.Fragment&&(d.ref=n?u:l),r.cloneElement(o,d)});return t.displayName=`${e}.Slot`,t}$(dn,`createSlot`);var fn=dn(`Slot`),pn=Symbol.for(`radix.slottable`);function mn(e){let t=$(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=pn,t}$(mn,`createSlottable`);var hn=$((e,t)=>{if(`child`in e.props){let t=e.props.child;return r.isValidElement(t)?r.cloneElement(t,void 0,e.props.children(t.props.children)):null}return r.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function gn(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}$(gn,`mergeProps`);function _n(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}$(_n,`getElementRef`);function vn(e){return r.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===pn}$(vn,`isSlottable`);var yn=Symbol.for(`react.lazy`);function bn(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===yn&&`_payload`in e&&xn(e._payload)}$(bn,`isLazyComponent`);function xn(e){return typeof e==`object`&&!!e&&`then`in e}$(xn,`isPromiseLike`);var Sn=$(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Cn=$(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),wn=r.use,Tn=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,En=Ie,Dn=((e,t)=>n=>{if(t?.variants==null)return En(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=Tn(t)||Tn(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return En(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)})(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow hover:bg-primary/90`,destructive:`bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,outline:`border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,secondary:`bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-9 px-4 py-2`,sm:`h-8 rounded-md px-3 text-xs`,lg:`h-10 rounded-md px-8`,icon:`h-9 w-9`}},defaultVariants:{variant:`default`,size:`default`}}),On=r.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},o)=>(0,i.jsx)(r?fn:`button`,{className:rn(Dn({variant:t,size:n,className:e})),ref:o,...a}));On.displayName=`Button`;var kn=r.createContext(null);function An(){let e=r.useContext(kn);if(!e)throw Error(`useCarousel must be used within a <Carousel />`);return e}var jn=r.forwardRef(({orientation:e=`horizontal`,opts:t,setApi:n,plugins:a,className:o,children:s,...c},l)=>{let[u,d]=Pe({...t,axis:e===`horizontal`?`x`:`y`},a),[f,p]=r.useState(!1),[m,h]=r.useState(!1),g=r.useCallback(e=>{e&&(p(e.canScrollPrev()),h(e.canScrollNext()))},[]),_=r.useCallback(()=>{d?.scrollPrev()},[d]),v=r.useCallback(()=>{d?.scrollNext()},[d]),y=r.useCallback(e=>{e.key===`ArrowLeft`?(e.preventDefault(),_()):e.key===`ArrowRight`&&(e.preventDefault(),v())},[_,v]);return r.useEffect(()=>{!d||!n||n(d)},[d,n]),r.useEffect(()=>{if(d)return g(d),d.on(`reInit`,g),d.on(`select`,g),()=>{d?.off(`select`,g)}},[d,g]),(0,i.jsx)(kn.Provider,{value:{carouselRef:u,api:d,opts:t,orientation:e||(t?.axis===`y`?`vertical`:`horizontal`),scrollPrev:_,scrollNext:v,canScrollPrev:f,canScrollNext:m},children:(0,i.jsx)(`div`,{ref:l,onKeyDownCapture:y,className:rn(`relative`,o),role:`region`,"aria-roledescription":`carousel`,...c,children:s})})});jn.displayName=`Carousel`;var Mn=r.forwardRef(({className:e,...t},n)=>{let{carouselRef:r,orientation:a}=An();return(0,i.jsx)(`div`,{ref:r,className:`overflow-hidden`,children:(0,i.jsx)(`div`,{ref:n,className:rn(`flex`,a===`horizontal`?`-ml-4`:`-mt-4 flex-col`,e),...t})})});Mn.displayName=`CarouselContent`;var Nn=r.forwardRef(({className:e,...t},n)=>{let{orientation:r}=An();return(0,i.jsx)(`div`,{ref:n,role:`group`,"aria-roledescription":`slide`,className:rn(`min-w-0 shrink-0 grow-0 basis-full`,r===`horizontal`?`pl-4`:`pt-4`,e),...t})});Nn.displayName=`CarouselItem`;var Pn=r.forwardRef(({className:e,variant:t=`outline`,size:n=`icon`,...r},a)=>{let{orientation:o,scrollPrev:s,canScrollPrev:c}=An();return(0,i.jsxs)(On,{ref:a,variant:t,size:n,className:rn(`absolute  h-8 w-8 rounded-full`,o===`horizontal`?`-left-12 top-1/2 -translate-y-1/2`:`-top-12 left-1/2 -translate-x-1/2 rotate-90`,e),disabled:!c,onClick:s,...r,children:[(0,i.jsx)(h,{className:`h-4 w-4`}),(0,i.jsx)(`span`,{className:`sr-only`,children:`Previous slide`})]})});Pn.displayName=`CarouselPrevious`;var Fn=r.forwardRef(({className:e,variant:t=`outline`,size:n=`icon`,...r},a)=>{let{orientation:o,scrollNext:s,canScrollNext:c}=An();return(0,i.jsxs)(On,{ref:a,variant:t,size:n,className:rn(`absolute h-8 w-8 rounded-full`,o===`horizontal`?`-right-12 top-1/2 -translate-y-1/2`:`-bottom-12 left-1/2 -translate-x-1/2 rotate-90`,e),disabled:!c,onClick:s,...r,children:[(0,i.jsx)(g,{className:`h-4 w-4`}),(0,i.jsx)(`span`,{className:`sr-only`,children:`Next slide`})]})});Fn.displayName=`CarouselNext`;function In({slides:e}){let[t,n]=(0,r.useState)(null),a=(0,r.useCallback)(()=>n(null),[]),o=(0,r.useCallback)(()=>n(t=>t===null?t:(t+e.length-1)%e.length),[e.length]),s=(0,r.useCallback)(()=>n(t=>t===null?t:(t+1)%e.length),[e.length]);(0,r.useEffect)(()=>{if(t===null)return;let e=e=>{e.key===`Escape`&&a(),e.key===`ArrowLeft`&&o(),e.key===`ArrowRight`&&s()};return window.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`,()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[t,a,o,s]);let c=t===null?null:e[t];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(jn,{className:`mt-8`,opts:{loop:!0},children:[(0,i.jsx)(Mn,{children:e.map((e,t)=>(0,i.jsxs)(Nn,{children:[(0,i.jsxs)(`button`,{type:`button`,onClick:()=>n(t),className:`group relative block w-full cursor-zoom-in overflow-hidden rounded-sm border border-border text-left`,"aria-label":`Open ${e.alt} full size`,children:[(0,i.jsx)(`img`,{src:e.src,alt:e.alt,width:1600,height:1e3,loading:`lazy`,className:`aspect-[16/10] w-full object-cover`}),(0,i.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25`,children:(0,i.jsx)(b,{className:`h-6 w-6 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100`})})]}),e.caption?(0,i.jsx)(`figcaption`,{className:`mt-3 text-xs text-muted-foreground`,children:e.caption}):null]},e.src))}),(0,i.jsxs)(`div`,{className:`mt-5 flex gap-2`,children:[(0,i.jsx)(Pn,{className:`static translate-y-0 rounded-sm border-border`}),(0,i.jsx)(Fn,{className:`static translate-y-0 rounded-sm border-border`})]})]}),c?(0,i.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":c.alt,onClick:a,className:`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10`,children:[(0,i.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Close`,className:`absolute right-4 top-4 rounded-sm p-2 text-white/70 transition-colors hover:text-white`,children:(0,i.jsx)(y,{className:`h-6 w-6`})}),(0,i.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),o()},"aria-label":`Previous image`,className:`absolute left-2 rounded-sm p-2 text-white/70 transition-colors hover:text-white md:left-6`,children:(0,i.jsx)(_,{className:`h-8 w-8`})}),(0,i.jsxs)(`figure`,{onClick:e=>e.stopPropagation(),className:`flex max-h-full max-w-full flex-col items-center`,children:[(0,i.jsx)(`img`,{src:c.src,alt:c.alt,className:`max-h-[80vh] max-w-full rounded-sm border border-white/10 object-contain`}),c.caption?(0,i.jsx)(`figcaption`,{className:`mt-4 max-w-2xl text-center text-sm text-white/70`,children:c.caption}):null]}),(0,i.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),s()},"aria-label":`Next image`,className:`absolute right-2 rounded-sm p-2 text-white/70 transition-colors hover:text-white md:right-6`,children:(0,i.jsx)(v,{className:`h-8 w-8`})})]}):null]})}var Ln=`/portfolio-alfabet/assets/chatbot-1-BTYsEfXH.png`,Rn=`/portfolio-alfabet/assets/chatbot-2-C6gFjh6_.png`,zn=`import os
import shutil
import fitz  # PyMuPDF
import pandas as pd
import json
from pathlib import Path
from datetime import datetime
import google.generativeai as genai
from tqdm import tqdm
from dotenv import load_dotenv
import re

# Load configuration and API key from .env file
load_dotenv()
API_KEY = os.environ.get("GOOGLE_API_KEY")

ROOT_DIR = Path('.')
FOLDERS = {
    "tosort": ROOT_DIR / "tosort",
    "marketing": ROOT_DIR / "marketing_expenses",
    "non_marketing": ROOT_DIR / "non_marketing_expenses",
    "unsure": ROOT_DIR / "unsure",
    "failed": ROOT_DIR / "could_not_process"
}
MASTER_LOG = ROOT_DIR / "expenses_log.xlsx"

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

# Ensure all working directories exist
for folder in FOLDERS.values():
    folder.mkdir(exist_ok=True)

# Load master log to enable deduplication (skip already processed files)
if MASTER_LOG.exists() and MASTER_LOG.stat().st_size > 100:
    try:
        master_df = pd.read_excel(MASTER_LOG)
        processed_files = set(master_df['document_name'].astype(str))
    except Exception as e:
        print(f"[WARN] Could not read master log. Resetting. Reason: {e}")
        master_df = pd.DataFrame()
        processed_files = set()
else:
    master_df = pd.DataFrame()
    processed_files = set()

def extract_text_from_pdf(file_path):
    """Extracts raw text from all pages of a PDF using PyMuPDF (fitz)."""
    try:
        with fitz.open(file_path) as doc:
            return "\\n".join(page.get_text() for page in doc) or None
    except Exception as e:
        print(f"Error reading {file_path.name}: {e}")
        return None

def clean_response_text(text):
    """Cleans markdown code blocks (like \`\`\`json) from the LLM's response."""
    text = text.strip()
    if text.startswith("\`\`\`json"):
        text = re.sub(r"^\`\`\`json\\s*", "", text)
    if text.endswith("\`\`\`"):
        text = re.sub(r"\\s*\`\`\`$", "", text)
    return text.strip()

def extract_amount_and_currency(amount_str):
    """Parses currency symbols/codes and normalizes the numeric amount."""
    if not amount_str or not isinstance(amount_str, str):
        return "", ""
    s = amount_str.strip()
    currency_patterns = {
        "€": "EUR", "EUR": "EUR", "$": "USD", "USD": "USD",
        "£": "GBP", "GBP": "GBP", "CHF": "CHF", "¥": "JPY",
        "JPY": "JPY", "CAD": "CAD", "AUD": "AUD",
        "SEK": "SEK", "NOK": "NOK", "DKK": "DKK"
    }
    currency = "UNK"
    for symbol, code in currency_patterns.items():
        if symbol in s:
            currency = code
            s = s.replace(symbol, "")
    s = s.replace(" ", "").replace(",", ".").replace("'", "")
    try:
        value = float(s)
        return f"{value:.2f}", currency
    except ValueError:
        return amount_str.strip(), currency

def call_gemini_api(text, filename):
    """Sends invoice text to Gemini with a strict JSON extraction and categorization prompt."""
    prompt = f"""You are a strict invoice data extractor. Always respond with valid JSON only. The invoice may be in Dutch or English.

TASKS:
1. Categorize the invoice as "marketing" or "non-marketing".
2. Return a confidence score from 0 to 100 for your categorization. Use high confidence (85–100) only when the invoice clearly fits the category based on explicit terms. Use lower scores if the content is vague, ambiguous, or mixed. Never guess with high confidence.
3. Extract the following fields:
    - Our document name: {filename}
    - Their invoice number
    - Invoice date
    - Total amount including VAT (include currency symbol or code)
    - VAT % (if specified on invoice)
    - Vendor
    - A one-line description of the invoice

Respond strictly in JSON format like this:
{{
  "category": "marketing",
  "confidence": 85,
  "invoice_number": "...",
  "invoice_date": "...",
  "total_amount_incl_vat": "...",
  "vatpercentage": "...",
  "vendor": "...",
  "description": "..."
}}

Here is the invoice text:
{text}
"""
    try:
        response = model.generate_content(prompt)
        raw = getattr(response, "text", "")
        if not raw:
            print(f"[ERROR] Gemini response for {filename} was empty or malformed.")
            return None
        return json.loads(clean_response_text(raw))
    except json.JSONDecodeError as e:
        print(f"[ERROR] Invalid JSON in response for {filename}: {e}")
        print("[DEBUG] Raw response:", raw)
        return None
    except Exception as e:
        print(f"[ERROR] Gemini call failed for {filename}: {e}")
        return None

def save_to_excel(file_path, row_data, columns):
    """Appends processed row data to an Excel log file safely."""
    new_row = pd.DataFrame([row_data], columns=columns)
    if not file_path.exists() or file_path.stat().st_size < 100:
        df = new_row
    else:
        try:
            df = pd.read_excel(file_path)
            df = pd.concat([df, new_row], ignore_index=True)
        except Exception as e:
            print(f"Warning: Couldn't read {file_path.name}, recreating it. Reason: {e}")
            df = new_row
    df.to_excel(file_path, index=False)

# Define columns structure for the Excel logs
columns = [
    "timestamp", "document_name", "invoice_number", "invoice_date",
    "total_amount_incl_vat", "currency", "vatpercentage", "vendor",
    "description", "category", "confidence"
]

# Main processing loop over all PDFs in the 'tosort' folder
for file in tqdm(FOLDERS["tosort"].glob("*.pdf"), desc="Processing invoices"):
    filename = file.name
    
    # Skip files that have already been processed and logged
    if filename in processed_files:
        continue

    text = extract_text_from_pdf(file)
    timestamp = datetime.now().isoformat()

    # Handle cases where text couldn't be extracted
    if not text:
        category = "could_not_process"
        dest_folder = FOLDERS["failed"]
        row_data = [timestamp, filename, "", "", "", "", "", "", "", category, ""]
    else:
        result = call_gemini_api(text, filename)
        if not result:
            category = "could_not_process"
            dest_folder = FOLDERS["failed"]
            row_data = [timestamp, filename, "", "", "", "", "", "", "", category, ""]
        else:
            category = result["category"]
            confidence = result.get("confidence", 0)
            amount_raw = result.get("total_amount_incl_vat", "")
            amount_cleaned, currency = extract_amount_and_currency(amount_raw)

            row_data = [
                timestamp, filename,
                result.get("invoice_number", ""),
                result.get("invoice_date", ""),
                amount_cleaned, currency,
                result.get("vatpercentage", ""),
                result.get("vendor", ""),
                result.get("description", ""),
                category, confidence
            ]

            # Route files based on confidence thresholds and categories
            if confidence < 85:
                category = "unsure"
                dest_folder = FOLDERS["unsure"]
            elif category == "marketing":
                dest_folder = FOLDERS["marketing"]
            else:
                dest_folder = FOLDERS["non_marketing"]

    # Copy file to its designated folder and log the data
    shutil.copy(file, dest_folder / filename)
    save_to_excel(dest_folder / f"expenses_{category}.xlsx", row_data, columns)
    save_to_excel(MASTER_LOG, row_data, columns)`,Bn=`# Variabelen

    # Pad van je CSV met benodigde URLs in kolom A (D7) en B (D9)
csvPath = 'input.csv'
outputPath = 'output.csv'

    # Belangrijk: Vul hier de titel in voor de 'Geen toegang'-pagina voor D7 en D9 - voor de bezoekbaarheid check
geenToegangD7 = "Geen toegang / Inloggen - [CLIENT]"
geenToegangD9 = "Inloggen | Paddle"

# Eerst importeren we wat benodigde libraries - beautifulsoup kan html parsen en mechanicalsoup kan formulieren invullen/submitten

from bs4 import BeautifulSoup
import requests
import csv
import mechanicalsoup
browser = mechanicalsoup.StatefulBrowser()

# headers/cookies zodat het script ingelogd is wanneer hij de pagina's bezoekt - soms gebruik ik een functie ook zonder headers om de niet-ingelogde pagina te checken

headersD7 = {
    'authority': 'login.example-cms.net',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://www.google.com/',
    'accept-language': 'nl,en-US;q=0.9,en;q=0.8,fr;q=0.7',
    'cookie': 'has_js=1; SSESS<SESSION-COOKIE>',
}

headersD9 = {
    'authority': 'client-site.example-cms.net',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'nl,en-US;q=0.9,en;q=0.8,fr;q=0.7',
    'cookie': 'SSESS<SESSION-COOKIE>',
}


# lege lijst die gevuld wordt met inhoud van de input csv
contents = []

# csv input openen

with open(csvPath,'r') as csvf:
    urls = csv.reader(csvf)
    for url in urls:        
        contents.append(url)

# output csv leeg maken

fileVariable = open(outputPath, 'r+')
fileVariable.truncate(0)
fileVariable.close() 

# csv output openen en de titel kolommen invullen

with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
    resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    resultaat_schrijven.writerow(["D7", "D9", "Both accessible by visitor", "URL-structure OK", "Breadcrumb OK", "Summary OK", "SEO title OK", "SEO description OK", "Depublication date OK"])

# loop door de input csv

for url in contents:
    page = requests.get(url[0], headers=headersD7)
    page2 = requests.get(url[1], headers=headersD9)

    # niet-ingelogde pagina's laden

    pageNL = requests.get(url[0])
    page2NL = requests.get(url[1])

    # ingelogde en niet-ingelogde pagina's parsen

    soup = BeautifulSoup(page.text, "html.parser")
    soup2 = BeautifulSoup(page2.text, "html.parser")

    soupNL = BeautifulSoup(pageNL.text, "html.parser")
    soup2NL = BeautifulSoup(page2NL.text, "html.parser")    

    # bewerk-knop zoeken op d7 en d9

    try:
        bewerkKnopD7 = soup.find('a', class_="edit")['href']
    except:
        bewerkKnopD7 = ""

    print(bewerkKnopD7)
    
    try:    
        bewerkKnopD9 = soup2.select_one('a[data-drupal-link-system-path^="node/"][data-drupal-link-system-path$="/edit"]')['href']
    except:
        bewerkKnopD9 = ""

    # als ze niet bestaan wordt het een lege string - dat zal een error geven in de csv, meestal betekent het dat er een pagina niet bestaat oid
    # hij bouwt de bewerkings-URL op uit het nodenummer dat hij van de livepagina scrapet. Op d7 zal er dan ook geen token gebruikt worden dus pagina hoeft niet unlocked te worden. D9 unock ik door naar de unlock-pagina te surfen en daar te submitten - kan eigenlijk beter de bewerkingspagina gewoon submitten besef ik me

    if bewerkKnopD7 != "" and bewerkKnopD9 != "":
        bewerkKnopD7 = (bewerkKnopD7.split("/"))[5]
        preURL = (url[0].split("/"))[2:]

        bewerkLinkD7 = "https://" + preURL[0] + "/nl/node/" + bewerkKnopD7 + "/edit"

        preURL2 = (url[1].split("/"))[2:]
        nodeD9 = bewerkKnopD9.split("/")[2]

        bewerkLinkD9 = "https://" + preURL2[0] + bewerkKnopD9

        unlockLinkD9 = "https://" + preURL2[0] + "/admin/lock/break/node/" + nodeD9 + "/und/%2A"

        # Status checker. hij checkt of de titel van de gescrapete pagina's gelijk staat aan die bovenaan dit script, om zo te zien of de pagina beschikbaar is zonder ingelogd te zijn.

        titelD7 = soupNL.find('title').get_text()
        titelD9 = soup2NL.find('title').get_text()

        if titelD7 == geenToegangD7:
            D7onbeschikbaar = "Yes"
        else:
            D7onbeschikbaar = "No"

        if titelD9 == geenToegangD9:
            D9onbeschikbaar = "Yes"
        else:
            D9onbeschikbaar = "No"

        if D7onbeschikbaar == D9onbeschikbaar:
            beschikbaarheidgelijk = "Yes"
        else:
            beschikbaarheidgelijk = "No"


        # BREADCRUMB

        # Hij zoekt hier in kolom A naar het div element met klasse breadcrumb en neemt er de li elementen uit.
        try:    
            breadcrumbD7 = soup.find('div', attrs={'id': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD7 = ""

            # Hij zoekt hier in kolom B naar het ol element met klasse breadcrumb en neemt er de li elementen uit.
        try:
            breadcrumbD9 = soup2.find('ol', attrs={'class': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD9 = ""    
        
            # Array maken met alle D9 breadcrumbs
        breadcrumbs = []
        for b in breadcrumbD9:
            result = b.get_text().strip()
            breadcrumbs.append(result)
            # Array maken met alle D7 breadcrumbs
        breadcrumbs2 = []
        for b in breadcrumbD7:
            result = b.get_text().strip()
            breadcrumbs2.append(result)

        # home verwijderen

        try:
            breadcrumbs.remove("Accueil")
        except:
            test=""

        try:
            breadcrumbs2.remove("Accueil")
        except:
            test=""

        try:
            breadcrumbs.remove("Home")
        except:
            test=""

        try:
            breadcrumbs2.remove("Home")
        except:
            test=""

        try:
            breadcrumbs.pop()
        except:
            test=""

        try:
            breadcrumbs2.pop()
        except:
            test=""
        
        # pop functie verwijdert laatste element uit lijst - paginatitel in dit geval


        if breadcrumbs == breadcrumbs2:
            breadcrumbsGelijk = "Yes"
        else:
            breadcrumbsGelijk = "No"

        print(breadcrumbs)
        print(breadcrumbs2)

        # url structuur, moet aangepast worden naargelang aantal / tot de structuur (bij /nl/ zal het er bv één meer zijn)

        splitURLD7 = (url[0].split("/"))[3:]
        splitURLD9 = (url[1].split("/"))[3:]

        if splitURLD7 == splitURLD9:
            URLstructuurGelijk = "Yes"
        else:
            URLstructuurGelijk ="No"

        
        # Bewerk-links openen
        page3 = requests.get(bewerkLinkD7, headers=headersD7)
        page4 = requests.get(bewerkLinkD9, headers=headersD9)

        # Parsen
        soup3 = BeautifulSoup(page3.text, "html.parser")
        soup4 = BeautifulSoup(page4.text, "html.parser")


        #Seo titel veld parsen
        try:
            seotitelD7 = soup3.find("input", {"name" : "field_paddle_seo_title[und][0][value]"})['value']
        except:
            seotitelD7 = ""
        try:
            seotitelD9 = soup4.find("input", {"id" : "edit-metatags-0-basic-title"})['value']
        except:
            seotitelD9 = ""
        if seotitelD9 == "[node:title] | [site:name]":
            seotitelD9 = ""
        
        if seotitelD7.strip() == seotitelD9.strip():
            seotitelgelijk = "Yes"
        else:
            seotitelgelijk = "No"

        # seo beschrijving
        try:
            seobeschrijvingD7 = soup3.find("textarea", {"name" : "field_paddle_seo_description[und][0][value]"}).contents[0]
        except:
            seobeschrijvingD7 = ""

        try:
            seobeschrijvingD9 = soup4.find("textarea", {"name" : "metatags[0][basic][description]"}).contents[0]
        except:
            seobeschrijvingD9 = ""

        if seobeschrijvingD9 == "[node:summary]":
            seobeschrijvingD9 = ""

        if seobeschrijvingD7.strip() == seobeschrijvingD9.strip():
            seobeschrijvinggelijk = "Yes"
        else:
            seobeschrijvinggelijk = "No"

        # depublicatiedatum

        depublicatiedatumd7container = soup3.find("li", {"class" : "node-metadata-item-unpublish"})
        depublicatiedatumd7 = depublicatiedatumd7container.find("span", {"class" : "value"}).get_text()
        if depublicatiedatumd7 == "-":
            depublicatiedatumd7 = ""
        else:
            depublicatiedatumd7 = depublicatiedatumd7.split("-")
            depublicatiedatumd7 = depublicatiedatumd7[0].split()
            depublicatiedatumd7 = depublicatiedatumd7[0].split("/")
            depublicatiedatumd7 = depublicatiedatumd7[0] + depublicatiedatumd7[1] + depublicatiedatumd7[2]
        try:
            depublicatiedatumd9 = soup4.find("input", {"name" : "unpublish_on[0][value][date]"}).get('value')
        except:
            depublicatiedatumd9 = ""

        if depublicatiedatumd9 != "":
                depublicatiedatumd9 = depublicatiedatumd9.split("-")
                depublicatiedatumd9 = depublicatiedatumd9[2] + depublicatiedatumd9[1] + depublicatiedatumd9[0]

        if depublicatiedatumd7 == depublicatiedatumd9:
            depublicatiedatumgelijk = "Yes"
        else:
            depublicatiedatumgelijk = "No"

        # samenvatting
        try:
            samenvattingD7 = soup3.find("textarea", {"name" : "body[und][0][summary]"}).contents[0]
        except:
            samenvattingD7 = ""
        try:
            samenvattingD9 = soup4.find("textarea", {"name" : "body[0][summary]"}).contents[0]
        except:
            samenvattingD9 = ""    

        if samenvattingD7.strip() == samenvattingD9.strip():
            samenvattinggelijk = "Yes"
        else:
            samenvattinggelijk = "No"

        # mechanicalsoup opent unockpagina en submit

        browser.open(unlockLinkD9, headers=headersD9)
        browser.select_form()
        browser.submit_selected(headers=headersD9)

        # csv kolommen worden geschreven

        with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], beschikbaarheidgelijk, URLstructuurGelijk, breadcrumbsGelijk, samenvattinggelijk, seotitelgelijk, seobeschrijvinggelijk, depublicatiedatumgelijk])
    # wanneer de pagina niet geopend kan worden
    else:
        with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], "error"])`,Vn=`# Variabelen

    # Pad van je CSV met benodigde URLs in kolom A (D7) en B (D9)
csvPath = 'input.csv'
outputPath = 'output.csv'

    # Belangrijk: Vul hier de titel in voor de 'Geen toegang'-pagina
geenToegangD7 = "Pagina niet gevonden - [CLIENT]"
geenToegangD9 = "Geen toegang | Paddle"

# Eerst importeren we wat benodigde libraries

from bs4 import BeautifulSoup
import requests
import csv
import mechanicalsoup
browser = mechanicalsoup.StatefulBrowser()

headersD7 = {
    'authority': 'login.example-cms.net',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-gpc': '1',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'en-US,en;q=0.9,nl;q=0.8',
    'cookie': 'has_js=1; SSESS<SESSION-COOKIE>',
}

headersD9 = {
    'authority': 'client-site.example-cms.net',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-gpc': '1',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'en-US,en;q=0.9,nl;q=0.8',
    'cookie': 'cookie-agreed=2; SSESS<SESSION-COOKIE>',
}

contents = []
editLinks = []
unlockLinks = []

with open(csvPath,'r') as csvf:
    urls = csv.reader(csvf)
    for url in urls:        
        contents.append(url)

fileVariable = open(outputPath, 'r+')
fileVariable.truncate(0)
fileVariable.close() 

with open(outputPath, mode='a', newline='') as resultaten:
    resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    resultaat_schrijven.writerow(["D7", "D9", "Both accessible by visitor", "URL-structure OK", "Breadcrumb OK", "Summary OK", "SEO title OK", "SEO description OK", "Depublication date OK"])

for url in contents:
    page = requests.get(url[0], headers=headersD7)
    page2 = requests.get(url[1], headers=headersD9)

    # no login pagina's

    pageNL = requests.get(url[0])
    page2NL = requests.get(url[1])

    # Parsen
    soup = BeautifulSoup(page.text, "html.parser")
    soup2 = BeautifulSoup(page2.text, "html.parser")

    soupNL = BeautifulSoup(pageNL.text, "html.parser")
    soup2NL = BeautifulSoup(page2NL.text, "html.parser")
    try:
        bewerkKnopD7 = soup.find('a', attrs={'title': 'Preview sluiten'})['href']
    except:
        bewerkKnopD7 = ""
    
    try:    
        bewerkKnopD9 = soup2.find('a', href=True, text='Bewerken')['href']
    except:
        bewerkKnopD9 = ""

    if bewerkKnopD7 != "" and bewerkKnopD9 != "":
        bewerkKnopD7 = (bewerkKnopD7.split("/"))[5]
        preURL = (url[0].split("/"))[2:]

        bewerkLinkD7 = "https://" + preURL[0] + "/nl/node/" + bewerkKnopD7 + "/edit"

        preURL2 = (url[1].split("/"))[2:]
        nodeD9 = bewerkKnopD9.split("/")[2]

        bewerkLinkD9 = "https://" + preURL2[0] + bewerkKnopD9

        unlockLinkD9 = "https://" + preURL2[0] + "/admin/lock/break/node/" + nodeD9 + "/und/%2A"
        print(unlockLinkD9)

        # Status

        titelD7 = soupNL.find('title').get_text()
        titelD9 = soup2NL.find('title').get_text()

        if titelD7 == geenToegangD7:
            D7onbeschikbaar = "Yes"
        else:
            D7onbeschikbaar = "No"

        if titelD9 == geenToegangD9:
            D9onbeschikbaar = "Yes"
        else:
            D9onbeschikbaar = "No"

        if D7onbeschikbaar == D9onbeschikbaar:
            beschikbaarheidgelijk = "Yes"
        else:
            beschikbaarheidgelijk = "No"


        # BREADCRUMB

        # Hij zoekt hier in kolom A naar het div element met klasse breadcrumb en neemt er de li elementen uit.
        try:    
            breadcrumbD7 = soup.find('div', attrs={'id': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD7 = ""

            # Hij zoekt hier in kolom B naar het ol element met klasse breadcrumb en neemt er de li elementen uit.
        try:
            breadcrumbD9 = soup2.find('ol', attrs={'class': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD9 = ""    

            # Array maken met alle D9 breadcrumbs
        breadcrumbs = []
        for b in breadcrumbD9[0:]:
            result = b.text.strip()
            breadcrumbs.append(result)

        breadcrumbs2 = []
        for b in breadcrumbD7[0:]:
            result = b.text.strip()
            breadcrumbs2.append(result)

        try:
            breadcrumbs.remove("Home")
        except:
            test=""

        try:
            breadcrumbs2.remove("Home")
        except:
            test=""
        
        try:
            breadcrumbs.pop()
        except:
            test = ""

        try:
            breadcrumbs2.pop()
        except:
            test = ""

        if breadcrumbs == breadcrumbs2:
            breadcrumbsGelijk = "Yes"
        else:
            breadcrumbsGelijk = "No"

        # url structuur, moet aangepast worden naargelang aantal / tot de structuur

        splitURLD7 = (url[0].split("/"))[4:]
        splitURLD9 = (url[1].split("/"))[3:]

        if splitURLD7 == splitURLD9:
            URLstructuurGelijk = "Yes"
        else:
            URLstructuurGelijk ="No"

        
        # Kolom A en B uit de csv halen
        page3 = requests.get(bewerkLinkD7, headers=headersD7)
        page4 = requests.get(bewerkLinkD9, headers=headersD9)

        # Parsen
        soup3 = BeautifulSoup(page3.text, "html.parser")
        soup4 = BeautifulSoup(page4.text, "html.parser")

        #seo titel

        seotitelD7 = soup3.find("input", {"name" : "field_paddle_seo_title[und][0][value]"}).get('value')

        seotitelD9 = soup4.find("input", {"id" : "edit-metatags-0-basic-title"}).get('value')
        if seotitelD9 == "[node:title] | [site:name]":
            seotitelD9 = ""
        
        if seotitelD7.strip() == seotitelD9.strip():
            seotitelgelijk = "Yes"
        else:
            seotitelgelijk = "No"

        # seo beschrijving
        try:
            seobeschrijvingD7 = soup3.find("textarea", {"name" : "field_paddle_seo_description[und][0][value]"}).contents[0]
        except:
            seobeschrijvingD7 = ""

        try:
            seobeschrijvingD9 = soup4.find("textarea", {"name" : "metatags[0][basic][description]"}).contents[0]
        except:
            seobeschrijvingD9 = ""

        if seobeschrijvingD9 == "[node:summary]":
            seobeschrijvingD9 = ""

        if seobeschrijvingD7.strip() == seobeschrijvingD9.strip():
            seobeschrijvinggelijk = "Yes"
        else:
            seobeschrijvinggelijk = "No"

        # depublicatiedatum

        depublicatiedatumd7container = soup3.find("li", {"class" : "node-metadata-item-unpublish"})
        depublicatiedatumd7 = depublicatiedatumd7container.find("span", {"class" : "value"}).get_text()
        if depublicatiedatumd7 == "-":
            depublicatiedatumd7 = ""
        else:
            depublicatiedatumd7 = depublicatiedatumd7.split("-")
            depublicatiedatumd7 = depublicatiedatumd7[0].split()
            depublicatiedatumd7 = depublicatiedatumd7[0].split("/")
            depublicatiedatumd7 = depublicatiedatumd7[0] + depublicatiedatumd7[1] + depublicatiedatumd7[2]

        depublicatiedatumd9 = soup4.find("input", {"name" : "unpublish_on[0][value][date]"}).get('value')
        if depublicatiedatumd9 != "":
                depublicatiedatumd9 = depublicatiedatumd9.split("-")
                depublicatiedatumd9 = depublicatiedatumd9[2] + depublicatiedatumd9[1] + depublicatiedatumd9[0]

        if depublicatiedatumd7 == depublicatiedatumd9:
            depublicatiedatumgelijk = "Yes"
        else:
            depublicatiedatumgelijk = "No"

        # samenvatting
        try:
            samenvattingD7 = soup3.find("textarea", {"name" : "body[und][0][summary]"}).contents[0]
        except:
            samenvattingD7 = ""
        try:
            samenvattingD9 = soup4.find("textarea", {"name" : "body[0][summary]"}).contents[0]
        except:
            samenvattingD9 = ""    

        if samenvattingD7.strip() == samenvattingD9.strip():
            samenvattinggelijk = "Yes"
        else:
            samenvattinggelijk = "No"

        browser.open(unlockLinkD9, headers=headersD9)
        browser.select_form()
        browser.submit_selected(headers=headersD9)

        with open(outputPath, mode='a', newline='') as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], beschikbaarheidgelijk, URLstructuurGelijk, breadcrumbsGelijk, samenvattinggelijk, seotitelgelijk, seobeschrijvinggelijk, depublicatiedatumgelijk])

    else:
        print("error")
        
        with open(outputPath, mode='a', newline='') as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], "error"])`,Hn=`{
  "nodes": [
    {
      "parameters": {
        "options": {
          "systemMessage": "You are a dynamic Odoo 18 assistant AI. You possess tools allowing you to run inspections and execute precise JSON-RPC data fetches on the company Odoo instance.\\n\\n### CRITICAL CONSTRAINT: High-Level Summaries First (Token & Iteration Guardrail)\\n- **Do not go deep into nested records on initial broad requests.** If a user asks about the \\"state\\", \\"status\\", \\"overview\\", or \\"summary\\" of a board, project, account, or module, DO NOT iterate through individual records, sub-tasks, tickets, or line items one-by-one.\\n- **Aggregate & Count:** Instead of downloading full sub-record data, query for high-level metadata, total record counts, or stage distributions (e.g., how many tasks are in 'In Progress' vs 'Done').\\n- **Use Aggregation for Math/Totals/Groupings:** If a question asks for a sum, total volume, count, numerical average, or a ranked leaderboard/distribution (e.g., \\"Which company sent the most tickets?\\", \\"How many tasks are in each stage?\\", \\"How many hours were logged?\\"), you MUST use the \`aggregate_odoo_records\` tool and supply the appropriate field in the \`groupby\` array parameter.\\n- **NEVER List Records to Count Them:** Do not print or list out items line-by-line inside your internal thoughts or final response to analyze or count them. If you need a total count or mathematical sum, write an explicit query using your aggregation tools or rely on the tool's absolute limits.\\n- **Be Lazy with Data Fetching:** Provide a clear, bird's-eye view summary first. End your response by telling the user exactly what deep data is available, offering to look closer *only* if they request it.\\n- **Granular Execution:** Only execute deep, record-by-record inspections if the user explicitly names a specific ticket/task, or explicitly commands you to \\"list details for all items\\".\\n- **Iteration Breakout:** If a query yields massive amounts of rows, STOP immediately. Do not recursively call the search tool to paginate through hundreds of lines. Summarize what you found within the first page of results, state that more records exist, and ask the user if they want to narrow down the date range or filter criteria.\\n- **BATCH YOUR QUERIES (Anti-N+1 Loop Rule):** If you find a list of parent record IDs and you need to fetch their sub-details, NEVER call your tools in a loop for each ID. You must combine all collected IDs into a single batch request using Odoo's 'in' operator (e.g., \`[[\\"order_id\\", \\"in\\", [ID1, ID2, ID3]]]\`).\\n- **Max Tool Call Cap:** Aim to resolve every user request within a maximum of 4 to 5 total tool calls. If you find yourself repeatedly calling the same tool for different IDs, STOP, batch the IDs together, or summarize your findings based on the data you already have.\\n- **Intelligent Fallback Protocol (Max 2 Attempts):** If a primary tool call returns an empty list \`[]\`, you are allowed exactly ONE smart fallback pivot. If your secondary fallback query also returns \`[]\`, stop executing tools immediately, explain what you checked, and ask the user for clarification.\\n\\n### ODOO STRATEGIC PLANNING & DATA HYGIENE RULES\\nBefore executing ANY data-gathering tool call, you must mentally plan your database query using the following blueprint to guarantee absolute business logic accuracy.\\n\\n#### 1. THE CORE MODULE BLUEPRINT (Sources of Truth)\\nWhen querying the following modules, you must use these exact architectural fields. Never guess:\\n\\n*   **TIMESHEETS / TIME LOGS:**\\n    *   **Model:** \`account.analytic.line\`\\n    *   **Identity Mapping (The Unified Search):** To ensure 100% coverage across split profiles or unlinked data, you must search BOTH \`hr.employee\` AND \`res.users\` for the colleague's name. Extract all active IDs from both models.\\n    *   **The Combined 'OR' Domain:** You must query the timesheet table using an explicit OR operator syntax (\`'|'\`) to match EITHER the Employee profile OR the User login. For example, your domain filter must look like this:\\n        \`['|', [\\"employee_id\\", \\"in\\", [EMPLOYEE_IDS]], [\\"user_id\\", \\"in\\", [USER_IDS]], [\\"date\\", \\">=\\", \\"YYYY-MM-DD\\"], [\\"date\\", \\"<=\\", \\"YYYY-MM-DD\\"]]\`\\n    *   **Date Filter Field:** \`date\` (This is the calendar day the work occurred). Never use \`create_date\`.\\n    *   **Value to Sum/Aggregate:** \`unit_amount\` (This stores the exact hours logged).\\n\\n*   **SALES LINES:**\\n    *   **Model:** \`sale.order.line\`\\n    *   **Date Filter Field:** \`order_id.date_order\` (The date the sale was confirmed).\\n    *   **Value to Sum/Aggregate:** \`product_uom_qty\` (Physical volume of units sold).\\n    *   **State Filter:** Must include \`[\\"order_id.state\\", \\"in\\", [\\"sale\\", \\"done\\"]]\` to filter out drafts/cancelled orders.\\n\\n*   **INVOICES / ACCOUNTING ITEMS:**\\n    *   **Model:** \`account.move.line\`\\n    *   **Date Filter Field:** \`move_id.invoice_date\` or \`date\`.\\n    *   **Value to Sum/Aggregate:** \`quantity\` (for volume) or \`price_subtotal\` (for financial totals).\\n    *   **State Filter:** Must include \`[\\"move_id.state\\", \\"=\\", \\"posted\\"]\` to isolate confirmed entries.\\n\\n#### 2. THE SYSTEMIC HYGIENE & DUPLICATE PROTOCOL (100% Accuracy Shield)\\n- **Active Filter Mandate:** For ANY master data search (including \`res.users\`, \`hr.employee\`, \`res.partner\`, or \`product.product\`), you MUST explicitly include \`[\\"active\\", \\"=\\", true]\` in the domain array. This guarantees archived, deactivated, or dead testing duplicates are instantly filtered out.\\n- **The Multiple-ID Discrepancy Halt:** If a search for a specific individual's name returns more than one unique ID record (as seen with duplicates or split profiles), DO NOT blindly pick one, and DO NOT blindly sum their values together. \\n- **Resolution Step:** Immediately perform an inspection search on those specific IDs to check distinguishing fields like \`email\`, \`login\`, or \`department_id\`. If they belong to the same physical person (e.g., a split profile), combine them and gently notify the user in your final answer that duplicate records exist. If they represent different people entirely, halt your calculation and ask the user to specify which individual they mean.\\n- **The B2B Company Rollup Mandate:** In Odoo, individual contacts are nested under parent corporations. If a user asks a question about counts, totals, leaderboards, or metrics for a \\"Company\\" or \\"Customer Organization\\" (e.g., \\"Which company sent the most tickets?\\", \\"Top corporate spenders\\"), you are STRICTLY FORBIDDEN from grouping by \`partner_id\`. \\n- **The Commercial ID Rule:** You must always group by **\`commercial_partner_id\`**. This is Odoo's native relational override that automatically merges all individual employee counts, invoices, and helpdesk lines into a single, clean parent company row at the database layer.\\n\\n#### 3. SCHEMA DISCOVERY PROTOCOL (For Any Other Module)\\nIf a user asks about a module or record type not listed in the Core Blueprint above, you are strictly forbidden from guessing field names. You must execute this sequence:\\n1. Call \`get_odoo_model_fields\` for that target model.\\n2. Carefully inspect the returned JSON array to find the exact technical names for fields representing:\\n   - The transaction date (look for type \`date\` or \`datetime\` representing actual occurrence, not systemic creation).\\n   - The document state or workflow stage (\`state\`, \`stage_id\`, \`status\`).\\n   - The numerical tracking value you need to aggregate.\\n3. Build your domain and execution script ONLY after verifying these field definitions.\\n\\n#### 4. TEMPORAL CONTEXT FILTERING\\nWhen a specific timeframe is requested (e.g., \\"in May 2026\\"), you must explicitly map out the absolute boundaries using Odoo's database format.\\n- For date-type fields: \`[[\\"date\\", \\">=\\", \\"2026-05-01\\"], [\\"date\\", \\"<=\\", \\"2026-05-31\\"]]\`\\n- For datetime-type fields: \`[[\\"date_order\\", \\">=\\", \\"2026-05-01 00:00:00\\"], [\\"date_order\\", \\"<=\\", \\"2026-05-31 23:59:59\\"]]\`\\n\\n### Your Operational Loop:\\n1. **Identify Module**: Determine the top-level object models involved.\\n2. **Inspect Fields**: Run \`get_odoo_model_fields\` to map out layout/custom fields if they are unknown or outside the Core Blueprint.\\n3. **Isolate Essential Fields**: Select *only* high-level tracking fields. Avoid rich text fields, logs, or descriptions unless absolutely necessary.\\n4. **Query Records**: Execute \`search_odoo_records\` or \`aggregate_odoo_records\` using targeted domains.\\n5. **Synthesize**: Present a concise numerical summary.\\n\\n### Handling Excel/Spreadsheet Export Requests:\\n1. If the user asks for an Excel export, spreadsheet, or downloadable report, do NOT output the list as chat text.\\n2. First, use your Odoo search tools normally to gather the necessary rows of data. \\n3. Take that raw output array, do not truncate it, and pass it directly to the \`generate_excel_report\` tool.\\n4. Once the tool finishes executing, present its confirmation message or download link directly to the user.\\n\\n### Handling Word Document / Written Report Requests:\\n1. If the user asks for a Word document, written report, text export, or formal brief, use your Odoo tools to extract the necessary data summary metrics first.\\n2. Synthesize those facts into a deep, highly professional, executive-style text outline. Use headers, bullet points, and data matrices.\\n3. Keep the content formatted strictly in Markdown syntax, and pass a JSON object containing 'title' and 'report_markdown' straight to the \`generate_word_report\` tool.\\n4. Deliver the resulting success confirmation statement or cloud download link directly back to the user's screen.\\n\\n#### 5. RESILIENT TEXT SEARCH & KEYWORD DECOMPOSITION\\n- **Drop Possessives & Split Keywords:** If a user specifies a descriptive name for a project, board, task, or account group (e.g., \\"huub's operations project board\\", \\"marketing's pipeline\\"), NEVER search for the exact text string verbatim.\\n- **The Split-AND Strategy:** Strip out possessives like \`'s\`. Split the remaining string into individual words. Rebuild the domain filter to search using a logical \`AND\` combination of those separate keywords. For example, change the phrase \`\\"huub's operations\\"\` into:\\n  \`[[\\"name\\", \\"ilike\\", \\"huub\\"], [\\"name\\", \\"ilike\\", \\"operations\\"]]\`\\n- **The Broad Discovery Fallback:** If a targeted keyword search for a project board or tracking category still returns \`[]\`, DO NOT declare failure. Instead, execute a wide, unfiltered query on that model (\`project.project\`, \`helpdesk.team\`, etc.) with a clean \`limit: 20\` to fetch a list of all active names. \\n- **The Match or Present Protocol:** Read through that broad list. If you see a name that clearly matches the user's intent (like \\"Operations - Huub\\"), pivot to that record immediately. If it's ambiguous, present the list of active options directly to the user and ask: *\\"I couldn't find an exact match for 'huub's operations', but I see these boards in the system. Which one did you mean?\\"*",
          "maxIterations": 10
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 1.7,
      "position": [
        -352,
        -368
      ],
      "id": "81bd8bf4-7b31-4272-a605-545fc5de61d4",
      "name": "AI Agent1"
    },
    {
      "parameters": {
        "modelName": "models/gemini-flash-latest",
        "options": {
          "temperature": 0
        }
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1,
      "position": [
        -352,
        -544
      ],
      "id": "8615eb22-063c-4ae8-885d-1a1e2a49cc15",
      "name": "Google Gemini Chat Model1",
      "credentials": {
        "googlePalmApi": {
          "id": "kCcPaG8AiKMcQyN7",
          "name": "Google Gemini(PaLM) Api account"
        }
      }
    },
    {
      "parameters": {
        "contextWindowLength": 10
      },
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.3,
      "position": [
        -224,
        -544
      ],
      "id": "9481c4e2-56a9-42d3-8020-7a11faa1cb13",
      "name": "Window Buffer Memory1"
    },
    {
      "parameters": {
        "name": "get_odoo_model_fields",
        "description": "Examine structural technical fields for an Odoo object/model. Pass the plain model technical string as your input (e.g., 'res.partner'). Always run this first to discover backend custom fields.",
        "jsCode": "const odooUrl = '$env.ODOO_URL';\\nconst db = '$env.ODOO_DB';\\nconst uid = Number($env.ODOO_UID);\\nconst password = '$env.ODOO_PASSWORD';\\n\\nconst modelName = query.trim();\\nconst payload = {\\n  jsonrpc: '2.0',\\n  method: 'call',\\n  params: {\\n    service: 'object',\\n    method: 'execute',\\n    args: [db, uid, password, modelName, 'fields_get', [], ['string', 'type']]\\n  },\\n  id: Math.floor(Math.random() * 1000)\\n};\\n\\ntry {\\n  // Using n8n's native sandboxed request wrapper helper\\n  const resData = await this.helpers.httpRequest({\\n    method: 'POST',\\n    url: odooUrl,\\n    headers: { 'Content-Type': 'application/json' },\\n    body: payload\\n  });\\n\\n  if (resData.error) return JSON.stringify({ error: resData.error });\\n  \\n  const fields = resData.result || {};\\n  const cleanFields = {};\\n  for (const [key, value] of Object.entries(fields)) {\\n    cleanFields[key] = { label: value.string, type: value.type };\\n  }\\n  return JSON.stringify(cleanFields);\\n} catch (err) {\\n  return JSON.stringify({ error: err.message });\\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1,
      "position": [
        -448,
        -144
      ],
      "id": "25bfeae9-95dd-4c89-8c23-995ad8ddb00a",
      "name": "Get Odoo Fields1"
    },
    {
      "parameters": {
        "name": "search_odoo_records",
        "description": "Query Odoo data rows using search_read. Input MUST be a valid JSON string object containing: 'model' (string model name), 'domain' (nested array filter, e.g., [['name', 'ilike', 'Huawei']]), and 'fields' (array of text field names). Request minimal fields.",
        "jsCode": "const odooUrl = '$env.ODOO_URL';\\nconst db = '$env.ODOO_DB';\\nconst uid = Number($env.ODOO_UID);\\nconst password = '$env.ODOO_PASSWORD';\\n\\ntry {\\n  const input = JSON.parse(query);\\n  const model = input.model;\\n  const domain = input.domain || [];\\n  const fields = input.fields || ['id', 'display_name'];\\n  \\n  // THE SAFETY CAP: Default to a safe limit, absolute maximum ceiling of 80 records\\n  const userLimit = parseInt(input.limit, 10);\\n  const safeLimit = (!isNaN(userLimit) && userLimit > 0) ? Math.min(userLimit, 80) : 80;\\n  \\n  const payload = {\\n    jsonrpc: '2.0',\\n    method: 'call',\\n    params: {\\n      service: 'object',\\n      method: 'execute',\\n      // Odoo search_read args: [db, uid, password, model, method, domain, fields, offset, limit]\\n      args: [db, uid, password, model, 'search_read', domain, fields, 0, safeLimit]\\n    },\\n    id: Math.floor(Math.random() * 1000)\\n  };\\n\\n  const resData = await this.helpers.httpRequest({\\n    method: 'POST',\\n    url: odooUrl,\\n    headers: { 'Content-Type': 'application/json' },\\n    body: payload\\n  });\\n\\n  if (resData.error) return JSON.stringify({ error: resData.error });\\n  return JSON.stringify(resData.result || []);\\n} catch (err) {\\n  return JSON.stringify({ error: 'Execution failure: ' + err.message });\\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1,
      "position": [
        -304,
        -144
      ],
      "id": "48b18b9a-f0aa-4a93-9dcb-8632753f4c11",
      "name": "Search Odoo Records1"
    },
    {
      "parameters": {
        "public": true,
        "initialMessages": "Hi there! 👋\\nMy name is Odoel. How can I assist you today?",
        "options": {
          "inputPlaceholder": "What were the biggest sales of 2024? Which customer sends us the most helpdesk tickets?",
          "subtitle": "Ask any question about our Odoo database. Harder questions might take a couple of minutes.",
          "customCss": ":root {\\n  /* Neon Purple & Cyber Teal Theme Colors */\\n  --chat--color--primary: #a78bfa;          \\n  --chat--color--primary-shade-50: #8b5cf6; \\n  --chat--color--primary--shade-100: #7c3aed;\\n  --chat--color--secondary: #20b69e;        \\n  --chat--color-secondary-shade-50: #1ca08a;\\n  --chat--color-white: #ffffff;\\n  --chat--color-light: #f5f3ff;\\n  --chat--color-light-shade-50: rgba(255, 255, 255, 0.05);\\n  --chat--color-light-shade-100: rgba(255, 255, 255, 0.1);\\n  --chat--color-medium: #9ca3af;            \\n  --chat--color-dark: #070412;              \\n  --chat--color-disabled: rgba(255, 255, 255, 0.2);\\n  --chat--color-typing: #a78bfa;\\n\\n  /* Base Layout Configuration */\\n  --chat--spacing: 1rem;\\n  --chat--border-radius: 0.75rem;           \\n  --chat--transition-duration: 0.2s;\\n  --chat--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\\n\\n  /* Window Dimensions Override (Fullscreen Containment) */\\n  --chat--window--width: 100%;              \\n  --chat--window--height: 100%;\\n  --chat--window--bottom: 0px;\\n  --chat--window--right: 0px;\\n  --chat--window--z-index: 9999;\\n  --chat--window--border: none;\\n  --chat--window--border-radius: 0px;\\n  --chat--window--margin-bottom: 0px;\\n\\n  /* Header Variable Resets */\\n  --chat--header-height: auto;\\n  --chat--header--padding: 1.25rem var(--chat--spacing);\\n  --chat--header--background: transparent;  \\n  --chat--header--color: #ffffff;\\n  --chat--heading--font-size: 1.5em;\\n  --chat--subtitle--font-size: 0.9rem;\\n  --chat--subtitle--line-height: 1.5;\\n\\n  /* Message Bubble Design Specs */\\n  --chat--message--font-size: 1rem;         \\n  --chat--message--padding: 1.25rem 1.5rem; /* Upgraded token for comprehensive internal breathing room */\\n  --chat--message--border-radius: var(--chat--border-radius);\\n  --chat--message-line-height: 1.6;\\n  --chat--message--margin-bottom: calc(var(--chat--spacing) * 1);\\n  \\n  /* Bot Message Glass */\\n  --chat--message--bot--background: rgba(255, 255, 255, 0.08);\\n  --chat--message--bot--color: #ffffff;    \\n  --chat--message--bot--border: 1px solid rgba(255, 255, 255, 0.15);\\n  \\n  /* User Message Glass */\\n  --chat--message--user--background: rgba(139, 92, 246, 0.25);\\n  --chat--message--user--color: #ffffff;\\n  --chat--message--user--border: 1px solid rgba(167, 139, 250, 0.3);\\n  \\n  --chat--message--pre--background: rgba(0, 0, 0, 0.3);\\n  --chat--messages-list--padding: var(--chat--spacing);\\n\\n  /* Floating Action Toggle Button */\\n  --chat--toggle--size: 60px;\\n  --chat--toggle--width: var(--chat--toggle--size);\\n  --chat--toggle--height: var(--chat--toggle--size);\\n  --chat--toggle--border-radius: 50%;\\n  --chat--toggle--background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);\\n  --chat--toggle--hover--background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);\\n  --chat--toggle--active--background: #5b21b6;\\n  --chat--toggle--color: var(--chat--color-white);\\n\\n  /* Deep override token parameters for the input box */\\n  --chat--textarea--height: 48px;\\n  --chat--textarea--max-height: 20rem;\\n  --chat--input--font-size: 1rem;\\n  --chat--input--border: 0;\\n  --chat--input--border-radius: 0.75rem;\\n  --chat--input--padding: 0.75rem 1rem;\\n  --chat--input--background: rgba(12, 7, 34, 0.8) !important; \\n  --chat--input--text-color: #ffffff !important;\\n  --chat--input--line-height: 1.5;\\n\\n  /* Interaction Utilities */\\n  --chat--input--send--button--background: transparent !important;\\n  --chat--input--send--button--color: var(--chat--color--primary) !important;\\n  --chat--input--send--button--background-hover: transparent !important;\\n  --chat--input--send--button--color-hover: var(--chat--color-white) !important;\\n  --chat--input--file--button--background: transparent !important;\\n  --chat--input--file--button--color: rgba(255, 255, 255, 0.4) !important;\\n  --chat--input--file--button--background-hover: transparent !important;\\n  --chat--input--file--button--color-hover: var(--chat--color--primary) !important;\\n\\n  /* Global Background Setup */\\n  --chat--body--background: linear-gradient(145deg, #060410 0%, #110829 50%, #200a49 100%);\\n  --chat--footer--background: transparent !important; \\n  --chat--footer--color: #ffffff !important;\\n}\\n\\n/* --- SYSTEM WORKSPACE LEVEL OVERRIDES --- */\\n\\n/* Force layout canvas limits and strip scrollbars */\\nhtml, body, #app, [class*=\\"layout\\"], [class*=\\"window\\"], [class*=\\"wrapper\\"], [class*=\\"container\\"] {\\n  background: linear-gradient(145deg, #060410 0%, #110829 50%, #200a49 100%) !important;\\n  color: #ffffff !important;\\n  overflow-x: hidden !important;\\n  box-sizing: border-box !important;\\n  max-width: 100vw !important;\\n}\\n\\n/* Top Bar Centering & Structural Realignment */\\n.chat-header {\\n  background: rgba(6, 4, 16, 0.5) !important;\\n  backdrop-filter: blur(15px);\\n  -webkit-backdrop-filter: blur(15px);\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\\n  width: 100% !important;\\n  z-index: 10;\\n  \\n  display: flex !important;\\n  flex-direction: column !important;\\n  align-items: center !important;\\n  justify-content: center !important;\\n  text-align: center !important;\\n}\\n\\n.chat-header h1, .chat-header h2, .chat-header p, .chat-header div, .chat-header * {\\n  text-align: center !important;\\n  margin: 0 auto !important;\\n  justify-content: center !important;\\n}\\n\\n/* Input Area Pane - Outer Alignment Wrapper */\\n.chat-footer {\\n  background: transparent !important;\\n  border-top: none !important;\\n  padding: 1.5rem var(--chat--spacing) !important;\\n  width: 100% !important;\\n}\\n\\n/* Outer layout box wrapper styling */\\n.chat-input, \\n[class*=\\"chat-input\\"], \\n[class*=\\"input-container\\"], \\n[class*=\\"input-box\\"],\\n[class*=\\"textarea-wrapper\\"] {\\n  max-width: 1200px !important;\\n  margin: 0 auto !important;\\n  border: 1px solid rgba(255, 255, 255, 0.16) !important;\\n  background: rgba(12, 7, 34, 0.85) !important; \\n  background-color: rgba(12, 7, 34, 0.85) !important; \\n  border-radius: var(--chat--border-radius) !important;\\n  backdrop-filter: blur(10px);\\n  -webkit-backdrop-filter: blur(10px);\\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\\n}\\n\\n.chat-input:focus-within {\\n  border-color: rgba(167, 139, 250, 0.5) !important;\\n  box-shadow: 0 0 15px rgba(167, 139, 250, 0.2);\\n}\\n\\n/* Deep injection target on raw text area elements */\\n.chat-input textarea,\\n[class*=\\"chat-input\\"] textarea,\\n[class*=\\"input-container\\"] textarea,\\ntextarea {\\n  color: rgba(156, 163, 175, 0.35) !important; \\n  background: transparent !important;\\n  background-color: transparent !important;\\n  font-size: 1rem !important;\\n  -webkit-text-fill-color: #ffffff !important; \\n}\\n\\n/* Hardened placeholder styling using a darker gray base with seamless transparency */\\n.chat-input textarea::placeholder,\\n[class*=\\"chat-input\\"] textarea::placeholder,\\ntextarea::placeholder {\\n  color: rgba(156, 163, 175, 0.35) !important; \\n  opacity: 1 !important;\\n}\\n\\n/* Message Feed Layout Restrictions */\\n.chat-messages-list {\\n  max-width: 1200px !important;\\n  margin: 0 auto !important;\\n  width: 100% !important;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Enhanced padding parameters mapping to text containment boundaries */\\n.chat-message {\\n  max-width: 75% !important;\\n  align-self: flex-start;\\n  backdrop-filter: blur(12px) saturate(140%);\\n  -webkit-backdrop-filter: blur(12px) saturate(140%);\\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);\\n  padding: var(--chat--message--padding) !important; /* Explicitly forces internal padding deployment */\\n}\\n\\n/* Clean cascading typography tracking inside elements */\\n.chat-message p, .chat-message li, .chat-message text {\\n  margin: 0 0 0.5rem 0;\\n  line-height: var(--chat--message-line-height);\\n}\\n\\n.chat-message p:last-child, .chat-message ul:last-child, .chat-message ol:last-child {\\n  margin-bottom: 0 !important;\\n}\\n\\n.chat-message.user {\\n  align-self: flex-end !important;\\n}\\n\\n/* Odoo Markdown Tables Styling Layout */\\n.chat-message table {\\n  border-collapse: collapse;\\n  width: 100%;\\n  margin: 12px 0;\\n  border: 1px solid rgba(255, 255, 255, 0.08);\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n\\n.chat-message th {\\n  background-color: rgba(139, 92, 246, 0.25) !important;\\n  color: #ffffff !important;\\n  padding: 8px 12px;\\n  font-weight: 600;\\n}\\n\\n.chat-message td {\\n  padding: 8px 12px;\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\\n}"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.4,
      "position": [
        -688,
        -368
      ],
      "id": "33ccd2fb-00da-4999-9dd5-6b5d4b470efc",
      "name": "When chat message received",
      "webhookId": "772e1840-0013-4aef-9728-9615a8498232"
    },
    {
      "parameters": {
        "description": "Use this tool ONLY when the user explicitly requests an Excel file, spreadsheet, download, or CSV export of data. Input MUST be a valid JSON array of objects representing the rows and columns of data gathered from Odoo.",
        "workflowId": {
          "__rl": true,
          "value": "UuuJ8YVTiqQ5sWqB",
          "mode": "list",
          "cachedResultUrl": "/workflow/UuuJ8YVTiqQ5sWqB",
          "cachedResultName": "generate_excel_report"
        },
        "workflowInputs": {
          "mappingMode": "defineBelow",
          "value": {
            "data_rows": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('data_rows', \`\`, 'json') }}"
          },
          "matchingColumns": [
            "data_rows"
          ],
          "schema": [
            {
              "id": "data_rows",
              "displayName": "data_rows",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "array",
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        }
      },
      "type": "@n8n/n8n-nodes-langchain.toolWorkflow",
      "typeVersion": 2.2,
      "position": [
        -448,
        32
      ],
      "id": "2857ceaf-334f-4c83-b7b7-347132d4baf6",
      "name": "generate_excel_report"
    },
    {
      "parameters": {
        "description": "Use this tool ONLY when the user explicitly requests a Word document, typed report, brief, or docx download. Input MUST be a valid JSON object containing: 'title' (a short descriptive filename string) and 'report_markdown' (the full, detailed text report cleanly formatted in markdown syntax).",
        "workflowId": {
          "__rl": true,
          "value": "AbrKXY7oTasdLMHb",
          "mode": "list",
          "cachedResultUrl": "/workflow/AbrKXY7oTasdLMHb",
          "cachedResultName": "generate_word_report"
        },
        "workflowInputs": {
          "mappingMode": "defineBelow",
          "value": {
            "title": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('title', \`\`, 'string') }}",
            "report_markdown": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('report_markdown', \`\`, 'string') }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "title",
              "displayName": "title",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string"
            },
            {
              "id": "report_markdown",
              "displayName": "report_markdown",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string"
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        }
      },
      "type": "@n8n/n8n-nodes-langchain.toolWorkflow",
      "typeVersion": 2.2,
      "position": [
        -304,
        32
      ],
      "id": "57931a45-0010-4a1e-b0b6-f830f6e3504f",
      "name": "generate_word_report"
    },
    {
      "parameters": {
        "description": "Use this tool ONLY when you need to calculate mathematical sums, counts, averages, or grouped distributions across a model. Input MUST be a valid JSON string containing: 'model' (string), 'domain' (array filter), 'fields' (array of numeric fields to sum, optional), and 'groupby' (array of strings representing fields to group by, e.g., ['partner_id'] or ['stage_id'], optional).",
        "jsCode": "const odooUrl = '$env.ODOO_URL';\\nconst db = '$env.ODOO_DB';\\nconst uid = Number($env.ODOO_UID);\\nconst password = '$env.ODOO_PASSWORD';\\n\\ntry {\\n  const input = JSON.parse(query);\\n  const model = input.model;\\n  const domain = input.domain || [];\\n  const fields = input.fields || []; \\n  const groupby = input.groupby || []; \\n  \\n  // THE ACCURACY SHIELD: Force server-side sorting by group count descending\\n  // This ensures the absolute highest transaction rows are always pushed to the top slot\\n  const orderby = input.orderby || (groupby.length ? \`\${groupby}_count desc\` : '');\\n  \\n  const payload = {\\n    jsonrpc: '2.0',\\n    method: 'call',\\n    params: {\\n      service: 'object',\\n      method: 'execute',\\n      // Odoo RPC positional mapping: [db, uid, password, model, method, domain, fields, groupby, offset, limit, orderby]\\n      args: [db, uid, password, model, 'read_group', domain, fields, groupby, 0, 50, orderby]\\n    },\\n    id: Math.floor(Math.random() * 1000)\\n  };\\n\\n  const resData = await this.helpers.httpRequest({\\n    method: 'POST',\\n    url: odooUrl,\\n    headers: { 'Content-Type': 'application/json' },\\n    body: payload\\n  });\\n\\n  if (resData.error) return JSON.stringify({ error: resData.error });\\n  return JSON.stringify(resData.result || []);\\n} catch (err) {\\n  return JSON.stringify({ error: 'Aggregation failure: ' + err.message });\\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1.3,
      "position": [
        -160,
        -144
      ],
      "id": "b4d8f7c5-9200-4620-a412-556151565dcd",
      "name": "aggregate_odoo_records"
    },
    {
      "parameters": {
        "description": "Use this tool ONLY to perform secondary mathematical calculations on raw numbers you have already successfully retrieved from Odoo (e.g., calculating gross profit margins, averaging pre-computed totals, or converting currencies). NEVER use this tool to sum up lists of database entries—always use the native database aggregation tools for data summaries.",
        "jsCode": "try {\\n  // In the Custom Code Tool node, n8n passes the agent's input string as 'query'\\n  const expression = query || '';\\n\\n  // SECURITY MANDATE: Strip all whitespace\\n  const sanitized = expression.replace(/\\\\s+/g, '');\\n\\n  // THE ACCURACY SHIELD: Only allow numbers, decimals, and basic math operators (+, -, *, /, (, ))\\n  if (!/^[0-9\\\\+\\\\-\\\\*\\\\/\\\\.\\\\(\\\\)]+$/.test(sanitized)) {\\n    return JSON.stringify({ error: \\"Security Violation: Invalid mathematical expression character detected.\\" });\\n  }\\n\\n  // Execute the clean math string safely\\n  const result = Function(\`\\"use strict\\"; return (\${sanitized})\`)();\\n  \\n  return JSON.stringify({ result: result });\\n} catch (err) {\\n  return JSON.stringify({ error: \\"Calculation failure: \\" + err.message });\\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1.3,
      "position": [
        48,
        -144
      ],
      "id": "82c7447e-72f4-493d-9538-f2c2f81cd99b",
      "name": "Calculator Tool"
    },
    {
      "parameters": {
        "description": "Use this tool ONLY when you need to merge, join, filter, or perform advanced multi-step mathematical operations (like calculating ratios or custom formulas) across two different pre-retrieved array datasets. Input must be a valid JSON string containing: 'datasetA' (array), 'datasetB' (array), 'joinKey' (the common ID/string field to link them), 'metricA' (the numeric property from datasetA), 'metricB' (the numeric property from datasetB), 'operation' (set to 'ratio'), 'minMetricB' (optional number filter), and 'limit' (optional max output row count).",
        "jsCode": "try {\\n  // Parse the instructions coming from the AI agent\\n  const input = JSON.parse(query);\\n  const listA = input.datasetA || [];\\n  const listB = input.datasetB || [];\\n  const joinKey = input.joinKey;\\n  const metricA = input.metricA;\\n  const metricB = input.metricB;\\n  const operation = input.operation || 'ratio';\\n  const minMetricB = input.minMetricB !== undefined ? input.minMetricB : null;\\n  const limit = input.limit || 10;\\n\\n  if (!joinKey || !metricA || !metricB) {\\n    return JSON.stringify({ error: \\"Missing required mapping parameters: joinKey, metricA, or metricB.\\" });\\n  }\\n\\n  // Optimize Dataset B into an ID map for fast O(N) lookup performance\\n  const mapB = {};\\n  listB.forEach(item => {\\n    // Handle Odoo's Many2one array formats [id, \\"Name\\"] or raw values smoothly\\n    const rawId = item[joinKey];\\n    const id = Array.isArray(rawId) ? rawId[0] : rawId;\\n    if (id !== undefined && id !== null && id !== false) {\\n      mapB[id] = item;\\n    }\\n  });\\n\\n  const processedResults = [];\\n\\n  // Join and execute custom metrics math logic\\n  listA.forEach(item => {\\n    const rawId = item[joinKey];\\n    const id = Array.isArray(rawId) ? rawId[0] : rawId;\\n    const nameStr = Array.isArray(rawId) ? rawId[1] : id;\\n    \\n    const match = mapB[id];\\n    if (match) {\\n      const valA = Number(item[metricA]) || 0;\\n      const valB = Number(match[metricB]) || 0;\\n\\n      // Filter Constraint Safeguard (e.g., Ticket count must be greater than 1)\\n      if (minMetricB !== null && valB <= minMetricB) {\\n        return;\\n      }\\n\\n      // Compute mathematical ratio safety shield (Anti-Division-by-Zero)\\n      let finalMetric = 0;\\n      if (valB !== 0) {\\n        finalMetric = valA / valB;\\n      }\\n\\n      processedResults.push({\\n        company_name: nameStr,\\n        [metricA]: valA,\\n        [metricB]: valB,\\n        computed_ratio: Number(finalMetric.toFixed(2))\\n      });\\n    }\\n  });\\n\\n  // Sort the resulting leaderboard descending based on the calculated metric\\n  processedResults.sort((a, b) => b.computed_ratio - a.computed_ratio);\\n\\n  // Return exactly what the token cap limits allow\\n  return JSON.stringify(processedResults.slice(0, limit));\\n} catch (err) {\\n  return JSON.stringify({ error: \\"Data cruncher computation failure: \\" + err.message });\\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1.3,
      "position": [
        -160,
        32
      ],
      "id": "edd1bbc4-1041-46f3-b88e-6e7bf199e1e8",
      "name": "data_cruncher"
    },
    {
      "parameters": {
        "description": "Description: Generates a direct URL to an Odoo record. Use this whenever you return a list of items (like companies, tickets, or projects) so the user can click to open them in their browser. You must provide the exact model name and ID.",
        "jsCode": "const baseUrl = \\"$env.ODOO_URL\\";\\nreturn \`\${baseUrl}/web#id=\${id}&model=\${model_name}&view_type=form\`;"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1.3,
      "position": [
        -16,
        32
      ],
      "id": "e2dc051b-3765-4a32-aa22-18993a5c13e1",
      "name": "get_odoo_link"
    },
    {
      "parameters": {
        "description": "Translates natural language date expressions (like 'last fiscal quarter' or 'past 6 months') into standard ISO date strings ('YYYY-MM-DD'). Always use this before passing date parameters to Odoo search or aggregate tools.",
        "jsCode": "const now = new Date();\\nconst natural = natural_date.toLowerCase();\\n\\n// Example logic for \\"last month\\"\\nif (natural.includes(\\"last month\\")) {\\n    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);\\n    const end = new Date(now.getFullYear(), now.getMonth(), 0);\\n    return JSON.stringify({ start: start.toISOString().split('T'), end: end.toISOString().split('T') });\\n}\\n\\n// Default fallback to current month if unclear\\nconst start = new Date(now.getFullYear(), now.getMonth(), 1);\\nreturn JSON.stringify({ start: start.toISOString().split('T'), end: now.toISOString().split('T') });"
      },
      "type": "@n8n/n8n-nodes-langchain.toolCode",
      "typeVersion": 1.3,
      "position": [
        -16,
        208
      ],
      "id": "6b6d243c-d6b5-41cc-8afe-fee0d987b3b2",
      "name": "date_resolver"
    }
  ],
  "connections": {
    "AI Agent1": {
      "main": [
        []
      ]
    },
    "Google Gemini Chat Model1": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Window Buffer Memory1": {
      "ai_memory": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Get Odoo Fields1": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Search Odoo Records1": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "generate_excel_report": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "generate_word_report": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "aggregate_odoo_records": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Calculator Tool": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "data_cruncher": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "get_odoo_link": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "date_resolver": {
      "ai_tool": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "12461d951feaa94408d5764276155e43aaaab9a8c2f954263e94426d774e2881"
  }
}`;function Un({label:e,align:t=`left`,className:n=``}){return(0,i.jsx)(`div`,{className:t===`right`?`mt-24 border-t border-border pt-4 text-right ${n}`:`mt-24 border-t border-border pt-4 ${n}`,children:(0,i.jsx)(`span`,{className:`label-eyebrow`,children:e})})}function Wn({title:e,client:t,year:n,stack:r,children:a,first:o=!1,hoursSaved:s}){return(0,i.jsxs)(`article`,{className:o?`grid grid-cols-1 gap-8 py-14 md:grid-cols-12 md:gap-10`:`grid grid-cols-1 gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-10`,children:[(0,i.jsxs)(`header`,{className:`md:col-span-4`,children:[(0,i.jsx)(`h3`,{className:`font-display text-2xl leading-snug tracking-tight text-foreground`,children:e}),(0,i.jsx)(`p`,{className:`mt-4 text-sm uppercase tracking-[0.16em] text-foreground/70`,children:t}),(0,i.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:n}),(0,i.jsx)(`ul`,{className:`mt-6 space-y-1`,children:r.map(e=>(0,i.jsx)(`li`,{className:`text-sm text-muted-foreground`,children:e},e))}),s?(0,i.jsxs)(`div`,{className:`mt-8 border-t border-border pt-4`,children:[(0,i.jsx)(`p`,{className:`label-eyebrow`,children:`Hours saved`}),(0,i.jsx)(`p`,{className:`mt-2 font-display text-lg leading-snug text-foreground/80`,children:s})]}):null]}),(0,i.jsx)(`div`,{className:`md:col-span-8`,children:a})]})}function Gn({items:e}){return(0,i.jsx)(`ul`,{className:`space-y-3`,children:e.map(e=>(0,i.jsxs)(`li`,{className:`flex gap-3 text-[0.95rem] leading-relaxed text-foreground/85`,children:[(0,i.jsx)(`span`,{"aria-hidden":!0,className:`mt-2 h-px w-4 shrink-0 bg-accent`}),(0,i.jsx)(`span`,{children:e})]},e))})}var Kn=[{title:`Operational Workflows & Reporting`,tagline:`Focused on internal tools, ERP integration, and admin automation.`,items:[{name:`Odoo CRM & Helpdesk History Summarizer`,built:`Luceda`,detail:`n8n workflow that aggregates and summarizes two years of account history from Odoo CRM, Sales, and Helpdesk for account managers.`},{name:`Automated Team-Lead Time Tracking`,built:`Luceda`,detail:`Scheduled n8n integration that pulls raw time-tracking data and formats automated summary reports for team leads.`},{name:`Odoo Event & Registration Automator`,built:`Luceda`,detail:`Automated webinar participant registrations within Odoo, saving ~4 hours per event, paired with automated attendee data extraction.`}]},{title:`AI Prototypes & Data Pipelines`,tagline:`Focused on data enrichment, AI experimentation, and custom tooling.`,items:[{name:`AI-Powered Lead Enrichment Pipeline`,built:`Luceda`,detail:`Automated pipeline that scrapes event data, enriches prospect info via external APIs, evaluates against BANT criteria, and outputs qualified lead lists.`},{name:`Custom “Second Brain” AI System`,built:`Personal`,detail:`Voice-to-text input in plain language — the app files it into calendar, to-dos, notes and collections on its own.`},{name:`Automated Document & Text Extractors`,built:`Paddle / Luceda`,detail:`Custom Python scripts utilizing BeautifulSoup and Playwright to parse unstructured web data, formats, and text outputs.`}]},{title:`System Dashboards & QA Utilities`,tagline:`Focused on visual metrics, infrastructure monitoring, and automated testing.`,items:[{name:`Global License Visualization Dashboard`,built:`Luceda`,detail:`Interactive world map dashboard visualizing active software license deployments globally for office wall displays and client presentations.`},{name:`Dynamic Organigram Mapper`,built:`Personal`,detail:`Rapidly prototyped visual organizational mapping tool to render company hierarchies and reporting structures dynamically.`}]}];function qn(){return(0,i.jsxs)(`main`,{className:`mx-auto max-w-6xl px-6 pt-8 pb-20 md:px-12 md:pt-12 md:pb-28`,children:[(0,i.jsxs)(`header`,{className:`flex flex-col gap-6 md:flex-row md:items-end md:justify-between`,children:[(0,i.jsxs)(`h1`,{className:`font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl`,children:[`Huub`,(0,i.jsx)(`br`,{}),`Ahsmann`]}),(0,i.jsx)(`p`,{className:`font-display text-2xl text-foreground/70 md:pb-1.5`,children:`Portfolio for Alfabet`})]}),(0,i.jsx)(Un,{label:`Selected work`,className:`mt-16 md:mt-20`}),(0,i.jsxs)(`section`,{className:`pt-10`,children:[(0,i.jsxs)(Wn,{first:!0,title:`Marketing expense sorter`,client:`Operations Luceda`,year:`2026`,stack:[`Python`,`Gemini API`],hoursSaved:`A week of manual work → half a day`,children:[(0,i.jsx)(Gn,{items:[`Sifted through around 1,600 invoices to isolate the ones belonging to Marketing.`,`Categorized each invoice into the right marketing expense bucket.`,`Gave the marketing department a clean basis for reporting on their spend.`]}),(0,i.jsx)(o,{code:zn})]}),(0,i.jsxs)(Wn,{title:`Internal Assistant Chatbot`,client:`Operations Luceda`,year:`2026`,stack:[`n8n`,`Gemini API`,`Odoo`],hoursSaved:`Hours back to every colleague, every week`,children:[(0,i.jsx)(Gn,{items:[`A chatbot (not yet launched) that talks to an Odoo instance over HTTP requests.`,`Using guardrails, queries stay targeted across sales orders, customers, helpdesk tickets and CRM items — or combinations of them.`,`Gemini summarizes the results so colleagues get useful answers in seconds, not reports.`]}),(0,i.jsx)(o,{code:Hn}),(0,i.jsx)(In,{slides:[{src:Ln,alt:`Workspace with an automation dashboard on screen`,caption:`n8n workflow — webhook in, Odoo lookups, Gemini summary out.`},{src:Rn,alt:`Layered glass panels with a warm accent`,caption:`Skill layer: intent → targeted Odoo search → answer, with optional tool calls like a calculator or pdf/excel generator.`}]})]}),(0,i.jsxs)(Wn,{title:`Drupal QA checks & patches`,client:`Operations Paddle`,year:`2022`,stack:[`Python`,`BeautifulSoup`,`Playwright`],hoursSaved:`Thousands of hours saved per year, for the whole Paddle team`,children:[(0,i.jsx)(Gn,{items:[`Wrote scripts to check thousands of pages after our Drupal 8 → 9 migrations: status codes, content, SEO & metadata, internal links and assets.`,`Used different scripts to patch the flagged issues directly on the migrated pages.`,`Saved the team thousands of hours of manual QA and patching across the migrations.`]}),(0,i.jsx)(o,{code:Bn}),(0,i.jsx)(o,{code:Vn})]}),(0,i.jsx)(Wn,{title:`Personal Hermes Agent setup`,client:`Personal Assistant`,year:`2026`,stack:[`VPS`,`Hermes Agent`,`LLMs`,`Discord Gateway`],children:(0,i.jsx)(Gn,{items:[`Manages my personal workflows and monitors web data — stocks, weather — around the clock.`,`Connected to Obsidian, so notes and ideas land in my vault straight from chat.`,`A 24/7 always-on autonomous assistant with scheduled cron jobs and conversational memory.`]})})]}),(0,i.jsx)(Un,{label:`More work`}),(0,i.jsx)(`section`,{className:`grid grid-cols-1 gap-x-12 gap-y-10 pt-10 md:grid-cols-3`,children:Kn.flatMap(e=>e.items).map(e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{className:`font-display text-lg leading-snug`,children:e.name}),e.built?(0,i.jsx)(`p`,{className:`label-eyebrow mt-2`,children:e.built}):null,(0,i.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-muted-foreground`,children:e.detail})]},e.name))}),(0,i.jsxs)(`footer`,{className:`mt-24 border-t border-border pt-4`,children:[(0,i.jsxs)(`div`,{className:`flex items-center justify-between gap-6`,children:[(0,i.jsx)(`span`,{className:`label-eyebrow`,children:`Contact`}),(0,i.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`© `,new Date().getFullYear()]})]}),(0,i.jsxs)(`div`,{className:`pt-8 text-sm`,children:[(0,i.jsx)(`a`,{className:`text-foreground underline-offset-4 hover:underline`,href:`mailto:huub.ahsmann@gmail.com`,children:`huub.ahsmann@gmail.com`}),(0,i.jsx)(`p`,{className:`mt-2 text-muted-foreground`,children:`+32 (0)4 56 38 55 04`})]})]})]})}export{qn as component};