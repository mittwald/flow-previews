import{j as r}from"./iframe-BFddea_x.js";import{S as n}from"./Section-DorsmKJX.js";import{H as a}from"./Heading-C7vi7fKP.js";import s from"./Default.stories-BYqbsOf1.js";import{u as l,F as d,a as o,S as u}from"./FormRootError-DAozFL3q.js";import{T as i}from"./TextField-C4oclEWY.js";import{L as m}from"./Label-Cyz25dCh.js";import{A as c}from"./ActionGroup-B4CMqS7f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./ContextMenuSection-C_9nT1gz.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./utils-D-aZUMcZ.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./context-CaZH5px0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./Heading-CkECWlTX.js";import"./Text-B70YymId.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Link-DtC85Uv0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Switch-RNfkf9Un.js";import"./useFieldComponent-DrOhnKye.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-hE4ermpf.js";import"./useFormReset-C1U9nA2s.js";import"./AlertBadge-CsvX45zr.js";import"./AlertIcon-Bx7C3Aee.js";import"./Header-fn7oWl5w.js";import"./Button-DmFob37h.js";import"./LoadingSpinner-BTSUDAP0.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-zcA7-V1x.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./DialogTriggerView-D9jblR2E.js";import"./Modal-Bu11h-S7.js";import"./Overlay-Dpbqdx3Y.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./ContextualHelpTrigger-DL49s42d.js";import"./Popover-BbCf_utC.js";import"./ContextMenuTrigger-3uwZO5tE.js";import"./MenuItem-JNwMZTFL.js";import"./FileField-DIrLmr6H.js";import"./useFormValidation-CYvJLeFF.js";import"./FieldError-Dj7b6ixT.js";import"./Input-DbK2aUtO.js";import"./Content-CWzMlKrq.js";import"./Badge-Jb0Vhep2.js";import"./Alert-CpTmGWqQ.js";import"./ActionGroupView-BXRFxTws.js";import"./useRef-Cur5NpMF.js";import"./FieldError-BfmusLP_.js";import"./AlertText-Cz5tkg5a.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./FieldDescription-DqsHbSnc.js";import"./TextField-Cha2rHT2.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./useTextField-C79BrPY1.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ot={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const it=["WithForm"];export{t as WithForm,it as __namedExportsOrder,ot as default};
