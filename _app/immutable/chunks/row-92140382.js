import{S as d,i as m,s as g,e as v,c as w,a as j,d as o,f as h,b as r,g as y,n as c,K as S,I as _,L as I,M as C,N as b,r as z,p as B}from"./index-0de2a2f0.js";function D(a){let t;return{c(){t=v("div"),this.h()},l(e){t=w(e,"DIV",{style:!0,class:!0}),j(t).forEach(o),this.h()},h(){h(t,"--width",a[0]+"px"),h(t,"--height",a[1]+"px"),r(t,"class","svelte-6f66ra")},m(e,l){y(e,t,l)},p(e,[l]){l&1&&h(t,"--width",e[0]+"px"),l&2&&h(t,"--height",e[1]+"px")},i:c,o:c,d(e){e&&o(t)}}}function E(a,t,e){let{width:l=0}=t,{height:f=0}=t;return a.$$set=i=>{"width"in i&&e(0,l=i.width),"height"in i&&e(1,f=i.height)},[l,f]}class x extends d{constructor(t){super(),m(this,t,E,D,g,{width:0,height:1})}}function R(a){let t,e,l;const f=a[4].default,i=S(f,a,a[3],null);return{c(){t=v("div"),i&&i.c(),this.h()},l(s){t=w(s,"DIV",{class:!0,style:!0});var n=j(t);i&&i.l(n),n.forEach(o),this.h()},h(){r(t,"class",e=_(a[2]?"auto-switch":"")+" svelte-1jml82j"),h(t,"--align",a[0]),h(t,"--justify",a[1])},m(s,n){y(s,t,n),i&&i.m(t,null),l=!0},p(s,[n]){i&&i.p&&(!l||n&8)&&I(i,f,s,s[3],l?b(f,s[3],n,null):C(s[3]),null),(!l||n&4&&e!==(e=_(s[2]?"auto-switch":"")+" svelte-1jml82j"))&&r(t,"class",e),(!l||n&1)&&h(t,"--align",s[0]),(!l||n&2)&&h(t,"--justify",s[1])},i(s){l||(z(i,s),l=!0)},o(s){B(i,s),l=!1},d(s){s&&o(t),i&&i.d(s)}}}function V(a,t,e){let{$$slots:l={},$$scope:f}=t,{alignItems:i=""}=t,{justifyContent:s=""}=t,{autoSwitch:n=!1}=t;return a.$$set=u=>{"alignItems"in u&&e(0,i=u.alignItems),"justifyContent"in u&&e(1,s=u.justifyContent),"autoSwitch"in u&&e(2,n=u.autoSwitch),"$$scope"in u&&e(3,f=u.$$scope)},[i,s,n,f,l]}class K extends d{constructor(t){super(),m(this,t,V,R,g,{alignItems:0,justifyContent:1,autoSwitch:2})}}export{K as R,x as S};