import{j as r}from"./iframe-LeKLDkYY.js";import{a as x,u as h,F as f,t as b}from"./Form-BYfGufMQ.js";import{L as e}from"./Label-_IGpUYiB.js";import{B as n}from"./Button-BbTRgfHO.js";import{S as y}from"./Section-BZBM6YrE.js";import{A as S}from"./ActionGroup-oo50HUzg.js";import{s as g}from"./Action-BR3Us8L0.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea--EG0mMtK.js";import"./index-Cun1SEai.js";import"./dynamic-BVwjsZ-m.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./clsx-B-dksMZM.js";import"./index-uQv72qiR.js";import"./FieldError-TZ4s3Na9.js";import"./IconWarning-DddVt0_L.js";import"./FieldError-BDYKP3YZ.js";import"./utils-1n9saaJJ.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./context-wUV3k3U5.js";import"./browser-Cy-I7M8E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./Text-tNO3jzOI.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kmLZVcf4.js";import"./useFocus-DpQgRw3u.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./useStatic-BEy_HvO3.js";import"./context-DpN-jprx.js";import"./TextFieldBase-lD2I63dC.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-7AeFbuXn.js";import"./TextField-BDgKTHd3.js";import"./Form-CCM4YJxo.js";import"./Group-CWnUrbV4.js";import"./Input-CErx5FmD.js";import"./useTextField--t-sUnTA.js";import"./useFormReset-CXz6fjib.js";import"./useFormValidation-B7bn9a_3.js";import"./ReactAriaControlledValueFix-D7JEkwnS.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
