(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{193:function(e,t,n){},324:function(e,t){},538:function(e,t,n){"use strict";n.r(t);var c=n(24),s=n.n(c),r=(n(193),n(61)),i=n(26),a=n(541),o=n(194),l=n(549),j=(n(63),n(550)),u=n(553),d=n(0),b=n(104),h=n(4),p=function(){return Object(h.jsx)(j.a,{style:{marginTop:"60vh",zIndex:100,position:"absolute"},children:Object(h.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(h.jsxs)(u.b,{direction:"vertical",children:[Object(h.jsx)(b.SocialIcon,{onClick:function(e){e.preventDefault(),window.open("https://www.facebook.com/nuspawfriends/")},url:"https://www.facebook.com/nuspawfriends/"}),Object(h.jsx)(b.SocialIcon,{onClick:function(e){e.preventDefault(),window.open("https://www.instagram.com/nuspawfriends/?hl=en")},url:"https://www.instagram.com/nuspawfriends/?hl=en"}),Object(h.jsx)(b.SocialIcon,{url:"mailto:nuspawfriends@gmail.com "})]})})})},x=a.a.Header,m={Menu:{marginRight:"10px"}},g=function(e){var t=e.page,n=o.a.useBreakpoint().xs;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(a.a,{children:Object(h.jsxs)(x,{style:{width:"100%"},children:[Object(h.jsx)("div",{className:"logo"}),Object(h.jsxs)(l.a,{style:{display:"flex",justifyContent:"center"},theme:"dark",mode:"horizontal",selectedKeys:[t],children:[Object(h.jsxs)(l.a.Item,{style:m.Menu,children:[Object(h.jsx)("strong",{children:"Our Dogs"}),Object(h.jsx)(r.b,{to:"/dogs"})]},"/dogs"),Object(h.jsxs)(l.a.Item,{style:m.Menu,children:[Object(h.jsx)("strong",{children:"Our Exco"}),Object(h.jsx)(r.b,{to:"/exco"})]},"/exco"),Object(h.jsxs)(l.a.Item,{style:{marginRight:"10px",color:"black",background:"white"},children:[Object(h.jsx)("strong",{children:"NUS Pawfriends "}),Object(h.jsx)("img",{alt:"paw-img",color:"white",height:"16px",width:"16px",src:"/www.nuspawfriends.com/paw.png"}),Object(h.jsx)(r.b,{to:"/"})]},"/mainpage"),Object(h.jsxs)(l.a.Item,{style:m.Menu,children:[Object(h.jsx)("strong",{children:"About Us"}),Object(h.jsx)(r.b,{to:"/about-us"})]},"/about-us"),Object(h.jsxs)(l.a.Item,{style:m.Menu,children:[Object(h.jsx)("strong",{children:"Contact Us"}),Object(h.jsx)(r.b,{to:"/contact"})]},"/contact")]}),!n&&Object(h.jsx)(p,{})]})})})},f=n(16),O=n.n(f),w=n(28),y=n(49),k=n(107),v=n(54),F=n(552),S=n(551),C=n(108),A=n(192),M=n(544),_=n(545),U=n(554),I=n(555),P=n(543),N=P.a.Title,B=function(e){var t=e.dog;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{style:{textAlign:"center",fontSize:60,fontFamily:"Abel"},children:t.dog_name}),Object(h.jsx)(k.a,{children:Object(h.jsx)(v.a,{span:24,children:Object(h.jsxs)("p",{style:{fontFamily:"Abel",textAlign:"center",fontSize:45,color:"Male"===t.dog_gender?"#1790FF":"pink"},children:[t.dog_gender,Object(h.jsx)("br",{}),"Male"===t.dog_gender?Object(h.jsx)(U.a,{}):Object(h.jsx)(I.a,{})]})})}),Object(h.jsx)(S.a,{style:{borderStyle:"solid",borderWidth:"5px",borderRadius:"10px"},children:Object(h.jsx)("p",{style:{fontFamily:"Abel",textAlign:"center",fontSize:24},children:t.dog_characteristics})})]})},E=[{dogName:"Rambo",link:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHopeForAnimalsSG%2Fposts%2F4425690077445469&show_text=true&width=500"},{dogName:"Lucky",link:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHopeForAnimalsSG%2Fposts%2F4426776070670203&show_text=true&width=500"},{dogName:"Baby Girl",link:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHopeForAnimalsSG%2Fposts%2F3882359838445165&show_text=true&width=500"}],K=A.a.TabPane,T=function(e){var t,n=e.dog,c=e.images,s=e.modal,r=e.showModal,i=o.a.useBreakpoint(),a=(i.xs||i.sm)&&!i.md,l=null===(t=E.find((function(e){return e.dogName===n.dog_name})))||void 0===t?void 0:t.link;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(M.a,{width:"70%",footer:!1,onCancel:function(){return r(!1)},visible:s,children:Object(h.jsxs)(k.a,{justify:"space-between",children:[Object(h.jsxs)(v.a,{xs:24,lg:8,span:12,children:[Object(h.jsx)(_.a,{dotPosition:"top",children:Array.from(Array(4)).map((function(e,t){var n=c.filter((function(e){return e.gallery_position===t}))[0];return!n||Object(h.jsx)("img",{alt:"carousell-img",height:a?300:500,"object-fit":"cover",src:n.image_url})}))}),0===c.length&&Object(h.jsx)(C.a,{description:!1,imageStyle:{height:"500px",width:"100%"}})]}),Object(h.jsx)(v.a,{lg:14,span:24,children:Object(h.jsxs)(A.a,{defaultActiveKey:"1",tabPosition:a?"top":"right",children:[Object(h.jsx)(K,{tab:"Description",children:Object(h.jsx)(B,{dog:n})},"1"),l&&Object(h.jsx)(K,{style:{overflowX:"scroll",overflowY:"scroll",height:500},tab:"My activities",children:Object(h.jsx)("iframe",{title:"Dog Activity",src:l,style:{border:"none",overflow:"hidden"},height:800,width:500,scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})},"2")]})})]})})})},z=S.a.Meta,W=function(e){var t,n=e.dog,c=e.images,s=null===c||void 0===c||null===(t=c.filter((function(e){return 0===e.gallery_position}))[0])||void 0===t?void 0:t.image_url,r=Object(d.useState)(!1),i=Object(y.a)(r,2),a=i[0],o=i[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v.a,{span:24,lg:8,children:[Object(h.jsx)(T,{images:c,dog:n,modal:a,showModal:o}),Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(S.a,{hoverable:!0,onClick:function(e){o(!0)},style:{width:"80%",marginBottom:"20px"},cover:s?Object(h.jsx)("img",{alt:"dog-cover",style:{objectFit:"cover"},height:"400px",src:s}):Object(h.jsx)(C.a,{style:{width:"100%"}}),children:Object(h.jsx)(z,{title:n.dog_name,description:"Female"===n.dog_gender?"Good girl":"Good boi"})})})]})})},D=function(e){var t=e.dogs,n=e.dogImages;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsxs)(v.a,{span:20,children:[Object(h.jsx)(F.a,{style:{marginBottom:20},showIcon:!0,message:"",description:"Click on any dog to see it learn more about our good bois",type:"info"}),Object(h.jsx)(k.a,{gutter:[20,20],children:t.map((function(e){var t=n.filter((function(t){return t.dog_id===e.dog_id}));return Object(h.jsx)(W,{dog:e,images:t||[]})}))})]})})})},G=n(70),R=n.n(G),H=n(120),L="https://pawfriends-api.herokuapp.com";function Y(e,t){return J.apply(this,arguments)}function J(){return(J=Object(w.a)(O.a.mark((function e(t,n){var c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(L,"/").concat(t.endpoint),t.params&&Object.keys(t.params).forEach((function(e,n){var s=t.params?t.params:{};c+="".concat(0===n?"?":"&").concat(e,"=").concat(s[e])})),s=Object(H.a)({"Content-Type":"application/json"},t.headers),e.prev=3,e.abrupt("return",fetch(c,{method:n,headers:s,body:t.data?JSON.stringify(t.data):null}).then((function(e){if(e.ok)return e.json();throw Error})));case 7:e.prev=7,e.t0=e.catch(3),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}function Z(e){return V.apply(this,arguments)}function V(){return(V=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t,"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return q.apply(this,arguments)}function q(){return(q=Object(w.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={endpoint:"dogs"},e.next=3,Z(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return $.apply(this,arguments)}function $(){return($=Object(w.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={endpoint:"excos"},e.next=3,Z(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(w.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={endpoint:"mainpage"},e.next=3,Z(t);case 3:return n=e.sent,e.abrupt("return",n.pawfriends_description);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=P.a.Text,ce={position:"relative",textAlign:"center",color:"white"},se={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},re=function(e){var t=e.title,n=e.noMargin,c=o.a.useBreakpoint().xs;return Object(d.useEffect)((function(){var e=document.getElementsByClassName("asyncImage");Array.from(e).map((function(e){var t=new Image;return t.src=e.getAttribute("data-src"),t.onload=function(){e.classList.remove("asyncImage"),e.setAttribute("src",t.src)},null}))}),[]),Object(h.jsxs)("div",{style:Object(H.a)(Object(H.a)({},ce),{},{marginBottom:n?0:64}),children:[Object(h.jsx)("div",{style:se,children:Object(h.jsx)(ne,{style:{fontSize:"60px",color:"white"},children:Object(h.jsx)("b",{children:t})})}),Object(h.jsx)("img",{alt:"banner","data-src":"/www.nuspawfriends.com/BannerImages/banner.jpeg",className:"asyncImage",height:"400px",style:{objectFit:c?"cover":"fill"},width:"100%",src:"/www.nuspawfriends.com/BannerImages/banner-min.jpg"})]})},ie=n(542),ae=d.useEffect,oe=d.useState,le=function(){var e=oe(),t=Object(y.a)(e,2),n=t[0],c=t[1],s=oe([]),r=Object(y.a)(s,2),i=r[0],a=r[1],o=oe(!1),l=Object(y.a)(o,2),j=l[0],u=l[1];return ae((function(){(function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,X();case 3:t=e.sent,c(t.dogs),a(t.images),u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(re,{title:"Our Dogs",bannerUrl:"dogs"}),j&&Object(h.jsx)(ie.a,{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),!j&&n&&i.length>0&&Object(h.jsx)(R.a,{children:Object(h.jsx)(D,{dogs:n.filter((function(e){return 1!==e.dog_id})),dogImages:i})})]})},je=S.a.Meta,ue=function(e){var t=e.exco,n="/www.nuspawfriends.com"+"/ExcoImages/".concat(t.exco_name,".jpg");return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(v.a,{span:24,lg:8,children:Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(S.a,{hoverable:!0,style:{width:300},cover:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{alt:"exco-img",style:{objectFit:"cover"},height:300,width:300,src:n}),Object(h.jsx)("div",{style:{height:"50px",backgroundColor:"black"},children:Object(h.jsx)("p",{style:{color:"white",textAlign:"center",fontSize:"30px",marginBottom:"0px"},children:Object(h.jsx)("b",{children:t.exco_role})})})]}),children:Object(h.jsx)(je,{title:"".concat(t.exco_name),description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Favourite Dog: ".concat(t.exco_favourite_dog)}),Object(h.jsx)("p",{children:"Year: ".concat(t.exco_year_of_study)}),Object(h.jsxs)("p",{children:["Hobbies:",Object(h.jsx)("br",{}),"".concat(t.exco_hobbies?t.exco_hobbies:"-")]})]})})})})})})},de=function(){var e=Object(d.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],s=Object(d.useState)(!1),r=Object(y.a)(s,2),i=r[0],a=r[1];return Object(d.useEffect)((function(){(function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,Q();case 3:t=e.sent,c(t),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(re,{title:"Our Exco",bannerUrl:"exco"}),i&&Object(h.jsx)(ie.a,{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}),Object(h.jsx)(R.a,{children:Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(v.a,{span:20,children:Object(h.jsx)(k.a,{gutter:[20,20],children:n.map((function(e){return Object(h.jsx)(ue,{exco:e})}))})})})}),Object(h.jsx)("div",{style:{height:"50px"}})]})},be=n(547),he=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(be.a,{status:"403",title:"Page under development",subTitle:"Stay tuned for upcoming updates!"})})},pe=n(548),xe=n(546),me=n(270),ge=n.n(me),fe=P.a.Title,Oe=d.useEffect,we=d.useState,ye=function(){var e=we(),t=Object(y.a)(e,2),n=t[0],c=t[1],s=we(!1),r=Object(y.a)(s,2),i=r[0],a=r[1],l=o.a.useBreakpoint(),j=(l.xs||l.sm)&&!l.md,u=function(){var e=Object(w.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,ee();case 3:t=e.sent,c(t),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Oe((function(){u()}),[]),Oe((function(){var e=setInterval((function(){u()}),6e4);return function(){return clearInterval(e)}}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(k.a,{justify:"space-between",children:[Object(h.jsxs)(v.a,{span:24,lg:12,children:[Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(pe.a,{size:120,icon:Object(h.jsx)("img",{alt:"lucky",src:"/www.nuspawfriends.com/Dogs/Lucky_2.jpg"})})}),Object(h.jsx)(fe,{style:{textAlign:"center"},children:"NUS Pawfriends"}),i&&Object(h.jsx)(xe.a,{}),n&&Object(h.jsx)("p",{style:{fontSize:16},children:ge()(n)})]}),Object(h.jsx)(v.a,{span:24,lg:10,children:Object(h.jsx)("video",{controls:!0,style:{height:400,width:j?"80vw":600},src:"/www.nuspawfriends.com/MainPage/video.mp4"})})]})})},ke=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(re,{title:"NUS Pawfriends",bannerUrl:"main-page"}),Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(v.a,{span:20,children:Object(h.jsx)(R.a,{children:Object(h.jsx)(ye,{})})})})]})},ve=n(122),Fe=Object(ve.withScriptjs)(Object(ve.withGoogleMap)((function(){return Object(h.jsx)(ve.GoogleMap,{defaultZoom:15,defaultCenter:{lat:1.3813121317746935,lng:103.72557829405687},children:Object(h.jsx)(ve.Marker,{position:{lat:1.3813121317746935,lng:103.72557829405687}})})}))),Se=function(){return Object(h.jsx)(Fe,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyCCTp142N-zeTuRi--f1v-YLV4ZgaPmbEc"),loadingElement:Object(h.jsx)("div",{style:{height:"100%"}}),containerElement:Object(h.jsx)("div",{style:{height:"100%"}}),mapElement:Object(h.jsx)("div",{style:{height:"100%"}})})},Ce=A.a.TabPane,Ae=function(){var e=[{category:"Pawfriends",linkArr:[{link:"https://soaza.github.io/Pawfriends",title:"Pawfriends' Website",description:"You are here!"},{link:"https://www.facebook.com/nuspawfriends/",title:"NUS Pawfriends",description:"Check out our Facebook page"},{link:"https://www.instagram.com/nuspawfriends/?hl=en",title:"@nuspawfriends",description:"Check out our Instagram page"},{link:"mailto:nuspawfriends@gmail.com",title:"nuspawfriends@gmail.com",description:"Contact us by email"}]},{category:"NUS Peace",linkArr:[{link:"https://blog.nus.edu.sg/nuspeace/",title:"NUS Peace Website",description:"Check out NUS Peace's blog"},{link:"https://www.instagram.com/nus.peace",title:"@nus.peace",description:"Check out NUS Peace's Instagram page"},{link:"https://www.facebook.com/nuspeace.official/",title:"NUS Peace Facebook",description:"Check out NUS Peace's Facebook"},{link:"mailto:nus.peace@gmail.com",title:"nus.peace@gmail.com",description:"Contact NUS Peace by email"}]},{category:"Uncle Khoe's",linkArr:[{link:"https://unclekhoek9.sg/",title:"Uncle Khoe's K9 Website",description:"Check out Uncle Khoe's K9 Website"},{link:"https://www.instagram.com/uncle_khoe_k9",title:"@uncle_khoe_k9",description:"Check out Uncle Khoe's K9 Instagram page"},{link:"https://www.facebook.com/Uncle-khoes-k9-518244711535396/",title:"Uncle Khoe's K9 Facebook",description:"Check out Uncle Khoe's K9 Facebook"},{link:"mailto:uncle.khoe.k9@gmail.com",title:"uncle.khoe.k9@gmail.com",description:"Contact Uncle Khoe by email"}]},{category:"Mutts and Mittens",linkArr:[{link:"https://www.muttsnmittensactive.com/",title:"Mutts and Mittens' Website",description:"Check out Mutts and Mittens' Website"},{link:"https://www.instagram.com/muttsnmittens",title:"@muttsnmittens",description:"Check out Mutts and Mittens' Instagram page"},{link:"https://www.facebook.com/muttsnmittens/",title:"Mutts and Mittens' Facebook",description:"Check out Mutts and Mittens' Facebook"},{link:"mailto:info@muttsnmittensactive.com",title:"info@muttsnmittensactive.com",description:"Contact Mutts and Mittens by email"}]}],t=o.a.useBreakpoint().xs;return Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(v.a,{span:22,lg:18,children:Object(h.jsxs)(k.a,{justify:"space-between",children:[Object(h.jsxs)(v.a,{span:22,lg:10,children:[Object(h.jsx)("h1",{children:"Where our activities are located"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"By bus:"})," Take 975/975B from Choa Chu Kang MRT station then walk 13 minutes."]}),Object(h.jsx)(Se,{})]}),Object(h.jsxs)(v.a,{style:{marginTop:t?150:0},span:22,lg:10,children:[Object(h.jsx)("h1",{children:"Contacting Us/Our Affiliates"}),Object(h.jsx)(A.a,{defaultActiveKey:"0",tabPosition:"top",children:e.map((function(e,t){return Object(h.jsxs)(Ce,{tab:e.category,children:[Object(h.jsx)("p",{style:{color:"gray"},children:"Click on the icon to access the link in a new window"}),e.linkArr.map((function(e){return Object(h.jsx)(S.a,{bodyStyle:{textOverflow:"ellipsis"},children:Object(h.jsxs)(k.a,{children:[Object(h.jsx)(b.SocialIcon,{style:{marginRight:20},onClick:function(t){t.preventDefault(),window.open(e.link)},url:e.link}),Object(h.jsxs)(v.a,{children:[Object(h.jsx)("h3",{children:Object(h.jsx)("b",{children:e.title})}),Object(h.jsx)("p",{children:e.description})]})]})})}))]},t)}))})]})]})})})},Me=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(re,{title:"Contact Us",bannerUrl:"contact-page"}),Object(h.jsx)(R.a,{children:Object(h.jsx)(Ae,{})})]})},_e=n(535),Ue=[{header:"About Us",info:"We are a group of students unified by a common passion for helping\n    dogs at a shelter by volunteering on a weekly basis"},{header:"Our Mission",info:"We aim to raise awareness of shelter/stray dogs situation in\n    Singapore through social media and fundraisers"},{header:"Adopt Don't Shop",info:" We advocate the idea of adopting as we believe that shelter dogs\n    deserve a second chance in life"},{header:"Future Plans",info:"We seek to improve the physical and mental welfare of shelter dogs\n    by bringing them for excursions whenever we can"},{header:"Our Goal",info:"We strive to increase the adoptability of shelter dogs by training\n    them to portray traits desired by potential adopters"}],Ie=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k.a,{style:{marginTop:20,marginBottom:30},gutter:[30,30],justify:"space-between",children:Ue.map((function(e){return Object(h.jsx)(v.a,{span:24,lg:12,children:Object(h.jsx)(_e,{bottom:!0,children:Object(h.jsxs)(S.a,{style:{minHeight:200,borderColor:"#a5dff2",borderStyle:"solid",borderWidth:"2px",borderRadius:"10px"},children:[Object(h.jsx)("p",{style:{fontSize:40,marginBottom:0},children:e.header}),Object(h.jsx)("p",{style:{fontSize:16},children:e.info})]})})})}))})})},Pe=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(re,{title:"About Us",bannerUrl:"contact-page"}),Object(h.jsx)(k.a,{justify:"center",children:Object(h.jsx)(v.a,{span:20,children:Object(h.jsx)(Ie,{})})})]})},Ne=function(){var e=Object(i.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{page:e.pathname}),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.c,{location:e,children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:ke}),Object(h.jsx)(i.a,{path:"/dogs",component:le}),Object(h.jsx)(i.a,{path:"/exco",component:de}),Object(h.jsx)(i.a,{path:"/about-us",component:Pe}),Object(h.jsx)(i.a,{path:"/activity",component:he}),Object(h.jsx)(i.a,{path:"/contact",component:Me})]},e.pathname)})]})};s.a.render(Object(h.jsx)(r.a,{basename:"/www.nuspawfriends.com",children:Object(h.jsx)(Ne,{})}),document.getElementById("root"))},63:function(e,t,n){}},[[538,1,2]]]);
//# sourceMappingURL=main.6c64c184.chunk.js.map