import{S as c,i as _,s as v,e as m,c as P,a as y,d as o,f as s,b as z,g as w,n as g,Z as j,U as C,V as I,W as A,r as E,p as S}from"./index-58df2f6a.js";function q(n){let t;return{c(){t=m("div"),this.h()},l(e){t=P(e,"DIV",{style:!0,class:!0}),y(t).forEach(o),this.h()},h(){s(t,"--width",n[0]+"px"),s(t,"--height",n[1]+"px"),z(t,"class","svelte-6f66ra")},m(e,h){w(e,t,h)},p(e,[h]){h&1&&s(t,"--width",e[0]+"px"),h&2&&s(t,"--height",e[1]+"px")},i:g,o:g,d(e){e&&o(t)}}}function B(n,t,e){let{width:h=0}=t,{height:a=0}=t;return n.$$set=i=>{"width"in i&&e(0,h=i.width),"height"in i&&e(1,a=i.height)},[h,a]}class F extends c{constructor(t){super(),_(this,t,B,q,v,{width:0,height:1})}}const W={warmWhite:"#FBF5EC",charcoal:"#3A3A3A",deepRed:"#951E1A"};function V(n){let t,e;const h=n[6].default,a=j(h,n,n[5],null);return{c(){t=m("div"),a&&a.c(),this.h()},l(i){t=P(i,"DIV",{style:!0,class:!0});var l=y(t);a&&a.l(l),l.forEach(o),this.h()},h(){s(t,"--align",n[0]),s(t,"--justify",n[1]),s(t,"--height",n[2]),s(t,"--verticalPad",n[3]+"px"),s(t,"--horizontalPad",n[4]+"px"),z(t,"class","svelte-lxqzcs")},m(i,l){w(i,t,l),a&&a.m(t,null),e=!0},p(i,[l]){a&&a.p&&(!e||l&32)&&C(a,h,i,i[5],e?A(h,i[5],l,null):I(i[5]),null),(!e||l&1)&&s(t,"--align",i[0]),(!e||l&2)&&s(t,"--justify",i[1]),(!e||l&4)&&s(t,"--height",i[2]),(!e||l&8)&&s(t,"--verticalPad",i[3]+"px"),(!e||l&16)&&s(t,"--horizontalPad",i[4]+"px")},i(i){e||(E(a,i),e=!0)},o(i){S(a,i),e=!1},d(i){i&&o(t),a&&a.d(i)}}}function b(n,t,e){let{$$slots:h={},$$scope:a}=t,{alignItems:i=""}=t,{justifyContent:l=""}=t,{height:d="auto"}=t,{verticalPadding:r=0}=t,{horizontalPadding:u=0}=t;return n.$$set=f=>{"alignItems"in f&&e(0,i=f.alignItems),"justifyContent"in f&&e(1,l=f.justifyContent),"height"in f&&e(2,d=f.height),"verticalPadding"in f&&e(3,r=f.verticalPadding),"horizontalPadding"in f&&e(4,u=f.horizontalPadding),"$$scope"in f&&e(5,a=f.$$scope)},[i,l,d,r,u,a,h]}class R extends c{constructor(t){super(),_(this,t,b,V,v,{alignItems:0,justifyContent:1,height:2,verticalPadding:3,horizontalPadding:4})}}export{R as C,F as S,W as c};
