(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-57363327"],{"5d03":function(t,e,a){"use strict";a.r(e);a("8e6e"),a("456d"),a("6b54"),a("55dd");var r=a("bd86"),u=(a("ac6a"),a("b32c")),n=a("ca00");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var o={components:{csUpload:function(){return a.e("chunk-f8fdc73c").then(a.bind(null,"8422"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,enable:!1,disable:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑客服",create:"新增客服"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},targetMap:{_self:{text:"当前窗口",value:"_self"},_blank:{text:"新窗口",value:"_blank"}},form:{name:void 0,url:void 0,logo:void 0,target:void 0,sort:void 0,status:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],url:[{required:!0,message:"Url不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},filters:{getPreviewUrl:function(t){return t?n.a.getImageCodeUrl(t,"link_image"):""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/aided/friendlink/add"),this.auth.set=this.$has("/system/aided/friendlink/set"),this.auth.del=this.$has("/system/aided/friendlink/del"),this.auth.sort=this.$has("/system/aided/friendlink/sort"),this.auth.enable=this.$has("/system/aided/friendlink/enable"),this.auth.disable=this.$has("/system/aided/friendlink/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach(function(t){e.push(t.friend_link_id)}):e.push(this.currentTableData[t].friend_link_id),e},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&(this.form.logo=e.data[0].url)}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,r=t.order,n={order_type:void 0,order_field:void 0};e&&r&&(n.order_type="ascending"===r?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleCreate:function(){var t=this;this.form={name:void 0,url:void 0,target:"_blank",logo:"",sort:50,status:"1"},this.$nextTick(function(){t.$refs.form.clearValidate()}),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},create:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.dialogLoading=!0,Object(u.a)(d({},e.form)).then(function(t){e.currentTableData.unshift(t.data),e.dialogFormVisible=!1,e.$message.success("操作成功")}).catch(function(){e.dialogLoading=!1}))})},handleStatus:function(t,e,a){var r=this,n=1<arguments.length&&void 0!==e?e:0,l=2<arguments.length&&void 0!==a&&a,o=this._getIdList(t);if(0!==o.length){if(!l){var i=this.currentTableData[t],s=i.status?0:1;if(1<i.status)return;if(0==s&&!this.auth.disable)return;if(1==s&&!this.auth.enable)return;return this.$set(this.currentTableData,t,d({},i,{status:2})),void c(o,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){c(o,n,r)}).catch(function(){})}else this.$message.error("请选择要操作的数据");function c(a,r,n){Object(u.f)(a,r).then(function(){n.currentTableData.forEach(function(t,e){-1!==a.indexOf(t.friend_link_id)&&n.$set(n.currentTableData,e,d({},t,{status:r}))}),n.$message.success("操作成功")})}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){Object(u.b)(a).then(function(){for(var t=e.currentTableData.length-1;0<=t;t--)-1!==a.indexOf(e.currentTableData[t].friend_link_id)&&e.currentTableData.splice(t,1);e.$message.success("操作成功")})}).catch(function(){}):this.$message.error("请选择要操作的数据")},handleSort:function(t){Object(u.e)(this.currentTableData[t].friend_link_id,this.currentTableData[t].sort)},handleUpdate:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.form=d({},a,{status:a.status.toString()}),this.$nextTick(function(){e.$refs.form.clearValidate()}),this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0},update:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.dialogLoading=!0,Object(u.d)(d({},e.form)).then(function(t){e.$set(e.currentTableData,e.currentIndex,d({},e.currentTableData[e.currentIndex],{},t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")}).catch(function(){e.dialogLoading=!1}))})}}},i=(a("d9fe"),a("2877")),s=Object(i.a)(o,function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"}},[a.auth.add?r("el-form-item",[r("el-button",{attrs:{disabled:a.loading},on:{click:a.handleCreate}},[r("cs-icon",{attrs:{name:"plus"}}),a._v("\n        新增链接\n      ")],1)],1):a._e(),r("el-form-item",[r("el-button-group",[a.auth.enable?r("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleStatus(null,1,!0)}}},[r("cs-icon",{attrs:{name:"check"}}),a._v("\n          启用\n        ")],1):a._e(),a.auth.disable?r("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleStatus(null,0,!0)}}},[r("cs-icon",{attrs:{name:"close"}}),a._v("\n          禁用\n        ")],1):a._e()],1)],1),a.auth.del?r("el-form-item",[r("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleDelete(null)}}},[r("cs-icon",{attrs:{name:"trash-o"}}),a._v("\n        删除\n      ")],1)],1):a._e(),r("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:a.$route.path}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{data:a.currentTableData,stripe:""},on:{"selection-change":a.handleSelectionChange,"sort-change":a.sortChange}},[r("el-table-column",{attrs:{type:"selection",width:"35"}}),r("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"100"}}),r("el-table-column",{attrs:{label:"Url",prop:"url","min-width":"150"}}),r("el-table-column",{attrs:{label:"Logo",prop:"logo",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[e.row.logo?r("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[r("div",{staticClass:"popover-image"},[r("el-image",{attrs:{src:a._f("getPreviewUrl")(e.row.logo),fit:"fill"},nativeOn:{click:function(t){return a.$preview(e.row.logo)}}})],1),r("cs-icon",{attrs:{slot:"reference",name:"image"},slot:"reference"})],1):a._e()]}}])}),r("el-table-column",{attrs:{label:"打开方式",prop:"target"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(a.targetMap[t.row.target].text)+"\n      ")]}}])}),r("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.auth.sort?r("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(t){return a.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(t){a.$set(e.row,"sort",t)},expression:"scope.row.sort"}}):r("span",[a._v("\n          "+a._s(e.row.sort)+"\n        ")])]}}])}),r("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[r("el-tag",{style:a.auth.enable||a.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:a.statusMap[e.row.status].type,effect:a.auth.enable||a.auth.disable?"light":"plain"},nativeOn:{click:function(t){return a.handleStatus(e.$index)}}},[a._v("\n          "+a._s(a.statusMap[e.row.status].text)+"\n        ")])]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.auth.set?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleUpdate(e.$index)}}},[a._v("编辑")]):a._e(),a.auth.del?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleDelete(e.$index)}}},[a._v("删除")]):a._e()]}}])})],1),r("el-dialog",{attrs:{title:a.textMap[a.dialogStatus],visible:a.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入友情链接名称",clearable:!0},model:{value:a.form.name,callback:function(t){a.$set(a.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Url",prop:"url"}},[r("el-input",{attrs:{placeholder:"请输入友情链接Url",clearable:!0},model:{value:a.form.url,callback:function(t){a.$set(a.form,"url",t)},expression:"form.url"}})],1),r("el-form-item",{attrs:{label:"Logo",prop:"logo"}},[r("el-input",{attrs:{placeholder:"可输入友情链接Logo",clearable:!0},model:{value:a.form.logo,callback:function(t){a.$set(a.form,"logo",t)},expression:"form.logo"}},[r("template",{slot:"prepend"},[a.form.logo?r("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[r("div",{staticClass:"popover-image"},[r("el-image",{attrs:{src:a._f("getPreviewUrl")(a.form.logo),fit:"fill"},nativeOn:{click:function(t){return a.$preview(a.form.logo)}}})],1),r("cs-icon",{attrs:{slot:"reference",name:"image"},slot:"reference"})],1):a._e()],1),r("cs-upload",{attrs:{slot:"append",type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:a._getUploadFileList},slot:"append"},[r("el-button",{attrs:{slot:"control"},slot:"control"},[r("cs-icon",{attrs:{name:"upload"}})],1)],1)],2)],1),r("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[r("el-radio-group",{model:{value:a.form.target,callback:function(t){a.$set(a.form,"target",t)},expression:"form.target"}},[r("el-radio",{attrs:{label:"_self"}},[a._v("当前窗口")]),r("el-radio",{attrs:{label:"_blank"}},[a._v("新窗口")])],1)],1),r("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[r("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:a.form.sort,callback:function(t){a.$set(a.form,"sort",t)},expression:"form.sort"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:a.form.status,callback:function(t){a.$set(a.form,"status",t)},expression:"form.status"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){a.dialogFormVisible=!1}}},[a._v("取消")]),"create"===a.dialogStatus?r("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:a.create}},[a._v("确定")]):r("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:a.update}},[a._v("修改")])],1)],1)],1)},[],!1,null,"79eec4ae",null);e.default=s.exports},7759:function(t,e,a){},d9fe:function(t,e,a){"use strict";var r=a("7759");a.n(r).a}}]);