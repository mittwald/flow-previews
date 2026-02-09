import{r as h,j as r}from"./iframe-C-IsL8qN.js";import{P as m}from"./PasswordCreationField-DKwzOMag.js";import{L as u}from"./Label-DkhLxI5s.js";import{B as g}from"./Button-CjTDs8dt.js";import{m as C}from"./IconWarning-Dgpqm1wd.js";import{C as w}from"./CopyButton-BWs1o0wN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bim1MLHd.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./clsx-B-dksMZM.js";import"./index-foeybvdq.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./browser-Dh90zeJL.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./FieldDescription-D7MW9J-R.js";import"./Text-zEwe4Yc5.js";import"./EmulatedBoldText-CbJEOPDL.js";import"./Text-CQAUJHD3.js";import"./utils-CdIT7ixS.js";import"./Tooltip-CZzJ7swh.js";import"./OverlayArrow-Bm7lykW0.js";import"./useFocus-NxQ40LWx.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C05pQW9y.js";import"./context-D_ogfP81.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DAQnos8V.js";import"./useControlledState-D6WUL5XM.js";import"./useFocusable-9aQ0aONO.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./ContextualHelpTrigger-Ct3inmbT.js";import"./Popover-DCVoYnRB.js";import"./useOverlayController-BD3uXW3f.js";import"./OverlayContextProvider-BRD-Zchx.js";import"./Dialog-DhruM_-_.js";import"./Button-Dm6X_wGa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bg3iVugG.js";import"./RSPContexts-dApRMb3S.js";import"./Collection-BO8FiyTI.js";import"./CollectionBuilder-D--x571F.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./Separator-BkJE4Q3g.js";import"./SelectionManager-tiaDTVEq.js";import"./useEvent-BSeSfGFl.js";import"./useCollator-CUcFaXNY.js";import"./FocusScope-DMp-Wrqn.js";import"./VisuallyHidden-B09yhrQ-.js";import"./OverlayTrigger-emDMmbR-.js";import"./Heading-DSZIHu00.js";import"./Heading-BOaxUh_X.js";import"./useFieldComponent-neJhoipE.js";import"./FieldError-B5Qpz102.js";import"./FieldError-CqpMndtu.js";import"./AlertText-DKiC9lQT.js";import"./AlertIcon-Dd6PrMrE.js";import"./useControlledHostValueProps-kWLUtspJ.js";import"./TextField-CscZ9S_C.js";import"./Form-4JRPVmTA.js";import"./Group-BKVJ7l2V.js";import"./Input-CALEgZ95.js";import"./useTextField-JzBNCLnO.js";import"./useFormReset-ovy8PPed.js";import"./useFormValidation-CE50eLV8.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DNWLy5dx.js";import"./remote-HwzzztjA.js";import"./react-children-utilities-BJtIfD6A.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
