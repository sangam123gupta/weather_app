(this.webpackJsonpsangamapp=this.webpackJsonpsangamapp||[]).push([[0],{36:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(30),s=a.n(n),l=(a(36),a(11)),r=a(12),i=a(14),o=a(13),d=a(9),j=a(0);function h(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(d.b,{className:"navbar-brand",to:"/",children:["Wheather App ",Object(j.jsx)("i",{className:"fa fa-cloud"})]}),Object(j.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse-navbar-collapse",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(d.b,{className:"nav-link",to:"/",children:["Home",Object(j.jsx)("i",{className:"fa fa-home"})]})}),Object(j.jsx)("li",{className:"nav-item ",children:Object(j.jsxs)(d.b,{className:"nav-link",to:"/weather",children:["Wheather",Object(j.jsx)("i",{className:"fa fa-cloud"})]})})]})})]})})})}function b(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"d-flex justify-content-center bg-white content-container",style:{height:"500px"},children:Object(j.jsxs)("div",{className:"align-self-center ",style:{color:"black"},children:[Object(j.jsx)("h1",{className:"brand-font d-inline pr-3",children:"Sangam Tech"}),Object(j.jsx)("i",{className:"fa fa-cloud fa-3x"}),Object(j.jsx)("p",{children:" Free Weather App"})]})})})}function x(e){return Object(j.jsxs)("div",{className:"row  ml-5",style:{width:"85%",marginleft:"20%"},children:[Object(j.jsx)("div",{className:"col-lg-5",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"",children:" Your  city Name is"}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"city",id:"city",value:e.city,onChange:e.change,"aria-describedby":"helpId",placeholder:""})]})}),Object(j.jsxs)("div",{className:"col-lg-1 text-center",children:[Object(j.jsx)("label",{htmlFor:""}),Object(j.jsx)("h5",{children:"Or"})]}),Object(j.jsx)("div",{className:"col-lg-5",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"",children:" Get Co-ordination"}),Object(j.jsx)("button",{className:"btn fa fa-crosshairs",onClick:e.getlocation}),Object(j.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(j.jsx)("div",{className:"bg-dark text-white rounded pt-1 pl-1 pr-1",children:"Lat:"}),Object(j.jsx)("input",{type:"number",step:"any",className:"form-control col mr-1",name:"lat",value:e.lat,onChange:e.change,id:"lat","aria-describedby":"helpId",placeholder:""}),Object(j.jsx)("div",{className:"bg-dark text-white rounded pt-1 pl-1 pr-1",children:"Lon:"}),Object(j.jsx)("input",{type:"number",step:"any",className:"form-control col ",name:"lon",value:e.lon,onChange:e.change,id:"lon","aria-describedby":"helpId",placeholder:""})]})]})}),Object(j.jsxs)("div",{className:"col-lg-1",children:[Object(j.jsx)("label",{htmlFor:"",children:"Search"}),Object(j.jsx)("button",{className:"btn btn-primary fa fa-search",onClick:e.search})]})]})}function u(e){var t;return console.log(e.recent),t=null==e.recent?"":e.recent.map((function(t,a){return console.log(t),Object(j.jsx)("li",{onClick:function(){return e.reSearch(t.lat,t.lon)},children:t.city},a)})),Object(j.jsxs)("div",{className:"card",style:{width:"15%",height:"80%",boxShadow:""},children:[Object(j.jsx)("h3",{children:"Recent"}),Object(j.jsx)("ul",{style:{backgroundColor:"dimgrey",color:"white",listStyleType:"none",cursor:"pointer"},children:t})]})}function m(){return Object(j.jsx)("div",{className:"row-20 mt-5 ml-5",children:Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("div",{class:"spinner-grow text-primary",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-secondary",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-success",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-danger",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-warning",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-info",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-light",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{class:"spinner-grow text-dark",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})})]})})}function O(e){var t,a=e.weatherData;function c(e){return(e-273.15).toFixed(2)+"\xb0C"}function n(e){return new Date(1e3*e).toLocaleTimeString()}return t=null==a?!0===e.isSearch?Object(j.jsx)("div",{className:"ml-5 mr-5",children:Object(j.jsx)(m,{})}):Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"text-center mt-3",children:"  City Name is "})}):Object(j.jsx)("div",{className:"row  bg-white",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("div",{className:"card ",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h4",{className:"card-title",children:[Object(j.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:""}),a.name," (",c(a.main.temp),") ",Object(j.jsx)("span",{className:"pl-2",children:a.weather[0].description})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("table",{className:"table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Feels like "}),Object(j.jsx)("td",{children:c(a.main.feels_like)})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Min Temp."}),Object(j.jsx)("td",{children:c(a.main.temp_min)})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Max Temp."}),Object(j.jsx)("td",{children:c(a.main.temp_max)})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Sun Rise"}),Object(j.jsx)("td",{children:n(a.sys.sunrise)})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Sun Set"}),Object(j.jsx)("td",{children:n(a.sys.sunset)})]})]})})})})})]})})})}),Object(j.jsx)(j.Fragment,{children:t})}var p=a(19),g=a(15),v=a.n(g),f=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).changehandler=function(e){var t=e.target.name;"city"===t?c.setState({city:e.target.value}):"lon"===t?c.setState({lon:e.target.value}):"lat"===t&&c.setState({lat:e.target.value})},c.searchHandler=function(){c.setState({isSearch:!0}),v.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(c.state.lat,"&lon=").concat(c.state.lon,"&appid=599e0bbcb3b43b7f972e234af2b87aac")).then((function(e){c.setState({city:e.data.name,weatherData:e.data},(function(){return c.recentHandler()}))})).catch((function(e){console.log(e)}))},c.recentHandler=function(){var e=c.state.recent;e.push({lat:c.state.lat,lon:c.state.lon,city:c.state.city}),c.setState({recent:e},(function(){window.localStorage.setItem("recent",JSON.stringify(c.state.recent))}))},c.reSearchHandler=function(e,t){c.setState({weatherData:null},(function(){c.setState({lat:e,lon:t},(function(){v.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(c.state.lat,"&lon=").concat(c.state.lon,"&appid=599e0bbcb3b43b7f972e234af2b87aac")).then((function(e){c.setState({city:e.data.name,weatherData:e.data})})).catch((function(e){console.log(e)}))}))}))},c.locationhandler=function(){c.setState({lat:"",lon:"",city:"",weatherData:null,isSearch:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){setTimeout((function(){c.setState({lat:e.coords.latitude,lon:e.coords.longitude}),v.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(c.state.lat,"&lon=").concat(c.state.lon,"&appid=599e0bbcb3b43b7f972e234af2b87aac")).then((function(e){c.setState({city:e.data.name,weatherData:e.data},(function(){return c.recentHandler()}))})).catch((function(e){console.log(e)}))}),500)}),(function(e){console.log(e)})):console.log("location is not supported ")},c.state={lat:"",lon:"",city:"",weatherData:null,isSearch:!1,recent:[]},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("recent"),t=null===e?[]:JSON.parse(e);this.setState({recent:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container pt-4  ",style:{height:"600px",display:"flex"},children:[Object(j.jsx)(u,{recent:this.state.recent,reSearch:this.reSearchHandler}),Object(j.jsxs)("div",{className:"  ml-5 w-50%",children:[Object(j.jsx)(x,{lat:this.state.lat,lon:this.state.lon,weatherData:this.state.weatherData,city:this.state.city,change:this.changehandler,getlocation:this.locationhandler,search:this.searchHandler}),Object(j.jsx)(O,{isSearch:this.state.isSearch,weatherData:this.state.weatherData})]})]})}}]),a}(p.Component),y=a(2),N=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"container-fluid p-0",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/weather",children:Object(j.jsx)(f,{})}),Object(j.jsx)(y.a,{path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(f,{})]})]})})}}]),a}(c.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};s.a.render(Object(j.jsx)("div",{children:Object(j.jsx)(N,{})}),document.getElementById("root")),w()}},[[62,1,2]]]);
//# sourceMappingURL=main.bd776003.chunk.js.map