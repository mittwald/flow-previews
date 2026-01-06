import{j as r,r as x}from"./iframe-BAg_Vkif.js";import{b as n,u as a,F as p,t as E}from"./Form-B5JpX-3g.js";import{L as s}from"./Label-DDreQZVm.js";import{R as u,S as c}from"./ResetButton-Cn7zQX05.js";import{B as l}from"./Button-CNza9GnT.js";import{S as j}from"./Section-k31Ld_a5.js";import{A as b}from"./ActionGroup-DE4bxHka.js";import{s as d}from"./Action-BOjxF4Dl.js";import{M as m}from"./MarkdownEditor-DqF4n5gK.js";import{F as g}from"./FieldError-C6VlTPyB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-eE1nsZvE.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./browser-CG8hIWrH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bx8dS0aq.js";import"./utils-BI8UFEcl.js";import"./Hidden-BiPkEj1j.js";import"./useRef-B9ca9jGF.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./Text-Cv_CDcg6.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./ContextMenuSection-BZOfIkxf.js";import"./Dialog-BlnwYq_Z.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./useStatic-DpED2Oge.js";import"./context-BAbefeLZ.js";import"./Markdown-DIdFEfLG.js";import"./CodeBlock-BPAPxL7r.js";import"./CopyButton-CvMxT_K_.js";import"./Tooltip-DRmqfEDE.js";import"./react-children-utilities-Ck8_pp6j.js";import"./Heading-Dn2ss8TC.js";import"./Heading-DM0DAFfT.js";import"./InlineCode-BzsYzhmA.js";import"./Link-BFinc3Rk.js";import"./Separator-W-A1MzI3.js";import"./TextArea-D3TsOIbR.js";import"./TextFieldBase-Db8VVLgm.js";import"./FieldDescription-BcT__64l.js";import"./useFieldComponent-B6Kjd1ej.js";import"./TextField-yGQ0KKZp.js";import"./FieldError-CzfSrdz6.js";import"./Form-YKM3tWZS.js";import"./Group-W4MUpB1W.js";import"./Input-E6SU_N0O.js";import"./useTextField-v_8aHGWN.js";import"./useFormReset-cz3XyTOd.js";import"./useFormValidation-2zAOI2ZU.js";import"./useControlledHostValueProps-Ccn5EjqQ.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
