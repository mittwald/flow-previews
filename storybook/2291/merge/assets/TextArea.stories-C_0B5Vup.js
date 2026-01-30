import{j as r,r as F}from"./iframe-DSXKf9Qs.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DQocwP5Q.js";import{L as o}from"./Label-BZGX3mYQ.js";import{B as c}from"./Button-D9RPwGO-.js";import{S as g}from"./Section-C2etDRXq.js";import{A as b}from"./ActionGroup-Cult8i-N.js";import{s as u}from"./Action-D8TvePO3.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DLlvuXXH.js";import{F as S}from"./FieldError-DyLpPvQc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-waHTXRlt.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./useRef-i8-2SC7v.js";import"./utils-BkNrSrSW.js";import"./ButtonView-d2J1OyEz.js";import"./browser-zi1f_NHh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Text-C7KW9wgf.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3-3tpV2.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useFocusable-BiabYp81.js";import"./ContextMenuSection-8AZZSNKN.js";import"./Dialog-Dgijbiav.js";import"./RSPContexts-C47t6iqA.js";import"./OverlayArrow-wV4le4-P.js";import"./useControlledState-C8VBbj0I.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./useStatic-CLatwN1t.js";import"./context-CiYX6UJF.js";import"./useFieldComponent-CCab4n06.js";import"./useControlledHostValueProps-DA4HPgA7.js";import"./FieldDescription-D3qqafyO.js";import"./TextField-DBMQ6SdS.js";import"./FieldError-D2u-4343.js";import"./Form-CmWGeahq.js";import"./Group-cFUMqjZ6.js";import"./Input-C3UpKYh9.js";import"./useTextField-yOaw7krz.js";import"./useFormReset-CY4Zdzy9.js";import"./useFormValidation-CZFMPKAm.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
