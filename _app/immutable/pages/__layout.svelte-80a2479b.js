import{F as X,S as Y,i as Q,s as T,x as H,y as R,z as S,r as C,p as j,C as k,G as Z,k as A,e as $,m as z,c as h,H as ee,b as _,g as m,d as u,t as D,a as d,h as G,I as E,f as N,J as b,K as te,L as se,M as re,N as ae}from"../chunks/index-0de2a2f0.js";import{R as U,S as V}from"../chunks/row-92140382.js";const P={warmWhite:"#FBF5EC",charcoal:"#3A3A3A",deepRed:"#951E1A"},ne=()=>{const l=X("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},le={subscribe(l){return ne().page.subscribe(l)}};function oe(l){let e,r,s,f,i,a,o,n,c,g,I,M,w,B,x,v,q,F,y;return a=new V({props:{width:40}}),w=new V({props:{width:40}}),{c(){e=$("h2"),r=$("a"),s=D("Home"),i=A(),H(a.$$.fragment),o=A(),n=$("h2"),c=$("a"),g=D("Projects"),M=A(),H(w.$$.fragment),B=A(),x=$("h2"),v=$("a"),q=D("About Me"),this.h()},l(t){e=h(t,"H2",{style:!0});var p=d(e);r=h(p,"A",{class:!0,href:!0});var W=d(r);s=G(W,"Home"),W.forEach(u),p.forEach(u),i=z(t),R(a.$$.fragment,t),o=z(t),n=h(t,"H2",{});var J=d(n);c=h(J,"A",{class:!0,href:!0});var K=d(c);g=G(K,"Projects"),K.forEach(u),J.forEach(u),M=z(t),R(w.$$.fragment,t),B=z(t),x=h(t,"H2",{});var L=d(x);v=h(L,"A",{class:!0,href:!0});var O=d(v);q=G(O,"About Me"),O.forEach(u),L.forEach(u),this.h()},h(){_(r,"class",f=E(l[0].url.pathname==="/"?"show-underline":"")+" svelte-137f1wn"),_(r,"href","/"),N(e,"--color",P.deepRed),_(c,"class",I=E(l[0].url.pathname==="/projects"?"show-underline":"")+" svelte-137f1wn"),_(c,"href","/projects"),_(v,"class",F=E(l[0].url.pathname==="/about"?"show-underline":"")+" svelte-137f1wn"),_(v,"href","/about")},m(t,p){m(t,e,p),b(e,r),b(r,s),m(t,i,p),S(a,t,p),m(t,o,p),m(t,n,p),b(n,c),b(c,g),m(t,M,p),S(w,t,p),m(t,B,p),m(t,x,p),b(x,v),b(v,q),y=!0},p(t,p){(!y||p&1&&f!==(f=E(t[0].url.pathname==="/"?"show-underline":"")+" svelte-137f1wn"))&&_(r,"class",f),(!y||p&1&&I!==(I=E(t[0].url.pathname==="/projects"?"show-underline":"")+" svelte-137f1wn"))&&_(c,"class",I),(!y||p&1&&F!==(F=E(t[0].url.pathname==="/about"?"show-underline":"")+" svelte-137f1wn"))&&_(v,"class",F)},i(t){y||(C(a.$$.fragment,t),C(w.$$.fragment,t),y=!0)},o(t){j(a.$$.fragment,t),j(w.$$.fragment,t),y=!1},d(t){t&&u(e),t&&u(i),k(a,t),t&&u(o),t&&u(n),t&&u(M),k(w,t),t&&u(B),t&&u(x)}}}function ie(l){let e,r,s,f,i;return e=new U({props:{$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment),r=A(),s=$("img"),this.h()},l(a){R(e.$$.fragment,a),r=z(a),s=h(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ee(s.src,f="assets/personal_logo_red.svg")||_(s,"src",f),_(s,"alt","personal_logo"),_(s,"class","svelte-137f1wn")},m(a,o){S(e,a,o),m(a,r,o),m(a,s,o),i=!0},p(a,o){const n={};o&3&&(n.$$scope={dirty:o,ctx:a}),e.$set(n)},i(a){i||(C(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){k(e,a),a&&u(r),a&&u(s)}}}function fe(l){let e,r;return e=new U({props:{justifyContent:"space-between",alignItems:"center",$$slots:{default:[ie]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,f){S(e,s,f),r=!0},p(s,[f]){const i={};f&3&&(i.$$scope={dirty:f,ctx:s}),e.$set(i)},i(s){r||(C(e.$$.fragment,s),r=!0)},o(s){j(e.$$.fragment,s),r=!1},d(s){k(e,s)}}}function ue(l,e,r){let s;return Z(l,le,f=>r(0,s=f)),[s]}class ce extends Y{constructor(e){super(),Q(this,e,ue,fe,T,{})}}function pe(l){let e,r,s,f,i;s=new ce({});const a=l[1].default,o=te(a,l,l[0],null);return{c(){e=$("body"),r=$("div"),H(s.$$.fragment),f=A(),o&&o.c(),this.h()},l(n){e=h(n,"BODY",{style:!0,class:!0});var c=d(e);r=h(c,"DIV",{class:!0});var g=d(r);R(s.$$.fragment,g),f=z(g),o&&o.l(g),g.forEach(u),c.forEach(u),this.h()},h(){_(r,"class","page-wrapper svelte-s0dr67"),N(e,"--bgColor",P.warmWhite),N(e,"--color",P.deepRed),_(e,"class","svelte-s0dr67")},m(n,c){m(n,e,c),b(e,r),S(s,r,null),b(r,f),o&&o.m(r,null),i=!0},p(n,[c]){o&&o.p&&(!i||c&1)&&se(o,a,n,n[0],i?ae(a,n[0],c,null):re(n[0]),null)},i(n){i||(C(s.$$.fragment,n),C(o,n),i=!0)},o(n){j(s.$$.fragment,n),j(o,n),i=!1},d(n){n&&u(e),k(s),o&&o.d(n)}}}function _e(l,e,r){let{$$slots:s={},$$scope:f}=e;return l.$$set=i=>{"$$scope"in i&&r(0,f=i.$$scope)},[f,s]}class he extends Y{constructor(e){super(),Q(this,e,_e,pe,T,{})}}export{he as default};
