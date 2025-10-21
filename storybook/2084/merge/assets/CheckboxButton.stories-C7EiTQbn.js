import{j as r,r as f}from"./iframe-BdeexEb8.js";import{a,u as c,F as u,t as F}from"./Form-Ds4QSWVi.js";import{B as i}from"./Button-8DtAEqjD.js";import{S as C}from"./Section-B4hiFsDg.js";import{A as j}from"./ActionGroup-CZfxN9v5.js";import{s as l}from"./Action-RARPQ8v8.js";import{T as m}from"./Text-G8amV_-h.js";import{C as d}from"./CheckboxButton-D5gCw3ea.js";import{C as p}from"./Content-ChABwawZ.js";import{F as b}from"./useFieldComponent-DdJyO0fC.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./browser-CYlNocNO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CtsbdbUA.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m7osfjr7.js";import"./utils-BE4tcj7E.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./ContextMenuSection-BRjflZKk.js";import"./Dialog-D2DNdmLu.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./Text-C7oFtPVp.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";import"./dynamic-B5dXdtKW.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./useStatic-DlCxFiK7.js";import"./context-BWmIRqAJ.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Checkbox-TvJseZHH.js";import"./useMakeFocusable-CQGMBShp.js";import"./Form-Ck-IBHt9.js";import"./useFormValidation-wqB4x0T2.js";import"./useToggleState-BPN6y77U.js";import"./useFormReset-BENrYz2J.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
