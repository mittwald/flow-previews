import{j as r}from"./iframe-DLPMA2Jy.js";import{T as s}from"./TextArea-CI7TiqAl.js";import{L as a}from"./Label-njveXq1g.js";import{F as q}from"./FieldDescription-C9CGNDRE.js";import{F as M}from"./FieldError-C4PtmRqe.js";import"./TextFieldBase-Caq3ljKY.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./context-BFBvnlV1.js";import"./TextField--NLdPxFk.js";import"./utils-b1QyYEgl.js";import"./FieldError-Cgq9toxC.js";import"./Text-DL4PvoSo.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-DfIg0xpy.js";import"./useFocus-rX-PXuLl.js";import"./useLabel-D3WVZ9yP.js";import"./Group-CGwZZGNH.js";import"./Hidden-Ba5oTT5z.js";import"./useFocusRing-DFqScG39.js";import"./Label-tqYGMXcy.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./useControlledState-Btp8qCFq.js";import"./useFocusable-CToQXnw-.js";import"./ReactAriaControlledValueFix-dLaU_eDY.js";import"./Text-BHcv_RSt.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./IconWarning-BZNHqQOv.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,Lr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:k("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(q,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(M,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},m={args:{rows:1,autoResizeMaxRows:5}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,j,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var F,L,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var C,R,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var K,w,y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var P,E,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,v,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var O,V,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const Tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,m as Resizeable,l as ShowCharacterCount,c as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,Tr as __namedExportsOrder,Lr as default};
