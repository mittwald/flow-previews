import{r as h,j as r}from"./iframe-Bc-jwLWq.js";import{P as m}from"./PasswordCreationField-C9Uk_3MV.js";import{L as u}from"./Label-p4o9WkV1.js";import{B as g}from"./Button-DRfNiyCG.js";import{m as C}from"./IconWarning-BPpigV-o.js";import{C as w}from"./CopyButton-DisgX_mY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTlJFVeg.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./clsx-B-dksMZM.js";import"./index-Ct8kadYq.js";import"./Action-BW1QHV35.js";import"./context-CAc_7aQG.js";import"./useStatic-D2AFXt6d.js";import"./browser-Cfl6H5sa.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./FieldDescription-CxtFvhlF.js";import"./Text-Bs06tnQB.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./utils-BIv87FRG.js";import"./Tooltip-Clp_Yp5n.js";import"./OverlayArrow-C2KXIoV9.js";import"./useFocus-C6ldElRQ.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BfZDlGh7.js";import"./context-BDmep644.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-IlB9I5Xo.js";import"./useFocusable-DIXmUg59.js";import"./useFocusRing-B0jLa-Vk.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./ContextualHelpTrigger-DJyKBLHW.js";import"./Popover-BnXLjntA.js";import"./useOverlayController-DoFosNgE.js";import"./OverlayContextProvider-BB6WVLCg.js";import"./Dialog-BLkrUNfj.js";import"./Button-HPdphaJl.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NBjG5NMF.js";import"./RSPContexts-pS-AnHir.js";import"./Collection-BCq2XeeE.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./SelectionIndicator-BwDlTF6c.js";import"./Separator-jBiWh72R.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./VisuallyHidden-CmlM99K4.js";import"./OverlayTrigger-Cc-9XWER.js";import"./Heading-Av026-5J.js";import"./Heading-DpsZJGvr.js";import"./useFieldComponent-ahSSNXad.js";import"./FieldError-Cp2fPOrN.js";import"./FieldError-CGIyNVOV.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";import"./useControlledHostValueProps-DoY3RCm0.js";import"./TextField-qgwh5fDT.js";import"./Form-DqUF-Ufv.js";import"./Group-I4ZSji5i.js";import"./Input-fHIZlSCw.js";import"./useTextField-C1Foi7Jk.js";import"./useFormReset-DFcj21LA.js";import"./useFormValidation-DyPlpM72.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./remote-CficONz5.js";import"./react-children-utilities-BHu5RVO2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
