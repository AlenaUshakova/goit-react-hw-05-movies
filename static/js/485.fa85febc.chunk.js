"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{940:function(n,t,r){r.d(t,{z:function(){return i}});var e,a=r(168),o=r(444).ZP.button(e||(e=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: orangered;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: 25px auto;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    scale: 1.1;\n  }\n"]))),c=r(184),i=function(n){var t=n.onClick;return(0,c.jsx)(o,{onClick:t,type:"button",children:"Load more"})}},403:function(n,t,r){r.d(t,{s:function(){return s}});var e,a=r(168),o=r(444).ZP.ul(e||(e=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  justify-content: center;\n  img {\n    border-radius: 5px;\n  }\n  li {\n    transition: box-shadow 250ms linear, transform 250ms linear;\n  }\n\n  li:hover {\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n    transform: scale(1.02);\n  }\n"]))),c=r(87),i=r(689),u=r(184),s=function(n){var t=n.movies,r=(0,i.TH)();return(0,u.jsx)(o,{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:r},children:(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.poster_path),alt:"",width:"200"})})},n.id)}))})}},888:function(n,t,r){r.d(t,{Cm:function(){return l},El:function(){return s},TW:function(){return f},sO:function(){return p},wW:function(){return u}});var e=r(861),a=r(757),o=r.n(a),c=r(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="d9a5502e7ecfc2f8fab8d65f4cbb6057",u=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i,"&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t,r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=").concat(r,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},485:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a,o=r(433),c=r(439),i=r(791),u=r(168),s=r(444),p=s.ZP.main(e||(e=(0,u.Z)(["\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),f=s.ZP.h1(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  color: orangered;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),l=r(403),d=r(888),x=r(940),g=r(184),h=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,i.useState)(1),u=(0,c.Z)(a,2),s=u[0],h=u[1],m=(0,i.useState)(null),v=(0,c.Z)(m,2),b=v[0],w=v[1];(0,i.useEffect)((function(){(0,d.wW)(s).then((function(n){e((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n.results))})),w(n.total_results)}))}),[s]);return(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{children:"Trending today "}),(0,g.jsx)(l.s,{movies:r}),b/12>=s&&(0,g.jsx)(x.z,{onClick:function(){h((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=485.fa85febc.chunk.js.map