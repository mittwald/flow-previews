import{r as b,j as o}from"./iframe-DBOgS3cI.js";import{a as d,u as c,F as p,R as h,S as x,t as B}from"./ResetButton-BJEIRnrv.js";import{B as l}from"./Button-DeSyDtjE.js";import{S as f}from"./Section-B03hcWHL.js";import{A as F}from"./ActionGroup-B1DNkudK.js";import{s as u}from"./ActionBatch-C1BOMxBF.js";import{T as i}from"./Text-V6WF8rgy.js";import{C as m}from"./CheckboxButton-BVIg3ozv.js";import{C as a}from"./Content-DrBXQyIN.js";import{F as E}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./utils-BhJeINWq.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";import"./browser-aVPMedyb.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./getActionGroupSlot-BVP40Z09.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Checkbox-Bbp1M4Zj.js";import"./useFieldComponent-pONIfnVv.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./useFormValidation-BF3CckmA.js";import"./useToggleState-iWMvozdM.js";import"./useFormReset-M_TceD0b.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Mo={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async C=>{await u(1500),y(C)},r=c({defaultValues:{acceptTerms:!1}}),j=B();return o.jsx(p,{form:r,onSubmit:t,children:o.jsxs(f,{children:[o.jsx(j,{name:"acceptTerms",children:o.jsxs(m,{children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(F,{children:[o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})})}},n={},e={render:t=>{const r=c();return b.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsx(p,{form:r,onSubmit:async()=>await u(2e3),children:o.jsxs(f,{children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(m,{...t,isInvalid:!0,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const r=c();return o.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsxs(F,{children:[o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
