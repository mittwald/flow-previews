import{r as F,j as r}from"./iframe-lFICOVMG.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-DK_60aBr.js";import{L as o}from"./Label-WsCexfXL.js";import{B as c}from"./Button-Cf-KBW4_.js";import{S as g}from"./Section-Co3yAI3_.js";import{A as b}from"./ActionGroup-DwzvTFqg.js";import{s as u}from"./Action-Dv_Htl--.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DfB29ivU.js";import{F as S}from"./FieldError-Ba2n5nZe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0KpQiqy3.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./useRef-E2-1OeOR.js";import"./utils-DhhSlmx9.js";import"./ButtonView-CpDocYTn.js";import"./browser-CN95VINd.js";import"./Label.module-CUYTf9Jc.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BW_bFHXv.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./ContextMenuSection-CljVwRlE.js";import"./Dialog-XpC0gjG5.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./useStatic-DBynbgAg.js";import"./context-ClWR88NP.js";import"./useFieldComponent-70N6l4jn.js";import"./useControlledHostValueProps-CKOcyAM8.js";import"./FieldDescription-B-4XBa_Q.js";import"./TextField-Bhd7qDTe.js";import"./FieldError-DXs5idvC.js";import"./Form-DIwrOEgx.js";import"./Group-0ck5nD0j.js";import"./Input-Cm6GPhlW.js";import"./useTextField-DsAYcK4F.js";import"./useFormReset-CPUmIViP.js";import"./useFormValidation-BdcfYetn.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
