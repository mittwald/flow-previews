import{j as r}from"./jsx-runtime-CLpGMVip.js";import{T as t}from"./TextField-D8NEFaca.js";import"./index-Cf9XvIV_.js";import{L as o}from"./Label-DjKYLgIY.js";import{a as _}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as O}from"./FieldDescription-BWcUEk2i.js";import{a as k}from"./Form-Dnjmabzf.js";import{B as z}from"./Button-DHWTNALP.js";import{F as A}from"./FieldError-DQ5MTOtn.js";import"./TextFieldBase-CbpU4-oH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./utils-CVMEqJeI.js";import"./FieldError-BcRZtHui.js";import"./useFocusRing-CKcPrrmF.js";import"./Text-F0Mi_G2S.js";import"./filterDOMProps-BSfnXAP7.js";import"./Input-BWS-lcBE.js";import"./Hidden-Cfl4ctnK.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./Label-0l9LIJhu.js";import"./useTextField-BU8AMjjU.js";import"./useFormReset-SCbFK273.js";import"./useControlledState-19OAjgUP.js";import"./useFocusable-ZIe1iymP.js";import"./focusSafely-D0g9gk72.js";import"./flowComponent-DRn_CkhL.js";import"./v4-CtRu48qb.js";import"./Text-CjWzxq3B.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./useLabel-ByHVstPj.js";import"./IconApp-B1n3xJhN.js";import"./IconWarning-D8dw3UeH.js";import"./LoadingSpinner-UEb47rBz.js";import"./Button-Depz1QWJ.js";import"./ProgressBar-Jtxrz8Zb.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-6HCAk5fU.js";import"./_class_private_field_set-CamGEj8o.js";const $r={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(o,{children:"First name"})})},i={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(O,{children:'Start with "https://"'})]})},p={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},m={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(A,{children:"Invalid input"}),r.jsx(O,{children:'Start with "https://"'})]})},l={render:e=>r.jsxs(k,{onSubmit:()=>{},children:[r.jsx(t,{...e,type:"email",inputMode:"email",isRequired:!0,children:r.jsx(o,{children:"Email"})}),r.jsx("br",{}),r.jsx(z,{type:"submit",children:"Submit"})]})},c={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(o,{children:"User name"})})};var u,h,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,g;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var L,f,j;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,C,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,T,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var U,W,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,V,v;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(v=(V=m.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var y,B,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Form onSubmit={() => {
    // do nothing
  }}>
      <TextField {...props} type="email" inputMode="email" isRequired>
        <Label>Email</Label>
      </TextField>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,M,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{i as Default,s as Disabled,a as Required,c as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithForm,d as WithPlaceholder,Mr as __namedExportsOrder,$r as default};
