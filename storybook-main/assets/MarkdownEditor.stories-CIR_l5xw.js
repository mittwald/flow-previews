import{j as r}from"./iframe-CTxtjXon.js";import{a as c,u as d,F as l,t as g}from"./Form-B0b-E516.js";import{L as h}from"./Label-DtGgIyZp.js";import{B as m}from"./Button-CTR-HA58.js";import{S}from"./Section-BY4zi19G.js";import{A as y}from"./ActionGroup-CzROJviL.js";import{s as x}from"./Action-DoHauz19.js";import{M as f}from"./MarkdownEditor-gCnTlX2Z.js";import"./index-Cun1SEai.js";import"./dynamic-BqhEVzNx.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./clsx-B-dksMZM.js";import"./index-BCkzqzEU.js";import"./FieldError-yMhB6vk6.js";import"./IconWarning-BCagwmXL.js";import"./FieldError-DPTagllN.js";import"./utils-Dyxd3-sq.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./browser-B97evyF-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./Text-DQcec0AG.js";import"./EmulatedBoldText-Da4iAST0.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./useStatic-FLOcJlac.js";import"./context-C6LdJJW6.js";import"./Markdown-XiUpllaQ.js";import"./CodeBlock-YMXubEYz.js";import"./CopyButton-DAwK6l0E.js";import"./Tooltip-Bwqh9sz3.js";import"./ClearPropsContextView-0ZtOxsLm.js";import"./react-children-utilities-zeoR6A0c.js";import"./Heading-DhacWgsT.js";import"./Heading-CDy8srZ9.js";import"./InlineCode-C36tYAkO.js";import"./Link-P7Z3jhiY.js";import"./Separator-CFnQk13i.js";import"./TextArea-BzIfE8jr.js";import"./TextFieldBase-Wk6xnV6T.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-YWOUxJnG.js";import"./TextField-DgTH4A2F.js";import"./Form-aYocGFK9.js";import"./Group-BURTQMUm.js";import"./Input-B1qknwCX.js";import"./useTextField-Y19scEG9.js";import"./useFormReset-dEYYJoAx.js";import"./useFormValidation-PRBMAw7o.js";import"./ReactAriaControlledValueFix-BxTFRqLo.js";import"./useManagedValue-C9N5Z3-r.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
