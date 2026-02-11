import{r as h,j as r}from"./iframe-C_YE0yRE.js";import{P as m}from"./PasswordCreationField-BZZiRp5F.js";import{L as u}from"./Label-Bg9ChY99.js";import{B as g}from"./Button-D40FTP7t.js";import{m as C}from"./IconWarning-Cxe6oNxX.js";import{C as w}from"./CopyButton-YxLMp9Jg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNhRkZnt.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./clsx-B-dksMZM.js";import"./index-C1o6XGyU.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./browser-BLJ3u5oR.js";import"./getActionGroupSlot-C_onwoh9.js";import"./FieldDescription-DreGB0lk.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./utils-DHqPz2V6.js";import"./Tooltip-BHjFA-lY.js";import"./OverlayArrow-W6M7e9jX.js";import"./useFocus-CNnZns0Y.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./context-BsGh4Cu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BwrpFxJK.js";import"./useControlledState-8IU_97yn.js";import"./useFocusable-CsoKnWSE.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./ContextualHelpTrigger-BI-UXmzy.js";import"./Popover-BcERq8Yi.js";import"./useOverlayController-DmoYfzmu.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./Dialog-BXH836dM.js";import"./Button-DRed6E24.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNy1k_Tf.js";import"./RSPContexts-Bttm1G3N.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./VisuallyHidden-DZpEB13Q.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./Heading-Bwe8YU0o.js";import"./Heading-BsEG12w_.js";import"./useFieldComponent-CWA258Fl.js";import"./FieldError-DnihSG5_.js";import"./FieldError-C56-tCSc.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";import"./useControlledHostValueProps-SfwBAvhq.js";import"./TextField-CV6LBDwg.js";import"./Form-OCRgsrlm.js";import"./Group-DxmRDWzX.js";import"./Input-BXDRgPwO.js";import"./useTextField-DFuDlfux.js";import"./useFormReset-CEMPEkJX.js";import"./useFormValidation-CAUZ7uHC.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CWKEQFJy.js";import"./remote-C68UFTqR.js";import"./react-children-utilities-zBCii16W.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
