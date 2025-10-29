import{j as r,r as h}from"./iframe-BFuSR0CY.js";import{a,u as p,F as d,t as F}from"./Form-CHCtd8Yh.js";import{L as s}from"./Label-Bzfu9tdI.js";import{B as m}from"./Button-B8_RMB4T.js";import{S as x}from"./Section-D9YHwW4r.js";import{A as E}from"./ActionGroup-D5-F9zXz.js";import{s as l}from"./Action-BBEtKGm4.js";import{M as n}from"./MarkdownEditor-CUk7mbO4.js";import{F as j}from"./useFieldComponent-DvAk7ROg.js";import"./index-nuYtCEEu.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./clsx-B-dksMZM.js";import"./index-D8dET2XL.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./browser-h3r-jBf1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dl8lfN0K.js";import"./utils-CEuw8CkJ.js";import"./Hidden-BoaT9a_j.js";import"./IconWarning-BDLPxpKm.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./ContextMenuSection-DOizDCjF.js";import"./Dialog-D9CJ_WbB.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./useControlledState-Y8_jrThy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./dynamic-BFfatATg.js";import"./getActionGroupSlot-C1e95e1F.js";import"./useStatic-BcQq_-tU.js";import"./context-CFFRtyxF.js";import"./Markdown-DvWAAyv6.js";import"./CodeBlock-AsRyCgMw.js";import"./CopyButton-nwvXegUu.js";import"./Tooltip-_6ZohaIC.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./react-children-utilities-705z1kI6.js";import"./Heading-CGhPkmp1.js";import"./Heading-BHjkLbk1.js";import"./InlineCode-UIQIcbtA.js";import"./Link-DWegYKZ9.js";import"./Separator-CZybpUqi.js";import"./TextArea-CmrsvGfz.js";import"./TextFieldBase-DBfua65y.js";import"./FieldDescription-DReTe5UI.js";import"./TextField-CuNLH0lz.js";import"./Form-CopJ-XT2.js";import"./Group-ln6N3sDl.js";import"./Input-Dy1mfW1m.js";import"./useTextField-DzB7yg8E.js";import"./useFormReset-CMQHaKTN.js";import"./useFormValidation-Dt4bKs4p.js";import"./ReactAriaControlledValueFix-CD5iZKpR.js";import"./useManagedValue-DQtRhby5.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,zr as __namedExportsOrder,Yr as default};
