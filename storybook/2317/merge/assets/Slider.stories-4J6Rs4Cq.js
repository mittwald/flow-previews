import{r as g,j as r}from"./iframe-DN5oj4yX.js";import{a as s,u as a,F as u,R as d,S as c,t as F}from"./ResetButton-B5ThXBL6.js";import{L as n}from"./Label-DdsftIej.js";import{B as p}from"./Button-CF7BcIrS.js";import{S}from"./Section-DsnEjQ43.js";import{A as b}from"./ActionGroup-pSqLGzLz.js";import{s as l}from"./Action-GYKv85ul.js";import{S as m}from"./Slider-DiekQaqD.js";import{F as j}from"./FieldError-CqFPhrQB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D_PfG4t1.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./clsx-B-dksMZM.js";import"./index-DUndj3nA.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./useRef-C2EU3C7-.js";import"./utils-u73lU7bl.js";import"./ButtonView-yRoRDfha.js";import"./browser-t02O3gv-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./Text-B6wg_w_v.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dDK8KT2l.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./ContextMenuSection-D4h9xx_Q.js";import"./Dialog-CpK4NMTe.js";import"./RSPContexts-CT4Rd2GX.js";import"./OverlayArrow-BufWJWwU.js";import"./useControlledState-Dl4qb5FM.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./useCollator-DUmbl0t5.js";import"./FocusScope-BtxR-tB9.js";import"./VisuallyHidden-BipIpOcd.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./useStatic-D8kDoy_M.js";import"./context-BOqeUKEn.js";import"./useFieldComponent-DVOrWc0y.js";import"./useFormReset-B44cc5VH.js";import"./FieldError-lE_N68JV.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
