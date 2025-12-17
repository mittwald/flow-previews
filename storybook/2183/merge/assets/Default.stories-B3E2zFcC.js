import{r as h,j as r}from"./iframe-XAYsosb6.js";import{L as u}from"./Label-CXTzqQ-l.js";import{B as g}from"./Button-BxhqNEtZ.js";import"./IconChevronDown-CLHuWDBx.js";import{I as C}from"./IconDanger-Bj-mV1cE.js";import{C as w}from"./CopyButton-BRzuXSSC.js";import{P as m}from"./PasswordCreationField-CzDQWnaU.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./Label-jhCIdmWo.js";import"./utils-mpNKu3Qr.js";import"./Hidden-BXwhawaS.js";import"./IconX-BuTdVgor.js";import"./IconCheck-CATZaWGa.js";import"./Text-D0dxXYDJ.js";import"./browser-CF4AtnhZ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./LoadingSpinner-BRBaERdC.js";import"./ariaLive-Z7x17Sr2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DUrH5qha.js";import"./Button-Bqhr8ozs.js";import"./ProgressBar-BRENX_vG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-vx5-dYQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqzrclQw.js";import"./useFocus-6tpgkBNV.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocusable-NtGVjwhY.js";import"./IconCopy-7y3Z2l0s.js";import"./Tooltip-C7WkMy-y.js";import"./OverlayArrow-TFGGeUC5.js";import"./useControlledState-DFlLGPV3.js";import"./react-children-utilities-Cg3g2yCe.js";import"./Action-Sm7peXAz.js";import"./useStatic-CmdDHpQe.js";import"./getActionGroupSlot-DqFoxLUz.js";import"./context-CKFjVc7D.js";import"./dynamic-CAhkKb1T.js";import"./FieldDescription-hqNXMC67.js";import"./TranslationProvider-DL4m1zaG.js";import"./IconCircleCheck-BUh-K3Rl.js";import"./ContextualHelpTrigger-Bjf4PWBP.js";import"./Popover-CzRLapS0.js";import"./OverlayContextProvider-DPuuuV3g.js";import"./Dialog-B6Y78fzh.js";import"./RSPContexts-DZiMI1g6.js";import"./Collection-DT0XSz1p.js";import"./CollectionBuilder-7sWRFWqn.js";import"./SelectionIndicator-CzOKaojY.js";import"./Separator-CYgNn2Xy.js";import"./SelectionManager-moo-j50V.js";import"./useEvent-BPTus2_l.js";import"./useCollator-Bwevici6.js";import"./FocusScope-utk7FKt0.js";import"./VisuallyHidden-BgleADuq.js";import"./useOverlayController-DOKPWS37.js";import"./OverlayTrigger-BrT7YDVm.js";import"./IconInfo-B1nYgZQn.js";import"./Heading-BGBIb9Bc.js";import"./Heading-BKwICOnt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-D6Qiol7C.js";import"./FieldError-BTxqYaQG.js";import"./FieldError-DKscD9VY.js";import"./useControlledHostValueProps-DQzvB4PR.js";import"./TextField-CqZl5dF7.js";import"./Form-CdD0eZj8.js";import"./Group-70bt3PCe.js";import"./Input-Wj2hF-sT.js";import"./useTextField-CEUS6wUT.js";import"./useFormReset-B8jo6HhA.js";import"./useFormValidation-L0cY-070.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
