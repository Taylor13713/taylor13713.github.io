import{S as c,i as v,s as _,e as m,c as P,a as j,d as o,f as h,b as g,g as y,n as w,U as C,Y as z,V as I,W as S,X as b,r as V,p as q}from"./index-b41c8dc2.js";function D(a){let t;return{c(){t=m("div"),this.h()},l(i){t=P(i,"DIV",{style:!0,class:!0}),j(t).forEach(o),this.h()},h(){h(t,"--width",a[0]+"px"),h(t,"--height",a[1]+"px"),g(t,"class","svelte-6f66ra")},m(i,l){y(i,t,l)},p(i,[l]){l&1&&h(t,"--width",i[0]+"px"),l&2&&h(t,"--height",i[1]+"px")},i:w,o:w,d(i){i&&o(t)}}}function E(a,t,i){let{width:l=0}=t,{height:s=0}=t;return a.$$set=e=>{"width"in e&&i(0,l=e.width),"height"in e&&i(1,s=e.height)},[l,s]}class Y extends c{constructor(t){super(),v(this,t,E,D,_,{width:0,height:1})}}function B(a){let t,i,l;const s=a[6].default,e=C(s,a,a[5],null);return{c(){t=m("div"),e&&e.c(),this.h()},l(n){t=P(n,"DIV",{class:!0,style:!0});var u=j(t);e&&e.l(u),u.forEach(o),this.h()},h(){g(t,"class",i=z(a[2]?"auto-switch":"")+" svelte-b4nfjx"),h(t,"--align",a[0]),h(t,"--justify",a[1]),h(t,"--verticalPad",a[3]+"px"),h(t,"--horizontalPad",a[4]+"px")},m(n,u){y(n,t,u),e&&e.m(t,null),l=!0},p(n,[u]){e&&e.p&&(!l||u&32)&&I(e,s,n,n[5],l?b(s,n[5],u,null):S(n[5]),null),(!l||u&4&&i!==(i=z(n[2]?"auto-switch":"")+" svelte-b4nfjx"))&&g(t,"class",i),(!l||u&1)&&h(t,"--align",n[0]),(!l||u&2)&&h(t,"--justify",n[1]),(!l||u&8)&&h(t,"--verticalPad",n[3]+"px"),(!l||u&16)&&h(t,"--horizontalPad",n[4]+"px")},i(n){l||(V(e,n),l=!0)},o(n){q(e,n),l=!1},d(n){n&&o(t),e&&e.d(n)}}}function R(a,t,i){let{$$slots:l={},$$scope:s}=t,{alignItems:e=""}=t,{justifyContent:n=""}=t,{autoSwitch:u=!1}=t,{verticalPadding:d=0}=t,{horizontalPadding:r=0}=t;return a.$$set=f=>{"alignItems"in f&&i(0,e=f.alignItems),"justifyContent"in f&&i(1,n=f.justifyContent),"autoSwitch"in f&&i(2,u=f.autoSwitch),"verticalPadding"in f&&i(3,d=f.verticalPadding),"horizontalPadding"in f&&i(4,r=f.horizontalPadding),"$$scope"in f&&i(5,s=f.$$scope)},[e,n,u,d,r,s,l]}class k extends c{constructor(t){super(),v(this,t,R,B,_,{alignItems:0,justifyContent:1,autoSwitch:2,verticalPadding:3,horizontalPadding:4})}}function U(a){let t,i;const l=a[6].default,s=C(l,a,a[5],null);return{c(){t=m("div"),s&&s.c(),this.h()},l(e){t=P(e,"DIV",{style:!0,class:!0});var n=j(t);s&&s.l(n),n.forEach(o),this.h()},h(){h(t,"--align",a[0]),h(t,"--justify",a[1]),h(t,"--height",a[2]),h(t,"--verticalPad",a[3]+"px"),h(t,"--horizontalPad",a[4]+"px"),g(t,"class","svelte-lxqzcs")},m(e,n){y(e,t,n),s&&s.m(t,null),i=!0},p(e,[n]){s&&s.p&&(!i||n&32)&&I(s,l,e,e[5],i?b(l,e[5],n,null):S(e[5]),null),(!i||n&1)&&h(t,"--align",e[0]),(!i||n&2)&&h(t,"--justify",e[1]),(!i||n&4)&&h(t,"--height",e[2]),(!i||n&8)&&h(t,"--verticalPad",e[3]+"px"),(!i||n&16)&&h(t,"--horizontalPad",e[4]+"px")},i(e){i||(V(s,e),i=!0)},o(e){q(s,e),i=!1},d(e){e&&o(t),s&&s.d(e)}}}function W(a,t,i){let{$$slots:l={},$$scope:s}=t,{alignItems:e=""}=t,{justifyContent:n=""}=t,{height:u="auto"}=t,{verticalPadding:d=0}=t,{horizontalPadding:r=0}=t;return a.$$set=f=>{"alignItems"in f&&i(0,e=f.alignItems),"justifyContent"in f&&i(1,n=f.justifyContent),"height"in f&&i(2,u=f.height),"verticalPadding"in f&&i(3,d=f.verticalPadding),"horizontalPadding"in f&&i(4,r=f.horizontalPadding),"$$scope"in f&&i(5,s=f.$$scope)},[e,n,u,d,r,s,l]}class A extends c{constructor(t){super(),v(this,t,W,U,_,{alignItems:0,justifyContent:1,height:2,verticalPadding:3,horizontalPadding:4})}}export{A as C,k as R,Y as S};
