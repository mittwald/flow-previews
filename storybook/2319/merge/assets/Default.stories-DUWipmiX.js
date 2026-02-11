import{r as h,j as r}from"./iframe-lFICOVMG.js";import{P as m}from"./PasswordCreationField-fVE80tAv.js";import{L as u}from"./Label-WsCexfXL.js";import{B as g}from"./Button-Cf-KBW4_.js";import{m as C}from"./IconWarning-4K-DqIQK.js";import{C as w}from"./CopyButton-B4ub8mk5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0KpQiqy3.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./useStatic-DBynbgAg.js";import"./browser-CN95VINd.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./FieldDescription-B-4XBa_Q.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./utils-DhhSlmx9.js";import"./Tooltip-wWXAV_F6.js";import"./OverlayArrow-B2p7lzkF.js";import"./useFocus-fqIQg8qR.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./context-Sy7BhgRt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeOtkCiq.js";import"./useControlledState-BZJPMeD2.js";import"./useFocusable-ByJ0NNOg.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./ContextualHelpTrigger-DH16tX2N.js";import"./Popover-kZVVNzAg.js";import"./useOverlayController-BG5Eyx3V.js";import"./OverlayContextProvider-DLiN4Bef.js";import"./Dialog-XpC0gjG5.js";import"./Button-Dv_7IODh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BW_bFHXv.js";import"./RSPContexts-BmMWqIzn.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";import"./OverlayTrigger-NL0Si4MJ.js";import"./Heading-DcmPVh6J.js";import"./Heading-BZr6A1TW.js";import"./useFieldComponent-70N6l4jn.js";import"./FieldError-Ba2n5nZe.js";import"./FieldError-DXs5idvC.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";import"./useControlledHostValueProps-CKOcyAM8.js";import"./TextField-Bhd7qDTe.js";import"./Form-DIwrOEgx.js";import"./Group-0ck5nD0j.js";import"./Input-Cm6GPhlW.js";import"./useTextField-DsAYcK4F.js";import"./useFormReset-CPUmIViP.js";import"./useFormValidation-BdcfYetn.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DqvYatLg.js";import"./remote-CRPYY61Z.js";import"./react-children-utilities-BfOV7R51.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
