import{j as r,r as f}from"./iframe-M-00ByYr.js";import{a as c,u as a,F as u,t as h}from"./Form-CCjzRfYD.js";import{B as n}from"./Button-Dye8aZJo.js";import{S as x}from"./Section-DxqiSUr-.js";import{A as F}from"./ActionGroup-DCfNsL7U.js";import{s as d}from"./Action-C6LgLFNM.js";import{C as o}from"./Checkbox-BP2eh5dd.js";import{F as j}from"./FieldError-ZwGpCE6l.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./browser-DuQo-X1z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BKX4jvdo.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./utils-CzeOq9Jp.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./useStatic-B0qB2N-4.js";import"./context-DSFC_3Cq.js";import"./useFieldComponent-CRgHa0Rs.js";import"./ClearPropsContext-DvyDrnsG.js";import"./useMakeFocusable-CCRsS2FG.js";import"./Form-B5fCCfio.js";import"./useFormValidation-Co3-d3Vs.js";import"./useToggleState-DmEDjo1f.js";import"./useFormReset-B1z61k1U.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};
