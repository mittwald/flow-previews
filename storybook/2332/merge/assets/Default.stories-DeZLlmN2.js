import{r as h,j as r}from"./iframe-DG8PGYI2.js";import{P as m}from"./PasswordCreationField-2Ru6zgcD.js";import{L as u}from"./Label-BPpS4vmA.js";import{B as g}from"./Button-DsdihroW.js";import{m as C}from"./IconWarning-SSUZ9dob.js";import{C as w}from"./CopyButton-BjYK6oOJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BkMen_On.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./ActionBatch-BRiItlo9.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./browser-CdVMgEWJ.js";import"./getActionGroupSlot-D51i84O1.js";import"./FieldDescription-CFcLkynh.js";import"./Text-DXfg_t75.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./utils-07AIACoX.js";import"./Tooltip-D4Aliizc.js";import"./OverlayArrow-BCWfoCHK.js";import"./useFocus-gEyTxYiG.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./context-CRjwjO0_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CyfWRfC8.js";import"./useControlledState-CbmAXNAC.js";import"./useFocusable-0ogj4vIM.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./ContextualHelpTrigger-DLF5QAzM.js";import"./Popover-BqmVqall.js";import"./OverlayContextProvider-DoYhYc18.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dy-OAjIk.js";import"./RSPContexts-DatC1hy5.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./OverlayTrigger-a3uZGxXg.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./useFieldComponent-CBicToer.js";import"./FieldError-Cib7Ob9Y.js";import"./FieldError-bE1Vz7Na.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";import"./useControlledHostValueProps-B3V_ATuW.js";import"./TextField-OZt28VIy.js";import"./Form-COtDtsRb.js";import"./Group-DnR8HzPq.js";import"./Input-8qA1kF5u.js";import"./useTextField-CqEJ98NX.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-JP8g8ixs.js";import"./remote-DDSPySo3.js";import"./react-children-utilities-0eE0Whvi.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
