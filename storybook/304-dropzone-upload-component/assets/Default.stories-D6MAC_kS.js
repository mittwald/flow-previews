import{T as t}from"./TextField-BbyTAM4h.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as a}from"./Label-D_lYvbbp.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as j}from"./FieldDescription-ClK7DPfq.js";import{a as k}from"./Form-DB3JQAHQ.js";import{B as z}from"./Button-C--giUau.js";import{F as A}from"./FieldError-CoI6oWOV.js";import"./TextFieldBase-WVEUxYCd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./utils-DKtCZAsl.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FieldError-BRsWdmBR.js";import"./useFocusRing-aZOxpy_h.js";import"./Text-CiYJIQMS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-bweKfcAC.js";import"./Hidden-_I_3hSLB.js";import"./Label-lrV0rU61.js";import"./useTextField-GqRk-2BB.js";import"./useFormReset-Bzq1iQT5.js";import"./useControlledState-BgxdDqm0.js";import"./useFocusable-DeAGt_gp.js";import"./flowComponent-BM_bsdM-.js";import"./v4-CQkTLCs1.js";import"./Text-Cj_eL-oH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./useLabel-C4jwYeNR.js";import"./IconApp-BsMqgwqQ.js";import"./IconWarning-B4d9xTRO.js";import"./LoadingSpinner-DCq4YO4s.js";import"./Button-i9IuKDdG.js";import"./ProgressBar-CBi1pwqX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-RNxp3RZQ.js";const ve={title:"Form Controls/TextField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"First name"))},o={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},s={render:r=>e.createElement(t,{...r},e.createElement(a,null,"URL"),e.createElement(j,null,'Start with "https://"'))},l={render:r=>e.createElement(t,{...r,defaultValue:"https://mittwald.de"},e.createElement(a,null,"URL"))},m={render:r=>e.createElement(t,{...r,placeholder:"https://"},e.createElement(a,null,"URL"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(a,null,"URL"),e.createElement(A,null,"Invalid input"),e.createElement(j,null,'Start with "https://"'))},c={render:r=>e.createElement(k,{onSubmit:()=>{}},e.createElement(t,{...r,type:"email",inputMode:"email",isRequired:!0},e.createElement(a,null,"Email")),e.createElement("br",null),e.createElement(z,{type:"submit"},"Submit"))},d={args:{showCharacterCount:!0,maxLength:10},render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"User name"))};var u,h,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(h=o.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,E,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(E=i.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var L,f,x;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,R,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(C=(R=s.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var D,T,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var U,W,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var V,v,y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,I,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <Form onSubmit={() => {
    // do nothing
  }}>
      <TextField {...props} type="email" inputMode="email" isRequired>
        <Label>Email</Label>
      </TextField>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
}`,...($=(I=c.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var M,P,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ye=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{o as Default,i as Disabled,n as Required,d as ShowCharacterCount,l as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,c as WithForm,m as WithPlaceholder,ye as __namedExportsOrder,ve as default};