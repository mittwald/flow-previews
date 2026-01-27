import{j as r,r as C}from"./iframe-kP2HEfFS.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-CSTft9O0.js";import{B as l}from"./Button-D2SKyW-T.js";import{S as B}from"./Section-6hxUOdoj.js";import{A as b}from"./ActionGroup-CwS6zLOi.js";import{s as u}from"./Action-DkWPc0_f.js";import{T as i}from"./Text-DmTsXHLN.js";import{C as m}from"./CheckboxButton-BErW7Cf7.js";import{C as d}from"./Content-C-6lFjS_.js";import{F as E}from"./FieldError-CJUuAB6W.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bb3YYypk.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./useRef-Ddb8Xdr-.js";import"./utils-C12UPk0k.js";import"./ButtonView-B-wfMpgB.js";import"./browser-CLBqp6VR.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./ContextMenuSection-Dtdvg2h1.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./useControlledState-K2EmMrc1.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./Text-Bt0sFzeR.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./useStatic-D099is7R.js";import"./context-Dy6MMTPO.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Checkbox-Bn4xcsjk.js";import"./useFieldComponent-D28HcwQQ.js";import"./FieldError-BL6ZnBFp.js";import"./Form-D51h5Mwy.js";import"./useFormValidation-CKIaBDhF.js";import"./useToggleState-CQEaldhR.js";import"./useFormReset-BTQYEics.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
