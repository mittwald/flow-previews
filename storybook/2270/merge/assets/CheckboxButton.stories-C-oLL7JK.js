import{j as r,r as C}from"./iframe-DcHapM8k.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-CulSlpBz.js";import{B as l}from"./Button-C1DQEdG6.js";import{S as B}from"./Section-BLxdCMFP.js";import{A as b}from"./ActionGroup-Bnr4k_2X.js";import{s as u}from"./Action-CLgptl7p.js";import{T as i}from"./Text-BqUUaAMX.js";import{C as m}from"./CheckboxButton-CITjBoC5.js";import{C as d}from"./Content-BnZYVgku.js";import{F as E}from"./FieldError-BzyrakFb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-FNOw2F.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./clsx-B-dksMZM.js";import"./index-Ba4Wgmch.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./useRef-JV7f1HAx.js";import"./utils-BN-Wf9GB.js";import"./ButtonView-Bx--fAkF.js";import"./browser-BhJkGPhR.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./ContextMenuSection-Bxsn88Zf.js";import"./Dialog-gML-GktL.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./useControlledState-CD18I4-6.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./Text-KTnK0cez.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./useStatic-lCMR7rr_.js";import"./context-C5BkLhj5.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Checkbox-BJYmvj8b.js";import"./useFieldComponent-DLXIz4kk.js";import"./FieldError-DeohvbOn.js";import"./Form-N_ssJC2Q.js";import"./useFormValidation-C5Tej2mU.js";import"./useToggleState-ChVg7G-C.js";import"./useFormReset-DByFRxt8.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
