import{j as r,r as F}from"./iframe-ByQojKkA.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-Cu7HTX9i.js";import{L as o}from"./Label-zx0kmle1.js";import{B as c}from"./Button-DG0b__xZ.js";import{S as g}from"./Section-C0tACEzy.js";import{A as b}from"./ActionGroup-CnN8LnNO.js";import{s as u}from"./Action-D7dGsrUH.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CdH4iHRZ.js";import{F as S}from"./FieldError-Dl1gROKX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-G0P_JzfN.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./clsx-B-dksMZM.js";import"./index-DifIgMrD.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./useRef-hk2_5oTi.js";import"./utils-D3Fm7Ut8.js";import"./ButtonView-B55WSwFj.js";import"./browser-BgQK0KeO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwnADfjY.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocusable-BRqzZMJF.js";import"./ContextMenuSection-6SzjTnwS.js";import"./Dialog-B4qMOx1Z.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";import"./getActionGroupSlot-D7PQruO1.js";import"./useStatic-ClNGpIKI.js";import"./context-Buk6ndZl.js";import"./TextFieldBase-xcr1bPfN.js";import"./FieldDescription-BpqjIUfK.js";import"./useFieldComponent-Blt-XhY9.js";import"./TextField-CcXXYOcL.js";import"./FieldError-DskIGmIg.js";import"./Form-Cffumk9C.js";import"./Group-CNDS5EKI.js";import"./Input-qfXo-HDb.js";import"./useTextField-C_dLnkiz.js";import"./useFormReset-CjuTJ3ym.js";import"./useFormValidation-DiyC9X3o.js";import"./useControlledHostValueProps-lUs8Ao02.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
