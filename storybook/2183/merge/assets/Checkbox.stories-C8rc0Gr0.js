import{j as r,r as x}from"./iframe-C3qryY9m.js";import{u as p,F as c}from"./Form-Dzh9-M4k.js";import{F as a,t as F}from"./Field-C5YwXwEF.js";import{B as d}from"./Button-DjS8Y37J.js";import{S as j}from"./Section-r39qLNYF.js";import{A as b}from"./ActionGroup-pX8NZfE-.js";import{s as u}from"./Action-BLUuMHcv.js";import{C as o}from"./Checkbox-Ckek2Zg1.js";import{F as E}from"./FieldError-2lUipCQG.js";import{R as l}from"./ResetButton-f8kamCMI.js";import{S as f}from"./SubmitButton-DNmC6Pyz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-7Ut6r0Ca.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-B40s9Zwa.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./clsx-B-dksMZM.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./utils-DpUn2o29.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./ContextMenuSection-BM6PTmuP.js";import"./lib-90ocxLs-.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./useStatic-CxeJCkNi.js";import"./context-BBcvZ-pJ.js";import"./IconCheckboxEmpty-Cf2KA0lF.js";import"./useFieldComponent-BCb9qeqT.js";import"./FieldError-Bjrpvc0X.js";import"./Form-3X5C6e4Q.js";import"./useFormValidation-DvJkknbD.js";import"./useToggleState-B7PWI6oX.js";import"./useFormReset-CU22rOa5.js";import"./IconDanger-CnINUXvw.js";import"./useRef-IOGWkLv5.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Vr as default};
