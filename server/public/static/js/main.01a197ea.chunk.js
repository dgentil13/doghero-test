(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=a(2),u=a(1),i=(a(37),a(10)),m=a(28),s=a(29),p=a(6),d=a.n(p),g=function(){function e(){Object(m.a)(this,e);var t=d.a.create({baseURL:"".concat("https://doghero-puplove.herokuapp.com/api","/api"),withCredentials:!0});this.service=t}return Object(s.a)(e,[{key:"signup",value:function(e,t,a,n,r,l){return this.service.post("/signup",{email:e,password:t,number:a,fullName:n,address:r,role:l}).then(function(e){return e.data})}},{key:"login",value:function(e,t){return this.service.post("/login",{email:e,password:t}).then(function(e){return e.data})}},{key:"loggedin",value:function(){return this.service.get("/loggedin").then(function(e){return e.data})}},{key:"logout",value:function(){return this.service.post("/logout",{}).then(function(e){return e.data})}}]),e}(),h=a(4),f=function(e){var t=e.handleChange,a=e.handleSubmit,l=e.role;return r.a.createElement(n.Fragment,null,"Walker"===l?r.a.createElement("h1",null," Be a Walker!"):r.a.createElement("h1",null,"Join Us!"),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",name:"fullName",placeholder:"Please enter your Name.",onChange:t}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Please enter your Email.",onChange:t}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Please enter your Password.",onChange:t}),r.a.createElement("input",{type:"text",name:"number",placeholder:"Please enter your Phone number.",onChange:t}),"Walker"===l?r.a.createElement("input",{type:"text",name:"address",placeholder:"Please enter your Address.",onChange:t}):null,r.a.createElement("button",{type:"submit"},"Sign Up")))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var b=function(e){var t=new g,a=Object(n.useState)({email:"",password:"",number:"",fullName:"",address:""}),l=Object(u.a)(a,2),c=l[0],o=l[1],m=Object(n.useState)(!1),s=Object(u.a)(m,2),p=s[0],d=s[1];return p?r.a.createElement(i.a,{to:"/"}):r.a.createElement("section",{className:"auth"},r.a.createElement("div",{className:"form-auth"},r.a.createElement(f,{handleChange:function(e){var t=e.target,a=t.name,n=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(h.a)({},a,n)))},handleSubmit:function(a){a.preventDefault();var n=c.email,r=c.password,l=c.number,u=c.fullName,i=c.address,m=e.state;t.signup(n,r,l,u,i,m).then(function(t){o({email:"",password:"",number:"",fullName:"",address:""}),d(!0),e.getUser(t)}).catch(function(e){console.log(e)})},role:e.state})))},v=function(e){var t=e.handleChange,a=e.handleSubmit;e.info;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"email",name:"email",placeholder:"Please enter your Email.",onChange:t}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Please enter your Password.",onChange:t}),r.a.createElement("button",{type:"submit"},"Enter")))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var O=function(e){var t=e.getUser,a=new g,l=Object(n.useState)({email:"",password:""}),c=Object(u.a)(l,2),o=c[0],m=c[1],s=Object(n.useState)(!1),p=Object(u.a)(s,2),d=p[0],f=p[1];return d?r.a.createElement(i.a,{to:"/"}):r.a.createElement("section",{className:"auth"},r.a.createElement("div",{className:"form-auth"},r.a.createElement(v,{handleChange:function(e){var t=e.target,a=t.name,n=t.value;m(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},o,Object(h.a)({},a,n)))},handleSubmit:function(e){e.preventDefault();var n=o.email,r=o.password;a.login(n,r).then(function(e){m({email:"",password:""}),f(!0),t(e)}).catch(function(e){console.log(e)})}})))},j=function(e){var t=e.userIsLogged;return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"front-header"},r.a.createElement("div",{className:"main"},r.a.createElement("p",null,"We walk while you work!"),t?r.a.createElement("button",null,r.a.createElement(o.b,{to:{pathname:"/walks"}},"Let's Walk!")):r.a.createElement("button",null,r.a.createElement(o.b,{to:{pathname:"/signup"}},"Try it out!")))),r.a.createElement("section",{className:"about"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/paw.png",alt:"Paw"}),r.a.createElement("p",null,"Take care of your four legged friend!")),r.a.createElement("div",null,r.a.createElement("img",{src:"/images/bone.png",alt:"Bone"}),r.a.createElement("p",null,"Helps your dog to socialize! ")),r.a.createElement("div",null,r.a.createElement("img",{src:"/images/colar.png",alt:"Colar"}),r.a.createElement("p",null,"Trusted walkers to exercise your dog!"))))},w=function(e){var t=e.handleSubmit,a=e.handleChange,l=e.handleModal,c=e.dogInfo;return console.log(c),r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"modal",onSubmit:function(e){return t(e)}},r.a.createElement("button",{className:"close",onClick:l},r.a.createElement("img",{src:"/images/times-solid.svg",alt:"Close"})),r.a.createElement("input",{type:"text",name:"name",value:c.name,placeholder:"Name",onChange:a}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"race",value:c.race,placeholder:"Race",onChange:a}),r.a.createElement("br",null),r.a.createElement("select",{name:"gender",onChange:a},r.a.createElement("option",null,"Gender"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male")),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"age",value:c.age,placeholder:"Age",onChange:a}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"size",value:c.size,placeholder:"Size, ex: Small",onChange:a}),r.a.createElement("br",null),r.a.createElement("label",null,"Additional Information:"),r.a.createElement("textarea",{type:"text",name:"additionalInfo",placeholder:"Important information",value:c.additionalInfo,onChange:a}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add Pet")))},P=function(e){var t=e.dogInfo,a=e.delPet;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"card"},r.a.createElement("div",null,r.a.createElement("div",{className:"dog-card"},"Female"===t.gender?r.a.createElement("img",{src:"/images/dog-female.png",alt:"female"}):r.a.createElement("img",{src:"/images/dog-male.png",alt:"male"}),r.a.createElement("h3",null,t.name)),r.a.createElement("p",null,t.age),r.a.createElement("p",null,t.race)),r.a.createElement("button",{className:"delete-pet",onClick:function(e){return a(t._id)}},r.a.createElement("img",{src:"/images/trash.svg",alt:"delete-card"}))))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var C=function(e){e.getUser;var t=Object(n.useState)({name:"",gender:"",race:"",age:"",size:"",additionalInfo:""}),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),m=i[0],s=i[1],p=Object(n.useState)([]),g=Object(u.a)(p,2),f=g[0],E=g[1];Object(n.useEffect)(function(){b()},[m]);var b=function(){d.a.get("".concat("https://doghero-puplove.herokuapp.com/api","/dogs"),{withCredentials:!0}).then(function(e){E(e.data)}).catch(function(e){return console.log(e)})},v=function(e){d.a.delete("".concat("https://doghero-puplove.herokuapp.com/api","/del-pet/").concat(e),{withCredentials:!0}).then(function(){b()}).catch(function(e){return console.log(e)})},y=function(){s(!m)};return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"pets"},m?r.a.createElement(w,{handleModal:y,handleSubmit:function(e){e.preventDefault();var t=l.name,a=l.gender,n=l.race,r=l.age,o=l.size,u=l.additionalInfo;d.a.post("".concat("https://doghero-puplove.herokuapp.com/api","/add-pet"),{name:t,gender:a,race:n,age:r,size:o,additionalInfo:u},{withCredentials:!0}).then(function(){c({name:"",gender:"",race:"",age:"",size:"",additionalInfo:""})}).catch(function(e){c({name:"",gender:"",race:"",age:"",size:"",additionalInfo:""})}),b(),y()},handleChange:function(e){var t=e.target,a=t.name,n=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},l,Object(h.a)({},a,n)))},dogInfo:l}):null,r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"header-pets"},r.a.createElement("h1",null," My Pets"),r.a.createElement("button",{onClick:y},r.a.createElement("img",{src:"/images/plus-solid.svg",alt:"Add"}))),null===f||void 0===f?r.a.createElement("p",null," Loading ... "):f.length>0?r.a.createElement("div",{className:"card-box"},f.map(function(e,t){return r.a.createElement(P,{key:t,dogInfo:e,delPet:v})})):r.a.createElement("p",{className:"no-dog"},"You have no Pets yet! "))))},S=function(e){var t=e.userIsLogged,a=e.handleRole,n=e.getUser,l=new g;return t?r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:{pathname:"/"}},"PupLove"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/walks"}},"Schedule Walk")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/profile"}},"Profile")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/pets"}},"Pets")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:function(){l.logout().then(function(){n(null)})}},"Logout")))):r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:{pathname:"/"}},"PupLove"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/signup"},onClick:function(e){return a("Walker")}},"Be a Walker!")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/signup"},onClick:function(e){return a("Client")}},"SignUp")),r.a.createElement("li",null,r.a.createElement(o.b,{to:{pathname:"/login"}},"LogIn"))))},N=function(e){var t=e.handleSubmit,a=e.handleChange,l=e.userInfo;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return t(e)}},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"fullName",value:l.fullName,placeholder:"Name",onChange:a}),r.a.createElement("br",null),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"text",name:"address",value:l.address,placeholder:"Address",onChange:a}),r.a.createElement("br",null),r.a.createElement("label",null,"Number:"),r.a.createElement("input",{type:"text",name:"number",value:l.number,placeholder:"Number",onChange:a}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Edit Profile")))};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var x=function(e){e.getUser;var t=Object(n.useState)({fullName:"",address:"",number:""}),a=Object(u.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)(function(){o()},[]);var o=function(){d.a.get("".concat("https://doghero-puplove.herokuapp.com/api","/user"),{withCredentials:!0}).then(function(e){c(e.data)}).catch(function(e){return console.log(e)})};return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"profile"},r.a.createElement("div",null,r.a.createElement("h1",null," My Profile"),r.a.createElement(N,{handleSubmit:function(e){e.preventDefault();var t=l.fullName,a=l.address,n=l.number;d.a.put("".concat("https://doghero-puplove.herokuapp.com/api","/user-edit"),{fullName:t,address:a,number:n},{withCredentials:!0}).then(function(){o()}).catch(function(e){console.log(e)})},handleChange:function(e){var t=e.target,a=t.name,n=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},l,Object(h.a)({},a,n)))},userInfo:l}))))},I=function(e){var t=e.handleChange,a=e.handleSubmit,l=e.activeHandler,c=e.dogs,o=e.walks;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",name:"address",value:o.address,placeholder:"Please enter your address.",onChange:t}),r.a.createElement("h4",null," Who's going on the walk?"),r.a.createElement("div",{className:"box-walk"},void 0===c||void 0===c?r.a.createElement("p",null," Loading..."):c.length>0?c.map(function(e,t){return r.a.createElement("div",{key:t,className:"card-walk"},e.name,r.a.createElement("button",{className:"active-pet",onClick:function(t){return l(t,e._id)}},e.activeWalk?r.a.createElement("img",{src:"/images/leash.svg",alt:"Leash full"}):r.a.createElement("img",{src:"/images/leash-empty.svg",alt:"Leash empty"})))}):r.a.createElement("p",{className:"no-dog"}," Add a Pet in you Pets page!")),r.a.createElement("select",{name:"duration",onChange:t},r.a.createElement("option",null,"Duration"),r.a.createElement("option",{value:"30 min."},"30 min."),r.a.createElement("option",{value:"1 hour"},"1 hour")),r.a.createElement("select",{name:"days",onChange:t},r.a.createElement("option",null,"Day of the Week"),r.a.createElement("option",{value:"Monday"},"Monday"),r.a.createElement("option",{value:"Tuesday"},"Tuesday"),r.a.createElement("option",{value:"Wednesday"},"Wednesday"),r.a.createElement("option",{value:"Thrusday"},"Thrusday"),r.a.createElement("option",{value:"Friday"},"Friday"),r.a.createElement("option",{value:"Saturday"},"Saturday"),r.a.createElement("option",{value:"Sunday"},"Sunday")),r.a.createElement("input",{type:"text",name:"time",value:o.time,placeholder:"Please enter the time. ex: 10am",onChange:t}),r.a.createElement("button",{type:"submit"},"Walk!")))};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var L=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)({duration:"",address:"",days:"",time:""}),p=Object(u.a)(s,2),g=p[0],f=p[1];Object(n.useEffect)(function(){E()},[a]);var E=function(){d.a.get("".concat("https://doghero-puplove.herokuapp.com/api","/dogs"),{withCredentials:!0}).then(function(e){m(e.data)}).catch(function(e){return console.log(e)})};return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"walks"},r.a.createElement("div",{className:"main-walk"},r.a.createElement("h1",null," Let's take a walk!"),r.a.createElement(I,{dogs:i,walks:g,activeHandler:function(e,t){e.preventDefault(),l(!a),function(e){d.a.put("".concat("https://doghero-puplove.herokuapp.com/api","/active/").concat(e),{activeWalk:a},{withCredentials:!0}).then(function(){}).catch(function(e){console.log(e)}),E()}(t)},handleSubmit:function(e){e.preventDefault();var t=g.duration,a=g.days,n=g.time,r=g.address,l=i.filter(function(e){return!0===e.activeWalk});d.a.post("".concat("https://doghero-puplove.herokuapp.com/api","/create-walk"),{duration:t,days:a,time:n,address:r,dogs:l},{withCredentials:!0}).then(function(){f({duration:"",address:"",days:"",time:""})}).catch(function(e){console.log(e)}),E()},handleChange:function(e){var t=e.target,a=t.name,n=t.value;f(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},g,Object(h.a)({},a,n)))}}))))},U=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"madeby"},r.a.createElement("p",null," Made by Daniela Gentil")),r.a.createElement("div",{className:"challenge"},r.a.createElement("p",null," DogHero Challenge - 2019")))},F=function(){var e=new g,t=Object(n.useState)(null),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),s=m[0],p=m[1];Object(n.useEffect)(function(){null===l&&e.loggedin().then(function(e){c(e)}).catch(function(e){c(!1)})},[l]);var d=function(e){c(e)},h=function(e){p(e)};return l?r.a.createElement("div",{className:"App"},r.a.createElement(S,{getUser:d,state:s,handleRole:h,userIsLogged:l}),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{userIsLogged:l})}}),r.a.createElement(i.b,{exact:!0,path:"/pets",render:function(){return r.a.createElement(C,{getUser:d})}}),r.a.createElement(i.b,{exact:!0,path:"/profile",render:function(){return r.a.createElement(x,{getUser:d})}}),r.a.createElement(i.b,{exact:!0,path:"/walks",render:function(){return r.a.createElement(L,{getUser:d})}})),r.a.createElement(U,null)):r.a.createElement("div",{className:"App"},r.a.createElement(S,{getUser:d,state:s,handleRole:h,userIsLogged:l}),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(b,{getUser:d,state:s})}}),r.a.createElement(i.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:d})}}),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{getUser:d})}})),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59).config(),c.a.render(r.a.createElement(o.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.01a197ea.chunk.js.map