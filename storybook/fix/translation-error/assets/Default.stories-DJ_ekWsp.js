import{T as t}from"./TextField-CTuNgUpf.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as a}from"./Label-YqoRtSRe.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as j}from"./FieldDescription-DL_UboA3.js";import{a as k}from"./Form-CS2x0aS5.js";import{B as z}from"./Button-BdwkYmUJ.js";import{F as A}from"./FieldError-Cn7Cn3Rk.js";import"./TextFieldBase-Cwx2xOTL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./utils-7gTBvjqH.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FieldError-Dc7wTCBj.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-R-rrVGxo.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-In3k7nSs.js";import"./Hidden-CRdWNeH8.js";import"./Label-CqgmsInd.js";import"./useTextField-BGTL6xBV.js";import"./useFormReset-DMREOE0P.js";import"./useControlledState-BgxdDqm0.js";import"./useFocusable-BXVt7Q_3.js";import"./flowComponent-Bz6Io0hO.js";import"./v4-CQkTLCs1.js";import"./Text-9mML8Z29.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./useLabel-DrlXsFf-.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-DPCXsjOp.js";import"./LoadingSpinner-DrWRflEB.js";import"./Button-fHRiK0T5.js";import"./ProgressBar--OmPGqUT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C3EQNDer.js";const Be={title:"Form Controls/TextField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"First name"))},o={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},s={render:r=>e.createElement(t,{...r},e.createElement(a,null,"URL"),e.createElement(j,null,'Start with "https://"'))},l={render:r=>e.createElement(t,{...r,defaultValue:"https://mittwald.de"},e.createElement(a,null,"URL"))},m={render:r=>e.createElement(t,{...r,placeholder:"https://"},e.createElement(a,null,"URL"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,defaultValue:"hello"},e.createElement(a,null,"URL"),e.createElement(A,null,"Invalid input"),e.createElement(j,null,'Start with "https://"'))},c={render:r=>e.createElement(k,{onSubmit:()=>{}},e.createElement(t,{...r,type:"email",inputMode:"email",isRequired:!0},e.createElement(a,null,"Email")),e.createElement("br",null),e.createElement(z,{type:"submit"},"Submit"))},d={args:{showCharacterCount:!0,maxLength:10},render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"User name"))};var u,h,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(h=o.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,E,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Ie=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{o as Default,i as Disabled,n as Required,d as ShowCharacterCount,l as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,c as WithForm,m as WithPlaceholder,Ie as __namedExportsOrder,Be as default};
