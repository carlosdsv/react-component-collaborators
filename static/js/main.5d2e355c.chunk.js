(this["webpackJsonpreact-component-collaborators-example"]=this["webpackJsonpreact-component-collaborators-example"]||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);n(21);var r=n(0),a=n.n(r),o=n(13),l=n.n(o),i=n(1),c=n(5),u=n(4);function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}function f(){var e=d(["\n    ","\n  "]);return f=function(){return e},e}var p=function(e){var t,n,a,o,l=e.listStyleObject,i=e.collaboratorsArray,c=e.children,d=u.a.div(f(),(t=l.listWidth,n=l.listHeight,a=l.direction,o=l.listBackgroundColor,void 0===t&&(t="1100px"),void 0===n&&(n="400px"),void 0===a&&(a="vertical"),void 0===o&&(o="#FFF"),"\n  width: "+t+";\n  height: "+n+";\n  background-color: "+o+";\n  overflow: scroll;\n  display: flex;\n  flex-direction: "+("vertical"===a?"row":"horizontal"===a?"column":"row")+";\n  flex-wrap: wrap;\n  overflow-x: "+("none"===a||"vertical"===a?"hidden":"scroll")+";\n  overflow-y: "+("none"===a?"hidden":"vertical"===a?"scroll":"horizontal"===a?"hidden":"scroll")+";\n  "));return Object(r.createElement)(d,null,i.map((function(e){return Object(r.cloneElement)(c,{collaboratorObj:e})})))},m=function(e,t,n,r,a){return void 0===e&&(e="300px"),void 0===t&&(t="150px"),void 0===r&&(r="#7EE8FA"),"\n  width: "+e+";\n  height: "+t+";\n  background-color: "+r+";\n  display: flex;\n  flex-direction: "+("left"===a?"row":"right"===a?"row-reverse":"top"===a?"column":"bottom"===a?"column-reverse":"row")+";\n  align-items: center;\n  justify-content: space-around;\n  margin: 20px;\n  box-sizing: border-box;\n  padding: 10px;\n  border-radius: 5px;\n  border: "+n.width+" "+n.style+" "+n.color+";\n  "},b=function(e,t,n,r,a){return void 0===e&&(e="left"),void 0===t&&(t="#000"),void 0===n&&(n="100%"),void 0===r&&(r="0px"),void 0===a&&(a="0px"),"\n  color: "+t+";\n  font-weight: bolder;\n  text-align: "+e+";\n  font-size: "+n+";\n  padding: "+r+";\n  margin: "+a+";\n  "},g=function(e){return"\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 35%;\n  height: 85%;\n  margin: "+("left"===e||"right"===e?"10px":"top"===e||"bottom"===e?"0px":"10px")+";\n  "},s=function(e,t,n,r){return void 0===e&&(e="circle"),void 0===n&&(n="100px"),void 0===r&&(r="100px"),"\n  width: "+n+";\n  height: "+r+";\n  object-fit: cover;\n  border-radius: "+("circle"===e?"50%":"square"===e?"0%":"50%")+";\n  border: "+t.width+" "+t.style+" "+t.color+";\n  "};function x(){var e=d(["\n    ","\n  "]);return x=function(){return e},e}function h(){var e=d(["\n    ","\n  "]);return h=function(){return e},e}function E(){var e=d(["\n    ","\n  "]);return E=function(){return e},e}function v(){var e=d(["\n    ","\n  "]);return v=function(){return e},e}function y(){var e=d(["\n    ","\n  "]);return y=function(){return e},e}function j(){var e=d(["\n    ","\n  "]);return j=function(){return e},e}var O=function(e){var t,n,a,o,l,i=e.collaboratorObj,c=void 0===i?{}:i,d=e.cardStyleObject,f=e.imagePosition,p=u.a.div(j(),m(d.cardWidth,d.cardHeight,d.borderCard,d.cardBackgroundColor,f)),O=u.a.div(y(),"\n  width: 65%;\n  height: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-left: 10px;\n  "),C=u.a.p(v(),b(d.textAlign,d.titleColor,d.fontSizeTitle,d.paddingTitle,d.marginTitle)),w=u.a.p(E(),(t=d.textAlign,n=d.descriptionColor,a=d.fontSizeDescription,o=d.paddingDescription,l=d.marginDescription,void 0===t&&(t="left"),void 0===n&&(n="#000"),void 0===a&&(a="80%"),void 0===o&&(o="0px"),void 0===l&&(l="0px"),"\n  color: "+n+";\n  text-align: "+t+";\n  font-size: "+a+";\n  padding: "+o+";\n  margin: "+l+";\n  ")),k=u.a.div(h(),g(f)),T=u.a.img(x(),s(d.imageFormat,d.borderImage,d.imageWidth,d.imageHeight));return Object(r.createElement)(p,null,Object(r.createElement)(k,null,Object(r.createElement)(T,{src:c.image,alt:""})),Object(r.createElement)(O,null,Object(r.createElement)(C,null,c.title),c.description?Object(r.createElement)(w,null,c.description):null))};function C(){var e=d(["\n    ","\n  "]);return C=function(){return e},e}function w(){var e=d(["\n    ","\n  "]);return w=function(){return e},e}function k(){var e=d(["\n    ","\n  "]);return k=function(){return e},e}function T(){var e=d(["\n    ","\n  "]);return T=function(){return e},e}function S(){var e=d(["\n    ","\n  "]);return S=function(){return e},e}var z=function(e){var t=e.collaboratorObj,n=void 0===t?{image:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",title:"Daenerys Targaryen",description:"Learning to haul"}:t,a=e.cardStyleObject,o=e.imagePosition,l=u.a.div(S(),m(a.cardWidth,a.cardHeight,a.borderCard,a.cardBackgroundColor,o)),i=u.a.div(T(),g(o)),c=u.a.img(k(),s(a.imageFormat,a.borderImage,a.imageWidth,a.imageHeight)),d=u.a.div(w(),"\n  width: 65%;\n  height: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-left: 10px;\n  "),f=u.a.p(C(),b(a.textAlign,a.titleColor));return Object(r.createElement)(l,null,Object(r.createElement)(i,null,Object(r.createElement)(c,{src:n.image,alt:""})),Object(r.createElement)(d,null,Object(r.createElement)(f,null,n.title)))},D=n(2),H=n(3);function W(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return W=function(){return e},e}function B(){var e=Object(D.a)(["\n  height: 25px;\n  width: 50px;\n  margin-left: 10px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return B=function(){return e},e}function F(){var e=Object(D.a)(["\n  height: 25px;\n  width: 80px;\n  align-text: center;\n  margin-left: 5px;\n  margin-top: 5px;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return F=function(){return e},e}function I(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 0px;\n"]);return I=function(){return e},e}function A(){var e=Object(D.a)(["\n  color: #000;\n  font-weight: bolder;\n"]);return A=function(){return e},e}function P(){var e=Object(D.a)(["\n  color: #000;\n"]);return P=function(){return e},e}function q(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return q=function(){return e},e}function L(){var e=Object(D.a)(["\n  width: 20%;\n  height: 250px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-betwin;\n  padding: 1% 1%;\n  margin-left: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: #6fbdfa;\n"]);return L=function(){return e},e}function J(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-top: 20px;\n"]);return J=function(){return e},e}function M(){var e=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return M=function(){return e},e}function Q(){var e=Object(D.a)(["\n  text-align: center;\n"]);return Q=function(){return e},e}function R(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  background-color: #ecf0f5;\n"]);return R=function(){return e},e}var N=H.a.div(R()),G=H.a.div(Q()),K=H.a.div(M()),V=H.a.div(J()),U=(H.a.div(L()),H.a.div(q())),X=H.a.p(P()),Y=H.a.p(A()),Z=H.a.p(I()),$=H.a.button(F()),_=H.a.input(B()),ee=H.a.div(W()),te=[{image:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",title:"Daenerys Targaryen",description:"Learning to howl"},{image:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",title:"Jhon Snow",description:"Loves playing catch"},{image:"https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",title:"Arya Stark",description:"Has a nice wardrobe"},{image:"https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",title:"Tyrion Lannister",description:"Feels superior"},{image:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80",title:"Khal Drogo",description:"Scared of hes own shadow"},{image:"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",title:"Joffrey Baratheon",description:"Loves smelling the flowers"},{image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",title:"Theon Greyjoy",description:"Loves going for walks in the park"},{image:"https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",title:"Ramsay Bolton",description:"Enjoys the wind while riding the car"},{image:"https://images.unsplash.com/photo-1537151769678-eb003fb3a153?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",title:"Gregor Clegane",description:"Loves taking naps"},{image:"https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80",title:"Petyr Baelish",description:"Smiles a lot"}];function ne(){var e=Object(D.a)(["\n  width: 25px;\n  height: 25px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return ne=function(){return e},e}function re(){var e=Object(D.a)(["\n  width: 80px;\n  height: 25px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return re=function(){return e},e}function ae(){var e=Object(D.a)(["\n  height: 25px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin: 0px;\n  margin-left: 10px;\n"]);return ae=function(){return e},e}function oe(){var e=Object(D.a)([""]);return oe=function(){return e},e}function le(){var e=Object(D.a)(["\n  height: 25px;\n  width: 50px;\n  margin-left: 10px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return le=function(){return e},e}function ie(){var e=Object(D.a)(["\n  height: 30px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(D.a)(["\n  color: #000;\n  margin: 0px;\n  font-weight: bolder;\n"]);return ce=function(){return e},e}function ue(){var e=Object(D.a)(["\n  width: 20%;\n  height: 300px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-betwin;\n  padding: 1% 1%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: #6fbdfa;\n"]);return ue=function(){return e},e}var de=H.a.div(ue()),fe=(H.a.p(ce()),H.a.div(ie()),H.a.input(le()),H.a.div(oe()),H.a.div(ae()),H.a.input(re())),pe=H.a.input(ne());function me(){var e=Object(D.a)(["\n  margin: 10px;\n  background-color: #000;\n"]);return me=function(){return e},e}function be(){var e=Object(D.a)(["\n  height: 25px;\n  width: 150px;\n  margin-left: 10px;\n  margin-right: 10px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return be=function(){return e},e}function ge(){var e=Object(D.a)(["\n  height: 25px;\n  width: 50px;\n  margin-left: 10px;\n  margin-right: 10px;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n"]);return ge=function(){return e},e}function se(){var e=Object(D.a)(["\n  width: 20%;\n  height: auto;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-betwin;\n  padding: 1% 1%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: #6fbdfa;\n"]);return se=function(){return e},e}var xe=H.a.div(se()),he=H.a.input(ge()),Ee=H.a.input(be()),ve=H.a.hr(me());function ye(){var e=Object(D.a)(["\n  background-color: #000;\n  color: #fff;\n  border-radius: 3px;\n  font-family: courier;\n  padding: 0 3px;\n"]);return ye=function(){return e},e}function je(){var e=Object(D.a)(["\n  width: 55%;\n  background-color: #000;\n  border-radius: 4px;\n  margin: 0px auto;\n"]);return je=function(){return e},e}function Oe(){var e=Object(D.a)(["\n  width: 55%;\n  margin: 0px auto;\n"]);return Oe=function(){return e},e}function Ce(){var e=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-content: space-around;\n  background-color: #fff;\n"]);return Ce=function(){return e},e}var we=H.a.p(Ce()),ke=H.a.div(Oe()),Te=H.a.div(je()),Se=H.a.code(ye()),ze={width:"4px",style:"solid",color:"#E8C3C9"},De={width:"4px",style:"solid",color:"#E8C3C9"},He=function(){var e=Object(r.useState)("complete"),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(r.useState)("left"),u=Object(c.a)(l,2),d=u[0],f=u[1],m=Object(r.useState)({listWidth:"700px",listHeight:"400px",direction:"vertical",listBackgroundColor:"#FFF"}),b=Object(c.a)(m,2),g=b[0],s=b[1],x=Object(r.useState)({cardWidth:"300px",cardHeight:"150px",cardBackgroundColor:"#7EE8FA",textAlign:"center",imageFormat:"circle",borderImage:ze,borderCard:De,titleColor:"#000",descriptionColor:"#000",imageWidth:"100px",imageHeight:"100px",fontSizeTitle:"100%",paddingTitle:"0px 0px 20px 0px",marginTitle:"0px 0px 0px 0px",fontSizeDescription:"80%",paddingDescription:"0px 0px 0px 0px",marginDescription:"0px 0px 0px 0px"}),h=Object(c.a)(x,2),E=h[0],v=h[1],y="\n  <CollaboratorsList collaboratorsArray={collaboratorsArray} listStyleObject={listStyleObject}>\n    ".concat("complete"===n?"<CardComplete":"<CardMinimal"," cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>\n  </CollaboratorsList>\n  "),j="\n  const imagePosition = '".concat(d,"';\n  "),C="\n  const listStyleObject = {\n    listWidth: '".concat(g.listWidth,"',\n    listHeight: '").concat(g.listHeight,"', \n    direction: '").concat(g.direction,"',\n    listBackgroundColor: '").concat(g.listBackgroundColor,"'\n  };\n  "),w="\n  const cardStyleObject = {\n    cardWidth: '".concat(E.cardWidth,"',\n    cardHeight: '").concat(E.cardHeight,"',\n    cardBackgroundColor: '").concat(E.cardBackgroundColor,"',\n    textAlign: '").concat(E.textAlign,"',\n    imageFormat: '").concat(E.imageFormat,"',\n    borderImage: {\n      width: '").concat(E.borderImage.width,"',\n      style: '").concat(E.borderImage.style,"',\n      color: '").concat(E.borderImage.color,"'\n    },\n    borderCard: {\n      width: '").concat(E.borderCard.width,"',\n      style: '").concat(E.borderCard.style,"',\n      color: '").concat(E.borderCard.color,"'\n    },\n    titleColor: '").concat(E.titleColor,"',\n    descriptionColor: '").concat(E.descriptionColor,"',\n    imageWidth: '").concat(E.imageWidth,"',\n    imageHeight: '").concat(E.imageHeight,"',\n    fontSizeTitle: '").concat(E.fontSizeTitle,"',\n    paddingTitle: '").concat(E.paddingTitle,"',\n    marginTitle: '").concat(E.marginTitle,"',\n    fontSizeDescription: '").concat(E.fontSizeDescription,"',\n    paddingDescription: '").concat(E.paddingDescription,"',\n    marginDescription: '").concat(E.marginDescription,"'\n  };\n  "),k=function(e){f(e.currentTarget.value)},T=function(e){s(Object(i.a)(Object(i.a)({},g),{},{listBackgroundColor:e.target.value}))},S=function(e){s(Object(i.a)(Object(i.a)({},g),{},{direction:e.currentTarget.value}))},D=function(e){v(Object(i.a)(Object(i.a)({},E),{},{textAlign:e.currentTarget.value}))},H=function(e){v(Object(i.a)(Object(i.a)({},E),{},{cardBackgroundColor:e.target.value}))},W=function(e){v(Object(i.a)(Object(i.a)({},E),{},{imageFormat:e.currentTarget.value}))},B=function(e){v(Object(i.a)(Object(i.a)({},E),{},{titleColor:e.currentTarget.value}))},F=function(e){v(Object(i.a)(Object(i.a)({},E),{},{descriptionColor:e.currentTarget.value}))},I=function(e){De.style=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderCard:De}))},A=function(e){De.color=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderCard:De}))},P=function(e){ze.style=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderImage:ze}))},q=function(e){ze.color=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderImage:ze}))};return a.a.createElement(N,null,a.a.createElement(G,null,a.a.createElement("h1",null,"React Customizable Collaborators Component")),a.a.createElement(K,null,a.a.createElement(p,{collaboratorsArray:te,listStyleObject:g},"complete"===n?a.a.createElement(O,{cardStyleObject:E,imagePosition:d}):"minimal"===n?a.a.createElement(z,{cardStyleObject:E,imagePosition:d}):a.a.createElement(O,{cardStyleObject:E,imagePosition:d}))),a.a.createElement(V,null,a.a.createElement(de,null,a.a.createElement(U,null,a.a.createElement(Y,null,"Type of Card:"),a.a.createElement(Z,null,a.a.createElement($,{type:"button",onClick:function(){o("complete")}},"Complete"),a.a.createElement($,{type:"button",onClick:function(){o("minimal")}},"Minimal"))),a.a.createElement(U,null,a.a.createElement(Y,null,"Image position:"),a.a.createElement(Z,null,a.a.createElement($,{type:"button",value:"left",onClick:k},"Left"),a.a.createElement($,{type:"button",value:"right",onClick:k},"Right")),a.a.createElement(Z,null,a.a.createElement($,{type:"button",value:"top",onClick:k},"Top"),a.a.createElement($,{type:"button",value:"bottom",onClick:k},"Bottom")))),a.a.createElement(de,null,a.a.createElement(Y,null,"Properties for the container:"),a.a.createElement(ee,null,a.a.createElement(X,null,"Width "),a.a.createElement(he,{placeholder:g.listWidth,onChange:function(e){s(Object(i.a)(Object(i.a)({},g),{},{listWidth:e.target.value}))}}),a.a.createElement(X,null,"Height"),a.a.createElement(he,{type:"text",placeholder:g.listHeight,onChange:function(e){s(Object(i.a)(Object(i.a)({},g),{},{listHeight:e.target.value}))}})),a.a.createElement("div",null,a.a.createElement(X,null,"Display direction"),a.a.createElement($,{type:"button",value:"vertical",onClick:S},"Vertical"),a.a.createElement($,{type:"button",value:"horizontal",onClick:S},"Horizontal"),a.a.createElement($,{type:"button",value:"none",onClick:S},"None")),a.a.createElement("div",null,a.a.createElement(X,null,"Background color:"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:g.listBackgroundColor,onChange:T}),a.a.createElement(pe,{type:"color",value:g.listBackgroundColor,placeholder:g.listBackgroundColor,onChange:T})))),a.a.createElement(xe,null,a.a.createElement(Y,null,"Properties for the card:"),a.a.createElement("div",null,a.a.createElement(ee,null,a.a.createElement(X,null,"Width"),a.a.createElement(he,{type:"text",placeholder:E.cardWidth,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{cardWidth:e.target.value}))}}),a.a.createElement(X,null,"Height"),a.a.createElement(he,{type:"text",placeholder:E.cardHeight,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{cardHeight:e.target.value}))}})),a.a.createElement(ee,null,a.a.createElement(X,null,"Background color:"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:E.cardBackgroundColor,onChange:H}),a.a.createElement(pe,{type:"color",value:E.cardBackgroundColor,onChange:H}))),a.a.createElement(X,null,"Card border:"),a.a.createElement(ee,null,a.a.createElement(X,null,"Width"),a.a.createElement(_,{type:"text",placeholder:E.borderCard.width,onChange:function(e){De.width=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderCard:De}))}}),a.a.createElement(X,null,"Color"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:E.borderCard.color,onChange:A}),a.a.createElement(pe,{type:"color",value:E.borderCard.color,onChange:A}))),a.a.createElement(ee,null,a.a.createElement(X,null,"Style"),a.a.createElement($,{type:"button",value:"none",onClick:I},"None"),a.a.createElement($,{type:"button",value:"solid",onClick:I},"Solid"),a.a.createElement($,{type:"button",value:"dashed",onClick:I},"Dashed"),a.a.createElement($,{type:"button",value:"double",onClick:I},"Double"))),a.a.createElement(ve,null),a.a.createElement(Y,null,"Properties for the image:"),a.a.createElement("div",null,a.a.createElement(ee,null,a.a.createElement(X,null,"Format:"),a.a.createElement($,{type:"button",value:"circle",onClick:W},"circle"),a.a.createElement($,{type:"button",value:"square",onClick:W},"Square")),a.a.createElement(ee,null,a.a.createElement(X,null,"Width"),a.a.createElement(he,{type:"text",placeholder:E.imageWidth,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{imageWidth:e.currentTarget.value}))}}),a.a.createElement(X,null,"Height"),a.a.createElement(he,{type:"text",placeholder:E.imageHeight,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{imageHeight:e.currentTarget.value}))}})),a.a.createElement(X,null,"Border"),a.a.createElement(ee,null,a.a.createElement(X,null,"Width"),a.a.createElement(_,{type:"text",placeholder:E.borderImage.width,onChange:function(e){ze.width=e.currentTarget.value,v(Object(i.a)(Object(i.a)({},E),{},{borderImage:ze}))}}),a.a.createElement(X,null,"Color"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:E.borderImage.color,onChange:q}),a.a.createElement(pe,{type:"color",value:E.borderImage.color,onChange:q}))),a.a.createElement(ee,null,a.a.createElement(X,null,"Style"),a.a.createElement($,{type:"button",value:"none",onClick:P},"None"),a.a.createElement($,{type:"button",value:"solid",onClick:P},"Solid"),a.a.createElement($,{type:"button",value:"dashed",onClick:P},"Dashed"),a.a.createElement($,{type:"button",value:"double",onClick:P},"Double")))),a.a.createElement(xe,null,a.a.createElement(Y,null,"Properties for the text:"),a.a.createElement(ee,null,a.a.createElement(X,null,"Align"),a.a.createElement($,{type:"button",value:"left",onClick:D},"Left"),a.a.createElement($,{type:"button",value:"center",onClick:D},"Center"),a.a.createElement($,{type:"button",value:"right",onClick:D},"Right")),a.a.createElement("div",null,a.a.createElement(Y,null,"Title:"),a.a.createElement(ee,null,a.a.createElement(X,null,"Color:"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:E.titleColor,onChange:B}),a.a.createElement(pe,{type:"color",value:E.titleColor,onChange:B})),a.a.createElement(ee,null,a.a.createElement(X,null,"Font size"),a.a.createElement(_,{type:"text",placeholder:E.fontSizeTitle,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{fontSizeTitle:e.currentTarget.value}))}})))),a.a.createElement("div",null,a.a.createElement(X,null,"Padding"),a.a.createElement(Ee,{type:"text",placeholder:E.marginTitle,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{marginTitle:e.currentTarget.value}))}})),a.a.createElement("div",null,a.a.createElement(X,null,"Margin"),a.a.createElement(Ee,{type:"text",placeholder:E.paddingTitle,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{paddingTitle:e.currentTarget.value}))}})),"complete"===n?a.a.createElement("div",null,a.a.createElement(ve,null),a.a.createElement(Y,null,"Description:"),a.a.createElement(ee,null,a.a.createElement(X,null,"Color"),a.a.createElement("div",null,a.a.createElement(fe,{type:"text",placeholder:E.descriptionColor,onChange:F}),a.a.createElement(pe,{type:"color",value:E.descriptionColor,onChange:F})),a.a.createElement(X,null,"Font size"),a.a.createElement(_,{type:"text",placeholder:E.fontSizeDescription,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{fontSizeDescription:e.currentTarget.value}))}})),a.a.createElement(X,null,"Padding"),a.a.createElement(Ee,{type:"text",placeholder:E.marginDescription,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{marginDescription:e.currentTarget.value}))}}),a.a.createElement(X,null,"Margin"),a.a.createElement(Ee,{type:"text",placeholder:E.paddingDescription,onChange:function(e){v(Object(i.a)(Object(i.a)({},E),{},{paddingDescription:e.currentTarget.value}))}})):a.a.createElement(a.a.Fragment,null))),a.a.createElement(we,null,a.a.createElement(ke,null,a.a.createElement("p",null,"In order for this component to work, your collaborators array should look like this:")),a.a.createElement(Te,null,a.a.createElement("pre",null,a.a.createElement(Se,null,"\n  collaboratorsArray = [{\n    image: 'mandatory url',\n    title: 'mandatory title',\n    description: 'optional description'\n  }, {}, ...];\n  "))),a.a.createElement(ke,null,a.a.createElement("p",null,"Once you are happy with the result, just copy and paste the following variables with the styles:")),a.a.createElement(Te,null,a.a.createElement("pre",null,a.a.createElement(Se,null,j)),a.a.createElement("pre",null,a.a.createElement(Se,null,C)),a.a.createElement("pre",null,a.a.createElement(Se,null,w))),a.a.createElement(ke,null,a.a.createElement("p",null,"Finally your component should look like this:")),a.a.createElement(Te,null,a.a.createElement("pre",null,a.a.createElement(Se,null,y))),a.a.createElement(ke,null,a.a.createElement("p",null,"I hope you find this component useful!"))))};l.a.render(a.a.createElement(He,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5d2e355c.chunk.js.map