import{j as r}from"./iframe-BZ1p44Xs.js";import{S as n}from"./Section-DYkPYl1t.js";import{H as a}from"./Heading-DAuGI7Cj.js";import s from"./Default.stories-oZveUrHL.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-BCpb_Ry0.js";import{T as i}from"./TextField-WCja-bxL.js";import{L as m}from"./Label-HK0aVnMe.js";import{A as c}from"./ActionGroup-D6AJDGA7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./ContextMenuSection-FMJg67QM.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./context-C5KsUqFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./VisuallyHidden-7tUyfyiG.js";import"./Heading-acaQddxn.js";import"./Text-CplKG2wk.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Link-CnlokJZe.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Switch-C5Kq8j5J.js";import"./useFieldComponent-CdmiPNAX.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DudHCVeE.js";import"./useFormReset-zSbsyNkN.js";import"./AlertBadge-DfKUY7LP.js";import"./AlertIcon-CBSVIKWa.js";import"./Header-BoPdPmAT.js";import"./Button-BXzJaHaH.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-fuSXM19l.js";import"./OverlayTrigger-DzQUlxLA.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./DialogTriggerView-p9c1x_E0.js";import"./Modal-hb6flPm1.js";import"./Overlay-BnwE_UHm.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./ContextualHelpTrigger-Dzsj7OvC.js";import"./Popover-CWPz-1RW.js";import"./ContextMenuTrigger-rOh1KcX0.js";import"./MenuItem-BgzEiv_9.js";import"./FileField-DKbQreh7.js";import"./useFormValidation-oY9u4Y5a.js";import"./FieldError-DP4FZd0x.js";import"./Input-Bt20yVH7.js";import"./Content-DuDYFNBO.js";import"./Badge-asNjcpRo.js";import"./Alert-JoVep4Zr.js";import"./FieldError-t823MHuJ.js";import"./AlertText-CHdPuYCZ.js";import"./ActionGroupView-CiGsVH-s.js";import"./useRef-Cx2IQloG.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./FieldDescription-PY5u12Fd.js";import"./TextField-BFG4RQnU.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./useTextField-CmQ5R2lB.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
