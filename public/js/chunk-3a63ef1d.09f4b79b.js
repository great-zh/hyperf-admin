(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3a63ef1d"],{"57ab":function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"e",function(){return r}),e.d(a,"b",function(){return i}),e.d(a,"c",function(){return o}),e.d(a,"d",function(){return u});var c=e("b775");function n(t){return Object(c.a)({url:"/v1/article_cat",method:"post",params:{method:"add.article.cat.item"},data:t})}function r(t){return Object(c.a)({url:"/v1/article_cat",method:"post",params:{method:"set.article.cat.item"},data:t})}function i(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return Object(c.a)({url:"/v1/article_cat",method:"post",params:{method:"del.article.cat.list"},data:{article_cat_id:t,not_empty:a}})}function o(t){return Object(c.a)({url:"/v1/article_cat",method:"post",params:{method:"get.article.cat.list"},data:t})}function u(t){return Object(c.a)({url:"/v1/article_cat",method:"post",params:{method:"set.article.cat.index"},data:{article_cat_id:t}})}},"876f":function(t,a,e){"use strict";e.r(a);var c=e("ca00"),n=e("57ab"),r={name:"system-article-article-create",components:{PageEdit:function(){return e.e("chunk-013860c8").then(e.bind(null,"a05e"))}},data:function(){return{loading:!0,catList:[],catData:[]}},mounted:function(){var a=this;Object(n.c)(null).then(function(t){a.catList=0<t.data.length?t.data:[],a.catList.length&&(a.catData=c.a.formatDataToTree(a.catList,"article_cat_id"))}).finally(function(){a.loading=!1})}},i=e("2877"),o=Object(i.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("cs-container",{attrs:{"is-back-to-top":!0,"parent-path":"system-article-article"}},[e("page-edit",{attrs:{state:"create",loading:t.loading,catList:t.catList,catData:t.catData}})],1)},[],!1,null,null,null);a.default=o.exports}}]);