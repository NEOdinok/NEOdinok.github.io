import{Q as J}from"./QPage.a68ccd5a.js";import{a as B,u as U,Q as k}from"./QSelect.fab3c088.js";import{r as n,a4 as E,w as V,a7 as y,ag as w,ab as c,a9 as I,aL as F,f as Q,al as h,ae as C,aJ as P,a as L,a8 as q,aM as $,af as T,ac as x,ad as G,aO as A,o as K}from"./index.fe5df578.js";import{Q as O}from"./QForm.7b19a9ef.js";import{u as W,r as D}from"./index.868c2785.js";import{_ as X}from"./ConfirmationModal.99570e08.js";import"./format.40ec3e95.js";const Y={class:"q-pa-md"},Z=C("h5",{class:"q-pb-md"},"Create Product Subcategory",-1),ee={key:0,class:"q-pb-lg"},ae={__name:"CreateSubcategory",props:{propCategories:{type:Array,default:[]},categories:{type:Array,default:[]}},emits:["createdSubcategory"],setup(_,{emit:f}){const d=_,{triggerPositive:S,triggerNegative:N}=B(),{createSubcategoryInFirebase:b}=U(),o=n(""),u=n([]),m=n(null),r=n(null),v=n(null);E(),V(()=>d.categories,()=>{u.value=d.categories.map(i=>({label:i.categoryName,value:i.categoryId}))});function R(){v.value.validate().then(i=>{i?t():N("Please, fill in all the fields")})}const p=()=>{m.value=null,r.value=null,v.value.reset()},t=async()=>{try{const i={subCategoryName:m.value,subCategoryRoute:r.value};await b(o.value,i),S(`${m.value} subcategory created`),p(),f("createdSubcategory",o.value)}catch(i){console.warn({error:i})}};return(i,g)=>(y(),w("div",Y,[Z,c(O,{ref_key:"createSubcategoryForm",ref:v,onSubmit:R},{default:I(()=>[c(k,{class:"q-pb-lg",outlined:"",modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=l=>o.value=l),options:u.value,label:"Parent category route"},null,8,["modelValue","options"]),o.value?(y(),w("div",ee,[c(F,{class:"q-pb-lg",modelValue:m.value,"onUpdate:modelValue":g[1]||(g[1]=l=>m.value=l),outlined:"",label:"Subcategory name *","lazy-rules":"ondemand",rules:[l=>l&&l.length>0||"Name must be filled"]},null,8,["modelValue","rules"]),c(F,{class:"q-pb-lg",modelValue:r.value,"onUpdate:modelValue":g[2]||(g[2]=l=>r.value=l),outlined:"",label:"Subcategory route *",prefix:"/","lazy-rules":"ondemand",rules:[l=>l&&l.length>0||"Route must be filled"]},null,8,["modelValue","rules"]),c(Q,{unelevated:"",rounded:"",align:"between","icon-right":"check",color:"primary",label:"Create",type:"submit"})])):h("",!0)]),_:1},512)]))}},te={class:"q-pa-md"},oe=C("h5",{class:"q-pb-md"},"Edit Product Subcategory",-1),re={key:0,class:"q-pb-lg"},se={key:1},ue={class:"row q-gutter-md"},le={class:"q-ml-sm"},ne={__name:"EditSubcategory",props:{categories:{type:Array,default:[]},subcategories:{type:Array,default:[]}},emits:["updatedSubcategory","selectedNewParentCategory","deletedSubcategory"],setup(_,{emit:f}){const d=_,{deleteSubcategoryFromFirebase:S,updateSubcategoryInFirebase:N}=U(),{triggerPositive:b}=B(),o=n(""),u=n(""),m=n([]),r=n(""),v=n([]),R=n(null),p=n(!1),t=P({subCategoryName:"",subCategoryRoute:""}),i={subCategoryName:{required:D},subCategoryRoute:{required:D}},g=P({subCategoryName:"",subCategoryRoute:""}),l=W(i,t),z=L(()=>t.subCategoryName!=g.subCategoryName||t.subCategoryRoute!=g.subCategoryRoute);V(()=>d.subcategories,()=>{if(v.value=d.subcategories.map(a=>({label:a.subCategoryName,value:a.subCategoryId})),o.value){let a=d.subcategories.find(s=>s.subCategoryId===o.value);const e={label:a.subCategoryName,value:a.subCategoryId};r.value=e,o.value=""}}),V(()=>d.categories,()=>{m.value=d.categories.map(a=>({label:a.categoryName,value:a.categoryId}))}),V(u,a=>{v.value=[],r.value="",t.subCategoryName="",t.subCategoryRoute="",o.value="",f("selectedNewParentCategory",a)}),V(r,a=>{if(a.value){let e=d.subcategories.find(s=>s.subCategoryId===a.value);g.subCategoryName=e.subCategoryName,g.subCategoryRoute=e.subCategoryRoute,t.subCategoryName=e.subCategoryName,t.subCategoryRoute=e.subCategoryRoute}else return});const M=()=>{v.value=[],r.value="",t.subCategoryName="",t.subCategoryRoute="",R.value.reset()},j=async()=>{if(p.value=!1,!p.value)try{await S(u.value,r.value),b(`${t.subCategoryName} subcategory deleted`),M(),f("deletedSubcategory",u.value)}catch(a){console.warn({error:a})}},H=async()=>{try{const a={subCategoryId:A(r.value).value,subCategoryName:t.subCategoryName,subCategoryRoute:t.subCategoryRoute};o.value=A(r.value).value,await N(u.value,r.value,a),f("updatedSubcategory",u.value),b("Subcategory updated")}catch(a){console.warn({error:a})}};return(a,e)=>(y(),w("div",te,[oe,c(O,{ref_key:"editSubcategoryForm",ref:R,onSubmit:H},{default:I(()=>[c(k,{class:"q-pb-lg",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),options:m.value,outlined:"",label:"Parent category route"},null,8,["modelValue","options"]),u.value?(y(),w("div",re,[_.subcategories.length?(y(),q(k,{key:0,outlined:"",class:"q-pb-lg",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),options:v.value,label:"Subcategory"},null,8,["modelValue","options"])):(y(),w("p",se,"No subcategories. Add the first one on the left")),r.value?(y(),q(F,{key:2,outlined:"",class:"q-pb-lg",modelValue:t.subCategoryName,"onUpdate:modelValue":e[2]||(e[2]=s=>t.subCategoryName=s),label:"Edit name",onInput:e[3]||(e[3]=s=>$(l).subCategoryName.$touch()),error:$(l).subCategoryName.$invalid},null,8,["modelValue","error"])):h("",!0),r.value?(y(),q(F,{key:3,outlined:"",class:"q-pb-lg",modelValue:t.subCategoryRoute,"onUpdate:modelValue":e[4]||(e[4]=s=>t.subCategoryRoute=s),prefix:"/",label:"Edit route",onInput:e[5]||(e[5]=s=>$(l).subCategoryRoute.$touch()),error:$(l).subCategoryRoute.$invalid},null,8,["modelValue","error"])):h("",!0),C("div",ue,[c(Q,{unelevated:"",rounded:"",align:"between",color:"primary","icon-right":"delete",label:"Delete",onClick:e[6]||(e[6]=s=>p.value=!0)}),c(Q,{unelevated:"",rounded:"",align:"between","icon-right":"sync",color:"primary",label:"Update",disabled:!z.value,type:"submit"},null,8,["disabled"])]),c(X,{open:p.value,"onUpdate:open":e[7]||(e[7]=s=>p.value=s),onCancel:e[8]||(e[8]=s=>p.value=!1),onSubmit:j},{default:I(()=>[c(T,{icon:"error",color:"red","text-color":"white"}),C("span",le,[x("Are you sure you want to delete "),C("b",null,G(t.subCategoryName),1),x(" ?")])]),_:1},8,["open"])])):h("",!0)]),_:1},512)]))}};const ce={class:"row justify-center"},de={class:"col-12 col-sm-6 col-md-4"},ie={class:"col-12 col-sm-6 col-md-4"},fe={__name:"Subcategories",setup(_){E();const{getCategoryDocsFromFirebase:f,getSubcategoryDocsFromFirebase:d}=U(),S=n([]),N=n([]);K(async()=>{try{const{categoriesData:o}=await f();S.value=o.value}catch(o){console.warn({error:o})}});async function b(o){try{const{subcategoriesData:u}=await d(o);N.value=u.value}catch(u){console.error({error:u})}}return(o,u)=>(y(),q(J,null,{default:I(()=>[C("div",ce,[C("div",de,[c(ae,{categories:S.value,onCreatedSubcategory:b},null,8,["categories"])]),C("div",ie,[c(ne,{categories:S.value,subcategories:N.value,onUpdatedSubcategory:b,onSelectedNewParentCategory:b,onDeletedSubcategory:b},null,8,["categories","subcategories"])])])]),_:1}))}};export{fe as default};
