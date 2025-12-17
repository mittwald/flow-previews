import{j as r,r as C}from"./iframe-CzrbZwQa.js";import{u as d,F as a}from"./Form-BHtAQAp8.js";import{F as c,t as j}from"./Field-BCepEZVg.js";import{B as l}from"./Button-BnubCMUU.js";import{S as B}from"./Section-C0qr-Gfd.js";import{A as b}from"./ActionGroup-BVCTu7ST.js";import{s as u}from"./Action-8VFfq5fK.js";import{T as i}from"./Text-u_8Z_6lo.js";import{C as m}from"./Content-6qOTyX4c.js";import{F as E}from"./FieldError-D0s122Ty.js";import{C as p}from"./CheckboxButton-DeSvgC5c.js";import{R as h}from"./ResetButton-CTuCw7_e.js";import{S as f}from"./SubmitButton-D8Q_1tts.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-Q6zcHXxX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BsERbuwe.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./clsx-B-dksMZM.js";import"./index-Qzp6tfP6.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cr67WOIO.js";import"./utils-Ds7wxNIq.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./ContextMenuSection-DlbICAeU.js";import"./lib-90ocxLs-.js";import"./Dialog-2hzA1Zyr.js";import"./RSPContexts-BXOP7wdA.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";import"./Collection-DJOD4Ed7.js";import"./CollectionBuilder-D4t-xJzw.js";import"./SelectionIndicator-BDndb0Ze.js";import"./Separator-C-FZVUdq.js";import"./Text-Bpo5VkCj.js";import"./SelectionManager-N2u60-Z6.js";import"./useEvent-q-bdr1zW.js";import"./useCollator-TfVuzSHy.js";import"./FocusScope-Ct7XodZT.js";import"./VisuallyHidden-CUes-LKT.js";import"./getActionGroupSlot-GuEuCuz_.js";import"./useStatic-CooBsGRu.js";import"./context-CO2P6JA_.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./FieldError-DojfZoQ1.js";import"./IconDanger-BVqA44qH.js";import"./useFieldComponent-DOxHkWVS.js";import"./Checkbox-qKGTYnac.js";import"./IconCheckboxEmpty-pw5SQMzo.js";import"./Form-AHU_2zi7.js";import"./useFormValidation-DWC0bBci.js";import"./useToggleState-CBj1Ng86.js";import"./useFormReset-DxatWkQF.js";import"./useRef-n2Slnt4M.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(p,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsxs(p,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(p,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(m,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
