import{r as h,j as r}from"./iframe-BzW-9mMD.js";import{L as u}from"./Label-BuckRFL6.js";import{B as g}from"./Button-kdt8pR0M.js";import"./IconApp-BdfgmDZu.js";import{I as C}from"./IconDanger-BcSmAgIr.js";import{C as w}from"./CopyButton-BWQ7ERyO.js";import{P as m}from"./PasswordCreationField-oAkiknMG.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./Label-CGJ_PWGO.js";import"./utils-BrWwMsiw.js";import"./Hidden-Dd9I5XIl.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./Text-V56jcQh9.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./Text-lCB5Bcpt.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BEBWGiXy.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./IconCopy-QVMgkzzg.js";import"./Tooltip-BB5SPmww.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./react-children-utilities-BONyx8Tx.js";import"./Action-B9rUenjA.js";import"./useStatic-CTmF8sLz.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./context-CzkXJT4I.js";import"./dynamic-C266PTaS.js";import"./FieldDescription-DOg-G1iQ.js";import"./TranslationProvider-D7abRsjS.js";import"./IconCircleCheck-CtMIN61o.js";import"./ContextualHelpTrigger-Bzz_8Yob.js";import"./Popover-9e6SMGW8.js";import"./OverlayContextProvider-DkaFHDgz.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./useOverlayController-D-du17tQ.js";import"./OverlayTrigger-CpP3uoqI.js";import"./IconInfo-BMahyVNn.js";import"./Heading-CFmOB0E2.js";import"./Heading-C_mfasv9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CbusyouS.js";import"./FieldError-CEOf2ovw.js";import"./FieldError-YIyLtRkF.js";import"./useControlledHostValueProps-Drs0uCj9.js";import"./TextField-CzlELa-i.js";import"./Form-DVsU3UIy.js";import"./Group-DlZIxVzc.js";import"./Input-DnvETqzY.js";import"./useTextField-DejpfAEP.js";import"./useFormReset-DSNp4f3d.js";import"./useFormValidation-CVoSAArr.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
