import{j as e,r as J}from"./iframe-DRWwRHPb.js";import{B as Q}from"./Button-C17kQQYD.js";import{F as k}from"./FieldDescription-B8gji3F1.js";import{F as X}from"./FieldError-BxgQBJxP.js";import{L as o}from"./Label-DMZs6_dS.js";import{u as Z,F as $}from"./Form-BZ4izQL_.js";import{s as ee}from"./Action-Bq2hQ8Bh.js";import{T as t}from"./TextField-rWg3HYM9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./IconWarning-DhSonKOB.js";import"./Text-BIokAaTQ.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./Text-XTosNzcc.js";import"./utils-9ciE-ZWz.js";import"./LoadingSpinner-B_6uztW9.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./context-jL0Ioa3t.js";import"./Button-BJEoKlME.js";import"./ProgressBar-lrbeVblJ.js";import"./Label-DWKl8ZCI.js";import"./Hidden-CgY-Zzb9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C1sZK0NB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZFGRV58.js";import"./useFocus-Cklz1p5-.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocusable-CTYzjUzk.js";import"./FieldError-sbX835HY.js";import"./dynamic-DKDa4OpU.js";import"./context-GwQ3zI17.js";import"./useStatic-u3WHDxzv.js";import"./getActionGroupSlot-C6b8pLJW.js";import"./TextFieldBase-DD8VXus3.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-BHCgELYj.js";import"./Form-C-fYDZS9.js";import"./Group-DyuuzcKr.js";import"./useTextField-C4Pn4RsW.js";import"./useFormReset-XyyE6UJM.js";import"./useControlledState-BmVuB4nj.js";import"./ReactAriaControlledValueFix-v2LYO4nG.js";const{action:z}=__STORYBOOK_MODULE_ACTIONS__,He={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(k,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,G]=J.useState("");return e.jsx(t,{...r,value:h,onChange:H=>G(H.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(X,{children:"Invalid input"}),e.jsx(k,{children:'Start with "https://"'})]})},c={render:r=>{const h=Z();return e.jsxs($,{form:h,onSubmit:async()=>await ee(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(Q,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:z("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var x,F,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var b,g,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
