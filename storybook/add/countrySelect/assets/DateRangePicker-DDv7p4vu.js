import{R as e}from"./index-B-o1Wr-g.js";import{f as r,F as E}from"./FieldError-CMJfhAXq.js";import{c as b}from"./clsx-B-dksMZM.js";import{P as g}from"./PropsContextProvider-DWb7RnwM.js";import{P as $}from"./Popover-D-xHyefN.js";import{$ as D,R}from"./RangeCalendar-C76GKB58.js";import{B as C}from"./Button-Lkw2sJQM.js";import"./IconApp-Bx5gyZ_K.js";import{t as N}from"./IconWarning-BmFQiIWK.js";import{$ as P}from"./Group-CFRZOSwE.js";import{e as i,f as c}from"./DateField-B55wiFcA.js";import{u as x}from"./OverlayTrigger-DzLENbkr.js";import{f as I}from"./flowComponent-BjDZX-qq.js";const h="flow--date-range-picker--date-range-input",v={dateRangeInput:h},m=t=>{const{isDisabled:n}=t;return e.createElement(P,{className:v.dateRangeInput},e.createElement("div",null,e.createElement(i,{slot:"start"},a=>e.createElement(c,{segment:a})),e.createElement("span",{"aria-hidden":"true"},"–"),e.createElement(i,{slot:"end"},a=>e.createElement(c,{segment:a}))),e.createElement(C,{variant:"plain",color:"secondary",isDisabled:n},e.createElement(N,null)))};m.__docgenInfo={description:"",methods:[],displayName:"DateRangeInput",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const y=I("DateRangePicker",t=>{const{children:n,className:a,errorMessage:p,onChange:l,...d}=t,f=b(r.formField,a),u={Label:{className:r.label,optional:!t.isRequired},FieldDescription:{className:r.fieldDescription},FieldError:{className:r.customFieldError}},o=x("Popover");return e.createElement(D,{...d,className:f,onOpenChange:s=>o.setOpen(s),isOpen:o.isOpen,onChange:s=>{l&&l(s),o.close()}},e.createElement(m,{isDisabled:t.isDisabled}),e.createElement(g,{props:u},n),e.createElement(E,{className:r.fieldError},p),e.createElement($,{placement:"bottom end",isDialogContent:!0,controller:o},e.createElement(R,null)))});y.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};export{y as D};