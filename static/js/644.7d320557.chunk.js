"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[644],{940:function(n,t,e){e.d(t,{z:function(){return c}});var r,a=e(168),o=e(444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: orangered;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: 25px auto;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    scale: 1.1;\n  }\n"]))),i=e(184),c=function(n){var t=n.onClick;return(0,i.jsx)(o,{onClick:t,type:"button",children:"Load more"})}},403:function(n,t,e){e.d(t,{s:function(){return s}});var r,a=e(168),o=e(444).ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  justify-content: center;\n  img {\n    border-radius: 5px;\n  }\n  li {\n    transition: box-shadow 250ms linear, transform 250ms linear;\n  }\n\n  li:hover {\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n    transform: scale(1.02);\n  }\n"]))),i=e(87),c=e(689),u=e(184),s=function(n){var t=n.movies,e=(0,c.TH)();return(0,u.jsx)(o,{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.poster_path),alt:"",width:"200"})})},n.id)}))})}},888:function(n,t,e){e.d(t,{Cm:function(){return l},El:function(){return s},TW:function(){return f},sO:function(){return p},wW:function(){return u}});var r=e(861),a=e(757),o=e.n(a),i=e(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d9a5502e7ecfc2f8fab8d65f4cbb6057",u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},644:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,o,i,c=e(433),u=e(439),s=e(791),p=e(87),f=e(168),l=e(444),d=l.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n"]))),x=l.ZP.input(a||(a=(0,f.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  border: 1px solid black;\n\n  width: auto;\n  font: inherit;\n"]))),g=l.ZP.button(o||(o=(0,f.Z)(["\n  margin-left: 10px;\n  padding: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  width: 80px;\n  height: auto;\n  background-color: transparent;\n  color: black;\n  cursor: pointer;\n  font: inherit;\n  font-weight: 500;\n  :hover {\n    color: white;\n    background-color: orangered;\n    border-color: orangered;\n  }\n"]))),h=e(184),m=function(n){var t=n.onSubmit;return(0,h.jsx)("div",{children:(0,h.jsxs)(d,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=n.target.elements.query;t(e.value),n.target.reset()},children:[(0,h.jsx)("label",{children:(0,h.jsx)(x,{type:"text",name:"query"})}),(0,h.jsx)(g,{type:"submit",children:"Search"})]})})},b=e(888),v=e(403),w=l.ZP.main(i||(i=(0,f.Z)(["\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),Z=e(940),y=function(){var n,t=(0,s.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],o=(0,s.useState)(1),i=(0,u.Z)(o,2),f=i[0],l=i[1],d=(0,s.useState)(null),x=(0,u.Z)(d,2),g=x[0],y=x[1],k=(0,p.lr)(),j=(0,u.Z)(k,2),_=j[0],S=j[1],C=null!==(n=_.get("query"))&&void 0!==n?n:"";if((0,s.useEffect)((function(){""!==C&&(0,b.El)(C,f).then((function(n){a((function(t){return[].concat((0,c.Z)(t),(0,c.Z)(n.results))})),y(n.total_results)}))}),[C,f]),r){return(0,h.jsxs)(w,{children:[(0,h.jsx)(m,{onSubmit:function(n){l(1),a([]),S(""!==n?{query:n}:{})}}),C&&(0,h.jsx)(v.s,{movies:r}),g/12>=f&&(0,h.jsx)(Z.z,{onClick:function(){l((function(n){return n+1}))}})]})}}}}]);
//# sourceMappingURL=644.7d320557.chunk.js.map