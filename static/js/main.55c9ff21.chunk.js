(this["webpackJsonpreact-only-mobilize"]=this["webpackJsonpreact-only-mobilize"]||[]).push([[0],{27:function(e,t,n){e.exports=n(82)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},61:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=n(3),i=n(9),u=(n(32),Object(a.createContext)(void 0)),s=u,d=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],l=t[1],c={background:"white",color:"#004ac7",height:"100%",marginLeft:"10px",fontSize:"15px",fontWeight:"600",alignBottom:!0,pane:"mapPane"};return r.a.createElement(s.Consumer,null,(function(e){return r.a.createElement("div",null,e.filter((function(e){return e.coordinates.lat})).map((function(e,t){return r.a.createElement(i.d,{key:t,defaultAnimation:Animation.bounce,onClick:function(){return l(e)},markers:e.title,position:{lat:e.coordinates.lat,lng:e.coordinates.lng}})})),n&&r.a.createElement(i.b,{position:{lat:n.coordinates.lat,lng:n.coordinates.lng},onCloseClick:function(){return l(null)}},r.a.createElement("div",{style:c},r.a.createElement("p",null,r.a.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#004ac7"}},n.title)),r.a.createElement("p",null,n.eventType))))}))},m=r.a.memo((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{lat:40.7282702,lng:-73.9506774};return e&&(t=e.find((function(e){return e.coordinates.lat}))),t.coordinates};return r.a.createElement("div",{className:"map-container"},r.a.createElement(i.c,{id:"script-loader",googleMapsApiKey:"AIzaSyBAIUgwAR_dlfIsaPfdoHvq9pCHJDwYUWY"},r.a.createElement(s.Consumer,null,(function(t){return r.a.createElement(i.a,{id:"circle-example",mapContainerStyle:{height:"60vh",width:"60vw",overflow:"hidden",borderRadius:"20px",border:"solid #0d0a92 2px",boxShadow:"0 1rem 2rem rgba(0,0,0,.8)"},zoom:12,center:e(t)},r.a.createElement(d,null))}))))})),v=n(7),f=["canvass","phone_bank ","fundraiser","voter_reg","training","debate_watch_party","town_hall","barnstorm","signature_gathering"],p="https://api.mobilize.us/v1/events?".concat("per_page=12","&").concat("timeslot_start=gte_1577836800"),b=function(e){var t=e.handleEventFilters,n=e.doneAddingEvents;return r.a.createElement("div",null,r.a.createElement("form",{className:"form"},f.map((function(e,n){return r.a.createElement("div",{key:n,className:"event-type__option"},r.a.createElement("input",{type:"checkbox",id:e,name:e,value:e,hidden:!0,onClick:t}),r.a.createElement("label",{for:e,value:e},function(e){return e.replace(new RegExp("_","g")," ").toLowerCase()}(e)))})),r.a.createElement("span",{style:{display:"flex",margin:"0px auto"}},r.a.createElement("button",{onClick:function(e){return n(e)}},"submit"))))},g=(n(33),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)([]),u=Object(o.a)(i,2),s=u[0],d=u[1],m=Object(a.useState)(!1),f=Object(o.a)(m,2),p=f[0],g=f[1];return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"zip-input"},r.a.createElement("input",{className:"zip-input",placeholder:"enter zip code",type:"text",name:"zipcode",onBlur:function(e){return c(e.target.value)}}),!p&&r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.oldUpdateRequestUrl(l)},className:"zipcode"},"Search"),!p&&r.a.createElement("button",{className:"zipcode",onClick:function(e){return g(!0)}},"Add Filters")),p&&r.a.createElement(b,{handleEventFilters:function(e){var t=e.target.value;d([].concat(Object(v.a)(s),[t]))},doneAddingEvents:function(t){t.preventDefault();var n=s.length>1?s.map((function(e){return"&event_types="+e})).join(""):"&event_types="+s;return e.oldUpdateRequestUrl(l,n),document.querySelectorAll("input[type=checkbox]").forEach((function(e){return e.checked=!1})),d([]),n}}))}),E=(n(34),function(e){var t=e.eventTags,n=t.eventType,a=t.eventDate,l=t.link,c=function(e){return e.replace(new RegExp("_","g")," ")};return r.a.createElement("div",{className:"tag__container"},r.a.createElement("div",{className:"tag",style:{backgroundColor:"#004ac7"}},c(n)),r.a.createElement("div",{className:"tag",style:{backgroundColor:"#3CB371"}},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"white"}},"JOIN EVENT")),r.a.createElement("div",{className:"tag",style:{backgroundColor:"#474747"}},c(function(e){return e.start>=Math.round((new Date).getTime()/1e3)?"CURRENT":"PASSED"}(a))))}),h=(n(35),function(e){var t,n=Object(a.useState)(!1),l=Object(o.a)(n,2),c=l[0],i=l[1],u=function(){i(!c)},s=e.event[1],d=s.title,m=s.details,v=s.eventDate;return r.a.createElement("div",{className:"event-card",onClick:u},r.a.createElement("div",{className:"event-card__date"},(t=v.start,new Date(1e3*t).toLocaleString().replace(":00",""))," "),r.a.createElement("div",{className:"event-card__title",onClick:u},d.toUpperCase()),c?r.a.createElement("div",{className:"event-card__description"},m):null,r.a.createElement(E,{eventTags:e.event[1]}))}),O=(n(36),n(23)),_=n(1),j=n(25);function y(){var e=Object(O.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n"]);return y=function(){return e},e}var k=Object(_.css)(y()),w=function(e){var t=e.loading;return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(j.PulseLoader,{css:k,sizeUnit:"px",size:15,margin:6,color:"#004ac7",loading:t}))},x=function(e){var t=e.events,n=e.lastEventElementRef,a=e.loading;return r.a.createElement("div",{className:"event-list__container"},t.length?t.length<2?r.a.createElement(h,{event:t[0]}):Object.entries(t).map((function(e,a){return t.length===a+1?r.a.createElement("div",{ref:n,key:a},e.title):r.a.createElement(h,{key:a,event:e})})):r.a.createElement("div",{className:"no-results"},"Oh dear!",r.a.createElement("br",null)," Your search returned no events."),a&&r.a.createElement(w,{loading:a}))},N=(n(61),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:"https://uploads-ssl.webflow.com/5e2f6f2acb2e5ea801e164bb/5e4f731d9da233ac2e3922f8_fpo-logo-white.svg",alt:"logo",style:{width:"15%"}}),r.a.createElement("div",{className:"header__title"},"Search Mobilze Database for events displayed on map"))}),S=n(12),C=n.n(S),z=n(26),D=n(11),R=n.n(D),A=function(e){var t,n,a,r,l,c,o;return{id:e.id,showEventDetails:!1,eventType:e.event_type,title:e.title,details:e.description,zipcode:(null===(t=e.location)||void 0===t?void 0:t.postal_code)||null,coordinates:{lat:(null===(n=e.location)||void 0===n||null===(a=n.location)||void 0===a?void 0:a.latitude)||null,lng:(null===(r=e.location)||void 0===r||null===(l=r.location)||void 0===l?void 0:l.longitude)||null},eventDate:{start:(null===(c=e.timeslots[e.timeslots.length-1])||void 0===c?void 0:c.start_date)||null,end_date:(null===(o=e.timeslots[e.timeslots.length-1])||void 0===o?void 0:o.end_date)||null},url:e.browser_url||null,eventImg:e.featured_image_url||null,link:e.browser_url||null}},U=(n(80),function(){var e=Object(a.useState)(1),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),s=i[0],d=i[1],f=function(e,t){var n=Object(a.useState)(!0),r=Object(o.a)(n,2),l=r[0],c=r[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),s=u[0],d=u[1],m=Object(a.useState)([]),f=Object(o.a)(m,2),b=f[0],g=f[1],E=Object(a.useState)(!1),h=Object(o.a)(E,2),O=h[0],_=h[1],j=Object(a.useState)(null),y=Object(o.a)(j,2),k=y[0],w=y[1];return Object(a.useEffect)((function(e,t){w(null),g([])}),[t]),Object(a.useEffect)((function(){(function(){var n=Object(z.a)(C.a.mark((function n(){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c(!0),d(!1),n.prev=2,!(e>1)){n.next=9;break}return n.next=6,R.a.get(k);case 6:a=n.sent,n.next=18;break;case 9:if(!t){n.next=15;break}return n.next=12,R.a.get(t);case 12:a=n.sent,n.next=18;break;case 15:return n.next=17,R.a.get(p+"&zipcode=10001");case 17:a=n.sent;case 18:g((function(e){return Object(v.a)(new Set([].concat(Object(v.a)(e),Object(v.a)(a.data.data.map((function(e){return A(e)}))))))})),_(a.data.count>0),w(a.data.next),c(!1),n.next=28;break;case 24:n.prev=24,n.t0=n.catch(2),console.log("this is the error",n.t0.message),d(!0);case 28:case"end":return n.stop()}}),n,null,[[2,24]])})));return function(){return n.apply(this,arguments)}})()()}),[e,t]),{loading:l,error:s,fetchedEvents:b,hasMore:O}}(n,s),b=f.loading,E=f.error,h=f.fetchedEvents,O=f.hasMore,_=Object(a.useRef)(),j=Object(a.useCallback)((function(e){b||(_.current&&_.current.disconnect(),_.current=new IntersectionObserver((function(e){e[0].isIntersecting,e[0].isIntersecting&&O&&l((function(e){return e+1}))})),e&&_.current.observe(e))}),[b,O]);return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"body"},b?r.a.createElement(w,{loading:b}):r.a.createElement(u.Provider,{value:h},r.a.createElement(x,{events:h,loading:b,lastEventElementRef:j}),r.a.createElement("div",{className:"main-page"},r.a.createElement(g,{oldUpdateRequestUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";d(p+"&zipcode="+e+t),l(1)}}),E&&r.a.createElement("div",null,"ZipCode Not Valid"),r.a.createElement(m,null)))))});n(81);c.a.render(r.a.createElement(U,null),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.55c9ff21.chunk.js.map