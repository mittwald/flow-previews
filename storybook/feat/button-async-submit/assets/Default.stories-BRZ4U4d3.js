import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./TextArea-D3wpnAp_.js";import"./index-BZISi7jw.js";import{L as a}from"./Label-Awo8DmgK.js";import{a as k}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-DtEGO0XD.js";import{F as O}from"./FieldError-D27MoMaZ.js";import"./TextFieldBase-Bii86Cp1.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./utils-BAtcVSHo.js";import"./FieldError-DGtg9YPD.js";import"./Text-CxIdO6ok.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-qm5cnMB7.js";import"./useLabel-Bh1EGhcd.js";import"./Input-njpPCLyw.js";import"./Hidden-kqRI_mPI.js";import"./useFocusRing-D6MLu59I.js";import"./useFocus-CGq_xkJe.js";import"./Label--FbMCZJS.js";import"./useTextField--bi5H5bl.js";import"./useFormReset-4n_yD9ws.js";import"./useControlledState-4nfZ-XMX.js";import"./useFocusable-D8BATkaF.js";import"./useFormValidation-CbU_Acnh.js";import"./v4-CtRu48qb.js";import"./Text-BPAvSiAh.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";const yr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:k("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(_,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},c={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(O,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},l={args:{rows:1,autoResizeMaxRows:5}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Ar=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,l as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithPlaceholder,Ar as __namedExportsOrder,yr as default};
