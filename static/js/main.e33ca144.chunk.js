(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(3),o=s.n(c),n=s(4),a=s(5),l=s(7),r=s(6),i=s(1),d=(s(12),s(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(n.a)(this,s);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.onClick=function(t){e.state.selectedGood!==t?e.setState({selectedGood:t}):e.setState({selectedGood:""})},e.getTitle=function(){var t=e.state.selectedGood,s="".concat(t," is selected");return t?s:"No goods selected"},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("h1",{className:"goods",children:["Selected good: ".concat(this.getTitle())," ",t&&Object(d.jsx)("button",{className:"button is-success is-light",type:"button",onClick:function(){return e.setState({selectedGood:""})},children:"Clear"})]}),Object(d.jsx)("ul",{className:"goods__list",children:u.map((function(s){return Object(d.jsxs)("li",{className:"goods__item ".concat(s===t?"goods__item--selected":""," "),children:[s,Object(d.jsx)("button",{className:"button is-success is-light",type:"button",onClick:function(){return e.onClick(s)},children:s===t?"Remove":"Select"})]},s)}))})]})}}]),s}(i.Component);o.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e33ca144.chunk.js.map