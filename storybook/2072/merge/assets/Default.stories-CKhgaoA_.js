import{j as r,r as C}from"./iframe-C3jdvmqu.js";import{T as t,v as h,g as R}from"./TimeField-4_Mf2v55.js";import{L as o}from"./Label-BPYJm5LL.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./clsx-B-dksMZM.js";import"./Accordion-FKbZiReZ.js";import"./dynamic-D5Qg0LEH.js";import"./Button-crBjhbVY.js";import"./IconWarning-B93hkDaL.js";import"./Text-by0jRlX4.js";import"./browser-p2mffppm.js";import"./utils-Bnm0gbPW.js";import"./EmulatedBoldText-PDbCHW4-.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./Button-BIwZHIrt.js";import"./ProgressBar-BH_IM9sd.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-KJ9X431h.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./Section-Bx-16ZS-.js";import"./context-D0_2-R3T.js";import"./RSPContexts-n5O79WrS.js";import"./Collection-D2JualPB.js";import"./CollectionBuilder-BOCut2o5.js";import"./SelectionIndicator-DyngYSm7.js";import"./Separator-D3R6VXnX.js";import"./useStatic-BVkn_XG8.js";import"./ActionGroup-CZRMzFyT.js";import"./Alert-CkW0J4wt.js";import"./AlertIcon-DkwIeu6U.js";import"./AlertBadge-CiHrZnCZ.js";import"./Align-BjsqKpbB.js";import"./Popover-5jsA4dKH.js";import"./OverlayTrigger-BPs2PyhK.js";import"./TableFooterRow-BU8Fd1Lx.js";import"./SkeletonText-lLq3Nt65.js";import"./Avatar-BVwW1qb5.js";import"./AvatarStack-BnFAp99k.js";import"./Badge-DENltzo8.js";import"./BigNumber-DmXS7ieK.js";import"./Breadcrumb-qUZ49k0X.js";import"./Link-DBmT5h1W.js";import"./Heading-BZdy5d_w.js";import"./Legend-CKZ_UC0-.js";import"./FileCardList-D4czHQYY.js";import"./Image-Bj9hH710.js";import"./Color-DZdqnqJH.js";import"./Content-DtarLJHH.js";import"./ContextualHelpTrigger-B0sXZW5u.js";import"./CounterBadge-98HPnaLR.js";import"./DonutChart-CCSB7cQU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r71mMCrS.js";import"./Header-BIxUDaZT.js";import"./Initials-DZ9C76i2.js";import"./InlineCode-D49EgOnY.js";import"./PopoverTrigger-DyZPD5PV.js";import"./Separator-BI7SSrQ8.js";import"./Message-DX3VPOKF.js";import"./MessageSeparator-DKdhmfRa.js";import"./NavigationGroup-polgb4J2.js";import"./Notification-Scrbw5NS.js";import"./NotificationProvider-4ZdYgXNT.js";import"./ProgressBar-vbm8y321.js";import"./Rating-pSJ9uJqF.js";import"./Skeleton-1uRc-6la.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const Br=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,l as WithControlledValue,m as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,Br as __namedExportsOrder,Ar as default};
