(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{883:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"createCopyToClipboardFunction",(function(){return createCopyToClipboardFunction})),__webpack_require__.d(__webpack_exports__,"SyntaxHighlighter",(function(){return syntaxhighlighter_SyntaxHighlighter}));__webpack_require__(5),__webpack_require__(8),__webpack_require__(16),__webpack_require__(7),__webpack_require__(10),__webpack_require__(9),__webpack_require__(18),__webpack_require__(14),__webpack_require__(24),__webpack_require__(13),__webpack_require__(42),__webpack_require__(28),__webpack_require__(93),__webpack_require__(3),__webpack_require__(53),__webpack_require__(20),__webpack_require__(112),__webpack_require__(71);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(23),dist_esm=__webpack_require__(1),global_window=__webpack_require__(11),window_default=__webpack_require__.n(global_window),memoizerific=__webpack_require__(60),memoizerific_default=__webpack_require__.n(memoizerific),jsx=__webpack_require__(942),bash=__webpack_require__(949),css=__webpack_require__(951),js_extras=__webpack_require__(940),json=__webpack_require__(943),graphql=__webpack_require__(956),markup=__webpack_require__(952),markdown=__webpack_require__(947),yaml=__webpack_require__(945),tsx=__webpack_require__(953),typescript=__webpack_require__(955),prism_light=__webpack_require__(969),ActionBar=__webpack_require__(880),ScrollArea=__webpack_require__(226),ts_dedent_esm=__webpack_require__(40),formatter=memoizerific_default()(2)((function(code){return Object(ts_dedent_esm.a)(code)})),_excluded=["children","language","copyable","bordered","padded","format","className","showLineNumbers"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var syntaxhighlighter_navigator=window_default.a.navigator,syntaxhighlighter_document=window_default.a.document,globalWindow=window_default.a.window;prism_light.a.registerLanguage("jsextra",js_extras.a),prism_light.a.registerLanguage("jsx",jsx.a),prism_light.a.registerLanguage("json",json.a),prism_light.a.registerLanguage("yml",yaml.a),prism_light.a.registerLanguage("md",markdown.a),prism_light.a.registerLanguage("bash",bash.a),prism_light.a.registerLanguage("css",css.a),prism_light.a.registerLanguage("html",markup.a),prism_light.a.registerLanguage("tsx",tsx.a),prism_light.a.registerLanguage("typescript",typescript.a),prism_light.a.registerLanguage("graphql",graphql.a);var themedSyntax=memoizerific_default()(2)((function(theme){return Object.entries(theme.code||{}).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];return Object.assign({},acc,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},"* .".concat(key),val))}),{})})),copyToClipboard=createCopyToClipboardFunction();function createCopyToClipboardFunction(){return null!=syntaxhighlighter_navigator&&syntaxhighlighter_navigator.clipboard?function(text){return syntaxhighlighter_navigator.clipboard.writeText(text)}:function(){var _ref3=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(text){var tmp,focus;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:tmp=syntaxhighlighter_document.createElement("TEXTAREA"),focus=syntaxhighlighter_document.activeElement,tmp.value=text,syntaxhighlighter_document.body.appendChild(tmp),tmp.select(),syntaxhighlighter_document.execCommand("copy"),syntaxhighlighter_document.body.removeChild(tmp),focus.focus();case 8:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref3.apply(this,arguments)}}()}var Wrapper=dist_esm.j.div((function(_ref4){return{position:"relative",overflow:"hidden",color:_ref4.theme.color.defaultText}}),(function(_ref5){var theme=_ref5.theme;return _ref5.bordered?{border:"1px solid ".concat(theme.appBorderColor),borderRadius:theme.borderRadius,background:theme.background.content}:{}})),Scroller=Object(dist_esm.j)((function(_ref6){var children=_ref6.children,className=_ref6.className;return react_default.a.createElement(ScrollArea.a,{horizontal:!0,vertical:!0,className:className},children)}))({position:"relative"},(function(_ref7){return{"& code":{paddingRight:_ref7.theme.layoutMargin}}}),(function(_ref8){var theme=_ref8.theme;return themedSyntax(theme)})),Pre=dist_esm.j.pre((function(_ref9){var theme=_ref9.theme;return{display:"flex",justifyContent:"flex-start",margin:0,padding:_ref9.padded?theme.layoutMargin:0}})),Code=dist_esm.j.code({flex:1,paddingRight:0,opacity:1}),syntaxhighlighter_SyntaxHighlighter=function SyntaxHighlighter(_ref10){var children=_ref10.children,_ref10$language=_ref10.language,language=void 0===_ref10$language?"jsx":_ref10$language,_ref10$copyable=_ref10.copyable,copyable=void 0!==_ref10$copyable&&_ref10$copyable,_ref10$bordered=_ref10.bordered,bordered=void 0!==_ref10$bordered&&_ref10$bordered,_ref10$padded=_ref10.padded,padded=void 0!==_ref10$padded&&_ref10$padded,_ref10$format=_ref10.format,format=void 0===_ref10$format||_ref10$format,_ref10$className=_ref10.className,className=void 0===_ref10$className?null:_ref10$className,_ref10$showLineNumber=_ref10.showLineNumbers,showLineNumbers=void 0!==_ref10$showLineNumber&&_ref10$showLineNumber,rest=_objectWithoutProperties(_ref10,_excluded);if("string"!=typeof children||!children.trim())return null;var highlightableCode=format?formatter(children):children.trim(),_useState2=_slicedToArray(Object(react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1],onClick=function onClick(e){e.preventDefault();var selectedText=globalWindow.getSelection().toString(),textToCopy="click"!==e.type&&selectedText?selectedText:highlightableCode;copyToClipboard(textToCopy).then((function(){setCopied(!0),globalWindow.setTimeout((function(){return setCopied(!1)}),1500)})).catch(esm.a.error)};return react_default.a.createElement(Wrapper,{bordered:bordered,padded:padded,className:className,onCopyCapture:onClick},react_default.a.createElement(Scroller,null,react_default.a.createElement(prism_light.a,_extends({padded:padded||bordered,language:language,showLineNumbers:showLineNumbers,showInlineLineNumbers:showLineNumbers,useInlineStyles:!1,PreTag:Pre,CodeTag:Code,lineNumberContainerStyle:{}},rest),highlightableCode)),copyable?react_default.a.createElement(ActionBar.a,{actionItems:[{title:copied?"Copied":"Copy",onClick:onClick}]}):null)};syntaxhighlighter_SyntaxHighlighter.displayName="SyntaxHighlighter";__webpack_exports__.default=syntaxhighlighter_SyntaxHighlighter}}]);