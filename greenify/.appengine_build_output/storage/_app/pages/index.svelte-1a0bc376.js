import{S as F,i as A,s as X,e as _,k as L,t as I,c as g,a as y,d,m as $,h as x,b as h,g as V,G as f,L as ee,M as G,N as ke,K as C,O as ae,w as q,x as H,f as te,y as J,q as U,o as B,B as K,P as we,Q as Ve,R as se,v as Te,T as Ee,U as Le,Y as $e,j as ie,l as j,V as oe,W as ne,X as Ie,Z as re,p as ce,n as ue}from"../chunks/vendor-2dff75d7.js";function xe(n){let t,l,e,s,o,r,a,i,p,c,u,v;return{c(){t=_("div"),l=L(),e=_("div"),s=_("label"),o=I("Zip Code:"),r=L(),a=_("input"),i=L(),p=_("button"),c=I("Search"),this.h()},l(b){t=g(b,"DIV",{class:!0}),y(t).forEach(d),l=$(b),e=g(b,"DIV",{class:!0});var w=y(e);s=g(w,"LABEL",{class:!0,for:!0});var E=y(s);o=x(E,"Zip Code:"),E.forEach(d),r=$(w),a=g(w,"INPUT",{type:!0,class:!0,name:!0,max:!0,placeholder:!0}),i=$(w),p=g(w,"BUTTON",{class:!0});var N=y(p);c=x(N,"Search"),N.forEach(d),w.forEach(d),this.h()},h(){h(t,"class","absolute top-60 right-0 bg-slate-400 blur-lg h-24 w-24"),h(s,"class","block"),h(s,"for","zipcode"),h(a,"type","number"),h(a,"class","block py-1 px-3 w-20 rounded text-sm"),h(a,"name","zipcode"),h(a,"max","99999"),h(a,"placeholder","zip code"),h(p,"class","block bg-slate-100 py-1 px-4 my-1 rounded-full w-20"),h(e,"class","absolute top-60 right-2 ")},m(b,w){V(b,t,w),V(b,l,w),V(b,e,w),f(e,s),f(s,o),f(e,r),f(e,a),ee(a,n[0]),f(e,i),f(e,p),f(p,c),u||(v=[G(a,"input",n[3]),G(p,"click",n[1])],u=!0)},p(b,[w]){w&1&&ke(a.value)!==b[0]&&ee(a,b[0])},i:C,o:C,d(b){b&&d(t),b&&d(l),b&&d(e),u=!1,ae(v)}}}function Ne(n,t,l){let{map:e}=t,s="",o;function r(){o=s;let i="https://server-dot-greenifysd.wl.r.appspot.com/api/zipLongLat/"+o;fetch(i).then(p=>p.json()).then(p=>{e.flyTo({center:[p.lat,p.long],zoom:15,bearing:0,speed:.5,curve:1})})}function a(){s=ke(this.value),l(0,s)}return n.$$set=i=>{"map"in i&&l(2,e=i.map)},n.$$.update=()=>{if(n.$$.dirty&1){s==null&&l(0,s="");let i=s.toString();i.length>5&&l(0,s=i.substring(0,5))}},[s,r,e,a]}class Pe extends F{constructor(t){super();A(this,t,Ne,xe,X,{map:2})}}function Oe(n){let t,l,e,s;return t=new Pe({props:{map:n[0]}}),{c(){q(t.$$.fragment),l=L(),e=_("div"),this.h()},l(o){H(t.$$.fragment,o),l=$(o),e=g(o,"DIV",{class:!0,id:!0,style:!0}),y(e).forEach(d),this.h()},h(){h(e,"class","absolute top-0 -z-10"),h(e,"id","map"),te(e,"height","100%"),te(e,"width","100%")},m(o,r){J(t,o,r),V(o,l,r),V(o,e,r),s=!0},p(o,[r]){const a={};r&1&&(a.map=o[0]),t.$set(a)},i(o){s||(U(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){K(t,o),o&&d(l),o&&d(e)}}}function De(n,t,l){let{pointLoc:e}=t;const o=we({apiKey:"AIzaSyCgNGBk8nuH1EXZ_9Ks-91ug8WnAZgLMsI",authDomain:"greenifysd.firebaseapp.com",projectId:"greenifysd",storageBucket:"greenifysd.appspot.com",messagingSenderId:"30386930845",appId:"1:30386930845:web:936bec1bf3be9133c78074"}),r=Ve(o);se.accessToken="pk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDFxc2F2OHQxcmdpM2NzOWZtNDU0emRrIn0.IUj4mbGb97G_5Il6Hs44FA";const a=[[-117.54814665952902,32.41610174321662],[-116.02104719605653,33.56333188663347]];let i;return Te(()=>{l(0,i=new se.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",maxBounds:a,attributionControl:!1}));let p=new URL(window.location.href);if(p.searchParams.has("email")&&p.searchParams.has("key")){const c=document.createElement("div");c.className="marker",c.style.backgroundImage="url(./plantMarker.png)",c.style.width="100px",c.style.height="100px",c.style.backgroundSize="100%";let u=new se.Marker(c);i.on("click",v=>{u.setLngLat([v.lngLat.lng,v.lngLat.lat]).addTo(i),l(1,e=[v.lngLat.lng,v.lngLat.lat])})}else{let c=Ee(r,"TreeLoc"),u=Le(c,"TreeLoc");i.on("load",()=>{$e(u).then(v=>{let b=[],w=v.data();Object.values(w).forEach(E=>{let N={type:"Feature",geometry:{type:"Point",coordinates:[E[1],E[0]]}};b.push(N)}),i.loadImage("./treeMarker.png",(E,N)=>{i.addImage("tree marker",N),i.addSource("point",{type:"geojson",data:{type:"FeatureCollection",features:b}}),i.addLayer({id:"TreeLoc",type:"symbol",source:"point",layout:{"icon-image":"tree marker","icon-size":.2}})})})})}}),n.$$set=p=>{"pointLoc"in p&&l(1,e=p.pointLoc)},[i,e]}class Se extends F{constructor(t){super();A(this,t,De,Oe,X,{pointLoc:1})}}function he(n){let t,l,e,s,o,r,a,i,p,c,u,v,b,w,E,N,O,T,m,k,S;return{c(){t=_("div"),l=_("div"),e=_("button"),s=I("X"),o=L(),r=_("h1"),a=I("Login to Plant Trees"),i=L(),p=_("div"),c=_("label"),u=I("Email:"),v=L(),b=_("input"),w=L(),E=_("button"),N=I("Submit"),O=L(),T=_("p"),m=I(n[2]),this.h()},l(P){t=g(P,"DIV",{class:!0});var D=y(t);l=g(D,"DIV",{class:!0});var M=y(l);e=g(M,"BUTTON",{class:!0});var Y=y(e);s=x(Y,"X"),Y.forEach(d),o=$(M),r=g(M,"H1",{class:!0});var z=y(r);a=x(z,"Login to Plant Trees"),z.forEach(d),i=$(M),p=g(M,"DIV",{class:!0,style:!0});var R=y(p);c=g(R,"LABEL",{for:!0,class:!0});var W=y(c);u=x(W,"Email:"),W.forEach(d),v=$(R),b=g(R,"INPUT",{type:!0,name:!0,class:!0}),w=$(R),E=g(R,"BUTTON",{class:!0});var Z=y(E);N=x(Z,"Submit"),Z.forEach(d),R.forEach(d),O=$(M),T=g(M,"P",{class:!0});var Q=y(T);m=x(Q,n[2]),Q.forEach(d),M.forEach(d),D.forEach(d),this.h()},h(){h(e,"class","text-4xl absolute right-2 top-2 hover:text-blue-700"),h(r,"class","text-center text-2xl pt-5"),h(c,"for","email"),h(c,"class","block text-md"),h(b,"type","email"),h(b,"name","email"),h(b,"class","block w-full p-1"),h(E,"class","float-right bg-slate-500 rounded px-5 py-1 block rounded-t-none"),h(p,"class","mx-10 my-5"),te(p,"display",n[1]?"block":"none"),h(T,"class","text-red-500 mx-10 my-10"),h(l,"class","bg-slate-100 relative top-1/3 left-1/4 w-2/4 h-1/3 rounded-lg"),h(t,"class","w-full h-full bg-blue-900 bg-opacity-50 absolute top-0")},m(P,D){V(P,t,D),f(t,l),f(l,e),f(e,s),f(l,o),f(l,r),f(r,a),f(l,i),f(l,p),f(p,c),f(c,u),f(p,v),f(p,b),ee(b,n[3]),f(p,w),f(p,E),f(E,N),f(l,O),f(l,T),f(T,m),k||(S=[G(e,"click",n[4]),G(b,"input",n[6]),G(E,"click",n[5])],k=!0)},p(P,D){D&8&&b.value!==P[3]&&ee(b,P[3]),D&2&&te(p,"display",P[1]?"block":"none"),D&4&&ie(m,P[2])},d(P){P&&d(t),k=!1,ae(S)}}}function Ue(n){let t,l=n[0]&&he(n);return{c(){l&&l.c(),t=j()},l(e){l&&l.l(e),t=j()},m(e,s){l&&l.m(e,s),V(e,t,s)},p(e,[s]){e[0]?l?l.p(e,s):(l=he(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:C,o:C,d(e){l&&l.d(e),e&&d(t)}}}function Ce(n,t,l){let{modalVis:e}=t,s=!0,o="";function r(){l(0,e=!1),l(1,s=!0),l(2,o="")}let a="",i=!0;function p(){i&&(i=!1,fetch("https://server-dot-greenifysd.wl.r.appspot.com/api/signUp",{method:"POST",body:JSON.stringify({email:a}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(u=>u.json()).then(u=>{l(2,o=u.response),l(1,s=u.loginVis),i=!0}))}function c(){a=this.value,l(3,a)}return n.$$set=u=>{"modalVis"in u&&l(0,e=u.modalVis)},[e,s,o,a,r,p,c]}class Me extends F{constructor(t){super();A(this,t,Ce,Ue,X,{modalVis:0})}}function be(n){let t,l,e,s,o,r,a,i,p,c,u,v,b,w,E,N;return{c(){t=_("div"),l=_("div"),e=_("div"),s=_("p"),o=I("Are you sure?"),r=L(),a=_("p"),i=I("Once placed, you cannot change your submission."),p=L(),c=_("button"),u=I("Yes"),v=L(),b=_("button"),w=I("No"),this.h()},l(O){t=g(O,"DIV",{class:!0});var T=y(t);l=g(T,"DIV",{class:!0});var m=y(l);e=g(m,"DIV",{class:!0});var k=y(e);s=g(k,"P",{class:!0});var S=y(s);o=x(S,"Are you sure?"),S.forEach(d),r=$(k),a=g(k,"P",{class:!0});var P=y(a);i=x(P,"Once placed, you cannot change your submission."),P.forEach(d),p=$(k),c=g(k,"BUTTON",{class:!0});var D=y(c);u=x(D,"Yes"),D.forEach(d),v=$(k),b=g(k,"BUTTON",{class:!0});var M=y(b);w=x(M,"No"),M.forEach(d),k.forEach(d),m.forEach(d),T.forEach(d),this.h()},h(){h(s,"class","text-2xl text-slate-900"),h(a,"class","text-m text-slate-500"),h(c,"class","text-xl bg-green-300 hover:bg-green-400 rounded-l absolute top-1/2 right-1/2 w-1/2 h-1/2 text-center"),h(b,"class","text-xl bg-red-300 hover:bg-red-400 rounded-r absolute top-1/2 left-1/2 w-1/2 h-1/2 text-center"),h(e,"class","p-5"),h(l,"class","bg-slate-100 relative top-1/4 left-1/4 w-2/4 h-1/3 rounded-lg"),h(t,"class","w-full h-full bg-blue-900 bg-opacity-50 absolute top-0")},m(O,T){V(O,t,T),f(t,l),f(l,e),f(e,s),f(s,o),f(e,r),f(e,a),f(a,i),f(e,p),f(e,c),f(c,u),f(e,v),f(e,b),f(b,w),E||(N=[G(c,"click",n[2]),G(b,"click",n[1])],E=!0)},p:C,d(O){O&&d(t),E=!1,ae(N)}}}function Be(n){let t,l=n[0]&&be(n);return{c(){l&&l.c(),t=j()},l(e){l&&l.l(e),t=j()},m(e,s){l&&l.m(e,s),V(e,t,s)},p(e,[s]){e[0]?l?l.p(e,s):(l=be(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:C,o:C,d(e){l&&l.d(e),e&&d(t)}}}function je(n,t,l){let{modalVis:e}=t,{plantTree:s}=t;function o(){l(0,e=!1)}function r(){s(),o()}return n.$$set=a=>{"modalVis"in a&&l(0,e=a.modalVis),"plantTree"in a&&l(3,s=a.plantTree)},[e,o,r,s]}class ze extends F{constructor(t){super();A(this,t,je,Be,X,{modalVis:0,plantTree:3})}}function _e(n){let t,l,e,s,o,r,a,i,p,c,u,v,b,w,E,N,O,T,m,k,S,P,D,M;return{c(){t=_("div"),l=_("p"),e=I("Instructions"),s=L(),o=_("div"),r=_("ol"),a=_("li"),i=I("Click anywhere on the screen"),p=L(),c=_("li"),u=I("Then select the green + button"),v=L(),b=_("li"),w=I("Confirm your choice"),E=L(),N=_("p"),O=_("strong"),T=I("Note:"),m=I(" Once confirming your choice, you cannot go back"),k=L(),S=_("button"),P=I("X"),this.h()},l(Y){t=g(Y,"DIV",{class:!0});var z=y(t);l=g(z,"P",{class:!0});var R=y(l);e=x(R,"Instructions"),R.forEach(d),s=$(z),o=g(z,"DIV",{class:!0});var W=y(o);r=g(W,"OL",{class:!0});var Z=y(r);a=g(Z,"LI",{class:!0});var Q=y(a);i=x(Q,"Click anywhere on the screen"),Q.forEach(d),p=$(Z),c=g(Z,"LI",{class:!0});var fe=y(c);u=x(fe,"Then select the green + button"),fe.forEach(d),v=$(Z),b=g(Z,"LI",{class:!0});var pe=y(b);w=x(pe,"Confirm your choice"),pe.forEach(d),Z.forEach(d),E=$(W),N=g(W,"P",{class:!0});var le=y(N);O=g(le,"STRONG",{});var de=y(O);T=x(de,"Note:"),de.forEach(d),m=x(le," Once confirming your choice, you cannot go back"),le.forEach(d),W.forEach(d),k=$(z),S=g(z,"BUTTON",{class:!0});var me=y(S);P=x(me,"X"),me.forEach(d),z.forEach(d),this.h()},h(){h(l,"class","text-xl text-center text-red-900 pt-5 pb-0"),h(a,"class","text-red-900"),h(c,"class","text-red-900"),h(b,"class","text-red-900"),h(r,"class","list-decimal"),h(N,"class","text-red-900"),h(o,"class","m-10 pt-0"),h(S,"class","text-4xl absolute right-2 top-2 hover:text-red-900 text-red-800"),h(t,"class","bg-red-200 absolute top-5 left-5 rounded-lg outline-4 outline-red-400")},m(Y,z){V(Y,t,z),f(t,l),f(l,e),f(t,s),f(t,o),f(o,r),f(r,a),f(a,i),f(r,p),f(r,c),f(c,u),f(r,v),f(r,b),f(b,w),f(o,E),f(o,N),f(N,O),f(O,T),f(N,m),f(t,k),f(t,S),f(S,P),D||(M=G(S,"click",n[1]),D=!0)},p:C,d(Y){Y&&d(t),D=!1,M()}}}function Ge(n){let t,l=n[0]&&_e(n);return{c(){l&&l.c(),t=j()},l(e){l&&l.l(e),t=j()},m(e,s){l&&l.m(e,s),V(e,t,s)},p(e,[s]){e[0]?l?l.p(e,s):(l=_e(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:C,o:C,d(e){l&&l.d(e),e&&d(t)}}}function Re(n,t,l){let{modalVis:e}=t;e=!1;function s(){l(0,e=!1)}return n.$$set=o=>{"modalVis"in o&&l(0,e=o.modalVis)},n.$$.update=()=>{n.$$.dirty&1&&e&&setTimeout(()=>{l(0,e=!1)},5e3)},[e,s]}class Ze extends F{constructor(t){super();A(this,t,Re,Ge,X,{modalVis:0})}}function ge(n){let t;function l(o,r){return o[3]?Fe:Ae}let e=l(n),s=e(n);return{c(){s.c(),t=j()},l(o){s.l(o),t=j()},m(o,r){s.m(o,r),V(o,t,r)},p(o,r){e===(e=l(o))&&s?s.p(o,r):(s.d(1),s=e(o),s&&(s.c(),s.m(t.parentNode,t)))},d(o){s.d(o),o&&d(t)}}}function Fe(n){let t,l,e,s,o;return{c(){t=_("div"),l=_("button"),e=I("+"),this.h()},l(r){t=g(r,"DIV",{class:!0});var a=y(t);l=g(a,"BUTTON",{class:!0});var i=y(l);e=x(i,"+"),i.forEach(d),a.forEach(d),this.h()},h(){h(l,"class","bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full text-3xl"),h(t,"class","inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2")},m(r,a){V(r,t,a),f(t,l),f(l,e),s||(o=G(l,"click",n[5]),s=!0)},p:C,d(r){r&&d(t),s=!1,o()}}}function Ae(n){let t,l,e,s,o;return{c(){t=_("div"),l=_("button"),e=I("Plant Your Own Tree"),this.h()},l(r){t=g(r,"DIV",{class:!0});var a=y(t);l=g(a,"BUTTON",{class:!0});var i=y(l);e=x(i,"Plant Your Own Tree"),i.forEach(d),a.forEach(d),this.h()},h(){h(l,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"),h(t,"class","inline-flex items-center absolute bottom-10 left-1/2 -translate-x-1/2")},m(r,a){V(r,t,a),f(t,l),f(l,e),s||(o=G(l,"click",n[4]),s=!0)},p:C,d(r){r&&d(t),s=!1,o()}}}function Xe(n){let t,l,e,s,o,r,a,i,p,c,u,v,b;function w(m){n[6](m)}let E={};n[1]!==void 0&&(E.modalVis=n[1]),s=new Me({props:E}),oe.push(()=>ne(s,"modalVis",w));function N(m){n[7](m)}let O={plantTree:n[0]};n[2]!==void 0&&(O.modalVis=n[2]),a=new ze({props:O}),oe.push(()=>ne(a,"modalVis",N)),c=new Ze({props:{modalVis:n[3]}});let T=!n[1]&&!n[2]&&ge(n);return{c(){t=_("img"),e=L(),q(s.$$.fragment),r=L(),q(a.$$.fragment),p=L(),q(c.$$.fragment),u=L(),T&&T.c(),v=j(),this.h()},l(m){t=g(m,"IMG",{class:!0,src:!0,alt:!0}),e=$(m),H(s.$$.fragment,m),r=$(m),H(a.$$.fragment,m),p=$(m),H(c.$$.fragment,m),u=$(m),T&&T.l(m),v=j(),this.h()},h(){h(t,"class","inline-flex absolute left-0 top-0 w-[10%]"),Ie(t.src,l="./logo.png")||h(t,"src",l),h(t,"alt","GreenifySD Logo")},m(m,k){V(m,t,k),V(m,e,k),J(s,m,k),V(m,r,k),J(a,m,k),V(m,p,k),J(c,m,k),V(m,u,k),T&&T.m(m,k),V(m,v,k),b=!0},p(m,[k]){const S={};!o&&k&2&&(o=!0,S.modalVis=m[1],re(()=>o=!1)),s.$set(S);const P={};k&1&&(P.plantTree=m[0]),!i&&k&4&&(i=!0,P.modalVis=m[2],re(()=>i=!1)),a.$set(P);const D={};k&8&&(D.modalVis=m[3]),c.$set(D),!m[1]&&!m[2]?T?T.p(m,k):(T=ge(m),T.c(),T.m(v.parentNode,v)):T&&(T.d(1),T=null)},i(m){b||(U(s.$$.fragment,m),U(a.$$.fragment,m),U(c.$$.fragment,m),b=!0)},o(m){B(s.$$.fragment,m),B(a.$$.fragment,m),B(c.$$.fragment,m),b=!1},d(m){m&&d(t),m&&d(e),K(s,m),m&&d(r),K(a,m),m&&d(p),K(c,m),m&&d(u),T&&T.d(m),m&&d(v)}}}function Ye(n,t,l){let{plantTree:e}=t,s=!1;function o(){l(1,s=!s)}let r=!1;function a(){l(2,r=!r)}let i=!1;Te(()=>{let u=new URL(window.location.href);u.searchParams.has("email")&&u.searchParams.has("key")&&l(3,i=!0)});function p(u){s=u,l(1,s)}function c(u){r=u,l(2,r)}return n.$$set=u=>{"plantTree"in u&&l(0,e=u.plantTree)},[e,s,r,i,o,a,p,c]}class qe extends F{constructor(t){super();A(this,t,Ye,Xe,X,{plantTree:0})}}function He(n){let t,l,e,s,o,r;return{c(){t=_("div"),l=_("p"),e=I("Oops something went wrong :("),s=L(),o=_("p"),r=I(n[0]),this.h()},l(a){t=g(a,"DIV",{class:!0});var i=y(t);l=g(i,"P",{class:!0});var p=y(l);e=x(p,"Oops something went wrong :("),p.forEach(d),s=$(i),o=g(i,"P",{class:!0});var c=y(o);r=x(c,n[0]),c.forEach(d),i.forEach(d),this.h()},h(){h(l,"class","text-center text-red-900 text-4xl"),h(o,"class","text-center text-red-900 text-xl"),h(t,"class","absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-30 bg-red-300 outline-double outline-2 outline-red-400")},m(a,i){V(a,t,i),f(t,l),f(l,e),f(t,s),f(t,o),f(o,r)},p(a,[i]){i&1&&ie(r,a[0])},i:C,o:C,d(a){a&&d(t)}}}function Je(n,t,l){let{result:e}=t;return n.$$set=s=>{"result"in s&&l(0,e=s.result)},[e]}class Ke extends F{constructor(t){super();A(this,t,Je,He,X,{result:0})}}function We(n){let t,l,e,s,o,r,a;return{c(){t=_("div"),l=_("div"),e=_("p"),s=I("Success!!"),o=L(),r=_("p"),a=I(n[0]),this.h()},l(i){t=g(i,"DIV",{class:!0});var p=y(t);l=g(p,"DIV",{class:!0});var c=y(l);e=g(c,"P",{class:!0});var u=y(e);s=x(u,"Success!!"),u.forEach(d),o=$(c),r=g(c,"P",{class:!0});var v=y(r);a=x(v,n[0]),v.forEach(d),c.forEach(d),p.forEach(d),this.h()},h(){h(e,"class","text-center text-green-900 text-4xl"),h(r,"class","text-center text-green-900 text-xl"),h(l,"class","absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-30 bg-green-300 outline-double outline-2 outline-green-400"),h(t,"class","w-full h-full bg-blue-900 bg-opacity-50 absolute top-0")},m(i,p){V(i,t,p),f(t,l),f(l,e),f(e,s),f(l,o),f(l,r),f(r,a)},p(i,[p]){p&1&&ie(a,i[0])},i:C,o:C,d(i){i&&d(t)}}}function Qe(n,t,l){let{result:e}=t;return n.$$set=s=>{"result"in s&&l(0,e=s.result)},[e]}class et extends F{constructor(t){super();A(this,t,Qe,We,X,{result:0})}}function ve(n){let t,l,e=n[1]&&ye(n);return{c(){t=_("div"),e&&e.c(),this.h()},l(s){t=g(s,"DIV",{class:!0});var o=y(t);e&&e.l(o),o.forEach(d),this.h()},h(){h(t,"class","w-full h-full bg-blue-900 bg-opacity-50 absolute top-0")},m(s,o){V(s,t,o),e&&e.m(t,null),l=!0},p(s,o){s[1]?e?(e.p(s,o),o&2&&U(e,1)):(e=ye(s),e.c(),U(e,1),e.m(t,null)):e&&(ue(),B(e,1,1,()=>{e=null}),ce())},i(s){l||(U(e),l=!0)},o(s){B(e),l=!1},d(s){s&&d(t),e&&e.d()}}}function ye(n){let t,l,e,s;const o=[lt,tt],r=[];function a(i,p){return i[3]?0:1}return t=a(n),l=r[t]=o[t](n),{c(){l.c(),e=j()},l(i){l.l(i),e=j()},m(i,p){r[t].m(i,p),V(i,e,p),s=!0},p(i,p){let c=t;t=a(i),t===c?r[t].p(i,p):(ue(),B(r[c],1,1,()=>{r[c]=null}),ce(),l=r[t],l?l.p(i,p):(l=r[t]=o[t](i),l.c()),U(l,1),l.m(e.parentNode,e))},i(i){s||(U(l),s=!0)},o(i){B(l),s=!1},d(i){r[t].d(i),i&&d(e)}}}function tt(n){let t,l;return t=new Ke({props:{result:n[4]}}),{c(){q(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){J(t,e,s),l=!0},p(e,s){const o={};s&16&&(o.result=e[4]),t.$set(o)},i(e){l||(U(t.$$.fragment,e),l=!0)},o(e){B(t.$$.fragment,e),l=!1},d(e){K(t,e)}}}function lt(n){let t,l;return t=new et({props:{result:n[4]}}),{c(){q(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){J(t,e,s),l=!0},p(e,s){const o={};s&16&&(o.result=e[4]),t.$set(o)},i(e){l||(U(t.$$.fragment,e),l=!0)},o(e){B(t.$$.fragment,e),l=!1},d(e){K(t,e)}}}function st(n){let t,l,e,s,o,r,a;function i(u){n[6](u)}let p={};n[0]!==void 0&&(p.pointLoc=n[0]),t=new Se({props:p}),oe.push(()=>ne(t,"pointLoc",i)),s=new qe({props:{plantTree:n[5]}});let c=n[2]&&ve(n);return{c(){q(t.$$.fragment),e=L(),q(s.$$.fragment),o=L(),c&&c.c(),r=j()},l(u){H(t.$$.fragment,u),e=$(u),H(s.$$.fragment,u),o=$(u),c&&c.l(u),r=j()},m(u,v){J(t,u,v),V(u,e,v),J(s,u,v),V(u,o,v),c&&c.m(u,v),V(u,r,v),a=!0},p(u,[v]){const b={};!l&&v&1&&(l=!0,b.pointLoc=u[0],re(()=>l=!1)),t.$set(b),u[2]?c?(c.p(u,v),v&4&&U(c,1)):(c=ve(u),c.c(),U(c,1),c.m(r.parentNode,r)):c&&(ue(),B(c,1,1,()=>{c=null}),ce())},i(u){a||(U(t.$$.fragment,u),U(s.$$.fragment,u),U(c),a=!0)},o(u){B(t.$$.fragment,u),B(s.$$.fragment,u),B(c),a=!1},d(u){K(t,u),u&&d(e),K(s,u),u&&d(o),c&&c.d(u),u&&d(r)}}}function ot(n,t,l){let e=[0,0],s=!1,o=!1,r=!1,a="";function i(){let c=new URL(window.location.href);fetch("https://server-dot-greenifysd.wl.r.appspot.com/api/plantTree",{method:"POST",body:JSON.stringify({email:c.searchParams.get("email"),key:c.searchParams.get("key"),long:e[0],lat:e[1]}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(u=>u.json()).then(u=>{l(3,r=u.success),l(4,a=u.response),l(1,s=!0),setTimeout(()=>{location.href="./"},5e3)}),l(2,o=!0)}function p(c){e=c,l(0,e)}return[e,s,o,r,a,i,p]}class rt extends F{constructor(t){super();A(this,t,ot,st,X,{})}}export{rt as default};
