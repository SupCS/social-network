"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[610],{1610:function(t,s,e){e.r(s),e.d(s,{default:function(){return N}});var n=e(2791),u=e(8687),i="ProfileInfo_description_block__-LXce",r=e(9776),a=e(9439),o=e(184),c=function(t){var s=(0,n.useState)(!1),e=(0,a.Z)(s,2),u=e[0],i=e[1],r=(0,n.useState)(t.status),c=(0,a.Z)(r,2),l=c[0],d=c[1];(0,n.useEffect)((function(){d(t.status)}),[t.status]);var f=function(){i(!u),u&&t.updateStatus(l)};return(0,o.jsx)("div",{children:u?(0,o.jsx)("div",{children:(0,o.jsx)("input",{autoFocus:!0,onBlur:f,onChange:function(t){d(t.target.value)},value:l})}):(0,o.jsx)("div",{children:(0,o.jsx)("span",{onDoubleClick:f,children:l||"Hello, that's a default status! Double Click to change"})})})},l=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{src:s.photos.large,alt:"profile pic"}),(0,o.jsx)(c,{status:e,updateStatus:n})]})}):(0,o.jsx)(r.Z,{})},d=e(6070),f=e(3433),p="MyPosts_posts_block__wND8E",h="MyPosts_posts__cMzyj",x="Post_item__oXNQh",j=function(t){return(0,o.jsxs)("div",{className:x,children:[(0,o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"avatar"}),t.message,(0,o.jsx)("div",{children:(0,o.jsxs)("span",{children:[t.likesCount," likes"]})})]})},v=e(6139),m=e(704),g=e(5304),P=e(1595),_=(0,g.D)(10),k=n.memo((function(t){var s=(0,f.Z)(t.posts).reverse().map((function(t){return(0,o.jsx)(j,{message:t.message,likesCount:t.likesCount})}));return(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("h3",{children:"My posts"}),(0,o.jsx)("div",{children:(0,o.jsx)(S,{onSubmit:function(s){t.addPost(s.newPostText)}})}),(0,o.jsx)("div",{className:h,children:s})]})})),S=(0,m.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,o.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(v.Z,{validate:[g.C,_],name:"newPostText",placeholder:"Your post text",component:P.gx})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Add post"})})]})})),b=(0,u.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,d.Wl)(s))}}}))(k),C=function(t){return(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,o.jsx)(b,{})]})},w=e(7689),A=e(1548);var N=(0,e(7781).qC)((0,u.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:d.et,getStatus:d.lR,updateStatus:d.Nf}),A.D)((function(t){var s=t.profile,e=t.getUserProfile,u=(t.isAuth,t.getStatus),i=t.status,r=t.updateStatus,a=t.authorizedUserId,c=(0,w.UO)().userId;return c||(c=a),(0,n.useEffect)((function(){e(c),u(c)}),[c,e,u]),(0,o.jsx)("div",{children:(0,o.jsx)(C,{profile:s,status:i,updateStatus:r})})}))},1548:function(t,s,e){e.d(s,{D:function(){return o}});var n=e(8683),u=(e(2791),e(7689)),i=e(8687),r=e(184),a=function(t){return{isAuth:t.auth.isAuth}},o=function(t){return(0,i.$j)(a)((function(s){return s.isAuth?(0,r.jsx)(t,(0,n.Z)({},s)):(0,r.jsx)(u.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=610.14134b48.chunk.js.map