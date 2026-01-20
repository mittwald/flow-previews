import{j as r,r as g}from"./iframe-C5hcdLE6.js";import{b as s,u as a,F as u,t as F}from"./Form-BLPdapkh.js";import{L as n}from"./Label-KhBIX57N.js";import{R as d,S as c}from"./ResetButton-Ciqh6yoP.js";import{B as p}from"./Button-CzDqHNvA.js";import{S}from"./Section-Zn6loSDR.js";import{A as b}from"./ActionGroup-BsDXgUZX.js";import{s as l}from"./Action-CDW165y9.js";import{S as m}from"./Slider-B4Et2t7J.js";import{F as j}from"./FieldError-CRlQMLVN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DE5jfE1R.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./clsx-B-dksMZM.js";import"./index-ClIq6yug.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./context-E1uxYtQv.js";import"./browser-BJ6k16eC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cdw77YDw.js";import"./utils-B3GIFt3C.js";import"./Hidden-CzLEuVYW.js";import"./useRef-BfcAVfiD.js";import"./IconWarning-BGpxRwU-.js";import"./remote-DfH19er1.js";import"./Text-D8uazRXK.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./LoadingSpinner-hJnys7-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyQlFp9g.js";import"./useFocus-Fr_BfSOs.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./ContextMenuSection-Bm4KM0hd.js";import"./Dialog-D66iw0U8.js";import"./RSPContexts-BMj0h4_3.js";import"./OverlayArrow-DN70rght.js";import"./useControlledState-C9jQ4AxE.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./VisuallyHidden-n5FPXG3E.js";import"./getActionGroupSlot-CVriiRzc.js";import"./useStatic-CWBOctoH.js";import"./context-kwHKhOde.js";import"./useFieldComponent-t_EOnv-a.js";import"./useFormReset-BnJ7w8Tn.js";import"./FieldError-CqTmSUdd.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ar={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,Ir as __namedExportsOrder,Ar as default};
