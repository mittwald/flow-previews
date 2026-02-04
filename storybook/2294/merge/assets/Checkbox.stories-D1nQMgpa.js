import{j as r,r as x}from"./iframe-RCf6-4YI.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-DEh7vI15.js";import{B as d}from"./Button-CRZ6FKVD.js";import{S as j}from"./Section-Bw7Tk3Pz.js";import{A as b}from"./ActionGroup-MIHI0hnG.js";import{s as u}from"./Action-3k_Z5Vty.js";import{C as t}from"./Checkbox-CIgCvfC4.js";import{F as E}from"./FieldError-KQe80RuS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYjVHqFc.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./clsx-B-dksMZM.js";import"./index-BOW2unrE.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./useRef-CTBQaoXs.js";import"./utils-2Kt3K5yX.js";import"./useOverlayController-CujP3Hug.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./ButtonView-Bsuml8lR.js";import"./browser-CrfZ_U78.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--XVd0Ch5.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocusable-CGRcLUlH.js";import"./ContextMenuSection-BKm1CmgZ.js";import"./Dialog-DSQ8RGJ5.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";import"./getActionGroupSlot-D-mME3-D.js";import"./useFieldComponent-C9VOsv8D.js";import"./FieldError-C_jxYX-6.js";import"./Form-DuREI75N.js";import"./useFormValidation-WgNojhOC.js";import"./useToggleState-Y5JGQboA.js";import"./useFormReset-CpZDZfD6.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,wr as default};
