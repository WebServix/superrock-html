import{s as j,_ as w,a as E,b as F,c as C}from"./Footer.93f4d949.js";import{_ as B}from"./Contact.50225506.js";import{r as m,a as O,b as S,w as A,e as H,f as a,F as K,h as R,u as _,i as d,o as s,c as l,j as o}from"./entry.b799378b.js";import{u as $}from"./composables.0c245acc.js";const L={key:1},M={key:2},N={__name:"[page]",async setup(V){let r,u;const n=m({}),i=m([]),g=O(),h=S(),c=([r,u]=A(()=>j("generic-pages",null,"?populate=deep")),r=await r,u(),r).value.data.filter(e=>e.attributes.url==g.params.page);if(c&&c.length>0){i.value=c[0].attributes.dynamic,n.value=c[0].attributes;let e=n.value.dynamic.filter(p=>p.__component=="page-structure.header");e&&e.length>0&&(e=e[0]),$({title:n.value.SEO.google_title,meta:[{name:"description",content:n.value.SEO.google_description},{name:"og:title",content:n.value.SEO.google_title},{name:"og:type",content:"website"},{name:"og:url",content:h.BASE_URL},{name:"og:image",content:e&&e.photo?e.photo.data.attributes.url:""},{name:"og:description",content:n.value.SEO.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css",rel:"stylesheet"},{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]})}else throw H({statusCode:404,statusMessage:"Page Not Found index"});return(e,p)=>{const f=E,y=F,b=B,v=C,k=w;return s(),a("div",null,[(s(!0),a(K,null,R(_(i),(t,x)=>(s(),a("div",null,[t.__component=="page-structure.header"?(s(),l(f,{key:0,header:t},null,8,["header"])):o("",!0),t.__component=="page-structure.section"?(s(),a("section",L,[t.__component=="page-structure.section"?(s(),l(y,{key:0,data:t},null,8,["data"])):o("",!0)])):o("",!0),t.__component=="page-structure.contact-form"?(s(),a("section",M,[d(b,{data:t},null,8,["data"])])):o("",!0),t.__component=="page-structure.section"&&x!=_(i).length-1?(s(),l(v,{key:3,type:"primary"})):o("",!0)]))),256)),d(k)])}}};export{N as default};
