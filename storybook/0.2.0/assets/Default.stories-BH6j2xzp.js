import{j as e}from"./jsx-runtime-CLpGMVip.js";import{T as t}from"./TextField-DknkxqhP.js";import"./index-Cf9XvIV_.js";import{L as o}from"./Label-DTTE3pGW.js";import{a as _}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as O}from"./FieldDescription-C-HqeYQE.js";import{a as k}from"./Form-BPCPwrNr.js";import{B as z}from"./Button-BaNUASa3.js";import{F as A}from"./FieldError-WMkAMHNQ.js";import"./TextFieldBase-wMB5DO4v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./utils-DjOXyFua.js";import"./FieldError-Fgq_FSbK.js";import"./useFocusRing-DNhlkveR.js";import"./Text-BK3pbL47.js";import"./filterDOMProps-BSfnXAP7.js";import"./Input-By9TP3lj.js";import"./Hidden-Cfl4ctnK.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./Label-B3UarT55.js";import"./useTextField-CdIauddb.js";import"./useFormReset-SCbFK273.js";import"./useControlledState-19OAjgUP.js";import"./useFocusable-BJtEpXSQ.js";import"./flowComponent-BwhkuB3x.js";import"./v4-CtRu48qb.js";import"./Text-D5rDdv9L.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./useLabel-ByHVstPj.js";import"./IconApp-BvTDg_ym.js";import"./IconWarning-D2hnVGSN.js";import"./LoadingSpinner-CcwJ4mIx.js";import"./Button-8t-PlKI0.js";import"./ProgressBar-ZJQghT0g.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-1yUr5Cwu.js";const Be={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"First name"})})},i={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(O,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(A,{children:"Invalid input"}),e.jsx(O,{children:'Start with "https://"'})]})},l={render:r=>e.jsxs(k,{onSubmit:()=>{},children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(z,{type:"submit",children:"Submit"})]})},c={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var u,h,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,g;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Ie=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{i as Default,s as Disabled,a as Required,c as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithForm,d as WithPlaceholder,Ie as __namedExportsOrder,Be as default};
