(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var o=c(3),s=c.n(o),n=c(4),a=c(5),r=c(7),l=c(6),i=c(1),d=(c(12),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.onClick=function(t){e.state.selectedGood!==t?e.setState({selectedGood:t}):e.setState({selectedGood:""})},e.getTitle=function(){var t=e.state.selectedGood,c="".concat(t," is selected");return t?c:"No goods selected"},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{className:"goods",children:["Selected good: ".concat(this.getTitle())," ",t&&Object(d.jsx)("button",{type:"button",onClick:function(){return e.setState({selectedGood:""})},children:"Clear"})]}),u.length,Object(d.jsx)("ul",{className:"goods__list",children:u.map((function(c){return Object(d.jsxs)("li",{className:"goods__item ".concat(c===t?"goods__item--selected":""),children:[c," ",Object(d.jsx)("button",{type:"button",onClick:function(){return e.onClick(c)},children:c===t?"Remove":"Select"})]})}))})]})}}]),c}(i.Component);s.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9859a1a4.chunk.js.map