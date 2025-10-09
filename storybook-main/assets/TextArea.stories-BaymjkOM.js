import{j as r}from"./iframe-DwZ8STeX.js";import{a as x,u as h,F as f,t as b}from"./Form-DB-9BDR2.js";import{L as e}from"./Label-wZ6tq0z6.js";import{B as n}from"./Button-DviFkjeq.js";import{S as y}from"./Section-ClBJebLo.js";import{A as S}from"./ActionGroup-CghJCTXs.js";import{s as g}from"./Action-bmScN_4O.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-BpQA5RLw.js";import"./index-Cun1SEai.js";import"./dynamic-DhSxKtV5.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./clsx-B-dksMZM.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./browser-DDdNHtRK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./context-DCjwncLb.js";import"./TextFieldBase-BKC1AXzh.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrHb9YgI.js";import"./TextField-BkjiHt80.js";import"./Form-ekHeB2q6.js";import"./Group-DYrYUI7b.js";import"./Input-DPWebHIT.js";import"./useTextField-D3KPmHQF.js";import"./useFormReset-DQpyIayp.js";import"./useFormValidation-DWWt7inC.js";import"./ReactAriaControlledValueFix-Vb6shxA3.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
