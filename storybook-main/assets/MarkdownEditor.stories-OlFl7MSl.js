import{r as x,j as r}from"./iframe-CKZ3lvbD.js";import{a as n,u as a,F as p,R as u,S as c,t as E}from"./ResetButton-jo2lO0hE.js";import{L as s}from"./Label-GTbkpoc2.js";import{B as l}from"./Button-CJlIPsW5.js";import{S as j}from"./Section-DVJloPPJ.js";import{A as b}from"./ActionGroup-OimQLutj.js";import{s as d}from"./Action-BaMcPQM3.js";import{M as m}from"./MarkdownEditor-BtbzCiMd.js";import{F as g}from"./FieldError-BAXRdB0p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BOUQFyUk.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./clsx-B-dksMZM.js";import"./index-4RPaTPNn.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./context-C9x0o2NL.js";import"./useRef-DbyQDNZa.js";import"./utils-BvJRIsTz.js";import"./ButtonView-DfeKjjgQ.js";import"./browser-burL9SPa.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./IconWarning-C7p1kK8i.js";import"./remote-CtPArtkt.js";import"./Text-C_6aanp2.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./LoadingSpinner-D6ABJv6G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BHDMacWQ.js";import"./ProgressBar-aA2LYAol.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BdqAXD8t.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./ContextMenuSection-Dgn4oNc5.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./useStatic-B8hmur2r.js";import"./context-Ca4O4Dr-.js";import"./Markdown-DnQjfXkV.js";import"./CodeBlock-BCXyVEQD.js";import"./CopyButton-E7WBIwZo.js";import"./Tooltip-CRp5hwMU.js";import"./react-children-utilities-CEk1HmPc.js";import"./Heading-BKtZSdLW.js";import"./Heading-DdSm2kzR.js";import"./InlineCode-B3YFgNNq.js";import"./Link-3yz_UhBK.js";import"./Separator-BuJg2u--.js";import"./TextArea-BHNo0V5D.js";import"./useFieldComponent-sXfPOyeP.js";import"./useControlledHostValueProps-el4q383E.js";import"./FieldDescription-G4RsrN-A.js";import"./TextField-JDVnl2nc.js";import"./FieldError-BqwxYxeF.js";import"./Form-akuVNupd.js";import"./Group-BXHCPMTj.js";import"./Input-DyPHNw9T.js";import"./useTextField-Bb4VUV4A.js";import"./useFormReset-C_HfEwX8.js";import"./useFormValidation-BpwCrRY1.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
