import{j as e}from"./iframe-D3XbVUAE.js";import{T as s}from"./TextArea-BmEWbLk8.js";import{L as a}from"./Label-BTIrFf4y.js";import{F as se}from"./FieldDescription-CCF4pGSH.js";import{F as ae}from"./FieldError-DuGPuZu9.js";import"./index-Cun1SEai.js";import"./TextFieldBase-D4fv0n1i.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./index-BE_iNncf.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./TextField-COqQTs2q.js";import"./utils-BWY6h_sn.js";import"./FieldError-NLw4NqNk.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./RSPContexts-BakoLx3C.js";import"./Form-CcsDzmFP.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Group-BPkRhbu5.js";import"./useFocusRing-C2luJKmh.js";import"./useFocus-DS8-NOtK.js";import"./Input-CNAwbAUs.js";import"./useTextField-BMKAR3PL.js";import"./useFormReset-BLKvBmEx.js";import"./useControlledState-Dbx7ZwrT.js";import"./useFocusable-ZL6151jY.js";import"./useFormValidation-Co07oj9m.js";import"./ReactAriaControlledValueFix-D1VqbsXd.js";import"./Text-D8iCnd0a.js";import"./browser-DZQtGRWw.js";import"./EmulatedBoldText-C38wPnte.js";import"./IconWarning-DpoKEiS2.js";const{action:oe}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/TextArea",component:s,render:r=>e.jsx(s,{onChange:oe("onChange"),...r,children:e.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(s,{...r,children:[e.jsx(a,{children:"Public Key"}),e.jsx(se,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(s,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(a,{children:"Public Key"})})},p={render:r=>e.jsx(s,{...r,placeholder:"ssh-rsa...",children:e.jsx(a,{children:"Public Key"})})},d={render:r=>e.jsxs(s,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"Public Key"}),e.jsx(ae,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowHorizontalResize:!0}},b={args:{allowVerticalResize:!0}};var x,R,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(f=(R=o.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var z,S,y;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,j,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var A,F,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,C,K;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...(K=(C=c.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var O,P,V;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var E,W,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var v,I,q;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var H,M,k;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(k=(M=m.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var B,N,U;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Y,G,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    allowHorizontalResize: true
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ke=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,ke as __namedExportsOrder,Me as default};
