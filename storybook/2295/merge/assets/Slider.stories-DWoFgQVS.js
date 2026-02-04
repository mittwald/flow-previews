import{j as r,r as g}from"./iframe-CBdrHiu-.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-BCVKdw_Y.js";import{L as n}from"./Label-BnDRrnHY.js";import{B as p}from"./Button-CvrzgGgN.js";import{S}from"./Section-DO3UFtDL.js";import{A as b}from"./ActionGroup-C-nbwf6U.js";import{s as l}from"./Action-CcGGE6B7.js";import{S as m}from"./Slider-HwnIkh3W.js";import{F as j}from"./FieldError-OVkxnP3X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cbo9i_64.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./clsx-B-dksMZM.js";import"./index-DbZpFDe3.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./useRef-CXZeuied.js";import"./utils-DRjcKwJb.js";import"./ButtonView-gSA2DBTv.js";import"./browser-DtunHlVO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNG00Dag.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./ContextMenuSection-DKWGDRRC.js";import"./Dialog-C9BJ8Byi.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./useStatic-Bx0cFIOO.js";import"./context-RwMuvTef.js";import"./useFieldComponent-CkNNSE-6.js";import"./useFormReset-DzYWM4EU.js";import"./FieldError-hDU9I6ir.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
