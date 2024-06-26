import{R as e}from"./index-uCp2LrAq.js";import{T as $,$ as k}from"./TextFieldBase-CScNTBbU.js";import{C as z}from"./PropsContextProvider-Bes6Wf8F.js";import{f as N}from"./flowComponent-wUaQYyEI.js";import{L as t}from"./Label-XTfJKiv1.js";import{a as B}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as M}from"./FieldDescription-DDkbsc6q.js";import{F as O}from"./FormField.module-CpCFPza4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./utils-CblGkSXh.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./Form-B3U8TWeK.js";import"./useFocusable-SxMTR87z.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-PvbfzXMy.js";import"./Input-Ca4BfW5i.js";import"./Label-Dyr5o6sY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-Co4FN_Q7.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./useLocalizedStringFormatter-CELuk77o.js";import"./v4-CQkTLCs1.js";import"./Text-CkBcFDZm.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./IconApp-Cxjf7gPB.js";import"./IconWarning-2GqJK2gc.js";const j="flow--text-area",G={textArea:j},a=N("TextArea",r=>{const{children:R,placeholder:V,rows:w=5,refProp:I,...q}=r,_=e.createElement(k,{rows:w,placeholder:V,className:G.textArea,ref:I});return e.createElement(z,null,e.createElement($,{...q,input:_},R))});a.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const ye={title:"Form Controls/TextArea",component:a,render:r=>e.createElement(a,{onChange:B("onChange"),...r},e.createElement(t,null,"Message"))},s={},o={args:{isDisabled:!0}},l={args:{isRequired:!0}},i={render:r=>e.createElement(a,{...r},e.createElement(t,null,"Public Key"),e.createElement(M,null,"Starts with ssh-rsa"))},n={render:r=>e.createElement(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf"},e.createElement(t,null,"Public Key"))},c={render:r=>e.createElement(a,{...r,placeholder:"ssh-rsa..."},e.createElement(t,null,"Public Key"))},p={render:r=>e.createElement(a,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(t,null,"Public Key"),e.createElement(O,null,"Invalid Key"))};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,h,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,x,E;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var A,F,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var D,y,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var K,L,S;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var W,C,v;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const Pe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError"];export{s as Default,o as Disabled,l as Required,n as WithDefaultValue,i as WithFieldDescription,p as WithFieldError,c as WithPlaceholder,Pe as __namedExportsOrder,ye as default};
