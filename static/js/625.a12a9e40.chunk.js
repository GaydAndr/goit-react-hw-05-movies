"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[625],{7625:function(n,r,e){e.r(r),e.d(r,{default:function(){return _}});var t,a,i,c,o,u,s=e(885),p=e(2791),f=e(6871),l=e(168),d=e(501),h=e(6444),v=h.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),x=(0,h.ZP)(d.OL)(a||(a=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  background-color: #fff;\n\n  &.active {\n    color: #fff;\n    background-color: blue;\n  }\n"]))),m=e(3204),b=h.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  background: #fff;\n"]))),g=h.ZP.div(c||(c=(0,l.Z)(["\n  padding: 20px;\n"]))),w=h.ZP.img(o||(o=(0,l.Z)(["\n  width: 300px;\n"]))),j=e(184),k=function(n){var r=n.movie,e=r.poster_path,t=r.title,a=r.name,i=r.release_date,c=r.vote_average,o=r.overview,u=r.genres;return(0,j.jsxs)(b,{children:[(0,j.jsx)("div",{children:(0,j.jsx)(w,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif",alt:t||a})}),(0,j.jsxs)(g,{children:[(0,j.jsxs)("h2",{children:[t||a," (",i.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["Use Score: ",Math.round(c/10*100),"%"]}),(0,j.jsx)("h3",{children:"Overwiew"}),(0,j.jsx)("p",{children:o}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:u.map((function(n){return n.name})).join(" ,")})]})]})},Z=(0,h.ZP)(d.OL)(u||(u=(0,l.Z)(["\n  margin-bottom: 20px;\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  background-color: blue;\n  color: #fff;\n  transition: all 250 linear;\n  border-radius: 4px;\n  font-size: 30px;\n  &:hover {\n    color: blue;\n    background-color: #fff;\n    border: 1px solid blue;\n  }\n"]))),y=function(){var n,r,e=(0,f.TH)();return(0,j.jsx)(Z,{to:null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",type:"button",children:"\u21d0"})},_=function(){var n=(0,f.TH)(),r=(0,p.useState)(null),e=(0,s.Z)(r,2),t=e[0],a=e[1],i=(0,f.UO)().movieId;return(0,p.useEffect)((function(){(0,m.DD)(i).then((function(n){var r=n.data;a(r)}))}),[i]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{}),t&&(0,j.jsx)(k,{movie:t}),(0,j.jsxs)(v,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(x,{state:n.state,to:"cast",className:function(n){return n.isActive?"active":""},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(x,{state:n.state,to:"reviews",className:function(n){return n.isActive?"active":""},children:"Review"})})]}),(0,j.jsx)(f.j3,{})]})}},3204:function(n,r,e){e.d(r,{Bt:function(){return d},DD:function(){return f},bI:function(){return p},d5:function(){return l},hP:function(){return s}});var t=e(5861),a=e(7757),i=e.n(a),c=e(4569),o=e.n(c),u="7a4cd4317772102a9b88ef6a54b71590";o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o().get("/trending/all/day",{params:{api_key:u}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o().get("/search/movie",{params:{api_key:u,query:r}}));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o().get("/movie/".concat(r),{params:{api_key:u}}));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o().get("/movie/".concat(r,"/credits"),{params:{api_key:u}}));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o().get("/movie/".concat(r,"/reviews"),{params:{api_key:u}}));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=625.a12a9e40.chunk.js.map