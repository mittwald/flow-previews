import{j as r}from"./iframe-CBpAxFwW.js";import{S as n}from"./Section-7R7SCXQ7.js";import{H as a}from"./Heading-MOWZhQDK.js";import s from"./Default.stories-DwYveihw.js";import{u as l,F as d,a as o,S as u}from"./ResetButton-DdOkIqmb.js";import{T as i}from"./TextField-O3WXJJAC.js";import{L as m}from"./Label-D9Ki8i5H.js";import{A as c}from"./ActionGroup-CIZlagD5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./ContextMenuSection-CSCUKvfx.js";import"./ActionBatch-BgON7N4c.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./utils-DlBHsIHw.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./context-BCPYrVw6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./VisuallyHidden-BLMNvyRL.js";import"./Heading-CaCePfIe.js";import"./Text-DmIlada7.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Link-CA-d3tjp.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Switch-B7prEYzL.js";import"./useFieldComponent-PtL7ZYGA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C2wamhi2.js";import"./useFormReset-DcIaZXr3.js";import"./AlertBadge-CTLrkLCL.js";import"./AlertIcon-DpBhbRLN.js";import"./Header-C1k2BjeO.js";import"./Button-DJILh_tx.js";import"./LoadingSpinner-kKg7jHcI.js";import"./dummyText-CX_I_Wpl.js";import"./ModalTrigger-Ci3MDFMS.js";import"./OverlayTrigger-BoEnaKfv.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./DialogTriggerView-iLVIyfJi.js";import"./Modal-DexcMb-i.js";import"./Overlay-DXbZZVUA.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./ContextualHelpTrigger-g0pIlB5n.js";import"./Popover-CbjXFr2h.js";import"./ContextMenuTrigger-C4hUd_HP.js";import"./MenuItem-ZZ_2Y6z8.js";import"./FileField-Cj-RozeP.js";import"./useFormValidation-D1j-Spao.js";import"./FieldError-Bok8s5mY.js";import"./Input-lDcabwyv.js";import"./Content-D1nnPCvX.js";import"./Badge-Dm2zIDNX.js";import"./Alert-C7SfxlUk.js";import"./FieldError-0XXNPrVk.js";import"./AlertText-CKVeXFp2.js";import"./ActionGroupView-CGPpf-UN.js";import"./useRef-DPhMCXJT.js";import"./useControlledHostValueProps-H85_02BB.js";import"./FieldDescription-cbN0tmKj.js";import"./TextField-U22TZmuN.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./useTextField-W7kX8bZQ.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,tt={...s,title:"Structure/Section/Edge Cases"},t={parameters:{controls:{disable:!0}},render:e=>{const p=l();return r.jsx(n,{...e,children:r.jsxs(d,{form:p,onSubmit:()=>f("submit"),children:[r.jsx(a,{children:"Personal Information"}),r.jsx(o,{name:"firstName",children:r.jsx(i,{isRequired:!0,defaultValue:"John",children:r.jsx(m,{children:"First name"})})}),r.jsx(o,{name:"lastName",children:r.jsx(i,{isRequired:!0,defaultValue:"Doe",children:r.jsx(m,{children:"Last name"})})}),r.jsx(c,{children:r.jsx(u,{color:"accent",children:"Submit"})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
