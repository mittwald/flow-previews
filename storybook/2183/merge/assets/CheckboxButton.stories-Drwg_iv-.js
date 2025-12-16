import{j as r,r as C}from"./iframe-BFixO3jI.js";import{u as d,F as a}from"./Form-CCXxtzXF.js";import{F as c,t as j}from"./Field-DYUiszqZ.js";import{B as l}from"./Button-yJ8r8LHg.js";import{S as B}from"./Section-t5FnDHfW.js";import{A as b}from"./ActionGroup-IxKHIUSR.js";import{s as u}from"./Action-oG95m3o9.js";import{T as i}from"./Text-ZinnvgDr.js";import{C as m}from"./Content-eXJ8CBXV.js";import{F as E}from"./FieldError-DNu2tCaK.js";import{C as p}from"./CheckboxButton-DgyyNivb.js";import{R as h}from"./ResetButton-Cks5zUP9.js";import{S as f}from"./SubmitButton-BOOIKePr.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CbH1E9WO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-hYW7P0NC.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./clsx-B-dksMZM.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BpPmVpYb.js";import"./utils-DlL1jtSe.js";import"./ProgressBar-Dekjp8mr.js";import"./Label-dlScXtXx.js";import"./Hidden-eVS00tin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./ContextMenuSection-B4F_li7n.js";import"./lib-90ocxLs-.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./Text-BnIAmJK7.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./getActionGroupSlot--aYDVJlg.js";import"./useStatic-CTmMZwD4.js";import"./context-tjjAcI-d.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./FieldError-CjKulGDW.js";import"./IconDanger--IOlURNT.js";import"./useFieldComponent-mJg7O_gG.js";import"./Checkbox-BZQrJwlu.js";import"./IconCheckboxEmpty-LzCgS5D4.js";import"./Form-PAQ4bQ0C.js";import"./useFormValidation-B69zYJzr.js";import"./useToggleState-D6mHLfHM.js";import"./useFormReset-De7QdeR1.js";import"./useRef-DL_WCxyN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(p,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(p,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
