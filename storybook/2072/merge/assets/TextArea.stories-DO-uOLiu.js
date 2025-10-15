import{j as r}from"./iframe-tskdVQ8N.js";import{a as x,u as h,F as f,t as b}from"./Form-CcGsBZKh.js";import{L as e}from"./Label-CsJ7Xmev.js";import{B as n}from"./Button-Dsg_4rdI.js";import{S as y}from"./Section-O741B4-H.js";import{A as S}from"./ActionGroup-B0eph536.js";import{s as g}from"./Action-CeCtXdjv.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-4xftLeWC.js";import"./index-Cun1SEai.js";import"./dynamic-BrDu037J.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./clsx-B-dksMZM.js";import"./index-C1m14znk.js";import"./FieldError-BdEz1ju8.js";import"./IconWarning-Bd2S-Yd8.js";import"./FieldError-BQtr77Yc.js";import"./utils-B12eWPaZ.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./browser-C459Qnce.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./ContextMenuSection-DqvIY19i.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./useStatic-1YPHy18H.js";import"./context-CVZR0KsW.js";import"./TextFieldBase-B_eNjkkd.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B2j6G7O5.js";import"./TextField-qs-UTjJy.js";import"./Form-r-7bApRf.js";import"./Group-BxNa3NfW.js";import"./Input-D8C7sCTv.js";import"./useTextField-v5hGozoz.js";import"./useFormReset-D7H6HyHT.js";import"./useFormValidation-GdVWjc_V.js";import"./ReactAriaControlledValueFix-C-rmsYnN.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TextArea type="text">
            <Label>Text</Label>
          </TextArea>
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Ir=["Default","WithFocusAndError"];export{m as Default,i as WithFocusAndError,Ir as __namedExportsOrder,vr as default};
