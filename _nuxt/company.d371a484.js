import{s as v,b,c as x,_ as M,d as $,a as j}from"./Footer.86fd37af.js";import{I as k,o as i,f as c,F as w,i as H,x as o,u as s,r as C,b as F,w as L,e as A,h as e}from"./entry.8dd773f7.js";import{_ as B}from"./Contact.be2a5755.js";import{u as I}from"./composables.b317355c.js";const K={class:"section-wrapper grid four"},R={class:"grid-element"},E={class:"grid-element-title"},T={key:0},V=["innerHTML"],q=["src"],z=["innerHTML"],D={__name:"Columns",props:{data:Array},setup(_){const a=_,{data:r}=k(a);return(t,p)=>(i(),c("div",K,[(i(!0),c(w,null,H(s(r),(n,m)=>(i(),c("div",R,[o("div",E,[n.logo&&n.logo.data==null?(i(),c("h4",T,[o("span",{innerHTML:n.title},null,8,V)])):(i(),c("img",{key:1,src:n.logo.data.attributes.url,alt:"logo"},null,8,q))]),o("div",null,[o("span",{innerHTML:n.text},null,8,z)])]))),256))]))}},G={id:"company-snapshot"},N={id:"services-section"},U={id:"partners-section"},J={id:"form-section"},X={__name:"company",async setup(_){let a,r;const t=C({}),p=F(),n=([a,r]=L(()=>v("company",null,"?populate=deep")),a=await a,r(),a);if(n.value)t.value=n.value.data.attributes,I({title:t.value.google_title,meta:[{name:"description",content:t.value.google_description},{name:"og:title",content:t.value.google_title},{name:"og:type",content:"website"},{name:"og:url",content:p.BASE_URL},{name:"og:image",content:t.value.header.photo.data.attributes.url},{name:"og:description",content:t.value.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]});else throw A({statusCode:404,statusMessage:"Page Not Found index"});return(m,O)=>{const g=M,h=b,l=$,d=x,u=D,y=B,f=j;return i(),c("div",null,[e(g),e(h,{header:s(t).header},null,8,["header"]),e(l,{type:"secondary",position:"negative"}),o("section",G,[e(d,{data:s(t).description},null,8,["data"])]),e(l,{type:"primary"}),o("section",N,[e(d,{data:s(t).service},null,8,["data"]),e(u,{data:s(t).list_services.data.attributes.Items},null,8,["data"])]),e(l,{type:"tertiary"}),o("section",U,[e(d,{data:s(t).partners},null,8,["data"]),e(u,{data:s(t).list_partners.data.attributes.Items},null,8,["data"])]),e(l,{type:"primary"}),o("section",J,[e(d,{data:s(t).contact_section,position:"centered"},null,8,["data"]),e(y,{data:s(t).contact_form},null,8,["data"])]),e(f)])}}};export{X as default};