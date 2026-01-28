import{j as r,r as F}from"./iframe-BbsOAs33.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DaMzmg4c.js";import{L as o}from"./Label-DjvR0JzL.js";import{B as c}from"./Button-CAGXh9YY.js";import{S as g}from"./Section-Cne65CO2.js";import{A as b}from"./ActionGroup-VbmjmzLd.js";import{s as u}from"./Action-BXhMVvh_.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BitBxcUi.js";import{F as S}from"./FieldError-DSzt6ekN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoVYgUcD.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./clsx-B-dksMZM.js";import"./index-32jMpZgo.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./useRef-D3zVPm3c.js";import"./utils-d4vW56Wr.js";import"./ButtonView-BQhPvsO2.js";import"./browser-6_CJeJSO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuEkD-Mt.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./ContextMenuSection-Dt_P0EQ4.js";import"./Dialog-Ch_CeJ5E.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./useControlledState-QxMMjnNS.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./VisuallyHidden-D-GMXsu-.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./useStatic-PZIJlmDl.js";import"./context-_vxrJXzy.js";import"./TextFieldBase-DtQicp1m.js";import"./FieldDescription-CI9EcbbK.js";import"./useFieldComponent-c0I5eEtM.js";import"./TextField-DS2qFl1_.js";import"./FieldError-3tWBh0vH.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useTextField-DCPrMHRH.js";import"./useFormReset-eAh5gylf.js";import"./useFormValidation-DyJaMlWv.js";import"./useControlledHostValueProps-DsfhA03o.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
