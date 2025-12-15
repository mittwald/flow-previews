import{j as r,r as C}from"./iframe-CH_aTfEL.js";import{u as a,F as p}from"./Form-Dq17XsDi.js";import{F as c,t as j}from"./Field-DweWJcaC.js";import{B as l}from"./Button-D53gB1eO.js";import{S as B}from"./Section-B-U_9AN9.js";import{A as b}from"./ActionGroup-DOhwLXSI.js";import{s as u}from"./Action-WNrTLAcY.js";import{T as i}from"./Text-BRh_x9bF.js";import{C as m}from"./Content-BuDnVATG.js";import{F as E}from"./FieldError-DGABQFH-.js";import{C as d}from"./CheckboxButton-EuiE5JnZ.js";import{R as h}from"./ResetButton-CD3Uv-F4.js";import{S as f}from"./SubmitButton-DZnPOQnn.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-vwb-6_Ta.js";import"./PropsContextProvider-DjBCrPYH.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./FieldError-CHaTpVnh.js";import"./IconDanger-DRvJdcN_.js";import"./useFieldComponent-JY3HqOd-.js";import"./Activity-DkWdwXP6.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Checkbox-D01ivVqv.js";import"./IconCheckboxEmpty-CDE99RuO.js";import"./Form-BfyCREyn.js";import"./useFormValidation-qjJTrH9J.js";import"./useToggleState-iGMNiJvQ.js";import"./useFormReset-P8yugG2W.js";import"./useRef-CkIgL8Qx.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ar={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(p,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Ir as __namedExportsOrder,Ar as default};
