import{j as r,r as h}from"./iframe-GtWYOLNc.js";import{a,u as p,F as d,t as F}from"./Form-CJDsExi9.js";import{L as s}from"./Label-rRCJof1T.js";import{B as m}from"./Button-DAMH2RQe.js";import{S as x}from"./Section-PDyMtoME.js";import{A as E}from"./ActionGroup-CUP01UMb.js";import{s as l}from"./Action-DgPdZSGQ.js";import{M as n}from"./MarkdownEditor-CO8-Bv1J.js";import{F as j}from"./useFieldComponent-CFSDwBJf.js";import"./index-nuYtCEEu.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./clsx-B-dksMZM.js";import"./index-Do7K3gX4.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./context-D40YBGtd.js";import"./browser-Dfdmz1Vs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQFAMqNH.js";import"./utils-DD5Sc9KY.js";import"./Hidden-BU9Lcw6n.js";import"./IconWarning-D3qu7dXh.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./Text-CjcFKgn5.js";import"./LoadingSpinner-BgxzSWV-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAFfpCNE.js";import"./ProgressBar-CdTHAJ2Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./ContextMenuSection-BqJoKa5n.js";import"./Dialog-E17SkaPF.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./dynamic-D_-LYO4W.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./useStatic-BUau0uD4.js";import"./context-B79p2l6c.js";import"./Markdown-CKRd68Cn.js";import"./CodeBlock-CCzX3EK1.js";import"./CopyButton-C8yLqHre.js";import"./Tooltip-DJZxW_5C.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./react-children-utilities-BE-u8eGk.js";import"./Heading-D17rAsKb.js";import"./Heading-D0R31Oqj.js";import"./InlineCode-BqI4zlun.js";import"./Link-CfCeYdU8.js";import"./Separator-b4F9U2bi.js";import"./TextArea-BX7_MwRE.js";import"./TextFieldBase-Ctzb06j_.js";import"./FieldDescription-H7Ygmbn3.js";import"./TextField-DX8eTu1K.js";import"./Form-CKR5JFnD.js";import"./Group-CA7dPhnC.js";import"./Input-BPP_cYwL.js";import"./useTextField-CjuQjVvL.js";import"./useFormReset-C8pOBnDM.js";import"./useFormValidation-BcoBpGbt.js";import"./ReactAriaControlledValueFix-BuCvRdUH.js";import"./useManagedValue-CpjecO7V.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
