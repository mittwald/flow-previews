import{j as r,r as C}from"./iframe-Dcjk2TLd.js";import{a,u as p,F as c,t as j,R as h,S as x}from"./ResetButton-cMvnULPZ.js";import{B as l}from"./Button-D-jN4scm.js";import{S as B}from"./Section-Bu04CwZ6.js";import{A as b}from"./ActionGroup-CElENKZ5.js";import{s as u}from"./Action-D6NQe9wE.js";import{T as i}from"./Text-lyGbob8n.js";import{C as m}from"./CheckboxButton-BgBQbczS.js";import{C as d}from"./Content-speImwih.js";import{F as E}from"./FieldError-CGpcN3PS.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./browser-B8c1tkp7.js";import"./dynamic-D8BmLFRX.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./useRef-B4q9LGeG.js";import"./utils-C4npX7la.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./ContextMenuSection-C6gJgggW.js";import"./Dialog-Cncwnvc2.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useControlledState-DBXDF7mL.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./Text-zDtUk3hp.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./useStatic-DYXSIhuP.js";import"./context-Dbo8u0HC.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Checkbox-ChehdARZ.js";import"./useFieldComponent-1tG_hIZF.js";import"./FieldError-B9deYV15.js";import"./Form-C7OLtkZq.js";import"./useFormValidation-ny_bco9C.js";import"./useToggleState-BSsXWzYc.js";import"./useFormReset-DcYsnWfg.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ir={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async F=>{await u(1500),T(F)},o=p({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=p();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ir as default};
