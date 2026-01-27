import{j as r,r as g}from"./iframe-DcHapM8k.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-CulSlpBz.js";import{L as n}from"./Label-C_3MZF40.js";import{B as p}from"./Button-C1DQEdG6.js";import{S}from"./Section-BLxdCMFP.js";import{A as b}from"./ActionGroup-Bnr4k_2X.js";import{s as l}from"./Action-CLgptl7p.js";import{S as m}from"./Slider-BXUcdwNF.js";import{F as j}from"./FieldError-BzyrakFb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-FNOw2F.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./clsx-B-dksMZM.js";import"./index-Ba4Wgmch.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./useRef-JV7f1HAx.js";import"./utils-BN-Wf9GB.js";import"./ButtonView-Bx--fAkF.js";import"./browser-BhJkGPhR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./ContextMenuSection-Bxsn88Zf.js";import"./Dialog-gML-GktL.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./useControlledState-CD18I4-6.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./useStatic-lCMR7rr_.js";import"./context-C5BkLhj5.js";import"./useFieldComponent-DLXIz4kk.js";import"./useFormReset-DByFRxt8.js";import"./FieldError-DeohvbOn.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
