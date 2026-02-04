import{j as r,r as x}from"./iframe-RCf6-4YI.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DEh7vI15.js";import{L as s}from"./Label-BRnkJYm7.js";import{B as l}from"./Button-CRZ6FKVD.js";import{S as j}from"./Section-Bw7Tk3Pz.js";import{A as b}from"./ActionGroup-MIHI0hnG.js";import{s as d}from"./Action-3k_Z5Vty.js";import{M as m}from"./MarkdownEditor-Bi-bMxVO.js";import{F as g}from"./FieldError-KQe80RuS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYjVHqFc.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./clsx-B-dksMZM.js";import"./index-BOW2unrE.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./useRef-CTBQaoXs.js";import"./utils-2Kt3K5yX.js";import"./useOverlayController-CujP3Hug.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./ButtonView-Bsuml8lR.js";import"./browser-CrfZ_U78.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--XVd0Ch5.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocusable-CGRcLUlH.js";import"./ContextMenuSection-BKm1CmgZ.js";import"./Dialog-DSQ8RGJ5.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";import"./getActionGroupSlot-D-mME3-D.js";import"./Markdown-B73C0ENI.js";import"./CodeBlock-FF4BCpM4.js";import"./CopyButton-Cw2aIIM3.js";import"./Tooltip-p3ePAPsX.js";import"./react-children-utilities-ChSzWVRl.js";import"./Heading-B3B6PIpG.js";import"./Heading-DTpFTjmP.js";import"./InlineCode-BJC4jrHX.js";import"./Link-Did29DyM.js";import"./Separator-jSPMfvOh.js";import"./TextArea-DpDAKpdY.js";import"./TextFieldBase-TygCww5R.js";import"./FieldDescription-BvKq_AxB.js";import"./useFieldComponent-C9VOsv8D.js";import"./TextField-hSyP7KVC.js";import"./FieldError-C_jxYX-6.js";import"./Form-DuREI75N.js";import"./Group-CFlsgvT_.js";import"./Input-7NMAjvPw.js";import"./useTextField-BprYoYqM.js";import"./useFormReset-CpZDZfD6.js";import"./useFormValidation-WgNojhOC.js";import"./useControlledHostValueProps-B5mIbE0-.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const ro=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,ro as __namedExportsOrder,$r as default};
