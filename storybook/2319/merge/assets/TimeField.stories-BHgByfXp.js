import{r as x,j as r}from"./iframe-lFICOVMG.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-DK_60aBr.js";import{L as t}from"./Label-WsCexfXL.js";import{B as l}from"./Button-Cf-KBW4_.js";import{S as b}from"./Section-Co3yAI3_.js";import{A as E}from"./ActionGroup-DwzvTFqg.js";import{s as c}from"./Action-Dv_Htl--.js";import{L as S}from"./DateInput-BJeUvlZB.js";import{T as o}from"./TimeField-CFZB2kQr.js";import{F as T}from"./FieldError-Ba2n5nZe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0KpQiqy3.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./useRef-E2-1OeOR.js";import"./utils-DhhSlmx9.js";import"./ButtonView-CpDocYTn.js";import"./browser-CN95VINd.js";import"./Label.module-CUYTf9Jc.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BW_bFHXv.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./ContextMenuSection-CljVwRlE.js";import"./Dialog-XpC0gjG5.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./useStatic-DBynbgAg.js";import"./context-ClWR88NP.js";import"./FieldError-DXs5idvC.js";import"./Form-DIwrOEgx.js";import"./Group-0ck5nD0j.js";import"./Input-Cm6GPhlW.js";import"./useFormReset-CPUmIViP.js";import"./useFormValidation-BdcfYetn.js";import"./useSpinButton-CvPOPKJY.js";import"./useFilter-ClcjMtlC.js";import"./useFieldComponent-70N6l4jn.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
