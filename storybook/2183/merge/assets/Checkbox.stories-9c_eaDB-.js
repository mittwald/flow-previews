import{j as r,r as x}from"./iframe-DCi2GPXy.js";import{u as p,F as c}from"./Form-BEJ7ZDfr.js";import{B as d}from"./Button-BvlVjfXN.js";import{S as F}from"./Section-DQ10C63T.js";import{A as j}from"./ActionGroup-BxCfhcrh.js";import{s as a}from"./Action-DSvpN5_w.js";import{F as b}from"./FieldError-CX3tsRfV.js";import{C as o}from"./Checkbox-DvX77aZZ.js";import{F as u,t as E}from"./Field-DrGuRbFu.js";import{R as l}from"./ResetButton-D6Wzkttq.js";import{S as f}from"./SubmitButton-jwhLPFJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-rXh1EgRD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./IconChevronDown-DONjXQZK.js";import"./remote-BdJtJUco.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./Text-DKbhm8jI.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./utils-vPyJ8qyD.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./Label-DnXzFWpe.js";import"./Hidden-DFhlcUMl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./ContextMenuSection-D110vvwB.js";import"./lib-90ocxLs-.js";import"./Dialog-DTMFojiS.js";import"./RSPContexts-BfriozQD.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./dynamic-68RthJrk.js";import"./getActionGroupSlot-7vmQNanS.js";import"./useStatic-jalrqC7_.js";import"./context-sCXpQMxk.js";import"./FieldError-GB-3lq6u.js";import"./IconDanger-RXl46e71.js";import"./IconCheckboxEmpty-AESoQ4a0.js";import"./useFieldComponent-D5bCUPLo.js";import"./Form-Dfwyevmy.js";import"./useFormValidation-DJEczJgL.js";import"./useToggleState-B-3-Mjcg.js";import"./useFormReset-C2pwuPUB.js";import"./useRef-Bmjm0uMP.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:u,render:()=>{const t=async h=>{await a(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=E();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(F,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(j,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
