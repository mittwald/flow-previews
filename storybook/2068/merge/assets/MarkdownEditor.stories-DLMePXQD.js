import{j as r}from"./iframe-BsWE3_7o.js";import{a as c,u as d,F as l,t as g}from"./Form-CmXyG-QV.js";import{L as h}from"./Label-D6AcunKl.js";import{B as m}from"./Button-B8k4PzHL.js";import{S}from"./Section-BBfFuT6N.js";import{A as y}from"./ActionGroup-B8fCt23K.js";import{s as x}from"./Action-BuGRjvOM.js";import{M as f}from"./MarkdownEditor-CnQDOmpi.js";import"./index-Cun1SEai.js";import"./dynamic-CuzBn_WV.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./clsx-B-dksMZM.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./browser-LwAPTQ-2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./getActionGroupSlot-C6PA21cd.js";import"./useStatic-BvSdYqAU.js";import"./context-CUTz3ChQ.js";import"./Markdown-C2EVqrNF.js";import"./CodeBlock-Dx_zs92r.js";import"./CopyButton-CdKBNsEE.js";import"./Tooltip-zKpBC20m.js";import"./ClearPropsContextView-BWN31-oJ.js";import"./react-children-utilities-B4QWO26V.js";import"./Heading-CjI7aUjt.js";import"./Heading-CzYkVZjM.js";import"./InlineCode-BszNcpGP.js";import"./Link-DUzgima2.js";import"./Separator-Cy_AwnGG.js";import"./TextArea-B8ARpJOw.js";import"./TextFieldBase-DmFBNK9C.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrfrkFA7.js";import"./TextField-BJDoddff.js";import"./Form-C2iHaD1W.js";import"./Group-B4E33LQv.js";import"./Input-ChLUKEAu.js";import"./useTextField-JbRoKTtn.js";import"./useFormReset-DgPn8KEa.js";import"./useFormValidation-5Qvk76gI.js";import"./ReactAriaControlledValueFix-DrCMnd7H.js";import"./useManagedValue-BBn6RdVY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
