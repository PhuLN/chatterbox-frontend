webpackJsonp([3],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("hMcO"),s=n.n(o),r=n("MMSg"),c=n.n(r),i=(n("doPI"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var u=n("VU/8")({name:"App"},i,!1,function(t){n("zqPf")},null,null).exports,h=n("/ocq"),p=n("NYxO"),m=n("424j"),g=n("mtWM"),d=n.n(g),f=n("M4fF"),l=n.n(f),b={state:{user:{}},getters:{getToken:function(t){return t.user.token},isAuthenticated:function(t){return!!t.user.token},getUser:function(t){return l.a.pick(t.user,["_id","username","profileImage"])}},actions:{userSignup:function(t,e){var n=t.commit;return d()({method:"POST",url:"https://chatterbox-be.herokuapp.com/api/users/signup",contentType:"application/json; charset=utf-8",dataType:"json",data:{user:e}}).then(function(t){n("setLoginDetails",t.data)})},userLogin:function(t,e){var n=t.commit;return d()({method:"POST",url:"https://chatterbox-be.herokuapp.com/api/users/login",contentType:"application/json; charset=utf-8",dataType:"json",data:{user:e}}).then(function(t){n("setLoginDetails",t.data)})},logoff:function(t){(0,t.commit)("logoff")}},mutations:{setLoginDetails:function(t,e){var n=e.user;t.user=n},logoff:function(t){t.user={}}}},C={state:{currentChat:{},currentChatMembers:[],accessibleChats:[]},getters:{getCurrentChat:function(t){return t.currentChat},getAccessibleChats:function(t){return t.accessibleChats},getMembers:function(t){return t.currentChatMembers}},actions:{createChatroom:function(t,e){var n=t.commit;return d()({method:"POST",url:"https://chatterbox-be.herokuapp.com/api/chatrooms/create",contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},data:{chat:e}}).then(function(t){n("setCurrentChat",t.data),n("addChat",t.data)})},joinChatroom:function(t,e){var n=t.commit;return d()({method:"POST",url:"https://chatterbox-be.herokuapp.com/api/invite/join",contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},data:{invite:e}}).then(function(t){n("addChat",t.data)})},updateCurrentChatDetails:function(t){var e=t.commit;return d()({method:"GET",url:"https://chatterbox-be.herokuapp.com/api/chatrooms/chat",contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},params:{chatId:k.getters.getCurrentChat._id}}).then(function(t){e("setCurrentChat",t)})},setCurrentChat:function(t,e){var n=t.commit;console.log(e),n("setCurrentChat",e)},fetchAccessibleChats:function(t){var e=t.commit;return d()({method:"GET",url:"https://chatterbox-be.herokuapp.com/api/chatrooms/yourchats",contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken}}).then(function(t){e("setAccessibleChats",t)})},fetchChatMembers:function(t){var e=t.commit;return d.a.get("https://chatterbox-be.herokuapp.com/api/chatrooms/chatmembers",{contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},params:{chatId:k.getters.getCurrentChat._id}}).then(function(t){e("setMembers",t)})}},mutations:{setCurrentChat:function(t,e){t.currentChat=e},addChat:function(t,e){t.accessibleChats.push(e)},setAccessibleChats:function(t,e){t.accessibleChats=e.data},setMembers:function(t,e){console.log(e.data),t.currentChatMembers=e.data,console.log(t.currentChatMembers),console.log(t.currentChatMembers[0])}}},T={state:{messages:[]},getters:{getMessages:function(t){return t.messages}},actions:{sendMessage:function(t,e){var n=t.commit;return d()({method:"POST",url:"https://chatterbox-be.herokuapp.com/api/chat/create",contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},data:{message:e}}).then(function(){n("nothing")})},receiveMessage:function(t,e){(0,t.commit)("addNewMessage",e)},clearMessages:function(t){(0,t.commit)("clearMessages")},fetchMessagesInChat:function(t){var e=t.commit;return d.a.get("https://chatterbox-be.herokuapp.com/api/chat/chatmessages",{contentType:"application/json; charset=utf-8",dataType:"json",headers:{Token:k.getters.getToken},params:{chatId:k.getters.getCurrentChat._id}}).then(function(t){e("setMessages",t)})}},mutations:{setMessages:function(t,e){t.messages=e.data},addNewMessage:function(t,e){t.messages.push(e)},clearMessages:function(t){t.messages=[]},nothing:function(){}}};a.a.use(p.a);var k=new p.a.Store({plugins:[Object(m.a)()],modules:{auth:b,chatroom:C,chat:T}});a.a.use(h.a);var M=new h.a({mode:"history",routes:[{path:"/",name:"ChatRoom",component:function(){return n.e(0).then(n.bind(null,"Wn5s"))},meta:{title:"Chatterbox"}},{path:"/login",name:"Authentication",component:function(){return n.e(1).then(n.bind(null,"71iP"))},meta:{title:"Chatterbox - Auth"}}]});M.beforeEach(function(t,e,n){document.title=t.meta.title,k.getters.isAuthenticated||"Authentication"===t.name?k.getters.isAuthenticated&&"Authentication"===t.name?n("/"):n():n("/login")});var j=M;a.a.config.productionTip=!1,a.a.use(c.a),a.a.use(s.a,"https://chatterbox-be.herokuapp.com/api".substring(0,"https://chatterbox-be.herokuapp.com/api".length-4)),new a.a({el:"#app",router:j,store:k,components:{App:u},template:"<App/>"})},doPI:function(t,e){},zqPf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fbfe5693516d990e6bbb.js.map