import{s as w,_ as E,a as F,b as C,c as M,d as B}from"./Footer.dd7e185a.js";import{_ as O}from"./Contact.eb1f2fc8.js";import{r as m,a as S,b as A,w as H,e as K,f as s,h as u,F as R,i as L,u as d,o as n,c as p,j as a}from"./entry.4769bb8c.js";import{u as V}from"./composables.3a2e2217.js";import"./getGeneralI18n.d1326774.js";const $={key:1},q={key:2},P={__name:"[page]",async setup(z){let r,_;const o=m({}),i=m([]),g=S(),h=A(),c=([r,_]=H(()=>w("generic-pages",null,"?populate=deep")),r=await r,_(),r).value.data.filter(e=>e.attributes.url==g.params.page);if(c&&c.length>0){i.value=c[0].attributes.dynamic,o.value=c[0].attributes;let e=o.value.dynamic.filter(l=>l.__component=="page-structure.header");e&&e.length>0&&(e=e[0]),V({title:o.value.SEO.google_title,meta:[{name:"description",content:o.value.SEO.google_description},{name:"og:title",content:o.value.SEO.google_title},{name:"og:type",content:"website"},{name:"og:url",content:h.BASE_URL},{name:"og:image",content:e&&e.photo?e.photo.data.attributes.url:""},{name:"og:description",content:o.value.SEO.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]})}else throw K({statusCode:404,statusMessage:"Page Not Found index"});return(e,l)=>{const f=E,y=C,b=M,x=O,k=B,v=F;return n(),s("div",null,[u(f),(n(!0),s(R,null,L(d(i),(t,j)=>(n(),s("div",null,[t.__component=="page-structure.header"?(n(),p(y,{key:0,header:t},null,8,["header"])):a("",!0),t.__component=="page-structure.section"?(n(),s("section",$,[t.__component=="page-structure.section"?(n(),p(b,{key:0,data:t},null,8,["data"])):a("",!0)])):a("",!0),t.__component=="page-structure.contact-form"?(n(),s("section",q,[u(x,{data:t},null,8,["data"])])):a("",!0),t.__component=="page-structure.section"&&j!=d(i).length-1?(n(),p(k,{key:3,type:"primary"})):a("",!0)]))),256)),u(v)])}}};export{P as default};
