"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{4895:function(t,e,n){n.r(e),n.d(e,{IndexLayout:function(){return R},__N_SSG:function(){return S},default:function(){return _}});var r=n(5944),i=n(9008),a=n(2734),o=n(6886),l=n(5861),d=n(7357),c=n(7058),h=n(3441),s=n(3030),u=n(7924),f=n(6109),m=n(5449),p=n(927),Z=n(1023),x=n(7469),g=n(4051),v=n.n(g),b=n(7294),y=n(4310),k=n(6269),I=n(2848),E=n(8145),C=function(t){var e,n=(0,a.Z)(),i=(0,c.$)().i18n,o=((0,k.iP)(),t.donations),l=(0,b.useRef)(null),h=(null===(e=l.current)||void 0===e?void 0:e.scrollWidth)||0,s=Math.floor(h/65),u=Math.ceil(o.length/s);return(0,r.tZ)(d.Z,{ref:l,sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:0,mt:1,height:"".concat(300,"px"),border:1,borderColor:n.palette.divider,borderRadius:"5px",overflow:"hidden"},children:(0,r.tZ)(I.t7,{height:300,itemCount:u,itemSize:140,width:h,direction:(0,E.j9)(i.language),overscanCount:4,children:function(t){var e=t.index,a=t.style,l=o.slice(e*s,e*s+s);return(0,r.tZ)(d.Z,{style:a,children:(0,r.tZ)(d.Z,{sx:{display:"flex",justifyContent:"center",width:"100%"},children:l.map((function(t){return(0,r.tZ)("div",{style:{width:"".concat(65,"px"),fontSize:"0.7rem",lineHeight:1.3,float:"right",overflow:"hidden",paddingTop:8},children:(0,r.BX)("a",{href:t.web?t.web:void 0,title:"".concat(t.date,"\n").concat(t.name),style:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",paddingTop:8,height:"".concat(140,"px"),color:t.web?void 0:n.palette.text.primary},target:"__blank",children:[(0,r.tZ)("img",{style:{width:"50px",height:"50px",borderRadius:"50%"},src:t.img?t.img:"https://s.gravatar.com/avatar/".concat(t.date.replace(/(\s)|(:)|(\/)/g,""),"?noemail&s=50&d=wavatar")}),(0,r.tZ)("div",{style:{paddingTop:"4px",overflow:"hidden"},children:t.name}),(0,r.tZ)("div",{style:{fontSize:"0.6rem",color:n.palette.text.primary,opacity:.5},children:"fa"===i.language?(0,k.as)((0,k.uf)(t.amount,"\u066c")):(0,k.uf)(t.amount,",")})]})})}))})})}})})};function T(t,e,n,r,i,a,o){try{var l=t[a](o),d=l.value}catch(c){return void n(c)}l.done?e(d):Promise.resolve(d).then(r,i)}var w="bc1q0e0s5my3cwv26k265hcfef28zk7sxd78vu3cdr",z="0x9E14bC58582792aC40E8dac45000f16A270486D8",A=function(){var t=(0,c.$)(void 0,{keyPrefix:"donation"}),e=t.t,n=t.i18n,i=(0,b.useState)([]),a=i[0],o=i[1],l=(0,b.useState)("amount"),h=l[0],u=l[1],f=(0,b.useState)(!1),m=f[0],p=f[1],Z=((0,k.iP)(),a.reduce((function(t,e){return t+e.amount}),0)),g="amount"===h?a.sort((function(t,e){return t.amount<e.amount?1:-1})):a.sort((function(t,e){return t.date>e.date?1:-1}));return(0,b.useEffect)((function(){var t=function(){var t,e=(t=v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x.GW,"/donations.json"));case 2:return e=t.sent,t.t0=o,t.next=6,e.json();case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){T(a,r,i,o,l,"next",t)}function l(t){T(a,r,i,o,l,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[]),(0,r.BX)(d.Z,{sx:{display:"flex",flexDirection:"column",textAlign:"center",fontSize:"0.8rem",width:"100%"},children:[(0,r.tZ)("p",{children:e("payment_title")}),(0,r.BX)("p",{style:{marginTop:0},children:[(0,r.tZ)(s.Z,{color:"primary",variant:"outlined",href:"https://www.payping.ir/d/zfLz",sx:{borderRadius:"25px"},children:e("toman_payment")})," ",(0,r.tZ)(s.Z,{variant:"outlined",color:"primary",onClick:function(){return p(!m)},sx:{borderRadius:"25px"},children:"BTC/ETH donation"})]}),(0,r.BX)(d.Z,{id:"btc-address",sx:{display:m?"block":"none",mb:3},children:[(0,r.BX)(d.Z,{children:[(0,r.tZ)("div",{children:(0,r.tZ)("b",{children:"Bitcoin"})}),(0,r.tZ)("div",{children:(0,r.tZ)("a",{href:"bitcoin:bc1q0e0s5my3cwv26k265hcfef28zk7sxd78vu3cdr",children:(0,r.tZ)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAYAAADD2FojAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADjUlEQVR4nO3dSW7FNhBF0TjI/rfsjAIEGnyGvixJDs4ZfzUwHsoFNuLX9/f39x8Q/Pn0C/D7CRGZEJEJEZkQkQkRmRCRCRGZEJEJEZkQkQkRmRCR/fXTC7++vk6+x9J1scH1+avFCLvvu7u4YXX/0/c7rSzmUInIhIhMiMh+3BNdnV4gudtjnO5JTqvvd/ffd4dKRCZEZEJEdqwnupoel1ldv3r+3T3X7rjWyt1/309UIjIhIhMisrGe6GnT40Kn5/KeHscqVCIyISITIrL/TU+06jFqD/L0+qI3U4nIhIhMiMjGeqK7/+fv9kCne6jaM033aJNUIjIhIhMismM90d37pJ6ee5oel1o9701UIjIhIhMish/3RG8ap/gvTo8bnX7+1W/6+6pEZEJEJkRkY98nqvu2Vj3E6Z6lzl3t9lR3jzNdnby/SkQmRGRCRDY2TnR3j7J7fe0JpseVTveUq98XKhGZEJEJEdnXT0+jPj3uc/p7O6d7iN3rT7/fypP73FQiMiEiEyKyY+NEd88NTa/vedsa6dPfjNy9/hOViEyIyISI7Nh6ored7TE9DrT6/e79r57eV7dDJSITIjIhIhvbiz89N7b7++n1T6v7Te9je5JKRCZEZEJENjZ3dvr66bm12jOdnotbzUWunO7BPlGJyISITIjIxtZYX919Ptj0muO7953tvs/p+3+iEpEJEZkQkd02TnT3OfWr61fPP71+5+4zaa+ME/FqQkQmRGTHxomm946/vWe6+3y1N50xqxKRCRGZEJE9dt7Z6b38u07vvX/6e0fTPdgnKhGZEJEJEdmxnmhlelzk9DjS6bmm6fVUT+5DU4nIhIhMiMhu64me3qu/e7/d97l7b309X+0klYhMiMiEiGzsvLPp+9W5oToXtXL6+0pXT/eQ/6YSkQkRmRCRHfuO9bTa01xNj+tMnz3yJioRmRCRCRHZsbmzu8/2WP2+9ky7959ef7TyZA+lEpEJEZkQkY2tJ5qe26nfld6938r0GvHTz/fNRl5FiMiEiOy2NdbTnh73mR6n2n3+6nn24vMqQkQmRGS/tieq33Scnls6PS5Tex77zng1ISITIrKxnujtPcf0Gujdb1Cu7l9Nrn9SiciEiEyIyG47A7Z625rmavqce2us+VWEiEyIyH7cE8E/VCIyISITIjIhIhMiMiEiEyIyISITIjIhIhMiMiEiEyIyISL7G2WcL0zsTMRlAAAAAElFTkSuQmCC"})})}),(0,r.tZ)(d.Z,{sx:function(t){return{display:"inline-block",border:1,borderColor:t.palette.devider,p:.5}},onClick:function(){navigator.clipboard.writeText(w),alert("Copied")},children:w})]}),(0,r.BX)(d.Z,{sx:{mt:3},children:[(0,r.tZ)("div",{children:(0,r.tZ)("b",{children:"Ethereum"})}),(0,r.tZ)(d.Z,{sx:function(t){return{display:"inline-block",border:1,borderColor:t.palette.devider,p:.5}},onClick:function(){navigator.clipboard.writeText(z),alert("Copied")},children:z})]})]}),(0,r.BX)(d.Z,{sx:{display:"flex",columnGap:3,rowGap:1,alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[(0,r.BX)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[e("donations_from"),":"," ","fa"===n.language&&"".concat((0,k.as)((0,k.uf)(Z,"\u066c"))," ").concat(e("toman")),"fa"!==n.language&&(0,r.tZ)("span",{style:{direction:"ltr",margin:"0 5px"},children:"".concat((0,k.uf)(Z,",")," ").concat(e("toman")," = ").concat(Math.ceil(Z/26e3)," USD")})]}),(0,r.BX)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:1},children:[e("order_by"),":",(0,r.tZ)(y.U,{color:"inherit",variant:"text",onClick:function(){return u("date")},selected:"date"===h,size:"small",sx:{fontSize:"0.8rem",minWidth:"unset"},children:e("date")}),(0,r.tZ)(y.U,{color:"inherit",variant:"text",onClick:function(){return u("amount")},selected:"amount"===h,size:"small",sx:{fontSize:"0.8rem",minWidth:"unset"},children:e("amount")})]})]}),0===a.length&&"Fetching donation data...",a.length>0&&(0,r.tZ)(C,{donations:g}),(0,r.tZ)(d.Z,{mt:1,children:(0,r.tZ)("a",{href:"https://github.com/rastikerdar/vazirmatn/blob/gh-pages/donations.json",target:"_blank",children:e("list_source")})})]})},j=function(){var t=(0,c.$)(void 0,{keyPrefix:"index"}),e=t.t,n=t.i18n,i=(0,b.useState)("vazirmatn"),a=i[0],o=i[1];return(0,b.useEffect)((function(){var t=setTimeout((function(){o("vazirmatn"===a?"vazirmatn rd":"vazirmatn")}),5e3);return function(){clearTimeout(t)}}),[a,o]),(0,r.tZ)(l.Z,{variant:"h3",component:"h1",gutterBottom:!0,sx:{fontWeight:"900",mb:1,fontFamily:a},children:e("hero_title","en"==n.language?{lng:"fa"}:void 0)})},S=!0;function R(){var t=(0,a.Z)(),e=(0,c.$)(void 0,{keyPrefix:"index"}),n=e.t;e.i18n;return(0,r.tZ)(r.HY,{children:(0,r.BX)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.BX)(o.ZP,{container:!0,mt:1,mb:4,px:2,wrap:"wrap",maxWidth:"md",alignItems:"center",rowGap:2,children:[(0,r.tZ)(o.ZP,{item:!0,lg:6,md:6,xs:12,children:(0,r.BX)(d.Z,{my:2,sx:{mb:2,"@media (max-width: 480px)":{mb:0},textAlign:"center"},children:[(0,r.tZ)(j,{}),(0,r.tZ)(l.Z,{variant:"h5",component:"h2",gutterBottom:!0,sx:{fontWeight:"200"},children:n("hero_tail")})]})}),(0,r.tZ)(o.ZP,{item:!0,lg:6,md:6,xs:12,children:(0,r.BX)(d.Z,{sx:{textAlign:"center"},children:[(0,r.tZ)(s.Z,{sx:{mt:1,fontSize:"1.2rem","&:hover":{backgroundColor:"light"===t.palette.mode?"#fff4e8":void 0},border:"1px solid black"},variant:"contained",color:"download",href:x._9,endIcon:(0,r.tZ)(h.Z,{fontSize:"small"}),size:"large",children:n("downlod_full_package")}),(0,r.BX)(l.Z,{component:"h6",sx:{fontWeight:"normal",mt:1},children:[n("version")," v33.003"]})]})})]}),(0,r.tZ)(d.Z,{maxWidth:"md",px:2,children:n("font_description")}),(0,r.BX)(d.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"center",my:2},children:[(0,r.tZ)(Z.C,{href:"/docs",children:(0,r.tZ)(s.Z,{variant:"outlined",color:"inherit",startIcon:(0,r.tZ)(u.Z,{fontSize:"small"}),size:"large",sx:{color:t.palette.text.primary},children:n("docs")})}),(0,r.tZ)(Z.C,{href:"/lab",children:(0,r.tZ)(s.Z,{variant:"outlined",color:"inherit",startIcon:(0,r.tZ)(f.Z,{fontSize:"small"}),size:"large",sx:{color:t.palette.text.primary},children:n("lab")})}),(0,r.tZ)(Z.C,{href:"https://github.com/rastikerdar/vazirmatn",noLinkStyle:!0,children:(0,r.tZ)(s.Z,{variant:"outlined",color:"inherit",startIcon:(0,r.tZ)(m.Z,{fontSize:"small"}),size:"large",sx:{color:t.palette.text.primary},children:n("github")})})]}),(0,r.tZ)(d.Z,{maxWidth:"md",sx:{display:"flex",justifyContent:"center",width:"100%"},children:(0,r.tZ)(d.Z,{sx:{mx:2,width:"100%"},children:(0,r.tZ)(A,{})})}),(0,r.BX)(d.Z,{maxWidth:"md",sx:{width:"100%",p:2,textAlign:"center",wordWrap:"break-word",fontSize:"0.8rem"},children:[n("other_free_fonts"),":\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/sahel-font/",target:"_blank",children:"\u0633\u0627\u062d\u0644"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/parastoo-font/",target:"_blank",children:"\u067e\u0631\u0633\u062a\u0648"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/samim-font/",target:"_blank",children:"\u0635\u0645\u06cc\u0645"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/tanha-font/",target:"_blank",children:"\u062a\u0646\u0647\u0627"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/gandom-font/",target:"_blank",children:"\u06af\u0646\u062f\u0645"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/shabnam-font/",target:"_blank",children:"\u0634\u0628\u0646\u0645"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/nahid-font/",target:"_blank",children:"\u0646\u0627\u0647\u06cc\u062f"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://rastikerdar.github.io/vazir-code-font/",target:"_blank",children:"\u0648\u0632\u06cc\u0631\u06a9\u062f"}),(0,r.tZ)("br",{}),n("from_other_designers"),":\xa0",(0,r.tZ)("a",{href:"http://libre.font-store.ir/NikaFont/",target:"_blank",children:"\u0646\u06cc\u06a9\u0627"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://aminabedi68.github.io/Estedad/",target:"_blank",children:"\u0627\u0633\u062a\u0639\u062f\u0627\u062f"}),"\u060c\xa0",(0,r.tZ)("a",{href:"https://pfont.github.io/",target:"_blank",children:"\u067e\u06cc\u200c\u0641\u0648\u0646\u062a"})]}),(0,r.tZ)(d.Z,{maxWidth:"md",sx:{width:"100%",textAlign:"center",fontSize:"0.8rem"},children:(0,E.Vb)().map((function(t){return(0,r.BX)(Z.C,{href:"",lang:t,noLinkStyle:!0,children:[(0,E.WZ)(t)," "]},t)}))})]})})}var _=function(){return(0,r.BX)(p.A,{children:[(0,r.tZ)(i.default,{children:(0,r.tZ)("title",{children:x.px})}),(0,r.tZ)(R,{})]})}}}]);