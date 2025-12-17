import{j as r,r as F}from"./iframe-DCi2GPXy.js";import{u as s,F as a}from"./Form-BEJ7ZDfr.js";import{L as n}from"./Label-DgDJIBjn.js";import{B as l}from"./Button-BvlVjfXN.js";import{S as g}from"./Section-DQ10C63T.js";import{A as S}from"./ActionGroup-BxCfhcrh.js";import{s as p}from"./Action-DSvpN5_w.js";import{S as m}from"./Slider-CIRr0GoJ.js";import{F as b}from"./FieldError-CX3tsRfV.js";import{F as u,t as j}from"./Field-DrGuRbFu.js";import{R as d}from"./ResetButton-D6Wzkttq.js";import{S as c}from"./SubmitButton-jwhLPFJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-rXh1EgRD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./Label-DnXzFWpe.js";import"./utils-vPyJ8qyD.js";import"./Hidden-DFhlcUMl.js";import"./IconChevronDown-DONjXQZK.js";import"./remote-BdJtJUco.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./Text-DKbhm8jI.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./ContextMenuSection-D110vvwB.js";import"./lib-90ocxLs-.js";import"./Dialog-DTMFojiS.js";import"./RSPContexts-BfriozQD.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./dynamic-68RthJrk.js";import"./getActionGroupSlot-7vmQNanS.js";import"./useStatic-jalrqC7_.js";import"./context-sCXpQMxk.js";import"./IconMinus-ClGR6eVr.js";import"./IconPlus-RXQDsK8Z.js";import"./useFieldComponent-D5bCUPLo.js";import"./useFormReset-C2pwuPUB.js";import"./FieldError-GB-3lq6u.js";import"./IconDanger-RXl46e71.js";import"./useRef-Bmjm0uMP.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:u,render:()=>{const t=async x=>{await p(1500),E(x)},f=s({defaultValues:{storage:50}}),h=j();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(S,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,e as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
