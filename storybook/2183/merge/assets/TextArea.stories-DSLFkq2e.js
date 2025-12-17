import{j as r,r as F}from"./iframe-DnYi-t8H.js";import{u as p,F as d}from"./Form-DRMZk2Gh.js";import{L as o}from"./Label-DliS2X1j.js";import{F as l,t as j}from"./Field-BjRzpRw4.js";import{B as c}from"./Button-CGm1W1qT.js";import{S as g}from"./Section-BocAxRga.js";import{A as b}from"./ActionGroup-Cx49wkZ2.js";import{s as u}from"./Action-BbwnmsIN.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BWxyT2RJ.js";import{F as S}from"./FieldError-9-oFldGv.js";import{R as h}from"./ResetButton-B6Cz-gaL.js";import{S as x}from"./SubmitButton-CbYD0M1w.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-Cx51Q07l.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Label-DpP4Z3U4.js";import"./utils-DErHybyt.js";import"./Hidden-D2dwjMI8.js";import"./dynamic-Bt-cD_bv.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./Text-Bl1v2nei.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./Text-CnHQzzWa.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvsL5VIA.js";import"./ProgressBar-C0arnLiQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CvNtERHu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSFKAxA8.js";import"./useFocus-Cp5_bDzt.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocusable-CJcfCTZ3.js";import"./ContextMenuSection-BLRCeISj.js";import"./lib-90ocxLs-.js";import"./Dialog-_g0NQG0c.js";import"./RSPContexts-fnRhq3x5.js";import"./OverlayArrow-Cdm9aZ0d.js";import"./useControlledState-CUB7XdW4.js";import"./Collection-Dl9RCK9z.js";import"./CollectionBuilder-Dz2l6Qz0.js";import"./SelectionIndicator-B3bHR6It.js";import"./Separator-DF_Ka3NA.js";import"./SelectionManager-D2Yq1xXP.js";import"./useEvent-BzaRCHg1.js";import"./useCollator-b7BSiHgL.js";import"./FocusScope-CymXO5HE.js";import"./VisuallyHidden-BnpIJKhq.js";import"./getActionGroupSlot-D0nHzOJX.js";import"./useStatic-nPTr3XXM.js";import"./context-EfU6UTnF.js";import"./TextFieldBase-D6mHR8w3.js";import"./FieldDescription-Dv0mKlK_.js";import"./useFieldComponent-BC1W_qCr.js";import"./TextField-DjS4j9il.js";import"./FieldError-DFN_xfpl.js";import"./Form-BNVSNvMr.js";import"./Group-trRaFn9q.js";import"./Input-Ci5DOXXh.js";import"./useTextField-DyhgGonc.js";import"./useFormReset-CY2BFsrw.js";import"./useFormValidation-D4Tsj5aM.js";import"./useControlledHostValueProps-CY46Idh6.js";import"./IconDanger-CDad_7H2.js";import"./useRef-C3gFaWux.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Qr as __namedExportsOrder,Jr as default};
