import{j as r,r as g}from"./iframe-W1iyoXhf.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-VIcfaLD7.js";import{L as n}from"./Label-h36KWMeP.js";import{B as p}from"./Button-IzhK2U-6.js";import{S}from"./Section-CeOL9WXO.js";import{A as b}from"./ActionGroup-C1jzAEQv.js";import{s as l}from"./Action-BaKsvCHV.js";import{S as m}from"./Slider-BwEqM1n_.js";import{F as j}from"./FieldError-V9E4UopR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X2nPVSXv.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./clsx-B-dksMZM.js";import"./index-BUhRJiS3.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./useRef-HGB3QOF9.js";import"./utils-Co92dFN-.js";import"./browser-D1HYvIQy.js";import"./ButtonView-DeVNGu_o.js";import"./Label.module-CUYTf9Jc.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./ContextMenuSection-DWjrG_wk.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./useControlledState-BeXX8b-c.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";import"./getActionGroupSlot-nARO-zR5.js";import"./useStatic-DFE9WV1t.js";import"./context-Cx4Tf49f.js";import"./useFieldComponent-CeQ6dqWY.js";import"./useFormReset-DYb2_5Lx.js";import"./FieldError-CaERYIVC.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
