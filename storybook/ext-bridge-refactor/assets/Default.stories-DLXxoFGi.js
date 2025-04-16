import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as Q}from"./Button-Dhpj9FRh.js";import{F as H}from"./FieldDescription-DuCTkKO2.js";import{F as X}from"./FieldError-DTHL6QGh.js";import{L as o}from"./Label-DuWaARVY.js";import{u as Y,F as Z}from"./Form-DO-9hbU-.js";import{s as $}from"./Action-VjMgs9Db.js";import{a as J}from"./index-B-lxVbXh.js";import{r as ee}from"./index-n-xcLTj3.js";import{T as t}from"./TextField-uvDX0XvK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7o24Rkki.js";import"./IconWarning-BT9Vk3ZR.js";import"./Text-CvWN1dQn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";import"./utils-CHEN54dH.js";import"./LoadingSpinner-V_OKVJm3.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./FieldError-D-X35EJ8.js";import"./dynamic-DKDa4OpU.js";import"./context-ah73-6JJ.js";import"./useStatic-bVMyw5l7.js";import"./getActionGroupSlot-huFUK6tI.js";import"./v4-CtRu48qb.js";import"./TextFieldBase-CNaFa31t.js";import"./FormField.module-B9AzUSUD.js";import"./Form-ChuGhSFG.js";import"./Input-CzLAkyht.js";import"./useTextField-CbF7aTVM.js";import"./useFormReset-DmN8pfru.js";import"./useControlledState-B6lyO5nT.js";import"./useFormValidation-BxWfN6mX.js";const Ye={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:J("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(H,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,K]=ee.useState("");return e.jsx(t,{...r,value:h,onChange:N=>K(N.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(H,{children:'Start with "https://"'})]})},c={render:r=>{const h=Y();return e.jsxs(Z,{form:h,onSubmit:async()=>await $(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:J("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,S,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,T,D;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var U,w,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var V,v,E;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var q,y,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(B=(y=m.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var I,M,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,O,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var z,A,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Ze=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,u as ShowCharacterCount,l as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithForm,m as WithPlaceholder,Ze as __namedExportsOrder,Ye as default};
