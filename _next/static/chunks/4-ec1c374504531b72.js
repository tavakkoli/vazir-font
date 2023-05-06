"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{1023:function(t,e,n){var r=n(5944),a=n(7294),o=n(6010),i=n(1163),c=n(1664),l=n(122),u=n(1496),f=n(8145);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}function h(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=(0,u.ZP)("a")({}),m=a.forwardRef((function(t,e){var n=t.to,a=t.linkAs,o=(t.href,t.replace),i=t.scroll,l=t.shallow,u=t.prefetch,f=t.locale,s=h(t,["to","linkAs","href","replace","scroll","shallow","prefetch","locale"]);return(0,r.tZ)(c.default,{href:n,prefetch:u,as:a,replace:o,scroll:i,shallow:l,passHref:!0,locale:f,children:(0,r.tZ)(p,d({ref:e},s))})})),g=a.forwardRef((function(t,e){var n=t.activeClassName,a=void 0===n?"active":n,c=t.as,u=t.className,f=t.href,g=t.noLinkStyle,v=(t.role,h(t,["activeClassName","as","className","href","noLinkStyle","role"])),Z=(0,i.useRouter)(),b="string"===typeof f?f:f.pathname,y=(0,o.Z)(u,s({},a,Z.pathname===b&&a));return"string"===typeof f&&(0===f.indexOf("http")||0===f.indexOf("mailto:"))?g?(0,r.tZ)(p,d({className:y,href:f,ref:e},v)):(0,r.tZ)(l.Z,d({className:y,href:f,ref:e},v)):g?(0,r.tZ)(m,d({className:y,ref:e,to:f},v)):(0,r.tZ)(l.Z,d({component:m,linkAs:c,className:y,ref:e,to:f},v))}));var v=a.forwardRef((function(t,e){var n=t.href,a=t.lang,o=t.as,i=h(t,["href","lang","as"]),c="string"===typeof n?n:n.pathname;o&&(c=o.toString());var l="string"===typeof n&&(0===n.indexOf("http")||0===n.indexOf("mailto:"))?n:a?"/".concat(a,"/").concat(function(t){if(!t||!t.startsWith("/"))return t;var e=t.split("/");return e.length>2&&!(0,f.Vb)().includes(e[1])?e.join("/"):e.length>2?e.slice(2).join("/"):"/"}(c)):"/".concat(f.ZP.language).concat(c);return(0,r.tZ)(g,d({href:l},i))}));e.C=v},927:function(t,e,n){n.d(e,{A:function(){return L}});var r=n(5944),a=n(7357),o=n(5861),i=n(1023);function c(){return(0,r.tZ)(a.Z,{sx:function(t){return{px:1,py:1,mt:"auto",backgroundColor:t.palette.background.paper}},children:(0,r.BX)(o.Z,{variant:"body2",color:"textSecondary",align:"center",children:[(0,r.tZ)(i.C,{href:"https://github.com/rastikerdar/vazirmatn",children:"View on GitHub"})," | ",(0,r.tZ)(i.C,{href:"https://github.com/rastikerdar/vazirmatn/tree/master/website",children:"Website Source"})]})})}var l=n(2734),u=n(9008),f=n(7469),s=function(){var t=(0,l.Z)();return(0,r.BX)(u.default,{children:[(0,r.tZ)("meta",{name:"theme-color",content:t.palette.background.default}),(0,r.tZ)("meta",{name:"description",content:"\u0635\u0641\u062d\u0647 \u0631\u0633\u0645\u06cc ".concat(f.px,".")})]})},d=n(3946),h=n(7058),p=n(5823),m=n(6783),g=n(4193),v=n(7924),Z=n(2293),b=n(155),y=n(6109),k=n(7294),x=n(8782),w=n(5819),O=n(2563),C=n(3030),z=n(3265),P=n(8145),S=n(1163);function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){j(t,e,n[e])}))}return t}function N(){var t=(0,l.Z)(),e=(0,S.useRouter)(),n=e.pathname,a=e.query,o=e.asPath;return(0,r.tZ)(O.ZP,{variant:"popover",children:function(e){return(0,r.BX)(k.Fragment,{children:[(0,r.tZ)(C.Z,_({},(0,O.vW)(e),{variant:"text",startIcon:(0,r.tZ)(z.Z,{fontSize:"small"}),sx:{color:t.palette.text.primary,ml:1},title:"Select Language",children:(0,P.WZ)(P.ZP.language)})),(0,r.tZ)(x.Z,_({elevation:0},(0,O.wK)(e),{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,P.Vb)().map((function(c){return(0,r.tZ)(i.C,{sx:{textDecoration:"none",color:t.palette.text.primary},href:{pathname:n,query:a},as:o,lang:c,onClick:function(){e.close()},children:(0,r.tZ)(w.Z,{selected:P.ZP.language===c,children:(0,P.WZ)(c)})},c)}))}))]})}})}var B=n(4090),E=function(){var t=(0,h.$)(void 0,{keyPrefix:"header"}).t,e=(0,l.Z)(),n=(0,B.I)();return(0,r.tZ)(Z.Z,{sx:{backgroundColor:e.palette.background.default,backgroundImage:"none",boxShadow:"none",borderBottomColor:e.palette.divider,top:"0 !important"},position:"sticky",elevation:0,children:(0,r.BX)(b.Z,{sx:{justifyContent:"center",gap:1},children:[(0,r.tZ)(i.C,{href:"/",children:(0,r.tZ)(d.Z,{size:"large",sx:{color:e.palette.text.primary},title:t("home"),children:(0,r.tZ)(g.Z,{fontSize:"small"})})}),(0,r.tZ)(i.C,{href:"/docs",children:(0,r.tZ)(d.Z,{size:"large",sx:{color:e.palette.text.primary},title:t("docs"),children:(0,r.tZ)(v.Z,{fontSize:"small"})})}),(0,r.tZ)(i.C,{href:"/lab",children:(0,r.tZ)(d.Z,{size:"large",sx:{color:e.palette.text.primary},title:t("lab"),children:(0,r.tZ)(y.Z,{fontSize:"small"})})}),(0,r.BX)(d.Z,{onClick:function(){return n()},size:"large",sx:{color:e.palette.text.primary},title:"light"===e.palette.mode?t("night_mode"):t("day_mode"),children:["light"===e.palette.mode&&(0,r.tZ)(p.Z,{fontSize:"small"}),"dark"===e.palette.mode&&(0,r.tZ)(m.Z,{fontSize:"small"})]}),(0,r.tZ)(N,{})]})})},L=function(t){var e=t.children,n=t.disableFooter;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s,{}),(0,r.BX)(a.Z,{id:"back-to-top-anchor",sx:{display:"flex",flexDirection:"column",height:"100vh"},children:[(0,r.tZ)(E,{}),e,!n&&(0,r.tZ)(c,{})]})]})}},4310:function(t,e,n){n.d(e,{U:function(){return i}});var r=n(1496),a=n(1796),o=n(3030),i=(0,r.ZP)(o.Z)((function(t){var e=t.color,n=t.variant,r=t.selected,o=t.theme,i=void 0;return r&&o&&(i="primary"===e||"secondary"===e?"text"===n||"outlined"===n?"light"===o.palette.mode?(0,a.$n)(o.palette[e].main,.8):(0,a._j)(o.palette[e].main,.6):"dark"===o.palette.mode?(0,a.$n)(o.palette[e].main,.6):o.palette[e].dark:o.palette.action.selected),{backgroundColor:i,":focus":{backgroundColor:i},":hover":{backgroundColor:i}}}))},7469:function(t,e,n){n.d(e,{px:function(){return a},oU:function(){return o},GW:function(){return i},_9:function(){return l},bB:function(){return u}});var r=n(3454),a="\u0641\u0648\u0646\u062a \u0648\u0632\u06cc\u0631\u0645\u062a\u0646 Vazirmatn",o="https://rastikerdar.github.io/vazirmatn",i="/"===r.env.NEXT_PUBLIC_BASE_PATH?"":"/vazirmatn",c="v33.003",l="".concat("https://github.com/rastikerdar/vazirmatn/releases/download","/").concat(c,"/vazirmatn-").concat(c,".zip"),u=r.env.NEXT_PUBLIC_CDN_URL?r.env.NEXT_PUBLIC_CDN_URL:"https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@".concat(c);"".concat(u,"/Vazirmatn-font-face.css"),"".concat(u,"/Round-Dots/Vazirmatn-RD-font-face.css")},6269:function(t,e,n){n.d(e,{ko:function(){return a},cu:function(){return o},iP:function(){return i},uf:function(){return c},as:function(){return l}});var r=n(7294);function a(t,e,n){return t.replace(new RegExp(e,"g"),n)}function o(t){var e=document.createElement("style");e.textContent=t,document.head.append(e)}function i(){var t=(0,r.useState)({width:void 0,height:void 0}),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e}function c(t,e){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,e)}function l(t){var e={0:"\u06f0",1:"\u06f1",2:"\u06f2",3:"\u06f3",4:"\u06f4",5:"\u06f5",6:"\u06f6",7:"\u06f7",8:"\u06f8",9:"\u06f9"};return t.toString().replace(/[0-9]/gi,(function(t){return e[t]}))}}}]);