import{j as r,r as S}from"./iframe-Dcjk2TLd.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-cMvnULPZ.js";import{L as s}from"./Label-BZxLRpn6.js";import{B as d}from"./Button-D-jN4scm.js";import{S as j}from"./Section-Bu04CwZ6.js";import{A as b}from"./ActionGroup-CElENKZ5.js";import{s as c}from"./Action-D6NQe9wE.js";import{S as m}from"./SearchField-7Jhzz2vj.js";import{F as E}from"./FieldError-CGpcN3PS.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./browser-B8c1tkp7.js";import"./dynamic-D8BmLFRX.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./useRef-B4q9LGeG.js";import"./utils-C4npX7la.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Text-lyGbob8n.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./ContextMenuSection-C6gJgggW.js";import"./Dialog-Cncwnvc2.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useControlledState-DBXDF7mL.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./useStatic-DYXSIhuP.js";import"./context-Dbo8u0HC.js";import"./useFieldComponent-1tG_hIZF.js";import"./useControlledHostValueProps-ZAzMZMP3.js";import"./FieldError-B9deYV15.js";import"./Form-C7OLtkZq.js";import"./Group-BuqfBy6e.js";import"./Input-DoIljc-M.js";import"./useTextField-D1L7S4qu.js";import"./useFormReset-DcYsnWfg.js";import"./useFormValidation-ny_bco9C.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};
