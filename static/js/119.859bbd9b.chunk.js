"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[119],{2119:function(A,n,e){e.r(n),e.d(n,{default:function(){return R}});var r=e(5671),t=e(3144),o=e(136),u=e(516),i=e(2791),a=e(8687),c=e(2338),s=e(5987),l=e(9439),p=e(3433),f="Paginator_paginator__Z1ue+",g="Paginator_pageNumber__giUmL",h="Paginator_inputPage__fjOuH",d="Paginator_selectedPage__oiAAt",x=e(184),M=function(A){var n=A.currentPage,e=A.onPageChanged,r=A.totalUsersCount,t=A.pageSize,o=Math.ceil(r/t),u=(0,p.Z)(Array(o)).map((function(A,n){return n+1})),a=n,c=a-5<1?1:a-5,s=a+5>o?o:a+5,M=u.slice(c-1,s),k=(0,i.useState)(n),B=(0,l.Z)(k,2),v=B[0],m=B[1];return(0,x.jsxs)("div",{className:f,children:[n>1&&(0,x.jsx)("button",{onClick:function(){return e(1)},children:"<<"}),n>1&&(0,x.jsx)("button",{onClick:function(){return e(a-1)},children:"<"}),M.map((function(A){return(0,x.jsx)("span",{className:"".concat(n===A?d:""," ").concat(g),onClick:function(){return e(A)},children:A},A)})),s<o&&(0,x.jsx)("button",{onClick:function(){return e(a+1)},children:">"}),n<o&&(0,x.jsx)("button",{onClick:function(){return e(o)},children:">>"}),(0,x.jsx)("input",{className:h,type:"number",value:v,onChange:function(A){m(A.target.value)},onKeyDown:function(A){if("Enter"===A.key){var n=Math.max(1,Math.min(o,Number(v)));e(n)}},style:{width:"50px"}})]})},k="users_userPhoto__1Ic84",B=e(1087),v=function(A){var n=A.user,e=A.followingInProgress,r=A.unfollow,t=A.follow;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("span",{children:[(0,x.jsx)("div",{children:(0,x.jsx)(B.OL,{to:"/profile/"+n.id,children:(0,x.jsx)("img",{src:null!=n.photos.small?n.photos.small:"data:image/png;base64,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",className:k,alt:"user avatar"})})}),(0,x.jsx)("div",{children:n.followed?(0,x.jsx)("button",{disabled:e.some((function(A){return A===n.id})),onClick:function(){r(n.id)},children:"Unfollow"}):(0,x.jsx)("button",{disabled:e.some((function(A){return A===n.id})),onClick:function(){t(n.id)},children:"Follow"})})]}),(0,x.jsxs)("span",{children:[(0,x.jsxs)("span",{children:[(0,x.jsx)("div",{children:n.name}),(0,x.jsx)("div",{children:n.status})]}),(0,x.jsxs)("span",{children:[(0,x.jsx)("div",{children:"user.location.country"}),(0,x.jsx)("div",{children:"user.location.city"})]})]})]})},m=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],I=function(A){var n=A.currentPage,e=A.totalUsersCount,r=A.pageSize,t=A.onPageChanged,o=A.users,u=(0,s.Z)(A,m);return(0,x.jsxs)("div",{children:[(0,x.jsx)(M,{currentPage:n,onPageChanged:t,totalUsersCount:e,pageSize:r}),(0,x.jsx)("div",{children:o.map((function(A){return(0,x.jsx)(v,{user:A,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow},A.id)}))})]})},C=e(9776),w=e(7781),j="NOT_FOUND";var Q=function(A,n){return A===n};function D(A,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,t=void 0===r?Q:r,o=e.maxSize,u=void 0===o?1:o,i=e.resultEqualityCheck,a=function(A){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,t=0;t<r;t++)if(!A(n[t],e[t]))return!1;return!0}}(t),c=1===u?function(A){var n;return{get:function(e){return n&&A(n.key,e)?n.value:j},put:function(A,e){n={key:A,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(A,n){var e=[];function r(A){var r=e.findIndex((function(e){return n(A,e.key)}));if(r>-1){var t=e[r];return r>0&&(e.splice(r,1),e.unshift(t)),t.value}return j}return{get:r,put:function(n,t){r(n)===j&&(e.unshift({key:n,value:t}),e.length>A&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,a);function s(){var n=c.get(arguments);if(n===j){if(n=A.apply(null,arguments),i){var e=c.getEntries().find((function(A){return i(A.value,n)}));e&&(n=e.value)}c.put(arguments,n)}return n}return s.clearCache=function(){return c.clear()},s}function S(A){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];var o,u=0,i={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(i=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=i.memoizeOptions,s=void 0===c?e:c,l=Array.isArray(s)?s:[s],p=function(A){var n=Array.isArray(A[0])?A[0]:A;if(!n.every((function(A){return"function"===typeof A}))){var e=n.map((function(A){return"function"===typeof A?"function "+(A.name||"unnamed")+"()":typeof A})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}(r),f=A.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(l)),g=A((function(){for(var A=[],n=p.length,e=0;e<n;e++)A.push(p[e].apply(null,arguments));return o=f.apply(null,A)}));return Object.assign(g,{resultFunc:a,memoizedResultFunc:f,dependencies:p,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g}}var U=S(D),H=U((function(A){return A.usersPage.users}),(function(A){return A.filter((function(A){return!0}))})),E=function(A){return A.usersPage.pageSize},G=function(A){return A.usersPage.totalUsersCount},y=function(A){return A.usersPage.currentPage},N=function(A){return A.usersPage.isFetching},Z=function(A){return A.usersPage.followingInProgress},K=function(A){(0,o.Z)(e,A);var n=(0,u.Z)(e);function e(){var A;(0,r.Z)(this,e);for(var t=arguments.length,o=new Array(t),u=0;u<t;u++)o[u]=arguments[u];return(A=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var e=A.props.pageSize;A.props.requestUsers(n,e)},A}return(0,t.Z)(e,[{key:"componentDidMount",value:function(){var A=this.props,n=A.currentPage,e=A.pageSize;this.props.requestUsers(n,e)}},{key:"render",value:function(){return(0,x.jsx)(x.Fragment,{children:this.props.isFetching?(0,x.jsx)(C.Z,{}):(0,x.jsx)(I,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),e}(i.Component),R=(0,w.qC)((0,a.$j)((function(A){return{users:H(A),pageSize:E(A),totalUsersCount:G(A),currentPage:y(A),isFetching:N(A),followingInProgress:Z(A)}}),{follow:c.ZN,unfollow:c.fv,setCurrentPage:c.D4,toggleFollowingProgress:c.ZH,requestUsers:c.D7}))(K)}}]);
//# sourceMappingURL=119.859bbd9b.chunk.js.map