import{j as r,r as x}from"./iframe-CF9WEugj.js";import{b as c,u as p,F as a,t as F}from"./Form-C2xECtRP.js";import{R as l,S as f}from"./ResetButton-C4TFIVqG.js";import{B as d}from"./Button-Dt7_Feft.js";import{S as j}from"./Section-z4bbW8IF.js";import{A as b}from"./ActionGroup-C2mwfdOU.js";import{s as u}from"./Action-DBGOtx5u.js";import{C as t}from"./Checkbox-ByF8GGLy.js";import{F as E}from"./FieldError-D4UoR9vC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DQFpeFdM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./clsx-B-dksMZM.js";import"./index-DHfgQlLW.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./browser-CV2qUG2E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B4BZttt0.js";import"./useRef-DR4WDFp0.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./ContextMenuSection-ChhzEL-I.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./useStatic-De5kLziu.js";import"./context-Dm_RzWW0.js";import"./useFieldComponent-B3P2g6wY.js";import"./FieldError-BfE9I5LY.js";import"./Form-Dv2vFItu.js";import"./useFormValidation-BLUWg_De.js";import"./useToggleState-DWZRhZpT.js";import"./useFormReset-w9h9-zRZ.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,wr as default};
