import{r as h,j as r}from"./iframe-BV_gLY1W.js";import{P as m}from"./PasswordCreationField-BuMi906E.js";import{L as u}from"./Label-DSp9Q3qx.js";import{B as g}from"./Button-SSCEZ0RO.js";import{m as C}from"./IconWarning-BvnX4fSp.js";import{C as w}from"./CopyButton-Cwh9uJg3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D0Gso-mt.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./clsx-B-dksMZM.js";import"./index-iDKz2btu.js";import"./Action-B44IIYnD.js";import"./context-DsGc8Cs0.js";import"./useStatic-Bro5j9qe.js";import"./browser-RRcj6Eel.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./FieldDescription-DJEI_ZDJ.js";import"./Text-B1ZcDWdT.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./utils-pcZMLEVF.js";import"./Tooltip-Dl1Jj4y7.js";import"./OverlayArrow-BxTjv8xX.js";import"./useFocus-BhZlDk36.js";import"./ProgressBar-d-6uKhr8.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BcIwqyBf.js";import"./context-D0kYsfYD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DHBFiW-v.js";import"./useControlledState-D8GCi_t3.js";import"./useFocusable-CF0VfUE0.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./ContextualHelpTrigger-jvMX-epZ.js";import"./Popover-DRPWLktf.js";import"./useOverlayController-CyEqSVnM.js";import"./OverlayContextProvider-Umj4RmK7.js";import"./Dialog-DuYLlPOJ.js";import"./Button-BTyL1bMd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cpaxayx2.js";import"./RSPContexts-C37Ie1k0.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";import"./OverlayTrigger-DnOAVCO5.js";import"./Heading-DoDWvzJr.js";import"./Heading-CTg1mIVh.js";import"./useFieldComponent-Ciy1vkCA.js";import"./FieldError-Du2SwoFV.js";import"./FieldError-Q2svFxIr.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";import"./useControlledHostValueProps-CdAs3b7f.js";import"./TextField-B8NJHOS9.js";import"./Form-Cc8Ejva8.js";import"./Group-BmpY48KV.js";import"./Input-tiA0LuFc.js";import"./useTextField-UbdMNCYP.js";import"./useFormReset-Ba41Oqje.js";import"./useFormValidation-Bzs4UsOG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DwHnxPWs.js";import"./remote-DzXnO2Bt.js";import"./react-children-utilities-Ccn87ZD7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
