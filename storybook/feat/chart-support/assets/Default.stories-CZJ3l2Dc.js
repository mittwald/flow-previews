import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-Bx-2WrDp.js";import"./index-CtQTiInQ.js";import{L as o}from"./Label-B5kMao0p.js";import{a as _}from"./index-B-lxVbXh.js";import{F as O}from"./FieldDescription-ClsLWxks.js";import{a as k}from"./Form-CkaNRWdA.js";import{B as z}from"./Button-CEu5AYHl.js";import{F as A}from"./FieldError-b3eTosPs.js";import"./TextFieldBase-DQWM8lBB.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DCw3d_mi.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./utils-pqn3Medm.js";import"./FieldError-D1AsG0bn.js";import"./useFocus-Csiud3ul.js";import"./Text-DfUCrkqY.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-C58BIEdL.js";import"./Hidden-Dd0lSYNZ.js";import"./useFocusRing-Dj3VKvGJ.js";import"./Label-BuTtJRrE.js";import"./useTextField-CoijsFb_.js";import"./useFormReset-Bj6qxEZP.js";import"./useControlledState-BKUqB07S.js";import"./useFocusable-D_uDDaTh.js";import"./v4-CtRu48qb.js";import"./Text-gEgSdrgY.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Wrap-DQq6jo70.js";import"./useLabel-D55R0JPp.js";import"./IconApp-CRBZNQVh.js";import"./IconWarning-DOXxmL8u.js";import"./LoadingSpinner-BNNKZnfN.js";import"./Button-CponIIJZ.js";import"./ProgressBar-SARi2bur.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mPwC5UWg.js";const Be={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"First name"})})},i={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(O,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(A,{children:"Invalid input"}),e.jsx(O,{children:'Start with "https://"'})]})},l={render:r=>e.jsxs(k,{onSubmit:()=>{},children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(z,{type:"submit",children:"Submit"})]})},c={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:_("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var u,h,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,g;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
