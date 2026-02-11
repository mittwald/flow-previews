import{r as x,j as r}from"./iframe-lFICOVMG.js";import{a as c,u as p,F as a,R as l,S as f,t as F}from"./ResetButton-DK_60aBr.js";import{B as d}from"./Button-Cf-KBW4_.js";import{S as j}from"./Section-Co3yAI3_.js";import{A as b}from"./ActionGroup-DwzvTFqg.js";import{s as u}from"./Action-Dv_Htl--.js";import{C as t}from"./Checkbox-trgLd0k1.js";import{F as E}from"./FieldError-Ba2n5nZe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0KpQiqy3.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./useRef-E2-1OeOR.js";import"./utils-DhhSlmx9.js";import"./ButtonView-CpDocYTn.js";import"./browser-CN95VINd.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BW_bFHXv.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./ContextMenuSection-CljVwRlE.js";import"./Dialog-XpC0gjG5.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./useStatic-DBynbgAg.js";import"./context-ClWR88NP.js";import"./useFieldComponent-70N6l4jn.js";import"./FieldError-DXs5idvC.js";import"./Form-DIwrOEgx.js";import"./useFormValidation-BdcfYetn.js";import"./useToggleState-YhfkRB4R.js";import"./useFormReset-CPUmIViP.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
