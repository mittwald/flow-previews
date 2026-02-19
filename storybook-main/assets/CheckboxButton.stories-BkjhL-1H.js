import{r as C,j as r}from"./iframe-C9fwoqx7.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-5VnYk-XP.js";import{B as l}from"./Button-C7pOzOnK.js";import{S as B}from"./Section-kgMMKJSe.js";import{A as b}from"./ActionGroup-JVxcUGRV.js";import{s as u}from"./ActionBatch-CR9CogXJ.js";import{T as i}from"./Text-D7jvp7G5.js";import{C as m}from"./CheckboxButton-Bvwx8Lx8.js";import{C as p}from"./Content-CnNXJUgm.js";import{F as E}from"./FieldError-v5ZAFD64.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY0EsCod.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./clsx-B-dksMZM.js";import"./index-CbFgIt9G.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./context-C2ecxi5G.js";import"./ActionGroupView-VlMeYrd_.js";import"./Heading-XseMYyRS.js";import"./Heading-eUAAoI_I.js";import"./RSPContexts-mF4XBTs4.js";import"./utils-Cx2L-iDs.js";import"./Modal-C8ANx43-.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./Overlay-30FGwbPI.js";import"./OverlayContextProvider-DAx33Jid.js";import"./LoadingSpinner-BWPVzhoG.js";import"./IconWarning-slnz76yl.js";import"./remote-B-ZPT6P_.js";import"./Dialog-yhzZwH_k.js";import"./Button-DDn45mdd.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-tgKXO9PL.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocusable-CQiYog1P.js";import"./OverlayArrow-DDmkn5_8.js";import"./useControlledState-BJuMvqvK.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./Text-xqSfQxLT.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./VisuallyHidden-1IKUNS-e.js";import"./ButtonView-D2KaEV6n.js";import"./Flex-kDlMb8kM.js";import"./useRef-DDCCbzfz.js";import"./browser-B4JTTu9h.js";import"./ContextMenuSection-7efUiUyi.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Checkbox-DrAbtyFq.js";import"./useFieldComponent-HwWxBPXP.js";import"./FieldError-CEVb6xPQ.js";import"./Form-Dcg-_ctE.js";import"./useFormValidation-B19EocOE.js";import"./useToggleState-Dn3Lmpqk.js";import"./useFormReset-Bm_Lqolg.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
