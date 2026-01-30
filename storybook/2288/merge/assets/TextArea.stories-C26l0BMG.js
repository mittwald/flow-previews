import{j as r,r as F}from"./iframe-DnKh_q8B.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-BYXMJKDA.js";import{L as o}from"./Label-_TjJj3W9.js";import{B as c}from"./Button-B6Zpw5yd.js";import{S as g}from"./Section-BVZq-_Eq.js";import{A as b}from"./ActionGroup-Cv1d3BuW.js";import{s as u}from"./Action-B5Uq12lQ.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-D54oiPfl.js";import{F as S}from"./FieldError-CQ45DqtA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE_n_a5m.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./useRef-TNLbSJcR.js";import"./utils-BZc8lNcd.js";import"./ButtonView-DGagadkt.js";import"./browser-BUa4T4SN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CFc3C1mq.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./ContextMenuSection-CPEZCChP.js";import"./Dialog-CHY6jywx.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./useStatic-DlxvzgyM.js";import"./context-CSnl0IXM.js";import"./TextFieldBase-DFTgtij1.js";import"./FieldDescription-73O0rUMk.js";import"./useFieldComponent-ClvUady3.js";import"./TextField-BOX8oND8.js";import"./FieldError-ChpD0sIl.js";import"./Form-BQHEa3Zl.js";import"./Group-BODZXCjp.js";import"./Input-mgtZ57Ff.js";import"./useTextField-TkD79Fcw.js";import"./useFormReset-BbinXmMH.js";import"./useFormValidation-C9ppbdC-.js";import"./useControlledHostValueProps-Cbx4Pluy.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
