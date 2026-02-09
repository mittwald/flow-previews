import{j as r,r as x}from"./iframe-agbTJ2rk.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-Cq6Eoa5n.js";import{B as d}from"./Button-Br9Yc6cY.js";import{S as j}from"./Section-CtAmdGju.js";import{A as b}from"./ActionGroup-B8CTPXx_.js";import{s as u}from"./Action-KXOin-yd.js";import{C as t}from"./Checkbox-BP8s9XIl.js";import{F as E}from"./FieldError-BH2blnd1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-9PkN5S4U.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./clsx-B-dksMZM.js";import"./index-DPEh44cd.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./useRef-HSIchM6J.js";import"./utils-Cg5Rmuuc.js";import"./ButtonView-C09bK-pd.js";import"./browser-DcYn1DNE.js";import"./IconWarning-DBJeVzaP.js";import"./remote-zpHok2y4.js";import"./Text-DmtEYLwi.js";import"./EmulatedBoldText-_6M-JboB.js";import"./Text-B3pB98UM.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-COQ7NCDT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrXmkjxU.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useFocusable-Dcrl6Kh-.js";import"./ContextMenuSection-BNQ2j9mF.js";import"./Dialog-A1OcXUz0.js";import"./RSPContexts-H7hhohAE.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./useStatic-C0pFV-a-.js";import"./context-Dm2xLzXZ.js";import"./useFieldComponent-Bdg-2oVH.js";import"./FieldError-D6XTyUhB.js";import"./Form-6HUwn4n1.js";import"./useFormValidation-DxAxZRFR.js";import"./useToggleState-DCnWm9YF.js";import"./useFormReset-DoFpeMzh.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
