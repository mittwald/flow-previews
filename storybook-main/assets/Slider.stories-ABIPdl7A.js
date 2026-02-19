import{r as g,j as r}from"./iframe-B2CTi6cm.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-DfhEXo1u.js";import{L as n}from"./Label-DccH0oyj.js";import{B as l}from"./Button-_yLWek3e.js";import{S}from"./Section-Cp9Lc84Y.js";import{A as b}from"./ActionGroup-DUcqnoyz.js";import{s as u}from"./ActionBatch-BYvDqB3T.js";import{S as m}from"./Slider-CwwJM1PD.js";import{F as j}from"./FieldError-Cpb_w0Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQSnLDrl.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./ActionGroupView-CqxJNoqF.js";import"./Content-CXBi8j7T.js";import"./Heading-DlmM6Hn_.js";import"./Heading-C9cKQsqE.js";import"./RSPContexts-BnlNRtVT.js";import"./utils-CFhs-kxq.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./Modal-CkPrUDri.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./Overlay-BCcgEorp.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./LoadingSpinner-DnfUZyUE.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Dialog-D2pl7IFn.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";import"./ButtonView-vAiOEZiU.js";import"./Flex-B3V1yHmd.js";import"./useRef-vkhYMc-H.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DUei6bL0.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./useFieldComponent-DO-gEAYc.js";import"./useFormReset-BMX0RNLQ.js";import"./FieldError-Cj-zQd3o.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
