import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./TextArea-BoTXRIWB.js";import"./index-BdpSHsi2.js";import{L as a}from"./Label-BNGXyyZx.js";import{a as k}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-CtKAKml6.js";import{F as O}from"./FieldError-x92KEMb0.js";import"./TextFieldBase-g9k3gv66.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CtuFjrua.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-BZJu8ann.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./TextField-BqNO7Lq4.js";import"./utils-q_Aud5Js.js";import"./FieldError-D2eBwE7I.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Input-Dom3MqAg.js";import"./Hidden-RoZfe91Z.js";import"./useFocusRing-DY5AGIis.js";import"./useFocus-4XTC7e6o.js";import"./Label-C5gSD-Mq.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./index-BAMY2Nnw.js";import"./v4-CtRu48qb.js";import"./Text-Dd4DG0mT.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./IconWarning-DVCOiIN0.js";const Kr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:k("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},p={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(_,{children:"Starts with ssh-rsa"})]})},n={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},c={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(O,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},l={args:{rows:1,autoResizeMaxRows:5}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,D,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var S,L,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,T,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var y,A,K;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(K=(A=c.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var P,W,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var v,z,V;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(V=(z=m.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,I,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Pr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,l as Resizeable,m as ShowCharacterCount,n as WithDefaultValue,p as WithFieldDescription,d as WithFieldError,c as WithPlaceholder,Pr as __namedExportsOrder,Kr as default};
