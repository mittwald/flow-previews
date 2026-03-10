import{r as C,j as r}from"./iframe-BJFPIndf.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./FormRootError-Dqv401TK.js";import{B as l}from"./Button-CMLIz8EV.js";import{S as B}from"./Section-C6f0l2Xs.js";import{A as b}from"./ActionGroup-DdfrGWlw.js";import{s as u}from"./ActionBatch-91iU7Ul_.js";import{T as i}from"./Text-CGF68X8s.js";import{C as m}from"./CheckboxButton-eIPgQpy3.js";import{C as p}from"./Content-Dz9K6tbl.js";import{F as E}from"./FieldError-CerVitTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ds5yn-UC.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./ActionGroupView-Dw8RZYa_.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./RSPContexts-BXfCPyGV.js";import"./utils-WT8FFEB4.js";import"./Modal-BGgt1ria.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./Overlay-BWkVMZMt.js";import"./OverlayContextProvider-BuTLd76h.js";import"./LoadingSpinner-mc2sXUEG.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./Text-D3Y_kc1g.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./ButtonView-BZflCgnt.js";import"./Flex-7kPLhUeS.js";import"./useRef-BdfxdyUk.js";import"./browser-DqcTc9Nr.js";import"./ContextMenuSection-BXIYeg2w.js";import"./getActionGroupSlot-ggari8la.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Checkbox-DCdMbDKd.js";import"./useFieldComponent-gU-XMME4.js";import"./FieldError-Coj9-PqS.js";import"./Form-x5xxOUHd.js";import"./useFormValidation-BhmC515N.js";import"./useToggleState-CAGLbUXI.js";import"./useFormReset-CwfjSagb.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
