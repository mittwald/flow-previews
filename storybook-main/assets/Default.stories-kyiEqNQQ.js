import{j as r}from"./iframe-BA9q8iRx.js";import{N as t,v as c,g}from"./TimeField-Bb9rzd1E.js";import{L as o}from"./Label-CWXXLsJz.js";import{C as x,a as b}from"./ContextualHelpTrigger-CZA_SHxX.js";import{B as h}from"./Button-DkX1WVEp.js";import{T as F}from"./Text-Ms6nMBSf.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./clsx-B-dksMZM.js";import"./Accordion-De7o6t37.js";import"./dynamic-HfD9Y7Ln.js";import"./IconWarning-Ddu6VgyQ.js";import"./Section-DoGwkV6i.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./utils-QcIDpANH.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn4rMbpf.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./browser-XONib2dq.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./useStatic-CdSu_vHo.js";import"./ActionGroup-BrY_lNP4.js";import"./Alert-BjtrXFM-.js";import"./AlertIcon-GpJO-Z9B.js";import"./AlertBadge-sp5O60vm.js";import"./Align-BWXUYBVs.js";import"./Popover-_2bXyvx4.js";import"./OverlayTrigger-Cse3DARB.js";import"./TableFooterRow-Bg6u5xet.js";import"./SkeletonText-DWBy4XXw.js";import"./Avatar-FlDD9lPa.js";import"./AvatarStack-B7IAlHRg.js";import"./Badge-S78DqCsX.js";import"./BigNumber-BUzL_XWj.js";import"./Breadcrumb-BFLF3mqz.js";import"./Link-VeHt-BOj.js";import"./Heading-C0QNs5qM.js";import"./Legend-fwXNEwdb.js";import"./FileCardList-DuDEn_SG.js";import"./Image-D59ZwdJj.js";import"./Color-BbyB7Xdi.js";import"./Content-54YS0aSC.js";import"./CounterBadge-KIh2ANDP.js";import"./DonutChart-BD3mO4TH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlyfKHZS.js";import"./Header-BmRR_eGb.js";import"./Initials--0Iralrr.js";import"./InlineCode-DDc9VIyV.js";import"./PopoverTrigger-CMZxvGxV.js";import"./LoadingSpinner-CRPfYfmX.js";import"./Separator-D9V6A4pH.js";import"./Message-DDdzUGgv.js";import"./MessageSeparator-C3c69HOv.js";import"./NavigationGroup-guqWICeG.js";import"./Notification-NBit0Jcr.js";import"./NotificationProvider-CRnsHJPf.js";import"./ProgressBar-B-88x21X.js";import"./Rating-TF40lZ1V.js";import"./Skeleton-COhBmV-c.js";import"./EmulatedBoldText-W46YB4wy.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,Ir as __namedExportsOrder,vr as default};
