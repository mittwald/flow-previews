import{j as r,r as F}from"./iframe-BsCnutBU.js";import{u as s,F as a}from"./Form-BTeyd2P5.js";import{L as n}from"./Label-DBiwGOqI.js";import{F as p,t as g}from"./Field-DEtzRgkR.js";import{B as l}from"./Button-PMfVxp4L.js";import{S}from"./Section-C1RjpY9f.js";import{A as b}from"./ActionGroup-B3HbARs1.js";import{s as u}from"./Action-CDxlZfJH.js";import{S as m}from"./Slider-Be1v38T1.js";import{F as j}from"./FieldError-CJPS-seQ.js";import{R as d}from"./ResetButton-CQkSIzTo.js";import{S as c}from"./SubmitButton-Cjg-acN2.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-b7DWXv2S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./Label-B_59qcJ5.js";import"./utils-Dcbzlj6n.js";import"./Hidden-gYrC-ftW.js";import"./dynamic-DlsVuPIo.js";import"./IconChevronDown-C43PU1K-.js";import"./remote-LwvHvQd9.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./getActionGroupSlot-D8KutjkD.js";import"./useStatic-BIAK3C1m.js";import"./context-bnUckVor.js";import"./IconMinus-BHe1Zlbb.js";import"./IconPlus-C1B3EhHj.js";import"./useFieldComponent-DKQov8fN.js";import"./useFormReset-DwCUeF5J.js";import"./FieldError-oQwctYYH.js";import"./IconDanger-d9R36P01.js";import"./useRef-CoHtiAMY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:p,render:()=>{const t=async x=>{await u(1500),E(x)},f=s({defaultValues:{storage:50}}),h=g();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
