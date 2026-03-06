import{r as x,j as r}from"./iframe-DBOgS3cI.js";import{a as m,u as p,F as a,R as l,S as u,t as E}from"./ResetButton-BJEIRnrv.js";import{B as d}from"./Button-DeSyDtjE.js";import{S as f}from"./Section-B03hcWHL.js";import{A as h}from"./ActionGroup-B1DNkudK.js";import{s as c}from"./ActionBatch-C1BOMxBF.js";import{S as n}from"./Switch-Dz00-TDx.js";import{F as j}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Content-DrBXQyIN.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./utils-BhJeINWq.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./getActionGroupSlot-BVP40Z09.js";import"./useFieldComponent-pONIfnVv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iWMvozdM.js";import"./useFormReset-M_TceD0b.js";import"./FieldError-C8B5aabp.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),kr={title:"Integrations/React Hook Form/Switch",component:m,render:()=>{const t=async S=>{await c(5e3),b(S)},o=p({defaultValues:{isEnabled:!1}}),F=E();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(f,{children:[r.jsx(F,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsxs(h,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await c(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <Switch {...props}>Field1</Switch>
          </Field>
          <Switch>
            Field2
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Switch>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
