import{j as r,r as h}from"./iframe-M-00ByYr.js";import{a,u as l,F as u,t as F}from"./Form-CCjzRfYD.js";import{L as e}from"./Label-DT1JZy6g.js";import{B as m}from"./Button-Dye8aZJo.js";import{S as g}from"./Section-DxqiSUr-.js";import{A as x}from"./ActionGroup-DCfNsL7U.js";import{s as p}from"./Action-C6LgLFNM.js";import{S as s}from"./Slider-DO4_VdrI.js";import{F as S}from"./FieldError-ZwGpCE6l.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./browser-DuQo-X1z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-2I2h4DuH.js";import"./utils-CzeOq9Jp.js";import"./Hidden-CcUUSr-p.js";import"./IconWarning-BKX4jvdo.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./useStatic-B0qB2N-4.js";import"./context-DSFC_3Cq.js";import"./useMakeFocusable-CCRsS2FG.js";import"./useFieldComponent-CRgHa0Rs.js";import"./ClearPropsContext-DvyDrnsG.js";import"./useFormReset-B1z61k1U.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
