import{r as h,j as r}from"./iframe-M-00ByYr.js";import{P as m}from"./PasswordCreationField-baUay15A.js";import{L as u}from"./Label-DT1JZy6g.js";import{B as g}from"./Button-Dye8aZJo.js";import{z as C}from"./IconWarning-BKX4jvdo.js";import{C as w}from"./CopyButton-Ccz_hhPI.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./Action-C6LgLFNM.js";import"./context-DSFC_3Cq.js";import"./useStatic-B0qB2N-4.js";import"./browser-DuQo-X1z.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./FieldDescription-70lNmvry.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./utils-CzeOq9Jp.js";import"./Tooltip-CUCw1LYX.js";import"./ClearPropsContextView-DOVoKx0-.js";import"./ClearPropsContext-DvyDrnsG.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useFocus-kTKNfC8f.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./context-rdrdo5ux.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cpz-s1gG.js";import"./useFocusable-Ck0hOZfS.js";import"./useFocusRing-BCZu56W_.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./ReactAriaControlledValueFix-Cd1cyM2V.js";import"./ContextualHelpTrigger-BY-jmFLR.js";import"./Popover-CbhBxO6C.js";import"./OverlayContextProvider-B3ZYORx9.js";import"./Dialog-DLSokgtV.js";import"./Button-Bzi92yWx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ZYaxT06h.js";import"./RSPContexts-D5gF1Lon.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./OverlayTrigger-Dw9dIaI5.js";import"./ControlledNotification-DKMKb3og.js";import"./Heading-Cc9x6iz-.js";import"./Heading-CaFtCNvg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DUfCRCd2.js";import"./useFieldComponent-CRgHa0Rs.js";import"./FieldError-ZwGpCE6l.js";import"./TextField-DNJxyyXd.js";import"./Form-B5fCCfio.js";import"./Group-Dk159ZYr.js";import"./Input-CPscax3_.js";import"./useTextField-CKTQn_AI.js";import"./useFormReset-B1z61k1U.js";import"./useFormValidation-Co3-d3Vs.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C8vasHPM.js";import"./react-children-utilities-Dk-9Ngpu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
