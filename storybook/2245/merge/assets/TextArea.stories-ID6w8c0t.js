import{j as r,r as F}from"./iframe-DoM-BIwg.js";import{b as p,u as d,F as l,t as j}from"./Form-B5Pnwm63.js";import{L as o}from"./Label-BFVzgZLR.js";import{R as h,S as x}from"./ResetButton-albeSaC2.js";import{B as c}from"./Button-CT5Y8uWS.js";import{S as g}from"./Section-CRx22udC.js";import{A as b}from"./ActionGroup-Bn43YAdA.js";import{s as u}from"./Action-KkrISRwO.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DDMG2mpB.js";import{F as S}from"./FieldError-D1hjQVoV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CkeXur7S.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./clsx-B-dksMZM.js";import"./index-BXuzzWnK.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./browser-COZAGKbB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DE9HqL8_.js";import"./utils-D5il_mPj.js";import"./Hidden-DgtxAirB.js";import"./useRef-zKWnsD4B.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./Text-lsEUOuuk.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./LoadingSpinner-CPr3D27j.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./ContextMenuSection-fUiEQtti.js";import"./Dialog-BESdyj17.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./useControlledState--GEywRyg.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./VisuallyHidden-GPtOnQVg.js";import"./getActionGroupSlot-CjJPVShT.js";import"./useStatic-BCI8JZji.js";import"./context-DP2lyaT2.js";import"./TextFieldBase-C0uf3Bse.js";import"./FieldDescription-D7t9gDEh.js";import"./useFieldComponent-CZ4YFclL.js";import"./TextField-CF9DJvmP.js";import"./FieldError-CHU7gQK7.js";import"./Form-BRbECj4N.js";import"./Group-B6Ij3cqY.js";import"./Input-V-OR_KLg.js";import"./useTextField-BHoBVWF_.js";import"./useFormReset-DsbUUfuN.js";import"./useFormValidation-lvugQbRf.js";import"./useControlledHostValueProps-DSNqmJy9.js";import"./AlertText-DEPqS5ry.js";import"./AlertIcon-Mg7Q3zgv.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
