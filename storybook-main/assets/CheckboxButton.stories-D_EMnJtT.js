import{r as C,j as r}from"./iframe-BgKMnsqP.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-COmaz_iZ.js";import{B as l}from"./Button-BtfzhoC2.js";import{S as B}from"./Section-D7E7l6M3.js";import{A as b}from"./ActionGroup-Baw08tLW.js";import{s as u}from"./ActionBatch-4ndP-n8L.js";import{T as i}from"./Text-C3i_8DOD.js";import{C as m}from"./CheckboxButton-C_hdRxdR.js";import{C as p}from"./Content-CbjXc6mW.js";import{F as E}from"./FieldError-C-lZWEzn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-EDiDAp0E.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./ActionGroupView-Clwct5K6.js";import"./Heading-Dr5lCRWs.js";import"./Heading-DVJa8yG2.js";import"./RSPContexts-DOCQ2POG.js";import"./utils-DF7rIzyn.js";import"./Modal-Bb86vIfw.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./Overlay-jspJFumx.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Dialog-BWmXoaKF.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./Text-DxRa_Q_m.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./ButtonView-DXAFCp_d.js";import"./Flex-Cg9PpE8E.js";import"./useRef-B-um_LIx.js";import"./browser-CrtXW1Io.js";import"./ContextMenuSection-DBH05xVc.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Checkbox-CFgCUEu2.js";import"./useFieldComponent-BrPuybAK.js";import"./FieldError-DrPRBP1_.js";import"./Form-BeISznmy.js";import"./useFormValidation-BuWufY-j.js";import"./useToggleState-5q4xvrfU.js";import"./useFormReset-BD4Q_TlS.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
