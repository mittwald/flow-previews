import{j as r,r as g}from"./iframe-CZIIjdGx.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-DxytxUCJ.js";import{L as n}from"./Label-BCeZc6nh.js";import{B as p}from"./Button-ECMB5KMY.js";import{S}from"./Section-B_Dc3QaP.js";import{A as b}from"./ActionGroup-CZoVtz00.js";import{s as l}from"./Action-Bw6l21lc.js";import{S as m}from"./Slider-CHRH-3v2.js";import{F as j}from"./FieldError-BwbB6Ytj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-gRVBa7iD.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./clsx-B-dksMZM.js";import"./index-7Gan3Sd3.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./useRef-DQnLGkfA.js";import"./utils-CzlwFdSi.js";import"./ButtonView-H4guPIkA.js";import"./browser-Cl51s5Ql.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFDeIEOr.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useFocusable-deUO30SV.js";import"./ContextMenuSection-BEfLxAcM.js";import"./Dialog-Cut31Nqj.js";import"./RSPContexts-BcZ6F9IB.js";import"./OverlayArrow-PNzJR_LP.js";import"./useControlledState-DqlM9bHJ.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./useStatic-BkmFYiV8.js";import"./context-D5Js5cga.js";import"./useFieldComponent-DWG920Yi.js";import"./useFormReset-DwvZDjIx.js";import"./FieldError-Cm712Nbp.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
