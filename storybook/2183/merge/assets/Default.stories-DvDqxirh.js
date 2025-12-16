import{r as h,j as r}from"./iframe-C3qryY9m.js";import{L as u}from"./Label-C-0JfuKv.js";import{B as g}from"./Button-DjS8Y37J.js";import"./IconApp-CHP_d6TO.js";import{I as C}from"./IconDanger-CnINUXvw.js";import{C as w}from"./CopyButton-Bm9FJIs2.js";import{P as m}from"./PasswordCreationField-BR2RnxOE.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./index-BCGSECUV.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./Label-CyYSEd83.js";import"./utils-DpUn2o29.js";import"./Hidden-ft2VLnDU.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./browser-7Ut6r0Ca.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-C56XpJ0V.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./IconCopy-DM3pBwdk.js";import"./Tooltip-DLc4fcJY.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./react-children-utilities-Muiy3BkX.js";import"./Action-BLUuMHcv.js";import"./useStatic-CxeJCkNi.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./context-BBcvZ-pJ.js";import"./dynamic-B40s9Zwa.js";import"./FieldDescription-fqGYoTDI.js";import"./TranslationProvider-Dn6WBep5.js";import"./IconCircleCheck-0UPAfc84.js";import"./ContextualHelpTrigger-7Y4yxSdb.js";import"./Popover-DdsS2BWk.js";import"./OverlayContextProvider-VRFY-eRQ.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./useOverlayController-DqQbDVt2.js";import"./OverlayTrigger-IQRhRthi.js";import"./IconInfo-DqIIvtum.js";import"./Heading-DVuRKGIc.js";import"./Heading-DglVJtml.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BCb9qeqT.js";import"./FieldError-2lUipCQG.js";import"./FieldError-Bjrpvc0X.js";import"./useControlledHostValueProps-RAl4dK1J.js";import"./TextField-D4EaxVx1.js";import"./Form-3X5C6e4Q.js";import"./Group-BEZrTaXd.js";import"./Input-BWLNXNeV.js";import"./useTextField-CfZJHhZI.js";import"./useFormReset-CU22rOa5.js";import"./useFormValidation-DvJkknbD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
