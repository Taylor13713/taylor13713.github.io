import{S as De,i as Pe,s as Te,e as C,t as A,k as g,c as B,a as q,h as D,d as x,m as f,b,f as re,g as W,H as l,j as Xe,n as Ae,T as oe,L as Ye,Y as Ze,Z as Ke,I as Ue,o as Qe,a7 as et,q as tt,r as p,p as $,J as nt,a8 as at,x as v,y as w,z as y,C as _}from"../../chunks/index-834a0646.js";import{c as st,C as rt,S as I,R as it}from"../../chunks/column-a1e9d075.js";import{L as je}from"../../chunks/linkTo-d7fadde8.js";import{b as Oe}from"../../chunks/index-52d2784a.js";function lt(c){let t,a,e,h,s;return{c(){t=C("div"),a=C("h4"),e=A(c[0]),h=g(),s=C("div"),this.h()},l(o){t=B(o,"DIV",{class:!0});var n=q(t);a=B(n,"H4",{class:!0});var u=q(a);e=D(u,c[0]),u.forEach(x),h=f(n),s=B(n,"DIV",{class:!0,style:!0}),q(s).forEach(x),n.forEach(x),this.h()},h(){b(a,"class","svelte-1wy86ht"),b(s,"class","bar svelte-1wy86ht"),re(s,"--bgColor",st.deepRed),b(t,"class","section-title svelte-1wy86ht")},m(o,n){W(o,t,n),l(t,a),l(a,e),l(t,h),l(t,s)},p(o,[n]){n&1&&Xe(e,o[0])},i:Ae,o:Ae,d(o){o&&x(t)}}}function ot(c,t,a){let{header:e=""}=t;return c.$$set=h=>{"header"in h&&a(0,e=h.header)},[e]}class le extends De{constructor(t){super(),Pe(this,t,ot,lt,Te,{header:0})}}function Ne(c,t,a){const e=c.slice();return e[10]=t[a],e}function Je(c,t){let a,e,h,s,o;return{key:c,first:null,c(){a=C("img"),this.h()},l(n){a=B(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){oe(a.src,e=`/assets/${t[1]}/${t[10]}`)||b(a,"src",e),b(a,"alt",""),b(a,"class","carousel-images svelte-ttx3xq"),this.first=a},m(n,u){W(n,a,u),o=!0},p(n,u){t=n,(!o||u&19&&!oe(a.src,e=`/assets/${t[1]}/${t[10]}`))&&b(a,"src",e)},i(n){o||(Ye(()=>{s&&s.end(1),h=Ze(a,Oe,{x:t[5],duration:1e3,delay:500}),h.start()}),o=!0)},o(n){h&&h.invalidate(),s=Ke(a,t[8],{}),o=!1},d(n){n&&x(a),n&&s&&s.end()}}}function ht(c){let t,a,e,h,s=[],o=new Map,n,u,M,S,E,P,k=[c[0][c[4]]];const H=d=>d[4];for(let d=0;d<1;d+=1){let m=Ne(c,k,d),z=H(m);o.set(z,s[d]=Je(z,m))}return{c(){t=C("div"),a=C("img"),h=g();for(let d=0;d<1;d+=1)s[d].c();n=g(),u=C("img"),this.h()},l(d){t=B(d,"DIV",{class:!0,style:!0});var m=q(t);a=B(m,"IMG",{src:!0,alt:!0,class:!0}),h=f(m);for(let z=0;z<1;z+=1)s[z].l(m);n=f(m),u=B(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(x),this.h()},h(){oe(a.src,e="/assets/icons/left_chevron.svg")||b(a,"src",e),b(a,"alt","left"),b(a,"class","chevron svelte-ttx3xq"),oe(u.src,M="/assets/icons/right_chevron.svg")||b(u,"src",M),b(u,"alt","right"),b(u,"class","chevron svelte-ttx3xq"),b(t,"class","carousel-wrapper svelte-ttx3xq"),re(t,"--width",c[2]),re(t,"--height",c[3])},m(d,m){W(d,t,m),l(t,a),l(t,h);for(let z=0;z<1;z+=1)s[z].m(t,null);l(t,n),l(t,u),S=!0,E||(P=[Ue(a,"click",c[7]),Ue(u,"click",c[6])],E=!0)},p(d,[m]){m&19&&(k=[d[0][d[4]]],Qe(),s=et(s,m,H,1,d,k,o,t,at,Je,n,Ne),tt()),(!S||m&4)&&re(t,"--width",d[2]),(!S||m&8)&&re(t,"--height",d[3])},i(d){if(!S){for(let m=0;m<1;m+=1)p(s[m]);S=!0}},o(d){for(let m=0;m<1;m+=1)$(s[m]);S=!1},d(d){d&&x(t);for(let m=0;m<1;m+=1)s[m].d();E=!1,nt(P)}}}const se=300;function mt(c,t,a){let{photos:e=[]}=t,{path:h=""}=t,{imageWidth:s="300px"}=t,{imageHeight:o="620px"}=t,n=0,u=se*-1,M;const S=()=>{a(4,n=(n+1)%e.length),a(5,u=se),M="next"},E=()=>{n===0?a(4,n=e.length-1):a(4,n=n-1),a(5,u=se*-1),M="prev"},P=(k,H)=>Oe(k,{x:M==="next"?-se:se,duration:1e3});return setInterval(S,5e3),c.$$set=k=>{"photos"in k&&a(0,e=k.photos),"path"in k&&a(1,h=k.path),"imageWidth"in k&&a(2,s=k.imageWidth),"imageHeight"in k&&a(3,o=k.imageHeight)},[e,h,s,o,n,u,S,E,P]}class ut extends De{constructor(t){super(),Pe(this,t,mt,ht,Te,{photos:0,path:1,imageWidth:2,imageHeight:3})}}function gt(c){let t,a,e,h,s,o;return t=new je({props:{link:"https://apps.apple.com/us/app/mybeacon-beacon-college/id1526618027?platform=iphone",label:"View on App Store",size:"small"}}),e=new I({props:{width:20}}),s=new je({props:{link:"https://play.google.com/store/apps/details?id=com.beaconcollege.mybeacon&hl=en_US\u2277=US",label:"View on Google Play",size:"small"}}),{c(){v(t.$$.fragment),a=g(),v(e.$$.fragment),h=g(),v(s.$$.fragment)},l(n){w(t.$$.fragment,n),a=f(n),w(e.$$.fragment,n),h=f(n),w(s.$$.fragment,n)},m(n,u){y(t,n,u),W(n,a,u),y(e,n,u),W(n,h,u),y(s,n,u),o=!0},p:Ae,i(n){o||(p(t.$$.fragment,n),p(e.$$.fragment,n),p(s.$$.fragment,n),o=!0)},o(n){$(t.$$.fragment,n),$(e.$$.fragment,n),$(s.$$.fragment,n),o=!1},d(n){_(t,n),n&&x(a),_(e,n),n&&x(h),_(s,n)}}}function ft(c){let t,a,e,h,s,o,n,u,M,S,E,P,k,H,d,m,z,Z,he,me,L,ue,F,ge,V,fe,K,ce,de,G,pe,Q,$e,ve,R,we,ee,ye,_e,U,be,te,ke,xe,j,Ce,N,Be,J,ze,ne,Ie,Se,O,Ee,X,qe,Y,Me,T,ie;return t=new I({props:{height:30}}),h=new le({props:{header:"Background Info"}}),o=new I({props:{height:15}}),E=new I({props:{height:10}}),m=new I({props:{height:10}}),L=new I({props:{height:20}}),F=new le({props:{header:"Design & Development"}}),V=new I({props:{height:15}}),G=new I({props:{height:10}}),R=new I({props:{height:10}}),U=new I({props:{height:10}}),j=new I({props:{height:20}}),N=new le({props:{header:"Statistics"}}),J=new I({props:{height:15}}),O=new I({props:{height:20}}),X=new le({props:{header:"Additional Links"}}),Y=new I({props:{height:20}}),T=new it({props:{$$slots:{default:[gt]},$$scope:{ctx:c}}}),{c(){v(t.$$.fragment),a=g(),e=C("div"),v(h.$$.fragment),s=g(),v(o.$$.fragment),n=g(),u=C("p"),M=A(`Beacon College is a private college located in Leesburg, Florida. It is designed with
			curriculum and support services to serve students with dyslexia, ADHD, or other specific
			learning disabilities.`),S=g(),v(E.$$.fragment),P=g(),k=C("p"),H=A(`MyBeacon is the College\u2019s signature, readily accessible tool for student navigation of all
			things \u201CBeacon.\u201D Simply access the menu and the resources of the College are yours. Want to
			know about Campus Dining, Transportation, or Student Events? They are yours. Need to access
			either your Canvas LMS platform or the Student Portal? Click and log in. Campus locations and
			local amenities (banks, restaurants, shopping) are identified and mapped for you. Contacting
			important offices on campus by phone or email is simplified.`),d=g(),v(m.$$.fragment),z=g(),Z=C("p"),he=A(`Although this App has been designed primarily with student needs as its focus, parents and
			other members of the Beacon community are welcome to download this product.`),me=g(),v(L.$$.fragment),ue=g(),v(F.$$.fragment),ge=g(),v(V.$$.fragment),fe=g(),K=C("p"),ce=A(`My partner and I worked closely with the college's administration and learning specialist to
			gain more insights regarding the students' thought process when they are presented with a user
			interface.`),de=g(),v(G.$$.fragment),pe=g(),Q=C("p"),$e=A(`After doing research and conducting numerous interviews, we came up with a design tailored to
			the students' needs. In MyBeacon, the user never navigates away from the home screen, and
			everything pops up as a modal from the bottom. We designed the app with a single-level
			navigation structure and a home page that remains visible in the background at all times.
			Therefore, the user always subconsciously knows that they can return to the home page if they
			cannot find the information they want, instead of getting overwhelmed and lost due to multiple
			levels of navigation.`),ve=g(),v(R.$$.fragment),we=g(),ee=C("p"),ye=A(`We made the initial mockup of the app in Figma, and developed it using Flutter, a
			multi-platform mobile development framework.`),_e=g(),v(U.$$.fragment),be=g(),te=C("p"),ke=A(`After the app went live in the fall of 2021, we actively sought feedback from the community to
			eliminate new bugs and improve the app. We also added additional features when requested, such
			as Covid symptoms reporting.`),xe=g(),v(j.$$.fragment),Ce=g(),v(N.$$.fragment),Be=g(),v(J.$$.fragment),ze=g(),ne=C("p"),Ie=A(`This intuitive, easy-to-navigate app is currently used by around 400 members at the Beacon
			College community, including students, their parents, faculty and staff.`),Se=g(),v(O.$$.fragment),Ee=g(),v(X.$$.fragment),qe=g(),v(Y.$$.fragment),Me=g(),v(T.$$.fragment),this.h()},l(i){w(t.$$.fragment,i),a=f(i),e=B(i,"DIV",{class:!0});var r=q(e);w(h.$$.fragment,r),s=f(r),w(o.$$.fragment,r),n=f(r),u=B(r,"P",{class:!0});var ae=q(u);M=D(ae,`Beacon College is a private college located in Leesburg, Florida. It is designed with
			curriculum and support services to serve students with dyslexia, ADHD, or other specific
			learning disabilities.`),ae.forEach(x),S=f(r),w(E.$$.fragment,r),P=f(r),k=B(r,"P",{class:!0});var We=q(k);H=D(We,`MyBeacon is the College\u2019s signature, readily accessible tool for student navigation of all
			things \u201CBeacon.\u201D Simply access the menu and the resources of the College are yours. Want to
			know about Campus Dining, Transportation, or Student Events? They are yours. Need to access
			either your Canvas LMS platform or the Student Portal? Click and log in. Campus locations and
			local amenities (banks, restaurants, shopping) are identified and mapped for you. Contacting
			important offices on campus by phone or email is simplified.`),We.forEach(x),d=f(r),w(m.$$.fragment,r),z=f(r),Z=B(r,"P",{class:!0});var He=q(Z);he=D(He,`Although this App has been designed primarily with student needs as its focus, parents and
			other members of the Beacon community are welcome to download this product.`),He.forEach(x),me=f(r),w(L.$$.fragment,r),ue=f(r),w(F.$$.fragment,r),ge=f(r),w(V.$$.fragment,r),fe=f(r),K=B(r,"P",{class:!0});var Le=q(K);ce=D(Le,`My partner and I worked closely with the college's administration and learning specialist to
			gain more insights regarding the students' thought process when they are presented with a user
			interface.`),Le.forEach(x),de=f(r),w(G.$$.fragment,r),pe=f(r),Q=B(r,"P",{class:!0});var Fe=q(Q);$e=D(Fe,`After doing research and conducting numerous interviews, we came up with a design tailored to
			the students' needs. In MyBeacon, the user never navigates away from the home screen, and
			everything pops up as a modal from the bottom. We designed the app with a single-level
			navigation structure and a home page that remains visible in the background at all times.
			Therefore, the user always subconsciously knows that they can return to the home page if they
			cannot find the information they want, instead of getting overwhelmed and lost due to multiple
			levels of navigation.`),Fe.forEach(x),ve=f(r),w(R.$$.fragment,r),we=f(r),ee=B(r,"P",{class:!0});var Ve=q(ee);ye=D(Ve,`We made the initial mockup of the app in Figma, and developed it using Flutter, a
			multi-platform mobile development framework.`),Ve.forEach(x),_e=f(r),w(U.$$.fragment,r),be=f(r),te=B(r,"P",{class:!0});var Ge=q(te);ke=D(Ge,`After the app went live in the fall of 2021, we actively sought feedback from the community to
			eliminate new bugs and improve the app. We also added additional features when requested, such
			as Covid symptoms reporting.`),Ge.forEach(x),xe=f(r),w(j.$$.fragment,r),Ce=f(r),w(N.$$.fragment,r),Be=f(r),w(J.$$.fragment,r),ze=f(r),ne=B(r,"P",{class:!0});var Re=q(ne);Ie=D(Re,`This intuitive, easy-to-navigate app is currently used by around 400 members at the Beacon
			College community, including students, their parents, faculty and staff.`),Re.forEach(x),Se=f(r),w(O.$$.fragment,r),Ee=f(r),w(X.$$.fragment,r),qe=f(r),w(Y.$$.fragment,r),Me=f(r),w(T.$$.fragment,r),r.forEach(x),this.h()},h(){b(u,"class","svelte-10i0kgu"),b(k,"class","svelte-10i0kgu"),b(Z,"class","svelte-10i0kgu"),b(K,"class","svelte-10i0kgu"),b(Q,"class","svelte-10i0kgu"),b(ee,"class","svelte-10i0kgu"),b(te,"class","svelte-10i0kgu"),b(ne,"class","svelte-10i0kgu"),b(e,"class","paragraph-width-wrapper")},m(i,r){y(t,i,r),W(i,a,r),W(i,e,r),y(h,e,null),l(e,s),y(o,e,null),l(e,n),l(e,u),l(u,M),l(e,S),y(E,e,null),l(e,P),l(e,k),l(k,H),l(e,d),y(m,e,null),l(e,z),l(e,Z),l(Z,he),l(e,me),y(L,e,null),l(e,ue),y(F,e,null),l(e,ge),y(V,e,null),l(e,fe),l(e,K),l(K,ce),l(e,de),y(G,e,null),l(e,pe),l(e,Q),l(Q,$e),l(e,ve),y(R,e,null),l(e,we),l(e,ee),l(ee,ye),l(e,_e),y(U,e,null),l(e,be),l(e,te),l(te,ke),l(e,xe),y(j,e,null),l(e,Ce),y(N,e,null),l(e,Be),y(J,e,null),l(e,ze),l(e,ne),l(ne,Ie),l(e,Se),y(O,e,null),l(e,Ee),y(X,e,null),l(e,qe),y(Y,e,null),l(e,Me),y(T,e,null),ie=!0},p(i,r){const ae={};r&2&&(ae.$$scope={dirty:r,ctx:i}),T.$set(ae)},i(i){ie||(p(t.$$.fragment,i),p(h.$$.fragment,i),p(o.$$.fragment,i),p(E.$$.fragment,i),p(m.$$.fragment,i),p(L.$$.fragment,i),p(F.$$.fragment,i),p(V.$$.fragment,i),p(G.$$.fragment,i),p(R.$$.fragment,i),p(U.$$.fragment,i),p(j.$$.fragment,i),p(N.$$.fragment,i),p(J.$$.fragment,i),p(O.$$.fragment,i),p(X.$$.fragment,i),p(Y.$$.fragment,i),p(T.$$.fragment,i),ie=!0)},o(i){$(t.$$.fragment,i),$(h.$$.fragment,i),$(o.$$.fragment,i),$(E.$$.fragment,i),$(m.$$.fragment,i),$(L.$$.fragment,i),$(F.$$.fragment,i),$(V.$$.fragment,i),$(G.$$.fragment,i),$(R.$$.fragment,i),$(U.$$.fragment,i),$(j.$$.fragment,i),$(N.$$.fragment,i),$(J.$$.fragment,i),$(O.$$.fragment,i),$(X.$$.fragment,i),$(Y.$$.fragment,i),$(T.$$.fragment,i),ie=!1},d(i){_(t,i),i&&x(a),i&&x(e),_(h),_(o),_(E),_(m),_(L),_(F),_(V),_(G),_(R),_(U),_(j),_(N),_(J),_(O),_(X),_(Y),_(T)}}}function ct(c){let t,a,e,h;return t=new ut({props:{photos:c[0],path:"myBeacon"}}),e=new rt({props:{alignItems:"center",$$slots:{default:[ft]},$$scope:{ctx:c}}}),{c(){v(t.$$.fragment),a=g(),v(e.$$.fragment)},l(s){w(t.$$.fragment,s),a=f(s),w(e.$$.fragment,s)},m(s,o){y(t,s,o),W(s,a,o),y(e,s,o),h=!0},p(s,[o]){const n={};o&2&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){h||(p(t.$$.fragment,s),p(e.$$.fragment,s),h=!0)},o(s){$(t.$$.fragment,s),$(e.$$.fragment,s),h=!1},d(s){_(t,s),s&&x(a),_(e,s)}}}function dt(c){return[["myBeacon_home.svg","myBeacon_1.svg","myBeacon_2.svg","myBeacon_3.svg","myBeacon_4.svg"]]}class yt extends De{constructor(t){super(),Pe(this,t,dt,ct,Te,{})}}export{yt as default};