(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d225b8a"],{e636:function(t,e,a){"use strict";a.r(e);a("8e6e"),a("456d"),a("6b54");var r=a("bd86"),n=(a("ac6a"),a("5646"));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l={components:{csTinymce:function(){return a.e("chunk-705eb3e2").then(a.bind(null,"4b93"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}},typeData:{default:function(){}},groupData:{default:function(){}}},data:function(){return{currentTableData:[],multipleSelection:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑消息",create:"新增消息"},form:{type:void 0,member:void 0,title:void 0,content:void 0,url:void 0,target:void 0,is_top:void 0,status:void 0},auth:{add:!1,set:!1,del:!1,status:!1,view:!1},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],type:[{required:!0,message:"至少选择一项",trigger:"change"}],member:[{required:!0,message:"至少选择一项",trigger:"change"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},topMap:{0:{text:"普通",type:"info"},1:{text:"置顶",type:"warning"}},statusMap:{0:{text:"草稿件",type:"danger"},1:{text:"已发布",type:"success"}},targetMap:{_self:"当前窗口",_blank:"新窗口"}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/message/send/add"),this.auth.set=this.$has("/system/message/send/set"),this.auth.del=this.$has("/system/message/send/del"),this.auth.status=this.$has("/system/message/send/status"),this.auth.view=this.$has("/system/message/send/view")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach(function(t){e.push(t.message_id)}):e.push(this.currentTableData[t].message_id),e},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,r=t.order,n={order_type:void 0,order_field:void 0};e&&r&&(n.order_type="ascending"===r?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleCreate:function(){var t=this;this.form={type:void 0,member:void 0,title:void 0,content:void 0,url:void 0,target:"_blank",is_top:"0",status:"0"},this.$nextTick(function(){t.$refs.form.clearValidate()}),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},submit:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.dialogLoading=!0,Object(n.a)(o({},e.form)).then(function(t){e.currentTableData.unshift(o({},t.data,{page_views:0})),e.dialogFormVisible=!1,e.$message.success("操作成功")}).catch(function(){e.dialogLoading=!1}))})},handleSubmit:function(t){var a=this,r=this._getIdList(t);0!==r.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){Object(n.k)(r).then(function(){a.currentTableData.forEach(function(t,e){-1!==r.indexOf(t.message_id)&&a.$set(a.currentTableData,e,o({},t,{status:1}))}),a.$message.success("操作成功")})}).catch(function(){}):this.$message.error("请选择要操作的数据")},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){Object(n.b)(a).then(function(){for(var t=e.currentTableData.length-1;0<=t;t--)-1!==a.indexOf(e.currentTableData[t].message_id)&&e.currentTableData.splice(t,1);e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")})}).catch(function(){}):this.$message.error("请选择要操作的数据")},handleUpdate:function(t){var e=this;this.form=o({},this.currentTableData[t],{type:this.currentTableData[t].type.toString(),member:this.currentTableData[t].member.toString(),is_top:this.currentTableData[t].is_top.toString(),status:this.currentTableData[t].status.toString()}),this.$nextTick(function(){e.$refs.form.clearValidate()}),this.currentIndex=t,this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0},updata:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.dialogLoading=!0,Object(n.j)(o({},e.form)).then(function(t){e.$set(e.currentTableData,e.currentIndex,o({},e.currentTableData[e.currentIndex],{},t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")}).catch(function(){e.dialogLoading=!1}))})},handleView:function(t){this.currentTableData[t].url?this.$open(this.currentTableData[t].url):this.$router.push({name:"system-message-send-view",params:{message_id:this.currentTableData[t].message_id}})}}},i=a("2877"),c=Object(i.a)(l,function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"}},[a.auth.add?r("el-form-item",[r("el-button",{attrs:{disabled:a.loading},on:{click:a.handleCreate}},[r("cs-icon",{attrs:{name:"plus"}}),a._v("\n        新增消息\n      ")],1)],1):a._e(),a.auth.del?r("el-form-item",[r("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleDelete(null)}}},[r("cs-icon",{attrs:{name:"trash-o"}}),a._v("\n        删除\n      ")],1)],1):a._e(),r("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:a.$route.path}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{data:a.currentTableData,stripe:""},on:{"selection-change":a.handleSelectionChange,"sort-change":a.sortChange}},[r("el-table-column",{attrs:{type:"selection",width:"35"}}),r("el-table-column",{attrs:{label:"标题",prop:"title","min-width":"350","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"类型",prop:"type",sortable:"custom"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(a.typeData[t.row.type])+"\n      ")]}}])}),r("el-table-column",{attrs:{label:"成员组",prop:"member"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(a.groupData[t.row.member])+"\n      ")]}}])}),r("el-table-column",{attrs:{label:"日期",prop:"create_time",align:"center",width:"160",sortable:"custom"},scopedSlots:a._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[a._v("\n            创建日期："+a._s(t.row.create_time)),r("br"),a._v("\n            最后更新："+a._s(t.row.update_time)+"\n          ")]),r("span",[a._v(a._s(t.row.create_time))])])]}}])}),r("el-table-column",{attrs:{label:"置顶",prop:"is_top",sortable:"custom",align:"center",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{size:"mini",effect:"plain",type:a.topMap[t.row.is_top].type}},[a._v("\n          "+a._s(a.topMap[t.row.is_top].text)+"\n        ")])]}}])}),r("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{size:"mini",effect:"plain",type:a.statusMap[t.row.status].type}},[a._v("\n          "+a._s(a.statusMap[t.row.status].text)+"\n        ")])]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center","min-width":"160"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.auth.view?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleView(e.$index)}}},[e.row.url?r("el-tooltip",{attrs:{content:e.row.url,placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[a._v("\n              打开方式："+a._s(a.targetMap[e.row.target])),r("br"),a._v("\n              链接地址："+a._s(e.row.url)+"\n            ")]),r("cs-icon",{attrs:{name:"link"}})],1):a._e(),a._v("\n          "+a._s(e.row.url?"外链":"预览"))],1):a._e(),a.auth.set&&0===e.row.status?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleUpdate(e.$index)}}},[a._v("编辑")]):a._e(),a.auth.status&&0===e.row.status?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleSubmit(e.$index)}}},[a._v("发布")]):a._e(),a.auth.del?r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleDelete(e.$index)}}},[a._v("删除")]):a._e()]}}])})],1),r("el-dialog",{attrs:{title:a.textMap[a.dialogStatus],visible:a.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入消息标题"},model:{value:a.form.title,callback:function(t){a.$set(a.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[a.dialogFormVisible?r("cs-tinymce",{attrs:{code:"inside_content",height:180},model:{value:a.form.content,callback:function(t){a.$set(a.form,"content",t)},expression:"form.content"}}):a._e()],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",value:""},model:{value:a.form.type,callback:function(t){a.$set(a.form,"type",t)},expression:"form.type"}},a._l(a.typeData,function(t,e){return r("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"成员组",prop:"member"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"update"===a.dialogStatus,placeholder:"请选择",value:""},model:{value:a.form.member,callback:function(t){a.$set(a.form,"member",t)},expression:"form.member"}},a._l(a.groupData,function(t,e){return r("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1)],1)],1),r("el-form-item",{attrs:{label:"外部链接",prop:"url"}},[r("el-input",{attrs:{placeholder:"可输入外部链接"},model:{value:a.form.url,callback:function(t){a.$set(a.form,"url",t)},expression:"form.url"}})],1),r("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[r("el-radio-group",{model:{value:a.form.target,callback:function(t){a.$set(a.form,"target",t)},expression:"form.target"}},[r("el-radio",{attrs:{label:"_self"}},[a._v("当前窗口")]),r("el-radio",{attrs:{label:"_blank"}},[a._v("新窗口")])],1)],1),r("el-form-item",{attrs:{label:"发布状态",prop:"status"}},[r("el-radio-group",{model:{value:a.form.status,callback:function(t){a.$set(a.form,"status",t)},expression:"form.status"}},[r("el-radio",{attrs:{label:"0"}},[a._v("草稿件")]),r("el-radio",{attrs:{label:"1"}},[a._v("正式发布")])],1)],1),r("el-form-item",{attrs:{label:"是否置顶",prop:"is_top"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:a.form.is_top,callback:function(t){a.$set(a.form,"is_top",t)},expression:"form.is_top"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){a.dialogFormVisible=!1}}},[a._v("取消")]),"create"===a.dialogStatus?r("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:a.submit}},[a._v("确定")]):r("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:a.updata}},[a._v("修改")])],1)],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);