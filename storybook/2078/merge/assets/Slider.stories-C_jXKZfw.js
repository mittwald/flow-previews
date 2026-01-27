import{j as r,r as g}from"./iframe-kP2HEfFS.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-CSTft9O0.js";import{L as n}from"./Label-o-9raADe.js";import{B as p}from"./Button-D2SKyW-T.js";import{S}from"./Section-6hxUOdoj.js";import{A as b}from"./ActionGroup-CwS6zLOi.js";import{s as l}from"./Action-DkWPc0_f.js";import{S as m}from"./Slider-Ctjz6t4n.js";import{F as j}from"./FieldError-CJUuAB6W.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bb3YYypk.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./useRef-Ddb8Xdr-.js";import"./utils-C12UPk0k.js";import"./ButtonView-B-wfMpgB.js";import"./browser-CLBqp6VR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./ContextMenuSection-Dtdvg2h1.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./useControlledState-K2EmMrc1.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./useStatic-D099is7R.js";import"./context-Dy6MMTPO.js";import"./useFieldComponent-D28HcwQQ.js";import"./useFormReset-BTQYEics.js";import"./FieldError-BL6ZnBFp.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
