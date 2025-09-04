import{j as r}from"./iframe-DT0a5lsj.js";import{T as s}from"./TextArea-Dx_SR0Rv.js";import{L as a}from"./Label-Dszv3nJ4.js";import{F as N}from"./FieldDescription-CZTm8SfG.js";import{F as U}from"./FieldError-xtdcz2l6.js";import"./TextFieldBase-MfcjJLuF.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./context-DtNWionw.js";import"./TextField-Cx5OsYq1.js";import"./utils-BDe-fZfW.js";import"./FieldError-Ccza_qSZ.js";import"./Text-C8QSq9Z3.js";import"./filterDOMProps-CghfNOdR.js";import"./Form-BqKRbvb9.js";import"./useFocus-BPGD2VLY.js";import"./useLabel-BMvlVo7d.js";import"./Group-MdCfc2bT.js";import"./Hidden-CjrJVhTe.js";import"./useFocusRing-_XF1QxIj.js";import"./Label-RcZ5RumP.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./useControlledState-C-X9sbbL.js";import"./useFocusable-DyoB_hOm.js";import"./ReactAriaControlledValueFix-BxcjtgAG.js";import"./Text-CWVnGydc.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./IconWarning-CP_9phWh.js";const{action:Y}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:Y("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(N,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(U,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,f,R;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
