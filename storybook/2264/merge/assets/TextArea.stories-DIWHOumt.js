import{j as r,r as F}from"./iframe-CL_XwmGn.js";import{b as p,u as d,F as l,t as j}from"./Form-afgYqryA.js";import{L as o}from"./Label-D8wjF5yZ.js";import{R as h,S as x}from"./ResetButton-DuDiPc2f.js";import{B as c}from"./Button-D2VcFxMo.js";import{S as g}from"./Section-DJ3JBl70.js";import{A as b}from"./ActionGroup-CTh7FmAm.js";import{s as u}from"./Action-BeuDPcZa.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-xYRHfpgH.js";import{F as S}from"./FieldError-p9GwIgel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-qzGoZAaQ.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./clsx-B-dksMZM.js";import"./index-E9PNAIL6.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./browser-BUAGSuau.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C9CEKXVd.js";import"./utils-pMOpDdKA.js";import"./Hidden-D-ekfNfu.js";import"./useRef-VOW4feYT.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./useStatic-KIt4AINJ.js";import"./context-C4d2ZO_d.js";import"./TextFieldBase-9NVtSak1.js";import"./FieldDescription-B8hcReII.js";import"./useFieldComponent-CJlPbBit.js";import"./TextField-CWJX0VqQ.js";import"./FieldError-B4bZwJpA.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useTextField-BhxE74Xi.js";import"./useFormReset-Dt36AuVA.js";import"./useFormValidation-B17WGe6J.js";import"./useControlledHostValueProps-DhDFNqRj.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Nr as __namedExportsOrder,Kr as default};
