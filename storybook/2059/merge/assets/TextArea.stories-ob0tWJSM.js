import{j as r}from"./iframe-4Q3VdU3W.js";import{a as x,u as h,F as f,t as b}from"./Form-D0cPrVSZ.js";import{L as e}from"./Label-UJpqKaML.js";import{B as n}from"./Button-DtfrCWpg.js";import{S as y}from"./Section-BCaeDUwn.js";import{A as S}from"./ActionGroup-CDfjIgIF.js";import{s as g}from"./Action-BPLFS_xS.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-b_wR7KhY.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./TextFieldBase-D2W4WVw6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DUJAoqDX.js";import"./TextField-pdOKyZ66.js";import"./Form-CQ3IrCNT.js";import"./Group-CjafXOCg.js";import"./Input-5I3vFHmb.js";import"./useTextField-BtsO4jRS.js";import"./useFormReset-DJaP_Vl0.js";import"./useFormValidation-QKBec53c.js";import"./ReactAriaControlledValueFix-zYXL9adS.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
