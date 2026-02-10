import{r as C,j as r}from"./iframe-CH-PGbIe.js";import{a as p,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-DoGjjkHq.js";import{B as l}from"./Button-Dl-iCxcF.js";import{S as B}from"./Section-DpoV8RoH.js";import{A as b}from"./ActionGroup-Dg2TFsOE.js";import{s as u}from"./Action-CX67yONB.js";import{T as i}from"./Text-DUTVzyy5.js";import{C as m}from"./CheckboxButton-DaUYZVSv.js";import{C as d}from"./Content-JQRj5Ax7.js";import{F as E}from"./FieldError-9pLulNyY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYPsp9rr.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./useRef-DKmNltMK.js";import"./utils-BUbYN1U7.js";import"./ButtonView-B_eZj1aS.js";import"./browser-Bk_hun62.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CjXzQGxt.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./ContextMenuSection-NNPlO46F.js";import"./Dialog-LWxSnoH8.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./useControlledState-BQPo69mZ.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./Text-C_Kx-nbJ.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./useStatic-DyjFLUOF.js";import"./context-BsZ7lsCx.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Checkbox-CWfeYxKw.js";import"./useFieldComponent-R38s1k2Z.js";import"./FieldError-PikikH1M.js";import"./Form-BPpqOWmF.js";import"./useFormValidation-CGeoBpxY.js";import"./useToggleState-CSKOmrza.js";import"./useFormReset-DarrOQyz.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
