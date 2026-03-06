import{r as j,j as r}from"./iframe-DBOgS3cI.js";import{a as m,u as a,F as c,R as l,S as u,t as b}from"./ResetButton-BJEIRnrv.js";import{L as s}from"./Label-DEbA9P8V.js";import{B as d}from"./Button-DeSyDtjE.js";import{S as h}from"./Section-B03hcWHL.js";import{A as f}from"./ActionGroup-B1DNkudK.js";import{s as p}from"./ActionBatch-C1BOMxBF.js";import{S as n}from"./SearchField-CcHVKcQV.js";import{F as E}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Content-DrBXQyIN.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./utils-BhJeINWq.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./getActionGroupSlot-BVP40Z09.js";import"./useFieldComponent-pONIfnVv.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useFormValidation-BF3CckmA.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Ur={title:"Integrations/React Hook Form/SearchField",component:m,render:()=>{const o=async x=>{await p(5e3),B(x)},F=a({defaultValues:{user:""}}),S=b();return r.jsx(c,{form:F,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(S,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(f,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(f,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
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
            <SearchField>
              <Label>Suche</Label>
            </SearchField>
          </Field>
          <SearchField isInvalid>
            <Label>Suche</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </SearchField>
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
