import{j as r,r as g}from"./iframe-CgWIZppF.js";import{b as s,u as a,F as u,t as F}from"./Form-DaCB2sWj.js";import{L as n}from"./Label-8Ls1PMPy.js";import{R as d,S as c}from"./ResetButton-CovhuYqQ.js";import{B as p}from"./Button-B2z86NVg.js";import{S}from"./Section-DjNOq_vK.js";import{A as b}from"./ActionGroup-C2VcbEo2.js";import{s as l}from"./Action-ChgPhfJd.js";import{S as m}from"./Slider-CsfGfr-Q.js";import{F as j}from"./FieldError-Dr7a0W2N.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BqY2cEs-.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./clsx-B-dksMZM.js";import"./index-D8vpbAff.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./context-DG5uy-SY.js";import"./browser-C8d3FCf4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bv5UhUCK.js";import"./utils-CqFMFg3g.js";import"./Hidden-td7Ld2aU.js";import"./useRef-o2mxGtfc.js";import"./IconWarning-CJrmQcXC.js";import"./remote-DVGHPh_8.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./ContextMenuSection-BUslXVLP.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./useStatic-CFKrTcwu.js";import"./context-B2MrOWQ_.js";import"./useFieldComponent-BZyKlvwh.js";import"./useFormReset-BEtHvHxA.js";import"./FieldError-xtpbDfud.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),qr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
