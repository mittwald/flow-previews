import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TextField-Deo6mStL.js";import"./index-CtQTiInQ.js";import{L as o}from"./Label-BJo4HJwf.js";import{a as O}from"./index-B-lxVbXh.js";import{F as k}from"./FieldDescription-GWF4eqaC.js";import{B as A}from"./Button-DixTcy-g.js";import{F as G}from"./FieldError-BrTRafpo.js";import{u as H,F as J}from"./Form-B_YZUHw7.js";import{s as K}from"./Action-BTBARLRy.js";import"./TextFieldBase-XJ59C3wf.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./utils-DcjC1aig.js";import"./FieldError-CQDuJ0EJ.js";import"./Text-UNZxgqCx.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-B6mfikVx.js";import"./useLabel-DPCVhyCF.js";import"./Input-D73fD5bD.js";import"./Hidden-Dd0lSYNZ.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocus-nbRcaiXq.js";import"./Label-CvscwPf9.js";import"./useTextField-DrsVPilB.js";import"./useFormReset-CGMiLjFo.js";import"./useControlledState-BKUqB07S.js";import"./useFocusable-CZzsVVWR.js";import"./useFormValidation-DG4TqYaU.js";import"./v4-CtRu48qb.js";import"./Text-jYIFGcvn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Wrap-DQq6jo70.js";import"./IconApp-DB6cOM9g.js";import"./IconWarning-kCzmC3X3.js";import"./LoadingSpinner-BTj-lsSS.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./dynamic-DKDa4OpU.js";import"./context-CetbvVVg.js";import"./useStatic-DHHoNh1z.js";import"./getActionGroupSlot-Duw2LQJS.js";const Jr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:O("onChange"),...e,children:r.jsx(o,{children:"First name"})})},s={},i={args:{isDisabled:!0}},a={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(k,{children:'Start with "https://"'})]})},p={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},d={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(G,{children:"Invalid input"}),r.jsx(k,{children:'Start with "https://"'})]})},l={render:e=>{const z=H();return r.jsxs(J,{form:z,onSubmit:async()=>await K(2e3),children:[r.jsx(t,{...e,type:"email",inputMode:"email",isRequired:!0,children:r.jsx(o,{children:"Email"})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:O("onChange"),...e,children:r.jsx(o,{children:"User name"})})};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,b,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
