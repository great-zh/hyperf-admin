(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-013860c8","chunk-3f58b449"],{"1a19":function(e,t,r){"use strict";r.d(t,"a",function(){return c}),r.d(t,"e",function(){return n}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return o}),r.d(t,"g",function(){return s}),r.d(t,"f",function(){return u});var a=r("b775");function c(e){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"add.article.item"},data:e})}function n(e){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"set.article.item"},data:e})}function i(e){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"del.article.list"},data:{article_id:e}})}function l(e){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"get.article.item"},data:{article_id:e}})}function o(e){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"get.article.list"},data:e})}function s(e,t){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"set.article.top"},data:{article_id:e,is_top:t}})}function u(e,t){return Object(a.a)({url:"/v1/article",method:"post",params:{method:"set.article.status"},data:{article_id:e,status:t}})}},"52a0":function(e,t,r){},"798c":function(e,t,r){"use strict";var a=r("52a0");r.n(a).a},a05e:function(e,t,r){"use strict";r.r(t);r("8e6e"),r("ac6a"),r("456d"),r("7514");var a=r("bd86"),c=r("2f62"),n=r("1a19"),i=r("ca00");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(a.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var s={components:{csUpload:function(){return r.e("chunk-f8fdc73c").then(r.bind(null,"8422"))},csTinymce:function(){return r.e("chunk-705eb3e2").then(r.bind(null,"4b93"))}},props:{state:{type:String,required:!0,default:"create"},formData:{type:Object,required:!1,default:function(){}},loading:{type:Boolean,required:!1,default:!1},catList:{type:Array,required:!0,default:function(){return[]}},catData:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{dialogLoading:!1,stateMap:{create:"新增文章",update:"编辑文章"},stateButton:{create:"确定",update:"修改"},cascaderProps:{value:"article_cat_id",label:"cat_name",children:"children",checkStrictly:!0},currentForm:{title:"",article_cat_id:[],image:"",keywords:"",description:"",content:"",source:"",source_url:"",url:"",target:"_blank",is_top:"0",status:"1"},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],article_cat_id:[{required:!0,message:"分类不能为空",trigger:"change"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],source:[{max:60,message:"长度不能大于 60 个字符",trigger:"blur"}],source_url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},filters:{getPreviewUrl:function(e){return e?i.a.getImageCodeUrl(e,"article_lists"):""}},watch:{formData:{handler:function(e){var t=this;"update"===this.state&&(this.currentForm=e,this.$refs.tinymce&&(this.$refs.tinymce.destroyTinymce(),this.$refs.tinymce.initTinymce(),this.$refs.tinymce.setContent(e.content)),this.$nextTick(function(){t.$refs.form.clearValidate()}))}}},methods:o({},Object(c.b)("careyshop/page",["close"]),{},Object(c.b)("careyshop/update",["updateData"]),{_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&(this.currentForm.image=t.data[0].url)}},handleClose:function(){this.close({tagName:this.$route.fullPath})},handleConfirm:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.dialogLoading=!0,"create"===t.state?t.handleCreate():t.handleUpdate())})},getArticleCatId:function(){var e=this.currentForm.article_cat_id;return Array.isArray(e)?0<e.length?e[e.length-1]:0:e},handleCreate:function(){var e=this;Object(n.a)(o({},this.currentForm,{article_cat_id:this.getArticleCatId()})).then(function(t){e.updateData({type:"add",name:"system-article-article",data:o({},t.data,{page_views:0,get_article_cat:o({},e.catList.find(function(e){return e.article_cat_id===t.data.article_cat_id}))})}),e.$message.success("操作成功"),e.handleClose()}).finally(function(){e.dialogLoading=!1})},handleUpdate:function(){var e=this;Object(n.e)(o({},this.currentForm,{article_cat_id:this.getArticleCatId()})).then(function(t){e.updateData({type:"set",name:"system-article-article",srcId:t.data.article_id,data:o({},t.data,{get_article_cat:o({},e.catList.find(function(e){return e.article_cat_id===t.data.article_cat_id}))})}),e.$message.success("操作成功"),e.handleClose()}).finally(function(){e.dialogLoading=!1})}})},u=(r("798c"),r("2877")),d=Object(u.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cs-p"},[r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.stateMap[t.state]))])]),r("el-form",{ref:"form",attrs:{model:t.currentForm,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题",clearable:!0},model:{value:t.currentForm.title,callback:function(e){t.$set(t.currentForm,"title",e)},expression:"currentForm.title"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"article_cat_id"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择文章分类 试试搜索：首页",options:t.catData,props:t.cascaderProps,filterable:"",clearable:""},model:{value:t.currentForm.article_cat_id,callback:function(e){t.$set(t.currentForm,"article_cat_id",e)},expression:"currentForm.article_cat_id"}})],1),r("el-form-item",{attrs:{label:"封面",prop:"image"}},[r("el-input",{attrs:{placeholder:"可输入文章图片",clearable:!0},model:{value:t.currentForm.image,callback:function(e){t.$set(t.currentForm,"image",e)},expression:"currentForm.image"}},[r("template",{slot:"prepend"},[t.currentForm.image?r("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[r("div",{staticClass:"popover-image"},[r("el-image",{attrs:{src:t._f("getPreviewUrl")(t.currentForm.image),fit:"fill"},nativeOn:{click:function(e){return t.$preview(t.currentForm.image)}}})],1),r("cs-icon",{attrs:{slot:"reference",name:"image"},slot:"reference"})],1):t._e()],1),r("cs-upload",{attrs:{slot:"append",type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:t._getUploadFileList},slot:"append"},[r("el-button",{attrs:{slot:"control"},slot:"control"},[r("cs-icon",{attrs:{name:"upload"}})],1)],1)],2)],1),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{attrs:{placeholder:"可输入文章关键词",clearable:!0},model:{value:t.currentForm.keywords,callback:function(e){t.$set(t.currentForm,"keywords",e)},expression:"currentForm.keywords"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{placeholder:"可输入文章描述",type:"textarea",rows:3},model:{value:t.currentForm.description,callback:function(e){t.$set(t.currentForm,"description",e)},expression:"currentForm.description"}})],1),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("cs-tinymce",{ref:"tinymce",attrs:{code:"inside_content"},model:{value:t.currentForm.content,callback:function(e){t.$set(t.currentForm,"content",e)},expression:"currentForm.content"}})],1),r("el-form-item",{attrs:{label:"文章来源",prop:"source"}},[r("el-input",{attrs:{placeholder:"可输入文章来源",clearable:!0},model:{value:t.currentForm.source,callback:function(e){t.$set(t.currentForm,"source",e)},expression:"currentForm.source"}})],1),r("el-form-item",{attrs:{label:"来源地址",prop:"source_url"}},[r("el-input",{attrs:{placeholder:"可输入来源地址",clearable:!0},model:{value:t.currentForm.source_url,callback:function(e){t.$set(t.currentForm,"source_url",e)},expression:"currentForm.source_url"}})],1),r("el-form-item",{attrs:{label:"外部连接",prop:"url"}},[r("el-input",{attrs:{placeholder:"可输入文章外部连接",clearable:!0},model:{value:t.currentForm.url,callback:function(e){t.$set(t.currentForm,"url",e)},expression:"currentForm.url"}})],1),r("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[r("el-radio-group",{model:{value:t.currentForm.target,callback:function(e){t.$set(t.currentForm,"target",e)},expression:"currentForm.target"}},[r("el-radio",{attrs:{label:"_self"}},[t._v("当前窗口")]),r("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")])],1)],1),r("el-form-item",{attrs:{label:"置顶",prop:"is_top"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.currentForm.is_top,callback:function(e){t.$set(t.currentForm,"is_top",e)},expression:"currentForm.is_top"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.currentForm.status,callback:function(e){t.$set(t.currentForm,"status",e)},expression:"currentForm.status"}})],1),r("el-form-item",{attrs:{size:"small"}},[r("el-button",{attrs:{type:"primary",loading:t.dialogLoading},on:{click:t.handleConfirm}},[t._v(t._s(t.stateButton[t.state]))]),r("el-button",{on:{click:t.handleClose}},[t._v("取消")])],1)],1)],1)],1)},[],!1,null,"5321da64",null);t.default=d.exports}}]);