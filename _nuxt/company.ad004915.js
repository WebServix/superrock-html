import{s as g,_ as f,a as h}from"./sendRequest.78a791a5.js";import{_ as y,a as v,b,c as x}from"./Section.17b0c6f1.js";import{_ as w}from"./Contact.8d42ad1f.js";import{r as C,a as H,w as M,b as B,e as $,f as e,u as a,h as o,o as k}from"./entry.6b2ea77b.js";import{u as A}from"./composables.7b1822d3.js";const E={id:"company-snapshot"},L={id:"services-section"},P={id:"partners-section"},R={id:"form-section"},z={__name:"company",async setup(S){let s,i;const t=C({}),m=H(),r=([s,i]=M(()=>g("company",null,"?populate=deep")),s=await s,i(),s);if(r.value)t.value=r.value.data.attributes,A({title:t.value.google_title,meta:[{name:"description",content:t.value.google_description},{name:"og:title",content:t.value.google_title},{name:"og:type",content:"website"},{name:"og:url",content:m.BASE_URL},{name:"og:image",content:t.value.Header.photo.data.attributes.url},{name:"og:description",content:t.value.google_description},{name:"twitter:card",content:"summary_large_image"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]});else throw B({statusCode:404,statusMessage:"Page Not Found index"});return(j,q)=>{const l=f,d=y,n=x,c=v,_=b,p=w,u=h;return k(),$("div",null,[e(l),e(d,{header:a(t).Header},null,8,["header"]),e(n,{type:"secondary",position:"negative"}),o("section",E,[e(c,{data:a(t).Description},null,8,["data"])]),e(n,{type:"primary"}),o("section",L,[e(c,{data:a(t).Service},null,8,["data"]),e(_,{data:a(t).List_Services.data.attributes.Items},null,8,["data"])]),e(n,{type:"tertiary"}),o("section",P,[e(c,{data:a(t).Partners},null,8,["data"]),e(_,{data:a(t).List_Partners.data.attributes.Items},null,8,["data"])]),e(n,{type:"primary"}),o("section",R,[e(p,{data:a(t).Contact},null,8,["data"])]),e(u)])}}};export{z as default};
