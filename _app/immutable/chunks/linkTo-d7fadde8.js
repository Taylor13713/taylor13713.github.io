import{S as p,i as v,s as u,e as b,t as m,c as _,a as g,h as k,d,b as n,f as o,g as x,H as z,j as y,n as h}from"./index-834a0646.js";import{c}from"./column-a1e9d075.js";function T(a){let e,s;return{c(){e=b("a"),s=m(a[1]),this.h()},l(r){e=_(r,"A",{href:!0,style:!0,class:!0});var t=g(e);s=k(t,a[1]),t.forEach(d),this.h()},h(){n(e,"href",a[0]),o(e,"--color",c.deepRed),o(e,"--hoverTextColor",c.warmWhite),o(e,"--fontSize",a[2]?"15px":"20px"),o(e,"--padding",a[2]?"6px 12px":"10px 20px"),o(e,"--borderThickness",a[2]?"2px":"3px"),o(e,"--fontWeight",a[2]?400:500),o(e,"--borderRadius",a[2]?"7px":"10px"),n(e,"class","svelte-3ppa70")},m(r,t){x(r,e,t),z(e,s)},p(r,[t]){t&2&&y(s,r[1]),t&1&&n(e,"href",r[0])},i:h,o:h,d(r){r&&d(e)}}}function S(a,e,s){let{link:r="/"}=e,{label:t=""}=e,{size:i="normal"}=e,f=i==="small";return a.$$set=l=>{"link"in l&&s(0,r=l.link),"label"in l&&s(1,t=l.label),"size"in l&&s(3,i=l.size)},[r,t,f,i]}class W extends p{constructor(e){super(),v(this,e,S,T,u,{link:0,label:1,size:3})}}export{W as L};
