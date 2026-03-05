import{j as r}from"./iframe-BcqfzoOA.js";import{S as n}from"./Section-B_QgMIam.js";import{H as a}from"./Heading-CPq-dFYl.js";import s from"./Default.stories-DoxXyVuD.js";import{u as l,F as d,a as o,S as u}from"./ResetButton--7CtDtWT.js";import{T as i}from"./TextField-DLmieK6n.js";import{L as m}from"./Label-CQjtN3Gn.js";import{A as c}from"./ActionGroup-Cjv-TUqT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./ContextMenuSection-CYrr5VC5.js";import"./ActionBatch-D231mKj-.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./browser-CFz57TUe.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./utils-Bwp7PlhH.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./context-qhtcW2k7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./Text-CALsrB3x.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./VisuallyHidden-0GKWPw_x.js";import"./Heading-ZbAppe82.js";import"./Text-1XRmWCfn.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Link-YqMugRW6.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Switch-CG8jmhCA.js";import"./useFieldComponent-CSNqGKWj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CCPEOAsS.js";import"./useFormReset-neBkOLPK.js";import"./AlertBadge-DZeCQi9H.js";import"./AlertIcon-DTPBfeU8.js";import"./Header-B2fgSjyF.js";import"./Button-C2msjhlA.js";import"./LoadingSpinner-ULzpGe8L.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-B_Sd4CWx.js";import"./OverlayTrigger-CxrHdMrt.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./DialogTriggerView-Zk0Kriq7.js";import"./Modal-0HeinRUt.js";import"./Overlay-Ce9iKBD7.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./ContextualHelpTrigger-CZtZy0Ll.js";import"./Popover-lZTmTyt9.js";import"./ContextMenuTrigger-C9u8PzU3.js";import"./MenuItem-DB-rb3HN.js";import"./FileField-CUaTNiCH.js";import"./useFormValidation-BMgNFXni.js";import"./FieldError-BECkkLSz.js";import"./Input-Bku180kF.js";import"./Content-B5PlHrRz.js";import"./Badge-V_AjlRtV.js";import"./Alert-Csb91Hqi.js";import"./FieldError-COredAmn.js";import"./AlertText-BT22HNok.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./useRef-0Ps7frL9.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./FieldDescription-BAMY7EMv.js";import"./TextField-KO7DCant.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./useTextField-C_zoOVrm.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
