import{j as r,r as h}from"./iframe-DOYRhvKw.js";import{a,u as p,F as d,t as F}from"./Form-CJukERYt.js";import{L as s}from"./Label-D1jneSDA.js";import{B as m}from"./Button-C2r2j3I4.js";import{S as x}from"./Section-BJf3Kb9f.js";import{A as E}from"./ActionGroup-BQVi9nN6.js";import{s as l}from"./Action-BNkegqWa.js";import{M as n}from"./MarkdownEditor-CSeiLnqy.js";import{F as j}from"./useFieldComponent-CVvykpK2.js";import"./index-nuYtCEEu.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./browser-BfmJHaZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPl4piTh.js";import"./utils-Bgpcx055.js";import"./Hidden-vFw0yyvc.js";import"./IconWarning-CT2mn3WV.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./dynamic-nHNYFzn9.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./useStatic-kDWe5hml.js";import"./context-CjasfPnd.js";import"./Markdown-B9vNWsVt.js";import"./CodeBlock-9SoLjwIW.js";import"./CopyButton-91QL9_KQ.js";import"./Tooltip-CfJ3nkrW.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./react-children-utilities-BC28ceB8.js";import"./Heading-BcQRRFfC.js";import"./Heading-BiqQ-WE6.js";import"./InlineCode-CHfNKay-.js";import"./Link-Bo-kO0xT.js";import"./Separator-CMsdUpiW.js";import"./TextArea-BG5CZo2j.js";import"./TextFieldBase-BQTokYYT.js";import"./FieldDescription-Blyf9m0W.js";import"./TextField-zZoLVZYC.js";import"./Form-iQ1p0tBu.js";import"./Group-HF6ucXVn.js";import"./Input-OSTDVC9B.js";import"./useTextField-B558uymh.js";import"./useFormReset-BHPIYNcK.js";import"./useFormValidation-37foNTGu.js";import"./ReactAriaControlledValueFix-BeGVeEzJ.js";import"./useManagedValue-CTsotaDH.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
