import{j as r,r as C}from"./iframe-BVdPrJ3b.js";import{b as p,u as a,F as c,t as j}from"./Form-CP4W0g6V.js";import{R as h,S as x}from"./ResetButton-BMVB6F8i.js";import{B as l}from"./Button-DWZoHS5b.js";import{S as b}from"./Section-B0Q_DjwJ.js";import{A as B}from"./ActionGroup-x2U4gVAf.js";import{s as u}from"./Action-D5COu0gZ.js";import{T as i}from"./Text-nQWL8z2r.js";import{C as m}from"./CheckboxButton-C4L_6uyJ.js";import{C as d}from"./Content-k2o_zaJ5.js";import{F as E}from"./FieldError-BeQ9X37c.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-VccpDVll.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./clsx-B-dksMZM.js";import"./index-BWMeLKrj.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./browser-DSBfFWZr.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BEq1Wr11.js";import"./useRef-Dvlzlj1T.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./ContextMenuSection-97x_J9aj.js";import"./Dialog-BIQQDMqR.js";import"./RSPContexts-Bdb5uPWt.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./Text-CmXVeCCc.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./useStatic-BX7NV0z1.js";import"./context-CCTeyNcb.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Checkbox-Bzs6HGiP.js";import"./useFieldComponent-Pua8aj4t.js";import"./FieldError-BhKmMJaW.js";import"./Form-BeiuGm7T.js";import"./useFormValidation-BHFBjW_A.js";import"./useToggleState-D2AlcaAf.js";import"./useFormReset-DipgmSs2.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ir={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ir as default};
