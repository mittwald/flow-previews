import{R as e}from"./index-uCp2LrAq.js";import{T as $,$ as N}from"./index-DE18P8CR.js";import{f as k,C as z}from"./flowComponent-OTWiITmK.js";import"./index-4ISF3mB6.js";import{a as B}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as M}from"./FieldDescription-CQeRqD-3.js";import{F as O}from"./FormField.module-CNftIp2h.js";import{L as t}from"./Label-B73AfSWH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./utils-CHnd_qWz.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./Form-DC_Jaq0Q.js";import"./useFocusable-BGYghl-O.js";import"./useLabel-CRisioBB.js";import"./useLabels-7II0TQXO.js";import"./Text-QhWkLhD7.js";import"./Input-DZsvBgax.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Co0XpM0Q.js";import"./useControlledState-B8AA3oOY.js";import"./Label-D2L52JVz.js";import"./v4-CQkTLCs1.js";import"./index-Bcs0dI_5.js";import"./Text-DSG_VjMt.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";import"./IconApp-CexgHYRw.js";import"./IconWarning-_6-e0GkB.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";const j="flow--text-area",G={textArea:j},a=k("TextArea",r=>{const{children:I,placeholder:R,rows:V=5,ref:_,...w}=r,q=e.createElement(N,{rows:V,placeholder:R,className:G.textArea,ref:_});return e.createElement(z,null,e.createElement($,{...w,input:q},I))});a.__docgenInfo={description:"",methods:[],displayName:"TextArea"};a.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const De={title:"Form Controls/TextArea",component:a,render:r=>e.createElement(a,{onChange:B("onChange"),...r},e.createElement(t,null,"Message"))},s={},o={args:{isDisabled:!0}},i={args:{isRequired:!0}},l={render:r=>e.createElement(a,{...r},e.createElement(t,null,"Public Key"),e.createElement(M,null,"Starts with ssh-rsa"))},n={render:r=>e.createElement(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf"},e.createElement(t,null,"Public Key"))},c={render:r=>e.createElement(a,{...r,placeholder:"ssh-rsa..."},e.createElement(t,null,"Public Key"))},p={render:r=>e.createElement(a,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(t,null,"Public Key"),e.createElement(O,null,"Invalid Key"))};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,x,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var A,T,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var y,D,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var K,L,S;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var W,C,v;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const Pe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError"];export{s as Default,o as Disabled,i as Required,n as WithDefaultValue,l as WithFieldDescription,p as WithFieldError,c as WithPlaceholder,Pe as __namedExportsOrder,De as default};
