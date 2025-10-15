import{j as r}from"./iframe-CqjcYzEy.js";import{a as x,u as h,F as f,t as b}from"./Form-B9tr9_nz.js";import{L as e}from"./Label-To7Hive9.js";import{B as n}from"./Button-_n3f2tJI.js";import{S as y}from"./Section-JW2VQrnX.js";import{A as S}from"./ActionGroup-D6A6si9S.js";import{s as g}from"./Action-BV8ECr9I.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-B1MJAyUT.js";import"./index-Cun1SEai.js";import"./dynamic-B6VmRDv6.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./clsx-B-dksMZM.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./browser-BlhuXvad.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./Text-C88kvj5Y.js";import"./EmulatedBoldText-CpIdef6b.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./useStatic-B0fjiaVy.js";import"./context-BZQvEHSq.js";import"./TextFieldBase-5hRWqTvc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DOrquxD2.js";import"./TextField-wTNEAGIG.js";import"./Form-DnnLWbpp.js";import"./Group-gwwAZomc.js";import"./Input-D3RtfHLP.js";import"./useTextField-BgB0WV5Q.js";import"./useFormReset-BSVvJl_b.js";import"./useFormValidation-Jq_wsvSc.js";import"./ReactAriaControlledValueFix-ywrWc9Ds.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
