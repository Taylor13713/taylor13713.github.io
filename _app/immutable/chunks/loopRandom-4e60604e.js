import{w as a}from"./writeAndUnwriteText-00c54aec.js";import{r,a as m,m as l}from"./animationSetup-4137456c.js";import"./writeEffect-2589b199.js";import"./unwriteEffect-372d580a.js";import"./index-58df2f6a.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const s=c(i);await a(s,o)}};export{T as default};
