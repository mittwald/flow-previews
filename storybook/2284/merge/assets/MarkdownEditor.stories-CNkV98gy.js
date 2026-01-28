import{j as r,r as x}from"./iframe-BbsOAs33.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DaMzmg4c.js";import{L as s}from"./Label-DjvR0JzL.js";import{B as l}from"./Button-CAGXh9YY.js";import{S as j}from"./Section-Cne65CO2.js";import{A as b}from"./ActionGroup-VbmjmzLd.js";import{s as d}from"./Action-BXhMVvh_.js";import{M as m}from"./MarkdownEditor-KAKA1wrC.js";import{F as g}from"./FieldError-DSzt6ekN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoVYgUcD.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./clsx-B-dksMZM.js";import"./index-32jMpZgo.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./useRef-D3zVPm3c.js";import"./utils-d4vW56Wr.js";import"./ButtonView-BQhPvsO2.js";import"./browser-6_CJeJSO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuEkD-Mt.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./ContextMenuSection-Dt_P0EQ4.js";import"./Dialog-Ch_CeJ5E.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./useControlledState-QxMMjnNS.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./VisuallyHidden-D-GMXsu-.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./useStatic-PZIJlmDl.js";import"./context-_vxrJXzy.js";import"./Markdown-BnLJYIpF.js";import"./CodeBlock-DMkLBL16.js";import"./CopyButton-e92laucG.js";import"./Tooltip-B55B9T_Y.js";import"./react-children-utilities-D6ScvZHr.js";import"./Heading-BC6iu52J.js";import"./Heading-Delp_XvT.js";import"./InlineCode-CYshlnNt.js";import"./Link-CZ64J4jt.js";import"./Separator-3l4JzLG0.js";import"./TextArea-BitBxcUi.js";import"./TextFieldBase-DtQicp1m.js";import"./FieldDescription-CI9EcbbK.js";import"./useFieldComponent-c0I5eEtM.js";import"./TextField-DS2qFl1_.js";import"./FieldError-3tWBh0vH.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useTextField-DCPrMHRH.js";import"./useFormReset-eAh5gylf.js";import"./useFormValidation-DyJaMlWv.js";import"./useControlledHostValueProps-DsfhA03o.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
