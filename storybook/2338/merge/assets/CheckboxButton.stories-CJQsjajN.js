import{r as b,j as o}from"./iframe-CEWg6_IX.js";import{a as d,u as c,F as p,R as h,S as x,t as B}from"./ResetButton-C4Ep7Det.js";import{B as l}from"./Button-CA6AkUR_.js";import{S as f}from"./Section-smxk9QAc.js";import{A as F}from"./ActionGroup-2A27ggL_.js";import{s as u}from"./ActionBatch-CnX-7Tzc.js";import{T as i}from"./Text-Bw_cIJde.js";import{C as m}from"./CheckboxButton-SvSIlOgj.js";import{C as a}from"./Content-CRiMoq0F.js";import{F as E}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./ActionGroupView-oC77FUWd.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./Text-B3jOd0w4.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./browser-D6O_MAcc.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./EmulatedBoldText-DLcv393z.js";import"./Checkbox-Dtuzk4i8.js";import"./useFieldComponent-BOMK2S5G.js";import"./FieldError-B_BExaNJ.js";import"./Form-XtAuYD0I.js";import"./useFormValidation-przZuKLk.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Mo={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async C=>{await u(1500),y(C)},r=c({defaultValues:{acceptTerms:!1}}),j=B();return o.jsx(p,{form:r,onSubmit:t,children:o.jsxs(f,{children:[o.jsx(j,{name:"acceptTerms",children:o.jsxs(m,{children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(F,{children:[o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})})}},n={},e={render:t=>{const r=c();return b.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsx(p,{form:r,onSubmit:async()=>await u(2e3),children:o.jsxs(f,{children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(m,{...t,isInvalid:!0,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const r=c();return o.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsxs(F,{children:[o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
