import{r as g,j as r}from"./iframe-Bh3xJiHl.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-DyvGYpOi.js";import{L as n}from"./Label-SNmrw9Fy.js";import{B as l}from"./Button-C1GDS2T5.js";import{S}from"./Section-CfFeFwol.js";import{A as b}from"./ActionGroup-B4cK5020.js";import{s as u}from"./ActionBatch-i2QcTjWd.js";import{S as m}from"./Slider-ByS3QNgj.js";import{F as j}from"./FieldError-BT5CTe02.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx5ap73z.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./clsx-B-dksMZM.js";import"./index-CTdhbmBU.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./context-BR0BeWgQ.js";import"./ActionGroupView-DfrbEJ0p.js";import"./Content-DW0SliHj.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./RSPContexts-CiTjd_Cl.js";import"./utils-Dfx959rT.js";import"./Text-yap4nkEx.js";import"./browser-8DYgdl68.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Text-CYmLgYN4.js";import"./Modal-BCLm9hzN.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./Overlay-2lTiqzcd.js";import"./OverlayContextProvider-nbeISQDl.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./IconWarning-BO5-ThfV.js";import"./remote-Bp1RK0aJ.js";import"./Dialog-CdFvlhxh.js";import"./Button-BNrfYXOb.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B8ZJpDXl.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useFocusable-BqTTqTxS.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";import"./ButtonView-DDvKz1ey.js";import"./Flex-BBxjU3qG.js";import"./useRef-B9SaQVKF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-rHl1P7lx.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./useFieldComponent-DixKAqTB.js";import"./useFormReset-CbcSutFk.js";import"./FieldError-DSfA25Iv.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
