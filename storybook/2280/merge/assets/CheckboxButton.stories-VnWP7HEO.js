import{j as r,r as C}from"./iframe-Cx5kJuuA.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-CwpPjJvG.js";import{B as l}from"./Button-OP9_q8AM.js";import{S as B}from"./Section-C2A-3Iy5.js";import{A as b}from"./ActionGroup-SYctAZp6.js";import{s as u}from"./Action-CnBQ_Jk4.js";import{T as i}from"./Text-C98Jvmov.js";import{C as m}from"./CheckboxButton-C1WwQj9B.js";import{C as d}from"./Content-CuMgqWLX.js";import{F as E}from"./FieldError-BCxxTn6h.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-RASAkScQ.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./clsx-B-dksMZM.js";import"./index-BqoyVlZ7.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./useRef-BzM_ReLH.js";import"./utils-Nk4paMN-.js";import"./ButtonView-CiX34n3K.js";import"./browser-D-pbaBij.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./LoadingSpinner-BWQXNo8s.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B4Wunpgz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LbgF0OFY.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useFocusable-BtlUXhgP.js";import"./ContextMenuSection-DO6s1iXZ.js";import"./Dialog-CDKKMn1j.js";import"./RSPContexts-CFLmy0zp.js";import"./OverlayArrow-BNHP_74G.js";import"./useControlledState-D1xezhK5.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./Text-CA_aswYo.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./useCollator-BUzaHxjg.js";import"./FocusScope-wgzi2f-G.js";import"./VisuallyHidden-i8gu61hs.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./useStatic-C9KIiqww.js";import"./context-BmiLu6TN.js";import"./EmulatedBoldText--C3vSC84.js";import"./Checkbox-1jdaJREY.js";import"./useFieldComponent-DpBpP7du.js";import"./FieldError-UHRLTLut.js";import"./Form-BHxxWVUu.js";import"./useFormValidation-CmFpdOnE.js";import"./useToggleState-Cl2cpZed.js";import"./useFormReset-roVUmu5c.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
