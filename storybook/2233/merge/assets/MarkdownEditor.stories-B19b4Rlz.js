import{j as r,r as x}from"./iframe-DkC9HeFh.js";import{b as n,u as a,F as p,t as E}from"./Form-DFQtf3GU.js";import{L as s}from"./Label-Bmyd95n1.js";import{R as u,S as c}from"./ResetButton-BQqEyyoX.js";import{B as l}from"./Button-B7ieOWfK.js";import{S as j}from"./Section-C5sab7e9.js";import{A as b}from"./ActionGroup-fpt_mN-q.js";import{s as d}from"./Action-BeqMUzE-.js";import{M as m}from"./MarkdownEditor-C21c2lqL.js";import{F as g}from"./FieldError-Dbnkzdo1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDaduNaQ.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./browser-tA6G_ksz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dz_bjD6f.js";import"./utils-CQbe0cgS.js";import"./Hidden-Dt8SDEzH.js";import"./useRef-Bpt1Kr88.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./ContextMenuSection-nkrIclXc.js";import"./Dialog-BJyrAoE0.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./useStatic-8Ma0Gu-h.js";import"./context-Z29bubao.js";import"./Markdown-DuJvTg5Z.js";import"./CodeBlock-D_HEMEVe.js";import"./CopyButton-DDCtj1zp.js";import"./Tooltip-qvCrGnxX.js";import"./react-children-utilities-DZp9i3kA.js";import"./Heading-C5UH4Hr2.js";import"./Heading-C_Zexpqw.js";import"./InlineCode-Hw0TdFZv.js";import"./Link-Yw1jAvGj.js";import"./Separator-Dkh1gUV_.js";import"./TextArea-CmyYxxjw.js";import"./TextFieldBase-Ds1AgYlo.js";import"./FieldDescription-DzNmSyg3.js";import"./useFieldComponent-eCPWR12U.js";import"./TextField-BuskeFhM.js";import"./FieldError-CNoEBaIo.js";import"./Form-D5R2a4m8.js";import"./Group-C_JnVwTY.js";import"./Input-BPPE0u71.js";import"./useTextField-DbxlREwJ.js";import"./useFormReset-BF2XnUgU.js";import"./useFormValidation-DmYU2vdY.js";import"./useControlledHostValueProps-CcqRfY0b.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
