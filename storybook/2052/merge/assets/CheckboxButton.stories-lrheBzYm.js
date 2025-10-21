import{j as r,r as f}from"./iframe-BziZnbbf.js";import{a,u as c,F as u,t as F}from"./Form-Zt6xDFWh.js";import{B as i}from"./Button-BsOsKcj7.js";import{S as C}from"./Section-Bis1QFtl.js";import{A as j}from"./ActionGroup-B1HE_ON6.js";import{s as l}from"./Action-CnCRBxQU.js";import{T as m}from"./Text-C2tTVpcM.js";import{C as d}from"./CheckboxButton-CLooBAdo.js";import{C as p}from"./Content-XC9Fvum2.js";import{F as b}from"./useFieldComponent-yHiwdZcU.js";import"./index-nuYtCEEu.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./clsx-B-dksMZM.js";import"./index-_EM7mgZk.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./browser-BTvp61GS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CJvxfsrj.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Czn71cHm.js";import"./utils-C0RTyIHD.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./Text-fJHWLREE.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./dynamic-BFzO3wyN.js";import"./getActionGroupSlot-CSQVqoba.js";import"./useStatic-D6NPOV-R.js";import"./context-OFPqHilR.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Checkbox-B4b1OWNb.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./Form-lya1P3V3.js";import"./useFormValidation-CTvaA84d.js";import"./useToggleState-DifH9MCn.js";import"./useFormReset-CzU-0SyG.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
