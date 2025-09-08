import{j as r}from"./iframe-CB_IvR8I.js";import{T as s}from"./TextArea-DUii50sV.js";import{L as a}from"./Label-DQjiInKi.js";import{F as N}from"./FieldDescription-CzRSGrqM.js";import{F as U}from"./FieldError-COPLGoQY.js";import"./TextFieldBase-Dw3h-uuj.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./TextField-nXjEyJdg.js";import"./utils-g_K47B_Q.js";import"./FieldError-7I8SRRkd.js";import"./Text-B8w1c0_W.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-BSDtEK6z.js";import"./useFocus-B0PqsM1A.js";import"./useLabel-DNzpHOuu.js";import"./Group-BtoN_DlS.js";import"./Hidden-jmCIdXP6.js";import"./useFocusRing-gt8SzE7T.js";import"./Label-kjSyRRrG.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./useControlledState-CS3WyH2d.js";import"./useFocusable-B2StGM5o.js";import"./ReactAriaControlledValueFix-DdwC-f5X.js";import"./Text-C_h1oOw9.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./IconWarning-DHvxn9zQ.js";const{action:Y}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:Y("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(N,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(U,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,f,R;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(R=(f=t.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var S,j,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,F,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,C,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var K,w,O;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var P,E,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,v,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var V,I,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var M,k,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const Ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,c as WithFieldDescription,l as WithFieldError,d as WithPlaceholder,Ar as __namedExportsOrder,Cr as default};
