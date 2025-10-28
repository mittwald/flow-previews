import{j as r,r as f}from"./iframe-DGdLAJHm.js";import{a as c,u as a,F as u,t as h}from"./Form-C59BQnOt.js";import{B as n}from"./Button-B6Mqr-fI.js";import{S as x}from"./Section-sBOUh03h.js";import{A as F}from"./ActionGroup-CQD4NXmL.js";import{s as d}from"./Action-6ocxia9j.js";import{C as o}from"./Checkbox-B75G9N8l.js";import{F as j}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./browser-DtJMxQoE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./utils-DMxNMt2r.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./dynamic-DckDcmFh.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";import"./context-B3SgFMfx.js";import"./useMakeFocusable-Cph4dqrb.js";import"./Form-CiLoCuZS.js";import"./useFormValidation-LOSvoqzJ.js";import"./useToggleState-C6t0tKtv.js";import"./useFormReset-DwdExnfa.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
