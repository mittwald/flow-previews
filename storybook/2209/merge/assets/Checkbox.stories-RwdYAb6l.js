import{j as r,r as x}from"./iframe-CcUuYubL.js";import{b as c,u as p,F as a,t as F}from"./Form-CnJyDVT_.js";import{R as l,S as f}from"./ResetButton-DC07gp6Z.js";import{B as d}from"./Button-hsF3uCN8.js";import{S as j}from"./Section-nZGbnrhV.js";import{A as b}from"./ActionGroup-DcOYVajW.js";import{s as u}from"./Action-B5lNwIyS.js";import{C as t}from"./Checkbox-DmYhqc1_.js";import{F as E}from"./FieldError-BP_boiRG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvCZ3AJL.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./clsx-B-dksMZM.js";import"./index-C6oVqO8J.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./context-BiAKFHSE.js";import"./browser-DepVz5kj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B3A9CwVo.js";import"./useRef-Sq3R5ZCi.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./Text-DY9Wsurd.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./LoadingSpinner-BSrbl83B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-Fqqf34.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./ContextMenuSection-DMta75t3.js";import"./Dialog-mDFWR8fO.js";import"./RSPContexts-CCIxlK1Q.js";import"./OverlayArrow-LMNtsg17.js";import"./useControlledState-Cd7zGKC9.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";import"./getActionGroupSlot-COit0AjF.js";import"./useStatic-DtEAcyvY.js";import"./context-BjvrdVaN.js";import"./useFieldComponent-DfHGJXnI.js";import"./FieldError-BzVPBYcu.js";import"./Form-D1MNyHLC.js";import"./useFormValidation-ey4MT9ZA.js";import"./useToggleState-BWrwaeJV.js";import"./useFormReset-CtXF-ibf.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const qr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,qr as __namedExportsOrder,_r as default};
