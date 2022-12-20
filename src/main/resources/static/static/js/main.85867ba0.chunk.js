(this.webpackJsonplab4_react=this.webpackJsonplab4_react||[]).push([[0],{35:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_URL",(function(){return Z}));var a=r(0),n=r.n(a),s=r(19),i=r.n(s),o=r(10),c=r(7),u=r(8),l=r(9),p=r(11),h=r(3),d=(r(35),r(1)),v=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).sendLoginRequest=function(){e.props.dispatch({type:"APP_LOGIN",value:{history:e.props.history}})},e.redirectToRegister=function(){e.props.history.push("/register")},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"Username"}),Object(d.jsx)("input",{type:"text",value:this.props.login,onChange:function(t){return e.props.dispatch({type:"LOGIN_SET_LOGIN",value:t.target.value.replace(" ","")})}}),Object(d.jsx)("h2",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:this.props.password,onChange:function(t){return e.props.dispatch({type:"LOGIN_SET_PASSWORD",value:t.target.value})}}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:this.props.error?"warn":"hidden",children:"Invalid username or password"}),Object(d.jsx)("button",{className:"submit-button",disabled:!this.props.formCorrect,onClick:this.sendLoginRequest,children:"Sign in"}),Object(d.jsx)("button",{className:"submit-button",onClick:this.redirectToRegister,children:"Sign up"})]})}}]),r}(n.a.Component),b=Object(o.b)((function(e){return{user:e.appState.user,login:e.loginState.login,password:e.loginState.password,error:e.loginState.error,formCorrect:e.loginState.formCorrect}}))(v),j=Object(h.f)((function(e){return Object(d.jsx)(b,{history:e.history})})),g=r(16),O=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"canvas-div",children:Object(d.jsx)("canvas",{ref:"canvas",height:"450px",width:"450px",onClick:function(t){return e.handleClick(t)}})})}},{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.i=40,this.updateCanvas()}},{key:"componentDidUpdate",value:function(e,t,r){this.updateCanvas()}},{key:"updateCanvas",value:function(){this.clear(this.canvas),this.drawArea(this.props.r,this.i,this.canvas),this.drawAxis(this.i,this.canvas);var e,t=Object(g.a)(this.props.points);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.drawPoint(r.x,r.y,r.ch?"lime":"red",this.i,this.canvas)}}catch(a){t.e(a)}finally{t.f()}}},{key:"drawAxis",value:function(e,t){var r=t.getContext("2d"),a=t.height,n=t.width;r.strokeStyle="black",r.lineWidth=1,r.beginPath(),r.moveTo(n/2,a),r.lineTo(n/2,0),r.lineTo(n/2+3,7),r.moveTo(n/2,0),r.lineTo(n/2-3,7),this.drawDigitsX(r,e,n,a),r.stroke(),r.beginPath(),r.moveTo(0,a/2),r.lineTo(n,a/2),r.lineTo(n-7,a/2+3),r.moveTo(n,a/2),r.lineTo(n-7,a/2-3),this.drawDigitsY(r,e,n,a),r.stroke(),r.strokeStyle="black",r.lineWidth=1,r.moveTo(n/2-3*e,a/2-5*e)}},{key:"drawDigitsX",value:function(e,t,r,a){for(var n=r/2,s=0;s<5;s++)n+=t,e.moveTo(n,a/2+3),e.lineTo(n,a/2-3),e.font="12px Arial",e.fillStyle="#000000",e.fillText(s+1,n-3,a/2+15);n=r/2;for(var i=0;i<5;i++)n-=t,e.moveTo(n,a/2+3),e.lineTo(n,a/2-3),e.font="12px Arial",e.fillStyle="#000000",e.fillText(-i-1,n-9,a/2+15)}},{key:"drawDigitsY",value:function(e,t,r,a){for(var n=a/2,s=0;s<5;s++)n+=t,e.moveTo(r/2+3,n),e.lineTo(r/2-3,n),e.font="12px Arial",e.fillStyle="#000000",e.fillText(-s-1,r/2-15,n+3);n=a/2;for(var i=0;i<5;i++)n-=t,e.moveTo(r/2+3,n),e.lineTo(r/2-3,n),e.font="12px Arial",e.fillStyle="#000000",e.fillText(i+1,r/2-12,n+3)}},{key:"drawArea",value:function(e,t,r){var a=r.getContext("2d"),n=r.height,s=r.width;a.strokeStyle="#717369",a.fillStyle="#717369",a.beginPath(),a.moveTo(s/2,n/2),a.arc(s/2,n/2,e*t/2,Math.PI,1.5*Math.PI),a.moveTo(s/2,n/2),a.lineTo(s/2,n/2+e*t),a.lineTo(s/2+e*t,n/2),a.lineTo(s/2,n/2),a.moveTo(s/2,n/2),a.lineTo(s/2+e*t,n/2),a.lineTo(s/2+e*t,n/2-e*t),a.lineTo(s/2,n/2-e*t),a.moveTo(s/2,n/2),a.fill()}},{key:"clear",value:function(e){e.getContext("2d").clearRect(0,0,e.width,e.height)}},{key:"handleClick",value:function(e){var t=e.target,r=Number(((e.pageX-window.pageXOffset-t.getBoundingClientRect().x-t.width/2)/this.i).toFixed(2)),a=Number((-(e.pageY-window.pageYOffset-t.getBoundingClientRect().y-t.height/2)/this.i).toFixed(2)),n=(new Date).toUTCString();r<-6||r>6||a<-6||a>6||this.props.dispatch({type:"MAIN_ADD_POINT",value:{x:r,y:a,r:this.props.r,currtime:n}})}},{key:"drawPoint",value:function(e,t,r,a,n){var s=n.getContext("2d");s.fillStyle=r,s.beginPath(),s.arc(n.width/2+e*a,n.height/2-t*a,3,0,2*Math.PI,!0),s.fill()}}]),r}(n.a.Component),S=Object(o.b)((function(e){return{points:e.appState.drawing,r:e.mainState.rField}}))(O),f=r(27),m=r.n(f),y=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).deleteButton=function(e){return Object(d.jsx)("button",{className:"r-button",onClick:function(t){a.props.dispatch({type:"MAIN_DELETE_POINT",value:e})},children:"Delete"})},a.state={currentpage:1,paginatedPoints:[],count:1},a}return Object(u.a)(r,[{key:"render",value:function(){var e=this,t=[],r=this.props.points,a=r?Math.ceil(r.length/5):0,n=m.a.range(1,a+1),s=r.slice(0,5),i=5*(this.state.currentpage-1);s=r.slice(i,i+5);var o,c=Object(g.a)(s);try{for(c.s();!(o=c.n()).done;){var u=o.value,l=u;t.push(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:l.x}),Object(d.jsx)("td",{children:l.y}),Object(d.jsx)("td",{children:u.r}),Object(d.jsx)("td",{children:"".concat(l.checked)}),Object(d.jsx)("td",{children:_(u.currtime)}),Object(d.jsx)("td",{children:u.extime}),Object(d.jsx)("td",{children:this.deleteButton(u)})]},u.id))}}catch(p){c.e(p)}finally{c.f()}return Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{className:"result-table",children:[Object(d.jsx)("thead",{className:"thead",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"X"}),Object(d.jsx)("th",{children:"Y"}),Object(d.jsx)("th",{children:"R"}),Object(d.jsx)("th",{children:"Result"}),Object(d.jsx)("th",{children:"Time"}),Object(d.jsx)("th",{children:"Execution"}),Object(d.jsx)("th",{children:"Change"})]})}),Object(d.jsx)("tbody",{children:t})]}),Object(d.jsx)("br",{}),Object(d.jsx)("nav",{className:"d-flex justify-content-center",children:Object(d.jsx)("ul",{className:"pagination",children:n.map((function(t){return Object(d.jsx)("li",{className:t===e.state.currentpage?"page-item active":"page-item",children:Object(d.jsx)("button",{className:"page-link",onClick:function(){return e.setState({currentpage:t})},children:t})},t)}))})})]})}}]),r}(n.a.Component);function _(e){var t=new Date(e);return(t.getDate()>=10?t.getDate():"0"+t.getDate())+"-"+(t.getMonth()+1)+"-"+t.getFullYear()+" "+(t.getHours()>=10?t.getHours():"0"+t.getHours())+":"+(t.getMinutes()>=10?t.getMinutes():"0"+t.getMinutes())+":"+(t.getSeconds()>=10?t.getSeconds():"0"+t.getSeconds())}var x=Object(o.b)((function(e){return{points:e.appState.points,currentPoint:e.mainState.currentPoint,x:e.mainState.xChange,y:e.mainState.yChange}}))(y),T=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).exit=function(){a.props.dispatch({type:"APP_LOGOUT",value:{history:a.props.history}})},null===a.props.user?a.props.history.push("/login"):a.props.dispatch({type:"APP_GET_POINTS",value:{history:a.props.history}}),a}return Object(u.a)(r,[{key:"handleSubmit",value:function(){var e=(new Date).toUTCString();this.props.dispatch({type:"MAIN_ADD_POINT",value:{x:this.props.x,y:this.props.y,r:this.props.r,currtime:e}})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("br",{}),Object(d.jsxs)("h2",{id:"hello",children:["Hello, ",this.props.user,". Check your points here!"]}),Object(d.jsx)(S,{}),Object(d.jsx)("h2",{children:"Choose X:"}),Object(d.jsx)("input",{type:"text",value:this.props.x,maxLength:5,placeholder:"      \u043e\u0442 -5 \u0434\u043e 5",onChange:function(t){return e.props.dispatch({type:"MAIN_SET_X",value:t.target.value.replace(",",".")})}}),Object(d.jsx)("h2",{children:"Choose Y:"}),Object(d.jsx)("input",{type:"text",value:this.props.y,placeholder:"      \u043e\u0442 -5 \u0434\u043e 3",onChange:function(t){return e.props.dispatch({type:"MAIN_SET_Y",value:t.target.value.replace(",",".")})}}),Object(d.jsx)("h2",{children:"Choose R:"}),Object(d.jsx)("input",{type:"text",value:this.props.r,placeholder:"      \u043e\u0442 0 \u0434\u043e 5",maxLength:3,onChange:function(t){return e.props.dispatch({type:"MAIN_SET_R",value:t.target.value.replace(",",".")})}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"submit-button",onClick:function(){return e.handleSubmit()},disabled:""===this.props.y||"-"===this.props.y||"."===this.props.y||""===this.props.x||"-"===this.props.x||"."===this.props.x,children:"Check"}),Object(d.jsx)("button",{className:"submit-button",onClick:this.exit,children:"Logout"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{})]})}}]),r}(n.a.Component),N=Object(o.b)((function(e){return{user:e.appState.user,x:e.mainState.xField,y:e.mainState.yField,r:e.mainState.rField}}))(T),E=Object(h.f)((function(e){return Object(d.jsx)(N,{history:e.history,store:e.store})})),P=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).redirectToLogin=function(){e.props.history.push("/login")},e.register=function(){e.props.dispatch({type:"APP_REGISTER",value:{history:e.props.history}})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Registration"}),Object(d.jsx)("h2",{children:"Username:"}),Object(d.jsx)("input",{type:"text",value:this.props.login,onChange:function(t){return e.props.dispatch({type:"REGISTER_SET_LOGIN",value:t.target.value.replace(" ","")})}}),Object(d.jsx)("div",{className:this.props.loginError?"warn":"hidden",children:"This username is already taken"}),Object(d.jsx)("h2",{children:"Password:"}),Object(d.jsx)("input",{type:"password",value:this.props.password,onChange:function(t){return e.props.dispatch({type:"REGISTER_SET_PASSWORD",value:t.target.value})}}),Object(d.jsx)("h2",{children:"Repeat password:"}),Object(d.jsx)("input",{type:"password",value:this.props.rPassword,onChange:function(t){return e.props.dispatch({type:"REGISTER_SET_R_PASSWORD",value:t.target.value})}}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:this.props.passwordError?"warn":"hidden",children:"Make sure that the password and its confirmation match"}),Object(d.jsx)("button",{className:"submit-button",onClick:this.register,disabled:!this.props.formCorrect,children:"Confirm"}),Object(d.jsx)("button",{className:"submit-button",onClick:this.redirectToLogin,children:"Back"})]})}}]),r}(n.a.Component),w=Object(o.b)((function(e){return{user:e.appState.user,login:e.registerState.login,password:e.registerState.password,rPassword:e.registerState.rPassword,passwordError:e.registerState.passwordError,loginError:e.registerState.loginError,formCorrect:e.registerState.formCorrect}}))(P),C=Object(h.f)((function(e){var t=e.history;return Object(d.jsx)(w,{history:t})})),R=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(A,{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"/login",component:j}),Object(d.jsx)(h.a,{exact:!0,path:"/register",component:C}),Object(d.jsx)(h.a,{path:"/",component:E})]})]})}}]),r}(n.a.Component),A=function(){return Object(d.jsxs)("div",{className:"head",children:[Object(d.jsx)("span",{id:"head-title",children:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u21164 \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1306"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{id:"head-author",children:"\u0421\u043e\u0431\u043e\u043b\u0435\u0432 \u0418\u0432\u0430\u043d P32312"})]})},I=R,G=r(15),L=Object(G.b)({appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_LOGIN_SUCCESS":return Object.assign({},e,{user:t.value});case"APP_LOGOUT":return Object.assign({},e,{user:null});case"APP_UPDATE_POINTS_SUCCESS":return Object.assign({},e,{points:t.value});case"APP_UPDATE_DRAWING_SUCCESS":return Object.assign({},e,{drawing:t.value});default:return e}},loginState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SET_LOGIN":return Object.assign({},e,{login:t.value,formCorrect:t.value.length>0&&e.password.length>0});case"LOGIN_SET_PASSWORD":return Object.assign({},e,{password:t.value,formCorrect:t.value.length>0&&e.login.length>0});case"LOGIN_SET_ERROR":return Object.assign({},e,{error:t.value});case"APP_LOGIN_SUCCESS":return Object.assign({},e,{error:!1,login:"",password:"",formCorrect:!1});default:return e}},registerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_SET_LOGIN":return Object.assign({},e,{login:t.value,formCorrect:t.value.length>0&&e.password.length>0&&e.rPassword.length>0});case"REGISTER_SET_PASSWORD":return Object.assign({},e,{password:t.value,formCorrect:t.value.length>0&&e.login.length>0&&e.rPassword.length>0});case"REGISTER_SET_R_PASSWORD":return Object.assign({},e,{rPassword:t.value,formCorrect:t.value.length>0&&e.login.length>0&&e.password.length>0});case"REGISTER_SET_LOGIN_ERROR":return Object.assign({},e,{loginError:t.value});case"REGISTER_SET_PASSWORD_ERROR":return Object.assign({},e,{passwordError:t.value});case"APP_REGISTER_SUCCESS":return{login:"",password:"",rPassword:"",loginError:!1,passwordError:!1,formCorrect:!1};default:return e}},mainState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_SET_X":return(Number(t.value)||0===Number(t.value)&&""!==t.value)&&!t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=5?Object.assign({},e,{xField:Number(t.value)}):"-"===t.value||""===t.value||"."===t.value||t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=5?Object.assign({},e,{xField:t.value}):e;case"MAIN_SET_Y":return(Number(t.value)||0===Number(t.value)&&""!==t.value)&&!t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=3?Object.assign({},e,{yField:Number(t.value)}):"-"===t.value||""===t.value||"."===t.value||t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=3?Object.assign({},e,{yField:t.value}):e;case"MAIN_SET_R":return(Number(t.value)||0===Number(t.value)&&""!==t.value)&&!t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=0&&Number(t.value)<=5?Object.assign({},e,{rField:Number(t.value)}):"-"===t.value||""===t.value||"."===t.value||t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=0&&Number(t.value)<=5?Object.assign({},e,{rField:t.value}):e;case"APP_LOGOUT":return{xField:"",yField:"",rField:5};case"MAIN_SET_CHANGE_X":return(Number(t.value)||0===Number(t.value)&&""!==t.value)&&!t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=5?Object.assign({},e,{xChange:Number(t.value)}):"-"===t.value||""===t.value||"."===t.value||t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=5?Object.assign({},e,{xChange:t.value}):e;case"MAIN_SET_CHANGE_Y":return(Number(t.value)||0===Number(t.value)&&""!==t.value)&&!t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=3?Object.assign({},e,{yChange:Number(t.value)}):"-"===t.value||""===t.value||"."===t.value||t.value.match(/^-*[0-9]*\.$/)&&Number(t.value)>=-5&&Number(t.value)<=3?Object.assign({},e,{yChange:t.value}):e;case"MAIN_SET_CURRENT_POINT":return Object.assign({},e,{currentPoint:Number(t.value.id)});default:return e}}}),k=function(e,t){var r={login:e.getState().loginState.login,password:e.getState().loginState.password},a=new XMLHttpRequest;a.open("POST","".concat(Z,"/login"),!0),a.onload=function(){return D(a.responseText,e,t)},a.onerror=function(){return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send("username=".concat(r.login,"&password=").concat(r.password))},D=function(e,t,r){200===JSON.parse(e).status?(window.localStorage.setItem("user",t.getState().loginState.login),t.dispatch({type:"APP_LOGIN_SUCCESS",value:t.getState().loginState.login}),r.push("/")):t.dispatch({type:"LOGIN_SET_ERROR",value:!0})},M=function(e){return function(t){return function(r){if("APP_LOGIN"===r.type)return k(e,r.value.history),t(r);t(r)}}},U=function(e,t){e.getState().registerState.password===e.getState().registerState.rPassword?(e.dispatch({type:"REGISTER_SET_PASSWORD_ERROR",value:!1}),F(e,t)):e.dispatch({type:"REGISTER_SET_PASSWORD_ERROR",value:!0})},F=function(e,t){var r={login:e.getState().registerState.login,password:e.getState().registerState.password},a=new XMLHttpRequest;a.open("POST","".concat(Z,"/register"),!0),a.onload=function(){return H(a.responseText,e,t)},a.onerror=function(){return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify({username:r.login,password:r.password}))},H=function(e,t,r){200===JSON.parse(e).status?t.dispatch({type:"APP_REGISTER_SUCCESS",value:{history:r}}):t.dispatch({type:"REGISTER_SET_LOGIN_ERROR",value:!0})},X=function(e){return function(t){return function(r){switch(r.type){case"APP_REGISTER":return U(e,r.value.history),t(r);case"APP_REGISTER_SUCCESS":return e.dispatch({type:"LOGIN_SET_LOGIN",value:e.getState().registerState.login}),e.dispatch({type:"LOGIN_SET_PASSWORD",value:e.getState().registerState.password}),e.dispatch({type:"APP_LOGIN",value:{history:r.value.history}}),t(r);default:t(r)}}}},W=function(e,t,r){var a,n=[],s=Object(g.a)(t);try{for(s.s();!(a=s.n()).done;){var i=a.value,o=i.x,c=i.y;n.push({x:o,y:c,ch:o>=0&&o<=r&&c>=0&&c<=r||o<=0&&c>=0&&o*o+c*c<=r/2*r/2||o>=0&&c<=0&&r>=o-c})}}catch(u){s.e(u)}finally{s.f()}e.dispatch({type:"APP_UPDATE_DRAWING_SUCCESS",value:n})},Y=function(e,t){var r=new XMLHttpRequest;r.open("GET","".concat(Z,"/points"),!0),r.onload=function(){return J(r.responseText,e,t)},r.onerror=function(){return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},r.send()},q=function(e,t){var r=new XMLHttpRequest;r.open("POST","".concat(Z,"/points"),!0),r.onload=function(){return J(r.responseText,e)},r.onerror=function(){return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(t))},$=function(e,t){var r=new XMLHttpRequest;r.open("DELETE","".concat(Z,"/points"),!0),r.onload=function(){J(r.responseText,e),e.dispatch({type:"MAIN_SET_CURRENT_POINT",value:{id:0}})},r.onerror=function(){return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify({id:t.id}))},J=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.startsWith("{")){var a=JSON.parse(e);200===a.status?t.dispatch({type:"APP_UPDATE_POINTS_SUCCESS",value:a.answer}):r&&(alert(r),t.dispatch({type:"APP_LOGOUT",value:{history:r}}))}else t.dispatch({type:"APP_LOGOUT",value:{history:r}})},B=function(e){return function(t){return function(r){switch(r.type){case"APP_LOGOUT":var a=new XMLHttpRequest;return a.open("GET","".concat(Z,"/logout"),!0),a.send(),window.localStorage.setItem("user",null),r.value.history.push("/login"),t(r);case"APP_GET_POINTS":return Y(e,r.value.history),t(r);case"MAIN_ADD_POINT":return q(e,r.value),e.dispatch({type:"MAIN_SET_Y",value:""}),t(r);case"APP_UPDATE_POINTS_SUCCESS":return W(e,r.value,e.getState().mainState.rField),t(r);case"MAIN_SET_R":return 0===Number(r.value)?(W(e,e.getState().appState.points,0),t(r)):Number(r.value)<0||Number(r.value)>5?(W(e,e.getState().appState.points,String(r.value)[0]),t(r)):(W(e,e.getState().appState.points,Number(r.value)),t(r));case"MAIN_SET_CURRENT_POINT":if(0!==r.value.id){var n=r.value;e.dispatch({type:"MAIN_SET_CHANGE_X",value:""+n.x}),e.dispatch({type:"MAIN_SET_CHANGE_Y",value:""+n.y})}else e.dispatch({type:"MAIN_SET_CHANGE_X",value:""}),e.dispatch({type:"MAIN_SET_CHANGE_Y",value:""});return t(r);case"MAIN_DELETE_POINT":return $(e,r.value),e.dispatch({type:"MAIN_SET_CURRENT_POINT",value:{id:0}}),t(r);default:return t(r)}}}},z=Object(G.a)(M,X,B),K={appState:{user:window.localStorage.getItem("user"),points:[],drawing:[]},loginState:{login:"",password:"",error:!1,formCorrect:!1},registerState:{login:"",password:"",rPassword:"",loginError:!1,passwordError:!1,formCorrect:!1},mainState:{xField:"",yField:"",rField:5,xChange:"",yChange:"",currentPoint:0}},Q=Object(G.c)(L,K,z),V=r(14),Z=(r(43),"http://"+window.location.host);i.a.render(Object(d.jsx)(V.a,{children:Object(d.jsx)(o.a,{store:Q,children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.85867ba0.chunk.js.map