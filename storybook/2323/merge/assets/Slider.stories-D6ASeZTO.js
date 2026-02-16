import{r as g,j as r}from"./iframe-CIhdjqSz.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-BOR4CHdA.js";import{L as n}from"./Label-DvNJKWaN.js";import{B as l}from"./Button--NFWCTgK.js";import{S}from"./Section-DcDeoOZJ.js";import{A as b}from"./ActionGroup-CRpQMoSl.js";import{s as u}from"./ActionBatch-DvjVnKvH.js";import{S as m}from"./Slider-Djx6ztL5.js";import{F as j}from"./FieldError-C6Vi3jlh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DC2aGj60.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./Overlay-knx40pXC.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./LoadingSpinner-CnQRgWlh.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./utils-3Ll5mTsj.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./Text-BWZGL9q7.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./VisuallyHidden-Szd7uPuS.js";import"./ActionGroupView-DErmmX1C.js";import"./Content-C_lJcoxE.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./Text-DgrqnOua.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Modal-BPdWM4cS.js";import"./ButtonView-DCesTJ_4.js";import"./Flex-JT-R-kzn.js";import"./useRef-ZatrU-r0.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B32Hv_M2.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./useFieldComponent-BDBEatho.js";import"./useFormReset-CCc0UGFI.js";import"./FieldError-BrGZX-9W.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
