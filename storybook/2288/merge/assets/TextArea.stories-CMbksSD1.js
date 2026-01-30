import{j as r,r as F}from"./iframe-DkT4d7Ot.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DTP7uuAe.js";import{L as o}from"./Label-BjxJIvYs.js";import{B as c}from"./Button-B3KXRm13.js";import{S as g}from"./Section-DxjMaQtB.js";import{A as b}from"./ActionGroup-DuCWyd6d.js";import{s as u}from"./Action-BKfs-erd.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-D9JE_YjK.js";import{F as S}from"./FieldError-BUQThHV3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-AbOzqnd1.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./clsx-B-dksMZM.js";import"./index-CA8YyeFM.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./useRef-CEFt68nY.js";import"./utils-up3lG_mb.js";import"./ButtonView-C05B8H85.js";import"./browser-CwBpRuL-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DKCc9Jm1.js";import"./ProgressBar-B_-OWJV1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loL-ySzv.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocusable-oFwI_mrj.js";import"./ContextMenuSection-NCgBu2Na.js";import"./Dialog-DEf0gwvq.js";import"./RSPContexts-rkHdJ27o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./VisuallyHidden-BhWvypZu.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./useStatic-DmZQ70we.js";import"./context-CpYzats6.js";import"./TextFieldBase-sbSUwYZQ.js";import"./FieldDescription-BHCuHDvd.js";import"./useFieldComponent-FHnXwL7q.js";import"./TextField-DKJJTMZH.js";import"./FieldError-BIqVWLlF.js";import"./Form-CweUcSb7.js";import"./Group-BOYY_LIu.js";import"./Input--3PeXBSI.js";import"./useTextField-Zbiu6rp8.js";import"./useFormReset-DMhhuJvy.js";import"./useFormValidation-UULz_Uq_.js";import"./useControlledHostValueProps-QgeK23Kf.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
