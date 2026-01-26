import{j as r,r as g}from"./iframe-ICCBaEZ0.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-DHM0HwV0.js";import{L as n}from"./Label-CdS4JTo9.js";import{B as p}from"./Button-BPUjkcWl.js";import{S}from"./Section-f7ELsjIS.js";import{A as b}from"./ActionGroup-Cyu4G9Rw.js";import{s as l}from"./Action-BI-eqtgf.js";import{S as m}from"./Slider-BB4qTJSW.js";import{F as j}from"./FieldError-CXiPiawI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./useRef-CiWut0dQ.js";import"./utils-Bdyed02U.js";import"./ButtonView-BszEJvVk.js";import"./browser-BXZux_wF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./context-CFn3lEGQ.js";import"./useFieldComponent-C2gLyH5u.js";import"./useFormReset-mc9YwuWr.js";import"./FieldError-Uso8nKHu.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
