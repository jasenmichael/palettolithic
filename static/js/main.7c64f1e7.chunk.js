(this.webpackJsonppalettolithic=this.webpackJsonppalettolithic||[]).push([[0],{23:function(e,t,a){e.exports=a(67)},28:function(e,t,a){},35:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),c=a.n(o),l=(a(28),a(29),a(30),a(1));var i=function(e){return n.a.createElement("div",{"data-name":"shade",className:"",style:{backgroundColor:e.shade}})};var u=function(e){return!!Array.isArray(e.shades)&&n.a.createElement("div",{className:"flex-1 rounded p-1","data-name":"color-outer"},n.a.createElement("div",{className:"grid grid-cols-10 gap-1 h-full rounded","data-name":"color-inner"},n.a.createElement("span",{className:"my-auto"},e.color.toUpperCase(),":"),e.shades.map((function(e,t){return n.a.createElement(i,{key:t,shade:e})}))))};var s=function(e){var t=Object.keys(e.palette);return n.a.createElement("div",{id:"palette-outer",className:"col-span-8 row-span-8 flex-auto bg-white rounded p-1 pl-2"},n.a.createElement("div",{id:"palette-inner",className:"flex flex-col justify-between h-full rounded overflow-hidden"},t.map((function(t,a){return n.a.createElement(u,{key:a,shades:e.palette[t],color:t})}))))};a(31);var m=function(e){return n.a.createElement("li",{className:"cursor-pointer p-2 capitalize text-lg mt-2 border-l-4\n      ".concat(function(e,t){var a=function(a){return t===e?a.active:a.nonActive};switch(e){case"tailwind":return a({active:"bg-teal-400 border-teal-400 rounded",nonActive:"hover:bg-teal-400 hover:rounded border-teal-400 transition duration-200"});case"bootstrap":return a({active:"bg-purple-400 border-purple-400 rounded ",nonActive:"hover:bg-purple-400 hover:rounded border-purple-400 transition duration-200"});case"css":return a({active:"bg-orange-400 border-orange-400 rounded ",nonActive:"hover:bg-orange-400 hover:rounded border-orange-400 transition duration-200"});default:return""}}(e.framework,e.activeFramework),"\n      "),onClick:function(){return e.setActiveFramework(e.framework)}},e.framework)};var d=function(e){return n.a.createElement("ul",{className:"pt-12"},n.a.createElement(m,{framework:"tailwind",activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}),n.a.createElement(m,{framework:"bootstrap",activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}),n.a.createElement(m,{framework:"css",activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}))},v=a(5),f=(a(34),a(35),a(22));function p(){return n.a.createElement(n.a.Fragment,null,"I'm looking for work:",n.a.createElement("br",null),n.a.createElement(f.a,{className:"inline"})," ",n.a.createElement("a",{href:"https://github.com/tombohub/palettolithic",className:"underline"}," ","Github"))}var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-span-2 row-span-7"},n.a.createElement(v.b,{color:e.color,onChange:e.onColorChange}),n.a.createElement(v.a,{placeholder:"HEX code",color:e.color,onChange:e.onColorChange,className:"bg-gray-200 rounded p-2 border w-full "}),n.a.createElement(d,{activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}),n.a.createElement("div",{className:"mt-48"},n.a.createElement(p,null))))},h=a(12),b=a(36),w=["red","orange","yellow","lime","green","teal","cyan","blue","indigo","violet","purple","pink","red"],E=[.95,.86,.78,.69,.6,.51,.43,.34,.25],k=function(e){return function(t){var a=b(t).hsl(),r=Object(l.a)(a,3),n=r[0],o=(r[1],r[2]);return b.hsl(n,e,o).hex()}},y=function(e){var t=b(e).hsl(),a=Object(l.a)(t,3),r=a[0],n=a[1];a[2];return E.map((function(e){return b.hsl(r,n,e).hex()}))},x=function(e){var t=b(e).hsl(),a=Object(l.a)(t,2),r=a[0];a[1];return function(e){var t=Math.round(e/30);return w[t]}(r)},F=function(e,t){return e[e[t.key]?t.key+"2":t.key]=t.value,e};function j(e){var t=b(e),a=[],r=t.hsl(),n=Object(l.a)(r,3),o=n[0],c=n[1],i=n[2],u=function(e){var t=360/e;return function(a){return function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}(e).map((function(e){return Math.floor((a+e*t)%360)}))}}(12)(o);return a.push({key:"gray",value:y(k(.04)(""+t.hex()))}),isNaN(o)||u.forEach((function(e){var t=b.hsl(e,c,i),r=x(t);a.push({key:r,value:y(""+t.hex())})})),a.reduce(F,{})}function N(e){for(var t=function(t){var a,r=100,n={},o=Object(h.a)(e[t]);try{for(o.s();!(a=o.n()).done;){var c=a.value;n[parseInt(r)]=c,r+=100}}catch(l){o.e(l)}finally{o.f()}return n},a={},r=0,n=Object.keys(e);r<n.length;r++){var o=n[r];a[o]=t(o)}return a}function C(e){var t=N(e),a=JSON.stringify(t,null,2).slice(1,-1).trim().replace(/"([^"]+)":/g,"$1:");return'// tailwind.config.js\nmodule.exports = {\n  theme: {\n    colors: {\n      transparent: "transparent",\n      current: "currentColor",\n    '.concat(a,"\n    }\n  }\n}")}function O(e){var t=N(e),a=function(e){var t="";for(var a in e){t+="\n";for(var r=0,n=Object.entries(e[a]);r<n.length;r++){var o=Object(l.a)(n[r],2),c=o[0],i=o[1];t+="$".concat(a,"-").concat(c,": ").concat(i,"; \n")}}return t}(t),r=function(e){var t="";for(var a in e)t+="$".concat(a,": $").concat(a,"-600;\n");return t}(t),n=function(e){var t="";for(var a in e)for(var r in t+="\n",e[a])t+='  "'.concat(a,"-").concat(r,'": $').concat(a,"-").concat(r,",\n");return"$theme-colors: (\n"+"".concat(t)+");"}(t);return"".concat(a,"\n\n").concat(r,"\n\n").concat(n)}function A(e){var t=N(e),a="";for(var r in t){a+="\n";for(var n=0,o=Object.entries(t[r]);n<o.length;n++){var c=Object(l.a)(o[n],2),i=c[0],u=c[1];a+="--".concat(r,"-").concat(i,": ").concat(u,"; \n")}}return":root {\n        ".concat(a,"\n}")}var S=a(71),$=a(16),I=a(18),J=a(20),L=a(70),M=a(4);var T=function(e){var t=Object(r.useState)("Copy"),a=Object(l.a)(t,2),o=a[0],c=a[1];function i(e){c("Copied")}Object(r.useEffect)((function(){c("Copy")}),[e.palette,e.activeFramework]),S.a.registerLanguage("javascript",$.a),S.a.registerLanguage("scss",I.a),S.a.registerLanguage("css",J.a);var u=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.CopyToClipboard,{text:C(e.palette)},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement("span",{onClick:i,className:"cursor-pointer font-mono bg-teal-300 rounded text-teal-900 px-1 hover:bg-teal-900 hover:text-teal-300 transition duration-100"},o))),n.a.createElement(S.a,{language:"javascript",style:L.a},C(e.palette))),s=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.CopyToClipboard,{text:O(e.palette)},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement("span",{onClick:i,className:"cursor-pointer font-mono bg-purple-300 rounded text-purple-900 px-1 hover:bg-purple-900 hover:text-purple-300 transition duration-100"},o))),n.a.createElement(S.a,{language:"scss",style:L.a},O(e.palette))),m=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.CopyToClipboard,{text:A(e.palette)},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement("span",{onClick:i,className:"cursor-pointer font-mono bg-orange-300 rounded text-orange-900 px-1 hover:bg-orange-900 hover:text-orange-300 transition duration-100"},o))),n.a.createElement(S.a,{language:"css",style:L.a},A(e.palette)));return n.a.createElement(n.a.Fragment,null,function(e){switch(e){case"tailwind":return u;case"bootstrap":return s;case"css":return m;default:return"nothing selected"}}(e.activeFramework))};var B=function(e){return n.a.createElement("div",{id:"code-area",className:"col-span-2 row-span-7 bg-gray-900 text-sm text-gray-100 p-2 rounded overflow-auto"},n.a.createElement(T,{activeFramework:e.activeFramework,palette:e.palette}))};var W=function(){return n.a.createElement("header",{className:"col-span-4 rounded shadow"},n.a.createElement("h1",{className:"lg:text-4xl md:text-3xl text-gray-900 font-frijole inline-block"},"Palettolithic"),n.a.createElement("h6",{className:"font-schoolbell md:text-xl lg:text-2xl text-gray-800 inline-block"},"So easy caveman can do it."))};var z=function(e){var t=Object(r.useState)("#07c"),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)({}),u=Object(l.a)(i,2),m=u[0],d=u[1],v=Object(r.useState)("tailwind"),f=Object(l.a)(v,2),p=f[0],h=f[1];return Object(r.useEffect)((function(){var e=j(o);d(e)}),[o]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"font-mono text-gray-900 bg-white p-2 h-screen w-screen grid  grid-cols-12 grid-rows-8 gap-2"},n.a.createElement(W,null),n.a.createElement(s,{palette:m}),n.a.createElement(g,{color:o,onColorChange:function(e){c(e),d(j(e))},activeFramework:p,setActiveFramework:h}),n.a.createElement(B,{palette:m,activeFramework:p})))};var G=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7c64f1e7.chunk.js.map