import{u as _,g as h}from"./Footer.0fcbe7c3.js";import{b,w as g,r as y,I as w,o as v,f as N,x as e,y as m,u as a,L as u,M as p,N as x}from"./entry.d1ac9fbe.js";const B=async(c,l,r)=>{const i=b(),o={headers:{"accept-encoding":"*",Authorization:"Bearer "+i.strapi_bearer}};let t=i.STRAPI_URL+"/sendMail";const{data:d,error:f}=await _(t,{method:"POST",body:{emailTo:c,fullName:l,message:r},headers:o.headers},"$ZM5rYe5vyB");return d},M={class:"section-wrapper form"},S=["onSubmit"],R={for:"name"},U=["placeholder"],V={for:"email"},q=["placeholder"],A={for:"message"},C=["placeholder"],I={class:"btn btn-primary",type:"submit"},D={__name:"Contact",props:{data:Object},async setup(c){let l,r;const i=c,o=([l,r]=g(()=>h()),l=await l,r(),l),t=y({fullName:"",message:"",email:""});async function d(){await B(t.value.email,t.value.fullName,t.value.message)}return w(i),(f,s)=>(v(),N("div",M,[e("form",{onSubmit:x(d,["prevent"])},[e("fieldset",null,[e("ul",null,[e("li",null,[e("label",R,m(a(o)["contact.form.fullName.label"]),1),u(e("input",{type:"text",id:"name",placeholder:a(o)["contact.form.fullName.placeholder"],"onUpdate:modelValue":s[0]||(s[0]=n=>a(t).fullName=n),required:""},null,8,U),[[p,a(t).fullName]])]),e("li",null,[e("label",V,m(a(o)["contact.form.email.label"]),1),u(e("input",{type:"email",id:"email",placeholder:a(o)["contact.form.email.placeholder"],"onUpdate:modelValue":s[1]||(s[1]=n=>a(t).email=n),required:""},null,8,q),[[p,a(t).email]])]),e("li",null,[e("label",A,m(a(o)["contact.form.message.label"]),1),u(e("textarea",{name:"message",id:"message","onUpdate:modelValue":s[2]||(s[2]=n=>a(t).message=n),rows:"10",placeholder:a(o)["contact.form.message.placeholder"],required:""},null,8,C),[[p,a(t).message]])])]),e("button",I,m(a(o)["contact.form.button.send"]),1)])],40,S)]))}};export{D as _};
