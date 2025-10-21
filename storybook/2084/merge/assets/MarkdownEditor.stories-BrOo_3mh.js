import{j as r,r as h}from"./iframe-CPZmCQj-.js";import{a,u as p,F as d,t as F}from"./Form-C6vWvGsj.js";import{L as s}from"./Label-Cl3ovliO.js";import{B as m}from"./Button-CO0ZKbGC.js";import{S as x}from"./Section-BlZ_9OES.js";import{A as E}from"./ActionGroup-BEDNYTV6.js";import{s as l}from"./Action-C3sEJruT.js";import{M as n}from"./MarkdownEditor-DsTWdH7o.js";import{F as j}from"./useFieldComponent-ZdrCImE8.js";import"./index-nuYtCEEu.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./browser-Vbuqg8Bp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DhGaeBi-.js";import"./utils-DbTuSxgD.js";import"./Hidden-klXcLh_8.js";import"./IconWarning-BHYwQlMQ.js";import"./Text-cGw-MBFK.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./ContextMenuSection-Dto6kOnn.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./dynamic-C0WBJwRj.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./useStatic-BEtxpUKF.js";import"./context-7pI23nLQ.js";import"./Markdown-10DDOTzE.js";import"./CodeBlock-BnKGSbBr.js";import"./CopyButton-BFCDEAnb.js";import"./Tooltip-DXpY6bxY.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./react-children-utilities-BpPrmtLj.js";import"./Heading-CTnOUdED.js";import"./Heading-3nGV8T5A.js";import"./InlineCode-C6jXJz0Z.js";import"./Link-CogEYAX9.js";import"./Separator-DWutvkh2.js";import"./TextArea-DxLpMhxI.js";import"./TextFieldBase-CPSGO8hB.js";import"./FieldDescription-BFKEApQk.js";import"./TextField-BQ8NGeCA.js";import"./Form-KkxpJ3qz.js";import"./Group-Csdn_P-J.js";import"./Input-CQkI7-zw.js";import"./useTextField-eZki_XjH.js";import"./useFormReset-BZ0LqTvh.js";import"./useFormValidation-D952ndYN.js";import"./ReactAriaControlledValueFix-wp7kzKG1.js";import"./useManagedValue-DfAGrzYU.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
