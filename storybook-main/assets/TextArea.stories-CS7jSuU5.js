import{j as r,r as F}from"./iframe-pcvtdEGM.js";import{b as p,u as d,F as l,t as j}from"./Form-CK6uNh05.js";import{L as o}from"./Label-CRIab_7x.js";import{R as h,S as x}from"./ResetButton-BEZHYZMK.js";import{B as c}from"./Button-uyxj5lKX.js";import{S as g}from"./Section-D2AtZg_F.js";import{A as b}from"./ActionGroup-Cnw6IB4G.js";import{s as u}from"./Action-DJjvSFsd.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CxGN-m3t.js";import{F as S}from"./FieldError-Brj1PtAW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CjFFErYF.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./context-We2COa_S.js";import"./browser-DdUrC3oM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BTMeT-8z.js";import"./utils-fsWZtkeO.js";import"./Hidden-DReGI82W.js";import"./useRef-D_yDHzwE.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7g9LfsB.js";import"./ProgressBar-BJtj52rd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./ContextMenuSection-CnsRFJEn.js";import"./Dialog-DwYtEz4y.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./useControlledState-CJg030Qn.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./useStatic-BCDrLUdV.js";import"./context-rIsit77n.js";import"./TextFieldBase-DyEmPogL.js";import"./FieldDescription-Q7UMdTIm.js";import"./useFieldComponent-DX_YsVYS.js";import"./TextField-DqPYw359.js";import"./FieldError-DSNAXrm1.js";import"./Form-e5z3-mU_.js";import"./Group-DcVE6dEM.js";import"./Input-OfkHEYOp.js";import"./useTextField-Cc5HjTsD.js";import"./useFormReset-D7xZNI6Q.js";import"./useFormValidation-6fXj-s64.js";import"./useControlledHostValueProps-DDcvOf9E.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
