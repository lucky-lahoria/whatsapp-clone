(this.webpackJsonpwhatsappclone=this.webpackJsonpwhatsappclone||[]).push([[0],{51:function(e,a,t){e.exports=t(76)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(56),t(10)),s=(t(57),t(97)),i=t(88),m=t(89),u=t(90),d=t(91),p=t(92),h=(t(58),t(59),t(21)),E=t.n(h),f=E.a.initializeApp({apiKey:"AIzaSyCeqccc14GlAys8ABMn4mN-pzrS7Yxjrc8",authDomain:"whatsapp-clone-e540f.firebaseapp.com",databaseURL:"https://whatsapp-clone-e540f.firebaseio.com",projectId:"whatsapp-clone-e540f",storageBucket:"whatsapp-clone-e540f.appspot.com",messagingSenderId:"631914089082",appId:"1:631914089082:web:ab7649aaa96fbd86f749c3",measurementId:"G-38Y7F0NQEL"}).firestore(),v=(E.a.auth(),new E.a.auth.GoogleAuthProvider),b=f,g=t(31);var _=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&b.collection("rooms").doc(t).collection("message").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),l?c.a.createElement("div",{onClick:function(e){var a=prompt("Please enter name for chat");a&&b.collection("rooms").add({name:a})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new Chat")):c.a.createElement(g.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,r),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},j=t(4),O=Object(n.createContext)(),N=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(O.Provider,{value:Object(n.useReducer)(a,t)},r)},w=function(){return Object(n.useContext)(O)};var S=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=(Object(j.f)(),w()),h=Object(o.a)(l,2),E=h[0].user;return h[1],Object(n.useEffect)((function(){var e=b.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===E||void 0===E?void 0:E.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(m.a,null)),c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(d.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(p.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(_,{addNewChat:!0}),t.map((function(e){return c.a.createElement(_,{key:e.id,id:e.id,name:e.data.name})}))))},y=(t(74),t(93)),C=t(94),k=t(95);var I=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),f=h[0],v=h[1],g=Object(j.f)().roomId,_=Object(n.useState)(""),O=Object(o.a)(_,2),N=O[0],S=O[1],I=Object(n.useState)([]),x=Object(o.a)(I,2),A=x[0],M=x[1],B=w(),D=Object(o.a)(B,2),R=D[0].user;return D[1],Object(n.useEffect)((function(){g&&(b.collection("rooms").doc(g).onSnapshot((function(e){return S(e.data().name)})),b.collection("rooms").doc(g).collection("message").orderBy("timestamp","asc").onSnapshot((function(e){return M(e.docs.map((function(e){return e.data()})))})))}),[g]),Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random()))}),[g]),c.a.createElement("div",{className:"chat "},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,N),c.a.createElement("p",null,"last seen at ",new Date(null===(e=A[A.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(y.a,null)),c.a.createElement(i.a,null,c.a.createElement(d.a,null)))),c.a.createElement("div",{className:"chat__body"},A.map((function(e){var a;return c.a.createElement("p",{className:"chat__message  ".concat(e.name===R.displayName&&"chat__reciever ")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(i.a,null,c.a.createElement(C.a,null)),c.a.createElement("form",null,c.a.createElement("input",{type:"text",onChange:function(e){return v(e.target.value)},placeholder:"Send Messaage",value:f}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log("you typed input >>>",f),b.collection("rooms").doc(g).collection("message").add({message:f,name:R.displayName,timestamp:E.a.firestore.FieldValue.serverTimestamp()}),v("")},type:"submit"},"Send message")),c.a.createElement(i.a,null,c.a.createElement(k.a,null))))},x=(t(75),t(96)),A=t(37),M="SET_USER",B=function(e,a){switch(console.log(a),a.type){case M:return Object(A.a)(Object(A.a)({},e),{},{user:a.user});default:return e}};var D=function(){var e=w(),a=Object(o.a)(e,2),t=(a[0].user,a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Signin in to whatsaap")),c.a.createElement(x.a,{onClick:function(){E.a.auth().signInWithPopup(v).then((function(e){t({type:M,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In with Google")))};var R=function(){var e=w(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(g.a,null,c.a.createElement(S,null),c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/"},c.a.createElement(I,null)),c.a.createElement(j.a,{exact:!0,path:"/rooms/:roomId"},c.a.createElement(I,null))))):c.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,{initialState:{user:null},reducer:B},c.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ddb1f525.chunk.js.map