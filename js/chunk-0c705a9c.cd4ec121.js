(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c705a9c"],{"00d7":function(t,n,e){},1043:function(t,n,e){"use strict";e("3dad")},"129f":function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},"1a7c":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation"},[e("button",{class:["button","round","mr-1",{active:t.activeBack}],on:{click:function(n){return t.$emit("navigate","back")}}},[t.isWin10?e("i",{staticClass:"las la-arrow-left"}):e("i",{staticClass:"fa fa-arrow-left"})]),e("button",{class:["button","round",{active:t.activeNext}],on:{click:function(n){return t.$emit("navigate","next")}}},[t.isWin10?e("i",{staticClass:"las la-arrow-right"}):e("i",{staticClass:"fa fa-arrow-right"})])])},s=[],a=e("5530"),r=e("2f62"),o={props:{activeBack:Boolean,activeNext:Boolean},computed:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["theme"])),{},{isWin10:function(){return"win10"===this.theme}})},c=o,l=(e("1043"),e("2877")),u=Object(l["a"])(c,i,s,!1,null,"38d344b1",null);n["a"]=u.exports},3883:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"statusbar"},[t._t("default")],2)},s=[],a=(e("485e"),e("2877")),r={},o=Object(a["a"])(r,i,s,!1,null,"21410e7c",null);n["a"]=o.exports},"3dad":function(t,n,e){},"485e":function(t,n,e){"use strict";e("f83b")},"841c":function(t,n,e){"use strict";var i=e("d784"),s=e("825a"),a=e("1d80"),r=e("129f"),o=e("14c3");i("search",1,(function(t,n,e){return[function(n){var e=a(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,e):new RegExp(n)[t](String(e))},function(t){var i=e(n,t,this);if(i.done)return i.value;var a=s(t),c=String(this),l=a.lastIndex;r(l,0)||(a.lastIndex=0);var u=o(a,c);return r(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},"962a":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"addrbar"},[t._t("default"),t.icon&&t.location?e("div",{staticClass:"addr",style:{backgroundImage:"url("+t.icon+")"}},["string"===typeof t.location?e("label",[t._v(t._s(t.location))]):t._l(t.location,(function(n,i){return e("label",{key:i},[t._v(t._s(n))])}))],2):t._e(),t.hasSearch||t.search?e("div",{staticClass:"input"},[e("input",{attrs:{type:"search",placeholder:t.$t("search")+" "+t.currentLocation},on:{input:t.handleSearch}})]):t._e()],2)},s=[],a=(e("fb6a"),e("ac1f"),e("841c"),{props:{icon:{type:String,default:null},location:{type:[String,Array],default:null},search:Function,hasSearch:Boolean},computed:{currentLocation:function(){var t=this.location.slice(0);return"string"===typeof t?t:t.pop()}},methods:{handleSearch:function(t){this.search&&this.search(t)}}}),r=a,o=(e("f76a"),e("2877")),c=Object(o["a"])(r,i,s,!1,null,"1d256d67",null);n["a"]=c.exports},a6f1:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("window",{attrs:{id:"window-ie"}},[e("title-bar",{attrs:{icon:"ie",title:"Internet Explorer"}},[e("controls")],1),e("address-bar",[e("navigation",{attrs:{activeBack:t.activeBack,activeNext:t.activeNext},on:{navigate:t.navigate}}),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],domProps:{value:t.url},on:{focus:function(t){return t.target.select()},keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:function(){return t.load()}()},input:function(n){n.target.composing||(t.url=n.target.value)}}})]),e("div",{staticClass:"input"},[e("input",{attrs:{type:"search",placeholder:"Bing"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.search(n)}}})])],1),e("div",{staticClass:"toolbar"},[e("div",{staticClass:"toolbar-item text-muted"},[t._v(t._s(t.$t("favorites")))]),e("div",{staticClass:"toolbar-item text-muted"},[t._v(t._s(t.$t("bookmarks")))])]),e("div",{ref:"Browser",staticClass:"container p-0"}),e("status-bar",[e("div"),e("div",[e("div",{directives:[{name:"visible",rawName:"v-visible",value:t.showProgress,expression:"showProgress"}],staticClass:"progress-bar"},[e("div",{style:{width:t.progress}})])]),e("div",{staticClass:"flex"},[e("img",{staticClass:"mr-3",attrs:{src:t.internetIcon,height:"18"}}),t._v(" Internet ")])])],1)},s=[],a=(e("fb6a"),e("0f35")),r=e("3af2"),o=e("6210"),c=e("962a"),l=e("1a7c"),u=e("3883"),d=e("10dc"),h='<!doctype html>\n<html>\n\n<head>\n  <style>\n    body {\n      font-family: "Segoe UI", sans-serif;\n      padding: 25px;\n      margin: 0;\n    }\n\n    h1 {\n      font-size: 1.5em;\n      font-weight: initial;\n      color: #4265ab;\n      margin: 0;\n    }\n\n    img {\n      float: left;\n      margin-right: 15px;\n    }\n\n    .content {\n      margin: 20px 0 0 65px;\n    }\n\n    hr {\n      margin: 0 0 20px;\n      border: 0;\n      border-bottom: 1px solid #ccc;\n    }\n\n    .try {\n      list-style: none;\n    }\n\n    .try>li {\n      margin: 15px 0;\n      position: relative;\n    }\n\n    .try>li:before {\n      content: "";\n      width: 8px;\n      height: 8px;\n      position: absolute;\n      left: -20px;\n      top: 50%;\n      transform: translateY(-50%);\n      border: 1px solid #4265ab;\n      border-radius: 50%;\n      background: linear-gradient(rgba(255, 255, 255, 0.2), #4265ab 60%, #0ff);\n    }\n  </style>\n</head>\n\n<body>\n  <h1>\n    <img\n      src="data:image/webp;base64,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" />\n    Internet Explorer cannot display the webpage\n  </h1>\n  <div class="content">\n    <hr />\n    <div>What you can try:</div>\n    <div>\n      <ul class="try">\n        <li>You are not connected to the Internet. Check your Internet connection</li>\n        <li>Retype the address</li>\n        <li>Go back to the previous page</li>\n      </ul>\n    </div>\n    <div>\n      Most likely causes:\n      <ul>\n        <li>You are not connected to the Internet</li>\n        <li>The website is encountering problems</li>\n        <li>There might be a typing error in the address</li>\n      </ul>\n    </div>\n  </div>\n</body>\n\n</html>',f="https://www.msn.com",v="https://www.bing.com/search?q=",m={data:function(){var t=this.$store.state,n=t.theme,e=t.themes;return{internetIcon:e[n].icon.internet,progress:"50%",showProgress:!0,url:f,activeBack:!1,activeNext:!1,history:[],historyIndex:-1}},mounted:function(){this.load(),window.addEventListener("message",this.handlePageLoad)},destroyed:function(){window.removeEventListener("message",this.handlePageLoad)},methods:{load:function(t){this.url=Object(a["d"])(this.url),this.showProgress=!0,this.$refs.Browser.innerHTML='<iframe src="'.concat(this.url,'" is="x-frame" frameborder=0 />'),t||this.pushHistory()},search:function(t){this.url=v+t.target.value,this.load()},pushHistory:function(){this.historyIndex++,this.history=this.history.slice(0,this.historyIndex),this.history.push(this.url)},navigate:function(t){var n=this.history,e=this.historyIndex;if("back"===t&&e>0)this.url=n[--this.historyIndex];else{if(!("next"===t&&e<n.length-1))return;this.url=n[++this.historyIndex]}this.load(!0)},handlePageLoad:function(t){var n=this,e=t.data;if(e.event){var i=e.event,s=e.message;switch(i){case"loadError":this.$refs.Browser&&(this.$refs.Browser.innerHTML="<iframe srcdoc='".concat(h,"' frameborder=0 />"));case"pageLoaded":this.progress="100%",setTimeout((function(){n.showProgress=!1,n.progress=Math.floor(60*Math.random())+20+"%"}),500);break;case"urlChanged":this.showProgress=!0,this.url=s,this.pushHistory();break}}}},watch:{historyIndex:function(t){var n=this.history;n.length&&(t>0&&(this.activeBack=!0),0===t&&(this.activeBack=!1),t<n.length-1&&(this.activeNext=!0),t>=n.length-1&&(this.activeNext=!1))}},components:{Controls:r["a"],TitleBar:o["a"],Window:d["a"],AddressBar:c["a"],Navigation:l["a"],StatusBar:u["a"]}},g=m,b=(e("ea91"),e("2877")),p=Object(b["a"])(g,i,s,!1,null,"8a2a0b64",null);n["default"]=p.exports},b1d6:function(t,n,e){},ea91:function(t,n,e){"use strict";e("b1d6")},f76a:function(t,n,e){"use strict";e("00d7")},f83b:function(t,n,e){}}]);