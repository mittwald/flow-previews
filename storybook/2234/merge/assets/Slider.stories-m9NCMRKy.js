import{j as r,r as g}from"./iframe-Cz8_C8zY.js";import{b as s,u as a,F as u,t as F}from"./Form-C-tofb87.js";import{L as n}from"./Label-gR0Y05hv.js";import{R as d,S as c}from"./ResetButton-Bv8Dr5T9.js";import{B as p}from"./Button-D15OVnQK.js";import{S}from"./Section-SSHhfNn0.js";import{A as b}from"./ActionGroup-DiMyb9cq.js";import{s as l}from"./Action-aXgHP_6u.js";import{S as m}from"./Slider-DRUVWrkb.js";import{F as j}from"./FieldError-CEw8HJGt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeA3emBk.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./clsx-B-dksMZM.js";import"./index-SrORw6vN.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./browser-B6rfwAqc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-2kcHPH94.js";import"./utils-BAKlH2Lm.js";import"./Hidden-CWAqagDm.js";import"./useRef-CsRDIUk-.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcZz-lB5.js";import"./useFocus-DFbFm1Xx.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./ContextMenuSection-DUguC81d.js";import"./Dialog-DK4i5yRx.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./useStatic-DFVrJYQp.js";import"./context-usF9YeFM.js";import"./useFieldComponent--MNREdev.js";import"./useFormReset-CSPeTQLr.js";import"./FieldError-B254xHCi.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),qr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
