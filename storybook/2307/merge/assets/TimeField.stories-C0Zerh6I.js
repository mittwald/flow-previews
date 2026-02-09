import{j as r,r as x}from"./iframe-XxUhdOIM.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-DUwQ9l1M.js";import{L as t}from"./Label-C4UQ1ENb.js";import{B as l}from"./Button-CGELadBW.js";import{S as b}from"./Section-BcKQCQPR.js";import{A as E}from"./ActionGroup-CpnIRFBl.js";import{s as c}from"./Action-uIBgr6h7.js";import{L as S}from"./DateInput-CzcQikRh.js";import{T as o}from"./TimeField-CCGXBfXs.js";import{F as T}from"./FieldError-DsyIPYpb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DlcFrL20.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./clsx-B-dksMZM.js";import"./index-BSqFjc_t.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./useRef-DGklHaj5.js";import"./utils-BCq0Cvc3.js";import"./ButtonView-BOkSZ7Ty.js";import"./browser-DmOXQPuo.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./IconWarning-HmbpUhBv.js";import"./remote-6r6BNiZ9.js";import"./Text-Cnwgd4MT.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./LoadingSpinner-eRWTE9TH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BmkrUKzN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C6bNQEHg.js";import"./useFocus-EZLK-muK.js";import"./useFocusRing-B4cqEnOC.js";import"./useFocusable-BMaOCfpv.js";import"./ContextMenuSection-CrLbr6yo.js";import"./Dialog-Cu17hg-L.js";import"./RSPContexts-CtuUzpub.js";import"./OverlayArrow-4i6vqPwo.js";import"./useControlledState-BjbUFAiJ.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./useCollator-C4FEsSYx.js";import"./FocusScope-Bd3CxSOo.js";import"./VisuallyHidden-BH7c3L8h.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./useStatic-BtKbO9c7.js";import"./context-DxgidNIJ.js";import"./FieldError-D3qoIyxA.js";import"./Form-COPMshHH.js";import"./Group-Dd2BG_us.js";import"./Input-dBdn1-_7.js";import"./useFormValidation-nWIFBTgB.js";import"./useFormReset-CjY5_fDt.js";import"./useSpinButton-D9ha1UUo.js";import"./useFilter-D0OcD8ZS.js";import"./useFieldComponent-DmQ0NGCO.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
