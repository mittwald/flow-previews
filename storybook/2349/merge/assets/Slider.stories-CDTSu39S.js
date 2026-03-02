import{r as g,j as r}from"./iframe-gtGtPSGX.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-B2s8Dmn4.js";import{L as n}from"./Label-ezDYxAqR.js";import{B as l}from"./Button-CvhKZeTQ.js";import{S}from"./Section-BQknUcw4.js";import{A as b}from"./ActionGroup-CLeHwFAs.js";import{s as u}from"./ActionBatch-C6WY1Daf.js";import{S as m}from"./Slider-ClQ5Ht1d.js";import{F as j}from"./FieldError-co03Ctd_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLlIyxqz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./ActionGroupView-D0kXKbJs.js";import"./Content-BghcAC3J.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./RSPContexts-L8MWaJ6n.js";import"./utils-1b_KoCGs.js";import"./Text-QzTdDFQg.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./Modal-d042eYeA.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./Overlay-CLrFplCq.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./LoadingSpinner-DnqSg6_k.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CDCzjc8m.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./useFieldComponent-BaX-M8wV.js";import"./useFormReset-TvJ_gIa-.js";import"./FieldError-DenhE7nb.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
