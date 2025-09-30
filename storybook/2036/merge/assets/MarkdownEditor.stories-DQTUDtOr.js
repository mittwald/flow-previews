import{j as r}from"./iframe-lUo2nGnz.js";import{a as c,u as d,F as l,t as g}from"./Form-DCV6t3hU.js";import{L as h}from"./Label-JtAW2uUp.js";import{B as m}from"./Button-BJSwvuxb.js";import{S}from"./Section-BmAZdHSz.js";import{A as y}from"./ActionGroup-DNEOJX-0.js";import{s as x}from"./Action-CDVhK15_.js";import{M as f}from"./MarkdownEditor-Sk1d13oG.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./Markdown-BmsuZm7r.js";import"./CodeBlock-CtR0SCu-.js";import"./CopyButton-ZGvG7trq.js";import"./Tooltip-BiTx2-UR.js";import"./react-children-utilities-CPVTkiFW.js";import"./Heading-mkjIQ5vz.js";import"./Heading-C6yyDy0w.js";import"./InlineCode-DKHMml_l.js";import"./Link-DEnOzgy5.js";import"./Separator-DlT4VhaX.js";import"./TextArea-BwRcT58A.js";import"./TextFieldBase-xZZ9JPcm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dnyf46T_.js";import"./TextField-CsqP2Q0r.js";import"./Form-CNo_OXXk.js";import"./Group-Cor_1PTD.js";import"./Input-Dtsuwq9P.js";import"./useTextField-gX6rH2pE.js";import"./useFormValidation-DhAPE9Wk.js";import"./ReactAriaControlledValueFix-CoyWxoVa.js";import"./useManagedValue-CKTufiVD.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,a,u;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
