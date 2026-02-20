import{j as r}from"./iframe-BXGfha1q.js";import{S as n}from"./Section-DH7vXPsV.js";import{H as a}from"./Heading-BHfoL7cG.js";import s from"./Default.stories-DTo0_iJp.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-BJ_wNjWf.js";import{T as i}from"./TextField-CFRr_xny.js";import{L as m}from"./Label-DmvSuQEb.js";import{A as c}from"./ActionGroup-CxRxNddr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./ContextMenuSection-DVxvJxxR.js";import"./ActionBatch-z52bmq8Z.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./browser-P6njm6Fr.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./utils-DDzB-hS3.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./Text-B1oZgTuN.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./VisuallyHidden-eEVd_sfi.js";import"./Heading-uLzTRNHK.js";import"./Text-BbFupL_Y.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Link-CaSBOK33.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Switch-Bp0NmC8t.js";import"./useFieldComponent-BBRXs3en.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./AlertBadge-BC5rZB8y.js";import"./AlertIcon-DqNX7jjv.js";import"./Header-BygRKEXA.js";import"./Button-DfmOHFsC.js";import"./LoadingSpinner-CnywtlQ4.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-CitJvFRj.js";import"./OverlayTrigger-BPtqEArA.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./DialogTriggerView-D7QHHDol.js";import"./Modal-BngkIUxs.js";import"./Overlay-Bxv8vuKP.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./ContextualHelpTrigger-DMqIa8wX.js";import"./Popover-DUbvu04K.js";import"./ContextMenuTrigger-Byk7iPD-.js";import"./MenuItem-Dwef0UQJ.js";import"./FileField-CXrsXNKf.js";import"./useFormValidation-51U-qV9x.js";import"./FieldError-B-_MD7Je.js";import"./Input-DlEaT4nu.js";import"./Content-BvqimwwE.js";import"./Badge-CbBinVam.js";import"./Alert-BGvEhh1p.js";import"./FieldError-B0wR5GbE.js";import"./AlertText-D4bpqMRF.js";import"./ActionGroupView-B4EOVs6v.js";import"./useRef-DsRyiFKF.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./FieldDescription-B2zafCFx.js";import"./TextField-CSKOWfiV.js";import"./Form-C11JLohN.js";import"./Group-C9lE8UeE.js";import"./useTextField-Cyr4gso_.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
