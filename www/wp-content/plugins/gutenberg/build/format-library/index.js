this.wp=this.wp||{},this.wp.formatLibrary=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=209)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},11:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(28),i=n(3);function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(i.a)(t):e}},12:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return i})},13:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},16:function(t,e){!function(){t.exports=this.wp.keycodes}()},17:function(t,e,n){var r;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r))t.push(i.apply(null,r));else if("object"===o)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}void 0!==t&&t.exports?t.exports=i:void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},2:function(t,e){!function(){t.exports=this.lodash}()},20:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",function(){return r})},209:function(t,e,n){"use strict";n.r(e);var r=n(20),i=n(0),o=n(1),a=n(21),c=n(7),u={name:"core/bold",title:Object(o.__)("Bold"),tagName:"strong",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,u=function(){return r(Object(a.toggleFormat)(n,{type:"core/bold"}))};return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.RichTextShortcut,{type:"primary",character:"b",onUse:u}),Object(i.createElement)(c.RichTextToolbarButton,{name:"bold",icon:"editor-bold",title:Object(o.__)("Bold"),onClick:u,isActive:e,shortcutType:"primary",shortcutCharacter:"b"}))}},s={name:"core/code",title:Object(o.__)("Code"),tagName:"code",className:null,edit:function(t){var e=t.value,n=t.onChange;return Object(i.createElement)(c.RichTextShortcut,{type:"access",character:"x",onUse:function(){return n(Object(a.toggleFormat)(e,{type:"core/code"}))}})}},l=n(10),b=n(9),p=n(11),f=n(13),h=n(12),d=n(3),m=n(4),O=["image"],j={name:"core/image",title:Object(o.__)("Image"),keywords:[Object(o.__)("photo"),Object(o.__)("media")],object:!0,tagName:"img",className:null,attributes:{className:"class",style:"style",url:"src",alt:"alt"},edit:function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).apply(this,arguments))).openModal=t.openModal.bind(Object(d.a)(Object(d.a)(t))),t.closeModal=t.closeModal.bind(Object(d.a)(Object(d.a)(t))),t.state={modal:!1},t}return Object(h.a)(e,t),Object(b.a)(e,[{key:"openModal",value:function(){this.setState({modal:!0})}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.value,r=e.onChange;return Object(i.createElement)(c.MediaUploadCheck,null,Object(i.createElement)(c.RichTextInserterItem,{name:"core/image",icon:Object(i.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(i.createElement)(m.Path,{d:"M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"})),title:Object(o.__)("Inline Image"),onClick:this.openModal}),this.state.modal&&Object(i.createElement)(c.MediaUpload,{allowedTypes:O,onSelect:function(e){var i=e.id,o=e.url,c=e.alt,u=e.width;t.closeModal(),r(Object(a.insertObject)(n,{type:"core/image",attributes:{className:"wp-image-".concat(i),style:"width: ".concat(Math.min(u,150),"px;"),url:o,alt:c}}))},onClose:this.closeModal,render:function(t){return(0,t.open)(),null}}))}}]),e}(i.Component)},v={name:"core/italic",title:Object(o.__)("Italic"),tagName:"em",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,u=function(){return r(Object(a.toggleFormat)(n,{type:"core/italic"}))};return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.RichTextShortcut,{type:"primary",character:"i",onUse:u}),Object(i.createElement)(c.RichTextToolbarButton,{name:"italic",icon:"editor-italic",title:Object(o.__)("Italic"),onClick:u,isActive:e,shortcutType:"primary",shortcutCharacter:"i"}))}},y=n(24),g=n(17),k=n.n(g),_=n(16),w=n(22);var C=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).apply(this,arguments))).state={style:function(){var t=window.getSelection();if(0===t.rangeCount)return{};var e=Object(w.getRectangleFromRange)(t.getRangeAt(0)),n=e.top+e.height,r=e.left+e.width/2,i=Object(w.getOffsetParent)(t.anchorNode);if(i){var o=i.getBoundingClientRect();n-=o.top,r-=o.left}return{top:n,left:r}}()},t}return Object(h.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.props.children,e=this.state.style;return Object(i.createElement)("div",{className:"editor-format-toolbar__selection-position",style:e},t)}}]),e}(i.Component),S=n(2);function E(t){if(!t)return!1;var e=t.trim();if(!e)return!1;if(/^\S+:/.test(e)){var n=Object(y.getProtocol)(e);if(!Object(y.isValidProtocol)(n))return!1;var r=Object(y.getAuthority)(e);if(!Object(y.isValidAuthority)(r))return!1;var i=Object(y.getPath)(e);if(i&&!Object(y.isValidPath)(i))return!1;var o=Object(y.getQueryString)(e);if(o&&!Object(y.isValidQueryString)(o))return!1;if(Object(y.getFragment)(e)&&!Object(y.isValidFragment)(e))return!1}return!(Object(S.startsWith)(e,"#")&&!Object(y.isValidFragment)(e))}var L=function(t){return t.stopPropagation()};function x(t){var e=t.url,n=t.opensInNewWindow,r=t.text,i={type:"core/link",attributes:{url:e}};if(n){var a=Object(o.sprintf)(Object(o.__)("%s (opens in a new tab)"),r).trim();i.attributes.target="_blank",i.attributes.rel="noreferrer noopener",i.attributes["aria-label"]=a}return i}function T(t,e){return t.addingLink||e.editLink}var R=function(t){var e=t.value,n=t.onChangeInputValue,r=t.onKeyDown,a=t.submitLink,u=t.autocompleteRef;return Object(i.createElement)("form",{className:"editor-format-toolbar__link-container-content",onKeyPress:L,onKeyDown:r,onSubmit:a},Object(i.createElement)(c.URLInput,{value:e,onChange:n,autocompleteRef:u}),Object(i.createElement)(m.IconButton,{icon:"editor-break",label:Object(o.__)("Apply"),type:"submit"}))},A=function(t){var e=t.url,n=Object(y.prependHTTP)(e),r=k()("editor-format-toolbar__link-container-value",{"has-invalid-link":!E(n)});return e?Object(i.createElement)(m.ExternalLink,{className:r,href:e},Object(y.filterURLForDisplay)(Object(y.safeDecodeURI)(e))):Object(i.createElement)("span",{className:r})},N=function(t){var e=t.url,n=t.editLink;return Object(i.createElement)("div",{className:"editor-format-toolbar__link-container-content",onKeyPress:L},Object(i.createElement)(A,{url:e}),Object(i.createElement)(m.IconButton,{icon:"edit",label:Object(o.__)("Edit"),onClick:n}))},P=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).apply(this,arguments))).editLink=t.editLink.bind(Object(d.a)(Object(d.a)(t))),t.submitLink=t.submitLink.bind(Object(d.a)(Object(d.a)(t))),t.onKeyDown=t.onKeyDown.bind(Object(d.a)(Object(d.a)(t))),t.onChangeInputValue=t.onChangeInputValue.bind(Object(d.a)(Object(d.a)(t))),t.setLinkTarget=t.setLinkTarget.bind(Object(d.a)(Object(d.a)(t))),t.onClickOutside=t.onClickOutside.bind(Object(d.a)(Object(d.a)(t))),t.resetState=t.resetState.bind(Object(d.a)(Object(d.a)(t))),t.autocompleteRef=Object(i.createRef)(),t.state={opensInNewWindow:!1,inputValue:""},t}return Object(h.a)(e,t),Object(b.a)(e,[{key:"onKeyDown",value:function(t){t.keyCode===_.ESCAPE&&(t.stopPropagation(),this.resetState()),[_.LEFT,_.DOWN,_.RIGHT,_.UP,_.BACKSPACE,_.ENTER].indexOf(t.keyCode)>-1&&t.stopPropagation()}},{key:"onChangeInputValue",value:function(t){this.setState({inputValue:t})}},{key:"setLinkTarget",value:function(t){var e=this.props,n=e.activeAttributes.url,r=void 0===n?"":n,i=e.value,o=e.onChange;this.setState({opensInNewWindow:t}),T(this.props,this.state)||o(Object(a.applyFormat)(i,x({url:r,opensInNewWindow:t,text:i.text})))}},{key:"editLink",value:function(t){this.setState({editLink:!0}),t.preventDefault()}},{key:"submitLink",value:function(t){var e=this.props,n=e.isActive,r=e.value,i=e.onChange,c=e.speak,u=this.state,s=u.inputValue,l=u.opensInNewWindow,b=Object(y.prependHTTP)(s),p=x({url:b,opensInNewWindow:l,text:r.text});if(t.preventDefault(),Object(a.isCollapsed)(r)&&!n){var f=Object(a.applyFormat)(Object(a.create)({text:b}),p,0,b.length);i(Object(a.insert)(r,f))}else i(Object(a.applyFormat)(r,p));this.resetState(),E(b)?c(n?Object(o.__)("Link edited."):Object(o.__)("Link inserted"),"assertive"):c(Object(o.__)("Warning: the link has been inserted but may have errors. Please test it."),"assertive")}},{key:"onClickOutside",value:function(t){var e=this.autocompleteRef.current;e&&e.contains(t.target)||this.resetState()}},{key:"resetState",value:function(){this.props.stopAddingLink(),this.setState({editLink:!1})}},{key:"render",value:function(){var t=this,e=this.props,n=e.isActive,r=e.activeAttributes.url,a=e.addingLink,u=e.value;if(!n&&!a)return null;var s=this.state,l=s.inputValue,b=s.opensInNewWindow,p=T(this.props,this.state);return Object(i.createElement)(C,{key:"".concat(u.start).concat(u.end)},Object(i.createElement)(c.URLPopover,{onClickOutside:this.onClickOutside,focusOnMount:!!p&&"firstElement",renderSettings:function(){return Object(i.createElement)(m.ToggleControl,{label:Object(o.__)("Open in New Tab"),checked:b,onChange:t.setLinkTarget})}},p?Object(i.createElement)(R,{value:l,onChangeInputValue:this.onChangeInputValue,onKeyDown:this.onKeyDown,submitLink:this.submitLink,autocompleteRef:this.autocompleteRef}):Object(i.createElement)(N,{url:r,editLink:this.editLink})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.activeAttributes,r=n.url,i="_blank"===n.target;if(!T(t,e)){if(r!==e.inputValue)return{inputValue:r};if(i!==e.opensInNewWindow)return{opensInNewWindow:i}}return null}}]),e}(i.Component),I=Object(m.withSpokenMessages)(P);[u,s,j,v,{name:"core/link",title:Object(o.__)("Link"),tagName:"a",className:null,attributes:{url:"href",target:"target"},edit:Object(m.withSpokenMessages)(function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).apply(this,arguments))).addLink=t.addLink.bind(Object(d.a)(Object(d.a)(t))),t.stopAddingLink=t.stopAddingLink.bind(Object(d.a)(Object(d.a)(t))),t.onRemoveFormat=t.onRemoveFormat.bind(Object(d.a)(Object(d.a)(t))),t.state={addingLink:!1},t}return Object(h.a)(e,t),Object(b.a)(e,[{key:"addLink",value:function(){var t=this.props,e=t.value,n=t.onChange,r=Object(a.getTextContent)(Object(a.slice)(e));r&&Object(y.isURL)(r)?n(Object(a.applyFormat)(e,{type:"core/link",attributes:{url:r}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1})}},{key:"onRemoveFormat",value:function(){var t=this.props,e=t.value,n=t.onChange,r=t.speak;n(Object(a.removeFormat)(e,"core/link")),r(Object(o.__)("Link removed."),"assertive")}},{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.activeAttributes,r=t.value,a=t.onChange;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.RichTextShortcut,{type:"access",character:"a",onUse:this.addLink}),Object(i.createElement)(c.RichTextShortcut,{type:"access",character:"s",onUse:this.onRemoveFormat}),Object(i.createElement)(c.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(i.createElement)(c.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),e&&Object(i.createElement)(c.RichTextToolbarButton,{name:"link",icon:"editor-unlink",title:Object(o.__)("Unlink"),onClick:this.onRemoveFormat,isActive:e,shortcutType:"primaryShift",shortcutCharacter:"k"}),!e&&Object(i.createElement)(c.RichTextToolbarButton,{name:"link",icon:"admin-links",title:Object(o.__)("Link"),onClick:this.addLink,isActive:e,shortcutType:"primary",shortcutCharacter:"k"}),Object(i.createElement)(I,{addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:e,activeAttributes:n,value:r,onChange:a}))}}]),e}(i.Component))},{name:"core/strikethrough",title:Object(o.__)("Strikethrough"),tagName:"del",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,u=function(){return r(Object(a.toggleFormat)(n,{type:"core/strikethrough"}))};return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(c.RichTextShortcut,{type:"access",character:"d",onUse:u}),Object(i.createElement)(c.RichTextToolbarButton,{name:"strikethrough",icon:"editor-strikethrough",title:Object(o.__)("Strikethrough"),onClick:u,isActive:e,shortcutType:"access",shortcutCharacter:"d"}))}}].forEach(function(t){var e=t.name,n=Object(r.a)(t,["name"]);return Object(a.registerFormatType)(e,n)})},21:function(t,e){!function(){t.exports=this.wp.richText}()},22:function(t,e){!function(){t.exports=this.wp.dom}()},24:function(t,e){!function(){t.exports=this.wp.url}()},28:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",function(){return i})},3:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},4:function(t,e){!function(){t.exports=this.wp.components}()},7:function(t,e){!function(){t.exports=this.wp.editor}()},9:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return i})}});