import{j as r,r as x}from"./iframe-xTeLnFvu.js";import{u as n,F as a}from"./Form-CzGdw75V.js";import{L as s}from"./Label-CVltlbUu.js";import{F as p,t as E}from"./Field-CAkbrvl3.js";import{B as l}from"./Button-BA5_aaZE.js";import{S as j}from"./Section-o_jduYUp.js";import{A as b}from"./ActionGroup-TgHXsP3h.js";import{s as d}from"./Action-GyTbi50D.js";import{M as m}from"./MarkdownEditor-CwHGZVcE.js";import{F as g}from"./FieldError-oOsFR_NQ.js";import{S as u}from"./SubmitButton-DWFkkN3I.js";import{R as c}from"./ResetButton-DEvz3aTX.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-B-9yYF9r.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-ndn1boAo.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./Markdown-CKlSGeZA.js";import"./CodeBlock-DXm43E31.js";import"./CopyButton-BiKlC49t.js";import"./IconCopy-AixFsnDh.js";import"./Tooltip-Cfo8NWrg.js";import"./Activity-D0VzS_Xj.js";import"./TranslationProvider-Y_3SKiEv.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-C5f-0JXn.js";import"./Heading-cElDoL_q.js";import"./Heading-Dpj368kt.js";import"./InlineCode-DX9BaPAe.js";import"./Link-CSHVAz2z.js";import"./IconDownload-CEpEnyol.js";import"./Separator-DYGR8Enb.js";import"./TextArea-CYsQP8h7.js";import"./TextFieldBase-DZCwCLUZ.js";import"./useFieldComponent-Brjsz3RP.js";import"./TextField-k_ckfWyI.js";import"./FieldError-Cxb9ZjML.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./useTextField-CSw7_eNz.js";import"./useFormReset-Co6bkbVB.js";import"./useFormValidation-CD-qIFlG.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./IconList-Dp1jPIwD.js";import"./IconDanger-DpVgPae0.js";import"./useRef-D_8ZkygH.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async F=>{await d(5e3),M(F)},f=n({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=n({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
