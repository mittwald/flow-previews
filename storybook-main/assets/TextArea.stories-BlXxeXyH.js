import{j as r,r as F}from"./iframe-CF9WEugj.js";import{b as p,u as d,F as l,t as j}from"./Form-C2xECtRP.js";import{L as o}from"./Label-ZZPbbDTF.js";import{R as h,S as x}from"./ResetButton-C4TFIVqG.js";import{B as c}from"./Button-Dt7_Feft.js";import{S as g}from"./Section-z4bbW8IF.js";import{A as b}from"./ActionGroup-C2mwfdOU.js";import{s as u}from"./Action-DBGOtx5u.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CmEvjM1s.js";import{F as S}from"./FieldError-D4UoR9vC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DQFpeFdM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./clsx-B-dksMZM.js";import"./index-DHfgQlLW.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./browser-CV2qUG2E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DWGH1ubm.js";import"./utils-B4BZttt0.js";import"./Hidden-Dk3zZO8j.js";import"./useRef-DR4WDFp0.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./ContextMenuSection-ChhzEL-I.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./useStatic-De5kLziu.js";import"./context-Dm_RzWW0.js";import"./TextFieldBase-Lt57W6wY.js";import"./FieldDescription-BgZC1fDx.js";import"./useFieldComponent-B3P2g6wY.js";import"./TextField-zFAapi7_.js";import"./FieldError-BfE9I5LY.js";import"./Form-Dv2vFItu.js";import"./Group-B_lWGLp0.js";import"./Input-BGfnvYjW.js";import"./useTextField-Cmxyrl-A.js";import"./useFormReset-w9h9-zRZ.js";import"./useFormValidation-BLUWg_De.js";import"./useControlledHostValueProps-Cois-wEY.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
