(function(e){function t(t){for(var n,s,l=t[0],o=t[1],c=t[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/incremental-game-template/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"063f":function(e,t,a){},1771:function(e,t,a){var n={"./images/currencies/money.svg":"f98c","./images/currencies/secondary.svg":"f734","./logo.png":"cf05","./socials/discord.png":"f0ac","./socials/docusaurus.svg":"199e","./socials/github.png":"5832"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="1771"},"199e":function(e,t,a){e.exports=a.p+"img/docusaurus.09a7b121.svg"},"2bbc":function(e,t,a){"use strict";a("063f")},5832:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABVlJREFUeJztm1uIVVUYgL+zx5x0Zo4zZpldxiYltasVpYxjmFERQhAV0RWh7DL4Ug8DQRe7oUZNmmC99mBQYEVk+FAaRTeCgvJSk9GJmpysRmvOwaxxpod/n+ac3dp7r3/fzg764Idhz7/+yzp77b3W+tcukD6dwGLgfGA+cBowE2gHml2dI8Ah4CegBOwFPgM+BH7IIMZEKQA9wEZgHzAeU74GNgBLXNu5pQPoA74hftJBndGH3D25YTqwDiiTXuJeGQHWIp3eMBxgNTBMdol75Veg140lU+YBH8UIPGn5ADgj1YxrWAlUUkwmqpSBW9NLG5qATTlINEyeIYUh0Qy8loPkbOUVYHKSyW/PQVJaeTOJTmjiv/XLe2UrMYfDszlIIq70R01+ZQ6CT0pu9kvSb249D/gUmBrQQWPAFcBh4BzgKlcSe/j4cAQZ39uBXUCr+3fQOqGMLMb22ThwsJvkvGdoewLwKPCbRXutHAQeBmYY/NrE+z6GTppkMNYLLDJc9/K24doB4CHk2fEEsKrGaQX4EvgW2I8sfw+7/5uCrClOArqQO3CK+78x4HngQWTabWKnRczdwF2uLV+mYz+3vy7EIciy+G7gTHRP4yZkWPW6gYdxk2XMPxOyklxnaWgcWKpIKG2WYx/3Y35GOtAtaXtSSSUay7CP+3dgWrVh7W25CmhRODU9jBrF8QrdNiRXYKIDCsgDQsO5Sv00OVupf6f3Qg/619KO6PEmzjvo419ca2CjsvFfwCWppqRjGTCKLoenag1od28fTzefSKxFl8OeasNOZcMfmZik5IkWpK6gyWWWg2csWLCZiRlcnqgAzynbdDvIIkHDFqV+lryo1F/oIOUqW0rIXD6vDACDCv0FDlKrs+ULVTiNYZdCt8tBCpW2DCmDaQT7FbozHXR1tlFlMI1AE2OHw0SJ2oY8vv68BO1ieWl2kA0HW1qVwTQCTYxjDrp3+qnKYBpBp0K34iB7ALbMUQaTNQXgdIV+2UH33pyhdJA184GiQn/QAb5TOlmu1M+SS5X6JQf4StnoBqV+lmhjGwC4Bt0KagxYkEy8iXIe+k2RqwFOjtBwazY5qXgDfR6zqo33Rmh8ffo5WWNbF6iVujXD0xEMjAAXppqWHRcT7cjOk7VGuiMYGEfKW5elmFwYlyP7/FFi/1cpbSCioaNIb2Y5TS4idf+jEWPebTLa56O8Byl49hP8rDgAPIAUONOiE1gD/BIQh43cazI+DXNZ+1XqCyi3IePfz/goUopeA1wJnBgx2QKy9liBVJo/Rl7BcRIfR4q/vner39byW8ApNXoXhXSCV7YhFV9bjkFK3nGTNckjQY7bkRKyqeEg9YuhWywdVqjvPFu6gD8STn4IqQ0Gck+Agc+p30CxOUEWeCAhhBciJuont9s4dZDjL35G7q/RLSLndIOcrtDn/Q/XKpILk50ovjeYi/9ZgWHqy+jNyLjyPpnLwMvEO9I+NyAhjYwgQ0pF0PRytUG/CSlTLwXOQh5kcWkLiEEjkaft/T4Gh8lmY+RYH/8aWR8nAAe5jU2GS8DCOMYtmOrj21a2kMB3RpORg4kmB38ixdILfBxptqdMtPj4tZHXSWYYAtIJL4U4PIScLn0X+AT43r1uOotoS2uIz6BfPo5fIw7Rls1xfoViBH/rSfnzuhvRHafTVJ68aDpghAw3aeYgt7pNYJpSlZd2Sx870FW5E8FBjpuFHUvRnD30clyI7SFketvQL0qLyPHTg5iDjPMm8OuAYWT2GbqwyZI24D5kA6UaaIl4v84k5FBW1d5uZDMj90XaRcitGWUZ7GU2cAey+fk/SfM3fwVWkQmXJ1MAAAAASUVORK5CYII="},a766:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var n=a("53ca"),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{dark:e.darkMode}},[a("igt-notifications"),a("igt-sidebar",{attrs:{title:"Incremental Game Template"}},[a("igt-sidebar-category",{attrs:{name:"Features"}}),a("igt-tab",{attrs:{name:"Settings",selected:!0}},[a("igt-settings",{attrs:{"settings-feature":e.game.features.settings}})],1),a("igt-sidebar-category",{attrs:{name:"Other"}}),e.showDevPanel?a("igt-tab",{attrs:{name:"Developer Panel"}},[a("igt-developer-panel",{attrs:{"developer-panel":e.game.getDeveloperPanel()}})],1):e._e(),a("igt-sidebar-category",{attrs:{name:"Socials"}}),a("igt-sidebar-external-link",{attrs:{name:"Discord",link:"https://discord.gg/WUYDqct2Ef",image:"socials/discord.png"}}),a("igt-sidebar-external-link",{attrs:{name:"Documentation",link:"https://123ishatest.github.io/igt-docs",image:"socials/docusaurus.svg"}}),a("igt-sidebar-external-link",{attrs:{name:"GitHub",link:"https://github.com/123ishaTest/igt-library",image:"socials/github.png"}})],1)],1)},s=[],l=a("d4ec"),o=a("bee2"),c=a("ade3"),u=a("257e"),d=a("262e"),f=a("2caf"),g=a("dc33"),p=function(e){Object(d["a"])(a,e);var t=Object(f["a"])(a);function a(e){var n;return Object(l["a"])(this,a),n=t.call(this),Object(c["a"])(Object(u["a"])(n),"SAVE_KEY","igt-vue"),Object(c["a"])(Object(u["a"])(n),"TICK_DURATION",.01),Object(c["a"])(Object(u["a"])(n),"features",void 0),n.features=e,n}return a}(g["e"]),m=function(){function e(){Object(l["a"])(this,e)}return Object(o["a"])(e,null,[{key:"start",value:function(){this.game=this.getDefaultGame(),this.game.initialize(),this.game.load(),this.game.start()}},{key:"getDefaultGame",value:function(){return new p({settings:new g["f"]})}}]),e}();Object(c["a"])(m,"inProduction",!0),Object(c["a"])(m,"game",void 0);var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto"},[n("div",{staticClass:"fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden",class:e.sidebarOpen?"block":"hidden",on:{click:function(t){e.sidebarOpen=!1}}}),n("div",{staticClass:"fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 shadow-xl",class:e.sidebarOpen?"translate-x-0 ease-out":"-translate-x-full ease-in"},[n("div",{staticClass:"flex items-center justify-center mt-2"},[n("div",{staticClass:"flex items-center p-2 mx-2"},[n("img",{staticClass:"h-12 w-12",attrs:{src:a("cf05"),alt:"logo"}}),n("span",{staticClass:"text-gray-800 dark:text-white text-xl font-semibold text-center"},[e._v(e._s(e.title))])])]),n("nav",{staticClass:"flex flex-col mt-10 px-4 text-left"},e._l(e.tabs,(function(t,i){return n("a",{key:"tab-"+i,staticClass:"flex flex-row w-full justify-between items-center tab-entry dark:text-white",class:{"bg-gray-200 dark:text-gray-700":t.isActive,"hover:text-gray-700 hover:bg-gray-200 cursor-pointer dark:hover:text-gray-700":!t.isCategory},attrs:{href:t.link,target:"_blank"},on:{click:function(a){t.canSelect&&e.selectTab(t)}}},[t.isCategory?n("div",{key:"tab"+i,staticClass:"w-full mt-8 mb-4 text-sm text-left"},[e._v(" "+e._s(t.name)+" "),n("hr")]):n("span",[e._v(e._s(t.name))]),t.image?n("img",{staticClass:"w-8 h-8",attrs:{src:a("1771")("./"+t.image),alt:t.image}}):e._e()])})),0)]),n("div",{staticClass:"flex-1 flex flex-col overflow-hidden"},[n("header",{staticClass:"flex justify-between items-center p-6"},[n("div",{staticClass:"flex items-center space-x-4 lg:space-x-0"},[n("button",{staticClass:"text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden",on:{click:function(t){e.sidebarOpen=!0}}},[n("svg",{staticClass:"h-6 w-6",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6H20M4 12H20M4 18H11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),n("div",[e.activeTab?n("h1",{staticClass:"text-2xl font-medium text-gray-800 dark:text-white"},[e._v(e._s(e.activeTab.name))]):e._e()])])]),n("main",{staticClass:"flex-1 overflow-x-hidden overflow-y-auto"},[n("div",{staticClass:"container mx-auto px-6 py-8"},[n("div",{staticClass:"grid place-items-center text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 shadow-md"},[n("div",{staticClass:"w-full"},[e._t("default")],2)])])])])])])},b=[],h=(a("7db0"),a("159b"),a("b0c0"),{name:"igt-sidebar",data:function(){return{sidebarOpen:!0,darkMode:!0,dropdownOpen:!0,tabs:[]}},props:{title:{type:String,required:!0}},computed:{activeTab:function(){return this.tabs.find((function(e){return e.isActive}))}},created:function(){this.tabs=this.$children},methods:{selectTab:function(e){this.tabs.forEach((function(t){t.isActive=t.name===e.name}))}}}),x=h,y=(a("2bbc"),a("2877")),w=Object(y["a"])(x,v,b,!1,null,"af670668",null),C=w.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[e._t("default")],2)},_=[],k=(a("ac1f"),a("5319"),{name:"igt-tab",props:{name:{required:!0},selected:{default:!1}},data:function(){return{canSelect:!0,isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}}),O=k,j=Object(y["a"])(O,A,_,!1,null,"544a2ca6",null),I=j.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("notificationGroup",{attrs:{group:"top-left"}},[a("div",{staticClass:"z-50 fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-start"},[a("div",{staticClass:"max-w-sm w-full"},[a("notification",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.notifications;return e._l(n,(function(e){return a("div",{key:e.id,staticClass:"max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"},[a("igt-notification",{attrs:{notification:e}})],1)}))}}])})],1)])])},E=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("div",{staticClass:"flex justify-center items-center w-12",class:e.backgroundColor},[a("div",{staticClass:"text-xl fa",class:e.icon})]),a("div",{staticClass:"-mx-3 py-2 px-4"},[a("div",{staticClass:"mx-3"},[a("span",{staticClass:"font-semibold",class:e.textColor},[e._v(e._s(e.notification.title))]),a("p",{staticClass:"text-gray-600 text-sm"},[e._v(e._s(e.notification.text))])])])])},D=[],B={name:"igt-notification",props:{notification:{type:Object,required:!0}},computed:{textColor:function(){switch(this.notification.type){case"success":return"text-green-500";case"error":return"text-red-500";default:return"text-gray-500"}},backgroundColor:function(){switch(this.notification.type){case"success":return"bg-green-500";case"error":return"bg-red-500";default:return"bg-gray-500"}},icon:function(){switch(this.notification.type){case"success":return"fa-check";case"error":return"fa-times";default:return"fa-question"}}}},F=B,P=Object(y["a"])(F,T,D,!1,null,"15afe98b",null),W=P.exports,q={name:"igt-notifications",components:{IgtNotification:W}},Y=q,L=Object(y["a"])(Y,S,E,!1,null,"c1296ae4",null),U=L.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("igt-feature",{attrs:{"container-class":"bg-yellow-100 dark:bg-gray-700"}},[a("igt-tabs",e._l(e.developerPanel.tabs,(function(t,n){return a("igt-tab",{key:n+"-"+t.label,attrs:{name:e._f("humanizeString")(t.label),selected:0===n}},e._l(t.children,(function(e,t){return a("div",{key:t+"-"+e.propertyName},[a(e.componentName,{tag:"component",attrs:{field:e}})],1)})),0)})),1)],1)},N=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("span",{staticClass:"align-middle m-4"},[e._v(e._s(e.field.displayLabel))]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.field.value,expression:"field.value",modifiers:{number:!0}}],staticClass:"input-primary w-32",attrs:{type:"number"},domProps:{value:e.field.value},on:{input:function(t){t.target.composing||e.$set(e.field,"value",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])},G=[],M={name:"igt-number-field",props:{field:{type:g["g"],required:!0}}},H=M,V=Object(y["a"])(H,Q,G,!1,null,"3e03ff1a",null),z=V.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("button",{staticClass:"btn",class:e.field.cssClass,on:{click:function(t){return e.run()}}},[e._v(" "+e._s(e.field.displayLabel)+" ")])])},K=[],$={name:"igt-button-field",props:{field:{type:g["d"],required:!0}},methods:{run:function(){this.field.func()}}},J=$,Z=Object(y["a"])(J,X,K,!1,null,"52294bfe",null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"align-middle m-2"},[e._v(e._s(e.field.displayLabel)+" - "+e._s(e.field.value))]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.field.value,expression:"field.value",modifiers:{number:!0}}],staticClass:"input-range",attrs:{type:"range"},domProps:{value:e.field.value},on:{__r:function(t){e.$set(e.field,"value",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])},ae=[],ne={name:"igt-range-field",props:{field:{type:g["h"],required:!0}}},ie=ne,re=Object(y["a"])(ie,te,ae,!1,null,"7f240cff",null),se=re.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tabs"},[a("ul",{staticClass:"flex flex-row"},e._l(e.tabs,(function(t,n){return a("li",{key:"tab"+n,staticClass:"p-2",class:{"text-green-500":t.isActive}},[a("a",{staticClass:"text-lg",attrs:{href:t.href},on:{click:function(a){return e.selectTab(t)}}},[e._v(e._s(t.name))])])})),0)]),a("hr"),a("br"),a("div",{staticClass:"tabs-details"},[e._t("default")],2)])},oe=[],ce={name:"igt-tabs",data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(e){this.tabs.forEach((function(t){t.isActive=t.name===e.name}))}}},ue=ce,de=Object(y["a"])(ue,le,oe,!1,null,"34bc0a80",null),fe=de.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-lg"},[e._v(e._s(e.field.displayLabel)+": "+e._s(e.field.value)+" ")])},pe=[],me={name:"igt-display-field",props:{field:{type:g["c"],required:!0}}},ve=me,be=Object(y["a"])(ve,ge,pe,!1,null,"69be35ac",null),he=be.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"align-middle m-2"},[e._v(e._s(e.field.displayLabel))]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.field.value,expression:"field.value"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.field,"value",t.target.multiple?a:a[0])}}},e._l(e.field.options,(function(t){return a("option",{key:t.value,domProps:{value:t[1]}},[e._v(" "+e._s(t[0])+" ")])})),0)])},ye=[],we={name:"igt-choice-field",props:{field:{type:g["a"],required:!0}}},Ce=we,Ae=Object(y["a"])(Ce,xe,ye,!1,null,"0340c4b6",null),_e=Ae.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feature-tab",class:e.containerClass},[e._t("default")],2)},Oe=[],je={name:"igt-feature",props:{containerClass:{type:String,default:"bg-gray-200 dark:bg-gray-700"}}},Ie=je,Se=Object(y["a"])(Ie,ke,Oe,!1,null,"b251df06",null),Ee=Se.exports,Te={name:"igt-developer-panel",components:{IgtFeature:Ee,IgtChoiceField:_e,IgtDisplayField:he,IgtTab:I,IgtTabs:fe,IgtRangeField:se,IgtButtonField:ee,IgtNumberField:z},props:{developerPanel:{type:g["b"],required:!0}}},De=Te,Be=Object(y["a"])(De,R,N,!1,null,"5d0737b5",null),Fe=Be.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]})},We=[],qe={name:"igt-sidebar-category",props:{name:{required:!0},selected:{default:!1}},data:function(){return{isCategory:!0,isActive:!1}}},Ye=qe,Le=Object(y["a"])(Ye,Pe,We,!1,null,"781de8e1",null),Ue=Le.exports,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]})},Ne=[],Qe={name:"igt-sidebar-external-link",props:{name:{required:!0},link:{type:String,required:!0},image:{type:String,default:""}},data:function(){return{isExternalLink:!0,isActive:!1}}},Ge=Qe,Me=Object(y["a"])(Ge,Re,Ne,!1,null,"a88c5098",null),He=Me.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("igt-feature",[a("button",{staticClass:"btn btn-red",on:{click:e.resetSave}},[e._v("Reset Save")])])},ze=[],Xe={name:"igt-settings",components:{IgtFeature:Ee},props:{settingsFeature:{type:g["f"],required:!0}},methods:{resetSave:function(){var e=confirm("Are you sure you want to delete your save? This will not give you any rewards");e&&(m.game.deleteSave(),location.reload())}}},Ke=Xe,$e=Object(y["a"])(Ke,Ve,ze,!1,null,"a87ea8d6",null),Je=$e.exports,Ze={components:{IgtSettings:Je,IgtSidebarExternalLink:He,IgtSidebarCategory:Ue,IgtDeveloperPanel:Fe,IgtNotifications:U,IgtTab:I,IgtSidebar:C},data:function(){return{game:m.game}},computed:{showDevPanel:function(){return!m.inProduction},darkMode:function(){return!0}}},et=Ze,tt=Object(y["a"])(et,r,s,!1,null,null,null),at=tt.exports,nt=a("5008");a("4de4"),a("d3b7"),a("25f0"),a("b680"),a("99af"),a("fb6a");i["a"].filter("numberFormat",(function(e){return void 0==e?"":e.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})),i["a"].filter("dateFormat",(function(e){if(void 0==e)return"";var t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),a=new Intl.DateTimeFormat("en",{month:"long"}).format(e),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e),i=e.getHours(),r=i<10?"0".concat(i):"".concat(i),s=e.getMinutes(),l=s<10?"0".concat(s):"".concat(s);return"".concat(n," ").concat(a," ").concat(t," ").concat(r,":").concat(l)})),i["a"].filter("humanizeString",(function(e){return void 0==e?"":(e=e.charAt(0).toUpperCase()+e.slice(1),e.replace("_"," ").replace("-"," "),e)}));a("a766");i["a"].config.productionTip=!1,i["a"].use(nt["a"]),window.onload=function(){m.start(),m.inProduction||void 0===("undefined"===typeof window?"undefined":Object(n["a"])(window))||(console.log("Exposing App to console"),window.App=m),console.log("Launched"),new i["a"]({render:function(e){return e(at)}}).$mount("#app")}},cf05:function(e,t,a){e.exports=a.p+"img/logo.f0621815.png"},f0ac:function(e,t,a){e.exports=a.p+"img/discord.872a595c.png"},f734:function(e,t,a){e.exports=a.p+"img/secondary.b9dc5fa3.svg"},f98c:function(e,t,a){e.exports=a.p+"img/money.86ea5f34.svg"}});
//# sourceMappingURL=app.d869c3aa.js.map