import{j as r}from"./iframe-FESji9AM.js";import{a as c,u as d,F as l,t as g}from"./Form-_7yjhTRr.js";import{L as h}from"./Label-pNVGz1sw.js";import{B as m}from"./Button-BAxmgeRc.js";import{S}from"./Section-BpWwEjxG.js";import{A as y}from"./ActionGroup-BwhCzZFA.js";import{s as x}from"./Action-CrJdyVja.js";import{M as f}from"./MarkdownEditor-Crj_mbdk.js";import"./index-Cun1SEai.js";import"./dynamic-CUTbtcza.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./clsx-B-dksMZM.js";import"./index-ChCUOHR4.js";import"./FieldError-zF1s5-sf.js";import"./IconWarning-BN848dMt.js";import"./FieldError-DlYIOKPN.js";import"./utils-C8mGBIgx.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./context-ChjkYhaK.js";import"./browser-CzqLgnVu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./Text-BCUZ6o5_.js";import"./EmulatedBoldText-DW2sem56.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLpB9Wju.js";import"./useFocus-Bhqj5rOY.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./useStatic-JqJXV1dT.js";import"./context-igvBEEcT.js";import"./Markdown-J8ygga57.js";import"./CodeBlock-BhmKmbUX.js";import"./CopyButton-D2iQKyuD.js";import"./Tooltip-D2feOvAQ.js";import"./ClearPropsContextView-NtUgrnKO.js";import"./react-children-utilities-C1rV0jWg.js";import"./Heading-BU3RGcV8.js";import"./Heading-aIRtuq7k.js";import"./InlineCode-BQfhI8x5.js";import"./Link-iiRu8NM4.js";import"./Separator-DiJVhEpY.js";import"./TextArea-DdPWGtsN.js";import"./TextFieldBase-DLKZyP-3.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CA-9B81B.js";import"./TextField-BP1yQCB6.js";import"./Form-BtmTLzrx.js";import"./Group-CLv-XZL2.js";import"./Input-BlcEEaiS.js";import"./useTextField-DfDR-6Y5.js";import"./useFormReset-B3Fww5Tk.js";import"./useFormValidation-B9n8pxvz.js";import"./ReactAriaControlledValueFix-S5j312LI.js";import"./useManagedValue-DIWxKMPy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Qr=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,Qr as __namedExportsOrder,Jr as default};
