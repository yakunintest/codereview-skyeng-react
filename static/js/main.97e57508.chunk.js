(this["webpackJsonpcodereview-skyeng"]=this["webpackJsonpcodereview-skyeng"]||[]).push([[0],{11:function(e,t,a){e.exports={itemBlock:"CartItem_itemBlock__vpYUc",itemBlock__desc:"CartItem_itemBlock__desc__3jIqz",itemBlock__price:"CartItem_itemBlock__price__3wlOt",itemBlock__actions:"CartItem_itemBlock__actions__Q7cQv",itemBlock__counter:"CartItem_itemBlock__counter__28-2a",counterItem:"CartItem_counterItem__27k9n",counterItem__actions:"CartItem_counterItem__actions__1UN5x"}},13:function(e,t,a){e.exports={cart:"CartLayout_cart__1pE5i",cart__items:"CartLayout_cart__items__BDYWK",cart__header:"CartLayout_cart__header__1z-fq",cart__checkout:"CartLayout_cart__checkout__2Shbu"}},18:function(e,t,a){e.exports={p__grid:"ProductsGrid_p__grid__y0eGP"}},20:function(e,t,a){e.exports={header:"header_header__3p7LH",header__title:"header_header__title__UhUTt"}},28:function(e,t,a){e.exports={footer:"footer_footer__15JWM"}},29:function(e,t,a){e.exports={container:"layout_container__2YIc_"}},32:function(e,t,a){e.exports={select:"Select_select__1Ln6j"}},33:function(e,t,a){},34:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(25),l=a.n(n),o=a(8),i=a(3),u=a(10),m=a(2),s=a(15),d=function(e){return function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},_=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(m.a)(Object(m.a)({},t.payload),{},{quantity:1})),Object(m.a)(Object(m.a)(Object(m.a)({},e),d(e.cartItems)),{},{cartItems:Object(s.a)(e.cartItems)});case"REMOVE_ITEM":return Object(m.a)(Object(m.a)(Object(m.a)({},e),d(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(s.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(m.a)(Object(m.a)(Object(m.a)({},e),d(e.cartItems)),{},{cartItems:Object(s.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(m.a)(Object(m.a)(Object(m.a)({},e),d(e.cartItems)),{},{cartItems:Object(s.a)(e.cartItems)});case"CHECKOUT":return Object(m.a)({cartItems:[],checkout:!0},d([]));case"CLEAR":return Object(m.a)({cartItems:[]},d([]));default:return e}},p=Object(c.createContext)(),E=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],h=Object(m.a)(Object(m.a)({cartItems:E},d(E)),{},{checkout:!1}),f=function(e){var t=e.children,a=Object(c.useReducer)(_,h),n=Object(u.a)(a,2),l=n[0],o=n[1],i=Object(m.a)({removeProduct:function(e){o({type:"REMOVE_ITEM",payload:e})},addProduct:function(e){o({type:"ADD_ITEM",payload:e})},increase:function(e){o({type:"INCREASE",payload:e})},decrease:function(e){o({type:"DECREASE",payload:e})},clearCart:function(){o({type:"CLEAR"})},handleCheckout:function(){console.log("CHECKOUT",l),o({type:"CHECKOUT"})}},l);return r.a.createElement(p.Provider,{value:i},t)},v=a(20),b=a.n(v),g=function(){var e=Object(c.useContext)(p).itemCount;return r.a.createElement("header",{className:b.a.header},r.a.createElement("nav",null,r.a.createElement(o.b,{className:b.a.header__title,to:"/"},"\u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/cart"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",e,")")))))},y=a(28),I=a.n(y),O=function(){return r.a.createElement("footer",{className:I.a.footer})},C=a(29),j=a.n(C),k=a(17),N=function(e){var t=e.title,a=e.description,c=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("title",null,t?t+" - React Boilerplate":"React.js Boilerplate"),r.a.createElement("meta",{name:"description",content:a||"React.js Boilerplate"})),r.a.createElement(g,null),r.a.createElement("main",{className:j.a.container},c),r.a.createElement(O,null))},x=a(9),w=a.n(x),B=function(){var e=Object(c.useContext)(p);return Object(m.a)({},e)},S=function(e,t){var a=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"$& ");return"".concat(a," ").concat(t)},A=function(e){var t=e.product,a=B(),c=a.addProduct,n=a.cartItems,l=a.increase,o=function(e){return!!n.find((function(t){return t.id===e.id}))};return r.a.createElement("div",{className:w.a.card},r.a.createElement("div",{className:w.a.card__actions},r.a.createElement("img",{className:w.a.card__img,src:t.photo+"?v="+t.id,alt:t.description}),!o(t)&&r.a.createElement("span",{role:"img",className:w.a.card__cart,onClick:function(){return c(t)}}),o(t)&&r.a.createElement("span",{role:"img",className:w.a.card__cart,onClick:function(){return l(t)}}),r.a.createElement("span",{role:"img",className:w.a.card__wishlist})),r.a.createElement("p",{className:w.a.card__title},t.name),r.a.createElement("p",{className:w.a.card__desc},t.description),r.a.createElement("h3",{className:w.a.card__price},S(t.price,t.currency)))},R=a(18),L=a.n(R),P=[{value:"ASC",label:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a: \u0441\u043f\u0435\u0440\u0432\u0430 \u0434\u0435\u0448\u0435\u0432\u043b\u0435"},{value:"DESC",label:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a: \u0441\u043f\u0435\u0440\u0432\u0430 \u0434\u043e\u0440\u043e\u0436\u0435"}],T=function(e){return e.sort((function(e,t){return parseFloat(e.price)-parseFloat(t.price)}))},D=function(e,t){switch(t.type){case"SORT":if("DESC"===t.payload)return Object(m.a)(Object(m.a)({},e),{},{products:(a=e.products,a.sort((function(e,t){return parseFloat(t.price)-parseFloat(e.price)})))});if("ASC"===t.payload)return Object(m.a)(Object(m.a)({},e),{},{products:T(e.products)});break;default:return e}var a},q=Object(c.createContext)(),M={products:[{id:1,name:"\u041a\u0440\u043e\u0432\u0430\u0442\u044c TATRAN",description:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0435\u0439 \u0441\u0442\u0430\u043b\u0438, \u043f\u0440\u0438\u0434\u0430\u0435\u0442 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u044f\u0449\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442.",price:12e4,currency:"\u0440\u0443\u0431.",photo:"/img/tatran.png"},{id:2,name:"\u041a\u0440\u0435\u0441\u043b\u043e VILORA",description:"\u041c\u044f\u0433\u043a\u043e\u0435 \u0438 \u0443\u044e\u0442\u043d\u043e\u0435, \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u043e\u0435 \u0438 \u0441\u0442\u0438\u043b\u044c\u043d\u043e\u0435. \u0423\u043f\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u0434\u0443\u0448\u043a\u0438 \u0441\u0438\u0434\u0435\u043d\u044c\u044f \u0438 \u043f\u0440\u0438\u044f\u0442\u043d\u0430\u044f \u043d\u0430 \u043e\u0449\u0443\u043f\u044c \u0442\u043a\u0430\u043d\u044c.",price:21e3,currency:"\u0440\u0443\u0431.",photo:"/img/vilora.png"},{id:3,name:"\u0421\u0442\u043e\u043b MENU",description:"\u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u0439 \u0434\u0443\u0431 - \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0441\u043e\u0431\u043e\u0439 \u043f\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e.",price:34e3,currency:"\u0440\u0443\u0431.",photo:"/img/menu.png"},{id:4,name:"\u0414\u0438\u0432\u0430\u043d ASKESTA",description:"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0437\u0430\u0449\u0435\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0435\u043c\u0443\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0443 \u0434\u0438\u0432\u0430\u043d \u043b\u0435\u0433\u043a\u043e \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u0443\u044e \u043a\u0440\u043e\u0432\u0430\u0442\u044c",price:68e3,currency:"\u0440\u0443\u0431.",photo:"/img/asketa.png"},{id:5,name:"\u041a\u0440\u0435\u0441\u043b\u043e LUNAR",description:"\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u043b\u0443\u0447\u0438, \u043f\u0435\u0440\u0435\u043f\u0430\u0434\u044b \u0432\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043b\u044e\u0431\u044b\u0435 \u043e\u0441\u0430\u0434\u043a\u0438",price:4e4,currency:"\u0440\u0443\u0431.",photo:"/img/lunar.png"},{id:6,name:"\u0428\u043a\u0430\u0444 Nastan",description:"\u041c\u0435\u0431\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0441\u043d\u0430\u0449\u0435\u043d\u0430 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438.",price:8e4,currency:"\u0440\u0443\u0431.",photo:"/img/nastan.png"}]},U=function(e){var t=e.children,a=Object(c.useReducer)(D,M),n=Object(u.a)(a,2),l=n[0],o=n[1],i=Object(m.a)({sort:function(e){o({type:"SORT",payload:e})}},l);return r.a.createElement(q.Provider,{value:i},t)},F=function(){var e=Object(c.useContext)(q);return Object(m.a)({},e)},J=function(){var e=F().products;return r.a.createElement("div",{className:L.a.p__container},r.a.createElement("div",{className:L.a.p__grid},e.map((function(e){return r.a.createElement(A,{key:e.id,product:e})}))),r.a.createElement("div",{className:L.a.p__footer}))},Y=Object(c.createContext)(),H=function(e){var t=e.children,a=Object(c.useState)(P),n=Object(u.a)(a,1)[0];return r.a.createElement(Y.Provider,{value:{options:n}},t)},K=a(32),V=a.n(K),Q=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),a=t[0],n=t[1],l=function(){var e=Object(c.useContext)(Y);return Object(m.a)({},e)}().options,o=F().sort;return r.a.createElement(N,{title:"Store",description:"This is the Store page"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:V.a.select},r.a.createElement("select",{onChange:function(e){return n((t=e).target.value),void o(t.target.value);var t},value:a,multiple:!1},l.map((function(e,t){return r.a.createElement("option",{value:e.value,key:t},e.label)})))),r.a.createElement(J,null)))},W=function(){return r.a.createElement(N,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"404")))},z=a(13),G=a.n(z),$=a(11),X=a.n($),Z=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 6 5",fill:"none"},r.a.createElement("path",{d:"M1 4L3 2L5 4",stroke:"#CACDD8","stroke-width":"1.6","stroke-linecap":"round"}))},ee=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 6 5",fill:"none"},r.a.createElement("path",{d:"M5 1L3 3L1 0.999999",stroke:"#CACDD8","stroke-width":"1.6","stroke-linecap":"round"}))},te=function(e){var t=e.product,a=B(),c=a.increase,n=a.decrease,l=a.removeProduct;return r.a.createElement("div",{className:X.a.itemBlock},r.a.createElement("img",{src:t.photo,alt:t.name}),r.a.createElement("div",null,r.a.createElement("h5",null,t.name),r.a.createElement("p",{className:X.a.itemBlock__desc},t.description),r.a.createElement("p",{className:X.a.itemBlock__price},S(t.price,t.currency)," "),r.a.createElement("div",{className:X.a.itemBlock__actions},r.a.createElement(o.b,{to:"/"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"),r.a.createElement(o.b,{onClick:function(){return l(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),r.a.createElement("div",{className:X.a.itemBlock__counter},r.a.createElement("div",{className:X.a.counterItem},r.a.createElement("p",null,t.quantity),r.a.createElement("div",{className:X.a.counterItem__actions},r.a.createElement("button",{disabled:10===t.quantity,onClick:function(){return c(t)}},r.a.createElement(Z,{width:"6px",height:"5px"})),t.quantity>=1&&r.a.createElement("button",{disabled:1===t.quantity,onClick:function(){return n(t)}},r.a.createElement(ee,{width:"6px",height:"5px"}))))))},ae=a(33),ce=a.n(ae),re=function(){var e=B().cartItems;return r.a.createElement("div",{className:ce.a.p__container},e.map((function(e){return r.a.createElement(te,{key:e.id,product:e})})))},ne=function(){var e=B(),t=e.total,a=e.cartItems,c=e.checkout,n=e.handleCheckout;return r.a.createElement(N,{title:"Cart",description:"Cart page"},r.a.createElement("div",{className:G.a.cart},r.a.createElement("section",{className:G.a.cart__items},r.a.createElement("div",{className:G.a.cart__header},r.a.createElement("span",null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement("span",null,"\u041a-\u0432\u043e")),a.length>0?r.a.createElement(re,null):r.a.createElement("div",null,"Your cart is empty"),c&&r.a.createElement("div",null,r.a.createElement("p",null,"Checkout successfull"),r.a.createElement(o.b,{to:"/"},"BUY MORE"))),r.a.createElement("section",{className:G.a.cart__checkout},a.length>0&&r.a.createElement("div",{className:G.a.cart__checkoutForm},r.a.createElement("h3",null,"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{placeholder:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",type:"text"})),r.a.createElement("label",null,r.a.createElement("input",{placeholder:"+ 7 904 000 80 80",type:"tel"})),r.a.createElement("label",null,r.a.createElement("input",{placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",type:"text"})),r.a.createElement("h2",null,"\u0418\u0442\u043e\u0433\u043e: ",S(t,"\u0440\u0443\u0431.")),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:n},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")))))))},le=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Q}),r.a.createElement(i.a,{path:"/cart",component:ne}),r.a.createElement(i.a,{path:"*",component:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k.b,null,r.a.createElement(U,null,r.a.createElement(H,null,r.a.createElement(f,null,r.a.createElement(le,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={card__actions:"ProductItem_card__actions__2zAgG",card__cart:"ProductItem_card__cart__2LdHo",card__wishlist:"ProductItem_card__wishlist__20Vc3",card__img:"ProductItem_card__img__1QceL",card__title:"ProductItem_card__title__3cwbY",card__desc:"ProductItem_card__desc__3-6QV",card__price:"ProductItem_card__price__2nJh5"}}},[[34,1,2]]]);
//# sourceMappingURL=main.97e57508.chunk.js.map