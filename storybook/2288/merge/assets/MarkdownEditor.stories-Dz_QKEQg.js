import{j as r,r as x}from"./iframe-DnKh_q8B.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-BYXMJKDA.js";import{L as s}from"./Label-_TjJj3W9.js";import{B as l}from"./Button-B6Zpw5yd.js";import{S as j}from"./Section-BVZq-_Eq.js";import{A as b}from"./ActionGroup-Cv1d3BuW.js";import{s as d}from"./Action-B5Uq12lQ.js";import{M as m}from"./MarkdownEditor-D56-9c1y.js";import{F as g}from"./FieldError-CQ45DqtA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE_n_a5m.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./useRef-TNLbSJcR.js";import"./utils-BZc8lNcd.js";import"./ButtonView-DGagadkt.js";import"./browser-BUa4T4SN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CFc3C1mq.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./ContextMenuSection-CPEZCChP.js";import"./Dialog-CHY6jywx.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./useStatic-DlxvzgyM.js";import"./context-CSnl0IXM.js";import"./Markdown-p9NXzu7D.js";import"./CodeBlock-Bz-Wnl6B.js";import"./CopyButton-DObkxuIz.js";import"./Tooltip-DIF5dyRC.js";import"./react-children-utilities-BTaWxpI0.js";import"./Heading-CB01boQE.js";import"./Heading-BwaoBSXr.js";import"./InlineCode-DExRxIXf.js";import"./Link-Df-ZNa8o.js";import"./Separator-BOhYzL5X.js";import"./TextArea-D54oiPfl.js";import"./TextFieldBase-DFTgtij1.js";import"./FieldDescription-73O0rUMk.js";import"./useFieldComponent-ClvUady3.js";import"./TextField-BOX8oND8.js";import"./FieldError-ChpD0sIl.js";import"./Form-BQHEa3Zl.js";import"./Group-BODZXCjp.js";import"./Input-mgtZ57Ff.js";import"./useTextField-TkD79Fcw.js";import"./useFormReset-BbinXmMH.js";import"./useFormValidation-C9ppbdC-.js";import"./useControlledHostValueProps-Cbx4Pluy.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
