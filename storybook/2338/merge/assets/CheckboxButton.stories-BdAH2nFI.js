import{r as b,j as o}from"./iframe-CBpAxFwW.js";import{a as d,u as c,F as p,R as h,S as x,t as B}from"./ResetButton-DdOkIqmb.js";import{B as l}from"./Button-DJILh_tx.js";import{S as f}from"./Section-7R7SCXQ7.js";import{A as F}from"./ActionGroup-CIZlagD5.js";import{s as u}from"./ActionBatch-BgON7N4c.js";import{T as i}from"./Text-DmIlada7.js";import{C as m}from"./CheckboxButton-IyrwoN2q.js";import{C as a}from"./Content-D1nnPCvX.js";import{F as E}from"./FieldError-0XXNPrVk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./ActionGroupView-CGPpf-UN.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./utils-DlBHsIHw.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./browser-Bc0l3UGu.js";import"./ContextMenuSection-CSCUKvfx.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Checkbox-DrrfEgp7.js";import"./useFieldComponent-PtL7ZYGA.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./useFormValidation-D1j-Spao.js";import"./useToggleState-C2wamhi2.js";import"./useFormReset-DcIaZXr3.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Mo={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async C=>{await u(1500),y(C)},r=c({defaultValues:{acceptTerms:!1}}),j=B();return o.jsx(p,{form:r,onSubmit:t,children:o.jsxs(f,{children:[o.jsx(j,{name:"acceptTerms",children:o.jsxs(m,{children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(F,{children:[o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})})}},n={},e={render:t=>{const r=c();return b.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsx(p,{form:r,onSubmit:async()=>await u(2e3),children:o.jsxs(f,{children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(m,{...t,isInvalid:!0,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const r=c();return o.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsxs(F,{children:[o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
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
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const No=["Default","WithFieldError","WithFocus"];export{n as Default,e as WithFieldError,s as WithFocus,No as __namedExportsOrder,Mo as default};
