import{j as r}from"./iframe-CtEjVB66.js";import{S as n}from"./Section-B3QlijVL.js";import{H as a}from"./Heading-c1W7e3IT.js";import s from"./Default.stories-mmf2ZEbW.js";import{u as l,F as d,a as o,S as u}from"./FormRootError-2xDo0dX3.js";import{T as i}from"./TextField-CTAsvyVX.js";import{L as m}from"./Label-CvAjEv-1.js";import{A as c}from"./ActionGroup-DvmIDtHK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./ContextMenuSection-COxyh1Te.js";import"./ActionBatch-CDzJz977.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./utils-BuEQZICT.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./context-DXMIHXTO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./Text-1qNOxJF7.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./VisuallyHidden-B96eA0GA.js";import"./Heading-DMz3CQ7g.js";import"./Text-QCKh6xRo.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Link-DMg6xFRD.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Switch-DFBGVKQx.js";import"./useFieldComponent-B7HNchXP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CL5C9z_j.js";import"./useFormReset-2RZyXaKm.js";import"./AlertBadge-Z_jin2-k.js";import"./AlertIcon-BaGtIfyD.js";import"./Header-D3vd4AzU.js";import"./Button-BbnjmOHy.js";import"./LoadingSpinner-CJX4ksrz.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-BT28tuEq.js";import"./OverlayTrigger-B8jwjQmG.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./DialogTriggerView-DVU4ZpEK.js";import"./Modal-BLKh-L3K.js";import"./Overlay-BGmB2cy_.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./ContextualHelpTrigger-CG8ysDtI.js";import"./Popover-fmzRw_jU.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./MenuItem-wH73rdaM.js";import"./FileField-BlLRf3g6.js";import"./useFormValidation-ClIfwgLl.js";import"./FieldError-DJZxrTcD.js";import"./Input-ByYkDHMz.js";import"./Content-BV9uIs25.js";import"./Badge-COE-ORBX.js";import"./Alert-BtB3Ol1D.js";import"./ActionGroupView-zAOXf7RN.js";import"./useRef-C8PAeYAN.js";import"./FieldError-BzQCv4a3.js";import"./AlertText-DqjTg_vO.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./FieldDescription-DOW1EL7Z.js";import"./TextField-uAKnHDmd.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./useTextField-7MsF6vto.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ot={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
