import{j as r,r as g}from"./iframe-ByQojKkA.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-Cu7HTX9i.js";import{L as n}from"./Label-zx0kmle1.js";import{B as p}from"./Button-DG0b__xZ.js";import{S}from"./Section-C0tACEzy.js";import{A as b}from"./ActionGroup-CnN8LnNO.js";import{s as l}from"./Action-D7dGsrUH.js";import{S as m}from"./Slider-CWcdaGDN.js";import{F as j}from"./FieldError-Dl1gROKX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-G0P_JzfN.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./clsx-B-dksMZM.js";import"./index-DifIgMrD.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./useRef-hk2_5oTi.js";import"./utils-D3Fm7Ut8.js";import"./ButtonView-B55WSwFj.js";import"./browser-BgQK0KeO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwnADfjY.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocusable-BRqzZMJF.js";import"./ContextMenuSection-6SzjTnwS.js";import"./Dialog-B4qMOx1Z.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";import"./getActionGroupSlot-D7PQruO1.js";import"./useStatic-ClNGpIKI.js";import"./context-Buk6ndZl.js";import"./useFieldComponent-Blt-XhY9.js";import"./useFormReset-CjuTJ3ym.js";import"./FieldError-DskIGmIg.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
