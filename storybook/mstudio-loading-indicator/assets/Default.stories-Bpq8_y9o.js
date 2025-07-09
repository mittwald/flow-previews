import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./TextArea-C1heUYI6.js";import"./index-BdpSHsi2.js";import{L as a}from"./Label-B67GG62O.js";import{a as k}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-Go4w5lU2.js";import{F as O}from"./FieldError-DPOThHYF.js";import"./TextFieldBase-bQnUJ7G2.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQGi8I0-.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-B0ug4Eyq.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./context-b6TG5uw0.js";import"./TextField-DnxvqTg5.js";import"./utils-CNUJJGcD.js";import"./FieldError-Dhym38A1.js";import"./Text-BJ9sUP_l.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-CXVBffIi.js";import"./useFocus-Ck8e1iB7.js";import"./useLabel-XC8v3O7U.js";import"./Input--iZvazXr.js";import"./Hidden-RoZfe91Z.js";import"./useFocusRing-BmK03SYd.js";import"./Label-DsLtIi5U.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-CxpMFfxV.js";import"./ReactAriaControlledValueFix-BLJm2WOQ.js";import"./index-BAMY2Nnw.js";import"./v4-CtRu48qb.js";import"./Text-DgbqBKHt.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./IconWarning-CAybkP0q.js";const Kr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:k("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},p={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(_,{children:"Starts with ssh-rsa"})]})},n={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},c={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(O,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},l={args:{rows:1,autoResizeMaxRows:5}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
