(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48929592"],{"90ad":function(_,t,e){},9129:function(_,t,e){var s=e("23e7");s({target:"Number",stat:!0},{isNaN:function(_){return _!=_}})},a97d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("acd8"),core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("9129"),core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__),_window_Controls__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("3af2"),_window_TitleBar__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("6210"),_window_Window__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("10dc"),flag=!1;__webpack_exports__["a"]={data:function(){return{result:"0",operation:""}},components:{Controls:_window_Controls__WEBPACK_IMPORTED_MODULE_6__["a"],Window:_window_Window__WEBPACK_IMPORTED_MODULE_8__["a"],TitleBar:_window_TitleBar__WEBPACK_IMPORTED_MODULE_7__["a"]},methods:{doFunction:function doFunction(e){var result=this.result,operation=this.operation,numValue=parseFloat(result),input=e.target.innerText;switch(input){case"←":result=result.length>1?result.slice(0,result.length-1):0;break;case"CE":result="0";break;case"C":operation="",result="0";break;case"±":if("0"===result)return;result=0===result.indexOf("-")?result.slice(1,result.length):"-".concat(numValue);break;case"√":operation="sqrt(".concat(numValue,")"),result=Math.sqrt(numValue);break;case"%":operation="".concat(numValue," / 100"),result=numValue/100;break;case"1/x":operation="1 / ".concat(numValue),result=1/numValue;break;case"=":result=eval(operation+numValue),operation="";break;default:result=eval(operation+numValue),operation+="".concat(numValue," ").concat(input," ");break}flag=!0,this.operation=operation,this.result=Number.isNaN(result)?"Invalid input":result},doInput:function(_){var t=_.target.innerText;"."===t&&this.result.indexOf(".")>0||20===this.result.length||("."===t&&"0"===this.result?this.result="0.":flag||"0"===this.result?(flag=!1,this.result=t):this.result=this.result+t)}}}},d238:function(_,t,e){"use strict";e.r(t);var s=function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("window",{attrs:{id:"window-calc",w:250,h:"auto",resizable:!1}},[e("title-bar",{attrs:{icon:"calc",title:_.$t("calc")}},[e("controls",{attrs:{hasMaxi:!1}})],1),e("div",{staticClass:"container transparent"},[e("div",{attrs:{id:"display"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:_.operation,expression:"operation"}],attrs:{disabled:""},domProps:{value:_.operation},on:{input:function(t){t.target.composing||(_.operation=t.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:_.result,expression:"result"}],attrs:{disabled:"",maxlength:"20"},domProps:{value:_.result},on:{input:function(t){t.target.composing||(_.result=t.target.value)}}})]),e("table",{staticClass:"btns"},[e("tr",[e("td",{staticClass:"bt",on:{click:_.doFunction}},[e("b",[_._v("←")])]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("CE")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("C")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("±")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("√")])]),e("tr",[e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("7")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("8")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("9")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("/")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("%")])]),e("tr",[e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("4")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("5")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("6")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("*")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("1/x")])]),e("tr",[e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("1")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("2")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v("3")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("-")]),e("td",{staticClass:"bt text-3xl",attrs:{rowspan:"2"},on:{click:_.doFunction}},[_._v("=")])]),e("tr",[e("td",{staticClass:"bt btn-bright",attrs:{colspan:"2"},on:{click:_.doInput}},[_._v("0")]),e("td",{staticClass:"bt btn-bright",on:{click:_.doInput}},[_._v(".")]),e("td",{staticClass:"bt",on:{click:_.doFunction}},[_._v("+")])])])])],1)},a=[],r=e("a97d"),n=r["a"],o=(e("f34c"),e("2877")),c=Object(o["a"])(n,s,a,!1,null,"1092cfd6",null);t["default"]=c.exports},f34c:function(_,t,e){"use strict";e("90ad")}}]);