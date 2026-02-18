import{r as C,j as r}from"./iframe-Bz3NPU1o.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-C6u6UNu5.js";import{B as l}from"./Button-DmREI3b0.js";import{S as B}from"./Section-BwE4QROn.js";import{A as b}from"./ActionGroup-rIPGzSy7.js";import{s as u}from"./ActionBatch-DB6HM48H.js";import{T as i}from"./Text-ByJancxD.js";import{C as m}from"./CheckboxButton-DCGxPNPt.js";import{C as p}from"./Content-CjcJxOBw.js";import{F as E}from"./FieldError-fbbECv40.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvekFh9y.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./clsx-B-dksMZM.js";import"./index-FgoIhbmz.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./context-pgk2HPHJ.js";import"./ActionGroupView-CscudnEo.js";import"./Heading-0jGXR_g9.js";import"./Heading-BkR9lkEu.js";import"./RSPContexts-BgkP6bIF.js";import"./utils-DuUJF5nC.js";import"./Modal-BVW6OhrB.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./Overlay-oLKw2upU.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./LoadingSpinner-C6XGp2xl.js";import"./IconWarning-Cqqx4tMU.js";import"./remote-D_M7roLC.js";import"./Dialog-DrbZDX-D.js";import"./Button-BMxU8wWi.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BmxXpscc.js";import"./useFocus-DMRfkGw8.js";import"./useFocusRing-BLuP37PT.js";import"./useFocusable-DZRtaeEQ.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useControlledState-e4YYsLZE.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./Text-ClD1r8b1.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./ButtonView-B1T1gpd9.js";import"./Flex-BZRK7zof.js";import"./useRef-DVap1TEX.js";import"./browser-BaNqvzaa.js";import"./ContextMenuSection-Dt7nyU_Z.js";import"./getActionGroupSlot--8oaPbEm.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Checkbox-iif0_CIN.js";import"./useFieldComponent-kW7iCi5m.js";import"./FieldError-BDAUq_c5.js";import"./Form-DrqAye7f.js";import"./useFormValidation-itgD5oYf.js";import"./useToggleState-B4GZ2XOO.js";import"./useFormReset-D4UcXUYp.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
