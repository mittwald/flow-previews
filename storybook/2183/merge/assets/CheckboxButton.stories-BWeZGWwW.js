import{j as r,r as C}from"./iframe-VGYf9uSR.js";import{u as a,F as p}from"./Form-CqpM73eC.js";import{F as c,t as j}from"./Field-FVf6FHyZ.js";import{B as l}from"./Button-C33JxfbF.js";import{S as B}from"./Section-DooU3tnD.js";import{A as b}from"./ActionGroup-BlzYnYWF.js";import{s as u}from"./Action-BU572vpz.js";import{T as i}from"./Text-CGbJaU4z.js";import{C as m}from"./Content-BQB-04b5.js";import{F as E}from"./FieldError-CLzXjLUN.js";import{C as d}from"./CheckboxButton-51ipoJl2.js";import{R as h}from"./ResetButton-CH8u8jqD.js";import{S as f}from"./SubmitButton-Q6E9h_vz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BXsOFxWd.js";import"./PropsContextProvider-BJkjz94f.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./ContextMenuSection-BlQWtT47.js";import"./lib-90ocxLs-.js";import"./context-DPoGZDoo.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./useStatic-DRLyxIeE.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./FieldError-AWx0XaHn.js";import"./IconDanger-B5Kx1O1H.js";import"./useFieldComponent-DiUYLu0s.js";import"./Activity-CX_biUm5.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Checkbox-CYKBG0Ur.js";import"./IconCheckboxEmpty-CWaEUbQu.js";import"./Form-CEBTvUmY.js";import"./useFormValidation-DNcRsa8m.js";import"./useToggleState-BaOAdKf3.js";import"./useFormReset-D2LFGRel.js";import"./useRef-CXvi-_o4.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ar={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
