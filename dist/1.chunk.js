(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,function(e,t){e.exports="./testPage/dist/images/qrCodeWhite.png"},function(e,t){e.exports="./testPage/dist/images/banner-3.jpg"},function(e,t){e.exports="./testPage/dist/images/banner-2.jpg"},function(e,t){e.exports="./testPage/dist/images/banner-1.jpg"},,function(e,t,n){"use strict";var i=n(51);n.n(i).a},function(e,t,n){"use strict";var i=n(52);n.n(i).a},function(e,t,n){"use strict";var i=n(53);n.n(i).a},function(e,t,n){"use strict";var i=n(54);n.n(i).a},function(e,t,n){"use strict";var i=n(55);n.n(i).a},function(e,t,n){"use strict";var i=n(56);n.n(i).a},function(e,t,n){"use strict";var i=n(57);n.n(i).a},function(e,t,n){"use strict";var i=n(58);n.n(i).a},function(e,t){e.exports="./testPage/dist/images/beian.png"},,,,function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home clearfix",attrs:{id:"main-home"}},[n("div",{staticClass:"home-content"},[n("banner")],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"introduce-txt"},[e._v("\n        "+e._s("cn"===e.currentLanguage?"看看我们这儿有什么":"Look at what we have here.")+"\n        "),n("br"),e._v(e._s("cn"===e.currentLanguage?"一起来吧！":"Let's go!")+"\n    ")]),e._v(" "),n("div",{staticClass:"home-content-product clearfix"},[e.isShowWaterfall?n("WaterFall",{attrs:{items:e.productArray,size:e.deviceSize,deviceType:e.deviceType,language:e.currentLanguage}}):e._e()],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"introduce-txt"},[e._v("\n        "+e._s("cn"===e.currentLanguage?" 关于我们":"About us.")+"\n        "),n("br"),e._v(e._s("cn"===e.currentLanguage?" 你应该知道这些":"You should know this.")+"\n    ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"home-content-about"},[n("div",{staticClass:"home-content-about-body clearfix"},[n("figure",{attrs:{id:"about-img"}}),e._v(" "),n("div",{staticClass:"home-content-about-right"},[n("div",{staticClass:"article"},[n("h3",[e._v(e._s("cn"===e.currentLanguage?"山顶部落":"MOUNTAIN CLANS CLUB"))]),e._v(" "),n("h5",[e._v("\n                        "+e._s("cn"===e.currentLanguage?"没有围墙的学校，没有边界的教育":"A SCHOOL WITHOUT WALLS, AN EDUCATION WITHOUT BOUNDARIES."))]),e._v(" "),"cn"===e.currentLanguage?n("p",[e._v("\n                        广东山顶部落教育科技有限公司（Mountain Clans Club）是一家专注于“欧洲体育与艺术”的游学及课外教育服务机构。\n                        山顶部落的主要服务范围包括国内外的青少年营地教育，以各类体育与艺术为工具，达到期望的教育目标。\n                        山顶部落是奥中经济促进会、奥地利新世纪文化交流协会中国代表处\n                    ")]):e._e(),e._v(" "),"en"===e.currentLanguage?n("p",[e._v('\n                        Guangdong hilltop tribal education technology Co., Ltd. (Mountain Clans Club, MCC) is a study and extracurricular education service dedicated to "European sports and art".\n                        The main service areas of MCC include youth camps education at home and abroad, with all kinds of sports and arts as tools to achieve the desired educational goals.\n                        ')]):e._e()]),e._v(" "),n("m-button",{attrs:{buttonTxt:"cn"===e.currentLanguage?"了解更多":"More",buttonType:"blue",buttonPosition:"left"},on:{handleMbuttonClick:function(e){}}})],1)])]),e._v(" "),n("div",{staticClass:"home-content-info clearfix"},[n("div",{staticClass:"info-item"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"cn"===e.currentLanguage,expression:"currentLanguage === 'cn'"}]},[n("div",{staticClass:"info-item-title"},[e._v("联系我们吧")]),e._v(" "),n("p",[e._v("地址：广州市番禺区洛浦街洛溪村北环路自编88号")]),e._v(" "),n("p",[e._v("电话：0772-8614285")]),e._v(" "),n("p",[e._v("邮箱：mcc@qq.com")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"en"===e.currentLanguage,expression:"currentLanguage === 'en'"}]},[n("div",{staticClass:"info-item-title"},[e._v("GET IN TOUCH")]),e._v(" "),n("p",[e._v("Address：广州市番禺区洛浦街洛溪村北环路自编88号")]),e._v(" "),n("p",[e._v("Tel：0772-8614285")]),e._v(" "),n("p",[e._v("Email：mcc@qq.com")])])]),e._v(" "),n("div",{staticClass:"info-item"},[n("div",{staticClass:"info-item-title"},[e._v(e._s("cn"===e.currentLanguage?"关注我们":"FOLLOW US"))]),e._v(" "),e._m(0),e._v(" "),e._m(1)]),e._v(" "),e._m(2)]),e._v(" "),e._l(e.side_bar_array,function(t,i){return n("side-bar",{key:i,attrs:{position:t.position,active:"left"===t.position?e.currentLanguage:e.currentNav,language:e.currentLanguage,backgroundColor:t.backgroundColor,sidebarItems:t.items},on:{"sidebar-item-click":e.handleSideBarEvent}})}),e._v(" "),n("side-menu",{attrs:{menuItems:e.menuItems},on:{"menu-click":e.handleMenuEvent}}),e._v(" "),n("div",{staticClass:"mobile-language-switch"},[n("span",{class:e.getMobileSwitchClass("cn"),on:{click:function(t){e.handleSideBarEvent({type:0,value:0})}}},[e._v("中文")]),e._v(" "),n("span",{class:e.getMobileSwitchClass("en"),on:{click:function(t){e.handleSideBarEvent({type:0,value:1})}}},[e._v("EN")])]),e._v(" "),n("loading-mask",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),e._v(" "),e.isOpenItem?n("my-dialog",{attrs:{loadingSuccess:e.itemLoadingSuccess,state:e.dialogState},on:{"dialog-open-success":function(t){e.handleDialogOpen()},"dialog-closeFromDialog":function(t){e.handleDialogClose()}}},[e.itemLoadingSuccess?n("div",{attrs:{slot:"title"},slot:"title"},[e._v("\n            "+e._s("cn"===e.currentLanguage?e.itemSelected.title.cn:e.itemSelected.title.en)+"\n        ")]):e._e(),e._v(" "),e.itemLoadingSuccess?n("div",{staticClass:"my-dialog clearfix",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"dialog-img"},[n("img",{staticStyle:{width:"95%"},attrs:{src:e.itemSelected.imgUrl}})]),e._v("\n            "+e._s("cn"===e.currentLanguage?e.itemSelected.content.cn:e.itemSelected.content.en)+"\n        ")]):e._e(),e._v(" "),n("div",{staticClass:"clearfix",attrs:{slot:"foot"},slot:"foot"},[n("m-button",{attrs:{buttonTxt:"cn"===e.currentLanguage?"立即报名":"SIGN UP NOW",buttonType:"blue"}}),e._v(" "),n("m-button",{attrs:{buttonTxt:"cn"===e.currentLanguage?"再去看看":"LOOK NEXT TIME",buttonType:"red"},on:{handleMbuttonClick:function(t){e.handleDialogClose()}}})],1)]):e._e()],2)},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info-item-contact"},[t("img",{staticClass:"qrCode",attrs:{src:n(3)}}),this._v(" "),t("span",{staticClass:"iconfont icon-wechat"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info-item-contact"},[t("img",{staticClass:"qrCode",attrs:{src:n(3)}}),this._v(" "),t("span",{staticClass:"iconfont icon-weibo"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"keepOnRecord"},[t("p",[this._v("Copyright © 2015-2018 广东山顶部落教育科技有限公司\n                ALL Rights Reserved.")]),this._v(" "),t("img",{attrs:{src:n(16)}}),this._v("粤ICP备17050793号-1\n        ")])}];i._withStripped=!0;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["sidebar",e.position],style:e.bgColor},e._l(e.sbItems,function(t,i){return n("div",{key:i,staticClass:"sidebar_item",style:e.getActiveStyle(t.value),on:{click:function(n){"left"===e.position?e.handleItemClick(0,t.value):e.handleItemClick(1,t.value)}}},["right"===e.position?n("a",{class:e.getItemTitleClass(),style:"en"===e.language?e.getActiveStyle(t.value):""},[e._v("\n            "+e._s("cn"===e.language?t.name:t.name_en))]):e._e(),e._v(" "),"left"===e.position?n("a",[e._v(e._s(t.name))]):e._e(),e._v(" "),1===t.value&&"left"===e.position?n("span",[e._v("/")]):e._e()])}))};s._withStripped=!0;var o={props:{position:{type:String,default:function(){return"left"}},backgroundColor:{type:String,default:function(){return"white"}},sidebarItems:{type:Array,default:function(){return[{name:"默认",value:0}]}},active:{type:Number,default:function(){return 0}},language:{type:String,default:"cn"}},computed:{bgColor:function(){return{"background-color":"alpha"===this.backgroundColor?"rgba(0,0,0,0)":this.backgroundColor}}},data(){return{pos:this.position,sbItems:this.sidebarItems,activeItem:this.active}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{getActiveStyle(e){return"en"===this.language&&"right"===this.position?{"border-right":e===this.activeItem?"2px solid dodgerblue":"none","font-size":"18px"}:{"border-bottom":e===this.activeItem?"2px solid dodgerblue":"none"}},getItemTitleClass:function(){if("en"===this.language&&"right"===this.position)return"item_en"},handleItemClick(e,t){let n=this;(function(e){return n.activeItem===e})(t)||function(e,t){n.activeItem=t;let i={type:e,value:t};n.$emit("sidebar-item-click",i)}(e,t)}}},l=(n(15),n(0)),c=Object(l.a)(o,s,[],!1,null,"9a5c856e",null);c.options.__file="src/components/sidebar/sidebar.vue";var r=c.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"menu",on:{click:function(t){e.handleMenuClick()}}},[n("div",{staticClass:"iconfont icon-caidan"}),e._v(" "),n("div",{staticClass:"menu-txt"},[e._v("MENU")])]),e._v(" "),n("transition",{attrs:{css:!1},on:{"before-enter":e.handleBeforeEnter,enter:e.handleEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave,leave:e.handleLeave,"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"menu-body",attrs:{id:"menu-content"}},[n("ul",{staticClass:"links"},e._l(e.menuItems,function(t,i){return n("li",{key:i,class:e.getMenuItemClass(t.ready),attrs:{id:t.id}},[e._v("\n                    "+e._s(t.title)+"\n                ")])}))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],attrs:{id:"mask"}})],1)};u._withStripped=!0;var d={props:{speed:{type:Number,default:800},menuItems:{type:Array,default:[{id:"item-home",ready:!0,title:"主页/HOME"},{id:"item-process",ready:!1,title:"发展历程/PROCESS"}]}},data:()=>({showMenu:!1,firstClick:!0,screenWidth:0}),created:function(){},mounted:function(){this.screenWidth=document.body.clientWidth;let e=this;document.getElementById("mask").addEventListener("click",function(t){e.handleMenuClick()}),document.getElementById("menu-content").addEventListener("click",function(t){let n=t||window.event,i=n.target||n.srcElement;if("li"===i.nodeName.toLocaleLowerCase()){if("ready"===i.className){let t={targetId:i.id,msg:"来自sideMenu的item点击事件"};e.$emit("menu-click",t)}}else e.handleMenuClick()})},beforeDestroy:function(){document.getElementById("menu-content").removeEventListener("click")},methods:{getMenuItemClass:function(e){return e?"ready":"coming-soon"},handleMenuClick:function(){this.showMenu=!this.showMenu},handleBeforeEnter:function(e){e.style.transform="translateX("+this.screenWidth+"px)"},handleEnter:function(e,t){let n=this;n.firstClick&&(n.screenWidth<768?e.style.width=.7*e.offsetWidth-48+"px":n.screenWidth<=1024?e.style.width=e.offsetWidth/2*.85-48+"px":e.style.width=e.offsetWidth/2*.9-48+"px",n.firstClick=!n.firstClick),n.velocity(e,"stop"),n.velocity(e,{translateX:"0px"},{duration:n.speed,easing:[.19,1,.22,1],complete:t})},handleAfterEnter:function(e){},handleBeforeLeave:function(e){},handleLeave:function(e,t){this.velocity(e,"stop"),this.velocity(e,{translateX:this.screenWidth+"px"},{duration:this.speed,easing:[.4,.01,.165,.99],complete:t})},handleAfterLeave:function(e){}}},m=(n(14),Object(l.a)(d,u,[],!1,null,"45b362e2",null));m.options.__file="src/components/sidemenu/sidemenu.vue";var g=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner",style:e.bannerBackground},[n("transition-group",{attrs:{css:!1},on:{"before-enter":e.handleBeforeEnter,enter:e.handleEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave,leave:e.handleLeave,"after-leave":e.handleAfterLeave}},e._l(e.bannerItems,function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:i===e.activeItem,expression:" index === activeItem"}],key:i,class:e.getBannerItemClass(i)},[n("img",{staticClass:"banner-item-bg",attrs:{src:t.imgUrl}})])}))],1)};v._withStripped=!0;var f=n(6),h=n.n(f),p=n(5),_=n.n(p),b=n(4),y=n.n(b),C={name:"banner",props:{Items:{type:Array,default:[{title:"no.1",imgUrl:h.a,weight:1},{title:"no.2",imgUrl:_.a,weight:2},{title:"no.3",imgUrl:y.a,weight:3}]},speed:{type:Number,default:5e3}},data(){return{bannerItems:this.Items,scrollSpeed:this.speed,activeItem:-1}},computed:{bannerBackground:function(){let e=-1;return e=this.activeItem===this.bannerItems.length-1?0:this.activeItem+1,{"background-image":"url("+this.bannerItems[e].imgUrl+")","background-size":"100% 100%"}}},mounted(){console.log("banner挂载完成");let e=this;setTimeout(function(){e.activeItem=0},5e3)},methods:{getBannerItemClass:e=>"banner-item",handleBeforeEnter:function(e){},handleEnter:function(e,t){this.velocity(e,"stop"),this.velocity(e,{left:"100%",opacity:.8},{duration:this.speed,easing:[.4,.01,.165,.99],complete:t})},handleAfterEnter:function(e){this.activeItem<this.bannerItems.length-1?this.activeItem++:this.activeItem=0},handleBeforeLeave:function(e){},handleLeave:function(e,t){this.velocity(e,"stop"),this.velocity(e,{opacity:1},{duration:this.speed,easing:[.4,.01,.165,.99],complete:t})},handleAfterLeave:function(e){e.style.left=0}}},w=(n(13),Object(l.a)(C,v,[],!1,null,"57b22c0f",null));w.options.__file="src/components/banner/banner.vue";var x=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"waterfall-content"},e._l(e.items,function(t,i){return n("div",{staticClass:"waterfall-item"},[n("div",{staticClass:"waterfall-item-title"},[n("div",{staticClass:"waterfall-item-title-txt"},[n("span",{staticClass:"title-small"},[e._v(e._s(e.getItemType(t.p_type)))]),n("br"),e._v(" "),n("span",{staticClass:"title-big"},[e._v(e._s("cn"===e.language?t.title.cn:t.title.en))])])]),e._v(" "),n("div",{staticClass:"waterfall-item-content"},[n("div",{staticClass:"waterfall-item-content-txt"},[e._v(e._s("cn"===e.language?t.content.cn:t.content.en)+"\n                "),n("img",{staticClass:"waterfall-item-content-img",attrs:{src:t.imgUrl},on:{load:function(t){e.imageLoaded()}}}),e._v(" "),n("button",{staticClass:"waterfall-item-content-button",on:{click:function(n){e.handleMore(t.p_id)}}},[e._v(e._s("cn"===e.language?"查看更多":"LEARN MORE"))])])])])}))};S._withStripped=!0;var L={props:{count:{type:Number,default:3},items:{type:Array,default:[{p_id:0,title:"活动哟0",content:"内容阿里",imgUrl:""}]},size:{type:String,default:"small"},deviceType:{type:String,default:""},language:{type:String,default:"cn"}},computed:{itemWidth:function(){let e=window.innerWidth-120;return Number(e/this.rowCount).toFixed(2)+"px"}},data(){return{rowCount:this.count,myItems:[],imgCount:0,maxItemToTop:0}},created:function(){},mounted(){let e=this;if("big"===e.size){const t=setInterval(function(){if(e.imgCount===e.items.length){e.updateWaterFallItems(e),clearInterval(t),document.getElementsByClassName("waterfall-content")[0].style.height=e.maxItemToTop+"px"}},100)}},beforeDestroy:function(){console.log("waterfallflow destroy")},methods:{getItemStyle:function(e){return"small"===this.size?{}:{width:this.itemWidth}},getItemType:function(e){return"cn"===this.language?0===e?"国内营地":1===e?"海外营地":"公益营地":0===e?"DOMESTIC CAMPS":1===e?"OVERSEAS CAMP":"COMMONWEAL CAMP"},getItemImageStyle:function(e){return{"background-image":e,"background-size":"100% 100%"}},imageLoaded:function(){console.log("图片加载完成"),this.imgCount++},updateWaterFallItems:function(e){let t=document.getElementsByClassName("waterfall-item");console.log("update："+t.length);let n=[],i=[];for(let o=0;o<t.length;o++){let l=t[o].offsetHeight;if(o<3)n.push(l),i.push(t[o]),t[o].style.left=o*s(t[o])+"px";else{let e=a(n);t[o].style.left=i[e].offsetLeft+"px",t[o].style.top=i[e].offsetTop+i[e].offsetHeight+10+"px",i[e]=t[o],n[e]=t[o].offsetTop+t[o].offsetHeight}if(0===o&&(e.maxItemToTop=t[0].offsetHeight+t[0].offsetTop),o>0){let n=t[o].offsetHeight+t[o].offsetTop;e.maxItemToTop=n>e.maxItemToTop?n:e.maxItemToTop}}function a(e){let t=Math.min(...e);return e.indexOf(t)}function s(e){return e.offsetWidth}},handleMore:function(e){let t={p_id:e,msg:"查看item："+e};this.$bus.$emit("open-item-more",t)}}},I=(n(12),Object(l.a)(L,S,[],!1,null,"367f4c51",null));I.options.__file="src/components/waterfallflow/waterfallflow.vue";var k=I.exports,E=function(){var e=this.$createElement;this._self._c;return this._m(0)};E._withStripped=!0;var T={props:{},computed:{},data:()=>({}),created:function(){},mounted(){let e=document.body.offsetWidth,t=document.body.offsetHeight,n=document.getElementById("loading-group"),i=document.getElementById("loading-txt");e<768?(n.style.left=e/2-96+"px",n.style.top=t/2-24+"px",i.style.top="48px",i.style.width="192px"):e<1025?(n.style.left=e/2-120+"px",n.style.top=t/2-32+"px",i.style.top="64px",i.style.width="240px"):(n.style.left=e/2-144+"px",n.style.top=t/2-40+"px",i.style.top="80px",i.style.width="282px")},beforeDestroy:function(){},methods:{}},M=(n(11),Object(l.a)(T,E,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"loading-body"},[n("div",{attrs:{id:"loading-group"}},[n("span",{staticClass:"circular small late"}),e._v(" "),n("span",{staticClass:"circular small early"}),e._v(" "),n("span",{staticClass:"circular middle late"}),e._v(" "),n("span",{staticClass:"circular middle early"}),e._v(" "),n("span",{staticClass:"circular big late"}),e._v(" "),n("span",{staticClass:"circular big early"}),e._v(" "),n("div",{attrs:{id:"loading-txt"}},[e._v("Loading...")])])]),e._v(" "),n("div",{staticClass:"mask"})])}],!1,null,"18ab333e",null));M.options.__file="src/components/loadingmask/loadingmask.vue";var N=M.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialog"},[n("div",{class:e.dialogClass},[n("div",{staticClass:"dialog-title"},[e._t("title",[n("div",[e._v("默认标题")])]),e._v(" "),n("span",{staticClass:"dialog-title-close",on:{click:function(t){e.handleClickClose()}}},[e._v("X")])],2),e._v(" "),n("div",{staticClass:"dialog-content"},[e._t("content",[n("div",[e._v("默认内容")])])],2),e._v(" "),n("div",{staticClass:"dialog-foot"},[e._t("foot",[n("button",{staticStyle:{float:"right"},on:{click:function(t){e.handleClickClose()}}},[e._v("默认关闭")])])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loadingSuccess,expression:"!loadingSuccess"}],staticClass:"loading-group"},[n("span",{staticClass:"circular late"}),e._v(" "),n("span",{staticClass:"circular early"}),e._v(" "),n("div",{staticClass:"loading-txt"},[e._v("Loading...")])])]),e._v(" "),n("div",{staticClass:"mask"})])};O._withStripped=!0;var A={components:{},props:{loadingSuccess:{type:Boolean,default:!1},state:{type:String,default:"close"}},computed:{dialogClass:function(){if(!this.first){let e=document.body.clientHeight,t=document.getElementsByClassName("dialog-body")[0];return"open"===this.state?t.style.transform="translateY("+(e/2-t.clientHeight/2)+"px)":t.style.transform="translateY("+e+"px)","dialog-body "+("open"===this.state?"open":"close")}if("open"===this.state)return"dialog-body open"}},data:()=>({first:!0}),created:function(){},mounted(){document.getElementsByClassName("dialog-body")[0];this.first=!1,this.$emit("dialog-open-success")},beforeDestroy:function(){},methods:{handleClickClose(){this.loading=!0,this.$emit("dialog-closeFromDialog")}}},B=(n(10),Object(l.a)(A,O,[],!1,null,"cdbdd6e2",null));B.options.__file="src/components/dialog/dialog.vue";var W=B.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:e.getButtonClass(),on:{click:function(t){e.handleClick()}}},[e._v(e._s(e.buttonTxt))])])};$._withStripped=!0;var U={components:{},props:{buttonTxt:{type:String,default:"button"},buttonType:{type:String,default:""},buttonPosition:{type:String,default:"right"}},computed:{},data:()=>({}),created:function(){},mounted(){document.getElementsByClassName("button")[0].style.float=this.buttonPosition},beforeDestroy:function(){},methods:{getButtonClass:function(){return"button "+this.buttonType},handleClick:function(){this.$emit("handleMbuttonClick")}}},D=(n(9),Object(l.a)(U,$,[],!1,null,"cf327762",null));D.options.__file="src/components/mbutton/mbutton.vue";var H={components:{SideBar:r,SideMenu:g,Banner:x,WaterFall:k,LoadingMask:N,MyDialog:W,mButton:D.exports},name:"home",data:()=>({side_bar_array:[{name:"cn_en",position:"left",backgroundColor:"alpha",items:[{name:"中文",value:0},{name:"EN",value:1}]},{name:"nav",position:"right",backgroundColor:"white",items:[{name:"首页",name_en:"HOME",value:0},{name:"最新营地",name_en:"NEWS",value:1},{name:"查看更多",name_en:"MORE",value:2}]}],screenHeight:0,currentLanguage:"cn",currentNav:0,productArray:[],isShowWaterfall:!1,deviceSize:"",deviceType:"",isOpenItem:!1,itemSelected:{},itemLoadingSuccess:!1,dialogState:"close",menuItems:[{id:"item-home",ready:!0,title:"主页/HOME"},{id:"item-news",ready:!0,title:"最新课程/NEWS"},{id:"item-process",ready:!1,title:"发展历程/PROCESS"},{id:"item-about",ready:!0,title:"关于我们/ABOUT US"},{id:"item-join",ready:!1,title:"加入我们/JOIN US"}],isLoading:!1}),computed:{},created:function(){console.log("home组件创建完成"),this.deviceSize=document.body.clientWidth>=768?"big":"small",this.screenHeight=document.body.clientHeight,this.deviceType=navigator.userAgent.indexOf("iPad")>0?"iPad":"",this.http.get("/news").then(e=>{this.productArray=e.data.products,this.isShowWaterfall=!0})},mounted:function(){let e=this;console.log("home组件挂载完成");let t=document.getElementById("about-img");t.style.height=Number(213.44*t.offsetWidth/282.53).toFixed(2)+"px",e.$bus.$on("open-item-more",function(t){console.log("查看item："+t.p_id),e.isOpenItem=!0,e.dialogState="open"})},beforeDestroy:function(){},props:{},methods:{getMobileSwitchClass(e){return this.currentLanguage===e?"mobile-language-switch-txt mSwitch-selected":"mobile-language-switch-txt"},handleSideBarEvent(e){let t=this;if(0===e.type){t.currentLanguage=0===e.value?"cn":"en",t.isLoading=!0,t.isShowWaterfall=!1,setTimeout(function(){t.isShowWaterfall=!0,t.isLoading=!1},2e3),t.$bus.$emit("language-change",t.currentLanguage)}else 1===e.type&&(t.currentNav=e.value)},handleMenuEvent(e){switch(e.targetId){case"item-home":window.location.href="/home";break;case"item-news":console.log("news");break;case"item-process":console.log("process");break;case"item-about":console.log("about");break;case"item-join":console.log("join")}},handleDialogOpen(){let e=this;console.log("dialog打开成功，开始加载数据"),setTimeout(function(){e.http.get("/product").then(t=>{e.itemSelected=t.data.product,console.log(e.itemSelected),e.itemLoadingSuccess=!0})},2e3)},handleDialogClose(){let e=this;e.dialogState="close",setTimeout(function(){e.isOpenItem=!1,e.itemSelected={},e.itemLoadingSuccess=!1},600)}}},P=(n(8),Object(l.a)(H,i,a,!1,null,"957c9522",null));P.options.__file="src/components/home.vue";t.default=P.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]]);