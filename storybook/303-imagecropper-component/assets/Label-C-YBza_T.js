import{R as a}from"./index-Cs7sjTYM.js";import{c as p}from"./clsx-B-dksMZM.js";import{C as d}from"./PropsContextProvider-C-7PaZ52.js";import{f as $}from"./flowComponent-S4fYrZHa.js";import{a as x}from"./useLocalizedStringFormatter-Ccpl5Mb8.js";import{$ as C}from"./Label-8PgMpAzA.js";const N="flow--label",E="flow--label--disabled",e={label:N,disabled:E},L={"de-DE":{"label.optional":"(optional)"},"en-EN":{"label.optional":"(optional)"}},u=$("Label",l=>{const{children:t,className:o,optional:s,isDisabled:r,refProp:n,unstyled:i=!1,...b}=l,f=x(L),c=i?o:p(e.label,r&&e.disabled,o),m=" "+f.format("label.optional");return a.createElement(d,null,a.createElement(C,{...b,className:c,ref:n},t,s&&m))});u.__docgenInfo={description:"",methods:[],displayName:"Label"};export{u as L};