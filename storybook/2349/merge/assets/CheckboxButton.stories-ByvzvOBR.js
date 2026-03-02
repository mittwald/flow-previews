import{r as C,j as r}from"./iframe-gtGtPSGX.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-B2s8Dmn4.js";import{B as l}from"./Button-CvhKZeTQ.js";import{S as B}from"./Section-BQknUcw4.js";import{A as b}from"./ActionGroup-CLeHwFAs.js";import{s as u}from"./ActionBatch-C6WY1Daf.js";import{T as i}from"./Text-QzTdDFQg.js";import{C as m}from"./CheckboxButton-BUwFTU-e.js";import{C as p}from"./Content-BghcAC3J.js";import{F as E}from"./FieldError-co03Ctd_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLlIyxqz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./ActionGroupView-D0kXKbJs.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./RSPContexts-L8MWaJ6n.js";import"./utils-1b_KoCGs.js";import"./Modal-d042eYeA.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./Overlay-CLrFplCq.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./LoadingSpinner-DnqSg6_k.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./Text-B8kBB-Il.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";import"./browser-BLXRbgM1.js";import"./ContextMenuSection-CDCzjc8m.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Checkbox-DZXy_VSt.js";import"./useFieldComponent-BaX-M8wV.js";import"./FieldError-DenhE7nb.js";import"./Form-BRxvySUZ.js";import"./useFormValidation-BQy4AKy0.js";import"./useToggleState-CNroCGEj.js";import"./useFormReset-TvJ_gIa-.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
