import{R as e}from"./index-Cs7sjTYM.js";import{f as r,F as E}from"./FormField.module-CsYi_t4Q.js";import{c as b}from"./clsx-B-dksMZM.js";import{P as g}from"./PropsContextProvider-CRusYdr1.js";import{P as $}from"./Popover-DkK9p4JA.js";import{$ as D,R}from"./RangeCalendar-DeM852pn.js";import{B as C}from"./Button-BWPqBSre.js";import"./IconApp-DqdQf8xk.js";import{t as N}from"./IconWarning-Bz8aDAH7.js";import{$ as P}from"./Group-CmUh91Xn.js";import{e as i,f as c}from"./DateField-BpyvJskb.js";import{u as x}from"./OverlayTrigger-BpSxnOsX.js";import{f as I}from"./flowComponent-ioG1zo33.js";const h="flow--date-range-picker--date-range-input",v={dateRangeInput:h},m=t=>{const{isDisabled:n}=t;return e.createElement(P,{className:v.dateRangeInput},e.createElement("div",null,e.createElement(i,{slot:"start"},a=>e.createElement(c,{segment:a})),e.createElement("span",{"aria-hidden":"true"},"–"),e.createElement(i,{slot:"end"},a=>e.createElement(c,{segment:a}))),e.createElement(C,{variant:"plain",color:"secondary",isDisabled:n},e.createElement(N,null)))};m.__docgenInfo={description:"",methods:[],displayName:"DateRangeInput",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const y=I("DateRangePicker",t=>{const{children:n,className:a,errorMessage:p,onChange:l,...d}=t,f=b(r.formField,a),u={Label:{className:r.label,optional:!t.isRequired},FieldDescription:{className:r.fieldDescription},FieldError:{className:r.customFieldError}},o=x("Popover");return e.createElement(D,{...d,className:f,onOpenChange:s=>o.setOpen(s),isOpen:o.isOpen,onChange:s=>{l&&l(s),o.close()}},e.createElement(m,{isDisabled:t.isDisabled}),e.createElement(g,{props:u},n),e.createElement(E,{className:r.fieldError},p),e.createElement($,{placement:"bottom end",isDialogContent:!0,controller:o},e.createElement(R,null)))});y.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};export{y as D};