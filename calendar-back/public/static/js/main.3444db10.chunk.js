(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{112:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(7),s=n(24),i=n(56),l=n(5),u="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Add new",m="[event] Clear active event",f="[event] Event updated",O="[event] Event deleted",p="[event] Events loaded",v="[event] Logout event",h="[auth] Finish checking login state",x="[auth] Login",g="[auth] Logout",y={checking:!0},N=n(45),w={events:[],activeEvent:null},k={modalOpen:!1},E=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case p:return Object(l.a)(Object(l.a)({},e),{},{events:Object(N.a)(t.payload)});case v:return Object(l.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(E,S(Object(s.a)(i.a))),D=n(6),T=n(11),P=n.n(T),I=n(18),_=n(15),L=n.n(_),A="https://heroku-calendar-react.herokuapp.com/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(A,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(A,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=n(14),F=n.n(M),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:F()(e.end).toDate(),start:F()(e.start).toDate()})}))},H=function(e){return{type:b,payload:e}},J=function(){return{type:m}},U=function(e){return{type:p,payload:e}},q=function(e){return{type:f,payload:e}},B=function(){return{type:O}},X=function(){return{type:h}},z=function(e){return{type:x,payload:e}},K=function(){return function(e){localStorage.clear(),e({type:v}),e(Q())}},Q=function(){return{type:g}},W=n(10),Y=n(22),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(W.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(Y.a)({},t.name,t.value)))};return[r,s,o]},$=n(2),ee=function(){var e=Object(o.b)(),t=Z({lEmail:"vamosManaos@hotmail.com",lPassword:"123456"}),n=Object(W.a)(t,2),a=n[0],r=n[1],c=Z({rName:"Nando",rEmail:"nando@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(W.a)(c,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,f=i.rPassword2;return Object($.jsx)("div",{className:"container login-container",children:Object($.jsxs)("div",{className:"row",children:[Object($.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object($.jsx)("h3",{children:"Ingreso"}),Object($.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(I.a)(P.a.mark((function e(t){var r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,a),e.next=3,R("auth",{email:n,password:a},"POST");case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,console.log(c),c.ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object($.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object($.jsx)("h3",{children:"Registro"}),Object($.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==f)return L.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=b,a=m,r=d,function(){var e=Object(I.a)(P.a.mark((function e(t){var c,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:f,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object($.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object($.jsx)("span",{className:"navbar-brand",children:t}),Object($.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(K())},children:[Object($.jsx)("i",{className:"fas fa-sign-out-alt"}),Object($.jsx)("span",{children:" Salir"})]})]})},ne=n(44),ae=function(e){var t=e.event,n=t.title,a=t.user;return Object($.jsxs)("div",{children:[Object($.jsxs)("span",{children:[" ",n," "]}),Object($.jsxs)("strong",{children:[" ",a.name," "]})]})},re=(n(82),n(83),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),ce=n(41),oe=n.n(ce),se=n(42),ie=n.n(se),le=function(){return{type:u}},ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var je=F()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(o.c)((function(e){return e.calendar})).activeEvent,t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.b)(),r=Object(a.useState)(je.toDate()),c=Object(W.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(de.toDate()),d=Object(W.a)(u,2),b=d[0],m=d[1],f=Object(a.useState)(!0),O=Object(W.a)(f,2),p=O[0],v=O[1],h=Object(a.useState)(be),x=Object(W.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(e||be)}),[e,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(Y.a)({},t.name,t.value)))},C=function(){n({type:j}),n(J()),y(be)};return Object($.jsxs)(oe.a,{isOpen:t,onRequestClose:C,style:ue,className:"modal",overlayClassName:"modal-fondo",contentLabel:"Example Modal",closeTimeoutMS:200,children:[Object($.jsxs)("h1",{children:[" ",e?"Editar evento":"Nuevo evento"," "]}),Object($.jsx)("hr",{}),Object($.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault(),console.log(g);var a=F()(k),r=F()(E);if(a.isSameOrAfter(r))L.a.fire("Error","fecha fin debe ser mayor que la fecha de inicio");else{if(w.trim().length<2)return v(!1);var c;n(e?(c=g,function(){var e=Object(I.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(c.id),c,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?t(q(c)):L.a.fire("Error",a.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(I.a)(P.a.mark((function t(n,a){var r,c,o,s,i;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("event",e),r=a().auth,c=r.uid,o=r.name,t.prev=2,t.next=5,G("events",e,"POST");case 5:return s=t.sent,t.next=8,s.json();case 8:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:c,name:o},console.log(e),n(H(e))),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),C()}},children:[Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Fecha y hora inicio"}),Object($.jsx)(ie.a,{onChange:function(e){i(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Fecha y hora fin"}),Object($.jsx)(ie.a,{onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,className:"form-control",minDate:s})]}),Object($.jsx)("hr",{}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Titulo y notas"}),Object($.jsx)("input",{type:"text",className:"form-control  ".concat(!p&&"is-invalid "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:S}),Object($.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object($.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object($.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object($.jsx)("i",{className:"far fa-save"}),Object($.jsx)("span",{children:" Guardar"})]})]})]})},fe=function(){var e=Object(o.b)();return Object($.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(le())},children:Object($.jsx)("i",{className:"fas fa-plus"})})},Oe=function(){var e=Object(o.b)();return Object($.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(I.a)(P.a.mark((function e(t,n){var a,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(B()):L.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object($.jsx)("i",{className:"fas fa-trash"}),Object($.jsx)("span",{children:" Borrar evento "})]})};F()().locale("es");var pe=Object(ne.b)(F.a),ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(W.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(P.a.mark((function e(t){var n,a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=V(a.eventos),t(U(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object($.jsxs)("div",{className:"calendar-screen",children:[Object($.jsx)(te,{}),Object($.jsx)(ne.a,{localizer:pe,events:n,startAccessor:"start",endAccessor:"end",onDoubleClickEvent:function(t){e(le())},onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},messages:re,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:"0,8",display:"block"}}},onSelectSlot:function(t){e(J())},selectable:!0,view:l,components:{event:ae}}),Object($.jsx)(fe,{}),r&&Object($.jsx)(Oe,{}),Object($.jsx)(me,{})]})},he=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?t:Object($.jsx)(D.a,{to:"/login"})},xe=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?Object($.jsx)(D.a,{to:"/"}):t},ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).checking;return Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:a.uid,name:a.name}))):t(X());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object($.jsx)("h5",{children:"Espere..."}):Object($.jsxs)(D.d,{children:[Object($.jsx)(D.b,{path:"/login",element:Object($.jsx)(xe,{children:Object($.jsx)(ee,{})})}),Object($.jsx)(D.b,{path:"/*",element:Object($.jsx)(he,{children:Object($.jsx)(ve,{})})})]})},ye=function(){return Object($.jsx)(o.a,{store:C,children:Object($.jsx)(ge,{})})},Ne=n(27);n(112);c.a.render(Object($.jsx)(Ne.a,{children:Object($.jsx)(ye,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.3444db10.chunk.js.map