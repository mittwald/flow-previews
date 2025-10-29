import{j as r,r as f}from"./iframe-fd4MG1i8.js";import{a as c,u as a,F as u,t as h}from"./Form-DdKBNKRS.js";import{B as n}from"./Button-VeSKQaWX.js";import{S as x}from"./Section-BCuosQzF.js";import{A as F}from"./ActionGroup-CZpdRo9u.js";import{s as d}from"./Action-b6bvpWZ7.js";import{C as o}from"./Checkbox-KqWSJRe1.js";import{F as j}from"./useFieldComponent-CTpQ-XZg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./browser-Dh_0Zrut.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-9sqw3U7E.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./utils-Cwcb_ph1.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./context-BDEE0OGh.js";import"./useMakeFocusable-DLeuMSJI.js";import"./Form-DF5wN6HS.js";import"./useFormValidation-C8R7XiMh.js";import"./useToggleState-nKwDhDgt.js";import"./useFormReset-NfLpwngh.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
