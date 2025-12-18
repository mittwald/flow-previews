import{j as r,r as C}from"./iframe-DRHo_LWV.js";import{T as t,v as h,g as R}from"./TimeField-B_HIbzDf.js";import{L as o}from"./Label-AMkNKrE4.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./clsx-B-dksMZM.js";import"./Accordion-Droib5ZD.js";import"./dynamic-D3Z_5L-h.js";import"./Button-CoKi_833.js";import"./IconWarning-DOCSYVJb.js";import"./Text-C8Z4-t3h.js";import"./browser-BUXnAcqH.js";import"./utils-BMeX6kjI.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Button-CPvHspkD.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./RSPContexts-CCSm4UT8.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./useStatic-DSG2Vd8Y.js";import"./ActionGroup-BJPHeF0U.js";import"./Alert-BrLW18t8.js";import"./AlertIcon-Db-Zh-lA.js";import"./AlertBadge-D9yH7rZh.js";import"./Align-6v3SCJ3p.js";import"./Popover-BQgBoj25.js";import"./OverlayTrigger-DqaZeyEn.js";import"./TableFooterRow-CBxQ079v.js";import"./SkeletonText-CvydbgeP.js";import"./Avatar-_7zeFz8_.js";import"./AvatarStack-CBG1tO2U.js";import"./Badge-BJlVMabo.js";import"./BigNumber-CJ9-Wooc.js";import"./Breadcrumb-BVcz-IL9.js";import"./Link-C63VPDP4.js";import"./Heading-DXCu3xfs.js";import"./Legend-B9gsZERq.js";import"./FileCardList-DyPlSIwt.js";import"./Image-DxrW6BFv.js";import"./Color-CDrqKcSm.js";import"./Content-hq-FzB-y.js";import"./ContextualHelpTrigger-DKjAVjgi.js";import"./CounterBadge-fUD2-v8M.js";import"./DonutChart-Dyw35JTN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-6-OTG4lb.js";import"./Header-DxKAYmWZ.js";import"./Initials-DwskPZku.js";import"./InlineCode-BLBJzgMQ.js";import"./PopoverTrigger-RQrqTxsS.js";import"./Separator-BgjeAa1-.js";import"./Message-Ji74Yk1U.js";import"./MessageSeparator-DIqoqc2T.js";import"./NavigationGroup-D8tcv3W_.js";import"./Notification-C8xMDKXr.js";import"./NotificationProvider-yYltR2ZZ.js";import"./ProgressBar-13l5oasV.js";import"./Rating-UxQEt7zP.js";import"./Skeleton-DUrZDWEK.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
