import{j as r,r as F}from"./iframe-Cs0JkT9Q.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DV0e7N6e.js";import{L as o}from"./Label-CHxievOH.js";import{B as c}from"./Button-BS2N-oft.js";import{S as g}from"./Section-DNo4C-Bh.js";import{A as b}from"./ActionGroup-BRxaHfr4.js";import{s as u}from"./Action-8KnSiAHu.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Ck1-2F4D.js";import{F as S}from"./FieldError-BZN8rJUk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DZ8udFFw.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./clsx-B-dksMZM.js";import"./index-BDmaB34G.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./useRef-CLYklu2m.js";import"./utils-BvIIGzqK.js";import"./ButtonView-DtNenCUs.js";import"./browser-Cphwy2_f.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Text-l9LtklMs.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-y02TS-RC.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./ContextMenuSection-RP0htgKT.js";import"./Dialog-n12IRs92.js";import"./RSPContexts-BDhxiX2p.js";import"./OverlayArrow-B2W5aB6f.js";import"./useControlledState-DrKGwN1m.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./VisuallyHidden-BGmnCuXu.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./useStatic-BOH6EX5_.js";import"./context-DmALYfE_.js";import"./useFieldComponent-BGOnrhQA.js";import"./useControlledHostValueProps-3OTJgyz7.js";import"./FieldDescription-DnGZgPAY.js";import"./TextField-hrf8U4uc.js";import"./FieldError-zGZXG0KM.js";import"./Form-D-8VlTBZ.js";import"./Group-BV5xd3-K.js";import"./Input-B1hEkaq5.js";import"./useTextField-BQp_mORd.js";import"./useFormReset-5IC1Q0ld.js";import"./useFormValidation-CaaIEsuY.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
