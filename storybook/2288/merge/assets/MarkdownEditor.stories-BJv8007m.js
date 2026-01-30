import{j as r,r as x}from"./iframe-BipmDVic.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-C87-O7lX.js";import{L as s}from"./Label-D7pFsU69.js";import{B as l}from"./Button-BuQAY4x2.js";import{S as j}from"./Section-BSyGStrt.js";import{A as b}from"./ActionGroup-CHTlX6Wu.js";import{s as d}from"./Action-B2seXdE0.js";import{M as m}from"./MarkdownEditor-BUvovLiv.js";import{F as g}from"./FieldError-CHo9rwLP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-5Me7t2_P.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./clsx-B-dksMZM.js";import"./index-DhRV0L_D.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./useRef-DY72xU_4.js";import"./utils-BmvAbY6y.js";import"./ButtonView-B8lRgn0T.js";import"./browser-CR-oUB3P.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./IconWarning-CGnZi41_.js";import"./remote-Bx5-otuG.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BGUPUAq5.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useFocusable-CoJ_GBdx.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Dialog-BXIha8hU.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./useStatic-DNvp4EKT.js";import"./context-DDKbSZpU.js";import"./Markdown-CTcsLEay.js";import"./CodeBlock-Cg_2nBxL.js";import"./CopyButton-CLbhqaLJ.js";import"./Tooltip-D_Iulqg7.js";import"./react-children-utilities-B8QTrmWQ.js";import"./Heading-BRGw-waJ.js";import"./Heading-uHa7bb0l.js";import"./InlineCode-DBXTveHa.js";import"./Link-DJr8Hvm4.js";import"./Separator-BmoTQTtj.js";import"./TextArea-Ck4MELtI.js";import"./TextFieldBase-hQSdVVcl.js";import"./FieldDescription-BEUHW4qH.js";import"./useFieldComponent-VycST_vs.js";import"./TextField-f4qsvs-p.js";import"./FieldError-BYM5jSaa.js";import"./Form-BQ1NzRsL.js";import"./Group-C_4RVHie.js";import"./Input-CWeCnXba.js";import"./useTextField-D6dFMuMP.js";import"./useFormReset-Bn-cpXjq.js";import"./useFormValidation-DUx2L2VN.js";import"./useControlledHostValueProps-CGQBpUAS.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
