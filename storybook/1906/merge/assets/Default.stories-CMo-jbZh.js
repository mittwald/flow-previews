import{r as h,j as r}from"./iframe-B_TkxfTi.js";import{P as m}from"./PasswordCreationField-7g9FQEQ5.js";import{L as u}from"./Label-B2z_KUki.js";import{B as g}from"./Button-RJdr80c6.js";import{m as C}from"./IconWarning-C-Vc31bm.js";import{C as w}from"./CopyButton-DUBSuGqO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BusjqWiY.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./useStatic-cRv7_xgS.js";import"./browser-CLjLvoWS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./FieldDescription-w32F_sTG.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./utils-CEh0pYpN.js";import"./Tooltip-DXnPph1_.js";import"./OverlayArrow-DmLbnMba.js";import"./useFocus-CWYeHEaO.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./context-Bqo0meff.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useControlledState-CYdArkzJ.js";import"./useFocusable-DUuU0sbS.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./ContextualHelpTrigger-Wc_XJPKV.js";import"./Popover-Dk2IZtcP.js";import"./useOverlayController-2wquljYS.js";import"./OverlayContextProvider-lGzaaamO.js";import"./Dialog-ChZYysky.js";import"./Button-n3CPGMPO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqvJUCRP.js";import"./RSPContexts-CP1vSDTy.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./VisuallyHidden-BGokW8gm.js";import"./OverlayTrigger-De9wNpqE.js";import"./Heading-DO4971VL.js";import"./Heading-_1YYOm-_.js";import"./useFieldComponent-C57DTYPz.js";import"./FieldError-BTHn5en7.js";import"./FieldError-CJvsl-v5.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";import"./useControlledHostValueProps-DLOhfg72.js";import"./TextField-8qmnCrOw.js";import"./Form-v3SuS94t.js";import"./Group-C-wWhNg_.js";import"./Input-BZn5pHU1.js";import"./useTextField-DhP7ZCBD.js";import"./useFormReset-BlUfWbi8.js";import"./useFormValidation-CPzq_YrX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CjHOYBjr.js";import"./remote-BarzyRQ7.js";import"./react-children-utilities-BaJh6dYt.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
