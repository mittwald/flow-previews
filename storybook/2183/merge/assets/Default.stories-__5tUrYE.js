import{r as h,j as r}from"./iframe-DlUIOFNy.js";import{L as u}from"./Label-CGwVPH1O.js";import{B as g}from"./Button-Dl6JLVXM.js";import"./IconChevronDown-Bvah6r8d.js";import{I as C}from"./IconDanger-BLbNCJeo.js";import{C as w}from"./CopyButton-DVWtLTEK.js";import{P as m}from"./PasswordCreationField-V5YJpBq0.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Label-BWWfC27r.js";import"./utils-D5WuX1D5.js";import"./Hidden-DbzQNSr6.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CtPiqESW.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./IconCopy-B5FbNgDF.js";import"./Tooltip-Cbs1VNrO.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./react-children-utilities-DEw2lUB2.js";import"./Action-DzYQUuQL.js";import"./useStatic-DqJu_u90.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./context-C1nEnAeo.js";import"./dynamic-C-FseJcp.js";import"./FieldDescription-DPdg4_M-.js";import"./TranslationProvider-BulyHFyg.js";import"./IconCircleCheck-Bc8CsmMT.js";import"./ContextualHelpTrigger-hQptdEEs.js";import"./Popover-Dfl3inpo.js";import"./OverlayContextProvider-Dbmlj_yb.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./useOverlayController-BohxaX_S.js";import"./OverlayTrigger-Dq2JTY6p.js";import"./IconInfo-DM35t2dP.js";import"./Heading-D1MelrAZ.js";import"./Heading-Bf3Yh3j7.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BCd2OtQE.js";import"./FieldError-C8EsLVOD.js";import"./FieldError-D3SsQY4t.js";import"./useControlledHostValueProps-DysohucN.js";import"./TextField-C8QCetjF.js";import"./Form-BRPBFW97.js";import"./Group-CJxedSyo.js";import"./Input-lQWi8Z-8.js";import"./useTextField-OgNJ0RzM.js";import"./useFormReset-Bdg2NgY2.js";import"./useFormValidation-DSe2mHjT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
