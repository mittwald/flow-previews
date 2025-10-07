import{j as r}from"./iframe-7dgBHkjI.js";import{a as c,u as d,F as l,t as g}from"./Form-ChLUzjHn.js";import{L as h}from"./Label-BOtdfEdH.js";import{B as m}from"./Button-C4xC-ENb.js";import{S}from"./Section-BTwbdvzE.js";import{A as y}from"./ActionGroup-DgEWvKip.js";import{s as x}from"./Action-aBxNfjGZ.js";import{M as f}from"./MarkdownEditor-C7_ON9WF.js";import"./index-Cun1SEai.js";import"./dynamic-3ixFNiB4.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./clsx-B-dksMZM.js";import"./index-DzRRQR_A.js";import"./FieldError-XEHbUqlq.js";import"./IconWarning-CHzLfKjq.js";import"./FieldError-DQvJzSCl.js";import"./utils-skLZq2rT.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./context-DLyAckLP.js";import"./browser-BYuTkZ2t.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./Text-CPbpE1eA.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C40tO5Ld.js";import"./useFocus-BVcT7Cmq.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./useStatic-BofYKATW.js";import"./context-CM0pxKNs.js";import"./Markdown-ClZNtaaH.js";import"./CodeBlock-ty3ydZfF.js";import"./CopyButton-B1wB9Kwn.js";import"./Tooltip-DKY9IbaO.js";import"./ClearPropsContextView-Dl-zrP-C.js";import"./react-children-utilities-BfAujq-x.js";import"./Heading-DA-R3l6v.js";import"./Heading-C_3CsfJi.js";import"./InlineCode-CiiUEjDD.js";import"./Link-rF8V2HfC.js";import"./Separator-X6ee7dn9.js";import"./TextArea-B9ngoT2C.js";import"./TextFieldBase-CDrFv569.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-HgH3Q7pf.js";import"./TextField-DOVBWSoz.js";import"./Form-emkFOLws.js";import"./Group-Bn60iEKX.js";import"./Input-pFk5V5wL.js";import"./useTextField-B_VR62Ms.js";import"./useFormReset-DcXBOsyZ.js";import"./useFormValidation-lhUbjjow.js";import"./ReactAriaControlledValueFix-IHuL5Gc3.js";import"./useManagedValue-OgtglwQ-.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
