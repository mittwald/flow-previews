import{r as b,j as o}from"./iframe-BXGfha1q.js";import{a as d,u as c,F as p,R as h,S as x,t as B}from"./ResetButton-BJ_wNjWf.js";import{B as l}from"./Button-DfmOHFsC.js";import{S as f}from"./Section-DH7vXPsV.js";import{A as F}from"./ActionGroup-CxRxNddr.js";import{s as u}from"./ActionBatch-z52bmq8Z.js";import{T as i}from"./Text-BbFupL_Y.js";import{C as m}from"./CheckboxButton-5tpam1A6.js";import{C as a}from"./Content-BvqimwwE.js";import{F as E}from"./FieldError-B0wR5GbE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx3iunOI.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./ActionGroupView-B4EOVs6v.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./utils-DDzB-hS3.js";import"./Modal-BngkIUxs.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./Text-B1oZgTuN.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";import"./browser-P6njm6Fr.js";import"./ContextMenuSection-DVxvJxxR.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Checkbox-DI6T2fe5.js";import"./useFieldComponent-BBRXs3en.js";import"./FieldError-B-_MD7Je.js";import"./Form-C11JLohN.js";import"./useFormValidation-51U-qV9x.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Mo={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async C=>{await u(1500),y(C)},r=c({defaultValues:{acceptTerms:!1}}),j=B();return o.jsx(p,{form:r,onSubmit:t,children:o.jsxs(f,{children:[o.jsx(j,{name:"acceptTerms",children:o.jsxs(m,{children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(F,{children:[o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})})}},n={},e={render:t=>{const r=c();return b.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsx(p,{form:r,onSubmit:async()=>await u(2e3),children:o.jsxs(f,{children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(m,{...t,isInvalid:!0,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const r=c();return o.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsxs(F,{children:[o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
