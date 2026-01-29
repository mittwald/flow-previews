import{j as r,r as C}from"./iframe-BUwXHbLV.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-DD2EU88j.js";import{B as l}from"./Button-C47X2BbH.js";import{S as B}from"./Section-DvLGNmum.js";import{A as b}from"./ActionGroup-B01MVWJe.js";import{s as u}from"./Action-Wt0sSzk-.js";import{T as i}from"./Text-DQHJUI0D.js";import{C as m}from"./CheckboxButton-g-nZYO9c.js";import{C as d}from"./Content-BB0aPxBH.js";import{F as E}from"./FieldError-BFYCcyQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-jPtu3qAR.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./clsx-B-dksMZM.js";import"./index-B1fishDV.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./useRef-BrSocotX.js";import"./utils-JDwP1GoF.js";import"./ButtonView-DumfpSry.js";import"./browser-DgSxuaKY.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcgTA6VC.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Dialog-2n0yrNbm.js";import"./RSPContexts-CfLLQl4G.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./Text-foJVwDWR.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./useStatic-BtWsPYN-.js";import"./context-BtwGTzrQ.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Checkbox-DuMhCLiT.js";import"./useFieldComponent-NdCAuKiZ.js";import"./FieldError-DDJD7LnR.js";import"./Form-D0DN8V4Z.js";import"./useFormValidation-GMJFkgaI.js";import"./useToggleState-B1lAR_uo.js";import"./useFormReset-juEzhCU8.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
