import{r as h,j as r}from"./iframe-RCf6-4YI.js";import{P as m}from"./PasswordCreationField-6HUgtf17.js";import{L as u}from"./Label-BRnkJYm7.js";import{B as g}from"./Button-CRZ6FKVD.js";import{m as C}from"./IconWarning-B0h7osnB.js";import{C as w}from"./CopyButton-Cw2aIIM3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYjVHqFc.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./clsx-B-dksMZM.js";import"./index-BOW2unrE.js";import"./Action-3k_Z5Vty.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./browser-CrfZ_U78.js";import"./getActionGroupSlot-D-mME3-D.js";import"./FieldDescription-BvKq_AxB.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./utils-2Kt3K5yX.js";import"./Tooltip-p3ePAPsX.js";import"./OverlayArrow-CuFac9ex.js";import"./useFocus-BlmWIWuz.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./context-C_2cqKRl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DZgLoJPG.js";import"./useControlledState-BQGvOabU.js";import"./useFocusable-CGRcLUlH.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./ContextualHelpTrigger-Dzp0oJ1u.js";import"./Popover-Dgdlkh7G.js";import"./useOverlayController-CujP3Hug.js";import"./OverlayContextProvider-ByS0uwk8.js";import"./Dialog-DSQ8RGJ5.js";import"./Button-BjppKy1G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress--XVd0Ch5.js";import"./RSPContexts-BsLLj1Xv.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";import"./OverlayTrigger-0-HRuxGs.js";import"./Heading-B3B6PIpG.js";import"./Heading-DTpFTjmP.js";import"./useFieldComponent-C9VOsv8D.js";import"./FieldError-KQe80RuS.js";import"./FieldError-C_jxYX-6.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";import"./useControlledHostValueProps-B5mIbE0-.js";import"./TextField-hSyP7KVC.js";import"./Form-DuREI75N.js";import"./Group-CFlsgvT_.js";import"./Input-7NMAjvPw.js";import"./useTextField-BprYoYqM.js";import"./useFormReset-CpZDZfD6.js";import"./useFormValidation-WgNojhOC.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./remote-B1M75xiP.js";import"./react-children-utilities-ChSzWVRl.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
