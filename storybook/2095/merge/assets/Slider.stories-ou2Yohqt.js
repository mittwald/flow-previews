import{j as r,r as h}from"./iframe-DGdLAJHm.js";import{a,u as l,F as u,t as F}from"./Form-C59BQnOt.js";import{L as e}from"./Label-TWVsUPc0.js";import{B as m}from"./Button-B6Mqr-fI.js";import{S as g}from"./Section-sBOUh03h.js";import{A as x}from"./ActionGroup-CQD4NXmL.js";import{s as p}from"./Action-6ocxia9j.js";import{S as s}from"./Slider-Drt2V0nO.js";import{F as S}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./browser-DtJMxQoE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCzhvZl0.js";import"./utils-DMxNMt2r.js";import"./Hidden-DDvTcAlv.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./dynamic-DckDcmFh.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";import"./context-B3SgFMfx.js";import"./useMakeFocusable-Cph4dqrb.js";import"./useFormReset-DwdExnfa.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
