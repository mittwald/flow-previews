import{R as e}from"./index-Cs7sjTYM.js";import{f as r,F as E}from"./FormField.module-CH8Ahxxo.js";import{c as b}from"./clsx-B-dksMZM.js";import{P as g}from"./PropsContextProvider-BmJWDS_p.js";import{P as D}from"./PopoverTrigger-Df_yVSmE.js";import{c,d as i,e as R,R as $}from"./RangeCalendar-Bq-e8FuZ.js";import{B as C}from"./Button-DB5iJVv6.js";import"./IconApp-0HsaHm1x.js";import{q as N}from"./IconWarning-CJmku_bU.js";import{$ as P}from"./Group-yf_Q-t6C.js";import{u as x}from"./OverlayTrigger-sCJZn0Op.js";import{f as I}from"./flowComponent-DAlTzncN.js";const h="flow--date-range-picker--date-range-input",v={dateRangeInput:h},m=t=>{const{isDisabled:n}=t;return e.createElement(P,{className:v.dateRangeInput},e.createElement("div",null,e.createElement(c,{slot:"start"},a=>e.createElement(i,{segment:a})),e.createElement("span",{"aria-hidden":"true"},"–"),e.createElement(c,{slot:"end"},a=>e.createElement(i,{segment:a}))),e.createElement(C,{variant:"plain",color:"secondary",isDisabled:n},e.createElement(N,null)))};m.__docgenInfo={description:"",methods:[],displayName:"DateRangeInput",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const y=I("DateRangePicker",t=>{const{children:n,className:a,errorMessage:d,onChange:l,...p}=t,f=b(r.formField,a),u={Label:{className:r.label,optional:!t.isRequired},FieldDescription:{className:r.fieldDescription},FieldError:{className:r.customFieldError}},o=x("Popover");return e.createElement(R,{...p,className:f,onOpenChange:s=>o.setOpen(s),isOpen:o.isOpen,onChange:s=>{l&&l(s),o.close()}},e.createElement(m,{isDisabled:t.isDisabled}),e.createElement(g,{props:u},n),e.createElement(E,{className:r.fieldError},d),e.createElement(D,{placement:"bottom end",isDialogContent:!0,controller:o},e.createElement($,null)))});y.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};export{y as D};