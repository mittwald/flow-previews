import{j as r,r as x}from"./iframe-DlUIOFNy.js";import{u as p,F as c}from"./Form-B3n9ilz9.js";import{B as d}from"./Button-Dl6JLVXM.js";import{S as F}from"./Section-CCNaa6u5.js";import{A as j}from"./ActionGroup-CLnuw2R2.js";import{s as a}from"./Action-DzYQUuQL.js";import{F as b}from"./FieldError-C8EsLVOD.js";import{C as o}from"./Checkbox-Baz60jRs.js";import{F as u,t as E}from"./Field-Bkg-HUj_.js";import{R as l}from"./ResetButton-DiquHNcP.js";import{S as f}from"./SubmitButton-TbwUFVd5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CY6W5xXv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./utils-D5WuX1D5.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./ContextMenuSection-tuIgae_F.js";import"./lib-90ocxLs-.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./dynamic-C-FseJcp.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./useStatic-DqJu_u90.js";import"./context-C1nEnAeo.js";import"./FieldError-D3SsQY4t.js";import"./IconDanger-BLbNCJeo.js";import"./IconCheckboxEmpty-BTYyU-Jf.js";import"./useFieldComponent-BCd2OtQE.js";import"./Form-BRPBFW97.js";import"./useFormValidation-DSe2mHjT.js";import"./useToggleState-C8b8cMvf.js";import"./useFormReset-Bdg2NgY2.js";import"./useRef-1BWU2Cdw.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:u,render:()=>{const t=async h=>{await a(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=E();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(F,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(j,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
