import{j as r,r as C}from"./iframe-DCk1dltx.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-BskZzvDk.js";import{B as l}from"./Button-DZuynozn.js";import{S as B}from"./Section-DrurSGwC.js";import{A as b}from"./ActionGroup-BFgB1RLe.js";import{s as u}from"./Action-CYJGL_dI.js";import{T as i}from"./Text-BrHbgyhX.js";import{C as m}from"./CheckboxButton-CV4XI_96.js";import{C as d}from"./Content-DQaVAFu_.js";import{F as E}from"./FieldError-CH94tTsu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BisWu7fc.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./clsx-B-dksMZM.js";import"./index-CPFdYWIc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./useRef-AiAHEOJG.js";import"./utils-dLBbTpD9.js";import"./ButtonView-mTtK9nwk.js";import"./browser-CviVsCbd.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwKHWgOu.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocusable-CjQRw48Z.js";import"./ContextMenuSection-DnWeaq_7.js";import"./Dialog-Cwy0OKAE.js";import"./RSPContexts-DsTbr3uT.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./Text-PmoJdoY5.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./useStatic-CBlVxf-j.js";import"./context-B-YNLj-l.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Checkbox-Bh3ATBn5.js";import"./useFieldComponent-DRONwAvB.js";import"./FieldError-BprKDa8q.js";import"./Form-DaC80i58.js";import"./useFormValidation-BQhs4ME7.js";import"./useToggleState-cVMrwpOM.js";import"./useFormReset-BYlFqKoc.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
