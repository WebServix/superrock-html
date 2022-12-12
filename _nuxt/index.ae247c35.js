import{s as v,_ as b,b as g,a as y}from"./sendRequest.78a791a5.js";import{_ as f}from"./Carousel.7e56ddb3.js";import{r as w,a as x,w as j,b as I,e as n,f as o,h as e,A as i,u as s,B as C,F as D,D as M,t as k,o as c}from"./entry.6b2ea77b.js";import{u as O}from"./composables.7b1822d3.js";const A={class:"header-content"},B={class:"px-4 py-5 my-5 hero"},F={class:"display-5 hero-title animate__animated animate__fadeInDown"},N={class:"col-lg-6 mx-auto animate__animated animate__fadeInUp"},R={class:"lead mb-4 hero-subtitle"},E=e("div",{class:"divider-wrapper negative animate__animated animate__fadeInDown"},[e("div",{class:"divider divider-secondary"},[e("div",{class:"divider-content"},[e("i",{class:"bx bx-chevron-down bx-fade-down"})])])],-1),L={id:"company-section"},S={class:"section-wrapper right"},U={class:"section-text animate__animated animate__fadeInLeft"},V=e("div",{class:"chip primary-chip"},"Our company",-1),q={class:"section-title"},z={class:"section-subtitle"},H=e("div",{class:"section-button animate__animated animate__fadeInRight"},[e("a",{href:"#",class:"btn btn-primary"}," OUR COMPANY ")],-1),K=e("div",{class:"divider-wrapper animate__animated animate__fadeInDown"},[e("div",{class:"divider divider-tertiary"},[e("div",{class:"divider-content"},[e("i",{class:"bx bx-chevron-down"})])])],-1),P={id:"projects-section",class:"primary-bg"},T={class:"section-wrapper centered"},G={class:"section-text"},W=e("div",{class:"chip primary-chip"},"Our projects",-1),Y={class:"section-title"},$={class:"section-subtitle"},J={class:"carousel-wrapper"},Q=e("div",{class:"divider-wrapper animate__animated animate__fadeInDown"},[e("div",{class:"divider divider-primary"},[e("div",{class:"divider-content"},[e("i",{class:"bx bx-chevron-down"})])])],-1),Z={id:"services-section"},X={class:"section-wrapper full-width"},ee={class:"section-text animate__animated animate__fadeInLeft"},te=e("div",{class:"chip primary-chip"},"Our services",-1),se={class:"section-title"},ie={class:"section-subtitle"},ae={class:"section-wrapper grid four"},oe={class:"grid-element"},ne={class:"grid-element-title"},ce=e("div",{class:"divider-wrapper animate__animated animate__fadeInDown"},[e("div",{class:"divider divider-primary"},[e("div",{class:"divider-content"},[e("i",{class:"bx bx-chevron-down"})])])],-1),re={id:"form-section"},de={class:"section-wrapper centered"},le={class:"section-text"},_e=e("div",{class:"chip primary-chip"},"Contact us",-1),pe={class:"section-title"},me={class:"section-subtitle"},he=k('<div class="section-wrapper form"><form action="submit"><fieldset><ul><li><label for="name">Full name</label><input type="text" id="name" placeholder="Type here your full name"></li><li><label for="email">Email</label><input type="email" id="email" placeholder="Type here your email"></li><li><label for="">You</label><div class="options-container"><div class="radio-btn-option"><input type="radio" id="partner" name="radio-option" value="want to work with us"><p>want to work with us</p></div><div class="radio-btn-option"><input type="radio" id="buyer" name="radio-option" value="want to implement a project"><p>want to implement a project</p></div><div class="radio-btn-option"><input type="radio" id="seller" name="radio-option" value="sell a property"><p>sell a property</p></div></div></li><li><label for="message">Message</label><textarea name="message" id="message" rows="10" placeholder="Type your message here"></textarea></li></ul><button class="btn btn-primary" type="submit">Send</button></fieldset></form></div>',1),xe={__name:"index",async setup(ue){let a,r;const t=w({}),_=x(),d=([a,r]=j(()=>v("main-page",null,"?populate[1]=projects.photos&populate[0]=services&populate[2]=main_image")),a=await a,r(),a);if(d.value)t.value=d.value.data.attributes,O({title:t.value.google_title,meta:[{name:"description",content:t.value.google_description},{name:"og:title",content:t.value.google_title},{name:"og:type",content:"website"},{name:"og:url",content:_.BASE_URL},{name:"og:image",content:t.value.main_image.data.attributes.url},{name:"og:description",content:t.value.google_description},{name:"twitter:card",content:"summary_large_image"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]});else throw I({statusCode:404,statusMessage:"Page Not Found index"});return(ve,be)=>{const p=b,m=g,h=f,u=y;return c(),n("div",null,[o(p),e("header",{class:"primary-header",style:C({background:`linear-gradient(2.25deg, #143544 1.86%, rgba(255, 255, 255, 0) 138.17%), url(${s(t).main_image.data.attributes.url}) `})},[e("div",A,[o(m),e("div",B,[e("h1",F,i(s(t).header_title),1),e("div",N,[e("p",R,i(s(t).header_subtitle),1)])])])],4),E,e("section",L,[e("div",S,[e("div",U,[V,e("h2",q,i(s(t).company_title),1),e("p",z,i(s(t).company_description),1)]),H])]),K,e("section",P,[e("div",T,[e("div",G,[W,e("h2",Y,i(s(t).projects_title),1),e("p",$,i(s(t).projects_description),1)])])]),e("section",J,[o(h,{data:s(t).projects.data,id:"projects-carousel"},null,8,["data"])]),Q,e("section",Z,[e("div",X,[e("div",ee,[te,e("h2",se,i(s(t).service_title),1),e("p",ie,i(s(t).service_description),1)])]),e("div",ae,[(c(!0),n(D,null,M(s(t).services,l=>(c(),n("div",oe,[e("div",ne,[e("h4",null,i(l.title),1)]),e("p",null,i(l.description),1)]))),256))])]),ce,e("section",re,[e("div",de,[e("div",le,[_e,e("h2",pe,i(s(t).contact_title),1),e("p",me,i(s(t).contact_description),1)])]),he]),o(u)])}}};export{xe as default};
