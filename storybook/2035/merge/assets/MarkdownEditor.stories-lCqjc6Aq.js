import{j as r}from"./iframe-CP5fTbjA.js";import{a as c,u as d,F as l,t as g}from"./Form-DYPer1qA.js";import{L as h}from"./Label-BqN0rMYY.js";import{B as m}from"./Button-LzGPdYwx.js";import{S}from"./Section-DiXKzprR.js";import{A as y}from"./ActionGroup-Cxrl3sEx.js";import{s as x}from"./Action-BkjzGa_I.js";import{M as f}from"./MarkdownEditor-Byv4u8B3.js";import"./index-Cun1SEai.js";import"./dynamic-e5X8hiwW.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./clsx-B-dksMZM.js";import"./index-DskZqzrG.js";import"./FieldError-De2xyHB9.js";import"./IconWarning-YasB_Ei3.js";import"./FieldError-CsW0lZ5n.js";import"./utils-D6GTtcOE.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./context-pkC0B_Pd.js";import"./browser-BxAQ3I6S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./Text-CHvdz95V.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";import"./getActionGroupSlot-DggKykPy.js";import"./useStatic-CBwN_HzY.js";import"./context-DXGAVSML.js";import"./Markdown-DecZrJWQ.js";import"./CodeBlock-Cf3DoFz2.js";import"./CopyButton-DEfi2EYR.js";import"./Tooltip-CBjFthEn.js";import"./ClearPropsContextView-DhKx-WaR.js";import"./react-children-utilities-C9GRWpEO.js";import"./Heading-BRj9pACc.js";import"./Heading-6kSboyTb.js";import"./InlineCode-CVfNmEoy.js";import"./Link-DvfzK0RM.js";import"./Separator-DoTsMiB7.js";import"./TextArea-C9ZO6mKS.js";import"./TextFieldBase-B_onkFZ8.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CEO5JJNc.js";import"./TextField-3H0FQYY0.js";import"./Form-DU1fRx45.js";import"./Group-kabkfPCX.js";import"./Input-DKZrAi90.js";import"./useTextField-Brwt3o7O.js";import"./useFormReset-B6af-x2Y.js";import"./useFormValidation-Lrzd87zJ.js";import"./ReactAriaControlledValueFix-CVNkgbtZ.js";import"./useManagedValue-DNffB7Sb.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
