import{j as r,r as x}from"./iframe-CL_XwmGn.js";import{b as n,u as a,F as p,t as E}from"./Form-afgYqryA.js";import{L as s}from"./Label-D8wjF5yZ.js";import{R as u,S as c}from"./ResetButton-DuDiPc2f.js";import{B as l}from"./Button-D2VcFxMo.js";import{S as j}from"./Section-DJ3JBl70.js";import{A as b}from"./ActionGroup-CTh7FmAm.js";import{s as d}from"./Action-BeuDPcZa.js";import{M as m}from"./MarkdownEditor-DgUf820L.js";import{F as g}from"./FieldError-p9GwIgel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-qzGoZAaQ.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./clsx-B-dksMZM.js";import"./index-E9PNAIL6.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./browser-BUAGSuau.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C9CEKXVd.js";import"./utils-pMOpDdKA.js";import"./Hidden-D-ekfNfu.js";import"./useRef-VOW4feYT.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./useStatic-KIt4AINJ.js";import"./context-C4d2ZO_d.js";import"./Markdown-C2DgfhfE.js";import"./CodeBlock-BpLxiRtn.js";import"./CopyButton-xBawpOAy.js";import"./Tooltip-ru0_7Mnb.js";import"./react-children-utilities-D5DVgEhI.js";import"./Heading-DNlihVQQ.js";import"./Heading-CAyFlpGN.js";import"./InlineCode-DsBc2p-2.js";import"./Link-DMWmmK_7.js";import"./Separator-CnXVuLZH.js";import"./TextArea-xYRHfpgH.js";import"./TextFieldBase-9NVtSak1.js";import"./FieldDescription-B8hcReII.js";import"./useFieldComponent-CJlPbBit.js";import"./TextField-CWJX0VqQ.js";import"./FieldError-B4bZwJpA.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useTextField-BhxE74Xi.js";import"./useFormReset-Dt36AuVA.js";import"./useFormValidation-B17WGe6J.js";import"./useControlledHostValueProps-DhDFNqRj.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
