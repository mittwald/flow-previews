import{j as r}from"./iframe-skRbRPoL.js";import{a as x,u as h,F as f,t as b}from"./Form-Bp5psqD5.js";import{L as e}from"./Label-Cq3I2A96.js";import{B as n}from"./Button-Dz0DuBiT.js";import{S as y}from"./Section-DOyYK0OC.js";import{A as S}from"./ActionGroup-DcKdxNCn.js";import{s as g}from"./Action-BwiD4nix.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-CC2dlECg.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bawolgzq.js";import"./IconWarning-DXpZ8EkD.js";import"./FieldError-CQn8D9rY.js";import"./utils-BGdTTFGe.js";import"./Text-CUtREENU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./browser-5dwj1raN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./Text-CrBUObvU.js";import"./EmulatedBoldText-bw_ADscr.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./ContextMenuSection-Bs_nt5W1.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./context-BgdpZ9Nh.js";import"./useStatic-DAiG3iJH.js";import"./RSPContexts-x0Tynp33.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Switch-B4JasYcK.js";import"./useMakeFocusable-Vdb5-otp.js";import"./useToggleState-CGi4neW0.js";import"./useFormReset-i0yRktMd.js";import"./getActionGroupSlot-DYUIykqS.js";import"./TextFieldBase-DoN5p5B1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-D6SY3-DN.js";import"./TextField-PYB9-DEX.js";import"./Form-B2_iaNmT.js";import"./Group-BpjaHcFI.js";import"./Input-B5CQfP72.js";import"./useTextField-COBl652h.js";import"./useFormValidation-C1IjZLpu.js";import"./ReactAriaControlledValueFix-C0F2IYAO.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),m=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(m,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var p,a,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(a=s.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
