import{j as r,r as F}from"./iframe-BJ1-yygM.js";import{u as s,F as a}from"./Form-BPGCmo5L.js";import{L as n}from"./Label-bQxZtSdp.js";import{F as p,t as g}from"./Field-CVD51OnP.js";import{B as l}from"./Button-Cjtrvck7.js";import{S}from"./Section-bElmBl_A.js";import{A as b}from"./ActionGroup-eYecTP4S.js";import{s as u}from"./Action-BvXzPu3R.js";import{S as m}from"./Slider-sYn-kZns.js";import{F as j}from"./FieldError-lhJwSH7g.js";import{R as d}from"./ResetButton-BLz3Cm6N.js";import{S as c}from"./SubmitButton-YaRbcpMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DT5Kx7EO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./Label-CzmfrLRz.js";import"./utils-CcDDSJ_p.js";import"./Hidden-DoQenIIt.js";import"./dynamic-80JeIFF7.js";import"./IconChevronDown-CrWkAVaz.js";import"./remote-CmT8aojC.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./Text-DheJl8Kj.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhOdN5WZ.js";import"./ProgressBar-M3cNuExw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./ContextMenuSection-D1y8_-WQ.js";import"./lib-90ocxLs-.js";import"./Dialog-e6B9GMJE.js";import"./RSPContexts-50ouH6ts.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useEvent-BqUxelCP.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./getActionGroupSlot-0vgdHqUy.js";import"./useStatic-hN62Mrr5.js";import"./context-C5k-fmhI.js";import"./IconMinus-BkqQpWgW.js";import"./IconPlus-DcnD1nGG.js";import"./useFieldComponent-CZz1dHQJ.js";import"./useFormReset-DyV6pE3E.js";import"./FieldError-6-KO0iYn.js";import"./IconDanger-CYKvK3jT.js";import"./useRef-TDnYH5OC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:p,render:()=>{const t=async x=>{await u(1500),E(x)},f=s({defaultValues:{storage:50}}),h=g();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
