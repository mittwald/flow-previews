import{r as g,j as r}from"./iframe-B___tkgA.js";import{a as s,u as a,F as u,R as d,S as c,t as F}from"./ResetButton-Crujzy8J.js";import{L as n}from"./Label-WD9nd_On.js";import{B as p}from"./Button-CK4qYUON.js";import{S}from"./Section-DE9sm5BA.js";import{A as b}from"./ActionGroup-BHdTvu9o.js";import{s as l}from"./Action-DRwD3AMr.js";import{S as m}from"./Slider-CdfNHbmC.js";import{F as j}from"./FieldError-DrmvSGqW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEuCOou2.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./useRef-CEF838Jv.js";import"./utils-BoKG2kRw.js";import"./ButtonView-B7YCzKos.js";import"./browser-C6gsgKxf.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./ContextMenuSection-BssuI41M.js";import"./Dialog-SqXlQhu9.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./useStatic-DSdFfo4Y.js";import"./context-iZF9qbeo.js";import"./useFieldComponent-vfbWFIJK.js";import"./useFormReset-BMzMnmaN.js";import"./FieldError-Bxvpebgp.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
