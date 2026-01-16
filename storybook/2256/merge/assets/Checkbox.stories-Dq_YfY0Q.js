import{j as r,r as x}from"./iframe-D2BYf5-g.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-DPWsTLOz.js";import{B as d}from"./Button-CDOjETwV.js";import{S as j}from"./Section-CgYlTnFa.js";import{A as b}from"./ActionGroup-yMuyuUpS.js";import{s as u}from"./Action-DS_mMLiR.js";import{C as t}from"./Checkbox-CHR6jDHE.js";import{F as E}from"./FieldError-DX5_shM3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DsmNOmMb.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./clsx-B-dksMZM.js";import"./index-Bu8wVR5j.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./context-DWMR9XE1.js";import"./useRef-Ce_-lwau.js";import"./utils-DHZ51AFQ.js";import"./ButtonView-DYIjeFD7.js";import"./browser-CRHYBb-w.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./Text-D6N8Heh9.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuBdlowL.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wVuL2i-g.js";import"./useFocus-ORvRv07U.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocusable-BL0hS6to.js";import"./ContextMenuSection-CMECFzdV.js";import"./Dialog-DmGaLGl4.js";import"./RSPContexts-Jo-zwAyH.js";import"./OverlayArrow-BMVG_KsN.js";import"./useControlledState-fyUF26L0.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./VisuallyHidden-DcwEctQc.js";import"./getActionGroupSlot-DYtozdko.js";import"./useStatic-DA3fGq-b.js";import"./context-DatNKEIi.js";import"./useFieldComponent-BFOdLrJ8.js";import"./FieldError-RWcRHk2C.js";import"./Form-DfX8wS-B.js";import"./useFormValidation-BTfq9KBg.js";import"./useToggleState-B2YKD4zK.js";import"./useFormReset-Dqz1EECq.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
