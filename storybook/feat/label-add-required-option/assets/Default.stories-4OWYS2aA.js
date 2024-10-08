import{T as t}from"./TextField-B87zAoma.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as a}from"./Label-BIpm9EFM.js";import{a as O}from"./chunk-454WOBUV-CM0pFb8Z.js";import{F as j}from"./FieldDescription-BgEhY3kk.js";import{$ as k}from"./Form-DbuIRMOS.js";import{B as z}from"./Button-I8usChom.js";import{F as A}from"./FormField.module-BQuq2dIH.js";import"./TextFieldBase-DaMBU4hF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./utils-CgpzwoFP.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Input-Cw3QD1cL.js";import"./useFocusable-BkYgQ3nW.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Hidden-BsXGu--s.js";import"./Label-BRZ8BO2K.js";import"./Text-BgIWd_-0.js";import"./flowComponent-8D1yScr8.js";import"./v4-CQkTLCs1.js";import"./Text-F433P2hn.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./IconApp-C6Ekwtz9.js";import"./IconWarning-BmHOAWu0.js";import"./LoadingSpinner-V2DU6wd9.js";import"./Button-inQNMO4w.js";import"./usePress-e9a-mRh7.js";const we={title:"Form Controls/TextField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"First name"))},o={},n={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(a,null,"URL"),e.createElement(j,null,'Start with "https://"'))},l={render:r=>e.createElement(t,{...r,defaultValue:"https://mittwald.de"},e.createElement(a,null,"URL"))},m={render:r=>e.createElement(t,{...r,placeholder:"https://"},e.createElement(a,null,"URL"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(a,null,"URL"),e.createElement(A,null,"Invalid input"),e.createElement(j,null,'Start with "https://"'))},c={render:r=>e.createElement(k,{onSubmit:()=>{}},e.createElement(t,{...r,type:"email",inputMode:"email",isRequired:!0},e.createElement(a,null,"Email")),e.createElement("br",null),e.createElement(z,{type:"submit"},"Submit"))},d={args:{showCharacterCount:!0,maxLength:10},render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"User name"))};var u,h,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(h=o.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,E,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(E=n.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var L,f,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,R,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var D,T,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Ue=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{o as Default,n as Disabled,s as Required,d as ShowCharacterCount,l as WithDefaultValue,i as WithFieldDescription,p as WithFieldError,c as WithForm,m as WithPlaceholder,Ue as __namedExportsOrder,we as default};
