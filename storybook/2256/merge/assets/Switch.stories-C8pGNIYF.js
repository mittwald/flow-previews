import{j as r,r as F}from"./iframe-Dcjk2TLd.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-cMvnULPZ.js";import{B as d}from"./Button-D-jN4scm.js";import{S as x}from"./Section-Bu04CwZ6.js";import{A as E}from"./ActionGroup-CElENKZ5.js";import{s as c}from"./Action-D6NQe9wE.js";import{S as m}from"./Switch-Cg1N9Ugm.js";import{F as j}from"./FieldError-CGpcN3PS.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./browser-B8c1tkp7.js";import"./dynamic-D8BmLFRX.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./useRef-B4q9LGeG.js";import"./utils-C4npX7la.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Text-lyGbob8n.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./ContextMenuSection-C6gJgggW.js";import"./Dialog-Cncwnvc2.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useControlledState-DBXDF7mL.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./useStatic-DYXSIhuP.js";import"./context-Dbo8u0HC.js";import"./useFieldComponent-1tG_hIZF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BSsXWzYc.js";import"./useFormReset-DcYsnWfg.js";import"./FieldError-B9deYV15.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ar as default};
