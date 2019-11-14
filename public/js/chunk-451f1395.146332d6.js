(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-451f1395"],{"3a13":function(t,e,a){"use strict";var s=a("5b9c");a.n(s).a},"5b9c":function(t,e,a){},f1e5:function(t,e,a){"use strict";a.r(e);var s=a("ca00"),i=a("041d"),n={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{form:{},formBuffer:[],rules:{content:[{required:!0,message:"回复内容不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}]},typeList:{0:"商品咨询",1:"支付",2:"配送",3:"售后"},statusMap:{0:{text:"待回复",type:"warning"},1:{text:"已回复",type:"success"}},submitLoading:!1}},filters:{getPreviewUrl:function(t){return t?s.a.getImageCodeUrl(t,"head_pic"):""}},watch:{"tableData.goods_consult_id":{handler:function(t){var e=this;0<t&&(this.formBuffer.hasOwnProperty(t)||(this.formBuffer[t]={content:void 0}),this.form=this.formBuffer[t],this.$nextTick(function(){e.$refs.form.clearValidate()}))}}},methods:{handleFormSubmit:function(){var a=this;this.$refs.form.validate(function(t){if(t){a.submitLoading=!0;var e=a.tableData.goods_consult_id;Object(i.d)(e,a.form.content).then(function(t){a.form.content=null,a.$emit("reply",e,t.data),a.$message.success("操作成功")}).finally(function(){a.submitLoading=!1})}})},handleView:function(t){this.$router.push({name:"goods-admin-view",params:{goods_id:t}})}}},l=(a("3a13"),a("2877")),r=Object(l.a)(n,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"cs-p"},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"box-card",attrs:{shadow:"never"}},[s("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[s("el-row",{staticClass:"cs-mb-10"},[s("el-col",{attrs:{span:18}},[s("span",{staticClass:"text-explode"},[a._v("关联商品：")]),s("span",{staticClass:"goods-link",on:{click:function(t){return a.handleView(a.tableData.get_goods.goods_id)}}},[a._v(a._s(a.tableData.get_goods.name))])]),s("el-col",{attrs:{span:6}},[s("span",{staticClass:"text-explode"},[a._v("创建日期：")]),s("span",[a._v(a._s(a.tableData.create_time))])])],1),s("el-row",[s("el-col",{attrs:{span:9}},[s("span",{staticClass:"text-explode"},[a._v("编号：")]),s("span",[a._v(a._s(a.tableData.goods_consult_id))])]),s("el-col",{attrs:{span:9}},[s("span",{staticClass:"text-explode"},[a._v("类型：")]),s("span",[a._v(a._s(null!==a.tableData.type?a.typeList[a.tableData.type]:""))])]),s("el-col",{attrs:{span:6}},[s("span",{staticClass:"text-explode"},[a._v("状态：")]),null!==a.tableData.status?s("el-tag",{attrs:{type:a.statusMap[a.tableData.status].type,effect:"plain",size:"mini"}},[a._v("\n            "+a._s(a.statusMap[a.tableData.status].text)+"\n          ")]):a._e()],1)],1)],1),s("el-timeline",a._l(a.tableData.get_answer,function(t,e){return s("el-timeline-item",{key:e,attrs:{timestamp:t.create_time,type:t.is_client?"primary":"danger",placement:"top"}},[s("el-card",{attrs:{shadow:"never"}},[s("div",{staticClass:"user-icon"},[t.is_client&&a.tableData.get_user.head_pic?s("el-avatar",{attrs:{size:"medium",src:a._f("getPreviewUrl")(a.tableData.get_user.head_pic)}},[s("img",{attrs:{src:"image/avatar/user.png",alt:""}})]):t.is_client?s("el-avatar",{attrs:{size:"medium",src:"image/avatar/user.png"}}):s("el-avatar",{attrs:{size:"medium",src:"image/avatar/admin.png"}})],1),s("div",{staticClass:"problem"},[s("div",{staticClass:"consult-content cs-pb-10"},[a._v(a._s(t.content))]),s("div",{staticClass:"user-name"},[t.is_client?s("span",[a._v(a._s(a.tableData.get_user.username||"游客"))]):s("span",[a._v("客服人员")]),t.is_client&&a.tableData.get_user.level_icon?s("el-image",{staticClass:"level-icon",attrs:{src:a.tableData.get_user.level_icon,fit:"fill"}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]):a._e()],1)])])],1)}),1),s("el-form",{directives:[{name:"has",rawName:"v-has",value:"/goods/opinion/consult/detail",expression:"'/goods/opinion/consult/detail'"}],ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"68px"}},[s("el-form-item",{attrs:{prop:"content"}},[s("el-input",{attrs:{placeholder:"请输入回复内容",type:"textarea",autosize:{minRows:5},"show-word-limit":!0,maxlength:"200"},model:{value:a.form.content,callback:function(t){a.$set(a.form,"content",t)},expression:"form.content"}}),s("el-button",{staticClass:"cs-mt-10",attrs:{type:"primary",loading:a.submitLoading,size:"small"},on:{click:a.handleFormSubmit}},[a._v("提交")])],1)],1)],1)],1)},[],!1,null,"0ca8ea7e",null);e.default=r.exports}}]);