import{r as h,j as r}from"./iframe-C3YinX3s.js";import{P as m}from"./PasswordCreationField-C9yju7Mf.js";import{L as u}from"./Label-vc6tDbdp.js";import{B as g}from"./Button-B9MewrUz.js";import{l as C}from"./IconWarning-6TASCfRR.js";import{C as w}from"./CopyButton-DiLXxiVH.js";import"./index-nuYtCEEu.js";import"./dynamic-BlWCyvfa.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./useFieldComponent-unfYr68o.js";import"./utils-CkQtaKCN.js";import"./Text-2o-hGpxv.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";import"./Group-CAUzS8Z9.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocus-DuIK45_5.js";import"./Input-MWLT5DSw.js";import"./Hidden-RtymAw99.js";import"./TextField-DsXX1XS3.js";import"./RSPContexts-DbIyirJn.js";import"./Form-BCJL5_dO.js";import"./useLabel-6oysTp78.js";import"./Label-uL4LTRYY.js";import"./useTextField-ZOQ3uZr1.js";import"./useFormReset-BgD1M5By.js";import"./useControlledState-DTNxqflL.js";import"./useFocusable-Cpx8bVI7.js";import"./useFormValidation-mKao3Dkx.js";import"./Action-DH4q3DMK.js";import"./context-C6PcGqQE.js";import"./useStatic-K2T119cA.js";import"./browser-DlgIuTl3.js";import"./getActionGroupSlot-DrHtarua.js";import"./FieldDescription-DuQ-cxei.js";import"./Text-40KOd3GJ.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Tooltip-D-7iaRTI.js";import"./ClearPropsContextView-j5diIoDW.js";import"./OverlayArrow-Bx4uFTPE.js";import"./ProgressBar-DHxU0Tpr.js";import"./context-XadyItFl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./ReactAriaControlledValueFix-bFYYT4Mj.js";import"./ContextualHelpTrigger-0F1hJhKz.js";import"./Popover-CtJvJUtO.js";import"./useOverlayController-DQ84rk2f.js";import"./OverlayContextProvider-BLqueKvq.js";import"./Dialog-CifFL37q.js";import"./Button-CBEcZBzR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEE7eirG.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";import"./OverlayTrigger-CcK_N3rx.js";import"./ControlledNotification-8cMq_6Ir.js";import"./Heading-BWuvehcD.js";import"./Heading-DtjPUsAn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DsZPCuYM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BiveWKkE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
