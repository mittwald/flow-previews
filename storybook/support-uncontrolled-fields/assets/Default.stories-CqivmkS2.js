import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./TextArea-BHZD-gtl.js";import"./index-F2Fta7eo.js";import{L as a}from"./Label-bOVntHUy.js";import{a as k}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-ujFz9pWL.js";import{F as O}from"./FieldError-B7WE-msJ.js";import"./TextFieldBase-fQaefIQS.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGP4rIIM.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./utils-DCmqzjri.js";import"./FieldError-BIIkw2ft.js";import"./Text-B6xPbVJ8.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-YK_aY0K2.js";import"./useLabel-DB0A2tZF.js";import"./Input-Cy89Xo-s.js";import"./Hidden-aaDrlwOM.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocus-CPhYqd-d.js";import"./Label-DKaTUQz-.js";import"./useTextField-BbIZEqTu.js";import"./useFormReset-hDk0Ijlo.js";import"./useControlledState-15AFXVxl.js";import"./useFocusable-BlNB76NP.js";import"./useFormValidation-C9irvmUd.js";import"./ReactAriaControlledValueFix-2mXEZviY.js";import"./v4-CtRu48qb.js";import"./Text-C0sWdp1H.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./IconWarning-JHNVKD2U.js";const wr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:k("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(_,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},c={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(O,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},m={args:{rows:1,autoResizeMaxRows:5}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,D,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var S,L,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,T,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var y,A,K;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(K=(A=c.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var P,W,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var v,z,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(V=(z=l.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,I,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const yr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,m as Resizeable,l as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithPlaceholder,yr as __namedExportsOrder,wr as default};
