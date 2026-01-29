import{j as r,r as g}from"./iframe-CdVpWnc8.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-CR4d1ryI.js";import{L as n}from"./Label-CQQzXuOB.js";import{B as p}from"./Button-BYd_Eo9F.js";import{S}from"./Section-3RcIg-Ej.js";import{A as b}from"./ActionGroup-CbgbDPIr.js";import{s as l}from"./Action-eeXzbiuZ.js";import{S as m}from"./Slider-pT02PoAV.js";import{F as j}from"./FieldError-0fRgmDO9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./useRef-DpTmSntJ.js";import"./utils-ClIic5nH.js";import"./ButtonView-TCVIqSjz.js";import"./browser-CWGq_9Zm.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./useStatic-DSoJUNwo.js";import"./context-BV7cuRYy.js";import"./useFieldComponent-pH8UQhzW.js";import"./useFormReset-D5EHipFr.js";import"./FieldError-U_T6R5BY.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
