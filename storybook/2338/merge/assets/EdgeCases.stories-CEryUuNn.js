import{j as r}from"./iframe-DBOgS3cI.js";import{S as n}from"./Section-B03hcWHL.js";import{H as a}from"./Heading-BbxqBEBp.js";import s from"./Default.stories-CBrR9SF2.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-BJEIRnrv.js";import{T as i}from"./TextField-BNdWLONv.js";import{L as m}from"./Label-DEbA9P8V.js";import{A as c}from"./ActionGroup-B1DNkudK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./ActionBatch-C1BOMxBF.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./browser-aVPMedyb.js";import"./getActionGroupSlot-BVP40Z09.js";import"./dynamic-Daa1kuSR.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./utils-BhJeINWq.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./context-BFw_9KSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./RSPContexts-Dpo7G8Um.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./Heading-BTHBDnxA.js";import"./Text-V6WF8rgy.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Link-BnUIYtGA.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Switch-Dz00-TDx.js";import"./useFieldComponent-pONIfnVv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iWMvozdM.js";import"./useFormReset-M_TceD0b.js";import"./AlertBadge-ou7N4fAD.js";import"./AlertIcon-CCMDdz-U.js";import"./Header-C1_tm8HO.js";import"./Button-DeSyDtjE.js";import"./LoadingSpinner-BMYl670W.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-Cyw9N_AB.js";import"./OverlayTrigger-B4nPvJJx.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./DialogTriggerView-D_mi5HIo.js";import"./Modal-3YZrkyAE.js";import"./Overlay-BcCO2Gjo.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./ContextualHelpTrigger-DIF0oG5T.js";import"./Popover-BfI_0-2O.js";import"./ContextMenuTrigger-BTpScWVR.js";import"./MenuItem-DrhMcXlQ.js";import"./FileField-C578hrYO.js";import"./useFormValidation-BF3CckmA.js";import"./FieldError-C8B5aabp.js";import"./Input-1Fi11bbE.js";import"./Content-DrBXQyIN.js";import"./Badge-To7rYpbd.js";import"./Alert-DajXL6DG.js";import"./FieldError-DG3wyRNr.js";import"./AlertText-C0iLtgHk.js";import"./ActionGroupView-BQ6DCC5_.js";import"./useRef-CYQsz7t1.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./FieldDescription-CSCgjXc1.js";import"./TextField-BdIP0Lrm.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./useTextField-DdxpKlHp.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => {
    const form = useForm();
    return <Section {...props}>
        <Form form={form} onSubmit={() => action("submit")}>
          <Heading>Personal Information</Heading>
          <Field name="firstName">
            <TextField isRequired defaultValue="John">
              <Label>First name</Label>
            </TextField>
          </Field>
          <Field name="lastName">
            <TextField isRequired defaultValue="Doe">
              <Label>Last name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <SubmitButton color="accent">Submit</SubmitButton>
          </ActionGroup>
        </Form>
      </Section>;
  }
}`,...t.parameters?.docs?.source}}};const ot=["WithForm"];export{t as WithForm,ot as __namedExportsOrder,tt as default};
