import{r as g,j as r}from"./iframe-CtuK0rEJ.js";import{a as s,u as a,F as u,R as d,S as c,t as F}from"./ResetButton-BX7hRNPH.js";import{L as n}from"./Label-Cngj9T_J.js";import{B as p}from"./Button-CC2cGGC1.js";import{S}from"./Section-2iB_IAde.js";import{A as b}from"./ActionGroup-BTUNgIac.js";import{s as l}from"./Action-PwkWFif3.js";import{S as m}from"./Slider-2IIVvdPp.js";import{F as j}from"./FieldError-BKJxUnBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6fOzfTlj.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./clsx-B-dksMZM.js";import"./index-DPf65gvx.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./useRef-C7qv1QkI.js";import"./utils-C1DNWP44.js";import"./ButtonView-I97CEkNt.js";import"./browser-Up8UMddv.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./Text-CyAseKfN.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./ContextMenuSection-J2A0uHtm.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./useStatic-M0CnbsK2.js";import"./context-CuLUjLGN.js";import"./useFieldComponent-CPjzSNK0.js";import"./useFormReset-C6F9Oqzr.js";import"./FieldError-AgjktxA6.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
