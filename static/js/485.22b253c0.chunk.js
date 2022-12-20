"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{940:function(n,t,e){e.d(t,{z:function(){return i}});var r,a=e(168),o=e(444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: orangered;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: 25px auto;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    scale: 1.1;\n  }\n"]))),c=e(184),i=function(n){var t=n.onClick;return(0,c.jsx)(o,{onClick:t,type:"button",children:"Load more"})}},403:function(n,t,e){e.d(t,{s:function(){return s}});var r,a=e(168),o=e(444).ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  justify-content: center;\n  img {\n    border-radius: 5px;\n  }\n  li {\n    transition: box-shadow 250ms linear, transform 250ms linear;\n  }\n\n  li:hover {\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n    transform: scale(1.02);\n  }\n"]))),c=e(87),i=e(689),u=e(184),s=function(n){var t=n.movies,e=(0,i.TH)();return(0,u.jsx)(o,{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.poster_path),alt:"",width:"200"})})},n.id)}))})}},888:function(n,t,e){e.d(t,{Cm:function(){return l},El:function(){return s},TW:function(){return f},sO:function(){return p},wW:function(){return u}});var r=e(861),a=e(757),o=e.n(a),c=e(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="d9a5502e7ecfc2f8fab8d65f4cbb6057",u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,o=e(439),c=e(791),i=e(168),u=e(444),s=u.ZP.main(r||(r=(0,i.Z)(["\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),p=u.ZP.h1(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  color: orangered;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),f=e(403),l=e(888),d=e(940),x=e(184),g=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(1),i=(0,o.Z)(a,2),u=i[0],g=i[1],h=(0,c.useState)(null),m=(0,o.Z)(h,2),v=m[0],b=m[1];(0,c.useEffect)((function(){(0,l.wW)(u).then((function(n){r(n.results),b(n.total_results)}))}),[u]);return(0,x.jsxs)(s,{children:[(0,x.jsx)(p,{children:"Trending today "}),(0,x.jsx)(f.s,{movies:e}),v/12>=u&&(0,x.jsx)(d.z,{onClick:function(){g((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=485.22b253c0.chunk.js.map