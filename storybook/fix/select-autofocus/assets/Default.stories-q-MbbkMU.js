import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-7U6JvYeH.js";import"./index-BZISi7jw.js";import{L as o}from"./Label-CzYjGm4V.js";import{a as z}from"./index-B-lxVbXh.js";import{F as G}from"./FieldDescription-BV4XyTGq.js";import{a as H}from"./Form-CQcw_pbg.js";import{B as J}from"./Button-CF4ZysTX.js";import{F as K}from"./FieldError-DbNWEBso.js";import"./TextFieldBase-DsRMN7q2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./utils-B8p6n-_S.js";import"./FieldError-CFxmzwuR.js";import"./useFocus-0lzzAyJ_.js";import"./Text-CUmgXOYU.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-DtximQ_K.js";import"./Hidden-kqRI_mPI.js";import"./useFocusRing-C08ZnYSv.js";import"./Label-CRtDyyLG.js";import"./useTextField-ecyK3ZTB.js";import"./useFormReset-m57alayF.js";import"./useControlledState-4nfZ-XMX.js";import"./useFocusable-dJayk3b7.js";import"./v4-CtRu48qb.js";import"./Text-DKc2hFom.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./useLabel-DjubqfyV.js";import"./IconApp-W8-S6AAB.js";import"./IconWarning-BUA863Ku.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./Button-DlOLKXkK.js";import"./ProgressBar-CMGFgh_N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";const Mr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:z("onChange"),...e,children:r.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{autoFocus:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(G,{children:'Start with "https://"'})]})},d={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(K,{children:"Invalid input"}),r.jsx(G,{children:'Start with "https://"'})]})},l={render:e=>r.jsxs(H,{onSubmit:()=>{},children:[r.jsx(t,{...e,type:"email",inputMode:"email",isRequired:!0,children:r.jsx(o,{children:"Email"})}),r.jsx("br",{}),r.jsx(J,{type:"submit",children:"Submit"})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:z("onChange"),...e,children:r.jsx(o,{children:"User name"})})};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var b,g,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var L,j,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var T,w,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(U=(w=p.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var W,E,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var V,v,y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,I,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...($=(I=c.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var A,M,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <Form onSubmit={() => {
    // do nothing
  }}>
      <TextField {...props} type="email" inputMode="email" isRequired>
        <Label>Email</Label>
      </TextField>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,O,k;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Pr=["Default","Disabled","Autofocus","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{i as Autofocus,s as Default,a as Disabled,n as Required,u as ShowCharacterCount,d as WithDefaultValue,p as WithFieldDescription,c as WithFieldError,l as WithForm,m as WithPlaceholder,Pr as __namedExportsOrder,Mr as default};
