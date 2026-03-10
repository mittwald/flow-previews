import{r as h,j as r}from"./iframe-BOfxQ126.js";import{P as m}from"./PasswordCreationField-BZ72hWLR.js";import{L as u}from"./Label-CqRpIaXO.js";import{B as g}from"./Button-y6FeYCBC.js";import{m as C}from"./IconWarning-BoBPkWIf.js";import{C as w}from"./CopyButton-CABW8tGa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEImSkKK.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./clsx-B-dksMZM.js";import"./index-X6kmY2GD.js";import"./ActionBatch-B3OckZQJ.js";import"./useOverlayController-NqoHBo9l.js";import"./useStatic-DMadDPeg.js";import"./browser-Ch4oJYG9.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./FieldDescription-BJeDAEM1.js";import"./Text-kIO13lDY.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./utils-Ca0-H8MP.js";import"./Tooltip-BsnzGYHf.js";import"./OverlayArrow-DOAKdHdF.js";import"./useFocus-CUROCE8M.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./context-Bpmop-v_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-i6kyKwnh.js";import"./useControlledState-DE1u8yHr.js";import"./useFocusable-C918yQby.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./ContextualHelpTrigger-DIs850zI.js";import"./Popover-BeNB5A8p.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./Dialog-CCDN7DJz.js";import"./Button-6yn426ID.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-up0eurfY.js";import"./RSPContexts-8t9TLuqJ.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./VisuallyHidden-DfBCvB4u.js";import"./OverlayTrigger-ClVCYjM8.js";import"./Heading-XWK9z325.js";import"./Heading-t8wVFZ6a.js";import"./useFieldComponent-D5YpTCds.js";import"./FieldError-DCo5F_nc.js";import"./FieldError-GcSEBXG9.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";import"./useControlledHostValueProps-C2Pi2SXC.js";import"./TextField-DZ7UuVf5.js";import"./Form-CRtfSpWI.js";import"./Group-CfOaYHrv.js";import"./Input-Dk2m6F6l.js";import"./useTextField-B-yXo6Fk.js";import"./useFormReset-B-rsDa9Z.js";import"./useFormValidation-CxieGJiT.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BjosoRSs.js";import"./remote-DjEyU7NV.js";import"./react-children-utilities-D7jUmXWp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
