import{R as e}from"./index-Cs7sjTYM.js";import{P as m,L as u,f as p}from"./flowComponent-vB4GK26_.js";import{c as f}from"./clsx-B-dksMZM.js";import{P as g}from"./PropsContextProvider-BmJWDS_p.js";const I="flow--section--section-header",H="flow--section--section-header--actions",r={sectionHeader:I,actions:H},l=t=>{const{children:n,className:o}=t,s=f(r.sectionHeader,o),a={Switch:{labelPosition:"leading",tunnelId:"actions"},Button:{size:"s",tunnelId:"actions"},ContextMenuTrigger:{tunnelId:"actions",Button:{tunnelId:null}},PopoverTrigger:{tunnelId:"actions",Button:{tunnelId:null}},ModalTrigger:{tunnelId:"actions",Button:{tunnelId:null}},Action:{tunnelId:"actions",Button:{tunnelId:null}},Heading:{level:2,className:r.heading,levelVisual:4}};return e.createElement("header",{className:s},e.createElement(g,{props:a},e.createElement(m,null,n,e.createElement("div",{className:r.actions},e.createElement(u,{id:"actions"})))))};l.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const h=p("Header",t=>{const{children:n,refProp:o,elementType:s="header",renderSectionHeader:a,className:c,...i}=t;if(a)return e.createElement(l,{className:c},n);const d=s;return e.createElement(d,{...i,className:c,ref:o},n)});h.__docgenInfo={description:"",methods:[],displayName:"Header"};export{h as H};