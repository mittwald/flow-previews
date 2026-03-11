import{r as x,j as r}from"./iframe-BLisfkW1.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./FormRootError-D01m8GBs.js";import{L as m}from"./Label-C4q0QTf_.js";import{B as l}from"./Button-BfYq4-Jl.js";import{S as j}from"./Section-BpUd8Q8x.js";import{A as b}from"./ActionGroup-BXQPUWqY.js";import{s as d}from"./ActionBatch-Ba3fo7J6.js";import{M as s}from"./MarkdownEditor-BOaO2p6b.js";import{F as g}from"./FieldError-ClH5zNHK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B3kpKjwM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./clsx-B-dksMZM.js";import"./index-CURFR8tK.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./ActionGroupView-CzzYWmgf.js";import"./Content-B4EEZXPN.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./RSPContexts-C6v4G0P9.js";import"./utils-B2KexK2G.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./Modal-C3_EO7YW.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./Overlay-3FwDNFry.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";import"./ButtonView-DQ0cot0U.js";import"./Flex-CtHT3-Wb.js";import"./useRef-DQg9ai21.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./getActionGroupSlot-JAeF61ot.js";import"./Markdown-BEC24Ntg.js";import"./CodeBlock-B8xYOkmt.js";import"./CopyButton-87VtO5MK.js";import"./Tooltip-BW14Cule.js";import"./react-children-utilities-CzU4xKRl.js";import"./InlineCode-D3qKvBB6.js";import"./Link-34msnoEh.js";import"./Separator-CGc-J4X5.js";import"./TextArea-iXzOckoh.js";import"./useFieldComponent-DG2srt-t.js";import"./useControlledHostValueProps-ioDLOzJF.js";import"./FieldDescription-C0N-joI8.js";import"./TextField-BR3eT1Aq.js";import"./FieldError-BmP7KZUf.js";import"./Form-mlAsayVr.js";import"./Group-PbN8ryVA.js";import"./Input-BNQv7Er9.js";import"./useTextField-Dd6gALjE.js";import"./useFormReset-fweVV-SC.js";import"./useFormValidation-BvwbNbVP.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
