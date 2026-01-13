import{j as r,r as F}from"./iframe-Cwcli8hM.js";import{b as p,u as d,F as l,t as j}from"./Form-BjeSNwhI.js";import{L as o}from"./Label-CdIP0Akw.js";import{R as h,S as x}from"./ResetButton-ByzjRyrZ.js";import{B as c}from"./Button-I78ZffkB.js";import{S as g}from"./Section-DEX4-fyD.js";import{A as b}from"./ActionGroup-CmTRqzAJ.js";import{s as u}from"./Action-BmzkYOqA.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-D18Db5fN.js";import{F as S}from"./FieldError-C_uRtYKD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-kiJ_5GPX.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./browser-Dim89v3O.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BInCCjcu.js";import"./utils-C3qjWKVL.js";import"./Hidden-D2HOHB0p.js";import"./useRef-DCEFieT1.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./LoadingSpinner-KOoU2K2x.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./ContextMenuSection-BAImieHE.js";import"./Dialog-q_50MZOU.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./VisuallyHidden-BpjAuZe7.js";import"./getActionGroupSlot-DirYDTjy.js";import"./useStatic-DFI4OZ-s.js";import"./context-Cu13uzRC.js";import"./TextFieldBase-B5TrCQHW.js";import"./FieldDescription-Cjbk4mgT.js";import"./useFieldComponent-DIqLhVln.js";import"./TextField-CSzsaios.js";import"./FieldError-CJJNrBrn.js";import"./Form-BXllkstm.js";import"./Group-B4sml9Xm.js";import"./Input-BrN80aSI.js";import"./useTextField-By7tfDpK.js";import"./useFormReset-BDGa5C7A.js";import"./useFormValidation-BcDhKfF3.js";import"./useControlledHostValueProps-dmC9QLbU.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
