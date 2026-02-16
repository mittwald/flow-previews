import{r as x,j as r}from"./iframe-C5ZTNo7B.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BsxvTmJM.js";import{L as m}from"./Label-D_0GeMuu.js";import{B as l}from"./Button-CTD3uiWd.js";import{S as j}from"./Section-HUKpeM8o.js";import{A as b}from"./ActionGroup-Dj8ge-dL.js";import{s as d}from"./ActionBatch-DQnznSVa.js";import{M as s}from"./MarkdownEditor-HD1iNEU9.js";import{F as g}from"./FieldError-BDB9mSsz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bw3_nZ9y.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./clsx-B-dksMZM.js";import"./index-L0hXSSnD.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./ActionGroupView-BDcHe3GE.js";import"./Content-CH2yQGd8.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./RSPContexts-BwPNB4Pl.js";import"./utils-BuDA3Ujk.js";import"./Text-vc01bOb1.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./Modal-DnrTq3-t.js";import"./Overlay-DtDYWi_A.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./OverlayContextProvider-CtLnis9C.js";import"./LoadingSpinner-DA9Opfj3.js";import"./IconWarning-Bhk_rtuP.js";import"./remote-DVpXA9eO.js";import"./Dialog-n3Xabcyo.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ef-k5VSc.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./useFocusable-DlWx3Zdp.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./ButtonView-DEthqiLB.js";import"./Flex-CwoZU0pA.js";import"./useRef-BCHa9Y83.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B0O-s6DP.js";import"./getActionGroupSlot-D914C5WA.js";import"./Markdown-CFrFt8pP.js";import"./CodeBlock-i2Zzm8ZB.js";import"./CopyButton-DNy_6vF0.js";import"./Tooltip-BlelyQUD.js";import"./react-children-utilities-DbEx9DG7.js";import"./InlineCode-CowgdCO_.js";import"./Link-DMEIb5A5.js";import"./Separator-CreR-Ml7.js";import"./TextArea-CLP_klkS.js";import"./useFieldComponent-hFC9tXxl.js";import"./useControlledHostValueProps-C7ReQGpt.js";import"./FieldDescription-COkKjWuk.js";import"./TextField-DgUE_Mti.js";import"./FieldError-CU71BOGK.js";import"./Form-CMpIiu9M.js";import"./Group-DGqA1oIQ.js";import"./Input-DU4gQuZk.js";import"./useTextField-BXRdWvZ1.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};
