import{j as r,r as C}from"./iframe-xTeLnFvu.js";import{u as a,F as p}from"./Form-CzGdw75V.js";import{F as c,t as j}from"./Field-CAkbrvl3.js";import{B as l}from"./Button-BA5_aaZE.js";import{S as B}from"./Section-o_jduYUp.js";import{A as b}from"./ActionGroup-TgHXsP3h.js";import{s as u}from"./Action-GyTbi50D.js";import{T as i}from"./Text-CX0dnSU4.js";import{C as m}from"./Content-BzWg7sN8.js";import{F as E}from"./FieldError-oOsFR_NQ.js";import{C as d}from"./CheckboxButton-DbVn4vJ7.js";import{R as h}from"./ResetButton-DEvz3aTX.js";import{S as f}from"./SubmitButton-DWFkkN3I.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-ndn1boAo.js";import"./PropsContextProvider-B-9yYF9r.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./EmulatedBoldText-st1IlPV2.js";import"./FieldError-Cxb9ZjML.js";import"./IconDanger-DpVgPae0.js";import"./useFieldComponent-Brjsz3RP.js";import"./Activity-D0VzS_Xj.js";import"./TranslationProvider-Y_3SKiEv.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Checkbox-n2MCTQAb.js";import"./IconCheckboxEmpty-7U5xO_Vs.js";import"./Form-CFtpyLOk.js";import"./useFormValidation-CD-qIFlG.js";import"./useToggleState-VQNppDql.js";import"./useFormReset-Co6bkbVB.js";import"./useRef-D_8ZkygH.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ar={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Ir as __namedExportsOrder,Ar as default};
