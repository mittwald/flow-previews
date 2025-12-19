import{j as r,r as g}from"./iframe-d8TPt7Dq.js";import{b as s,u as a,F as u,t as F}from"./Form-9w--j5Mp.js";import{L as n}from"./Label-DUZNK_N3.js";import{R as d,S as c}from"./ResetButton-DO1Nuvjf.js";import{B as p}from"./Button-CG9B_DsC.js";import{S}from"./Section-gs_NZoj_.js";import{A as b}from"./ActionGroup-Bto2kHza.js";import{s as l}from"./Action-BNptIGGg.js";import{S as m}from"./Slider-BER8IM98.js";import{F as j}from"./FieldError-Z630sQ-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-q6Z3lF5f.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./browser-Cq89yPle.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ddce6lPW.js";import"./utils-CQWCrNEN.js";import"./Hidden-DwOTALl4.js";import"./useRef-Uwn_o1DG.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./useStatic-C-4yNygp.js";import"./context-BnRBG3H-.js";import"./useFieldComponent-XccPD61N.js";import"./useFormReset-AO5_sbxL.js";import"./FieldError-D74Rm1AJ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),qr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vr=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,vr as __namedExportsOrder,qr as default};
