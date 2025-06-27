import{g as getPageData}from"./dataUtils-BBW_Av8F.js";import{d as defineComponent,r as ref,o as onMounted,c as createElementBlock,a as renderList,F as Fragment,p as provide,b as resolveComponent,e as openBlock,f as createBlock}from"./index-CfNFHChY.js";const _sfc_main=defineComponent({__name:"Runtime",setup(__props){const elements=ref([]),eventList=[{name:"hello",type:"function",content:`function hello(a,b){
        alert(a+b)
        return a+b
    }`},{name:"world",type:"function",content:`function world(){
        console.log('print world')
    }`}],fns={};function handleEventList(){eventList.forEach(item=>{eval(`const ${item.name} = ${item.content};fns.${item.name}=${item.name};`)})}return handleEventList(),provide("fns",fns),provide("edit",!1),onMounted(()=>{const e=getPageData();elements.value=e}),(e,o)=>{const t=resolveComponent("CompRender");return openBlock(!0),createElementBlock(Fragment,null,renderList(elements.value,n=>(openBlock(),createBlock(t,{key:n.id,element:n},null,8,["element"]))),128)}}});export{_sfc_main as default};
