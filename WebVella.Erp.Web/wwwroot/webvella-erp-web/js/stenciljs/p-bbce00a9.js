const t=window,e=document,n={t:0,s:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},s=new WeakMap,l=t=>s.get(t),o=(t,e)=>s.set(e.l=t,e),r=(t,e)=>e in t,i=t=>console.error(t),c=new Map,a=t.__stencil_cssshim;let f=0,u=!1;const $=[],d=[],m=[],y=(t,e)=>s=>{t.push(s),u||(u=!0,e&&4&n.t?w(h):n.raf(h))},p=(t,e)=>{let n=0,s=0;for(;n<t.length&&(s=performance.now())<e;)try{t[n++](s)}catch(t){i(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},h=()=>{f++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){i(t)}t.length=0})($);const t=2==(6&n.t)?performance.now()+10*Math.ceil(f*(1/22)):1/0;p(d,t),p(m,t),d.length>0&&(m.push(...d),d.length=0),(u=$.length+d.length+m.length>0)?n.raf(h):f=0},w=t=>Promise.resolve().then(t),v=y(d,!0),_={},b=t=>null!=t,g=t=>t.toLowerCase(),j=t=>["object","function"].includes(typeof t),k=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wv_lazyload("./p-3ea8955c.js"),M=async()=>{{const n=Array.from(e.querySelectorAll("script")).find(t=>t.src.includes("/wv-lazyload.esm.js")||"wv-lazyload"===t.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,t.location.href));return U(s.href),window.customElements||await __sc_import_wv_lazyload("./p-860d8016.js"),s.href}},U=n=>{const s=`__sc_import_${"wv-lazyload".replace(/\s|-/g,"_")}`;try{t[s]=new Function("w","return import(w);")}catch(l){const o=new Map;t[s]=l=>{const r=new URL(l,n).href;let i=o.get(r);if(!i){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${s}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{n.onload=()=>{e(t[s].m),n.remove()}}),o.set(r,i),e.head.appendChild(n)}return i}}},z=(t,e,...n)=>{let s,l=null,o=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!j(l))&&(l=String(l)),o&&r?i[i.length-1].o+=l:i.push(o?{t:0,o:l}:l),r=o)};if(c(n),e){s=e.key||void 0;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,i,O);const a={t:0,i:t,u:i.length>0?i:null,$:void 0,p:e};return a.h=s,a},L={},O={forEach:(t,e)=>t.map(R).forEach(e),map:(t,e)=>t.map(R).map(e).map(x)},R=t=>({vattrs:t.p,vchildren:t.u,vkey:t.h,vname:t.v,vtag:t.i,vtext:t.o}),x=t=>({t:0,p:t.vattrs,u:t.vchildren,h:t.vkey,v:t.vname,i:t.vtag,o:t.vtext}),P=(t,e,s,l,o,i)=>{if(s!==l)if("class"!==e||o)if("style"===e){for(const e in s)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)s&&l[e]===s[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("key"===e);else if("ref"===e)l&&l(t);else if(e.startsWith("on")&&!r(t,e))e=r(t,g(e))?g(e.substring(2)):g(e[2])+e.substring(3),s&&n.rel(t,e,s,!1),l&&n.ael(t,e,l,!1);else{const n=r(t,e),s=j(l);if((n||s&&null!==l)&&!o)try{t[e]=null==l&&-1===t.tagName.indexOf("-")?"":l}catch(t){}null==l||!1===l?t.removeAttribute(e):(!n||4&i||o)&&!s&&(l=!0===l?"":l.toString(),t.setAttribute(e,l))}else{const e=A(s),n=A(t.className).filter(t=>!e.includes(t));t.className=n.concat(A(l).filter(t=>!n.includes(t))).join(" ")}},A=t=>t?t.split(" "):[],E=(t,e,n,s)=>{const l=11===e.$.nodeType&&e.$.host?e.$.host:e.$,o=t&&t.p||_,r=e.p||_;for(s in o)null==r[s]&&null!=o[s]&&P(l,s,o[s],void 0,n,e.t);for(s in r)P(l,s,o[s],r[s],n,e.t)};let S;const C=(t,n,s)=>{let l,o,r=n.u[s],i=0;if(b(r.o))r.$=e.createTextNode(r.o);else if(l=r.$=e.createElement(r.i),E(null,r,!1),r.u)for(i=0;i<r.u.length;++i)(o=C(t,r,i))&&l.appendChild(o);return r.$},F=(t,e,n,s,l,o)=>{let r,i=t;for(;l<=o;++l)s[l]&&(r=C(null,n,l))&&(s[l].$=r,i.insertBefore(r,e))},T=(t,e,n,s)=>{for(;e<=n;++e)b(t[e])&&(s=t[e].$,H(t[e],!0),s.remove())},q=(t,e)=>t.i===e.i&&t.h===e.h,B=(t,e)=>{const n=e.$=t.$,s=t.u,l=e.u;b(e.o)?t.o!==e.o&&(n.textContent=e.o):(E(t,e,!1),b(s)&&b(l)?((t,e,n,s)=>{let l,o,r=0,i=0,c=0,a=0,f=e.length-1,u=e[0],$=e[f],d=s.length-1,m=s[0],y=s[d];for(;r<=f&&i<=d;)if(null==u)u=e[++r];else if(null==$)$=e[--f];else if(null==m)m=s[++i];else if(null==y)y=s[--d];else if(q(u,m))B(u,m),u=e[++r],m=s[++i];else if(q($,y))B($,y),$=e[--f],y=s[--d];else if(q(u,y))B(u,y),t.insertBefore(u.$,$.$.nextSibling),u=e[++r],y=s[--d];else if(q($,m))B($,m),t.insertBefore($.$,u.$),$=e[--f],m=s[++i];else{for(c=-1,a=r;a<=f;++a)if(e[a]&&b(e[a].h)&&e[a].h===m.h){c=a;break}c>=0?((o=e[c]).i!==m.i?l=C(e&&e[i],n,c):(B(o,m),e[c]=void 0,l=o.$),m=s[++i]):(l=C(e&&e[i],n,i),m=s[++i]),l&&u.$.parentNode.insertBefore(l,u.$)}r>f?F(t,null==s[d+1]?null:s[d+1].$,n,s,i,d):i>d&&T(e,r,f)})(n,s,e,l):b(l)?(b(t.o)&&(n.textContent=""),F(n,null,e,l,0,l.length-1)):b(s)&&T(s,0,s.length-1))},H=(t,e)=>{t&&(t.p&&t.p.ref&&t.p.ref(e?null:t.$),t.u&&t.u.forEach(t=>{H(t,e)}))},N=(t,e,n,s)=>{e.t|=16;const l=e.l;let o;s&&(o=(t=>{if(t&&t.componentWillLoad)try{return t.componentWillLoad(void 0)}catch(t){i(t)}})(l));const r=()=>V(t,e,n,l);return((t,e)=>t&&t.then?t.then(e):e())(o,()=>v(r))},V=(t,e,n,s)=>{e.t&=-17,t["s-lr"]=!1,e.t|=4;try{((t,e,n,s)=>{S=g(t.tagName);const l=e._||{t:0},o=(t=>t&&t.i===L)(s)?s:z(null,null,s);o.i=null,o.t|=4,e._=o,o.$=l.$=t,B(l,o)})(t,e,0,s.render())}catch(t){i(t)}e.t&=-5,a&&a.updateHost(t),t["s-lr"]=!0,e.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),W(t,e)},W=(t,s,l)=>{if(!t["s-al"]){const o=s.g;64&s.t||(s.t|=64,t.classList.add("hydrated"),s.j(t),o||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),o&&((l=o["s-al"])&&(l.delete(t),0===l.size&&(o["s-al"]=void 0,o["s-init"]())),s.g=void 0)}},D=(t,e,s)=>{if(e.k){const o=Object.entries(e.k),r=t.prototype;if(o.forEach(([t,[n]])=>{(31&n||2&s&&32&n)&&Object.defineProperty(r,t,{get(){return((t,e)=>l(t).M.get(e))(this,t)},set(n){((t,e,n,s)=>{const o=l(this),r=o.U,i=o.M.get(e),c=o.t;(n=((t,e)=>null==t||j(t)?t:1&e?String(t):t)(n,s.k[e][0]))===i||8&c&&void 0!==i||(o.M.set(e,n),o.l&&2==(22&c)&&N(r,o,s,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&s){const e=new Map;r.attributeChangedCallback=function(t,s,l){n.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,n])=>{const s=n[1]||t;return e.set(s,t),s})}}return t},G=(o,r={})=>{const f=[],u=r.exclude||[],$=e.head,d=t.customElements,m=$.querySelector("meta[charset]"),y=e.createElement("style");Object.assign(n,r),n.s=new URL(r.resourcesUrl||"./",e.baseURI).href,r.syncQueue&&(n.t|=4),o.forEach(t=>t[1].forEach(e=>{const o={t:e[0],L:e[1],k:e[2],O:e[3]},r=o.L;o.R=t[0],u.includes(r)||d.get(r)||(f.push(r),d.define(r,D(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,U:t,M:new Map};e.P=new Promise(t=>e.j=t),s.set(t,e)}})(t)}connectedCallback(){n.jmp(()=>((t,e)=>{if(0==(1&n.t)){const n=l(t);if(!(1&n.t)){n.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){n.g=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}e.k&&Object.entries(e.k).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,s,l)=>{if(0==(32&e.t)){e.t|=32,(l=(t=>{const e=t.L.replace(/-/g,"_"),n=t.R,s=c.get(n);return s?s[e]:__sc_import_wv_lazyload(`./${n}.entry.js`).then(t=>(c.set(n,t),t[e]),i)})(n)).then&&(l=await l),l.isProxied||(D(l,n,2),l.isProxied=!0),e.t|=8;try{new l(e)}catch(t){i(t)}e.t&=-9}const o=e.g,r=()=>N(t,e,n,!0);o&&!1===o["s-lr"]&&o["s-rc"]?o["s-rc"].push(r):r()})(t,n,e)}}})(this,o))}disconnectedCallback(){n.jmp(()=>(()=>{0==(1&n.t)&&a&&a.removeHost(this)})())}"s-init"(){const t=l(this);t.l&&W(this,t)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=l(t);2&n.t&&N(t,n,e,!1)}})(this,o)}componentOnReady(){return l(this).P}},o,1)))})),y.innerHTML=f+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),$.insertBefore(y,m?m.nextSibling:$.firstChild)};export{k as a,G as b,z as h,M as p,o as r};