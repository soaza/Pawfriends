(this.webpackJsonppawfriends=this.webpackJsonppawfriends||[]).push([[0],{104:function(e,t,n){},188:function(e,t){},206:function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=(n(104),n(46)),a=n(0),i=n(25),j=n(208),o=n(215),l=(n(61),n(4)),b=j.a.Header,d={Menu:{marginRight:"10px"}},x=function(e){var t=e.page;return Object(l.jsx)(j.a,{children:Object(l.jsxs)(b,{style:{width:"100%"},children:[Object(l.jsx)("div",{className:"logo"}),Object(l.jsxs)(o.a,{style:{display:"flex",justifyContent:"center"},theme:"dark",mode:"horizontal",selectedKeys:[t],children:[Object(l.jsxs)(o.a.Item,{style:d.Menu,children:[Object(l.jsx)("strong",{children:"Our Dogs"}),Object(l.jsx)(s.b,{to:"/dogs"})]},"/dogs"),Object(l.jsxs)(o.a.Item,{style:d.Menu,children:[Object(l.jsx)("strong",{children:"Our Exco"}),Object(l.jsx)(s.b,{to:"/exco"})]},"/exco"),Object(l.jsxs)(o.a.Item,{style:{marginRight:"10px",color:"black",background:"white"},children:[Object(l.jsx)("strong",{children:"NUS Pawfriends "}),Object(l.jsx)("img",{color:"white",height:"16px",width:"16px",src:"/Pawfriends/paw.png"}),Object(l.jsx)(s.b,{to:"/"})]},"/mainpage"),Object(l.jsxs)(o.a.Item,{style:d.Menu,children:[Object(l.jsx)("strong",{children:"What We Do"}),Object(l.jsx)(s.b,{to:"/activity"})]},"/activity"),Object(l.jsxs)(o.a.Item,{style:d.Menu,children:[Object(l.jsx)("strong",{children:"Contact Us"}),Object(l.jsx)(s.b,{to:"/contact"})]},"/contact")]})]})})},h=n(16),u=n.n(h),p=n(27),O=n(55),g=n(72),f=n(39),m=n(209),y=n(71),v=n(216),w=n(217),F=n(210),S=n(211),k=n(212),_=F.a.Title,I=[1,2,3,4],z=function(e){var t=e.dog,n=e.images,c=e.modal,r=e.showModal;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S.a,{width:"75%",footer:!1,onCancel:function(){return r(!1)},visible:c,children:Object(l.jsxs)(g.a,{justify:"space-between",children:[Object(l.jsxs)(f.a,{xs:24,lg:10,span:12,children:[Object(l.jsx)(k.a,{autoplay:!0,autoplaySpeed:3e3,dotPosition:"top",children:I.map((function(e){var t=n.filter((function(t){return t.gallery_position==e}))[0];return!t||Object(l.jsx)("img",{height:"700px","object-fit":"cover",src:t.image_url})}))}),0==n.length&&Object(l.jsx)(y.a,{description:!1,imageStyle:{height:"500px",width:"100%"}})]}),Object(l.jsxs)(f.a,{lg:12,span:24,children:[Object(l.jsx)(_,{style:{textAlign:"center",fontSize:60,fontFamily:"Cabin,sans-serif"},children:t.dog_name}),Object(l.jsxs)(g.a,{children:[Object(l.jsx)(f.a,{span:24,lg:12,children:Object(l.jsxs)("p",{style:{textAlign:"center",fontSize:60,color:"Male"===t.dog_gender?"#1790FF":"pink"},children:[t.dog_gender,Object(l.jsx)("br",{}),"Male"===t.dog_gender?Object(l.jsx)(v.a,{}):Object(l.jsx)(w.a,{})]})}),Object(l.jsx)(f.a,{span:24,lg:12,children:Object(l.jsxs)("p",{style:{textAlign:"center",fontSize:30},children:["I am",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{style:{fontSize:60},children:[" ",t.dog_age," "]}),Object(l.jsx)("br",{}),"years old!"]})})]}),Object(l.jsx)(m.a,{style:{borderStyle:"solid",borderWidth:"5px",borderRadius:"10px"},children:Object(l.jsx)("p",{style:{fontFamily:"Cabin,sans-serif",textAlign:"center",fontSize:24},children:t.dog_characteristics})})]})]})})})},M=m.a.Meta,T=function(e){var t,n=e.dog,c=e.images,r=null===c||void 0===c||null===(t=c.filter((function(e){return 0==e.gallery_position}))[0])||void 0===t?void 0:t.image_url,s=Object(a.useState)(!1),i=Object(O.a)(s,2),j=i[0],o=i[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(f.a,{span:24,lg:8,children:[Object(l.jsx)(z,{images:c,dog:n,modal:j,showModal:o}),Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(m.a,{hoverable:!0,onClick:function(e){o(!0)},style:{width:"80%",marginBottom:"20px"},cover:r?Object(l.jsx)("img",{style:{objectFit:"cover"},height:"400px",src:r}):Object(l.jsx)(y.a,{style:{width:"100%"}}),children:Object(l.jsx)(M,{title:n.dog_name,description:"Good boi"})})})]})})},U=function(e){var t=e.dogs,n=e.dogImages;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(f.a,{span:20,children:Object(l.jsx)(g.a,{gutter:[20,20],children:t.map((function(e){var t=n.filter((function(t){return t.dog_id===e.dog_id}));return Object(l.jsx)(T,{dog:e,images:t||[]})}))})})})})},C=n(41),P=n.n(C),A=n(135),E="http://localhost:3001";function D(e,t){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(E,"/").concat(t.endpoint),t.params&&Object.keys(t.params).forEach((function(e,n){var r=t.params?t.params:{};c+="".concat(0===n?"?":"&").concat(e,"=").concat(r[e])})),r=Object(A.a)({"Content-Type":"application/json"},t.headers),e.prev=3,e.abrupt("return",fetch(c,{method:n,headers:r,body:t.data?JSON.stringify(t.data):null}).then((function(e){if(e.ok)return e.json();throw Error})));case 7:e.prev=7,e.t0=e.catch(3),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}function B(e){return H.apply(this,arguments)}function H(){return(H=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={endpoint:"dogs"},e.next=3,B(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return G.apply(this,arguments)}function G(){return(G=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={endpoint:"mainpage"},e.next=3,B(t);case 3:return n=e.sent,e.abrupt("return",n.pawfriends_description);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=F.a.Text,K={position:"relative",textAlign:"center",color:"white",marginBottom:"64px"},L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},Y=function(e){var t=e.bannerUrl,n=e.title;return Object(l.jsxs)("div",{style:K,children:[Object(l.jsx)("div",{style:L,children:Object(l.jsx)(q,{style:{fontSize:"60px",color:"white"},children:Object(l.jsx)("b",{children:n})})}),Object(l.jsx)("img",{height:"200px",style:{objectFit:"cover"},width:"100%",src:"/Pawfriends"+"/BannerImages/".concat(t,".jpeg")})]})},Q=a.useEffect,V=a.useState,X=function(){var e=V(),t=Object(O.a)(e,2),n=t[0],c=t[1],r=V([]),s=Object(O.a)(r,2),a=s[0],i=s[1];return Q((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,c(t.dogs),i(t.images),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{title:"Our Dogs",bannerUrl:"dogs"}),n&&a.length>0&&Object(l.jsx)(P.a,{children:Object(l.jsx)(U,{dogs:n,dogImages:a})})]})},Z=m.a.Meta,$=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(f.a,{span:24,lg:8,children:Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(m.a,{hoverable:!0,style:{width:300},cover:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://pyxis.nymag.com/v1/imgs/310/524/bfe62024411af0a9d9cd23447121704d7a-11-spongebob-squarepants.2x.rhorizontal.w700.jpg"}),Object(l.jsx)("div",{style:{height:"50px",backgroundColor:"black"},children:Object(l.jsx)("p",{style:{color:"white",textAlign:"center",fontSize:"30px",marginBottom:"0px"},children:Object(l.jsx)("b",{children:" Project Director"})})})]}),children:Object(l.jsx)(Z,{title:"Exco Name",description:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"Favourite Dog: <Insert Text Here>"}),Object(l.jsx)("p",{children:"Year: <Insert Text Here>"}),Object(l.jsxs)("p",{children:["Tell me about yourself:",Object(l.jsx)("br",{}),"<Insert Text Here>"]})]})})})})})})},ee=[1,1,1,1,1,1],te=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{title:"Our Exco",bannerUrl:"exco"}),Object(l.jsx)(P.a,{children:Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(f.a,{span:20,children:Object(l.jsx)(g.a,{gutter:[20,20],children:ee.map((function(e){return Object(l.jsx)($,{})}))})})})}),Object(l.jsx)("div",{style:{height:"50px"}})]})},ne=n(213),ce=n(161),re=F.a.Title,se=[1,1,1,1,1,1,1,1,1,1],ae=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g.a,{gutter:[20,20],justify:"center",children:Object(l.jsx)(f.a,{span:18,children:se.map((function(e){return Object(l.jsx)(ce,{bottom:!0,children:Object(l.jsxs)(m.a,{style:{marginTop:"20px",borderStyle:"solid",borderWidth:"5px",minHeight:"200px",borderRadius:"10px",width:"100%"},children:[Object(l.jsx)(re,{level:3,children:"21/5/21: Activity Details"}),Object(l.jsx)(ne.a,{avatar:!0,paragraph:{rows:4}})]})})}))})}),Object(l.jsx)("div",{style:{height:"400px"}})]})},ie=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{title:"What we do",bannerUrl:"activity-page"}),Object(l.jsx)(P.a,{children:Object(l.jsx)(ae,{})})]})},je=n(214),oe=n(130),le=n.n(oe),be=F.a.Title,de=a.useEffect,xe=a.useState,he=function(){var e=xe(),t=Object(O.a)(e,2),n=t[0],c=t[1];return de((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.a,{justify:"space-between",children:[Object(l.jsxs)(f.a,{span:12,children:[Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(je.a,{size:120,icon:Object(l.jsx)("img",{src:"/Pawfriends/Dogs/Lucky_2.jpg"})})}),Object(l.jsx)(be,{style:{textAlign:"center"},children:"NUS Pawfriends"}),n&&Object(l.jsx)("p",{style:{fontSize:16},children:le()(n)})]}),Object(l.jsx)(f.a,{span:10,children:Object(l.jsx)("video",{controls:!0,style:{height:400,width:600},src:"/Pawfriends/MainPage/video.mp4"})})]})})},ue=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{title:"NUS Pawfriends",bannerUrl:"main-page"}),Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)(f.a,{span:20,children:Object(l.jsx)(P.a,{children:Object(l.jsx)(he,{})})})})]})},pe=n(218),Oe=n(219),ge=(F.a.Title,function(){return Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsxs)(f.a,{span:18,children:[Object(l.jsx)(g.a,{justify:"center",children:Object(l.jsx)("h2",{children:"Contact Us through Facebook or Instagram!"})}),Object(l.jsxs)(g.a,{justify:"center",children:[Object(l.jsx)(pe.a,{style:{fontSize:"80px"}}),Object(l.jsx)(Oe.a,{style:{fontSize:"80px"}})]})]})})}),fe=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{title:"Contact Us",bannerUrl:"contact-page"}),Object(l.jsx)(P.a,{children:Object(l.jsx)(ge,{})})]})},me=function(){var e=Object(i.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{page:e.pathname}),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.c,{location:e,children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:ue}),Object(l.jsx)(i.a,{exact:!0,path:"/dogs",component:X}),Object(l.jsx)(i.a,{path:"/exco",component:te}),Object(l.jsx)(i.a,{path:"/activity",component:ie}),Object(l.jsx)(i.a,{path:"/contact",component:fe})]},e.pathname)})]})};r.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(me,{})}),document.getElementById("root"))},61:function(e,t,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.810a9024.chunk.js.map