import{S as u,i as m,s as _,x as d,y as p,z as g,r as c,p as f,C as v,_ as $,e as h,c as y,a as w,d as i,f as o,b as C,g as D,V as x,W as b,X as j}from"./index-834a0646.js";import{R}from"./row-76030431.js";function S(a){let e,r;const n=a[1].default,s=$(n,a,a[2],null);return{c(){e=h("div"),s&&s.c(),this.h()},l(t){e=y(t,"DIV",{style:!0,class:!0});var l=w(e);s&&s.l(l),l.forEach(i),this.h()},h(){o(e,"--gridDirection",a[0]?"rtl":"ltr"),C(e,"class","svelte-91lgfr")},m(t,l){D(t,e,l),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&(!r||l&4)&&x(s,n,t,t[2],r?j(n,t[2],l,null):b(t[2]),null),(!r||l&1)&&o(e,"--gridDirection",t[0]?"rtl":"ltr")},i(t){r||(c(s,t),r=!0)},o(t){f(s,t),r=!1},d(t){t&&i(e),s&&s.d(t)}}}function T(a){let e,r;return e=new R({props:{justifyContent:"center",$$slots:{default:[S]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,s){g(e,n,s),r=!0},p(n,[s]){const t={};s&5&&(t.$$scope={dirty:s,ctx:n}),e.$set(t)},i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){f(e.$$.fragment,n),r=!1},d(n){v(e,n)}}}function V(a,e,r){let{$$slots:n={},$$scope:s}=e,{reverse:t=!1}=e;return a.$$set=l=>{"reverse"in l&&r(0,t=l.reverse),"$$scope"in l&&r(2,s=l.$$scope)},[t,n,s]}class E extends u{constructor(e){super(),m(this,e,V,T,_,{reverse:0})}}export{E as T};
