import{j as r,r as g}from"./iframe-XJIuIQsX.js";import{b as s,u as a,F as u,t as F}from"./Form-DR-KRktv.js";import{L as n}from"./Label-CRXdwP8g.js";import{R as d,S as c}from"./ResetButton-BrV1pp9P.js";import{B as p}from"./Button-B3qcLgg7.js";import{S}from"./Section-ec-jB7Az.js";import{A as b}from"./ActionGroup-CXEtNV5m.js";import{s as l}from"./Action-Dpd9i1rx.js";import{S as m}from"./Slider-B9Wmcl3e.js";import{F as j}from"./FieldError-CSSPElPx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLJCE7jR.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./clsx-B-dksMZM.js";import"./index-D1QpPuaY.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./context-DW91oCRu.js";import"./browser-BhoN5hvb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-1nVOodib.js";import"./utils-OSbsBMtV.js";import"./Hidden-CYqdvOeA.js";import"./useRef-Co0EoVoZ.js";import"./IconWarning-Dh1UuZN-.js";import"./remote-Ep0bJUq6.js";import"./Text-CrMkSLGe.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./LoadingSpinner-CuoS48qC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAG3sHuP.js";import"./ProgressBar-BrwhHLJj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEhEh88f.js";import"./useFocus-CATpB0h3.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./ContextMenuSection-Bgb904Cq.js";import"./Dialog-DrSVAvJg.js";import"./RSPContexts-CKZ7RQV4.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./getActionGroupSlot-Cw46BERC.js";import"./useStatic-Badjbl0n.js";import"./context-BdOjCQgT.js";import"./useFieldComponent-HT5XfbIG.js";import"./useFormReset-_i9wmexA.js";import"./FieldError-oVAZyPGl.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),qr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
