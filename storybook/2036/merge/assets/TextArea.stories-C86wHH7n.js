import{j as r}from"./iframe-lUo2nGnz.js";import{a as x,u as h,F as f,t as b}from"./Form-DCV6t3hU.js";import{L as e}from"./Label-JtAW2uUp.js";import{B as n}from"./Button-BJSwvuxb.js";import{S as y}from"./Section-BmAZdHSz.js";import{A as S}from"./ActionGroup-DNEOJX-0.js";import{s as g}from"./Action-CDVhK15_.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-BwRcT58A.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./TextFieldBase-xZZ9JPcm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dnyf46T_.js";import"./TextField-CsqP2Q0r.js";import"./Form-CNo_OXXk.js";import"./Group-Cor_1PTD.js";import"./Input-Dtsuwq9P.js";import"./useTextField-gX6rH2pE.js";import"./useFormValidation-DhAPE9Wk.js";import"./ReactAriaControlledValueFix-CoyWxoVa.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),m=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(m,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var p,a,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(a=s.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Hr=["Default","WithFocusAndError"];export{s as Default,i as WithFocusAndError,Hr as __namedExportsOrder,Gr as default};
