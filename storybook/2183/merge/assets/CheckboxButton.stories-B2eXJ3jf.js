import{j as r,r as C}from"./iframe-C3qryY9m.js";import{u as d,F as a}from"./Form-Dzh9-M4k.js";import{F as c,t as j}from"./Field-C5YwXwEF.js";import{B as l}from"./Button-DjS8Y37J.js";import{S as B}from"./Section-r39qLNYF.js";import{A as b}from"./ActionGroup-pX8NZfE-.js";import{s as u}from"./Action-BLUuMHcv.js";import{T as i}from"./Text-D-8m5QW2.js";import{C as m}from"./Content-tUfsb4VC.js";import{F as E}from"./FieldError-2lUipCQG.js";import{C as p}from"./CheckboxButton-CXlyHFqq.js";import{R as h}from"./ResetButton-f8kamCMI.js";import{S as f}from"./SubmitButton-DNmC6Pyz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-7Ut6r0Ca.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-B40s9Zwa.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./clsx-B-dksMZM.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnGr114.js";import"./utils-DpUn2o29.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./ContextMenuSection-BM6PTmuP.js";import"./lib-90ocxLs-.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./Text-ugyEWZ3z.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./useStatic-CxeJCkNi.js";import"./context-BBcvZ-pJ.js";import"./EmulatedBoldText-BhqmPl42.js";import"./FieldError-Bjrpvc0X.js";import"./IconDanger-CnINUXvw.js";import"./Checkbox-Ckek2Zg1.js";import"./IconCheckboxEmpty-Cf2KA0lF.js";import"./useFieldComponent-BCb9qeqT.js";import"./Form-3X5C6e4Q.js";import"./useFormValidation-DvJkknbD.js";import"./useToggleState-B7PWI6oX.js";import"./useFormReset-CU22rOa5.js";import"./useRef-IOGWkLv5.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(p,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(p,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
