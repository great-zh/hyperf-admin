(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-24c471bb"],{1213:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"e",function(){return l}),a.d(e,"m",function(){return r}),a.d(e,"f",function(){return o}),a.d(e,"g",function(){return n}),a.d(e,"k",function(){return c}),a.d(e,"l",function(){return u}),a.d(e,"b",function(){return d}),a.d(e,"j",function(){return p}),a.d(e,"i",function(){return m}),a.d(e,"h",function(){return h}),a.d(e,"d",function(){return f}),a.d(e,"c",function(){return g});var s=a("b775");function i(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"add.storage.directory.item"},data:t})}function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"desc",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"storage_id";return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.directory.select"},data:{order_type:t,order_field:e}})}function r(t,e){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.directory.default"},data:{storage_id:t,is_default:e}})}function o(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.list"},data:t})}function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.navi"},data:{storage_id:t,is_layer:e}})}function c(t,e){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"rename.storage.item"},data:{storage_id:t,name:e}})}function u(t,e){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"set.storage.cover"},data:{storage_id:t,parent_id:e}})}function d(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.cover"},data:{storage_id:t}})}function p(t,e){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"move.storage.list"},data:{storage_id:t,parent_id:e}})}function m(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.url"},data:t})}function h(t,e){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"get.storage.thumb.info"},data:{url:t,source:e}})}function f(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"del.storage.list"},data:{storage_id:t}})}function g(t){return Object(s.a)({url:"/v1/storage",method:"post",params:{method:"clear.storage.thumb"},data:{storage_id:t}})}},"48ce":function(t,e,a){"use strict";var s=a("c292");a.n(s).a},a320:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return r});var s=a("b775");function i(){return Object(s.a)({url:"/v1/upload",method:"post",params:{method:"get.upload.module"}})}function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"web";return Object(s.a)({url:"/v1/upload",method:"post",params:{method:"get.upload.token"},data:{module:t,type:e}})}function r(t){return Object(s.a)({url:"/v1/upload",method:"post",params:{method:"replace.upload.item"},data:{storage_id:t}})}},c292:function(t,e,a){},d10f:function(t,e,a){"use strict";a.r(e);a("8e6e"),a("456d"),a("6b54");var s=a("bd86"),u=(a("ac6a"),a("b27e")),o=a("a320"),i=a("1213"),l=a("ca00"),r=a("2ef0");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={components:{csUpload:function(){return a.e("chunk-04306eef").then(a.bind(null,"8422"))}},props:{tableData:{default:function(){return[]}},platformTable:{default:function(){return[]}},loading:{default:!1}},computed:{changeData:function(){var t=this.scaleTab,e=this.imageUrl,a=this.scale,s=this.form;return{resize:s.resize,suffix:s.suffix,quality:s.quality,style:s.style,scaleTab:t,imageUrl:e,scale:a}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0},changeData:{handler:function(){var t=this;this.$nextTick(function(){t.getThumbUrl()})},deep:!0}},filters:{getPreviewUrl:function(t){return l.a.getImageStyleUrl(t,"&size[]=350")}},data:function(){return{currentTableData:[],multipleSelection:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",scaleTab:"Pc",imageUrl:"",imageResult:{},imageInfo:"",imageResultInfo:"",imageLoading:!1,uploadModule:"",uploadTable:[],quality:90,slider:{pc:0,mobile:0},scale:{pc:{slider:0,size:{width:0,height:0},crop:{width:0,height:0},order:!0},mobile:{slider:0,size:{width:0,height:0},crop:{width:0,height:0},order:!0}},form:{},auth:{add:!1,set:!1,del:!1,enable:!1,disable:!1},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:64,message:"长度不能大于 64 个字符",trigger:"blur"}],code:[{required:!0,message:"编码不能为空",trigger:"blur"},{max:32,message:"长度不能大于 32 个字符",trigger:"blur"}],platform:[{required:!0,message:"至少选择一项",trigger:"change"}],style:[{max:64,message:"长度不能大于 64 个字符",trigger:"blur"}]},textMap:{update:"编辑样式",create:"新增样式"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},resizeMap:{"":{text:"不使用缩放",type:""},scaling:{text:"指定宽高缩放",type:"scaling"},proportion:{text:"按百分比缩小",type:"proportion"},pad:{text:"固定宽高填充",type:"pad"}},suffixMap:["jpg","png","svg","gif","bmp","tiff","webp"],scaleHelp:{help:"宽或高的某一项值为 0 时，该项会进行自适应",order:"缩略与裁剪的先后顺序会影响最终的成图"}}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/storage/style/add"),this.auth.set=this.$has("/system/storage/style/set"),this.auth.del=this.$has("/system/storage/style/del"),this.auth.enable=this.$has("/system/storage/style/enable"),this.auth.disable=this.$has("/system/storage/style/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach(function(t){e.push(t.storage_style_id)}):e.push(this.currentTableData[t].storage_style_id),e},_getUploadFileList:function(t){if(t.length){var e=t[0].response;if(e&&200===e.status){var a=e.data[0];this.imageInfo="大小: ".concat(l.a.bytesFormatter(a.size)," "),this.imageInfo+="宽: ".concat(a.pixel.width," PX "),this.imageInfo+="高: ".concat(a.pixel.height," PX"),this.imageUrl=a.url}}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,s=t.order,i={order_type:void 0,order_field:void 0};e&&s&&(i.order_type="ascending"===s?"asc":"desc",i.order_field=a),this.$emit("sort",i)},handleStatus:function(t,e,a){var s=this,i=1<arguments.length&&void 0!==e?e:0,l=2<arguments.length&&void 0!==a&&a,r=this._getIdList(t);if(0!==r.length){if(!l){var o=this.currentTableData[t],n=o.status?0:1;if(1<o.status)return;if(0==n&&!this.auth.disable)return;if(1==n&&!this.auth.enable)return;return this.$set(this.currentTableData,t,d({},o,{status:2})),void c(r,n,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){c(r,i,s)}).catch(function(){})}else this.$message.error("请选择要操作的数据");function c(a,s,i){Object(u.e)(a,s).then(function(){i.currentTableData.forEach(function(t,e){-1!==a.indexOf(t.storage_style_id)&&i.$set(i.currentTableData,e,d({},t,{status:s}))}),i.$message.success("操作成功")})}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){Object(u.b)(a).then(function(){for(var t=e.currentTableData.length-1;0<=t;t--)-1!==a.indexOf(e.currentTableData[t].storage_style_id)&&e.currentTableData.splice(t,1);e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")})}).catch(function(){}):this.$message.error("请选择要操作的数据")},create:function(){var e=this;this.form={name:"",code:"",platform:0,scale:{},resize:"",quality:90,suffix:"",style:"",status:"1"},this.scale={pc:{slider:0,size:{width:0,height:0},crop:{width:0,height:0},order:!0},mobile:{slider:0,size:{width:0,height:0},crop:{width:0,height:0},order:!0}},this.quality=90,this.slider={pc:0,mobile:0},this.scaleTab="Pc",this.imageUrl="",this.imageResult={},this.imageInfo="",this.imageResultInfo="",this.imageLoading=!1,this.uploadModule="",this.uploadTable.length||Object(o.a)().then(function(t){e.uploadTable=t.data,e.uploadTable.unshift({name:"使用系统默认",module:""})}),this.$nextTick(function(){e.$refs.form.clearValidate()}),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},handleEdit:function(a){var i=this;this.$refs.form.validate(function(t){t&&function(){function t(e){if(!i.scale.hasOwnProperty(e))return"continue";var a=i.scale[e];(a.order?["size","crop"]:["crop","size"]).forEach(function(t){"proportion"===i.form.resize&&"size"===t?s[e].size=[a.slider]:s[e][t]=[a[t].width,a[t].height]}),s[e].slider=a.slider,s[e].order=a.order}var s={pc:{},mobile:{}};for(var e in i.scale)t(e);i.dialogLoading=!0,a?Object(u.a)(d({},i.form,{scale:s})).then(function(t){i.currentTableData.unshift(t.data),i.dialogFormVisible=!1,i.$message.success("操作成功")}).catch(function(){i.dialogLoading=!1}):Object(u.d)(d({},i.form,{scale:s})).then(function(t){i.$set(i.currentTableData,i.currentIndex,t.data),i.dialogFormVisible=!1,i.$message.success("操作成功")}).catch(function(){i.dialogLoading=!1})}()})},getThumbUrl:Object(r.debounce)(function(){var e=this;if(this.imageUrl){var a={url:this.imageUrl,quality:this.form.quality,suffix:this.form.suffix,style:this.form.style};if(this.form.resize&&!this.form.style){a.resize=this.form.resize;var s=this.scale[this.scaleTab.toLowerCase()];(s.order?["size","crop"]:["crop","size"]).forEach(function(t){"proportion"===e.form.resize&&"size"===t?a.size=[s.slider]:a[t]=[s[t].width,s[t].height]})}this.imageLoading=!0,this.imageResult.url_prefix="",Object(i.i)(d({},a)).then(function(t){e.imageResult=t.data}).then(function(){Object(i.h)(e.imageResult.url_prefix,e.imageResult.source).then(function(t){e.imageResultInfo="大小: ".concat(l.a.bytesFormatter(t.data.size)," "),e.imageResultInfo+="宽: ".concat(t.data.width," PX "),e.imageResultInfo+="高: ".concat(t.data.height," PX")})}).finally(function(){e.imageLoading=!1})}},300),updata:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t],s={};for(var i in a.scale)if(a.scale.hasOwnProperty(i))for(var l in s[i]={},a.scale[i])if(a.scale[i].hasOwnProperty(l)){var r=a.scale[i][l];"size"===l||"crop"===l?(s[i][l]={width:r[0],height:r[1]},"proportion"===a.resize&&"size"===l&&(this.slider[i]=r[0],s[i][l]={width:0,height:0})):s[i][l]=r}this.form=d({},a,{status:a.status.toString(),scale:{}}),this.scale=d({},s),this.scaleTab="Pc",this.imageUrl="",this.imageResult={},this.imageInfo="",this.imageResultInfo="",this.imageLoading=!1,this.uploadModule="",this.quality=a.quality,this.uploadTable.length||Object(o.a)().then(function(t){e.uploadTable=t.data,e.uploadTable.unshift({name:"使用系统默认",module:""})}),this.platformTable.hasOwnProperty(this.form.platform)||(this.form.platform=void 0),this.$nextTick(function(){e.$refs.form.clearValidate()}),this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0}}},p=(a("48ce"),a("2877")),m=Object(p.a)(c,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"cs-p"},[s("el-form",{attrs:{inline:!0,size:"small"}},[a.auth.add?s("el-form-item",[s("el-button",{attrs:{disabled:a.loading},on:{click:a.create}},[s("cs-icon",{attrs:{name:"plus"}}),a._v("\n        新增样式\n      ")],1)],1):a._e(),s("el-form-item",[s("el-button-group",[a.auth.enable?s("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleStatus(null,1,!0)}}},[s("cs-icon",{attrs:{name:"check"}}),a._v("\n          启用\n        ")],1):a._e(),a.auth.disable?s("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleStatus(null,0,!0)}}},[s("cs-icon",{attrs:{name:"close"}}),a._v("\n          禁用\n        ")],1):a._e()],1)],1),a.auth.del?s("el-form-item",[s("el-button",{attrs:{disabled:a.loading},on:{click:function(t){return a.handleDelete(null)}}},[s("cs-icon",{attrs:{name:"trash-o"}}),a._v("\n        删除\n      ")],1)],1):a._e(),s("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:a.$route.path}})],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{data:a.currentTableData,stripe:""},on:{"selection-change":a.handleSelectionChange,"sort-change":a.sortChange}},[s("el-table-column",{attrs:{type:"selection",width:"30"}}),s("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"140","show-overflow-tooltip":!0}}),s("el-table-column",{attrs:{label:"编码",prop:"code",sortable:"custom","min-width":"160","show-overflow-tooltip":!0}}),s("el-table-column",{attrs:{label:"平台",prop:"platform",sortable:"custom"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(a.platformTable[t.row.platform])+"\n      ")]}}])}),s("el-table-column",{attrs:{label:"输出格式",prop:"suffix"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.suffix||"原图格式")+"\n      ")]}}])}),s("el-table-column",{attrs:{label:"图片质量",prop:"quality"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.quality||"系统默认")+"\n      ")]}}])}),s("el-table-column",{attrs:{label:"缩放方式",prop:"resize","min-width":"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(a.resizeMap[t.row.resize].text)+"\n      ")]}}])}),s("el-table-column",{attrs:{label:"第三方样式",prop:"style","min-width":"90","show-overflow-tooltip":!0}}),s("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[s("el-tag",{style:a.auth.enable||a.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:a.statusMap[e.row.status].type,effect:a.auth.enable||a.auth.disable?"light":"plain"},nativeOn:{click:function(t){return a.handleStatus(e.$index)}}},[a._v("\n          "+a._s(a.statusMap[e.row.status].text)+"\n        ")])]}}])}),s("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[a.auth.set?s("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.updata(e.$index)}}},[a._v("编辑")]):a._e(),a.auth.del?s("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return a.handleDelete(e.$index)}}},[a._v("删除")]):a._e()]}}])})],1),s("el-dialog",{attrs:{title:a.textMap[a.dialogStatus],visible:a.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[s("el-form",{ref:"form",staticStyle:{"margin-top":"-35px"},attrs:{model:a.form,rules:a.rules,"label-width":"85px"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:13}},[s("el-divider",[a._v("基础")]),s("el-form-item",{attrs:{label:"名称",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入样式名称",clearable:!0},model:{value:a.form.name,callback:function(t){a.$set(a.form,"name",t)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"编码",prop:"code"}},[s("el-input",{attrs:{placeholder:"请输入样式编码",clearable:!0},model:{value:a.form.code,callback:function(t){a.$set(a.form,"code",t)},expression:"form.code"}})],1),s("el-form-item",{attrs:{label:"平台",prop:"platform"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",value:""},model:{value:a.form.platform,callback:function(t){a.$set(a.form,"platform",t)},expression:"form.platform"}},a._l(a.platformTable,function(t,e){return s("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:a.form.status,callback:function(t){a.$set(a.form,"status",t)},expression:"form.status"}})],1),s("el-divider",[a._v("图片")]),a.form.style?[s("el-alert",{attrs:{title:"启用第三方样式后本地样式将失效",type:"warning",closable:!1,center:""}})]:[s("el-form-item",{attrs:{label:"缩放方式",prop:"resize"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",value:""},model:{value:a.form.resize,callback:function(t){a.$set(a.form,"resize",t)},expression:"form.resize"}},a._l(a.resizeMap,function(t,e){return s("el-option",{key:e,attrs:{label:t.text,value:t.type}})}),1)],1),""!==a.form.resize?s("el-form-item",{attrs:{label:"缩放规格",prop:"scale"}},[s("el-tabs",{model:{value:a.scaleTab,callback:function(t){a.scaleTab=t},expression:"scaleTab"}},[s("el-tab-pane",{attrs:{label:"Pc",name:"Pc"}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        缩略\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.help,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},["proportion"===a.form.resize?s("div",[s("el-slider",{staticClass:"proportion",on:{change:function(t){a.scale.pc.slider=t}},model:{value:a.slider.pc,callback:function(t){a.$set(a.slider,"pc",t)},expression:"slider.pc"}})],1):s("div",[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:12}},[s("span",[a._v("宽 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.pc.size.width,callback:function(t){a.$set(a.scale.pc.size,"width",t)},expression:"scale.pc.size.width"}})],1),s("el-col",{attrs:{span:12}},[s("span",[a._v("高 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.pc.size.height,callback:function(t){a.$set(a.scale.pc.size,"height",t)},expression:"scale.pc.size.height"}})],1)],1)],1)])],1),s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        裁剪\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.help,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:12}},[s("span",[a._v("宽 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.pc.crop.width,callback:function(t){a.$set(a.scale.pc.crop,"width",t)},expression:"scale.pc.crop.width"}})],1),s("el-col",{attrs:{span:12}},[s("span",[a._v("高 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.pc.crop.height,callback:function(t){a.$set(a.scale.pc.crop,"height",t)},expression:"scale.pc.crop.height"}})],1)],1)],1)],1),s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        顺序\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.order,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},[s("el-radio-group",{model:{value:a.scale.pc.order,callback:function(t){a.$set(a.scale.pc,"order",t)},expression:"scale.pc.order"}},[s("el-radio",{attrs:{label:!0}},[a._v("先缩后裁")]),s("el-radio",{attrs:{label:!1}},[a._v("先裁后缩")])],1)],1)],1)],1),s("el-tab-pane",{attrs:{label:"Mobile",name:"Mobile"}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        缩略\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.help,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},["proportion"===a.form.resize?s("div",[s("el-slider",{staticClass:"proportion",on:{change:function(t){a.scale.mobile.slider=t}},model:{value:a.slider.mobile,callback:function(t){a.$set(a.slider,"mobile",t)},expression:"slider.mobile"}})],1):s("div",[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:12}},[s("span",[a._v("宽 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.mobile.size.width,callback:function(t){a.$set(a.scale.mobile.size,"width",t)},expression:"scale.mobile.size.width"}})],1),s("el-col",{attrs:{span:12}},[s("span",[a._v("高 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.mobile.size.height,callback:function(t){a.$set(a.scale.mobile.size,"height",t)},expression:"scale.mobile.size.height"}})],1)],1)],1)])],1),s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        裁剪\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.help,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:12}},[s("span",[a._v("宽 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.mobile.crop.width,callback:function(t){a.$set(a.scale.mobile.crop,"width",t)},expression:"scale.mobile.crop.width"}})],1),s("el-col",{attrs:{span:12}},[s("span",[a._v("高 ")]),s("el-input-number",{staticClass:"size-input",attrs:{"controls-position":"right",min:0,size:"mini"},model:{value:a.scale.mobile.crop.height,callback:function(t){a.$set(a.scale.mobile.crop,"height",t)},expression:"scale.mobile.crop.height"}})],1)],1)],1)],1),s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:5}},[s("span",[a._v("\n                        顺序\n                        "),s("el-tooltip",{attrs:{content:a.scaleHelp.order,placement:"top"}},[s("cs-icon",{attrs:{name:"question"}})],1)],1)]),s("el-col",{attrs:{span:19}},[s("el-radio-group",{model:{value:a.scale.mobile.order,callback:function(t){a.$set(a.scale.mobile,"order",t)},expression:"scale.mobile.order"}},[s("el-radio",{attrs:{label:!0}},[a._v("先缩后裁")]),s("el-radio",{attrs:{label:!1}},[a._v("先裁后缩")])],1)],1)],1)],1)],1)],1):a._e(),s("el-form-item",{attrs:{label:"输出格式",prop:"suffix"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",value:""},model:{value:a.form.suffix,callback:function(t){a.$set(a.form,"suffix",t)},expression:"form.suffix"}},[s("el-option",{attrs:{label:"原图格式",value:""}}),a._l(a.suffixMap,function(t,e){return s("el-option",{key:e,attrs:{label:t,value:t}})})],2)],1),s("el-form-item",{attrs:{label:"图片质量",prop:"quality"}},[s("el-slider",{on:{change:function(t){a.form.quality=t}},model:{value:a.quality,callback:function(t){a.quality=t},expression:"quality"}})],1)],s("el-divider",[a._v("高级")]),s("el-form-item",{attrs:{label:"第三方样式",prop:"style"}},[s("el-input",{attrs:{placeholder:"可输入第三方样式",type:"textarea",rows:3},model:{value:a.form.style,callback:function(t){a.$set(a.form,"style",t)},expression:"form.style"}})],1)],2),s("el-col",{attrs:{span:11}},[s("el-divider",[a._v("效果预览")]),s("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"never"}},[s("el-alert",{staticStyle:{"border-radius":"0"},attrs:{title:"原始图片",closable:!1,center:""}}),s("div",{staticClass:"image"},[a.imageUrl?s("el-image",{attrs:{src:a._f("getPreviewUrl")(a.imageUrl),fit:"fill"},nativeOn:{click:function(t){return a.$open(a.imageUrl)}}}):a._e()],1),s("div",{staticStyle:{padding:"10px"}},[s("div",{staticClass:"bottom clearfix"},[s("span",{staticClass:"image-info"},[a._v(a._s(a.imageInfo))])]),s("cs-upload",{attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1,"module-name":a.uploadModule},on:{confirm:a._getUploadFileList}},[s("el-button",{staticClass:"button",attrs:{slot:"control",type:"text"},slot:"control"},[a._v("上传原图")])],1),s("el-popover",{attrs:{placement:"top",trigger:"click"}},[s("el-select",{attrs:{placeholder:"请选择",value:""},model:{value:a.uploadModule,callback:function(t){a.uploadModule=t},expression:"uploadModule"}},a._l(a.uploadTable,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t.module}})}),1),s("el-button",{staticClass:"button",attrs:{slot:"reference",type:"text"},slot:"reference"},[a._v("更换模块")])],1)],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:a.imageLoading,expression:"imageLoading"}],staticStyle:{"margin-top":"20px"},attrs:{"body-style":{padding:"0px"},shadow:"never"}},[s("el-alert",{staticStyle:{"border-radius":"0"},attrs:{title:"实际结果 "+(a.form.style||!a.form.resize?"":a.scaleTab),closable:!1,center:""}}),s("div",{staticClass:"image"},[a.imageResult.url_prefix?s("el-image",{attrs:{src:a.imageResult.url_prefix,fit:"fill"},nativeOn:{click:function(t){return a.$open(a.imageResult.url_prefix)}}}):a._e()],1),s("div",{staticStyle:{padding:"10px"}},[s("div",{staticClass:"bottom clearfix"},[s("span",{staticClass:"image-info"},[a._v(a._s(a.imageResultInfo))])]),s("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:a.getThumbUrl}},[a._v("刷新效果")])],1)],1)],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(t){a.dialogFormVisible=!1}}},[a._v("取消")]),"create"===a.dialogStatus?s("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:function(t){return a.handleEdit(!0)}}},[a._v("确定")]):s("el-button",{attrs:{type:"primary",loading:a.dialogLoading,size:"small"},on:{click:function(t){return a.handleEdit(!1)}}},[a._v("修改")])],1)],1)],1)},[],!1,null,"b603962a",null);e.default=m.exports}}]);