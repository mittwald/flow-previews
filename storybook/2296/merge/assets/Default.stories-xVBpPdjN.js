import{r as h,j as r}from"./iframe-DdPUg3l1.js";import{P as m}from"./PasswordCreationField-BGP6MBSD.js";import{L as u}from"./Label-CBiKyrhF.js";import{B as g}from"./Button-BArDp6jY.js";import{m as C}from"./IconWarning-CBjvo3Bl.js";import{C as w}from"./CopyButton-CBSdicO-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nfXH0DAB.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./clsx-B-dksMZM.js";import"./index-DfF1Hh-7.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./browser-CdIpgqNn.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./FieldDescription-DwbcR2ZF.js";import"./Text-DjGrgiDc.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./utils-CZc2hRnH.js";import"./Tooltip-BuJmJGxo.js";import"./OverlayArrow-CejAifjZ.js";import"./useFocus-DOBDf5za.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./context-eo9HPzgD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B1QHji0w.js";import"./useControlledState-vD92hbDx.js";import"./useFocusable-Dd42TuHo.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./ContextualHelpTrigger-DQmRaLhL.js";import"./Popover-MzjGOrse.js";import"./useOverlayController-CNjuPWf4.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./Dialog-B4itYT93.js";import"./Button-CezSw_uu.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C4aurJT7.js";import"./RSPContexts-DWbGf7NE.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./Heading-L1WE8Mc-.js";import"./Heading-Daf4DLe6.js";import"./useFieldComponent-CO5pYfeq.js";import"./FieldError-Brd6jVZQ.js";import"./FieldError-DDOFx421.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./useControlledHostValueProps-CH_JLeXe.js";import"./TextField-DOHgtIkq.js";import"./Form-0LpxOP9r.js";import"./Group-D63BMUZR.js";import"./Input--TqM61uI.js";import"./useTextField-DjpmRkhm.js";import"./useFormReset-B7Z_bYQn.js";import"./useFormValidation-ChceI0Vn.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CrAIHNN2.js";import"./remote-C_Lvi_2k.js";import"./react-children-utilities-D942aCYp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
