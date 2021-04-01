(this["webpackJsonppizza-typescript"]=this["webpackJsonppizza-typescript"]||[]).push([[0],{39:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c(14),s=c.n(i),a=(c(39),c(3)),o=c.p+"static/media/pizza-logo.56ac8703.svg",j=function(){return Object(n.jsxs)("div",{className:"header__logo",children:[Object(n.jsx)("img",{width:"38",src:o,alt:"Pizza logo"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"React Pizza"}),Object(n.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})},l=c(9),d=c(4),u=function(e){var t=e.orderPrice,c=Object(d.d)((function(e){return e.cart.productsInCart.length}));return Object(n.jsx)("div",{className:"header__cart",children:Object(n.jsxs)(l.a,{to:"/cart",className:"button button--cart",children:[Object(n.jsxs)("span",{children:[t," \u20bd"]}),Object(n.jsx)("div",{className:"button__delimiter"}),Object(n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(n.jsx)("span",{children:c})]})})},b=function(e){var t=e.orderPrice;return Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(j,{}),Object(n.jsx)(u,{orderPrice:t})]})})},p=c(8),h=function(e){var t=e.items,c=e.onFilter,r=e.filter;return Object(n.jsx)("div",{className:"categories",children:Object(n.jsx)("ul",{children:Object.entries(t).map((function(e){var t=Object(p.a)(e,2),i=t[0],s=t[1];return Object(n.jsx)("li",{className:r===i?"active":"",onClick:function(){return c(i)},children:s},i)}))})})},O=c(23),x=c.n(O),m=c(29),v="LOAD_PIZZAS",C="SET_CURRENT_FILTER",f="SET_CURRENT_SORTING_OPTION",g=function(e){return{type:v,payload:e}},w=function(){var e=Object(m.a)(x.a.mark((function e(t){var c,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://letsget.github.io/pizza-typescript/db.json");case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,r=n.pizzas,t(g(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log((null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.response)||e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.sortItems,c=e.currentSortingOption,i=Object(d.c)(),s=Object(r.useState)(!1),a=Object(p.a)(s,2),o=a[0],j=a[1],l=Object(r.useRef)(null),u=Object(r.useState)(0),b=Object(p.a)(u,2),h=(b[0],b[1]),O=Object(r.useState)(t[c]),x=Object(p.a)(O,2),m=x[0],v=x[1],C=function(e,c){h(e),v(t[c]),i({type:f,payload:c}),j(!1)},g=function(e){e.path.includes(l.current)||j(!1)};return Object(r.useEffect)((function(){return document.body.addEventListener("click",g),function(){return document.body.removeEventListener("click",g)}}),[]),Object(n.jsxs)("div",{ref:l,className:"sort",children:[Object(n.jsxs)("div",{className:"sort__label",children:[Object(n.jsx)("svg",{className:o?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(n.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(n.jsx)("span",{onClick:function(){j(!o)},children:m})]}),o&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"sort__popup",children:Object(n.jsx)("ul",{children:Object.entries(t).map((function(e,t){var r=Object(p.a)(e,2),i=r[0],s=r[1];return Object(n.jsx)("li",{className:c===i?"active":"",onClick:function(){return C(t,i)},children:s},i)}))})})})]})},N=function(e){var t=e.filter,c=Object(d.d)((function(e){return e.app.filters}));return console.log("1111",c),Object(n.jsx)("h2",{className:"content__title",children:"all"===t?"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b":c[t]})},_="ADD_TO_CART",L="ADD_EXISTING_ITEM",z="HANDLE_INCREMENT",y="HANDLE_DECREMENT",E="REMOVE_FROM_CART",I="CLEAR_CART",M=c(24),B=c.n(M),P=function(e){var t=e.imageUrl,c=e.name,i=e.types,s=e.sizes,a=e.price,o=Object(d.d)((function(e){return e.cart.productsInCart})),j=Object(d.c)(),l=Object(r.useState)(i[0]),u=Object(p.a)(l,2),b=u[0],h=u[1],O=Object(r.useState)(s[1]),x=Object(p.a)(O,2),m=x[0],v=x[1],C=Object(r.useState)(a[1]),f=Object(p.a)(C,2),g=f[0],w=f[1];return Object(n.jsxs)("div",{className:"pizza-block",children:[Object(n.jsx)("img",{className:"pizza-block__image",src:t,alt:"Pizza"}),Object(n.jsx)("h4",{className:"pizza-block__title",children:c}),Object(n.jsxs)("div",{className:"pizza-block__selector",children:[Object(n.jsx)("ul",{children:i.map((function(e,t){return Object(n.jsx)("li",{className:B()({active:e===b}),onClick:function(){h(e)},children:e},t)}))}),Object(n.jsx)("ul",{children:s.map((function(e,t){return Object(n.jsxs)("li",{onClick:function(){return function(e,t){v(e),w(a[t])}(e,t)},className:B()({active:m===e}),children:[e," \u0441\u043c."]},t)}))})]}),Object(n.jsxs)("div",{className:"pizza-block__bottom",children:[Object(n.jsxs)("div",{className:"pizza-block__price",children:[g," \u20bd"]}),Object(n.jsxs)("div",{onClick:function(){var e=o.findIndex((function(e){return e.name===c&&e.type===b&&e.size===m}));j(e>=0?function(e,t){return{type:L,payload:{index:e,price:t}}}(e,g):function(e,t,c,n,r){return{type:_,payload:{type:e,size:t,price:c,img:n,name:r}}}(b,m,g,t,c))},className:"button button--outline button--add",children:[Object(n.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(n.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})},V=c(10),H=c(25),R=function(e){return e.app.currentSortingOption},S=function(e){return e.app.currentFilter},T=function(e){return e.app.filters},Z=function(e){return e.cart.productsInCart},A=function(e){return e.cart.productsInCart.length},W=function(e){return e.cart.productsInCart.reduce((function(e,t){return e+t.pizzaPrice*t.quantity}),0)},D=Object(H.a)([S,function(e){return e.app.pizzas},T],(function(e,t,c){return"all"===e?t:t.filter((function(t){return t.category.toLowerCase()===c[e].toLowerCase()}))})),q=Object(H.a)([R,D],(function(e,t){return"default"===e?t:"asc"===e?Object(V.a)(t).sort((function(e,t){return e.price[0]-t.price[0]})):"desc"===e?Object(V.a)(t).sort((function(e,t){return t.price[0]-e.price[0]})):"alph"===e?Object(V.a)(t).sort((function(e,t){return e.name>t.name?1:-1})):void 0})),F=Object(d.b)((function(e){return{sortedPizzas:q(e),filter:S(e),filters:T(e),sortingOptions:(t=e,t.app.sortingOptions),currentSortingOption:R(e),pizzas:"default"===R(e)?D(e):q(e),cart:Z(e),orderNumber:A(e),orderPrice:W(e)};var t}))((function(e){var t=e.pizzas,c=e.filter,i=e.filters,s=e.sortingOptions,a=e.currentSortingOption,o=e.cart,j=e.orderNumber,l=e.orderPrice;console.log("cart",o),console.log("order number",j);var u=Object(d.c)();Object(r.useEffect)((function(){w(u)}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(b,{orderPrice:l}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"content__top",children:[Object(n.jsx)(h,{items:i,onFilter:function(e){return u(function(e){return{type:C,payload:e}}(e))},filter:c}),Object(n.jsx)(k,{sortItems:s,currentSortingOption:a})]}),Object(n.jsx)(N,{filter:c}),Object(n.jsx)("div",{className:"content__items",children:t&&t.map((function(e,t){var c=e.id,r=e.imageUrl,i=e.name,s=e.types,a=e.sizes,o=e.price,j=e.category,l=e.rating;return Object(n.jsx)(P,{imageUrl:r,name:i,types:s,sizes:a,price:o,category:j,rating:l},c)}))})]})})]})})})),U=c.p+"static/media/empty-cart.db905d1f.png",G=function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(l.a,{to:"./pizza-typescript",children:Object(n.jsx)(j,{})}),Object(n.jsx)("div",{className:"header__cart",children:Object(n.jsxs)("div",{className:"button button--cart",children:[Object(n.jsx)("span",{children:"0 \u20bd"}),Object(n.jsx)("div",{className:"button__delimiter"}),Object(n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(n.jsx)("span",{})]})})]})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"container container--cart",children:Object(n.jsxs)("div",{className:"cart cart--empty",children:[Object(n.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(n.jsx)("span",{children:"\ud83d\ude15"})]}),Object(n.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(n.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(n.jsx)("img",{src:U,alt:"Empty cart"}),Object(n.jsx)(l.a,{to:"/pizza-typescript",className:"button button--black",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})})})]})},J=function(e){var t=e.path,c=e.name,r=e.doughType,i=e.size,s=e.quantity,a=e.price,o=e.total,j=e.index,l=e.onRemove,d=e.onIncrement,u=e.onDecrement;return Object(n.jsxs)("div",{className:"cart__item",children:[Object(n.jsx)("div",{className:"cart__item-img",children:Object(n.jsx)("img",{className:"pizza-block__image",src:t,alt:"Pizza"})}),Object(n.jsxs)("div",{className:"cart__item-info",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsxs)("p",{children:[r,", ",i,"."]})]}),Object(n.jsxs)("div",{className:"cart__item-count",children:[Object(n.jsx)("div",{onClick:function(){return u(j,a)},className:"button button--outline button--circle cart__item-count-minus",children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(n.jsx)("b",{children:s}),Object(n.jsx)("div",{onClick:function(){return d(j,a)},className:"button button--outline button--circle cart__item-count-plus",children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(n.jsx)("div",{className:"cart__item-price",children:Object(n.jsx)("b",{children:o})}),Object(n.jsx)("div",{onClick:function(){return l(j)},className:"cart__item-remove",children:Object(n.jsx)("div",{className:"button button--outline button--circle",children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},X=Object(d.b)((function(e){return{cart:Z(e),orderNumber:A(e),orderPrice:W(e)}}))((function(e){var t=e.cart,c=e.orderNumber,r=e.orderPrice,i=Object(d.c)(),s=function(e){return i({type:E,payload:e})},a=function(e,t){return i(function(e,t){return{type:z,payload:{index:e,price:t}}}(e,t))},o=function(e,t){return i(function(e,t){return{type:y,payload:{index:e,price:t}}}(e,t))};return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(l.a,{to:"/pizza-typescript",children:Object(n.jsx)(j,{})}),Object(n.jsx)(u,{orderPrice:r})]})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"container container--cart",children:Object(n.jsxs)("div",{className:"cart",children:[Object(n.jsxs)("div",{className:"cart__top",children:[Object(n.jsxs)("h2",{className:"content__title",children:[Object(n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(n.jsxs)("div",{onClick:function(){return i({type:I})},className:"cart__clear",children:[Object(n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(n.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(n.jsx)("div",{className:"content__items",children:t.length&&t.map((function(e,t){var c=e.id,r=e.imageUrl,i=e.name,j=e.type,l=e.size,d=e.quantity,u=e.pizzaPrice,b=e.totalPrice;return Object(n.jsx)(J,{path:r,name:i,doughType:j,size:l,quantity:d,price:u,total:b,index:t,onRemove:s,onIncrement:a,onDecrement:o},c)}))}),Object(n.jsxs)("div",{className:"cart__bottom",children:[Object(n.jsxs)("div",{className:"cart__bottom-details",children:[Object(n.jsxs)("span",{children:[" ","\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(n.jsxs)("b",{children:[c," \u0448\u0442."]})," "]}),Object(n.jsxs)("span",{children:[" ","\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(n.jsxs)("b",{children:[r," \u20bd"]})," "]})]}),Object(n.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(n.jsxs)(l.a,{to:"/pizza-typescript",className:"button button--outline button--add go-back-btn",children:[Object(n.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(n.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(n.jsx)("div",{className:"button pay-btn",children:Object(n.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})})})]})})),K=function(){var e=Object(d.d)((function(e){return e.cart.productsInCart}));return Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{path:"/pizza-typescript",component:F,exact:!0}),e.length?Object(n.jsx)(a.a,{path:"/cart",component:X,exact:!0}):Object(n.jsx)(a.a,{path:"/cart",component:G,exact:!0})]})},Q=function(){return Object(n.jsx)(K,{})},Y=c(30),$=c(31),ee=c(7),te=c(32),ce=c(17),ne=c(33),re=c.n(ne),ie=c(2),se={pizzas:[],filters:{all:"\u0412\u0441\u0435",meat:"\u041c\u044f\u0441\u043d\u044b\u0435",vegi:"\u0412\u0435\u0433\u0438\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435",chicken:"\u0421 \u043a\u0443\u0440\u0438\u0446\u0435\u0439",fish:"\u0421 \u0440\u044b\u0431\u043e\u0439",spicy:"\u041e\u0441\u0442\u0440\u044b\u0435"},currentFilter:"all",sortingOptions:{default:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",asc:"\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0448\u0435\u0432\u044b\u0435",desc:"\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u043e\u0440\u043e\u0433\u0438\u0435",alph:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"},currentSortingOption:"default"},ae={productsInCart:[],orderNumber:0,orderPriceTotal:0},oe={key:"root",storage:re.a,whiteList:["cart"]},je=Object(ee.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case v:return Object(ie.a)(Object(ie.a)({},e),{},{pizzas:n});case C:return console.log("filter from set",n),Object(ie.a)(Object(ie.a)({},e),{},{currentFilter:n});case f:return console.log("sorting option ",n),Object(ie.a)(Object(ie.a)({},e),{},{currentSortingOption:n});default:return Object(ie.a)({},e)}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case _:return console.log("adding to cart!!!",n),Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:e.productsInCart.concat({id:Math.random(),imageUrl:n.img,name:n.name,type:n.type,size:n.size,quantity:1,pizzaPrice:n.price,totalPrice:n.price})});case L:var r=n.index,i=n.price,s=Object(V.a)(e.productsInCart);return s[r].quantity=s[r].quantity+1,s[r].totalPrice=s[r].totalPrice+i,Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:s});case z:console.log(n);var a=Object(V.a)(e.productsInCart);return a[n.index].quantity+=1,a[n.index].totalPrice+=n.price,Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:a});case y:console.log(n);var o=Object(V.a)(e.productsInCart);return o[n.index].quantity>1&&(o[n.index].quantity-=1,o[n.index].totalPrice-=n.price),Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:o});case E:var j=Object(V.a)(e.productsInCart);return j.splice(n,1),Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:j});case I:return Object(ie.a)(Object(ie.a)({},e),{},{productsInCart:[]});default:return Object(ie.a)({},e)}}}),le=Object(ce.a)(oe,je),de=[$.a],ue=Object(ee.createStore)(le,Object(te.composeWithDevTools)(ee.applyMiddleware.apply(void 0,de))),be=Object(ce.b)(ue),pe=c(5),he=Object(pe.a)();s.a.render(Object(n.jsx)(a.b,{history:he,children:Object(n.jsx)(d.a,{store:ue,children:Object(n.jsx)(Y.a,{persistor:be,children:Object(n.jsx)(Q,{})})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.67c0d6ff.chunk.js.map