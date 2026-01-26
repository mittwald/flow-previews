import{j as r,r as F}from"./iframe-B-_izELn.js";import{b as p,u as d,F as l,t as j}from"./Form-Dp0ieSSq.js";import{L as o}from"./Label-xN0BMhRq.js";import{R as h,S as x}from"./ResetButton-BDQEP0wp.js";import{B as c}from"./Button-rB1lHab_.js";import{S as g}from"./Section-BEewp5lM.js";import{A as b}from"./ActionGroup-Cyfs3irQ.js";import{s as u}from"./Action-CmZvSofW.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CXL4L4bI.js";import{F as S}from"./FieldError-C2OlbqQW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bdsqC1kS.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./clsx-B-dksMZM.js";import"./index-C24wTi9Q.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./browser-C9rDHpHO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DUJ6ba3Y.js";import"./utils-CTzaLK4l.js";import"./Hidden-Ud3q5koP.js";import"./useRef-Cr1C-aLL.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./ContextMenuSection-Cd3ymo9B.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./useControlledState-tdUQVzVH.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";import"./getActionGroupSlot-DlereTwl.js";import"./useStatic-k4uG0_kr.js";import"./context--GYGv0Su.js";import"./TextFieldBase-VzMWu6Xc.js";import"./FieldDescription-Bm61smCN.js";import"./useFieldComponent-Kyt2SdHG.js";import"./TextField-BAIaIFS9.js";import"./FieldError-2QNeUIGm.js";import"./Form-CwweEOY6.js";import"./Group-CL4KrlTp.js";import"./Input-Ch7XH0d5.js";import"./useTextField-BA5-wrv-.js";import"./useFormReset-BUoUtOhQ.js";import"./useFormValidation-d7hQTD7K.js";import"./useControlledHostValueProps-DNK8lF1k.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
