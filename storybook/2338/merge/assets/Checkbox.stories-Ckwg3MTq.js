import{r as j,j as r}from"./iframe-CEWg6_IX.js";import{a as c,u as p,F as a,R as l,S as f,t as b}from"./ResetButton-C4Ep7Det.js";import{B as u}from"./Button-CA6AkUR_.js";import{S as h}from"./Section-smxk9QAc.js";import{A as x}from"./ActionGroup-2A27ggL_.js";import{s as d}from"./ActionBatch-CnX-7Tzc.js";import{C as t}from"./Checkbox-Dtuzk4i8.js";import{F as E}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./useFieldComponent-BOMK2S5G.js";import"./FieldError-B_BExaNJ.js";import"./Form-XtAuYD0I.js";import"./useFormValidation-przZuKLk.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const e=async F=>{await d(1500),y(F)},o=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=b();return r.jsx(a,{form:o,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(x,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},i={render:e=>{const o=p();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(h,{children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:e=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(x,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <Checkbox {...props}>Accept terms</Checkbox>
          </Field>
          <Checkbox isInvalid>
            Accept terms
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Checkbox>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...m.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Vr as __namedExportsOrder,Gr as default};
