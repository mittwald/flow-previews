import{j as r,r as g}from"./iframe-l1bkuF5f.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-Bus3ZjXK.js";import{L as n}from"./Label-DX1aPacI.js";import{B as p}from"./Button-pfxdB-3A.js";import{S}from"./Section-CZdVIDcK.js";import{A as b}from"./ActionGroup-Bk_92t7d.js";import{s as l}from"./Action-DCncdG_g.js";import{S as m}from"./Slider-CFVSjQiz.js";import{F as j}from"./FieldError-mREW9pPY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrVBKZhY.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./useRef-rZqwvUwE.js";import"./utils-DCQYs-TM.js";import"./ButtonView-8r0sbocL.js";import"./browser-BVqvvpC_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./ContextMenuSection-ktUqVNzZ.js";import"./Dialog-DkFD9hxJ.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./VisuallyHidden-GyOwAGCf.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./useStatic-BFe86sAb.js";import"./context-DTty7kAQ.js";import"./useFieldComponent-C26zWsIy.js";import"./useFormReset-B-5bGtDV.js";import"./FieldError-DlCb0goX.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
