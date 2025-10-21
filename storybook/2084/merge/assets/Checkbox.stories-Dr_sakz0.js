import{j as r,r as f}from"./iframe-BdeexEb8.js";import{a as c,u as a,F as u,t as h}from"./Form-Ds4QSWVi.js";import{B as n}from"./Button-8DtAEqjD.js";import{S as x}from"./Section-B4hiFsDg.js";import{A as F}from"./ActionGroup-CZfxN9v5.js";import{s as d}from"./Action-RARPQ8v8.js";import{C as o}from"./Checkbox-TvJseZHH.js";import{F as j}from"./useFieldComponent-DdJyO0fC.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./browser-CYlNocNO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CtsbdbUA.js";import"./Text-G8amV_-h.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./utils-BE4tcj7E.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m7osfjr7.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./ContextMenuSection-BRjflZKk.js";import"./Dialog-D2DNdmLu.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";import"./dynamic-B5dXdtKW.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./useStatic-DlCxFiK7.js";import"./context-BWmIRqAJ.js";import"./useMakeFocusable-CQGMBShp.js";import"./Form-Ck-IBHt9.js";import"./useFormValidation-wqB4x0T2.js";import"./useToggleState-BPN6y77U.js";import"./useFormReset-BENrYz2J.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
