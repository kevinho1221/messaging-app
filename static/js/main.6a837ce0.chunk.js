(this["webpackJsonpmessaging-app"]=this["webpackJsonpmessaging-app"]||[]).push([[0],{129:function(e,t,a){e.exports=a(176)},134:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),i=a.n(r);a(134),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(116),o=a(43),l=a(7),u=a.n(l),p=a(12),d=a(73),m=a(14),h=a(15),f=a(18),g=a(16),x=a(19),b=a(211),w=function(){return{buttonstyle:{marginTop:"10px",marginBottom:"10px",background:"#2C7379",color:"#FFFFFD","&:hover":{background:"#67A9A8"}},main:{backgroundImage:"linear-gradient(#2C7379, #ABD7D8)",width:"100vw",height:"100vh",display:"flex"},linkstyle:{fontSize:14,cursor:"pointer"},paperstyles:{width:300,margin:"auto",padding:"10px"}}},S=a(17),v=a.n(S),E=a(206),y=a(209),N=a(208),I=a(62),k=a.n(I),O=a(63),F=a.n(O),C=a(220),j=a(210),R=a(212),L=a(51),D=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).submitForm=function(t){t.preventDefault(),""!=e.state.email&&""!=e.state.password?e.toDashboard():e.setState({loginerror:"Error: Please enter a username and password."})},e.userInputHandler=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.toSignup=function(){e.props.history.push("/signup")},e.toDashboard=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(t){e.props.history.push("/dashboard")})).catch((function(t){e.setState({loginerror:t.toString()})}));case 2:case"end":return t.stop()}}),t)}))),e.state={email:"",password:"",currentUser:null,loginerror:""},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{className:e.main},s.a.createElement(E.a,{className:e.paperstyles},s.a.createElement("h1",{align:"center"},"Login Page"),s.a.createElement("form",{onSubmit:this.submitForm},s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"emailInput"},"Enter Your Email"),s.a.createElement(y.a,{fullWidth:!0,name:"email",id:"emailInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(k.a,null))}))),s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"passwordInput"},"Enter Your Password"),s.a.createElement(y.a,{type:"password",fullWidth:!0,name:"password",id:"passwordInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(F.a,null))}))),s.a.createElement("h5",null,this.state.loginerror),s.a.createElement(b.a,{className:e.buttonstyle,type:"submit",variant:"contained",fullWidth:!0},"Log In"),s.a.createElement(R.a,{onClick:this.toSignup,className:e.linkstyle},"Sign Up!"))))}}]),t}(s.a.Component),W=v()(w)(D),H=function(){return{buttonstyle:{marginTop:"10px",marginBottom:"10px",background:"#2C7379",color:"#FFFFFD","&:hover":{background:"#67A9A8"}},main:{backgroundImage:"linear-gradient(#2C7379, #ABD7D8)",width:"100vw",height:"100vh",display:"flex"},linkstyle:{fontSize:14,cursor:"pointer"},paperstyles:{width:300,margin:"auto",padding:"10px"}}},A=a(51),z=a(111),B=a.n(z),T=a(51),U=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).toLogin=function(){e.props.history.push("/login")},e.submitForm=function(t){t.preventDefault(),""!=e.state.firstname&&""!=e.state.lastname?e.state.password===e.state.passwordconf?e.addToFirebase():e.setState({signuperror:"The passwords do not match!"}):e.setState({signuperror:"Please enter your first and last name!"})},e.userInputHandler=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.addToFirebase=function(){T.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email,firstname:e.state.firstname,lastname:e.state.lastname};Object(A.firestore)().collection("users").doc(e.state.email).set(a).then(e.props.history.push("/dashboard")),console.log("signup up successfully")})).catch((function(t){e.setState({signuperror:t.toString()}),console.log(t.toString())}))},e.state={firstname:"",lastname:"",email:"",password:"",passwordconf:"",signuperror:""},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{className:e.main},s.a.createElement(E.a,{className:e.paperstyles},s.a.createElement("h1",{align:"center"},"Sign Up!"),s.a.createElement("form",{onSubmit:this.submitForm},s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"firstnameInput"},"First Name"),s.a.createElement(y.a,{fullWidth:!0,name:"firstname",id:"firstnameInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(k.a,null))}))),s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"lastnameInput"},"Last Name"),s.a.createElement(y.a,{fullWidth:!0,name:"lastname",id:"lastnameInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(k.a,null))}))),s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"emailInput"},"Enter Your Email"),s.a.createElement(y.a,{fullWidth:!0,name:"email",id:"emailInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(B.a,null))}))),s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"passwordInput",className:e.inputstyle},"Enter Your Password"),s.a.createElement(y.a,{type:"password",fullWidth:!0,name:"password",id:"passwordInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(F.a,null))}))),s.a.createElement(N.a,{fullWidth:!0},s.a.createElement("div",null,s.a.createElement(C.a,{htmlFor:"passwordconfInput"},"Confirm Your Password"),s.a.createElement(y.a,{type:"password",fullWidth:!0,name:"passwordconf",id:"passwordconfInput",onChange:this.userInputHandler,startAdornment:s.a.createElement(j.a,{position:"start"},s.a.createElement(F.a,null))}))),s.a.createElement("h5",null,this.state.signuperror),s.a.createElement(b.a,{className:e.buttonstyle,type:"submit",variant:"contained",color:"primary",fullWidth:!0},"Sign Up"),s.a.createElement(R.a,{onClick:this.toLogin,className:e.linkstyle},"Log In!"))))}}]),t}(s.a.Component),M=v()(H)(U),K=function(){return{main:{},list:{top:"80px",boxSizing:"border-box",width:"30vw",zIndex:"-1",position:"fixed",overflow:"auto",height:"calc(100vh - 80px)",background:"#ABD7D8",left:"0",borderRight:"1px solid grey"},listItemContainer:{backgroundColor:"red",borderColor:"red"},listItemUnread:{fontWeight:"900",marginRight:"30px"},unread:{background:"#67A9A8"},unreadDot:{color:"#1976d2",marginLeft:"300px",marginRight:"10px"}}},P=a(215),Y=a(216),G=a(217),V=function(){return{main:{padding:"10px",display:"flex",justifyContent:"space-around",alignItems:"center",background:"#ABD7D8",height:"80px",position:"fixed",width:"30vw",borderRight:"1px solid grey",zIndex:"1",boxSizing:"border-box"},autocompletestyles:{width:"300px",padding:"20px"},createstyles:{fontSize:"30px"},iconbuttonstyles:{width:"70px",borderRadius:"10px",color:"#2C7379",marginRight:"20px"},suggestedItem:{background:"#FFFFFD",borderRadius:"10px",border:"1px solid grey"}}},J=a(214),X=a(114),Z=a.n(X),Q=a(218),$=a(219),q=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).onChangeHandler=function(){var t=Object(p.a)(u.a.mark((function t(a,n,s){var r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=16;break}if("select-option"!=s){t.next=16;break}return r=e.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),i=r.indexOf(n.email),t.next=6,e.props.setSelectedchatIndex(i);case 6:return t.next=8,e.props.setSelectedmessages();case 8:return t.next=10,e.props.changeSelectedIndexofChatSelector(i);case 10:return t.next=12,e.props.setSelectedFirstName(n.firstname);case 12:return t.next=14,e.props.setSelectedLastName(n.lastname);case 14:return t.next=16,e.props.setHasRead();case 16:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.handleNewMessageClick=function(){e.props.displayNewChatWindow(),e.props.setHasSelectedOnce()},e.state={autocompleteValue:""},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),n=this.props.users.filter((function(e){return a.includes(e.email)}));return s.a.createElement("div",{className:t.main},s.a.createElement($.a,{clearOnEscape:!0,value:this.state.autocompleteValue,id:"selector-friends-list",options:n,getOptionLabel:function(e){return e.firstname?[e.firstname,e.lastname].join(" "):e},className:t.autocompletestyles,onChange:function(t,a,n){return e.onChangeHandler(t,a,n)},edge:"start",renderInput:function(e){return s.a.createElement(Q.a,Object.assign({className:t.suggestedItem},e,{label:"Search Friends",variant:"outlined"}))}}),s.a.createElement(J.a,{className:t.iconbuttonstyles,onClick:this.handleNewMessageClick,color:"primary"},s.a.createElement(Z.a,{className:t.createstyles})))}}]),t}(s.a.Component),_=v()(V)(q),ee=function(){return{main:{display:"flex",alignItems:"center"},avatar:{marginLeft:"35px",boxSizing:"border-box",height:"50px",width:"50px"},name:{marginLeft:"20px",boxSizing:"border-box"}}},te=a(221),ae=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement("div",{className:e.main},s.a.createElement(te.a,{className:e.avatar},this.props.firstinit+this.props.lastinit),s.a.createElement("div",{className:e.name},this.props.fullname)))}}]),t}(s.a.Component),ne=v()(ee)(ae),se=a(58),re=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).wasLastSender=function(t){return t.messages[t.messages.length-1].sender===e.props.currentuser},e.setFullName=function(t){var a=t.users.filter((function(t){return t!==e.props.currentuser})),n=e.props.users.filter((function(e){return a.includes(e.email)})),r=n.map((function(e){return e.firstname})).toString(),i=r.charAt(0),c=n.map((function(e){return e.lastname})).toString(),o=c.charAt(0);return s.a.createElement(ne,{firstinit:i,lastinit:o,fullname:r+" "+c})},e.handleListItemClick=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedIndex:a});case 2:return t.next=4,e.props.setSelectedchatIndex(a);case 4:return t.next=6,e.props.setSelectedmessages();case 6:return t.next=8,e.setSelectedFirstandLastName(a);case 8:return t.next=10,e.props.setHasRead();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setSelectedIndex=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedIndex:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setSelectedFirstandLastName=function(){var t=Object(p.a)(u.a.mark((function t(a){var n,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),s=e.props.users,r=s.filter((function(e){return n.includes(e.email)})),t.next=5,e.props.setSelectedFirstName(r[a].firstname);case 5:return t.next=7,e.props.setSelectedLastName(r[a].lastname);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",selectedIndex:null},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement("div",{className:t.main},s.a.createElement(_,{displayNewChatWindow:this.props.displayNewChatWindow,setHasSelectedOnce:this.props.setHasSelectedOnce,chats:this.props.chats,users:this.props.users,currentuser:this.props.currentuser,setSelectedchatIndex:this.props.setSelectedchatIndex,setSelectedmessages:this.props.setSelectedmessages,changeSelectedIndexofChatSelector:this.props.changeSelectedIndexofChatSelector,setSelectedFirstName:this.props.setSelectedFirstName,setSelectedLastName:this.props.setSelectedLastName,setHasRead:this.props.setHasRead}),s.a.createElement("div",{className:t.list},s.a.createElement(P.a,null,this.props.chats.map((function(a,n){return 0==a.hasRead&&0==e.wasLastSender(a)?s.a.createElement("div",{key:n},s.a.createElement(Y.a,{button:!0,selected:e.state.selectedIndex===n,onClick:function(t){e.handleListItemClick(n)},className:t.unread},s.a.createElement(G.a,{primary:s.a.createElement("div",null,s.a.createElement(se.a,{className:t.listItemUnread},e.setFullName(a)))}))):s.a.createElement("div",{key:n},s.a.createElement(Y.a,{button:!0,selected:e.state.selectedIndex===n,onClick:function(t){e.handleListItemClick(n)}},s.a.createElement(G.a,{primary:e.setFullName(a)})))})))))}}]),t}(s.a.Component),ie=v()(K)(re),ce=function(){return{main:{margin:0,padding:0,background:"red"},title:{background:"red"},testscroll:{margin:"20px",width:"70%",marginLeft:"30%",position:"absolute",top:"100px",overflowY:"scroll"}}},oe=a(92),le=function(){return{convoheader:{width:"70vw",height:"80px",marginLeft:"30%",background:"#F0FFFF",padding:"20px",position:"fixed",zIndex:"1",boxSizing:"border-box"},messages:{display:"flex",flexDirection:"column-reverse",alignItems:"center",width:"70vw",marginLeft:"30%",position:"absolute",top:"80px",overflow:"auto",height:"calc(100vh - 150px)",background:"#FFFFF3",boxSizing:"border-box",border:"10px #FFFFF3 solid"},messagesUser:{width:"30%",background:"#67A9A8",float:"right",clear:"both",padding:"20px",borderRadius:"15px",marginLeft:"65%",wordWrap:"break-word",boxSizing:"border-box",marginTop:"10px",color:"#FFFFFD"},messagesOther:{width:"30%",background:"#DCC497",float:"left",clear:"both",padding:"20px",borderRadius:"15px",marginRight:"65%",wordWrap:"break-word",boxSizing:"border-box",marginTop:"10px"}}},ue=function(){return{convoheader:{width:"70vw",height:"80px",marginLeft:"30%",background:"#ABD7D8",padding:"20px",position:"fixed",zIndex:"1",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid grey"},messages:{display:"flex",flexDirection:"column-reverse",alignItems:"center",width:"70vw",marginLeft:"30%",position:"absolute",top:"80px",overflow:"auto",height:"calc(100vh - 130px)",background:"yellow",boxSizing:"border-box",border:"10px yellow solid"},messagesUser:{width:"30%",background:"coral",float:"right",clear:"both",padding:"20px",borderRadius:"15px",marginLeft:"65%",wordWrap:"break-word",boxSizing:"border-box",marginTop:"10px"},messagesOther:{width:"30%",background:"lightgreen",float:"left",clear:"both",padding:"20px",borderRadius:"15px",marginRight:"65%",wordWrap:"break-word",boxSizing:"border-box",marginTop:"10px"},autocompletestyles:{width:"1000px",float:"left",marginleft:"-400px"},buttoncontainer:{marginLeft:"50px",marginRight:"0px"},button:{height:"40px",width:"100px",background:"#2C7379",color:"#FFFFFD"},suggestedItem:{background:"#FFFFFD",borderRadius:"10px",border:"1px solid grey"},exitIcon:{fontSize:"40px"},iconbuttonstyles:{width:"70px",borderRadius:"10px",color:"#2C7379",marginRight:"20px"}}},pe=a(64),de=a.n(pe),me=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).handleClose=function(){var t=Object(p.a)(u.a.mark((function t(a,n,s){var r,i,c,o,l,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("blur"!=s){t.next=9;break}return r=document.getElementById("friends-list"),i=r.getAttribute("value").trim(),t.next=5,e.setState({recipient:i});case 5:if(c=e.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),n!=e.props.currentuser){t.next=8;break}return t.abrupt("return");case 8:1==c.includes(i)?(o=c.indexOf(e.state.recipient),e.props.setSelectedchatIndex(o),e.props.setSelectedmessages(),e.props.changeSelectedIndexofChatSelector(o),l=e.props.users,p=l.filter((function(e){return c.includes(e.email)})),e.props.setSelectedFirstName(p[o].firstname),e.props.setSelectedLastName(p[o].lastname),e.props.setHasRead()):e.props.setNewRecipient(e.state.recipient);case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.onChangeHandler=function(){var t=Object(p.a)(u.a.mark((function t(a,n,s){var r,i,c,o,l,p,d,m;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=45;break}if("Enter"!==a.key){t.next=25;break}if((n=n.trim())!=e.props.currentuser){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e.setState({recipient:n});case 7:if(1!=(r=e.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]}))).includes(n)){t.next=20;break}i=r.indexOf(n),e.props.setSelectedchatIndex(i),e.props.setSelectedmessages(),e.props.changeSelectedIndexofChatSelector(i),c=e.props.users,o=c.filter((function(e){return r.includes(e.email)})),e.props.setSelectedFirstName(o[i].firstname),e.props.setSelectedLastName(o[i].lastname),e.props.setHasRead(),t.next=23;break;case 20:return t.next=22,e.setState({recipient:n});case 22:e.props.setNewRecipient(e.state.recipient);case 23:t.next=45;break;case 25:if("select-option"!=s){t.next=41;break}return e.props.setKnownRecipient(!0),t.next=29,e.setState({recipient:n.email});case 29:l=e.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),p=l.indexOf(e.state.recipient),e.props.setSelectedchatIndex(p),e.props.setSelectedmessages(),e.props.changeSelectedIndexofChatSelector(p),d=e.props.users,m=d.filter((function(e){return l.includes(e.email)})),e.props.setSelectedFirstName(m[p].firstname),e.props.setSelectedLastName(m[p].lastname),e.props.setHasRead(),t.next=45;break;case 41:return e.props.setKnownRecipient(!1),t.next=44,e.setState({recipient:n});case 44:e.props.setNewRecipient(e.state.recipient);case 45:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.props.setKnownRecipient(!1),e.props.changeSelectedIndexofChatSelector(null)},e.state={recipient:""},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.chats.map((function(t){return t.users.filter((function(t){return t!=e.props.currentuser}))[0]})),n=this.props.users.filter((function(e){return a.includes(e.email)}));return s.a.createElement("div",null,s.a.createElement("div",{className:t.convoheader},s.a.createElement($.a,{id:"friends-list",freeSolo:!0,clearOnEscape:!0,options:n,getOptionLabel:function(e){return e.firstname?[e.firstname,e.lastname].join(" "):e},className:t.autocompletestyles,edge:"start",onChange:function(t,a,n){return e.onChangeHandler(t,a,n)},onClose:function(t,a){e.handleClose(t,e.state.recipient,a)},renderInput:function(e){return s.a.createElement(Q.a,Object.assign({className:t.suggestedItem},e,{label:"To:",variant:"outlined"}))}}),s.a.createElement("div",{className:t.buttoncontainer},s.a.createElement(J.a,{className:t.iconbuttonstyles,onClick:this.props.logout},s.a.createElement(de.a,{className:t.exitIcon})))))}}]),t}(s.a.Component),he=v()(ue)(me),fe=function(){return{main:{width:"70vw",height:"80px",marginLeft:"30%",background:"#ABD7D8",padding:"20px",position:"fixed",zIndex:"1",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid grey"},avataruserWrapper:{display:"flex",alignItems:"center"},avatar:{padding:"20px",boxSizing:"border-box",height:"50px",width:"50px"},name:{padding:"20px",boxSizing:"border-box"},button:{height:"40px",width:"100px",background:"#2C7379",color:"#FFFFFD","&:hover":{background:"red"}},exitIcon:{fontSize:"40px"},iconbuttonstyles:{width:"70px",borderRadius:"10px",color:"#2C7379",marginRight:"20px"}}},ge=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,this.props.hasSelectedOnce?s.a.createElement("div",{className:e.main},s.a.createElement("div",{className:e.avataruserWrapper},s.a.createElement(te.a,{className:e.avatar},this.props.firstname.charAt(0)+this.props.lastname.charAt(0)),s.a.createElement("div",{className:e.name},this.props.firstname+" "+this.props.lastname)),s.a.createElement("div",{className:e.avataruserWrapper}," "),s.a.createElement(J.a,{className:e.iconbuttonstyles,onClick:this.props.logout},s.a.createElement(de.a,{className:e.exitIcon}))):s.a.createElement("div",{className:e.main},s.a.createElement("div",{className:e.avataruserWrapper}," "),s.a.createElement(J.a,{className:e.iconbuttonstyles,onClick:this.props.logout},s.a.createElement(de.a,{className:e.exitIcon}))))}}]),t}(s.a.Component),xe=v()(fe)(ge),be=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).setKnownRecipient=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({knownRecipient:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){var e=document.getElementById("convodisplay");e&&e.scrollTo(0,e.scrollHeight)},e.componentDidUpdate=function(){var e=document.getElementById("convodisplay");e&&e.scrollTo(0,e.scrollHeight)},e.state={knownRecipient:!1},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement("div",null,this.props.newChatWindow?s.a.createElement("div",null,s.a.createElement(he,{chats:this.props.chats,users:this.props.users,currentuser:this.props.currentuser,setKnownRecipient:this.setKnownRecipient,setSelectedchatIndex:this.props.setSelectedchatIndex,setSelectedmessages:this.props.setSelectedmessages,changeSelectedIndexofChatSelector:this.props.changeSelectedIndexofChatSelector,setNewRecipient:this.props.setNewRecipient,setSelectedFirstName:this.props.setSelectedFirstName,setSelectedLastName:this.props.setSelectedLastName,logout:this.props.logout,setHasRead:this.props.setHasRead}),this.state.knownRecipient?s.a.createElement("div",{className:t.messages,id:"convodisplay"},Object(oe.a)(this.props.selectedmessages).reverse().map((function(a,n){return a.sender===e.props.email?s.a.createElement("div",{className:t.messagesUser,key:n},a.message):s.a.createElement("div",{className:t.messagesOther,key:n},a.message)}))):s.a.createElement("div",{className:t.messages})):s.a.createElement("div",null,s.a.createElement("div",{align:"center"},s.a.createElement(xe,{className:t.convoheader,firstname:this.props.selectedFirstName,lastname:this.props.selectedLastName,hasSelectedOnce:this.props.hasSelectedOnce,logout:this.props.logout})),s.a.createElement("div",{className:t.messages,id:"convodisplay"},Object(oe.a)(this.props.selectedmessages).reverse().map((function(a,n){return a.sender===e.props.email?s.a.createElement("div",{className:t.messagesUser,key:n},a.message):s.a.createElement("div",{className:t.messagesOther,key:n},a.message)})))))}}]),t}(s.a.Component),we=v()(le)(be),Se=function(){return{main:{width:"70vw",marginLeft:"30%",padding:"10px",position:"fixed",zIndex:"1",bottom:0,height:"70px",boxSizing:"border-box",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid grey",background:"#ABD7D8"},chatTextBox:{width:"87%",marginLeft:"30px",marginRight:"30px",border:"1px solid grey",borderRadius:"10px",padding:"8px",background:"#FFFFFD"},buttonstyle:{height:"40px",background:"#2C7379",color:"#FFFFFD"},sendIcon:{fontSize:"35px"},iconbuttonstyles:{width:"70px",borderRadius:"10px",color:"#2C7379",marginRight:"20px"}}},ve=a(115),Ee=a.n(ve),ye=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).onFocusHandler=function(){Array.isArray(e.props.chats)&&e.props.chats.length&&e.props.setHasRead()},e.onKeyDownHandler=function(t){"Enter"===t.key&&e.sendMessage()},e.sendMessage=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.sendMessage(e.state.message),t.next=3,e.setState({message:""});case 3:case"end":return t.stop()}}),t)}))),e.handleInputChange=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({message:a.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={message:""},e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{className:e.main},s.a.createElement(Q.a,{id:"chatTextBox",className:e.chatTextBox,onChange:this.handleInputChange,value:this.state.message,onKeyDown:this.onKeyDownHandler,autoComplete:"off",onFocus:this.onFocusHandler}),s.a.createElement(J.a,{className:e.iconbuttonstyles,onClick:this.sendMessage},s.a.createElement(Ee.a,{className:e.sendIcon})))}}]),t}(s.a.Component),Ne=v()(Se)(ye),Ie=a(51),ke=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).setHasRead=function(){var t=e.getDocName(),a=e.state.chats[e.state.selectedchatIndex].messages.length;e.state.chats[e.state.selectedchatIndex].messages[a-1].sender!==e.state.email&&Ie.firestore().collection("chats").doc(t).update({hasRead:!0})},e.logout=function(){Ie.auth().signOut(),e.props.history.push("/login")},e.setSelectedFirstName=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedFirstName:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setSelectedLastName=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedLastName:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setNewRecipient=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({newRecipient:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.changeSelectedIndexofChatSelector=function(t){e.chatSelectorComponent.current.setSelectedIndex(t)},e.displayNewChatWindow=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({newChatWindow:!0});case 2:case"end":return t.stop()}}),t)}))),e.sendMessage=function(){var t=Object(p.a)(u.a.mark((function t(a){var n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=e.state.newChatWindow){t.next=18;break}return t.next=3,e.validRecipient();case 3:if(!t.sent){t.next=16;break}if(!a.replace(/\s/g,"").length){t.next=14;break}return n=e.buildNewRecipientDocName(),t.next=8,Ie.firestore().collection("chats").doc(n).set({messages:[{message:a,sender:e.state.email,timestamp:Date.now()}],users:[e.state.email,e.state.newRecipient],hasRead:!1});case 8:return e.changeSelectedIndexofChatSelector(e.findIndexOfRecipient(e.state.newRecipient)),t.next=11,e.setState({newChatWindow:!1});case 11:e.setSelectedchatIndex(e.findIndexOfRecipient(e.state.newRecipient)),e.setSelectedmessages(),e.setFirstAndLastName(e.findIndexOfRecipient(e.state.newRecipient));case 14:t.next=16;break;case 16:t.next=19;break;case 18:a.replace(/\s/g,"").length&&(s=e.getDocName(),Ie.firestore().collection("chats").doc(s).update({messages:Ie.firestore.FieldValue.arrayUnion({message:a,sender:e.state.email,timestamp:Date.now()}),hasRead:!1}).then());case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setFirstAndLastName=function(t){var a=e.state.chats.map((function(t){return t.users.filter((function(t){return t!=e.state.email}))[0]})),n=e.state.users.filter((function(e){return a.includes(e.email)}));e.setSelectedFirstName(n[t].firstname),e.setSelectedLastName(n[t].lastname)},e.findIndexOfRecipient=function(t){return e.state.chats.map((function(t){return t.users.filter((function(t){return t!=e.state.email}))[0]})).indexOf(t)},e.buildNewRecipientDocName=function(){return[e.state.email,e.state.newRecipient].sort().join(":")},e.validRecipient=Object(p.a)(u.a.mark((function t(){var a,n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ie.firestore().collection("users").get();case 2:return a=t.sent,n=a.docs.map((function(e){return e.data().email})),s=n.includes(e.state.newRecipient),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)}))),e.getDocName=function(){var t=e.state.chats[e.state.selectedchatIndex].users.filter((function(t){return t!=e.state.email}));return[e.state.email,t].sort().join(":")},e.setHasSelectedOnce=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({hasSelectedOnce:!0});case 2:case"end":return t.stop()}}),t)}))),e.setSelectedchatIndex=function(t){e.setState({selectedchatIndex:t}),e.setHasSelectedOnce(),e.setState({newChatWindow:!1})},e.setSelectedmessages=function(){e.setState({selectedmessages:e.state.chats[e.state.selectedchatIndex].messages})},e.componentWillMount=function(){Ie.auth().onAuthStateChanged(function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=6;break}return e.setState({email:a.email}),t.next=4,Ie.firestore().collection("chats").where("users","array-contains",a.email).onSnapshot(function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.docs.map((function(e){return e.data()})),t.next=3,e.setState({chats:n});case 3:!0===e.state.hasSelectedOnce&&e.setSelectedmessages();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:return t.next=6,Ie.firestore().collection("users").onSnapshot(function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.docs.map((function(e){return e.data()})),t.next=3,e.setState({users:n});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={email:"",users:[],chats:[],selectedchatIndex:0,selectedmessages:[],hasSelectedOnce:!1,newChatWindow:!0,newRecipient:"",selectedFirstName:"",selectedLastName:""},e.chatSelectorComponent=s.a.createRef(),e}return Object(x.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return this.state.email?s.a.createElement("div",{className:e.main},s.a.createElement(ie,{chats:this.state.chats,currentuser:this.state.email,setSelectedchatIndex:this.setSelectedchatIndex,setSelectedmessages:this.setSelectedmessages,changeSelectedIndexofChatSelector:this.changeSelectedIndexofChatSelector,displayNewChatWindow:this.displayNewChatWindow,setHasSelectedOnce:this.setHasSelectedOnce,users:this.state.users,ref:this.chatSelectorComponent,setSelectedFirstName:this.setSelectedFirstName,setSelectedLastName:this.setSelectedLastName,setHasRead:this.setHasRead}),s.a.createElement(we,{email:this.state.email,selectedmessages:this.state.selectedmessages,chats:this.state.chats,users:this.state.users,currentuser:this.state.email,newChatWindow:this.state.newChatWindow,setSelectedchatIndex:this.setSelectedchatIndex,setSelectedmessages:this.setSelectedmessages,changeSelectedIndexofChatSelector:this.changeSelectedIndexofChatSelector,setNewRecipient:this.setNewRecipient,selectedFirstName:this.state.selectedFirstName,selectedLastName:this.state.selectedLastName,setSelectedFirstName:this.setSelectedFirstName,setSelectedLastName:this.setSelectedLastName,hasSelectedOnce:this.state.hasSelectedOnce,logout:this.logout,setHasRead:this.setHasRead}),s.a.createElement(Ne,{sendMessage:this.sendMessage,hasSelectedOnce:this.state.hasSelectedOnce,newChatWindow:this.state.newChatWindow,setHasRead:this.setHasRead,chats:this.state.chats})):s.a.createElement("div",null)}}]),t}(s.a.Component),Oe=v()(ce)(ke),Fe=a(51);a(174),Fe.initializeApp({apiKey:"AIzaSyBF3SHP38ZZGBEGhmmiXD-N50MwE6taL7w",authDomain:"messaging-app-dc03d.firebaseapp.com",databaseURL:"https://messaging-app-dc03d.firebaseio.com",projectId:"messaging-app-dc03d",storageBucket:"messaging-app-dc03d.appspot.com",messagingSenderId:"462664318963",appId:"1:462664318963:web:abef1551f827da1da09c86",measurementId:"G-XPQFN9TSD9"});var Ce=s.a.createElement(c.a,null,s.a.createElement("div",{id:"routing-container"},s.a.createElement(o.a,{path:"/",exact:!0,component:W}),s.a.createElement(o.a,{path:"/login",component:W}),s.a.createElement(o.a,{path:"/signup",component:M}),s.a.createElement(o.a,{path:"/dashboard",component:Oe})));i.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.6a837ce0.chunk.js.map