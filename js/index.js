!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){var r,i;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){if(void 0===(i="function"==typeof(r=o)?r.call(e,n,e,t):r)||(t.exports=i),!0,t.exports=o(),!!0){var a=window.Cookies,s=window.Cookies=o();s.noConflict=function(){return window.Cookies=a,s}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=t({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in o)o[c]&&(s+="; "+c,!0!==o[c]&&(s+="="+o[c].split(";")[0]));return document.cookie=e+"="+n+s}}function a(t,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var s=o[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=e(s[0]);if(c=(r.read||r)(c,l)||e(c),n)try{c=JSON.parse(c)}catch(t){}if(i[l]=c,t===l)break}catch(t){}}return t?i[t]:i}}return i.set=o,i.get=function(t){return a(t,!1)},i.getJSON=function(t){return a(t,!0)},i.remove=function(e,n){o(e,"",t(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}(function(){})})},function(t,e,n){"use strict";n.r(e);var r,i=n(0),o=n.n(i),a=n(1),s=n.n(a),c=function(){function t(t){this.isStarted=!1,this.time=[0,0],this.digitElem=t.querySelector(".timer__time"),this.controlElem=t.querySelector(".timer__control")}return t.prototype.prettier=function(t,e){return(t<10?"0"+t:""+t)+":"+(e<10?"0"+e:""+e)},t.prototype.controlFocus=function(){this.controlElem.innerHTML="focus",this.controlElem.classList.add("timer_focus"),this.controlElem.classList.remove("timer_cancel")},t.prototype.controlCancel=function(){this.controlElem.innerHTML="cancel",this.controlElem.classList.add("timer_cancel"),this.controlElem.classList.remove("timer_focus")},t.prototype.end=function(){clearInterval(this.interval),this.controlFocus(),this.isStarted=!1,document.title="Pomodoro"},t.prototype.start=function(t){var e=this;clearInterval(this.interval),this.controlCancel(),this.isStarted=!0,this.time=[t,0],this.digitElem.innerHTML=this.prettier.apply(this,this.time);var n=25===t?"Focus":"Break";document.title="("+this.time[0]+"m) "+n,this.interval=setInterval(function(){0===e.time[1]?(e.time[1]=59,e.time[0]--,document.title="("+(e.time[0]+1)+"m) "+n):e.time[1]--,e.digitElem.innerHTML=e.prettier.apply(e,e.time),0===e.time[0]&&0===e.time[1]&&e.end()},1e3)},t.prototype.cancel=function(){this.end(),this.time=[0,0],this.digitElem.innerHTML=this.prettier.apply(this,this.time)},t}(),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(e){var n=t.call(this,e)||this;return n.submitForm=function(t){t.preventDefault(),n.state.task.trim()&&(n.props.handleSubmit(n.state.task),n.setState({task:""}))},n.state={task:""},n.handleChange=n.handleChange.bind(n),n.submitForm=n.submitForm.bind(n),n}return l(e,t),e.prototype.handleChange=function(t){this.setState({task:t.target.value})},e.prototype.render=function(){return o.a.createElement("form",{className:"task-list__form form"},o.a.createElement("input",{className:"form__input",type:"text",value:this.state.task,placeholder:"Type a task...",onChange:this.handleChange}),o.a.createElement("button",{className:"form__submit",onClick:this.submitForm},"Add"))},e}(i.Component);var m=function(t){var e=t.task,n=t.checked,r=t.remove;return o.a.createElement("li",{className:"task-list__task"},o.a.createElement("label",{className:"task-list__label"+(e.checked?" task-list__label_line-through":"")},o.a.createElement("input",{className:"task-list__checkbox",type:"checkbox",checked:e.checked,onChange:function(){return n(e.id)}}),e.text),o.a.createElement("button",{className:"task-list__remove-btn",onClick:function(){return r(e.id)}},"×"))},h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r},f=[{id:.1,text:"Focus for 25 minutes",checked:!1},{id:.2,text:"Break for 5 minutes",checked:!1},{id:.3,text:"Every three cycles, break for 15 minutes",checked:!1}],p=0,k=function(t){function e(e){var n=t.call(this,e)||this;return n.state={tasks:JSON.parse(localStorage.getItem("tasks"))||f},n.handleSubmit=n.handleSubmit.bind(n),n.handleChecked=n.handleChecked.bind(n),n.handleRemove=n.handleRemove.bind(n),n}return h(e,t),e.prototype.handleSubmit=function(t){var e=p++,n=d(this.state.tasks,[{id:e,text:t,checked:!1}]);this.setState({tasks:n}),localStorage.setItem("tasks",JSON.stringify(n))},e.prototype.handleChecked=function(t){var e=d(this.state.tasks).map(function(e){return e.id===t&&(e.checked=!e.checked),e});this.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},e.prototype.handleRemove=function(t){var e=d(this.state.tasks).reduce(function(e,n){return n.id!==t&&e.push(n),e},[]);this.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},e.prototype.render=function(){var t=this,e=this.state.tasks.map(function(e){return o.a.createElement(m,{key:e.id,task:e,checked:t.handleChecked,remove:t.handleRemove})});return o.a.createElement("div",{className:"task-list page__task-list"},o.a.createElement("h2",{className:"task-list__title"},"Task List"),o.a.createElement(u,{handleSubmit:this.handleSubmit}),o.a.createElement("ul",{className:"task-list__list"},e))},e}(i.Component),v=n(2),y=document.querySelector(".timer"),_=document.querySelector(".timer__break-btn"),g=new c(y);y.addEventListener("click",function(t){var e=t.target;1!=g.isStarted?g.start(25):e.matches(".timer__control")&&e.classList.contains("timer_cancel")&&g.cancel()}),_.addEventListener("click",function(t){var e=t.target;e.matches(".break-btn_type_short")&&g.start(5),e.matches(".break-btn_type_long")&&g.start(15)});var b=document.querySelector(".theme-switch"),S=b.querySelector(".theme-switch__icon"),E=document.querySelector(".page");"light"===v.get("theme")&&(E.classList.add("theme_light"),S.setAttribute("src","./img/moon.svg"),S.setAttribute("alt","Dark theme")),b.addEventListener("click",function(){"light"===v.get("theme")?(v.set("theme","dark"),E.classList.remove("theme_light"),S.setAttribute("src","./img/sun.svg"),S.setAttribute("alt","Light theme")):(v.set("theme","light"),E.classList.add("theme_light"),S.setAttribute("src","./img/moon.svg"),S.setAttribute("alt","Dark theme"))}),s.a.render(o.a.createElement(k),document.getElementById("task-list"))}]);
//# sourceMappingURL=index.js.map