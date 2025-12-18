import{r as h,j as r}from"./iframe-BA9q8iRx.js";import{ao as m,C as g}from"./TimeField-Bb9rzd1E.js";import{L as u}from"./Label-CWXXLsJz.js";import{B as C}from"./Button-DkX1WVEp.js";import{t as w}from"./IconWarning-Ddu6VgyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./clsx-B-dksMZM.js";import"./Accordion-De7o6t37.js";import"./dynamic-HfD9Y7Ln.js";import"./Section-DoGwkV6i.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./utils-QcIDpANH.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn4rMbpf.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./browser-XONib2dq.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./useStatic-CdSu_vHo.js";import"./ActionGroup-BrY_lNP4.js";import"./Alert-BjtrXFM-.js";import"./AlertIcon-GpJO-Z9B.js";import"./AlertBadge-sp5O60vm.js";import"./Text-Ms6nMBSf.js";import"./EmulatedBoldText-W46YB4wy.js";import"./Align-BWXUYBVs.js";import"./Popover-_2bXyvx4.js";import"./OverlayTrigger-Cse3DARB.js";import"./TableFooterRow-Bg6u5xet.js";import"./SkeletonText-DWBy4XXw.js";import"./Avatar-FlDD9lPa.js";import"./AvatarStack-B7IAlHRg.js";import"./Badge-S78DqCsX.js";import"./BigNumber-BUzL_XWj.js";import"./Breadcrumb-BFLF3mqz.js";import"./Link-VeHt-BOj.js";import"./Heading-C0QNs5qM.js";import"./Legend-fwXNEwdb.js";import"./FileCardList-DuDEn_SG.js";import"./Image-D59ZwdJj.js";import"./Color-BbyB7Xdi.js";import"./Content-54YS0aSC.js";import"./ContextualHelpTrigger-CZA_SHxX.js";import"./CounterBadge-KIh2ANDP.js";import"./DonutChart-BD3mO4TH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlyfKHZS.js";import"./Header-BmRR_eGb.js";import"./Initials--0Iralrr.js";import"./InlineCode-DDc9VIyV.js";import"./PopoverTrigger-CMZxvGxV.js";import"./LoadingSpinner-CRPfYfmX.js";import"./Separator-D9V6A4pH.js";import"./Message-DDdzUGgv.js";import"./MessageSeparator-C3c69HOv.js";import"./NavigationGroup-guqWICeG.js";import"./Notification-NBit0Jcr.js";import"./NotificationProvider-CRnsHJPf.js";import"./ProgressBar-B-88x21X.js";import"./Rating-TF40lZ1V.js";import"./Skeleton-COhBmV-c.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Mr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Mr as __namedExportsOrder,Ir as default};
