(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9e159e26","chunk-0315a6c8"],{1213:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"e",function(){return o}),r.d(e,"m",function(){return i}),r.d(e,"f",function(){return s}),r.d(e,"g",function(){return c}),r.d(e,"k",function(){return l}),r.d(e,"l",function(){return u}),r.d(e,"b",function(){return d}),r.d(e,"j",function(){return h}),r.d(e,"i",function(){return f}),r.d(e,"h",function(){return m}),r.d(e,"d",function(){return g}),r.d(e,"c",function(){return p});var a=r("b775");function n(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"add.storage.directory.item"},data:t})}function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"desc",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"storage_id";return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.directory.select"},data:{order_type:t,order_field:e}})}function i(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.directory.default"},data:{storage_id:t,is_default:e}})}function s(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.list"},data:t})}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.navi"},data:{storage_id:t,is_layer:e}})}function l(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"rename.storage.item"},data:{storage_id:t,name:e}})}function u(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.cover"},data:{storage_id:t,parent_id:e}})}function d(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.cover"},data:{storage_id:t}})}function h(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"move.storage.list"},data:{storage_id:t,parent_id:e}})}function f(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.url"},data:t})}function m(t,e){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.info"},data:{url:t,source:e}})}function g(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"del.storage.list"},data:{storage_id:t}})}function p(t){return Object(a.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.thumb"},data:{storage_id:t}})}},"1dcf":function(t,e,r){},"47f7":function(t,e,r){"use strict";var a=r("1dcf");r.n(a).a},7830:function(t,e,r){"use strict";r("ac4d"),r("8a81"),r("ac6a");var a=r("ca00");e.a={data:function(){return{isCheckDirectory:!0}},filters:{getImageThumb:function(t){var e="image/storage/file.png";switch(t.type){case 0:e=t.url?a.a.getImageCodeUrl(t.url,"storage_lists"):"";break;case 2:e=t.cover?a.a.getImageCodeUrl(t.cover,"storage_lists"):t.is_default?"image/storage/default.png":"image/storage/folder.png";break;case 3:e=t.cover?a.a.getImageCodeUrl(t.cover,"storage_lists"):"image/storage/video.png"}return e},getFileTypeIocn:function(t){switch(t){case 0:return"file-photo-o";case 1:return"file-o";case 2:return"folder-o";case 3:return"file-video-o"}return"question"}},methods:{allCheckBox:function(){var t=!0,e=!(this.checkList=[]),r=void 0;try{for(var a,n=this.currentTableData[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var o=a.value;!this.isCheckDirectory&&2===o.type||this.checkList.push(o.storage_id)}}catch(t){e=!0,r=t}finally{try{t||null==n.return||n.return()}finally{if(e)throw r}}},reverseCheckBox:function(){var t=[],e=!0,r=!1,a=void 0;try{for(var n,o=this.currentTableData[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;!this.isCheckDirectory&&2===i.type||-1!==this.checkList.indexOf(i.storage_id)||t.push(i.storage_id)}}catch(t){r=!0,a=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw a}}this.checkList=t},cancelCheckBox:function(){this.checkList=[]}}}},8704:function(t,e,r){"use strict";r.r(e);r("8e6e"),r("456d"),r("ac4d"),r("8a81"),r("ac6a");var a=r("bd86"),n=r("7830"),o=r("1213");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var s={name:"cs-storage",mixins:[n.a],components:{PageFooter:function(){return r.e("chunk-2d2102da").then(r.bind(null,"b77f"))}},props:{confirm:{type:Function}},data:function(){return{visible:!1,loading:!0,naviData:[],checkList:[],currentTableData:[],isCheckDirectory:!1,form:{name:"",storage_id:0,order_type:"desc",order_field:"storage_id"},page:{current:1,size:48,total:0}}},watch:{"form.storage_id":{handler:function(t){var e=this;Object(o.g)(t).then(function(t){e.naviData=t.data})}}},methods:{handleStorageDlg:function(){this.visible=!0,this.handleSubmit()},switchDirectory:function(t){this.form.name=null,this.form.storage_id=t||0,this.handleSubmit()},handleOpen:function(t){2===this.currentTableData[t].type&&this.switchDirectory(this.currentTableData[t].storage_id)},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick(function(){e.handleSubmit()})},handleSubmit:function(){var e=this;this.checkList=[],this.loading=!0,Object(o.f)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){Object(a.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.form,{page_no:this.page.current,page_size:this.page.size})).then(function(t){e.page.total=t.data.total_result,e.currentTableData=0<t.data.total_result?t.data.items:[]}).finally(function(){e.loading=!1})},handleConfirm:function(){var t=[],e=!0,r=!1,a=void 0;try{for(var n,o=this.currentTableData[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;-1!==this.checkList.indexOf(i.storage_id)&&t.push(i)}}catch(t){r=!0,a=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw a}}this.visible=!1,this.$emit("confirm",t)},handleSearch:function(){this.page.current=1,this.form.storage_id=0,this.handleSubmit()}}},c=(r("47f7"),r("2877")),l=Object(c.a)(s,function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("el-dialog",{attrs:{title:"资源选取",visible:r.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"769px"},on:{"update:visible":function(t){r.visible=t}}},[a("el-form",{staticStyle:{"margin-top":"-25px"},attrs:{model:r.form,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",[a("el-button-group",[a("el-button",{on:{click:r.allCheckBox}},[a("cs-icon",{attrs:{name:"check-square-o"}}),r._v("\n              全选\n            ")],1),a("el-button",{on:{click:r.reverseCheckBox}},[a("cs-icon",{attrs:{name:"minus-square-o"}}),r._v("\n              反选\n            ")],1),a("el-button",{on:{click:r.cancelCheckBox}},[a("cs-icon",{attrs:{name:"square-o"}}),r._v("\n              取消\n            ")],1)],1)],1)],1),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"输入资源名称进行搜索",clearable:!0,size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&r._k(t.keyCode,"enter",13,t.key,"Enter")?null:r.handleSearch()}},model:{value:r.form.name,callback:function(t){r.$set(r.form,"name",t)},expression:"form.name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:r.handleSearch},slot:"append"})],1)],1)],1)],1)],1),a("el-breadcrumb",{staticClass:"breadcrumb cs-mb",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("a",{staticStyle:{cursor:"pointer"},on:{click:function(t){return r.switchDirectory(0)}}},[r._v("资源管理")])]),r._l(r.naviData,function(e){return a("el-breadcrumb-item",{key:e.storage_id},[a("a",{staticStyle:{cursor:"pointer"},on:{click:function(t){return r.switchDirectory(e.storage_id)}}},[r._v(r._s(e.name))])])})],2),a("el-checkbox-group",{model:{value:r.checkList,callback:function(t){r.checkList=t},expression:"checkList"}},[a("ul",{directives:[{name:"loading",rawName:"v-loading",value:r.loading,expression:"loading"}],staticClass:"storage-list"},r._l(r.currentTableData,function(t,e){return a("li",{key:e},[a("dl",[a("dt",[a("div",{staticClass:"picture cs-m-5"},[2!==t.type?a("el-checkbox",{staticClass:"check",attrs:{label:t.storage_id}},[r._v(" ")]):r._e(),a("el-image",{attrs:{fit:"fill",src:r._f("getImageThumb")(t),lazy:""},nativeOn:{click:function(t){return r.handleOpen(e)}}})],1),a("el-tooltip",{attrs:{placement:"top",enterable:!1,"open-delay":300}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[r._v("名称："+r._s(t.name))]),a("br"),a("span",[r._v("日期："+r._s(t.create_time))]),a("br"),0===t.type?a("span",[r._v("尺寸："+r._s(t.pixel.width+","+t.pixel.height))]):a("span",[r._v("类型："),a("cs-icon",{attrs:{name:r._f("getFileTypeIocn")(t.type)}})],1)]),a("span",{staticClass:"storage-name cs-ml-5"},[r._v(r._s(t.name))])])],1)])])}),0)]),a("page-footer",{staticStyle:{margin:"0",padding:"20px 0 0 0"},attrs:{current:r.page.current,size:r.page.size,total:r.page.total},on:{change:r.handlePaginationChange}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){r.visible=!1}}},[r._v("取消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:r.handleConfirm}},[r._v("确定")])],1)],1)},[],!1,null,"62e97892",null);e.default=l.exports}}]);