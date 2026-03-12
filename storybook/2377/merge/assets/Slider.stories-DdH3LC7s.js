import{r as g,j as r}from"./iframe-JHVlk64D.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./FormRootError-D0QsKVKu.js";import{L as n}from"./Label-BVSjd_Ef.js";import{B as l}from"./Button-BViHWx5D.js";import{S}from"./Section-Dlc8DpVc.js";import{A as b}from"./ActionGroup-DZgnsmND.js";import{s as u}from"./ActionBatch-1qW2-LTl.js";import{S as m}from"./Slider-D2XFzq_n.js";import{F as j}from"./FieldError-DkKHEf-8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B8NPXIjt.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./ActionGroupView-Bc17c7sh.js";import"./Content-BX3eZD3n.js";import"./Heading-B5Pon5qA.js";import"./Heading-DWwskDgI.js";import"./RSPContexts-BaSES6Qq.js";import"./utils-D9FbIhNL.js";import"./Text-D35H-2yr.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./Modal-Dd9stJQr.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./Overlay-KmyQfYDW.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./LoadingSpinner-Bl1fRewj.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./Dialog-DIqACfnD.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./ButtonView-BHsHy_WH.js";import"./Flex-CNTnvpl9.js";import"./useRef-m6O5GTv_.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-0h5wVCnN.js";import"./getActionGroupSlot-DipsrrNF.js";import"./useFieldComponent-Dm_EHwx7.js";import"./useFormReset-CuVjUJoL.js";import"./FieldError-CB6gvg8S.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Gr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,e as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
