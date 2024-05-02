import{R as e}from"./index-BwDkhjyp.js";import{E as G,F as H,z as k,G as B,H as Q}from"./import-Cu03TQlK.js";import{f as q,P as U,N as X,A as Z}from"./flowComponent-DnUs06RV.js";import{f as c,F as j}from"./FormField.module-B5hG92F8.js";import{c as S}from"./clsx-B-dksMZM.js";import"./IconApp-Bwxw5AuI.js";import{I as ee}from"./IconWarning-DFvgIVCz.js";import"./index-DZ09anV6.js";import{P as te}from"./Popover-CCVim2Rm.js";import"./index-kone6XRS.js";import"./index-ZL6GrJmu.js";import{L as E}from"./Label-BY-lGqJc.js";import{F as oe}from"./FieldDescription-BtqRf5sT.js";const ne="flow--select",re="flow--select--toggle",v={select:ne,toggle:re},le="flow--select--options--popover",ae="flow--select--options",b={popover:le,options:ae},D=o=>{const{className:r,children:l,...a}=o,s=S(b.options,r);return e.createElement(te,{className:b.popover},e.createElement(G,{className:s,...a},l))};D.__docgenInfo={description:"",methods:[],displayName:"Options"};D.__docgenInfo={description:"",methods:[],displayName:"Options"};const n=q("Select",o=>{const{children:r,className:l,onChange:a=()=>{},onSelectionChange:s=()=>{},ref:f,...g}=o,z=S(v.select,c.formField,l),K={Label:{className:c.label,optional:!o.isRequired},FieldDescription:{className:c.fieldDescription},FieldError:{className:c.customFieldError},Option:{tunnelId:"options"}},V=P=>{a(String(P)),s(P)};return e.createElement(H,{...g,className:z,ref:f,onSelectionChange:V},e.createElement(U,{props:K},e.createElement(X,null,e.createElement(k,{className:v.toggle},e.createElement(B,null),e.createElement(ee,null)),r,e.createElement(D,null,e.createElement(Z,{id:"options"})),e.createElement(j,{className:c.fieldError}))))});n.__docgenInfo={description:"",methods:[],displayName:"Select"};const se="flow--select--option",ce="flow--select--option--icon",pe="flow--select--option--text",ie="flow--select--option--control-icon",me={option:se,icon:ce,text:pe,controlIcon:ie},t=q("Option",o=>{const{className:r,children:l,value:a,ref:s,...f}=o,g=S(me.option,r);return e.createElement(Q,{className:g,ref:s,...f,id:a},l)});t.__docgenInfo={description:"",methods:[],displayName:"Option"};t.__docgenInfo={description:"",methods:[],displayName:"Option"};n.__docgenInfo={description:"",methods:[],displayName:"Select"};const de={title:"Form Controls/Select",component:n,render:o=>e.createElement(n,{...o},e.createElement(E,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"))},p={},i={args:{isDisabled:!0}},m={args:{isRequired:!0}},d={render:o=>e.createElement(n,{...o},e.createElement(E,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(oe,null,"Select an app"))},u={render:o=>e.createElement(n,{...o,defaultSelectedKey:"WordPress"},e.createElement(E,null,"App"),e.createElement(t,{value:"WordPress"},"WordPress"),e.createElement(t,{value:"TYPO3"},"TYPO3"),e.createElement(t,{value:"Contao"},"Contao"),e.createElement(t,{value:"Drupal"},"Drupal"),e.createElement(t,{value:"Joomla!"},"Joomla!"),e.createElement(t,{value:"Matomo"},"Matomo"))},O={render:o=>e.createElement(n,{...o,isInvalid:!0,isRequired:!0},e.createElement(E,null,"App"),e.createElement(t,null,"WordPress"),e.createElement(t,null,"TYPO3"),e.createElement(t,null,"Contao"),e.createElement(t,null,"Drupal"),e.createElement(t,null,"Joomla!"),e.createElement(t,null,"Matomo"),e.createElement(j,null,"Select an app to continue"))};var N,h,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var F,_,W;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(W=(_=i.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var $,y,x;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(x=(y=m.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var I,w,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Select {...props}>
      <Label>App</Label>
      <Option>WordPress</Option>
      <Option>TYPO3</Option>
      <Option>Contao</Option>
      <Option>Drupal</Option>
      <Option>Joomla!</Option>
      <Option>Matomo</Option>
      <FieldDescription>Select an app</FieldDescription>
    </Select>
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var T,J,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <Select {...props} defaultSelectedKey="WordPress">
      <Label>App</Label>
      <Option value="WordPress">WordPress</Option>
      <Option value="TYPO3">TYPO3</Option>
      <Option value="Contao">Contao</Option>
      <Option value="Drupal">Drupal</Option>
      <Option value="Joomla!">Joomla!</Option>
      <Option value="Matomo">Matomo</Option>
    </Select>
}`,...(L=(J=u.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var R,Y,A;O.parameters={...O.parameters,docs:{...(R=O.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <Select {...props} isInvalid isRequired>
      <Label>App</Label>
      <Option>WordPress</Option>
      <Option>TYPO3</Option>
      <Option>Contao</Option>
      <Option>Drupal</Option>
      <Option>Joomla!</Option>
      <Option>Matomo</Option>
      <FieldError>Select an app to continue</FieldError>
    </Select>
}`,...(A=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};const ue=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Disabled:i,Required:m,WithDefaultValue:u,WithFieldDescription:d,WithFieldError:O,__namedExportsOrder:ue,default:de},Symbol.toStringTag,{value:"Module"}));export{_e as D,t as O,n as S,de as m};
