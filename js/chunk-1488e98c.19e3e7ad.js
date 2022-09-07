(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1488e98c"],{"50cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root-container"},[a("window",{attrs:{id:"window-camera",lock:!!t.error||t.showConfig}},[a("title-bar",{attrs:{icon:"camera",title:t.$t("camera")}},[a("controls")],1),a("div",{staticClass:"container container-camera p-0"},[a("video",{directives:[{name:"show",rawName:"v-show",value:t.stream,expression:"stream"}],ref:"video"}),a("div",{staticClass:"camtrol"},[a("button",{staticClass:"camtrol-facing camtrol--sm",on:{click:t.switchFacing}},[a("i",{staticClass:"fa fa-refresh fa-lg"})]),a("button",{staticClass:"camtrol-capture",on:{click:t.captureImage}},[a("i",{staticClass:"fa fa-camera-retro fa-2x"})]),a("button",{staticClass:"camtrol-config camtrol--sm",on:{click:t.toggleShowConfig}},[a("i",{staticClass:"fa fa-info fa-lg"})])])])],1),t.error?a("error",{on:{close:function(e){t.error=null}}},[t._v(t._s(t.error)+".")]):t._e(),t.showConfig?a("window-static",{staticClass:"help"},[a("title-bar",{attrs:{title:t.$t("camera")}},[a("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.toggleShowConfig}})],1),a("div",{staticClass:"container"},[a("p",[a("label",[t._v(t._s(t.$t("resolution"))+":")]),t._v(" 1280x720 ")]),a("p",[a("label",[t._v(t._s(t.$t("format"))+":")]),t._v(" JPEG ")]),a("p",[a("label",[t._v(t._s(t.$t("quality"))+":")]),t._v(" 100% ")]),a("div",{staticClass:"flex justify-end mt-4"},[a("button",{staticClass:"bt bt-primary",on:{click:function(e){return e.stopPropagation(),t.toggleShowConfig(e)}}},[t._v(" "+t._s(t.$t("ok"))+" ")]),a("button",{staticClass:"bt bt-secondary",on:{click:function(e){return e.stopPropagation(),t.toggleShowConfig(e)}}},[t._v(" "+t._s(t.$t("cancel"))+" ")])])])],1):t._e(),t.canSave?a("dialog-file",{attrs:{dialogIcon:"camera",dialogName:"save-as",content:t.image,fileName:t.fileName,fileTypes:t.fileTypes},on:{cancel:function(e){t.canSave=!1}}}):t._e()],1)},i=[],o=a("3835"),s=(a("d3b7"),a("25f0"),a("7e41")),r=a("10dc"),c=a("3af2"),l=a("6210"),u=a("c02b"),f=a("9e54"),d=a("e302"),m=a("d0b6"),h=a("0e9a"),p=a("6792"),g={data:function(){return{stream:null,error:null,image:null,showConfig:!1,canSave:!1,faceFront:!0,fileName:Date.now().toString(),fileTypes:{jpeg:"JPEG file (*.jpeg)"}}},mounted:function(){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?Object(m["a"])()&&!Object(d["h"])(p["g"].CAMERA)?Object(d["n"])(p["g"].CAMERA):void this.getCamera():this.showError({name:"NotSupportedError",message:"Camera is not supported on this device"})},destroyed:function(){this.clearStream()},methods:{getCamera:function(){this.clearStream();var t={width:1280,height:720,facingMode:this.faceFront?"user":"environment"};navigator.mediaDevices.getUserMedia({video:t}).then(this.captureStream).catch(this.showError)},captureStream:function(t){var e=this,a=this.$refs.video;a.srcObject=t,a.onloadedmetadata=function(){a.play(),e.stream=t}},clearStream:function(){if(this.stream){var t=this.stream.getVideoTracks(),e=Object(o["a"])(t,1),a=e[0];a.stop()}},captureImage:function(){if(this.stream){var t=this.stream.getVideoTracks(),e=Object(o["a"])(t,1),a=e[0],n=a.getSettings(),i=n.width,s=n.height;this.image=Object(h["f"])(this.$refs.video,i,s),this.canSave=!0}},switchFacing:function(){this.faceFront=!this.faceFront,this.getCamera()},toggleShowConfig:function(){this.showConfig=!this.showConfig},showError:function(t){this.error=t.message}},components:{Controls:c["a"],TitleBar:l["a"],Window:r["a"],WindowStatic:s["a"],Error:u["a"],DialogFile:f["a"]}},v=g,b=(a("e834"),a("2877")),w=Object(b["a"])(v,n,i,!1,null,"298b61b2",null);e["default"]=w.exports},"6b48":function(t,e,a){},"7ddd":function(t,e,a){"use strict";a("e013")},"9e54":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("computer",{attrs:{id:"window-dialog",dialogIcon:t.dialogIcon,dialogName:t.dialogName},on:{close:t.cancel,change:t.setPath},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"form-control"},[a("label",[t._v(t._s(t.$t("file-name"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveFile(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",[t._v(t._s(t.$t("save-as"))+":")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?a:a[0]}}},t._l(t.fileTypes,(function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(" "+t._s(t.fileTypes[n])+" ")])})),0)]),a("div",{staticClass:"buttons"},[t.isAndroid?t._e():a("button",{staticClass:"bt bt-secondary bt-download",attrs:{disabled:!t.name},on:{click:t.download}},[t._v(" "+t._s(t.$t("download"))+" ")]),a("button",{staticClass:"bt bt-primary",attrs:{disabled:!t.canSave},on:{click:t.saveFile}},[t._v(" "+t._s(t.$t("save"))+" ")]),a("button",{staticClass:"bt bt-secondary",on:{click:t.cancel}},[t._v(" "+t._s(t.$t("cancel"))+" ")])])]},proxy:!0}])})},i=[],o=a("1da1"),s=a("5530"),r=(a("96cf"),a("ac1f"),a("1276"),a("b64b"),a("a15b"),a("b0c0"),a("5319"),a("7db0"),a("d3b7"),a("2f62")),c=a("d0b6"),l=a("0e9a"),u=a("13a7"),f=a("f106"),d=a("01b4"),m=a("968c"),h={props:{dialogIcon:String,dialogName:String,fileName:String,fileTypes:Object,content:[String,Object,HTMLCanvasElement],parse:Function},data:function(){var t=this.fileName.split(".");return t.length>1&&t.pop(),{isAndroid:Object(c["a"])(),type:Object.keys(this.fileTypes)[0],name:t.join(""),path:null}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["user"])),{},{canSave:function(){return this.path&&this.name},fullName:function(){return this.name+"."+this.type},program:function(){return Object(l["h"])(this.fullName)?"player":Object(l["k"])(this.fullName)?"photo":"notepad"},icon:function(){return Object(l["h"])(this.fullName)?"media":Object(l["k"])(this.fullName)?"photo":Object(l["m"])(this.fullName)?"text":"file"},parsedContent:function(){var t=this.content,e=this.type;return this.parse?this.parse(e):("string"===typeof t||(t=t.toDataURL("image/".concat(e)),this.isAndroid&&(t=t.replace(/^data:image\/.*;base64,/,""))),t)}}),methods:{setPath:function(t){this.path=t},saveFile:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,i,o,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.canSave){e.next=2;break}return e.abrupt("return");case 2:if(a=t.path,n=t.fullName,i=t.parsedContent,o="c/User/Desktop",a!==o){e.next=13;break}return e.next=7,m["a"].local.get(d["a"].Shortcuts,t.user);case 7:if(s=e.sent,r=null===s||void 0===s?void 0:s.find((function(t){return t.lbl===n})),!r){e.next=12;break}return e.next=12,t.$store.dispatch(d["a"].ShortcutRemove,r.key);case 12:t.$store.dispatch(d["a"].ShortcutAdd,{lbl:n,key:t.program,icon:t.icon,path:o+"/"+n});case 13:f["a"].append(a,[f["a"].file(a,n,i)]).finally(t.cancel);case 14:case"end":return e.stop()}}),e)})))()},download:function(){var t=this.name,e=this.type,a=this.parsedContent;t&&Object(l["e"])(t+"."+e,e,a)},cancel:function(){this.$emit("cancel")}},components:{Computer:u["default"]}},p=h,g=(a("7ddd"),a("2877")),v=Object(g["a"])(p,n,i,!1,null,"5b7a88fa",null);e["a"]=v.exports},e013:function(t,e,a){},e834:function(t,e,a){"use strict";a("6b48")}}]);