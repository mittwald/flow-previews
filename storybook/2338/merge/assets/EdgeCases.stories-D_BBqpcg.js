import{j as r}from"./iframe-CEWg6_IX.js";import{S as n}from"./Section-smxk9QAc.js";import{H as a}from"./Heading-BWEcB93I.js";import s from"./Default.stories-BqA9Lhdn.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-C4Ep7Det.js";import{T as i}from"./TextField-DKH0rH4c.js";import{L as m}from"./Label-BaJSnICs.js";import{A as c}from"./ActionGroup-2A27ggL_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./ActionBatch-CnX-7Tzc.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./browser-D6O_MAcc.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./dynamic-JOnDgprM.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./utils-VWmQzJjV.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./Text-B3jOd0w4.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./VisuallyHidden-DHhRta61.js";import"./Heading-Nh2qIPHf.js";import"./Text-Bw_cIJde.js";import"./EmulatedBoldText-DLcv393z.js";import"./Link-ZNqsbLzN.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Switch-DWHYvKIq.js";import"./useFieldComponent-BOMK2S5G.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";import"./AlertBadge-DThqHNlG.js";import"./AlertIcon-BQQez7us.js";import"./Header-DIiIyJ9i.js";import"./Button-CA6AkUR_.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-Bc6_o2UZ.js";import"./OverlayTrigger-DGu3y4_r.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./DialogTriggerView-59a06wTI.js";import"./Modal-BUEX4x6z.js";import"./Overlay-3y_zvGr_.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./ContextualHelpTrigger-B-fxFq0g.js";import"./Popover-CBq8Jp6I.js";import"./ContextMenuTrigger-NQQLpLoe.js";import"./MenuItem-DxoPi8dd.js";import"./FileField-v8If5qsj.js";import"./useFormValidation-przZuKLk.js";import"./FieldError-B_BExaNJ.js";import"./Input-DI2XwVnV.js";import"./Content-CRiMoq0F.js";import"./Badge-_G7MlIgi.js";import"./Alert-DpkGqaF1.js";import"./FieldError-fCgHoEMk.js";import"./AlertText-Cd8Si-3W.js";import"./ActionGroupView-oC77FUWd.js";import"./useRef-D0S1EFiC.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./FieldDescription-BJFWlccI.js";import"./TextField-DfYJlBbG.js";import"./Form-XtAuYD0I.js";import"./Group-BY2zOSJX.js";import"./useTextField-aMHav-G9.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
