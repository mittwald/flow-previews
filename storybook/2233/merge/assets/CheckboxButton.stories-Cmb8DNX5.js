import{j as r,r as C}from"./iframe-BeQWUZkN.js";import{b as p,u as a,F as c,t as j}from"./Form-B98UMnS4.js";import{R as h,S as x}from"./ResetButton-9QuJv1px.js";import{B as l}from"./Button-CGVqLO1a.js";import{S as b}from"./Section-BPuqexdG.js";import{A as B}from"./ActionGroup-nS8Oj4Mn.js";import{s as u}from"./Action-E4S27TIO.js";import{T as i}from"./Text-DBLOUBNs.js";import{C as m}from"./CheckboxButton-BCEQDmKL.js";import{C as d}from"./Content-CCCkXUnY.js";import{F as E}from"./FieldError-BcvtKrk-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY8Jd6pV.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./clsx-B-dksMZM.js";import"./index-C7QqpnOV.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./browser-CC8M21FF.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-DahaGO1Z.js";import"./useRef-CcGz0D1s.js";import"./IconWarning-BINGtqrd.js";import"./remote-BjhB0wla.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CL6J7LkF.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DC5PU-Mt.js";import"./useFocus-B8WX1wz4.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./ContextMenuSection-of5hagQh.js";import"./Dialog-BcNKaqXQ.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./Text-oRZAcHnn.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./useStatic-H-gT8Tnv.js";import"./context-C8zS221N.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Checkbox-BPZaWn-j.js";import"./useFieldComponent-Df_LAOUO.js";import"./FieldError-D83BnXEF.js";import"./Form-Dldpy16s.js";import"./useFormValidation-enT2NaDW.js";import"./useToggleState-D_PN-5xb.js";import"./useFormReset-C8CI0grL.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Wr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,Wr as default};
