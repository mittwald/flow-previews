import{j as r,r as f}from"./iframe-fd4MG1i8.js";import{a,u as c,F as u,t as F}from"./Form-DdKBNKRS.js";import{B as i}from"./Button-VeSKQaWX.js";import{S as C}from"./Section-BCuosQzF.js";import{A as j}from"./ActionGroup-CZpdRo9u.js";import{s as l}from"./Action-b6bvpWZ7.js";import{T as m}from"./Text-Dcd0JdvI.js";import{C as d}from"./CheckboxButton-CjTI3X61.js";import{C as p}from"./Content-CX56arVC.js";import{F as b}from"./useFieldComponent-CTpQ-XZg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./browser-Dh_0Zrut.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-9sqw3U7E.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./utils-Cwcb_ph1.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./Text-Ct_tO_6D.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./context-BDEE0OGh.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Checkbox-KqWSJRe1.js";import"./useMakeFocusable-DLeuMSJI.js";import"./Form-DF5wN6HS.js";import"./useFormValidation-C8R7XiMh.js";import"./useToggleState-nKwDhDgt.js";import"./useFormReset-NfLpwngh.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
