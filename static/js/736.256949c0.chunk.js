"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,u,i,s=e(439),o=e(888),p=e(791),f=e(689),l=e(168),d=e(444),h=d.ZP.div(r||(r=(0,l.Z)(["\n  padding: 20px;\n"]))),g=d.ZP.ul(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  justify-content: space-between;\n  text-align: center;\n"]))),x=d.ZP.li(c||(c=(0,l.Z)(["\n  flex-basis: calc((100% - 90px) / 9);\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-size: 10px;\n  height: 185px;\n  font-weight: 700;\n"]))),v=d.ZP.img(u||(u=(0,l.Z)(["\n  height: 120px;\n"]))),w=d.ZP.span(i||(i=(0,l.Z)(["\n  color: orangered;\n"]))),Z=e(184),m=function(){var n=(0,f.UO)().id,t=(0,p.useState)(),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){(0,o.TW)(n).then(a)}),[n]),r?(0,Z.jsx)(h,{children:(0,Z.jsx)(g,{children:r.map((function(n){return(0,Z.jsxs)(x,{children:[(0,Z.jsx)(v,{src:n.profile_path?"".concat("https://image.tmdb.org/t/p/w500").concat(n.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnNH6I8IvZndxspJlJ0BDEyUNHxLvNokyWQ&usqp=CAU",alt:"",width:"80"}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("p",{children:n.name}),(0,Z.jsxs)("p",{children:["Character: ",(0,Z.jsx)(w,{children:n.character})]})]})]},n.id)}))})}):null}},888:function(n,t,e){e.d(t,{Cm:function(){return l},El:function(){return o},TW:function(){return f},sO:function(){return p},wW:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="d9a5502e7ecfc2f8fab8d65f4cbb6057",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.256949c0.chunk.js.map