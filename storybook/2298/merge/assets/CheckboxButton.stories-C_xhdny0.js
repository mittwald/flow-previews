import{j as r,r as C}from"./iframe-DITN2CQJ.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-DxGsaWiK.js";import{B as l}from"./Button-CLzuKoaU.js";import{S as B}from"./Section-cnEthzmo.js";import{A as b}from"./ActionGroup-eIIxfA96.js";import{s as u}from"./Action-2qaAsuOc.js";import{T as i}from"./Text-CADg3_Hr.js";import{C as m}from"./CheckboxButton-C3-SbwFx.js";import{C as d}from"./Content-DDYIq-3j.js";import{F as E}from"./FieldError-B_BzuzIl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTg8la0V.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./useRef-DMCflsxx.js";import"./utils-BKdkt1x6.js";import"./ButtonView-Cvj-tSsY.js";import"./browser-BAwbicjx.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo3aLfgI.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./ContextMenuSection-CqDMtRiW.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./Text-C3mpKQD6.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./useStatic-CpFYvUzY.js";import"./context-DvDSM24h.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Checkbox-CXZ0LrBl.js";import"./useFieldComponent-CFjzq3ou.js";import"./FieldError-DyUcL9VR.js";import"./Form-CKWsALrB.js";import"./useFormValidation-PWdhcFqO.js";import"./useToggleState-Ivt3qRQx.js";import"./useFormReset-DRsSvhwB.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
