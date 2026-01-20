import{j as r,r as x}from"./iframe-BB26x0WO.js";import{b as n,u as a,F as p,t as E}from"./Form-D1o3KJhA.js";import{L as s}from"./Label-Dkznuq9f.js";import{R as u,S as c}from"./ResetButton-CQhqclH6.js";import{B as l}from"./Button-BTY4YrG_.js";import{S as j}from"./Section-IPK-m1wF.js";import{A as b}from"./ActionGroup-B49LzYT3.js";import{s as d}from"./Action-DydPJm0t.js";import{M as m}from"./MarkdownEditor-4zAg3cTU.js";import{F as g}from"./FieldError-EbPb3FIT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-iWxR2zWf.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./clsx-B-dksMZM.js";import"./index-CQcoQf9d.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./browser-CM4yKXDn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-xrwNKiTo.js";import"./utils-B0cjT-cu.js";import"./Hidden-Pwu5MO4E.js";import"./useRef-BoNolS4p.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./ContextMenuSection-DGimkJAp.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./useStatic-CBwNmb4h.js";import"./context-tsnqiuvV.js";import"./Markdown-BidUJAKM.js";import"./CodeBlock-CH2Yhw7a.js";import"./CopyButton-tyf2GuJk.js";import"./Tooltip-DC_51GpP.js";import"./react-children-utilities-CwQWrOKU.js";import"./Heading-DjuXjgcE.js";import"./Heading-CYNLL9tG.js";import"./InlineCode-BZu1UrBH.js";import"./Link-Bbuns-ax.js";import"./Separator-ChAztj66.js";import"./TextArea-B7KimlrA.js";import"./TextFieldBase-CEHEFmoJ.js";import"./FieldDescription-C9tQ8Z1l.js";import"./useFieldComponent-uqIFFsha.js";import"./TextField-XAmj3fUL.js";import"./FieldError-BdEQwJOQ.js";import"./Form-D-p_8RL3.js";import"./Group-N-95shQ7.js";import"./Input-CX7n_Ikd.js";import"./useTextField-DyIHjJ7R.js";import"./useFormReset-DftD3Tx4.js";import"./useFormValidation-CSSQUpRU.js";import"./useControlledHostValueProps-xsHz9TIR.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
