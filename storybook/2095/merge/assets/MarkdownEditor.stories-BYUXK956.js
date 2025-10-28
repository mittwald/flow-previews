import{j as r,r as h}from"./iframe-BYlM8TfH.js";import{a,u as p,F as d,t as F}from"./Form-CVBWUNQi.js";import{L as s}from"./Label-CObvhZe8.js";import{B as m}from"./Button-DrjwoUCb.js";import{S as x}from"./Section-D4heV61s.js";import{A as E}from"./ActionGroup-D2zlXLO9.js";import{s as l}from"./Action-i4rkq48V.js";import{M as n}from"./MarkdownEditor-T4V62VWq.js";import{F as j}from"./useFieldComponent-BoJq1S9B.js";import"./index-nuYtCEEu.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./browser-D2sPcOVM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-COiWxsLa.js";import"./utils-BDqIfUE7.js";import"./Hidden-CSqzjE-Z.js";import"./IconWarning-WQ4wo7kP.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Dialog-BSP5EDkY.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";import"./dynamic-BhGDraHV.js";import"./getActionGroupSlot-nR5vf13o.js";import"./useStatic-6sdTMqO6.js";import"./context-BILGmIqx.js";import"./Markdown-CgMJZ4D8.js";import"./CodeBlock-BX8axwJz.js";import"./CopyButton-Bysoari5.js";import"./Tooltip-CgdawZ-z.js";import"./ClearPropsContextView-BJe-Torm.js";import"./ClearPropsContext-BpBo361K.js";import"./react-children-utilities-DxnuAJ4K.js";import"./Heading-CurQq7EL.js";import"./Heading-BrhKeiNO.js";import"./InlineCode-BJajLeFr.js";import"./Link-DYPsb7nu.js";import"./Separator-BQECgCLf.js";import"./TextArea-DDDA4nuX.js";import"./TextFieldBase-DJx7Fgqs.js";import"./FieldDescription-DcQaW8xO.js";import"./TextField--jqwCYSY.js";import"./Form-CqmUY9BV.js";import"./Group-Bk1pllsG.js";import"./Input-Dg1gUccH.js";import"./useTextField-SWkzlhtV.js";import"./useFormReset-Bl4vFhC1.js";import"./useFormValidation-wBqhYJyj.js";import"./ReactAriaControlledValueFix-CJCbwxyd.js";import"./useManagedValue-DzckZ6nk.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
