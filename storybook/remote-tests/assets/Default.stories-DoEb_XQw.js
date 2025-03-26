import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-CIFNdeyI.js";import"./index-BKyFwriW.js";import{L as o}from"./Label-Ci6hAk30.js";import{a as O}from"./index-B-lxVbXh.js";import{F as k}from"./FieldDescription-0TSCGh7i.js";import{B as A}from"./Button-y_xQsClG.js";import{F as G}from"./FieldError-BpzgSl-I.js";import{u as H,F as J}from"./Form-DpYkGN_O.js";import{s as K}from"./Action-i0thx0q2.js";import"./TextFieldBase-DzXGJ7nw.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./utils-DDUQIigj.js";import"./FieldError-Cj9Fprf0.js";import"./Text-yNWxiVQR.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-hD-YL6KK.js";import"./useLabel-DAPKuvGY.js";import"./Input-RYKDaaJa.js";import"./Hidden-6cPdUftz.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocus-DNP1_3BC.js";import"./Label-i7acEou4.js";import"./useTextField-D72aunu8.js";import"./useFormReset-Cvvd9M-x.js";import"./useControlledState-Cu5tmcxR.js";import"./useFocusable-DFPniEHk.js";import"./useFormValidation-Dyo9Ifhv.js";import"./v4-CtRu48qb.js";import"./Text-BoP-iRG5.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Wrap-DQq6jo70.js";import"./IconApp-DtTJ2r0A.js";import"./IconWarning-BwSZGWRf.js";import"./LoadingSpinner-DbRP1bJP.js";import"./Button-DL5r24IA.js";import"./ProgressBar-C4A5wsjg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./dynamic-DKDa4OpU.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./getActionGroupSlot-DrfnkDvY.js";const Jr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:O("onChange"),...e,children:r.jsx(o,{children:"First name"})})},s={},i={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(k,{children:'Start with "https://"'})]})},p={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},d={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(G,{children:"Invalid input"}),r.jsx(k,{children:'Start with "https://"'})]})},l={render:e=>{const z=H();return r.jsxs(J,{form:z,onSubmit:async()=>await K(2e3),children:[r.jsx(t,{...e,type:"email",inputMode:"email",isRequired:!0,children:r.jsx(o,{children:"Email"})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:O("onChange"),...e,children:r.jsx(o,{children:"User name"})})};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(L=(b=i.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var g,f,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var U,W,E;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,y,V;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(V=(y=d.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var v,B,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <TextField {...props} type="email" inputMode="email" isRequired>
          <Label>Email</Label>
        </TextField>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,P,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Kr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,i as Disabled,a as Required,c as ShowCharacterCount,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,l as WithForm,m as WithPlaceholder,Kr as __namedExportsOrder,Jr as default};
