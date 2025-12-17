import{j as r,r as C}from"./iframe-BrERPjH0.js";import{u as d,F as a}from"./Form-Ac1Oeg88.js";import{F as c,t as j}from"./Field-BqYTgjZG.js";import{B as l}from"./Button-BwrtrMsn.js";import{S as B}from"./Section-B3CMEqO8.js";import{A as b}from"./ActionGroup-1iai0086.js";import{s as u}from"./Action-ChQTmQoz.js";import{T as i}from"./Text-Bge3UWaD.js";import{C as m}from"./CheckboxButton-Cd4wx0k8.js";import{C as p}from"./Content-CLxF-PAZ.js";import{F as E}from"./FieldError-H2u6oDij.js";import{R as h}from"./ResetButton-A6e9JqB9.js";import{S as f}from"./SubmitButton-CrVj9caF.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-YFSmfPOL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-D7aVmIf6.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./clsx-B-dksMZM.js";import"./index-DzMVKTvo.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DaDxLfby.js";import"./utils-DSRl4UW4.js";import"./ProgressBar-DcK7zEgl.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./ContextMenuSection-J2h9Z88g.js";import"./lib-90ocxLs-.js";import"./Dialog-ByWgeyFx.js";import"./RSPContexts-BfqcGdFg.js";import"./OverlayArrow-gzfZyYcK.js";import"./useControlledState-C9HQthZh.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./Text-CFQd4N__.js";import"./SelectionManager-BZAXigYb.js";import"./useEvent-CWpAuNO7.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./getActionGroupSlot-BcecKfQ6.js";import"./useStatic-DyRcj1Uc.js";import"./context-kHaIXrog.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Checkbox-BQ_rABJB.js";import"./IconCheckboxEmpty-cVtIO4HE.js";import"./useFieldComponent-WOZCxk1N.js";import"./FieldError-DI8l-yzx.js";import"./Form-CRLN4oBl.js";import"./useFormValidation-sc5NnAzh.js";import"./useToggleState-BeXVZ87z.js";import"./useFormReset-Bw5L0YJo.js";import"./IconDanger-CeY6S6MU.js";import"./useRef-ohG7iErY.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
