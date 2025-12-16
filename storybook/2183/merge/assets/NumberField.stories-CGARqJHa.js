import{j as r,r as x}from"./iframe-DlUIOFNy.js";import{u as a,F as l}from"./Form-B3n9ilz9.js";import{L as o}from"./Label-CGwVPH1O.js";import{B as u}from"./Button-Dl6JLVXM.js";import{S as j}from"./Section-CCNaa6u5.js";import{A as g}from"./ActionGroup-CLnuw2R2.js";import{s as d}from"./Action-DzYQUuQL.js";import{N as t}from"./NumberField-AnXsCljQ.js";import{F as b}from"./FieldDescription-DPdg4_M-.js";import{F as E}from"./FieldError-C8EsLVOD.js";import{F as p,t as S}from"./Field-Bkg-HUj_.js";import{R as c}from"./ResetButton-DiquHNcP.js";import{S as f}from"./SubmitButton-TbwUFVd5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CY6W5xXv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Label-BWWfC27r.js";import"./utils-D5WuX1D5.js";import"./Hidden-DbzQNSr6.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./ContextMenuSection-tuIgae_F.js";import"./lib-90ocxLs-.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./dynamic-C-FseJcp.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./useStatic-DqJu_u90.js";import"./context-C1nEnAeo.js";import"./useFieldComponent-BCd2OtQE.js";import"./IconChevronUp-ChJYZpQU.js";import"./IconMinus-Dr5vqAhN.js";import"./IconPlus-Dicw3gGa.js";import"./useControlledHostValueProps-DysohucN.js";import"./FieldError-D3SsQY4t.js";import"./Form-BRPBFW97.js";import"./Group-CJxedSyo.js";import"./Input-lQWi8Z-8.js";import"./useFormValidation-DSe2mHjT.js";import"./useSpinButton-BKF6ng2A.js";import"./useFormReset-Bdg2NgY2.js";import"./useTextField-OgNJ0RzM.js";import"./IconDanger-BLbNCJeo.js";import"./useRef-1BWU2Cdw.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async F=>{await d(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=S();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
