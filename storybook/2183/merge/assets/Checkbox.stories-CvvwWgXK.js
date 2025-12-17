import{j as r,r as x}from"./iframe-UtMdsYXa.js";import{u as p,F as c}from"./Form-Dg4JPE9c.js";import{F as a,t as F}from"./Field-CMF5jS4o.js";import{B as d}from"./Button-pSxy78IN.js";import{S as j}from"./Section-SYRWIowM.js";import{A as b}from"./ActionGroup-DZyBNkn6.js";import{s as u}from"./Action-BA-MmHGl.js";import{F as E}from"./FieldError-BmlJMAuy.js";import{C as o}from"./Checkbox-DA25epO4.js";import{R as l}from"./ResetButton-B0bE7Gvr.js";import{S as f}from"./SubmitButton-uCsSnl3l.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DFxdAZBn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-JAnuGjI7.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./clsx-B-dksMZM.js";import"./index-BrcrHHEG.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./IconChevronDown-DitnVNWB.js";import"./remote-YAokn8An.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./Text-TG940Z8h.js";import"./EmulatedBoldText-CWBgkHDb.js";import"./Text-3HTz8ZLb.js";import"./utils-43m9YPYy.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DZZrikYU.js";import"./ProgressBar-BxQgVB3L.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";import"./ContextMenuSection-JK-KhABs.js";import"./lib-90ocxLs-.js";import"./Dialog-BGnO5-Kp.js";import"./RSPContexts-CAfmMSBB.js";import"./OverlayArrow-DHpPSdaa.js";import"./useControlledState-DYYNjqGW.js";import"./Collection-5zvqan3L.js";import"./CollectionBuilder-D_G3_Vuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./Separator-BuVWMkAV.js";import"./SelectionManager-DB_XnTm4.js";import"./useEvent-CJ7SBUWT.js";import"./useCollator-BSunnwIT.js";import"./FocusScope-ZZQ9tzAD.js";import"./VisuallyHidden-DNcxVgpY.js";import"./getActionGroupSlot-COea1xII.js";import"./useStatic-CvZMYmSw.js";import"./context-BLALRgjO.js";import"./FieldError-BkBhZCre.js";import"./IconDanger-hxBcn6Cd.js";import"./IconCheckboxEmpty-Dm3YqqLO.js";import"./useFieldComponent-CylG0yj1.js";import"./Form-47Gl7tXu.js";import"./useFormValidation-BfzGcjKC.js";import"./useToggleState-Du7GqUPH.js";import"./useFormReset-ZjFHD53Q.js";import"./useRef-CBpIY8Vw.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
