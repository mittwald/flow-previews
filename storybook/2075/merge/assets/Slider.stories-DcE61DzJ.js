import{j as r,r as h}from"./iframe-C3YinX3s.js";import{a,u as l,F as u,t as F}from"./Form-C_5hYMpv.js";import{L as e}from"./Label-vc6tDbdp.js";import{B as m}from"./Button-B9MewrUz.js";import{S as g}from"./Section-C_5nF8l2.js";import{A as x}from"./ActionGroup-BpJBuAaq.js";import{s as p}from"./Action-DH4q3DMK.js";import{S as s}from"./Slider-JJl5kT0B.js";import{F as S}from"./useFieldComponent-unfYr68o.js";import"./index-nuYtCEEu.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./browser-DlgIuTl3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-uL4LTRYY.js";import"./utils-CkQtaKCN.js";import"./Hidden-RtymAw99.js";import"./IconWarning-6TASCfRR.js";import"./Text-40KOd3GJ.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./LoadingSpinner-BiveWKkE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBEcZBzR.js";import"./ProgressBar-DHxU0Tpr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6oysTp78.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEE7eirG.js";import"./useFocus-DuIK45_5.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./ContextMenuSection-ko5_btdi.js";import"./Dialog-CifFL37q.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";import"./dynamic-BlWCyvfa.js";import"./getActionGroupSlot-DrHtarua.js";import"./useStatic-K2T119cA.js";import"./context-C6PcGqQE.js";import"./useMakeFocusable-DG0DAth_.js";import"./useFormReset-BgD1M5By.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Lr as default};
