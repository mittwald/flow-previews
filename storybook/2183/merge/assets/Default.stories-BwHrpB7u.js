import{r as h,j as r}from"./iframe-BrERPjH0.js";import{P as m}from"./PasswordCreationField-CbZkKAZP.js";import{L as u}from"./Label-CrwXzsx_.js";import{B as g}from"./Button-BwrtrMsn.js";import"./IconChevronDown-BEw7wgap.js";import{I as C}from"./IconDanger-CeY6S6MU.js";import{C as w}from"./CopyButton-MGssY74Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7aVmIf6.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./clsx-B-dksMZM.js";import"./index-DzMVKTvo.js";import"./FieldDescription-6rmHkF1O.js";import"./Text-Bge3UWaD.js";import"./browser-YFSmfPOL.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./utils-DSRl4UW4.js";import"./Tooltip-OK-5DPjj.js";import"./OverlayArrow-gzfZyYcK.js";import"./useFocus-BqH6bZyL.js";import"./ProgressBar-DcK7zEgl.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./context-DvwVEH9h.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C9HQthZh.js";import"./useFocusable-_eZhQVeM.js";import"./useFocusRing-KYw8u7bF.js";import"./Action-ChQTmQoz.js";import"./useStatic-DyRcj1Uc.js";import"./getActionGroupSlot-BcecKfQ6.js";import"./context-kHaIXrog.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./TranslationProvider-C8ab3Gr4.js";import"./IconCircleCheck-C3Iu91N0.js";import"./ContextualHelpTrigger-BXYHfpVC.js";import"./Popover-rrZDRUOl.js";import"./OverlayContextProvider-Br7VoKzI.js";import"./Dialog-ByWgeyFx.js";import"./Button-DaDxLfby.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXQYTWPh.js";import"./RSPContexts-BfqcGdFg.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./SelectionManager-BZAXigYb.js";import"./useEvent-CWpAuNO7.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./useOverlayController-B5SJ3UbO.js";import"./OverlayTrigger-DjPuFV2R.js";import"./IconInfo-B68XsGh2.js";import"./Heading-zBt9nFx9.js";import"./Heading-BBiEQFiM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-WOZCxk1N.js";import"./FieldError-H2u6oDij.js";import"./FieldError-DI8l-yzx.js";import"./useControlledHostValueProps-cnkiYDDE.js";import"./TextField-B3yTMFEr.js";import"./Form-CRLN4oBl.js";import"./Group-D-Zc97xh.js";import"./Input-D0yPZXTG.js";import"./useTextField-BeG6791T.js";import"./useFormReset-Bw5L0YJo.js";import"./useFormValidation-sc5NnAzh.js";import"./Label.module-CUYTf9Jc.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./remote-Fny-y5bx.js";import"./IconCopy-B2YOl2tT.js";import"./react-children-utilities-CBTbxSrU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
