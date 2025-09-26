import{j as e,r as $}from"./iframe-QYa5fCvd.js";import{B as ee}from"./Button-DtEggira.js";import{F as J}from"./FieldDescription-qfycfnRL.js";import{F as re}from"./FieldError-DIhpKsfz.js";import{L as o}from"./Label-REb55_aV.js";import{u as te,F as oe}from"./Form-DcoODqVz.js";import{s as se}from"./Action-BQI9QTKN.js";import{T as t}from"./TextField-Baju2b12.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./IconWarning-DEqdDiS_.js";import"./Text-D98HT4db.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Text-BD3o8xQb.js";import"./utils-lb8KrrIv.js";import"./LoadingSpinner-DKDkxF6a.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./context-BsMul4n4.js";import"./Button-u3ZYuRRI.js";import"./ProgressBar-BeUyRfom.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKI1i-pB.js";import"./useFocus-D2QZKYlR.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./FieldError-BGtuYqZa.js";import"./dynamic-BhpRGc-9.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./getActionGroupSlot-8GawWr3Y.js";import"./TextFieldBase-CUcG1Nye.js";import"./FormField.module-CqWyJNQI.js";import"./TextField-DYh5UApz.js";import"./Form-BOiG0M1T.js";import"./Group-BKMRBfUs.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./useControlledState-Bu1M14oY.js";import"./ReactAriaControlledValueFix-C2f91eDD.js";const{action:Q}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:Q("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(J,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},m={render:r=>{const[x,X]=$.useState("");return e.jsx(t,{...r,value:x,onChange:Z=>X(Z.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},d={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},c={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(re,{children:"Invalid input"}),e.jsx(J,{children:'Start with "https://"'})]})},u={render:r=>{const x=te();return e.jsxs(oe,{form:x,onSubmit:async()=>await se(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(ee,{type:"submit",children:"Submit"})]})}},h={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:Q("onChange"),...r,children:e.jsx(o,{children:"User name"})})};var F,g,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(L=(g=s.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var b,S,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var O,_,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,I,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var P,A,K;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const er=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as ReadOnly,n as Required,h as ShowCharacterCount,m as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,c as WithFieldError,u as WithForm,d as WithPlaceholder,er as __namedExportsOrder,$e as default};
