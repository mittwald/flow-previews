import{j as r,r as x}from"./iframe-d8TPt7Dq.js";import{b as n,u as a,F as p,t as E}from"./Form-9w--j5Mp.js";import{L as s}from"./Label-DUZNK_N3.js";import{R as u,S as c}from"./ResetButton-DO1Nuvjf.js";import{B as l}from"./Button-CG9B_DsC.js";import{S as j}from"./Section-gs_NZoj_.js";import{A as b}from"./ActionGroup-Bto2kHza.js";import{s as d}from"./Action-BNptIGGg.js";import{M as m}from"./MarkdownEditor-BMftVgb0.js";import{F as g}from"./FieldError-Z630sQ-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-q6Z3lF5f.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./browser-Cq89yPle.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ddce6lPW.js";import"./utils-CQWCrNEN.js";import"./Hidden-DwOTALl4.js";import"./useRef-Uwn_o1DG.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./useStatic-C-4yNygp.js";import"./context-BnRBG3H-.js";import"./Markdown-oTkALj7u.js";import"./CodeBlock-BTewNskY.js";import"./CopyButton-D6LPvLB1.js";import"./Tooltip-yGszJ6IO.js";import"./react-children-utilities-CVM7s5Om.js";import"./Heading-DEdgyyg2.js";import"./Heading-DHpEgmIr.js";import"./InlineCode-BCeQ_52W.js";import"./Link-BAvXncIq.js";import"./Separator-CRxRS0xp.js";import"./TextArea-DVFtUF2z.js";import"./TextFieldBase-CrCDv3B5.js";import"./FieldDescription-CQGlo9YG.js";import"./useFieldComponent-XccPD61N.js";import"./TextField-DzbzMCaM.js";import"./FieldError-D74Rm1AJ.js";import"./Form-bB72J6qo.js";import"./Group-Bs1XJ8tf.js";import"./Input-Cp9jMkj6.js";import"./useTextField-BALSLGms.js";import"./useFormReset-AO5_sbxL.js";import"./useFormValidation-DzABwrGN.js";import"./useControlledHostValueProps-CJz_h5pu.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
