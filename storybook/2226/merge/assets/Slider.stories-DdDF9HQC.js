import{j as r,r as g}from"./iframe-ChVCZzSM.js";import{b as s,u as a,F as u,t as F}from"./Form-Wq02j4t1.js";import{L as n}from"./Label-CXZGfNo-.js";import{R as d,S as c}from"./ResetButton-LlXKxXXn.js";import{B as p}from"./Button-DDsnJhyb.js";import{S}from"./Section-CCSEsssw.js";import{A as b}from"./ActionGroup-Da32zVp8.js";import{s as l}from"./Action-BtwaxeJT.js";import{S as m}from"./Slider-DmIiNF7Z.js";import{F as j}from"./FieldError-DeqqVmMl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-M4vO8Oa6.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./clsx-B-dksMZM.js";import"./index-B17aiXwm.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./context-DJbicbqJ.js";import"./browser-Drl1pS0o.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7WWEN6i.js";import"./utils-D2Dbeo4Y.js";import"./Hidden-CmNYW2sS.js";import"./useRef-DHWaZ2bi.js";import"./IconWarning-DiIA_Kv4.js";import"./remote-B9ld2KSn.js";import"./Text-CDV1KOVg.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./Text-JkP9a4Kb.js";import"./LoadingSpinner-CIFEKnPX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DJQIPi1Q.js";import"./useFocus-D0NBuExq.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./ContextMenuSection-CMrkKIyN.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./useStatic-DfTrwEFp.js";import"./context-5fKqnWzS.js";import"./useFieldComponent--rNpfgQ4.js";import"./useFormReset-BrkbasLl.js";import"./FieldError-CO11AzDW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),qr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vr=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,vr as __namedExportsOrder,qr as default};
