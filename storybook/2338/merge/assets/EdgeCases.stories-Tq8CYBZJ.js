import{j as r}from"./iframe-Bge_iwzq.js";import{S as n}from"./Section-F6_pDsCx.js";import{H as a}from"./Heading-JLPBp959.js";import s from"./Default.stories-CDQdOlVr.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-B8dyUvel.js";import{T as i}from"./TextField-BGSlbhXb.js";import{L as m}from"./Label-DsCIDP_n.js";import{A as c}from"./ActionGroup-Cm9WLYvL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./ContextMenuSection-S8YrfSf7.js";import"./ActionBatch-AWhYHCSY.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./browser-EEHoGSlH.js";import"./getActionGroupSlot-DLRBpctv.js";import"./dynamic-C3MU2GF_.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./context-gG1Mi2B7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./Text-70WXc8nw.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./VisuallyHidden-BL5eqrat.js";import"./Heading-DerjJN3d.js";import"./Text-Bo3CKbUr.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Link-CwcCCToL.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Switch-DMfgKflI.js";import"./useFieldComponent-DrAtnMqi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./AlertBadge-HmBJECkA.js";import"./AlertIcon-DJ3CSUsO.js";import"./Header-Df6NEYR0.js";import"./Button-DYq5oiR6.js";import"./LoadingSpinner-BWNPdeXh.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-Bf4kukNj.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./DialogTriggerView-h-JMTVOn.js";import"./Modal-DEyfydXj.js";import"./Overlay-G0jPQhAE.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./ContextualHelpTrigger-nPLXV9Jr.js";import"./Popover-DH8uNurD.js";import"./ContextMenuTrigger-B3VscP1G.js";import"./MenuItem-C6wOzdwt.js";import"./FileField-2JsMTzIc.js";import"./useFormValidation-SyV8SqLU.js";import"./FieldError-Cv0VAgMN.js";import"./Input-BXTXjJEE.js";import"./Content-CuNOzgqd.js";import"./Badge-Bh1cbKsC.js";import"./Alert-B72bEVIn.js";import"./FieldError-D2SilRMV.js";import"./AlertText-BlzMkriF.js";import"./ActionGroupView-DMVI4rfL.js";import"./useRef-C4wUjBhi.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./FieldDescription-CKLwRnm1.js";import"./TextField-Ctm0SVNE.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./useTextField-4W-EXSfF.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
