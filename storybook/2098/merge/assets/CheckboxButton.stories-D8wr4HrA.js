import{j as r,r as f}from"./iframe-M-00ByYr.js";import{a,u as c,F as u,t as F}from"./Form-CCjzRfYD.js";import{B as i}from"./Button-Dye8aZJo.js";import{S as C}from"./Section-DxqiSUr-.js";import{A as j}from"./ActionGroup-DCfNsL7U.js";import{s as l}from"./Action-C6LgLFNM.js";import{T as m}from"./Text-Bt5YA1vc.js";import{C as d}from"./CheckboxButton-7B69t1rZ.js";import{C as p}from"./Content-DgEPXUHV.js";import{F as b}from"./FieldError-ZwGpCE6l.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./browser-DuQo-X1z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BKX4jvdo.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./utils-CzeOq9Jp.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./Text-C64HrAr0.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./useStatic-B0qB2N-4.js";import"./context-DSFC_3Cq.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Checkbox-BP2eh5dd.js";import"./useFieldComponent-CRgHa0Rs.js";import"./ClearPropsContext-DvyDrnsG.js";import"./useMakeFocusable-CCRsS2FG.js";import"./Form-B5fCCfio.js";import"./useFormValidation-Co3-d3Vs.js";import"./useToggleState-DmEDjo1f.js";import"./useFormReset-B1z61k1U.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const vr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,vr as __namedExportsOrder,qr as default};
