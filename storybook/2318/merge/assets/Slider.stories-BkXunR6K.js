import{r as g,j as r}from"./iframe-CNIcTJYh.js";import{a as s,u as a,F as u,R as d,S as c,t as F}from"./ResetButton-B90bKA5P.js";import{L as n}from"./Label-Dk1BsiHf.js";import{B as p}from"./Button-DAjUCwya.js";import{S}from"./Section-CUzAZq5T.js";import{A as b}from"./ActionGroup-DwraTk7X.js";import{s as l}from"./Action-CB-yo4he.js";import{S as m}from"./Slider-BZWVd_g6.js";import{F as j}from"./FieldError-CRJL1-ZW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfddFL0U.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./useRef-DPaH8BEG.js";import"./utils-BMrW0rs-.js";import"./ButtonView-f9GsubAG.js";import"./browser-e5gpn1Ib.js";import"./Label.module-CUYTf9Jc.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Text-6t0QtAeQ.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./LoadingSpinner-D1M8B3tV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./ContextMenuSection-B2n1IDtN.js";import"./Dialog-C8--keRD.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./getActionGroupSlot-BroJtED_.js";import"./useStatic-J4GDP0vf.js";import"./context-CHGIk6I_.js";import"./useFieldComponent-BcSx3cQM.js";import"./useFormReset-ClGEeDTe.js";import"./FieldError-C-WtBUhj.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
