import{R as e}from"./index-B-o1Wr-g.js";import{c as b}from"./clsx-B-dksMZM.js";import{P as $}from"./PropsContextProvider-DWb7RnwM.js";import{B as u}from"./Button-DAS3cQ-r.js";import"./IconApp-C2QYsCvE.js";import{t as E}from"./IconWarning-CQsN887u.js";import{$ as C}from"./Group-CFRZOSwE.js";import{e as D,f as N}from"./DateField-B55wiFcA.js";import{f as r,F as x}from"./FieldError-BLx6e73A.js";import{P as y}from"./Popover-CIILQRB7.js";import{u as I}from"./OverlayTrigger-CfYtoYM2.js";import{f as P}from"./flowComponent-BujZM4bR.js";import{a as g,s as h,C as F,b as v,c as _,d as k}from"./RangeCalendar-C73qD3B4.js";const O="flow--date-picker--date-input",w={dateInput:O},c=t=>{const{isDisabled:o}=t;return e.createElement(C,{className:w.dateInput},e.createElement(D,null,s=>e.createElement(N,{segment:s})),e.createElement(u,{variant:"plain",color:"secondary",isDisabled:o},e.createElement(E,null)))};c.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const d=()=>e.createElement(g,{className:h.calendar},e.createElement(F,null),e.createElement(v,{weekdayStyle:"short"},t=>e.createElement(_,{date:t})));d.__docgenInfo={description:"",methods:[],displayName:"Calendar"};const R=P("DatePicker",t=>{const{children:o,className:s,errorMessage:i,onChange:l,...m}=t,p=b(r.formField,s),f={Label:{className:r.label,optional:!t.isRequired},FieldDescription:{className:r.fieldDescription},FieldError:{className:r.customFieldError}},a=I("Popover");return e.createElement(k,{...m,className:p,onOpenChange:n=>a.setOpen(n),isOpen:a.isOpen,onChange:n=>{l&&l(n),a.close()}},e.createElement(c,{isDisabled:t.isDisabled}),e.createElement($,{props:f},o),e.createElement(x,{className:r.fieldError},i),e.createElement(y,{placement:"bottom end",isDialogContent:!0,controller:a},e.createElement(d,null)))});R.__docgenInfo={description:"",methods:[],displayName:"DatePicker"};export{R as D};