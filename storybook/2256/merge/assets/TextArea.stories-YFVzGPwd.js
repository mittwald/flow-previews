import{j as r,r as F}from"./iframe-Dcjk2TLd.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-cMvnULPZ.js";import{L as o}from"./Label-BZxLRpn6.js";import{B as c}from"./Button-D-jN4scm.js";import{S as g}from"./Section-Bu04CwZ6.js";import{A as b}from"./ActionGroup-CElENKZ5.js";import{s as u}from"./Action-D6NQe9wE.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-ryB28UE1.js";import{F as S}from"./FieldError-CGpcN3PS.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./browser-B8c1tkp7.js";import"./dynamic-D8BmLFRX.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./useRef-B4q9LGeG.js";import"./utils-C4npX7la.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Text-lyGbob8n.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./ContextMenuSection-C6gJgggW.js";import"./Dialog-Cncwnvc2.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useControlledState-DBXDF7mL.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./useStatic-DYXSIhuP.js";import"./context-Dbo8u0HC.js";import"./TextFieldBase-5qKONCc1.js";import"./FieldDescription-DaAB6M4B.js";import"./useFieldComponent-1tG_hIZF.js";import"./TextField-DtlmSwYr.js";import"./FieldError-B9deYV15.js";import"./Form-C7OLtkZq.js";import"./Group-BuqfBy6e.js";import"./Input-DoIljc-M.js";import"./useTextField-D1L7S4qu.js";import"./useFormReset-DcYsnWfg.js";import"./useFormValidation-ny_bco9C.js";import"./useControlledHostValueProps-ZAzMZMP3.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
