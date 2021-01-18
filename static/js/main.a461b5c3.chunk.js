(this.webpackJsonppalettolithic=this.webpackJsonppalettolithic||[]).push([[0],{20:function(e,t,a){e.exports=a(64)},25:function(e,t,a){},32:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),c=a.n(o),l=(a(25),a(26),a(27),a(1));var i=function(e){return n.a.createElement("div",{"data-name":"shade",className:"",style:{backgroundColor:e.shade}})};var u=function(e){return!!Array.isArray(e.shades)&&n.a.createElement("div",{className:"flex-1 rounded p-1","data-name":"color-outer"},n.a.createElement("div",{className:"grid grid-cols-10 gap-1 h-full rounded","data-name":"color-inner"},n.a.createElement("span",{className:"my-auto"},e.color.toUpperCase(),":"),e.shades.map((function(e,t){return n.a.createElement(i,{key:t,shade:e})}))))};var s=function(e){var t=Object.keys(e.palette);return n.a.createElement("div",{id:"palette-outer",className:"col-span-8 row-span-8 flex-auto bg-white rounded p-1 pl-2"},n.a.createElement("div",{id:"palette-inner",className:"flex flex-col justify-between h-full rounded overflow-hidden"},t.map((function(t,a){return n.a.createElement(u,{key:a,shades:e.palette[t],color:t})}))))};a(28);var m=function(e){return n.a.createElement("li",{className:"cursor-pointer p-2 capitalize text-lg mt-2 border-l-4\n      ".concat(function(e,t){var a=function(a){return t===e?a.active:a.nonActive};switch(e){case"tailwind":return a({active:"bg-teal-400 border-teal-400 rounded",nonActive:"hover:bg-teal-400 hover:rounded border-teal-400 transition duration-200"});case"bootstrap":return a({active:"bg-purple-400 border-purple-400 rounded ",nonActive:"hover:bg-purple-400 hover:rounded border-purple-400 transition duration-200"});default:return""}}(e.framework,e.activeFramework),"\n      "),onClick:function(){return e.setActiveFramework(e.framework)}},e.framework)};var d=function(e){return n.a.createElement("ul",{className:"pt-12"},n.a.createElement(m,{framework:"tailwind",activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}),n.a.createElement(m,{framework:"bootstrap",activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}))},v=a(4);a(31),a(32);var p=function(e){return n.a.createElement("div",{className:"col-span-2 row-span-7"},n.a.createElement(v.b,{color:e.color,onChange:e.onColorChange}),n.a.createElement(v.a,{placeholder:"HEX code",color:e.color,onChange:e.onColorChange,className:"bg-gray-200 rounded p-2 border w-full "}),n.a.createElement(d,{activeFramework:e.activeFramework,setActiveFramework:e.setActiveFramework}),n.a.createElement("a",{href:"https://github.com/tombohub/palettolithic"},"Github"))},f=a(12),h=a(33),g=["red","orange","yellow","lime","green","teal","cyan","blue","indigo","violet","purple","pink","red"],b=[.95,.86,.78,.69,.6,.51,.43,.34,.25],w=function(e){return function(t){var a=h(t).hsl(),r=Object(l.a)(a,3),n=r[0],o=(r[1],r[2]);return h.hsl(n,e,o).hex()}},E=function(e){var t=h(e).hsl(),a=Object(l.a)(t,3),r=a[0],n=a[1];a[2];return b.map((function(e){return h.hsl(r,n,e).hex()}))},k=function(e){var t=h(e).hsl(),a=Object(l.a)(t,2),r=a[0];a[1];return function(e){var t=Math.round(e/30);return g[t]}(r)},y=function(e,t){return e[e[t.key]?t.key+"2":t.key]=t.value,e};function x(e){var t=h(e),a=[],r=t.hsl(),n=Object(l.a)(r,3),o=n[0],c=n[1],i=n[2];console.log("hue is ",o);var u=function(e){var t=360/e;return function(a){return function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}(e).map((function(e){return Math.floor((a+e*t)%360)}))}}(12)(o);return a.push({key:"gray",value:E(w(.04)(""+t.hex()))}),isNaN(o)||u.forEach((function(e){var t=h.hsl(e,c,i),r=k(t);a.push({key:r,value:E(""+t.hex())})})),a.reduce(y,{})}function j(e){for(var t=function(t){var a,r=100,n={},o=Object(f.a)(e[t]);try{for(o.s();!(a=o.n()).done;){var c=a.value;n[parseInt(r)]=c,r+=100}}catch(l){o.e(l)}finally{o.f()}return n},a={},r=0,n=Object.keys(e);r<n.length;r++){var o=n[r];a[o]=t(o)}return a}function F(e){var t=j(e),a=JSON.stringify(t,null,2).slice(1,-1).trim().replace(/"([^"]+)":/g,"$1:");return'// tailwind.config.js\nmodule.exports = {\n  theme: {\n    colors: {\n      transparent: "transparent",\n      current: "currentColor",\n    '.concat(a,"\n    }\n  }\n}")}function N(e){var t=j(e),a=function(e){var t="";for(var a in e){t+="\n";for(var r=0,n=Object.entries(e[a]);r<n.length;r++){var o=Object(l.a)(n[r],2),c=o[0],i=o[1];t+="$".concat(a,"-").concat(c,": ").concat(i,"; \n")}}return t}(t),r=function(e){var t="";for(var a in e)t+="$".concat(a,": $").concat(a,"-600;\n");return t}(t),n=function(e){var t="";for(var a in e)for(var r in t+="\n",e[a])t+='  "'.concat(a,"-").concat(r,'": $').concat(a,"-").concat(r,",\n");return"$theme-colors: (\n"+"".concat(t)+");"}(t);return"".concat(a,"\n\n").concat(r,"\n\n").concat(n)}var C=a(68),O=a(16),A=a(18),S=a(67),$=a(5);var J=function(e){var t=Object(r.useState)("Copy"),a=Object(l.a)(t,2),o=a[0],c=a[1];function i(e){c("Copied")}Object(r.useEffect)((function(){c("Copy")}),[e.palette,e.activeFramework]),C.a.registerLanguage("javascript",O.a),C.a.registerLanguage("scss",A.a);var u=n.a.createElement(n.a.Fragment,null,n.a.createElement($.CopyToClipboard,{text:F(e.palette)},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement("span",{onClick:i,className:"cursor-pointer font-mono bg-teal-300 rounded text-teal-900 px-1 hover:bg-teal-900 hover:text-teal-300 transition duration-100"},o))),n.a.createElement(C.a,{language:"javascript",style:S.a},F(e.palette))),s=n.a.createElement(n.a.Fragment,null,n.a.createElement($.CopyToClipboard,{text:N(e.palette)},n.a.createElement("div",{className:"flex justify-end"},n.a.createElement("span",{onClick:i,className:"cursor-pointer font-mono bg-purple-300 rounded text-purple-900 px-1 hover:bg-purple-900 hover:text-purple-300 transition duration-100"},o))),n.a.createElement(C.a,{language:"scss",style:S.a},N(e.palette)));return n.a.createElement(n.a.Fragment,null,function(e){switch(e){case"tailwind":return u;case"bootstrap":return s;default:return"nothing selected"}}(e.activeFramework))};var M=function(e){return n.a.createElement("div",{id:"code-area",className:"col-span-2 row-span-7 bg-gray-900 text-sm text-gray-100 p-2 rounded overflow-auto"},n.a.createElement(J,{activeFramework:e.activeFramework,palette:e.palette}))};var B=function(){return n.a.createElement("header",{className:"col-span-4 rounded shadow"},n.a.createElement("h1",{className:"lg:text-4xl md:text-3xl text-gray-900 font-frijole inline-block"},"Palettolithic"),n.a.createElement("h6",{className:"font-schoolbell md:text-xl lg:text-2xl text-gray-800 inline-block"},"So easy caveman can do it."))};var I=function(e){var t=Object(r.useState)("#07c"),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)({}),u=Object(l.a)(i,2),m=u[0],d=u[1],v=Object(r.useState)("tailwind"),f=Object(l.a)(v,2),h=f[0],g=f[1];return Object(r.useEffect)((function(){var e=x(o);d(e)}),[o]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"font-mono text-gray-900 bg-white p-2 h-screen w-screen grid  grid-cols-12 grid-rows-8 gap-2"},n.a.createElement(B,null),n.a.createElement(s,{palette:m}),n.a.createElement(p,{color:o,onColorChange:function(e){c(e),d(x(e))},activeFramework:h,setActiveFramework:g}),n.a.createElement(M,{palette:m,activeFramework:h})))};var L=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a461b5c3.chunk.js.map