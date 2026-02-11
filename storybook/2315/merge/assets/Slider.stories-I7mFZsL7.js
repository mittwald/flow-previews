import{r as g,j as r}from"./iframe-BKpTcuej.js";import{a as s,u as a,F as u,R as d,S as c,t as F}from"./ResetButton-C9cetwLM.js";import{L as n}from"./Label-sjxWv79d.js";import{B as p}from"./Button-CHR5Lto_.js";import{S}from"./Section-fJmoAqS0.js";import{A as b}from"./ActionGroup-BFeEFdIr.js";import{s as l}from"./Action-CRs_TTFg.js";import{S as m}from"./Slider-DQOA23rF.js";import{F as j}from"./FieldError-BmJ7-crS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5pLUzdK.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./clsx-B-dksMZM.js";import"./index-DwEhfHus.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./context-Bt___W0l.js";import"./useRef-DgPw_1ZE.js";import"./utils-BuTqHWUg.js";import"./ButtonView-CBwiPc4X.js";import"./browser-DdR_cYXU.js";import"./Label.module-CUYTf9Jc.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Text-_5F14b0c.js";import"./LoadingSpinner-CSX_cmFV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WezQgFMH.js";import"./ProgressBar-gtPQqryh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwvZqs_N.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useFocusable-8gC31DNg.js";import"./ContextMenuSection-CP33TlWV.js";import"./Dialog-CnIAbR2d.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useControlledState-C61mrJlx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./useStatic-D1T02rpq.js";import"./context-Do1O8LUQ.js";import"./useFieldComponent-AXq55mny.js";import"./useFormReset-DjxTrJRS.js";import"./FieldError-Bf7-_15k.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,Ar as __namedExportsOrder,vr as default};
