import{j as r}from"./iframe-Dyev7uqQ.js";import{a as x,u as h,F as f,t as b}from"./Form-Gu8_mx9R.js";import{L as e}from"./Label-DTUVPi2K.js";import{B as n}from"./Button-M1gfFqsi.js";import{S as y}from"./Section-BfDLZAnd.js";import{A as S}from"./ActionGroup-Cif2aV44.js";import{s as g}from"./Action-B4ax4ap7.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-BoSh-UBk.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./TextFieldBase-DWJUsyWD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B0vuMjWm.js";import"./TextField-BaYoK8D6.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useTextField-B5EVwJKx.js";import"./useFormReset-CiUCuSgO.js";import"./useFormValidation-BpwVeG4s.js";import"./ReactAriaControlledValueFix-B2iOgium.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
