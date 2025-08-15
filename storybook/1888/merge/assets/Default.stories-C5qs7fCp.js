import{j as e,r as J}from"./iframe-CHDu_H0e.js";import{B as Q}from"./Button-Dmc7YjrG.js";import{F as k}from"./FieldDescription-D82FO0nU.js";import{F as X}from"./FieldError-CyvcfapH.js";import{L as o}from"./Label-C1IZgxKk.js";import{u as Z,F as $}from"./Form-J0Z5JjQu.js";import{s as ee}from"./Action-BkMFmAtx.js";import{T as t}from"./TextField-laeKf5dQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./IconWarning-Cf1n4vGG.js";import"./Text-mNtFSOkr.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";import"./Text-DpQKzoec.js";import"./utils-DYZAD9ft.js";import"./LoadingSpinner-BjRJkl53.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./context-Bzaz4S39.js";import"./Button-Rg6_nSUL.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UC_sG4c4.js";import"./useFocus-C89269kJ.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./FieldError-CKgwUKxI.js";import"./dynamic-DKDa4OpU.js";import"./context-BsLhxCGe.js";import"./useStatic-ByFeMtaE.js";import"./getActionGroupSlot-DDu1koB4.js";import"./TextFieldBase-BlXSpsxv.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-DCfchb8N.js";import"./Form-BFPhVCnm.js";import"./Group-DC1YgkeM.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./useControlledState-DzyFh4kD.js";import"./ReactAriaControlledValueFix-BjDFD4yr.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,He={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(k,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,G]=J.useState("");return e.jsx(t,{...r,value:h,onChange:H=>G(H.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(k,{children:'Start with "https://"'})]})},c={render:r=>{const h=Z();return e.jsxs($,{form:h,onSubmit:async()=>await ee(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var S,C,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var T,R,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var U,w,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var E,V,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(v=(V=l.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var _,q,y;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(y=(q=m.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var O,B,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,P,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var K,N,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(Y=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const Je=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,u as ShowCharacterCount,l as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithForm,m as WithPlaceholder,Je as __namedExportsOrder,He as default};
