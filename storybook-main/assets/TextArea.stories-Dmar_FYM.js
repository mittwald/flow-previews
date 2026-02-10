import{r as F,j as r}from"./iframe-1XlmVqd5.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-CJgx7ySR.js";import{L as o}from"./Label-DewN6HGl.js";import{B as c}from"./Button-QkNnHSXc.js";import{S as g}from"./Section-D0cW5Q8y.js";import{A as b}from"./ActionGroup-B6_ECWJg.js";import{s as u}from"./Action-edoqU8Tu.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CvyVbtYD.js";import{F as S}from"./FieldError-D3E1IfUM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pa5Mho8z.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./clsx-B-dksMZM.js";import"./index-TUds5Kez.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./useRef-Caie6AZd.js";import"./utils-DcI_f0WL.js";import"./ButtonView-DfAFlmFQ.js";import"./browser-BzXr98QP.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./Text-DoMRIGKc.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CBxBnL8r.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./ContextMenuSection-5WkAJf8V.js";import"./Dialog-RsR3YLab.js";import"./RSPContexts-Dq529x8m.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./VisuallyHidden-Dm6nphJv.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./useStatic-BBkG9kKa.js";import"./context-DAZ5ICmo.js";import"./useFieldComponent--2vv_KDv.js";import"./useControlledHostValueProps-B5zGe4HV.js";import"./FieldDescription-DjwLwJSM.js";import"./TextField-B-to4Icx.js";import"./FieldError-gWTdIqt3.js";import"./Form-XQS-LbjO.js";import"./Group-B8VxNK8d.js";import"./Input-DiBS55Zj.js";import"./useTextField-BfHwKAxn.js";import"./useFormReset-DNo3mt-e.js";import"./useFormValidation-BKr0RaqD.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
