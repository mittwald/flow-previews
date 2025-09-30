import{j as r}from"./iframe-Co5olYEg.js";import{a as c,u as d,F as l,t as g}from"./Form-KJ02LKVv.js";import{L as h}from"./Label-BiorYBBr.js";import{B as m}from"./Button-W4WIo1el.js";import{S}from"./Section-DKEvIbkh.js";import{A as y}from"./ActionGroup-ByB8rRUO.js";import{s as x}from"./Action-Cid4LteC.js";import{M as f}from"./MarkdownEditor-CeXSTxx_.js";import"./index-Cun1SEai.js";import"./dynamic-DrcT1vJi.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./clsx-B-dksMZM.js";import"./FieldError-ozznJ0Nd.js";import"./IconWarning-Deg5RPPa.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./context-VmB2ki6S.js";import"./browser-Lvchr8XH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./Text-D64yDBkh.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BWYiyAlu.js";import"./useFocus-D_PcVBPO.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./ContextMenuSection-BCeGxmuy.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Switch-Djj9tj67.js";import"./useMakeFocusable-DB3B4rem.js";import"./useToggleState-4TXdrtqZ.js";import"./useFormReset-CgjW6y2V.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./Markdown-DZffT5hB.js";import"./CodeBlock-Dd_4dOZm.js";import"./CopyButton-DOMsO9lu.js";import"./Tooltip-CiL83krk.js";import"./react-children-utilities-Ct60DWOK.js";import"./Heading-DRAIgzpf.js";import"./Heading-teNtWRwy.js";import"./InlineCode-CKcNafmZ.js";import"./Link-B6gYlMo4.js";import"./Separator-CxAUuMt3.js";import"./TextArea-BLtS830K.js";import"./TextFieldBase-CpWSYvvy.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BesRHQ6n.js";import"./TextField-CWDJYZYb.js";import"./Form-XAAYfRmY.js";import"./Group-BEO1bpjW.js";import"./Input-B4YaMKko.js";import"./useTextField-kPi4VDlP.js";import"./useFormValidation-CpjqECXn.js";import"./ReactAriaControlledValueFix-DZySu1uE.js";import"./useManagedValue-CcsszAmd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,a,u;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const $r=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,$r as __namedExportsOrder,Zr as default};
