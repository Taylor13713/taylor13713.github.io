import{w as o}from"./writeEffect-59232ae8.js";import{a}from"./animationSetup-2a9f1d4c.js";import"./index-834a0646.js";const c=n=>n.forEach(s=>s.currentNode.textContent=""),d=async(n,s)=>{const{options:i,elements:e}=a(n,s);c(e);for(const t of e)await o(t,i),i.keepCursorOnFinish?!(e.indexOf(t)===e.length-1)&&t.currentNode.classList.replace("typing","finished-typing"):t.currentNode.classList.replace("typing","finished-typing");i.dispatch("done")};export{d as default};