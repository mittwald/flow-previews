import{j as e,r as $}from"./iframe-xv1hkYrp.js";import{B as ee}from"./Button-CxiqmFwG.js";import{F as J}from"./FieldDescription-BGM9sp4N.js";import{F as re}from"./FieldError-BheKx6KK.js";import{L as o}from"./Label-DC7JJJSp.js";import{u as te,F as oe}from"./Form-HXOxhIxL.js";import{s as se}from"./Action-DwAWbs1F.js";import{T as t}from"./TextField-nzyaX_SH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./IconWarning-0FGrLhxS.js";import"./Text-DbY3Cuep.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Text-B_3Y_Nze.js";import"./utils-CpTHh5rs.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./context-D4r7bTNU.js";import"./Button-BusXuZI0.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BR4zi6f8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-o1s-vRpH.js";import"./useFocus-CfLpRQBT.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";import"./FieldError-wrM_YjD9.js";import"./dynamic-DKDa4OpU.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";import"./getActionGroupSlot-hBdF3hkn.js";import"./TextFieldBase-CzAvX_GT.js";import"./FormField.module-CqWyJNQI.js";import"./TextField-D3hWr_Bw.js";import"./Form-B-L3i4zG.js";import"./Group-B3GwFloQ.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./useControlledState-BbRhH2Ee.js";import"./ReactAriaControlledValueFix-CrTiyXoc.js";const{action:Q}=__STORYBOOK_MODULE_ACTIONS__,Ze={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:Q("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(J,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},d={render:r=>{const[x,X]=$.useState("");return e.jsx(t,{...r,value:x,onChange:Z=>X(Z.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},c={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(re,{children:"Invalid input"}),e.jsx(J,{children:'Start with "https://"'})]})},u={render:r=>{const x=te();return e.jsxs(oe,{form:x,onSubmit:async()=>await se(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(ee,{type:"submit",children:"Submit"})]})}},h={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:Q("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var F,g,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(L=(g=s.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var b,S,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,R,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(f=(R=i.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var T,D,U;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(U=(D=n.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var w,W,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,v,y;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var O,_,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,I,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var P,A,K;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...(K=(A=c.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var N,Y,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var z,G,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const $e=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as ReadOnly,n as Required,h as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,c as WithFieldError,u as WithForm,m as WithPlaceholder,$e as __namedExportsOrder,Ze as default};
