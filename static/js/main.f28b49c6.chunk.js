(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(3),s=c.n(o),n=c(4),a=c(5),d=c(7),r=c(6),l=c(1),i=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(d.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.removeGood=function(){e.setState({selectedGood:""})},e.addGood=function(t){e.setState({selectedGood:t})},e.isGoodSelected=function(t){return e.state.selectedGood===t},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=this.isGoodSelected;return Object(i.jsxs)("main",{className:"section container",children:[t?Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeGood})]}):Object(i.jsx)("h1",{className:"title",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:u.map((function(t){return Object(i.jsxs)("tr",{"data-cy":"Good",className:c(t)?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:c(t)?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeGood,children:"-"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGood(t)},children:"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(l.Component);s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f28b49c6.chunk.js.map