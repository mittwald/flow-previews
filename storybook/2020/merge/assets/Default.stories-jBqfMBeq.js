import{j as r}from"./iframe-MIRc1tgM.js";import{T as s}from"./TextArea-MPI-RdRu.js";import{L as a}from"./Label-6ip-YDAK.js";import{F as N}from"./FieldDescription-B7e-UXQa.js";import{F as U}from"./FieldError-DXgvjoE9.js";import"./index-Cun1SEai.js";import"./TextFieldBase-B8yJo0IK.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./context-7dZHwnb1.js";import"./TextField-BI7zaVgW.js";import"./utils-Wg8-dAbi.js";import"./FieldError-CET0Lp84.js";import"./Text-CqfOq6kd.js";import"./filterDOMProps-CghfNOdR.js";import"./context-gIAWaTnY.js";import"./Form-DdpQvp-N.js";import"./useLabel-BYf9ahG7.js";import"./Group-CntKpz0M.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocus-D5-sLX53.js";import"./Input-Dq9_JaMk.js";import"./Hidden-CQtTG736.js";import"./Label-BZ6fLiSQ.js";import"./useTextField-D6znRGpk.js";import"./useFormReset-BLfHAfi4.js";import"./useControlledState-hbnLpfLJ.js";import"./useFocusable-42wCCaNx.js";import"./useFormValidation-BwYj4c-E.js";import"./ReactAriaControlledValueFix-CDVpgvAn.js";import"./Text-DB0aA-4n.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./IconWarning-0xUxCYxJ.js";const{action:Y}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:Y("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(N,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(U,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,f,R;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const Pr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,c as WithFieldDescription,l as WithFieldError,d as WithPlaceholder,Pr as __namedExportsOrder,Or as default};
