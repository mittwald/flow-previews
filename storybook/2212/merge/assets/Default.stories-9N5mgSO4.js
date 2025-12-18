import{j as r}from"./iframe-DRHo_LWV.js";import{a,v as x,g as z}from"./TimeField-B_HIbzDf.js";import{L as s}from"./Label-AMkNKrE4.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./clsx-B-dksMZM.js";import"./Accordion-Droib5ZD.js";import"./dynamic-D3Z_5L-h.js";import"./Button-CoKi_833.js";import"./IconWarning-DOCSYVJb.js";import"./Text-C8Z4-t3h.js";import"./browser-BUXnAcqH.js";import"./utils-BMeX6kjI.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Button-CPvHspkD.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./RSPContexts-CCSm4UT8.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./useStatic-DSG2Vd8Y.js";import"./ActionGroup-BJPHeF0U.js";import"./Alert-BrLW18t8.js";import"./AlertIcon-Db-Zh-lA.js";import"./AlertBadge-D9yH7rZh.js";import"./Align-6v3SCJ3p.js";import"./Popover-BQgBoj25.js";import"./OverlayTrigger-DqaZeyEn.js";import"./TableFooterRow-CBxQ079v.js";import"./SkeletonText-CvydbgeP.js";import"./Avatar-_7zeFz8_.js";import"./AvatarStack-CBG1tO2U.js";import"./Badge-BJlVMabo.js";import"./BigNumber-CJ9-Wooc.js";import"./Breadcrumb-BVcz-IL9.js";import"./Link-C63VPDP4.js";import"./Heading-DXCu3xfs.js";import"./Legend-B9gsZERq.js";import"./FileCardList-DyPlSIwt.js";import"./Image-DxrW6BFv.js";import"./Color-CDrqKcSm.js";import"./Content-hq-FzB-y.js";import"./ContextualHelpTrigger-DKjAVjgi.js";import"./CounterBadge-fUD2-v8M.js";import"./DonutChart-Dyw35JTN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-6-OTG4lb.js";import"./Header-DxKAYmWZ.js";import"./Initials-DwskPZku.js";import"./InlineCode-BLBJzgMQ.js";import"./PopoverTrigger-RQrqTxsS.js";import"./Separator-BgjeAa1-.js";import"./Message-Ji74Yk1U.js";import"./MessageSeparator-DIqoqc2T.js";import"./NavigationGroup-D8tcv3W_.js";import"./Notification-C8xMDKXr.js";import"./NotificationProvider-yYltR2ZZ.js";import"./ProgressBar-13l5oasV.js";import"./Rating-UxQEt7zP.js";import"./Skeleton-DUrZDWEK.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/TextArea",component:a,render:e=>r.jsx(a,{onChange:f("onChange"),...e,children:r.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(a,{...e,children:[r.jsx(s,{children:"Public Key"}),r.jsx(x,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(a,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(s,{children:"Public Key"})})},l={render:e=>r.jsx(a,{...e,placeholder:"ssh-rsa...",children:r.jsx(s,{children:"Public Key"})})},m={render:e=>r.jsxs(a,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Public Key"}),r.jsx(z,{children:"Invalid Key"})]})},d={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...b.parameters?.docs?.source}}};const Ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,p as Required,h as Resizeable,d as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,c as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithPlaceholder,Ir as __namedExportsOrder,Mr as default};
