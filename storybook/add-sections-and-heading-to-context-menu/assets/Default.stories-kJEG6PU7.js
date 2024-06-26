import{R as e}from"./index-uCp2LrAq.js";import{T as B,$ as M}from"./TextFieldBase-5Lckew2v.js";import{C as O}from"./PropsContextProvider-RdMO5ekw.js";import{f as j}from"./flowComponent-S8oBNLtu.js";import{L as t}from"./Label-DvNC-UuM.js";import{a as G}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as H}from"./FieldDescription-CgtUnkcc.js";import{F as J}from"./FormField.module-BZG3xUMW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./index-CFQDndEx.js";import"./utils-DZgOXw50.js";import"./index-BOkhicXD.js";import"./Form-BOwpWbru.js";import"./useFocusable-DpEA8Hsr.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./Input-AN0YuBj3.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./v4-CQkTLCs1.js";import"./Text-CadoLc4y.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./IconApp-BxWtZCih.js";import"./IconWarning-D35fNG9E.js";const Q="flow--text-area",U={textArea:Q},a=j("TextArea",r=>{const{children:q,placeholder:_,rows:$=5,refProp:k,...z}=r,N=e.createElement(M,{rows:$,placeholder:_,className:U.textArea,ref:k});return e.createElement(O,null,e.createElement(B,{...z,input:N},q))});a.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const Pe={title:"Form Controls/TextArea",component:a,render:r=>e.createElement(a,{onChange:G("onChange"),...r},e.createElement(t,null,"Message"))},s={},o={args:{isDisabled:!0}},n={args:{isRequired:!0}},l={render:r=>e.createElement(a,{...r},e.createElement(t,null,"Public Key"),e.createElement(H,null,"Starts with ssh-rsa"))},i={render:r=>e.createElement(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf"},e.createElement(t,null,"Public Key"))},c={render:r=>e.createElement(a,{...r,placeholder:"ssh-rsa..."},e.createElement(t,null,"Public Key"))},p={render:r=>e.createElement(a,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(t,null,"Public Key"),e.createElement(J,null,"Invalid Key"))},m={args:{showCharacterCount:!0,maxLength:100}};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,E,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(A=(E=n.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var C,F,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var D,y,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var P,S,K;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(K=(S=c.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};var w,W,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(v=(W=p.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var R,V,I;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const Se=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{s as Default,o as Disabled,n as Required,m as ShowCharacterCount,i as WithDefaultValue,l as WithFieldDescription,p as WithFieldError,c as WithPlaceholder,Se as __namedExportsOrder,Pe as default};
