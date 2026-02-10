import{r as h,j as r}from"./iframe-CKZ3lvbD.js";import{P as m}from"./PasswordCreationField--mOR_li4.js";import{L as u}from"./Label-GTbkpoc2.js";import{B as g}from"./Button-CJlIPsW5.js";import{m as C}from"./IconWarning-C7p1kK8i.js";import{C as w}from"./CopyButton-E7WBIwZo.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BOUQFyUk.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./clsx-B-dksMZM.js";import"./index-4RPaTPNn.js";import"./Action-BaMcPQM3.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./browser-burL9SPa.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./FieldDescription-G4RsrN-A.js";import"./Text-C_6aanp2.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./utils-BvJRIsTz.js";import"./Tooltip-CRp5hwMU.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useFocus-C_IvCZ_Q.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./context-C9x0o2NL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BEfvRwzV.js";import"./useControlledState-DyEi02IX.js";import"./useFocusable-C7EwfmGM.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./ContextualHelpTrigger-CZudG9-6.js";import"./Popover-BaFxU9kE.js";import"./useOverlayController-CXRFu3Cx.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./Dialog-C-Rr13fs.js";import"./Button-BHDMacWQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqAXD8t.js";import"./RSPContexts-lOz_fmPr.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./OverlayTrigger-C1yyJzXM.js";import"./Heading-BKtZSdLW.js";import"./Heading-DdSm2kzR.js";import"./useFieldComponent-sXfPOyeP.js";import"./FieldError-BAXRdB0p.js";import"./FieldError-BqwxYxeF.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";import"./useControlledHostValueProps-el4q383E.js";import"./TextField-JDVnl2nc.js";import"./Form-akuVNupd.js";import"./Group-BXHCPMTj.js";import"./Input-DyPHNw9T.js";import"./useTextField-Bb4VUV4A.js";import"./useFormReset-C_HfEwX8.js";import"./useFormValidation-BpwCrRY1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D6ABJv6G.js";import"./remote-CtPArtkt.js";import"./react-children-utilities-CEk1HmPc.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
