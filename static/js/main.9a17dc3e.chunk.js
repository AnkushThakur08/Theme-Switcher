(this["webpackJsonpfive-themeswitcher"]=this["webpackJsonpfive-themeswitcher"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(3),i=n.n(o),l=(n(9),Object(c.createContext)(["light",function(){}])),s=n(4),h=n(0),d=function(){var e=Object(c.useContext)(l),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(h.jsx)("div",{onClick:function(){r("light"===n?"dark":"light")},children:Object(h.jsx)("span",{children:"light"===n?"Turn OFF the lights":"Turns ON the Light"})})},a=function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Theme Toggler"}),Object(h.jsx)(d,{})]})},b={light:{textColor:"black",backgroundColor:"white",border:"2px solid black"},dark:{textColor:"white",backgroundColor:"#333",border:"2px dashed black"}},j=function(){var e=Object(c.useContext)(l)[0],t=b[e];return Object(h.jsxs)("div",{style:{backgroundColor:"".concat(t.backgroundColor),color:"".concat(t.textColor),padding:"1rem",textAlign:"center"},children:[Object(h.jsx)("h1",{children:"ThemeToggler using Context API"}),Object(h.jsx)("p",{children:"This is a Nice Paragraph"}),Object(h.jsx)("button",{style:{backgroundColor:"#26ae60",padding:"10px 150px",fontSize:"20px",color:"#FFF",border:"".concat(t.border)},children:"Click Me"})]})},u=function(){var e=Object(c.useState)("light");return Object(h.jsx)(l.Provider,{value:e,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(a,{}),Object(h.jsx)(j,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9a17dc3e.chunk.js.map