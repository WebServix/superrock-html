import{s as b,b as y,c as v,_ as j,d as x,a as w}from"./Footer.dd7e185a.js";import{_ as C}from"./Carousel.cd4d6aa1.js";import{r as k,b as F,w as E,e as M,f as r,h as a,u as s,C as o,j as c,x as O,o as n}from"./entry.4769bb8c.js";import{u as S}from"./composables.3a2e2217.js";const B=O('<div class="section-wrapper centered"><div class="tab-links"><a href="#completed-projects" class="btn btn-tertiary">completed</a><a href="#current-projects" class="btn btn-tertiary">ongoing</a><a href="#future-projects" class="btn btn-tertiary">future</a></div></div>',1),V={key:0,id:"current-projects"},A=o("div",{class:"section-wrapper centered"},[o("h3",null,"On going projects")],-1),H={class:"carousel-wrapper"},K={key:1,id:"future-projects"},N=o("div",{class:"section-wrapper centered"},[o("h3",null,"Future projects")],-1),R={key:0,class:"carousel-wrapper"},$={key:2,id:"completed-projects"},q=o("div",{class:"section-wrapper centered"},[o("h3",null,"Completed projects")],-1),z={key:0,class:"carousel-wrapper"},Q={__name:"index",async setup(D){let i,l;const t=k({}),p=F(),d=([i,l]=E(()=>b("projects-page",null,"?populate=deep")),i=await i,l(),i);if(d.value)t.value=d.value.data.attributes,S({title:t.value.SEO.google_title,meta:[{name:"description",content:t.value.SEO.google_description},{name:"og:title",content:t.value.SEO.google_title},{name:"og:type",content:"website"},{name:"og:url",content:p.BASE_URL},{name:"og:image",content:t.value.header&&t.value.header.photo?t.value.header.photo.data.attributes.url:""},{name:"og:description",content:t.value.SEO.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]});else throw M({statusCode:404,statusMessage:"Page Not Found index"});return(G,L)=>{const _=j,m=y,h=x,g=v,u=C,f=w;return n(),r("div",null,[a(_),a(m,{header:s(t).header},null,8,["header"]),a(h,{type:"secondary",position:"negative"}),o("section",null,[a(g,{data:s(t).description,position:"centered"},null,8,["data"])]),B,s(t).structures.data.filter(e=>e.attributes.status=="Current").length>0?(n(),r("section",V,[A,o("section",H,[a(u,{data:s(t).structures.data.filter(e=>e.attributes.status=="Current")},null,8,["data"])])])):c("",!0),s(t).structures.data.filter(e=>e.attributes.status=="Future").length>0?(n(),r("section",K,[N,s(t).structures.data.filter(e=>e.attributes.status=="Future").length>0?(n(),r("section",R,[a(u,{data:s(t).structures.data.filter(e=>e.attributes.status=="Future")},null,8,["data"])])):c("",!0)])):c("",!0),s(t).structures.data.filter(e=>e.attributes.status=="Completed").length>0?(n(),r("section",$,[q,s(t).structures.data.filter(e=>e.attributes.status=="Completed").length>0?(n(),r("section",z,[a(u,{data:s(t).structures.data.filter(e=>e.attributes.status=="Completed")},null,8,["data"])])):c("",!0)])):c("",!0),a(f)])}}};export{Q as default};
