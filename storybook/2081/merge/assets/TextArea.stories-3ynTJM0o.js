import{j as r}from"./iframe-Cxe2R7_6.js";import{a as x,u as h,F as f,t as b}from"./Form-J2UUhBWk.js";import{L as e}from"./Label-BvEZKMSr.js";import{B as n}from"./Button-DDreAfBq.js";import{S as y}from"./Section-CTCBpNMs.js";import{A as S}from"./ActionGroup-3nPo4GGD.js";import{s as g}from"./Action-g8e46b99.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-CVeSv2Yq.js";import"./index-Cun1SEai.js";import"./dynamic-C5ZbgSqQ.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./clsx-B-dksMZM.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./browser-eQsbTmR1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./useStatic-CcLu1Qpn.js";import"./context-DVixImBB.js";import"./TextFieldBase-B-FVaFIt.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BjaDofba.js";import"./TextField-BrnMCB9A.js";import"./Form-xSvri39Q.js";import"./Group-CoOuBhM6.js";import"./Input-D9HmJNQ0.js";import"./useTextField-B345Mwln.js";import"./useFormReset-ClXq3Rv0.js";import"./useFormValidation-Bu_33Brb.js";import"./ReactAriaControlledValueFix-D6nfZf0A.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),Ir={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),m=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(m,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Wr=["Default","WithFocusAndError"];export{s as Default,i as WithFocusAndError,Wr as __namedExportsOrder,Ir as default};
