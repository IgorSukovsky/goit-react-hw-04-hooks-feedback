(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={list:"Statistics_list__2DPUs",text:"Statistics_text__27UXF"}},,,function(e,t,n){e.exports={boxBtn:"FeedbackOptions_boxBtn__3cNe1",button:"FeedbackOptions_button__vAVF0"}},,function(e,t,n){e.exports={title:"Notification_title__31Ynp"}},function(e,t,n){e.exports={title:"Section_title__tUvKx"}},function(e,t,n){e.exports={conteiner:"App_conteiner__DfiDa"}},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),i=n.n(c),r=n(4),o=n(6),l=n.n(o),u=n(0),b=function(e){var t=e.options,n=e.onFeedback;return Object(u.jsx)("div",{className:l.a.boxBtn,children:t.map((function(e,t){return Object(u.jsx)("button",{className:l.a.button,type:"button",onClick:function(){return n(e)},children:e},t)}))})},d=n(8),j=n.n(d),x=function(e){var t=e.message;return Object(u.jsx)("h3",{className:j.a.title,children:t})},h=n(2),O=n.n(h),f=n(9),m=n.n(f),p=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:m.a.title,children:t}),n]})};p.Prototype={title:O.a.string.isRequired,children:O.a.element.isRequired};var _=p,v=n(3),k=n.n(v),N=function(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,c=e.result;return Object(u.jsxs)("ul",{className:k.a.list,children:[Object(u.jsxs)("li",{className:k.a.text,children:["Good:",t]}),Object(u.jsxs)("li",{className:k.a.text,children:["Neutral:",n]}),Object(u.jsxs)("li",{className:k.a.text,children:["Bad:",a]}),Object(u.jsxs)("li",{className:k.a.text,children:["Total:",s]}),Object(u.jsxs)("li",{className:k.a.text,children:["Result:",c,"%"]})]})};N.protoType={good:O.a.number.isRequired,neutral:O.a.number.isRequired,bad:O.a.number.isRequired,total:O.a.number.isRequired,result:O.a.number.isRequired};var g=N,R=n(10),S=n.n(R),q=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),i=Object(r.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)(0),j=Object(r.a)(d,2),h=j[0],O=j[1],f=n+o+h,m=function(){var e=f?100*n/f:0;return Math.round(e)}();return Object(u.jsxs)("div",{className:S.a.conteiner,children:[Object(u.jsx)(_,{title:"Please leave feedback",children:Object(u.jsx)(b,{options:["good","neutral","bad"],onFeedback:function(e){var t=function(e){return e+1};switch(e){case"good":s(t);break;case"neutral":l(t);break;case"bad":O(t)}}})}),Object(u.jsx)(_,{title:"Statistics",children:f?Object(u.jsx)(g,{good:n,neutral:o,bad:h,total:f,result:m}):Object(u.jsx)(x,{message:"No feedback given"})})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.25ea77fb.chunk.js.map