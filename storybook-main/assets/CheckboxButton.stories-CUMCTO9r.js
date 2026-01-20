import{j as r,r as C}from"./iframe-CG_BDTJg.js";import{b as p,u as a,F as c,t as j}from"./Form-BIGHS7Ny.js";import{R as h,S as x}from"./ResetButton-CGDsV4YZ.js";import{B as l}from"./Button-BmAaiuIV.js";import{S as b}from"./Section-pYf8QOQK.js";import{A as B}from"./ActionGroup-DAmiV-Yk.js";import{s as u}from"./Action-CprlfWDd.js";import{T as i}from"./Text-DpPZns_R.js";import{C as m}from"./CheckboxButton-DWqZFXzm.js";import{C as d}from"./Content-Cf0EUCx6.js";import{F as E}from"./FieldError-DN7cTCYW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvnWp_K2.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./browser-yLu0BSsR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BtbDMhcr.js";import"./useRef-DbMFXr9W.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./Text-CLAgqxCC.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./useStatic-CTCSTBly.js";import"./context-CBhRRwo5.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Checkbox-DXOyKlPl.js";import"./useFieldComponent-UHV4FB79.js";import"./FieldError-DIhe2pHb.js";import"./Form-LFW5XTCh.js";import"./useFormValidation-BBj6R535.js";import"./useToggleState-DFeoOqJ_.js";import"./useFormReset-BbxWwIqr.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Wr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
