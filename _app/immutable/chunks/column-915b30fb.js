import{S as c,i as v,s as _,e as m,c as w,a as y,d as r,f as d,b as g,g as P,n as j,_ as z,U as I,V as C,W as b,X as S,r as D,p as k}from"./index-e1f6754c.js";function U(n){let t;return{c(){t=m("div"),this.h()},l(i){t=w(i,"DIV",{style:!0,class:!0}),y(t).forEach(r),this.h()},h(){d(t,"--width",n[0]+"px"),d(t,"--height",n[1]+"px"),g(t,"class","svelte-6f66ra")},m(i,s){P(i,t,s)},p(i,[s]){s&1&&d(t,"--width",i[0]+"px"),s&2&&d(t,"--height",i[1]+"px")},i:j,o:j,d(i){i&&r(t)}}}function E(n,t,i){let{width:s=0}=t,{height:l=0}=t;return n.$$set=e=>{"width"in e&&i(0,s=e.width),"height"in e&&i(1,l=e.height)},[s,l]}class B extends c{constructor(t){super(),v(this,t,E,U,_,{width:0,height:1})}}const M={warmWhite:"#FBF5EC",charcoal:"#3A3A3A",deepRed:"#951E1A"},R=[{src:"assets/hello_red.svg",alt:"hello",description:"My name is Taylor. I major in Computer Science and minor in Collaborative Innovation at the University of Notre Dame. I am expected to graduate in May of 2023",height:"auto",width:"auto"},{src:"assets/fullstack_red.svg",alt:"fullstack",description:"I am experienced in Fullstack Development with the specialization in Frontend and UI/UX Development",height:"160px",width:"400px"},{src:"assets/design_red.svg",alt:"design",description:"Out of all the areas of design, I specialize in human-centered UI/UX Design. I design and develop apps and websites with the goal of bettering other people\u2019s lives",height:"auto",width:"auto"},{src:"assets/ipad_red.svg",alt:"drawing",description:"Outside of my studies, I enjoy drawing anime fan-arts on my iPad",height:"auto",width:"auto"},{src:"assets/red.svg",alt:"red",description:"My favorite color is red",height:"auto",width:"auto"},{src:"assets/i_love_skog.svg",alt:"skog",description:"I love boba tea and Djungelskog",height:"auto",width:"auto"}];function A(n){let t,i,s;const l=n[6].default,e=z(l,n,n[5],null);return{c(){t=m("div"),e&&e.c(),this.h()},l(a){t=w(a,"DIV",{class:!0,style:!0});var h=y(t);e&&e.l(h),h.forEach(r),this.h()},h(){g(t,"class",i=I(n[2]?"auto-switch":"")+" svelte-b4nfjx"),d(t,"--align",n[0]),d(t,"--justify",n[1]),d(t,"--verticalPad",n[3]+"px"),d(t,"--horizontalPad",n[4]+"px")},m(a,h){P(a,t,h),e&&e.m(t,null),s=!0},p(a,[h]){e&&e.p&&(!s||h&32)&&C(e,l,a,a[5],s?S(l,a[5],h,null):b(a[5]),null),(!s||h&4&&i!==(i=I(a[2]?"auto-switch":"")+" svelte-b4nfjx"))&&g(t,"class",i),(!s||h&1)&&d(t,"--align",a[0]),(!s||h&2)&&d(t,"--justify",a[1]),(!s||h&8)&&d(t,"--verticalPad",a[3]+"px"),(!s||h&16)&&d(t,"--horizontalPad",a[4]+"px")},i(a){s||(D(e,a),s=!0)},o(a){k(e,a),s=!1},d(a){a&&r(t),e&&e.d(a)}}}function F(n,t,i){let{$$slots:s={},$$scope:l}=t,{alignItems:e=""}=t,{justifyContent:a=""}=t,{autoSwitch:h=!1}=t,{verticalPadding:f=0}=t,{horizontalPadding:u=0}=t;return n.$$set=o=>{"alignItems"in o&&i(0,e=o.alignItems),"justifyContent"in o&&i(1,a=o.justifyContent),"autoSwitch"in o&&i(2,h=o.autoSwitch),"verticalPadding"in o&&i(3,f=o.verticalPadding),"horizontalPadding"in o&&i(4,u=o.horizontalPadding),"$$scope"in o&&i(5,l=o.$$scope)},[e,a,h,f,u,l,s]}class X extends c{constructor(t){super(),v(this,t,F,A,_,{alignItems:0,justifyContent:1,autoSwitch:2,verticalPadding:3,horizontalPadding:4})}}function V(n){let t,i;const s=n[6].default,l=z(s,n,n[5],null);return{c(){t=m("div"),l&&l.c(),this.h()},l(e){t=w(e,"DIV",{style:!0,class:!0});var a=y(t);l&&l.l(a),a.forEach(r),this.h()},h(){d(t,"--align",n[0]),d(t,"--justify",n[1]),d(t,"--height",n[2]),d(t,"--verticalPad",n[3]+"px"),d(t,"--horizontalPad",n[4]+"px"),g(t,"class","svelte-lxqzcs")},m(e,a){P(e,t,a),l&&l.m(t,null),i=!0},p(e,[a]){l&&l.p&&(!i||a&32)&&C(l,s,e,e[5],i?S(s,e[5],a,null):b(e[5]),null),(!i||a&1)&&d(t,"--align",e[0]),(!i||a&2)&&d(t,"--justify",e[1]),(!i||a&4)&&d(t,"--height",e[2]),(!i||a&8)&&d(t,"--verticalPad",e[3]+"px"),(!i||a&16)&&d(t,"--horizontalPad",e[4]+"px")},i(e){i||(D(l,e),i=!0)},o(e){k(l,e),i=!1},d(e){e&&r(t),l&&l.d(e)}}}function q(n,t,i){let{$$slots:s={},$$scope:l}=t,{alignItems:e=""}=t,{justifyContent:a=""}=t,{height:h="auto"}=t,{verticalPadding:f=0}=t,{horizontalPadding:u=0}=t;return n.$$set=o=>{"alignItems"in o&&i(0,e=o.alignItems),"justifyContent"in o&&i(1,a=o.justifyContent),"height"in o&&i(2,h=o.height),"verticalPadding"in o&&i(3,f=o.verticalPadding),"horizontalPadding"in o&&i(4,u=o.horizontalPadding),"$$scope"in o&&i(5,l=o.$$scope)},[e,a,h,f,u,l,s]}class O extends c{constructor(t){super(),v(this,t,q,V,_,{alignItems:0,justifyContent:1,height:2,verticalPadding:3,horizontalPadding:4})}}export{O as C,X as R,B as S,M as c,R as i};
