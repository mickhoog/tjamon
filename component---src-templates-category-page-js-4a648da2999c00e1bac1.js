(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1I+/":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return N}));var r=a("q1tI"),n=a.n(r),c=a("Bl7J"),o=(a("a1Th"),a("rE2o"),a("ioFf"),a("f3/d"),a("0mN4"),a("HEwt"),a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("T39b"),a("9eSz")),l=a.n(o),s=a("+ZDr"),i=a.n(s),u=a("wx14"),m=a("zLVn"),d=a("TSYQ"),p=a.n(d),f=a("vUet"),y=a("dbZe"),v=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,c=e.size,o=e.active,l=e.className,s=e.block,i=e.type,d=e.as,v=Object(m.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(f.a)(a,"btn"),E=p()(l,b,o&&"active",b+"-"+r,s&&b+"-block",c&&b+"-"+c);if(v.href)return n.a.createElement(y.a,Object(u.a)({},v,{as:d,ref:t,className:p()(E,v.disabled&&"disabled")}));t&&(v.ref=t),i?v.type=i:d||(v.type="button");var h=d||"button";return n.a.createElement(h,Object(u.a)({},v,{className:E}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var b=v;function E(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var g=function(e){var t,a;function r(t){var a,r,n,c,o;return(a=e.call(this,t)||this).handleProducts=function(e){var t=E(a.state.products);if(a.setState({selectedCategory:e}),"all"===e)a.setState((function(){return{wineProducts:t}}));else{var r=t.filter((function(t){return t.node.subcategory===e}));a.setState((function(){return{wineProducts:r}}))}},a.state={products:t.products,wineProducts:t.products,categories:(r=t.products,n=r.map((function(e){return e.node.subcategory})),c=new Set(n),o=Array.from(c),o=["all"].concat(E(o))),selectedCategory:""},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return this.state.products.length>0?n.a.createElement("section",{className:""},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row my-3"},n.a.createElement("div",{className:"col-10 mx-auto text-center"},this.state.categories.map((function(t,a){return n.a.createElement("span",{key:a,className:"btn text-capitalize m-3 categoryButton "+(e.state.selectedCategory===t?"selectedCategory":""),onClick:function(){e.handleProducts(t)},onKeyDown:function(){e.handleProducts(t)},role:"button","aria-pressed":"false",tabIndex:a},t)})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},this.state.wineProducts.map((function(e){return n.a.createElement("div",{key:e.node.id,className:"my-3 mx-auto text-center",xs:"12",sm:"12",md:"12",lg:"6",xl:"4"},n.a.createElement("div",{style:{backgroundColor:"white",paddingBottom:"15px",paddingTop:"15px",width:"265px"},className:"text-center"},n.a.createElement(l.a,{className:"img-fluid",fixed:e.node.image.childImageSharp.fixed}),n.a.createElement("div",null,e.node.subtitle.map((function(e,t){return n.a.createElement("span",{className:"subTitleSpanMenu text-capitalize",key:t},e)}))),n.a.createElement("div",null,n.a.createElement("p",{className:"wineTitle"},e.node.name)),n.a.createElement("div",null,n.a.createElement(i.a,{to:e.node.slug},n.a.createElement(b,{variant:"outline-dark"},"Details")))))}))))):n.a.createElement("section",{className:"menu py-5",style:{minHeight:"375px"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 col-sm-6 mx-auto text-center"},n.a.createElement("h1",null,"No products found."),n.a.createElement("h2",null,"Click ",n.a.createElement(i.a,{to:"/"},"Here")," to return to the home page")))))},r}(r.Component),N="4184606232";t.default=function(e){var t=e.data;return n.a.createElement(c.a,null,n.a.createElement("section",{className:"menu pt-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 col-sm-6 mx-auto text-center text-capitalize"},n.a.createElement("h1",null,"Our products"))),n.a.createElement("hr",null))),n.a.createElement(g,{products:t.allProductsJson.edges}))}}}]);
//# sourceMappingURL=component---src-templates-category-page-js-4a648da2999c00e1bac1.js.map