import{$ as y}from"./index-834a0646.js";function l(o){const n=o-1;return n*n*n+1}function $(o){return-o*(o-2)}function b(o,{delay:n=0,duration:s=400,easing:e=y}={}){const t=+getComputedStyle(o).opacity;return{delay:n,duration:s,easing:e,css:p=>`opacity: ${p*t}`}}function h(o,{delay:n=0,duration:s=400,easing:e=l,x:t=0,y:p=0,opacity:c=0}={}){const a=getComputedStyle(o),i=+a.opacity,m=a.transform==="none"?"":a.transform,g=i*(1-c);return{delay:n,duration:s,easing:e,css:(f,d)=>`
			transform: ${m} translate(${(1-f)*t}px, ${(1-f)*p}px);
			opacity: ${i-g*d}`}}function _(o,{delay:n=0,duration:s=400,easing:e=l}={}){const t=getComputedStyle(o),p=+t.opacity,c=parseFloat(t.height),a=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),m=parseFloat(t.marginTop),g=parseFloat(t.marginBottom),f=parseFloat(t.borderTopWidth),d=parseFloat(t.borderBottomWidth);return{delay:n,duration:s,easing:e,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*p};height: ${r*c}px;padding-top: ${r*a}px;padding-bottom: ${r*i}px;margin-top: ${r*m}px;margin-bottom: ${r*g}px;border-top-width: ${r*f}px;border-bottom-width: ${r*d}px;`}}function x(o,{delay:n=0,duration:s=400,easing:e=l,start:t=0,opacity:p=0}={}){const c=getComputedStyle(o),a=+c.opacity,i=c.transform==="none"?"":c.transform,m=1-t,g=a*(1-p);return{delay:n,duration:s,easing:e,css:(f,d)=>`
			transform: ${i} scale(${1-m*d});
			opacity: ${a-g*d}
		`}}export{x as a,h as b,b as f,$ as q,_ as s};