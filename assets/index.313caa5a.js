import{D as e,a as t,b as s,M as a,c as n,d as r,e as o,r as l,f as c,g as i,h as A,i as u,j as g,k as d,o as m,l as h,w as k,m as y,F as U,n as f,t as J,p as I,q as b}from"./vendor.4025560f.js";const Q=[{name:"projects",href:"#",current:!0},{name:"blog",href:"#",current:!1},{name:"contact",href:"#",current:!1}],S={components:{Disclosure:e,DisclosureButton:t,DisclosurePanel:s,Menu:a,MenuButton:n,MenuItem:r,MenuItems:o,BellIcon:l,MenuIcon:c,XIcon:i,SunIcon:A,MoonIcon:u},props:{theme:String},setup(){const e=g(!1);return{navigation:Q,open:e}},data:()=>({theme:"dark"}),methods:{toogle_mode(){let e=document.querySelector("html").classList;"light"===this.theme?(e.remove("dark"),this.theme="dark"):(e.add("dark"),this.theme="light")}}},E={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},v={class:"relative flex items-center justify-between h-16"},w={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},C=y("span",{class:"sr-only"},"Open main menu",-1),p={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},M={key:0,class:"flex-shrink-0 flex items-center"},x=y("img",{class:"block lg:hidden h-8 w-auto",src:"data:image/png;base64,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",alt:"About"},null,-1),D=y("img",{class:"hidden lg:block h-8 w-auto",src:"/assets/MercadosDark.c8a80e42.png",alt:"About"},null,-1),Z={key:1,class:"flex-shrink-0 flex items-center"},O=y("img",{class:"block lg:hidden h-8 w-auto",src:"data:image/png;base64,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",alt:"About"},null,-1),R=y("img",{class:"hidden lg:block h-8 w-auto",src:"/assets/Mercados.771c2c4b.png",alt:"About"},null,-1),W={class:"hidden sm:block sm:ml-6"},B={class:"flex space-x-4"},F={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},G={class:"px-2 pt-2 pb-3 space-y-1"};S.render=function(e,t,s,a,n,r){const o=d("MenuIcon"),l=d("XIcon"),c=d("DisclosureButton"),i=d("SunIcon"),A=d("MoonIcon"),u=d("DisclosurePanel"),g=d("Disclosure");return m(),h(g,{as:"nav",class:"bg-gray-100 dark:bg-gray-800"},{default:k((({open:e})=>[y("div",E,[y("div",v,[y("div",w,[y(c,{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:k((()=>[C,e?(m(),h(l,{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(m(),h(o,{key:0,class:"block h-6 w-6","aria-hidden":"true"}))])),_:2},1024)]),y("div",p,["light"===n.theme?(m(),h("div",M,[x,D])):(m(),h("div",Z,[O,R])),y("div",W,[y("div",B,[(m(!0),h(U,null,f(a.navigation,(e=>(m(),h("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"],"aria-current":e.current?"page":void 0},J(e.name),11,["href","aria-current"])))),128))])])]),y("div",F,[y("button",{onClick:t[1]||(t[1]=(...e)=>r.toogle_mode&&r.toogle_mode(...e)),class:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none \r\n          focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},["dark"===n.theme?(m(),h(i,{key:0,class:"h-6 w-6"})):(m(),h(A,{key:1,class:"h-6 w-6"}))])])])]),y(u,{class:"sm:hidden"},{default:k((()=>[y("div",G,[(m(!0),h(U,null,f(a.navigation,(e=>(m(),h("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"],"aria-current":e.current?"page":void 0},J(e.name),11,["href","aria-current"])))),128))])])),_:1})])),_:1})};const q={setup:()=>({})},K=I()(((e,t,s,a,n,r)=>(m(),h("h1",null,"XD"))));q.render=K,q.__scopeId="data-v-30a58cea";b({expose:[],setup:e=>(e,t)=>(m(),h(U,null,[y(S),y(q,{msg:"About!"})],64))}).mount("#app");
