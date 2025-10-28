import{j as r,r as h}from"./iframe-BvCo0Jms.js";import{a,u as p,F as d,t as F}from"./Form-Cf8bPcIw.js";import{L as s}from"./Label-9SlnZKrY.js";import{B as m}from"./Button-BdRFLyHU.js";import{S as x}from"./Section-B56xh2AV.js";import{A as E}from"./ActionGroup-BBtpfHLw.js";import{s as l}from"./Action-B4Kyn-_S.js";import{M as n}from"./MarkdownEditor-FlK1gu7A.js";import{F as j}from"./useFieldComponent-h58tn8zy.js";import"./index-nuYtCEEu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./browser-DOebU0pA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DMgJ6fuj.js";import"./utils-Cw2xzcbV.js";import"./Hidden-Bxmlm1r5.js";import"./IconWarning-DF-Lhcnu.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./ContextMenuSection-D9cp5lxC.js";import"./Dialog-Bn7Do3Cm.js";import"./RSPContexts-DqErA_gH.js";import"./OverlayArrow-CPNbfpB1.js";import"./useControlledState-C0Hm7DMH.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";import"./dynamic-BmXp7BE9.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./useStatic-BT5cYh4l.js";import"./context-Dhm9rN8k.js";import"./Markdown-BmHdhB9Y.js";import"./CodeBlock-BjM92Eo7.js";import"./CopyButton-DoCe1wMe.js";import"./Tooltip-BkzngzVW.js";import"./ClearPropsContextView-C48HQbuq.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./react-children-utilities-K6HpEoIu.js";import"./Heading-B5ZCmgMS.js";import"./Heading-DDeE-fbN.js";import"./InlineCode-CYtd0b42.js";import"./Link-BkqgumxN.js";import"./Separator-BL37Bi91.js";import"./TextArea-Chqx5i1a.js";import"./TextFieldBase-DUjDXXxQ.js";import"./FieldDescription-ThKAVIuf.js";import"./TextField-Cg2_j61p.js";import"./Form-DLKKw6GK.js";import"./Group-CxRviubY.js";import"./Input-DUPogfhm.js";import"./useTextField-DZ1FF2T9.js";import"./useFormReset-B8Yq5UFv.js";import"./useFormValidation-DFmu6UDs.js";import"./ReactAriaControlledValueFix-B2lXfI7Z.js";import"./useManagedValue-C3Cvntyc.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
