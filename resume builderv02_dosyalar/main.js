(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(10),l=s.n(n),i=s(9),r=s(0),j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!0),l=Object(i.a)(n,2),j=l[0],h=l[1],d=function(e){e.preventDefault(),h(!j)};return j?Object(r.jsxs)("section",{className:"section",children:[Object(r.jsx)("h2",{className:"title",children:"Personal Info"}),Object(r.jsxs)("form",{onSubmit:d,class:"box",children:[Object(r.jsxs)("div",{class:"field",children:[Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Name"}),Object(r.jsx)("div",{class:"control",children:Object(r.jsx)("input",{onChange:function(e){return a(e.target.value)},value:s,type:"text",id:"nameInput",class:"input"})})]}),Object(r.jsx)("button",{type:"submit",class:"button is-primary",children:"Update"})]})]}):Object(r.jsxs)("section",{class:"section",children:[Object(r.jsx)("h2",{class:"title",children:"Personal Info"}),Object(r.jsxs)("div",{class:"card",children:[Object(r.jsx)("div",{class:"card-content",children:Object(r.jsx)("h3",{class:"title",children:s})}),Object(r.jsx)("footer",{class:"card-footer",children:Object(r.jsx)("p",{class:"card-footer-item",children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:d,class:"button is-primary",children:"Update"})})})})]})]})},h=s(3),d=s(4),b=s(5),o=s(2),u=s(7),O=s(6),x=function(e){Object(u.a)(s,e);var t=Object(O.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={value:"",degree:"",selfTaught:"",editMode:!0},c.handleChange=c.handleChange.bind(Object(o.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(o.a)(c)),c}return Object(b.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({editMode:!this.state.editMode})}},{key:"render",value:function(){return this.state.editMode?Object(r.jsxs)("section",{className:"section",children:[Object(r.jsx)("h2",{class:"title",children:"Education"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,class:"box",children:[Object(r.jsx)("div",{class:"field",children:Object(r.jsxs)("div",{class:"control",children:[Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"University"}),Object(r.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange,class:"input",name:"value"}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Degree"}),Object(r.jsx)("input",{type:"text",value:this.state.degree,onChange:this.handleChange,class:"input",name:"degree"}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Self taught programs"}),Object(r.jsx)("input",{type:"text",value:this.state.selfTaught,onChange:this.handleChange,class:"input",name:"selfTaught"})]})}),Object(r.jsx)("button",{type:"submit",class:"button is-primary",children:"Update"})]})]}):Object(r.jsxs)("section",{class:"section",children:[Object(r.jsx)("h2",{class:"title",children:"Education"}),Object(r.jsxs)("div",{class:"card",children:[Object(r.jsxs)("div",{class:"card-content",children:[Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"University"}),Object(r.jsx)("p",{children:this.state.value}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Degree"}),Object(r.jsx)("p",{children:this.state.degree}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Self taught programs"}),Object(r.jsx)("p",{children:this.state.selfTaught})]}),Object(r.jsx)("footer",{class:"card-footer",children:Object(r.jsx)("p",{class:"card-footer-item",children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:this.handleSubmit,class:"button is-primary",children:"Update"})})})})]})]})}}]),s}(a.a.Component),p=function(e){Object(u.a)(s,e);var t=Object(O.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={editMode:!0,name:"",url:"",repo:"",description:"",libraries:""},c.handleChange=c.handleChange.bind(Object(o.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(o.a)(c)),c}return Object(b.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({editMode:!this.state.editMode})}},{key:"render",value:function(){return this.state.editMode?Object(r.jsxs)("section",{class:"section",children:[Object(r.jsx)("h2",{class:"title",children:"Projects"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,class:"box",children:[Object(r.jsx)("div",{class:"field",children:Object(r.jsxs)("div",{class:"control",children:[Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Name"}),Object(r.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,class:"input",name:"name"}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"url"}),Object(r.jsx)("input",{type:"text",value:this.state.url,onChange:this.handleChange,class:"input",name:"url"}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"description"}),Object(r.jsx)("input",{type:"text",value:this.state.description,onChange:this.handleChange,class:"input",name:"description"})]})}),Object(r.jsx)("button",{type:"submit",class:"button is-primary",children:"Update"})]})]}):Object(r.jsxs)("section",{class:"section",children:[Object(r.jsx)("h2",{class:"title",children:"Education"}),Object(r.jsxs)("div",{class:"card",children:[Object(r.jsxs)("div",{class:"card-content",children:[Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"Name"}),Object(r.jsx)("p",{children:this.state.name}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"url"}),Object(r.jsx)("a",{href:this.state.url,children:this.state.url}),Object(r.jsx)("label",{htmlFor:"nameInput",class:"label",children:"description"}),Object(r.jsx)("p",{children:this.state.description})]}),Object(r.jsx)("footer",{class:"card-footer",children:Object(r.jsx)("p",{class:"card-footer-item",children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:this.handleSubmit,class:"button is-primary",children:"Update"})})})})]})]})}}]),s}(a.a.Component),m=(s(16),s(17),function(){return Object(r.jsxs)("div",{class:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)(x,{}),Object(r.jsx)(p,{})]})});l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef86351f.chunk.js.map