(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{26:function(e,s,t){},29:function(e,s,t){},62:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(16),n=t.n(a),i=(t(26),t(5)),r=t(6),j=t(8),d=t(7),l=t(13),h=t(17),o=t.n(h),b=(t(29),t(18)),O=t(9),p=t.n(O),x=t(0),m=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github,this.props.data.name,this.props.data.description;return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(b.a,{type:"circle",bg:!0}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#Test",children:"INFO"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"Broadcast"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Calendar"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#Contents",children:"More INFO"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)(p.a,{bottom:!0,children:Object(x.jsx)("h1",{className:"responsive-headline",children:"Live Tree"})}),Object(x.jsxs)(p.a,{bottom:!0,duration:1200,children:[Object(x.jsxs)("h3",{children:["\ub77c\uc774\ube0c \ubc29\uc1a1 \uc1fc\ud638\uc2a4\ud2b8 ",Object(x.jsx)("br",{})," \uc774\ub807\uac8c \uc2dc\uc791\ud558\uc138\uc694 !",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsx)("p",{children:Object(x.jsxs)("a",{href:"https://open.kakao.com/o/s9mSFuQd",className:"button1",children:[Object(x.jsx)("i",{className:"fa fa-download"}),"   KaKao Talk"]})})]}),Object(x.jsx)("hr",{})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),u=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(p.a,{bottom:!0,children:Object(x.jsx)("div",{className:"twelve columns",children:Object(x.jsx)("ul",{className:"copyright",children:Object(x.jsx)("li",{children:"\xa9 Copyright  2021 NFTing, lnc. All rights reserved"})})})}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),v=(t(40),function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name,this.props.data.image,this.props.data.bio,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload;return Object(x.jsxs)("section",{id:"about",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"\ub77c\uc774\ube0c\ud2b8\ub9ac \ubc29\uc1a1\uc608\uace0"})}),Object(x.jsx)("div",{className:"divtest",children:Object(x.jsx)("iframe",{src:"https://view.shoppinglive.naver.com/replays/361129"})})]})}}]),t}(c.Component)),f=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.props.data.skillmessage,this.props.data.education.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:e.graduated})]}),Object(x.jsx)("p",{children:e.description})]},e.school)})),this.props.data.work.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.company}),Object(x.jsxs)("p",{className:"info",children:[e.title,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.years})]}),Object(x.jsx)("p",{children:e.description})]},e.company)})),this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(x.jsx)("em",{children:s.name})]},s.name)}));return Object(x.jsx)("section",{id:"resume",children:Object(x.jsx)(p.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row2 education",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"h1center",children:Object(x.jsx)("p",{children:"\ub77c\uc774\ube0c\ud2b8\ub9ac \ubc29\uc1a1\uc77c\uc815"})})}),Object(x.jsxs)("div",{className:"three columns header-col",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Monday"})}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsxs)("h6",{children:[Object(x.jsx)("span",{children:"2022. 01. 15"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"PM 17:00 - 18:00"})]})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsxs)("h6",{children:[Object(x.jsx)("span",{children:"2022. 01. 15"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"17:00 - 18:00"})]})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"17:00 - 18:00"})})]})]}),Object(x.jsxs)("div",{className:"three columns header-col",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Tuesday"})}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]})]}),Object(x.jsxs)("div",{className:"three columns header-col",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Wendsday"})}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]})]}),Object(x.jsxs)("div",{className:"three columns header-col",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Thursday"})}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]})]}),Object(x.jsxs)("div",{className:"three columns header-col",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Friday"})}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]}),Object(x.jsxs)("div",{className:"boxdetail",children:[Object(x.jsx)("h4",{children:Object(x.jsx)("sapn",{children:"\uc544\ud0a4\ud074\ub798\uc2dd"})}),Object(x.jsx)("h6",{children:Object(x.jsx)("span",{children:"2022. 01. 15"})})]})]})]})})})}}]),t}(c.Component),N=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.contactmessage,this.props.data.loggo1,this.props.data.loggo11,this.props.data.loggo2;var e="images/"+this.props.data.loggo22;this.props.data.loggo3,this.props.data.loggo4,this.props.data.loggo5;return Object(x.jsx)("section",{id:"contact",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(O.Slide,{left:!0,duration:1e3,children:Object(x.jsx)("div",{className:"seven columns2",children:Object(x.jsx)("div",{className:"cLoggo1",children:Object(x.jsx)("img",{src:e,alt:"\uc2e4\ud328"})})})}),Object(x.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(x.jsx)("aside",{className:"five columns footer-widgets",children:Object(x.jsxs)("div",{className:"widget widget_contact",children:[Object(x.jsx)("h3",{children:"\uc5d4\uc5d0\ud504\ud305 \uc8fc\uc2dd\ud68c\uc0ac NFTing Inc."}),Object(x.jsx)("h4",{children:"Address and Info"}),Object(x.jsxs)("p",{className:"address",children:[Object(x.jsx)("span",{children:"\ub300\ud45c\uc774\uc0ac : \uc804\ubcd1\uc6b1"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"\uc8fc\uc18c : \uacbd\uae30\ub3c4 \ubd80\ucc9c\uc2dc \uc18c\ud5a5\ub85c 131, 7\uce35"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"\ud1b5\uc2e0\ud310\ub9e4\uc5c5\uc2e0\uace0 : 2021 \uacbd\uae30\ubd80\ucc9c 1948"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"EMAIL : admin@nfting.co.kr"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:"\uc0ac\uc5c5\uc790 \ubc88\ud638 : 698 86 02279"}),Object(x.jsx)("br",{})]})]})})})]})})}}]),t}(c.Component),g=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.detail2,s="images/"+this.props.data.detail3;return Object(x.jsxs)("section",{id:"Contents",children:[Object(x.jsx)("div",{className:"blank"}),Object(x.jsxs)("div",{className:"allImgae",children:[Object(x.jsx)("img",{className:"sizeImage",src:e,alt:"\uc2e4\ud328"}),Object(x.jsx)("img",{className:"sizeImage",src:s,alt:"\uc2e4\ud328"})]}),Object(x.jsx)("div",{className:"blank"})]})}}]),t}(c.Component),y=t(21),w=t.n(y),k=0,C=(c.Component,function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name,this.props.data.image,this.props.data.testImage;var e="images/"+this.props.data.detail1;this.props.data.bio,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload;return Object(x.jsx)("section",{id:"Test",children:Object(x.jsxs)(p.a,{duration:1e3,children:[Object(x.jsx)("div",{className:"blank"}),Object(x.jsx)("div",{className:"allImgae",children:Object(x.jsx)("img",{className:"sizeImage",src:e})})]})})}}]),t}(c.Component)),D=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},l.a.initialize("UA-110570651-1"),l.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){o.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(m,{data:this.state.resumeData.main}),Object(x.jsx)(C,{data:this.state.resumeData.main}),Object(x.jsx)(v,{data:this.state.resumeData.main}),Object(x.jsx)(f,{data:this.state.resumeData.resume}),Object(x.jsx)(g,{data:this.state.resumeData.main}),Object(x.jsx)(N,{data:this.state.resumeData.main}),Object(x.jsx)(u,{data:this.state.resumeData.main})]})}}]),t}(c.Component),I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(x.jsx)(D,{}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.d8dcbe3c.chunk.js.map