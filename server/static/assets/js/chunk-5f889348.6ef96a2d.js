(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f889348"],{"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),c=r("69a8"),s=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=i(e),t=o(t,!0),s)try{return l(e,t)}catch(r){}if(c(e,t))return a(!n.f.call(e,t),e[t])}},"1a2e":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header_container"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),e._l(e.$route.meta,(function(t,n){return r("el-breadcrumb-item",{key:n},[e._v(e._s(t))])}))],2),r("el-dropdown",{on:{command:e.handleCommand}},[r("img",{staticClass:"avator"}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),r("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)},a=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={data:function(){return{}},created:function(){},computed:s({},Object(o["c"])(["loginInfo"])),methods:s({handleCommand:function(e){var t=this;switch(e){case"home":this.$router.push("/index");break;case"logout":this.logout({userId:"id"}).then((function(e){t.$message({message:"注销成功！",type:"success"}),t.$router.push("/")})).catch((function(){t.$message.error("注销失败！")}))}}},Object(o["b"])(["logout"]))},u=l,f=(r("9fea"),r("2877")),d=Object(f["a"])(u,n,a,!1,null,"06e7a62a",null);t["a"]=d.exports},"2e08":function(e,t,r){var n=r("9def"),a=r("9744"),i=r("be13");e.exports=function(e,t,r,o){var c=String(i(e)),s=c.length,l=void 0===r?" ":String(r),u=n(t);if(u<=s||""==l)return c;var f=u-s,d=a.call(l,Math.ceil(f/l.length));return d.length>f&&(d=d.slice(0,f)),o?d+c:c+d}},"2f14":function(e,t,r){},"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),a=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(e){return!!~a(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"456d":function(e,t,r){var n=r("4bf8"),a=r("0d58");r("5eda")("keys",(function(){return function(e){return a(n(e))}}))},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},"521f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFlag,expression:"showFlag"}],staticClass:"wrap",on:{"!click":function(t){return e.clickHandler(t)}}},[r("transition",{attrs:{name:"pop"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFlag,expression:"showFlag"}],staticClass:"messageBoxWrap"},[r("div",{staticClass:"box__header"},[e._v("编辑")]),r("div",{staticClass:"box__content"},[e._t("default")],2),r("div",{staticClass:"box__btns"},[r("el-button",{on:{click:e.cancel}},[e._v("取消")]),r("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.confirm}},[e._v("保存")])],1)])]),r("div",{staticClass:"mask"})],1)},a=[],i=(r("6762"),r("2fdb"),{data:function(){return{showFlag:!1,loading:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")},clickHandler:function(e){e.target.className.includes("mask")&&this.hide()}}}),o=i,c=(r("db22"),r("2877")),s=Object(c["a"])(o,n,a,!1,null,"7359146f",null);t["a"]=s.exports},"5eda":function(e,t,r){var n=r("5ca1"),a=r("8378"),i=r("79e5");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],o={};o[e]=t(r),n(n.S+n.F*i((function(){r(1)})),"Object",o)}},6762:function(e,t,r){"use strict";var n=r("5ca1"),a=r("c366")(!0);n(n.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),i=r("9e1e"),o="toString",c=/./[o],s=function(e){r("2aba")(RegExp.prototype,o,e,!0)};r("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?s((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)})):c.name!=o&&s((function(){return c.call(this)}))},"8b55":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}));r("6b54"),r("f576");var n=/^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,a=/^https?.+\.(mp4|avi|flv|mpg|rm|mov|asf|3gp|mkv|rmvb)$/i,i=/^https?.+\.(jpg|jpeg|gif|png|bmp)$/i},"8e6e":function(e,t,r){var n=r("5ca1"),a=r("990b"),i=r("6821"),o=r("11e9"),c=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),s=o.f,l=a(n),u={},f=0;while(l.length>f)r=s(n,t=l[f++]),void 0!==r&&c(u,t,r);return u}})},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},9744:function(e,t,r){"use strict";var n=r("4588"),a=r("be13");e.exports=function(e){var t=String(a(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"990b":function(e,t,r){var n=r("9093"),a=r("2621"),i=r("cb7c"),o=r("7726").Reflect;e.exports=o&&o.ownKeys||function(e){var t=n.f(i(e)),r=a.f;return r?t.concat(r(e)):t}},"9fea":function(e,t,r){"use strict";var n=r("ea97"),a=r.n(n);a.a},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},ac6a:function(e,t,r){for(var n=r("cadf"),a=r("0d58"),i=r("2aba"),o=r("7726"),c=r("32e9"),s=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(p),h=0;h<m.length;h++){var b,g=m[h],v=p[g],w=o[g],O=w&&w.prototype;if(O&&(O[u]||c(O,u,d),O[f]||c(O,f,g),s[g]=d,v))for(b in n)O[b]||i(O,b,n[b],!0)}},afc4:function(e,t,r){"use strict";var n=r("f764"),a=r.n(n);a.a},d2c8:function(e,t,r){var n=r("aae3"),a=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},db22:function(e,t,r){"use strict";var n=r("2f14"),a=r.n(n);a.a},ea97:function(e,t,r){},f0d0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("head-top"),r("div",{staticClass:"table_container"},[r("message-box",{ref:"msgBox",on:{confirm:e.confirm,cancel:e.cancel}},[r("video",{ref:"video",staticStyle:{"margin-bottom":"20px"},attrs:{src:e.tempObj.videoPath,width:"100%",height:"100%"},on:{click:e.playHandler}}),r("el-form",{ref:"tempObj",staticClass:"el-form",attrs:{model:e.tempObj,rules:e.rules,"label-width":"110px"}},[r("el-form-item",{staticClass:"el-form-item1",attrs:{label:"用户邮箱",prop:"userEmail"}},[r("el-input",{attrs:{clearable:""},model:{value:e.tempObj.userEmail,callback:function(t){e.$set(e.tempObj,"userEmail",t)},expression:"tempObj.userEmail"}})],1),r("el-form-item",{staticClass:"el-form-item1",attrs:{label:"视频url",prop:"videoPath"}},[r("el-input",{attrs:{clearable:""},model:{value:e.tempObj.videoPath,callback:function(t){e.$set(e.tempObj,"videoPath",e._n(t))},expression:"tempObj.videoPath"}})],1),r("el-form-item",{staticClass:"el-form-item1",attrs:{label:"视频封面url",prop:"videoCover"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{clearable:""},model:{value:e.tempObj.videoCover,callback:function(t){e.$set(e.tempObj,"videoCover",t)},expression:"tempObj.videoCover"}}),r("img",{attrs:{src:e.tempObj.videoCover,alt:"",height:"100%",width:"100%"}})]}}])}),r("el-form-item",{staticClass:"el-form-item1",attrs:{label:"视频描述",prop:"videoDesc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.tempObj.videoDesc,callback:function(t){e.$set(e.tempObj,"videoDesc",t)},expression:"tempObj.videoDesc"}})],1)],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(t){return!e.search||t.userEmail.toLowerCase().includes(e.search.toLowerCase())})),"highlight-current-row":""}},[r("el-table-column",{attrs:{property:"videoId",label:"视频Id",width:"100"}}),r("el-table-column",{attrs:{property:"createdAt",label:"发布日期",width:"220"}}),r("el-table-column",{attrs:{property:"userEmail",label:"用户邮箱",width:"220"}}),r("el-table-column",{attrs:{property:"videoDesc",label:"视频描述"}}),r("el-table-column",{attrs:{label:"视频封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{src:e.row.videoCover,alt:"",height:"100%",width:"100%"}})]}}])}),r("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("详情")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.statistic.sum.videoSum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},a=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),o=(r("96cf"),r("3b8d")),c=r("1a2e"),s=r("521f"),l=r("2f62"),u=r("8b55");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={activated:function(){this.fetchVideoList()},data:function(){var e=this,t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,n,a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==n){t.next=4;break}a(new Error("请输入用户登录邮箱")),t.next=18;break;case 4:if(u["b"].test(n)){t.next=8;break}a(new Error("邮箱格式错误")),t.next=18;break;case 8:return t.prev=8,t.next=11,e.$axios.get("/api/common/user/detectEmail/".concat(n));case 11:i=t.sent,200===i.status&&a(),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](8),a(new Error("邮箱未注册"));case 18:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e,r,n){return t.apply(this,arguments)}}(),r=function(e,t,r){""===t?r(new Error("请输入视频URL")):u["c"].test(t)?r():r(new Error("请输入正确的视频URL"))},n=function(e,t,r){""===t?r(new Error("请输入视频封面URL")):u["a"].test(t)?r():r(new Error("请输入正确的视频封面URL"))};return{tableData:[],search:"",currentRow:null,offset:0,limit:20,count:0,currentPage:1,tempObj:{},rules:{userEmail:[{required:!0,validator:t,trigger:"blur"}],videoPath:[{required:!0,validator:r,trigger:"blur"}],videoCover:[{required:!0,validator:n,trigger:"blur"}],videoDesc:[{required:!0,message:"请输入视频描述",trigger:"blur"}]}}},computed:d({},Object(l["c"])(["statistic"])),methods:{fetchVideoList:function(){var e=this;this.$axios.get("/api/admin/getAllVideo/".concat(this.currentPage)).then((function(t){var r=t.data.data;r.forEach((function(e,t,r){r[t].createdAt=new Date(r[t].createdAt).toLocaleString()})),e.tableData=r})).catch((function(){e.$message.error("网络错误！")}))},confirm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.msgBox.loading=!0,e.next=3,this.$axios.post("/api/admin/modifyVideo",this.tempObj);case 3:t=e.sent,200===t.status?(this.$message({message:"修改成功",type:"success"}),this.fetchVideoList()):this.$message.error("网络错误！"),this.$refs.msgBox.loading=!1,this.$refs.msgBox.hide();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$refs.msgBox.loading=!1,this.$refs.msgBox.hide()},handleEdit:function(e,t){this.tempObj=Object.assign({},t),console.log(this.tempObj),this.$refs.msgBox.show()},handleDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除该视频及其相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.$axios.post("/api/admin/delVideo",{videoId:t.videoId});case 3:n=e.sent,200===n.status&&(r.fetchUserList(),r.$message({type:"success",message:"删除视频".concat(t.videoId,"成功!")})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),r.$message.error("暂时不支持删除视频。");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},playHandler:function(){var e=this.$refs.video;e.src&&(e.paused?e.play():e.pause())},handleCurrentChange:function(e){this.currentPage=e,this.offset=(e-1)*this.limit,this.fetchVideoList()}},components:{HeadTop:c["a"],MessageBox:s["a"]}},m=p,h=(r("afc4"),r("2877")),b=Object(h["a"])(m,n,a,!1,null,"20572a83",null);t["default"]=b.exports},f1ae:function(e,t,r){"use strict";var n=r("86cc"),a=r("4630");e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}},f576:function(e,t,r){"use strict";var n=r("5ca1"),a=r("2e08"),i=r("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);n(n.P+n.F*o,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},f764:function(e,t,r){}}]);