import{r as h,j as r}from"./iframe-CcUuYubL.js";import{P as m}from"./PasswordCreationField-yvlpQSwB.js";import{L as u}from"./Label-L2Rin-A2.js";import{B as g}from"./Button-hsF3uCN8.js";import{n as C}from"./IconWarning-BDjC6xOL.js";import{C as w}from"./CopyButton-C5_gtHsD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvCZ3AJL.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./clsx-B-dksMZM.js";import"./index-C6oVqO8J.js";import"./Action-B5lNwIyS.js";import"./context-BjvrdVaN.js";import"./useStatic-DtEAcyvY.js";import"./browser-DepVz5kj.js";import"./getActionGroupSlot-COit0AjF.js";import"./FieldDescription-ADxnhLyC.js";import"./Text-DY9Wsurd.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./utils-B3A9CwVo.js";import"./Tooltip-D2lE8wUb.js";import"./OverlayArrow-LMNtsg17.js";import"./useFocus-tKANsd5T.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./context-BiAKFHSE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cd7zGKC9.js";import"./useFocusable-D38UQMpJ.js";import"./useFocusRing-CorDS6JG.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./ContextualHelpTrigger-CIsf0tZR.js";import"./Popover-DmUHZ-tA.js";import"./useOverlayController-fROC4phl.js";import"./OverlayContextProvider-Br3sAK21.js";import"./Dialog-mDFWR8fO.js";import"./Button-D-Fqqf34.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BQdte7r9.js";import"./RSPContexts-CCIxlK1Q.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";import"./OverlayTrigger-DwWDWrw1.js";import"./Heading-BKl3Ob1v.js";import"./Heading-DhOjZbSl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DfHGJXnI.js";import"./FieldError-BP_boiRG.js";import"./FieldError-BzVPBYcu.js";import"./useControlledHostValueProps-BYMfCzES.js";import"./TextField-CUNLBamV.js";import"./Form-D1MNyHLC.js";import"./Group-C9hqVmoY.js";import"./Input-BEUYik2Y.js";import"./useTextField-hY4MTqvA.js";import"./useFormReset-CtXF-ibf.js";import"./useFormValidation-ey4MT9ZA.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BSrbl83B.js";import"./remote-DfJLRaxN.js";import"./react-children-utilities-B3DRSstD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
