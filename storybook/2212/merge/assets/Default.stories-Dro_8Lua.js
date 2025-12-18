import{j as r}from"./iframe-DRHo_LWV.js";import{N as t,v as c,g}from"./TimeField-B_HIbzDf.js";import{L as o}from"./Label-AMkNKrE4.js";import{C as x,a as b}from"./ContextualHelpTrigger-DKjAVjgi.js";import{B as h}from"./Button-CoKi_833.js";import{T as F}from"./Text-C8Z4-t3h.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./clsx-B-dksMZM.js";import"./Accordion-Droib5ZD.js";import"./dynamic-D3Z_5L-h.js";import"./IconWarning-DOCSYVJb.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./Button-CPvHspkD.js";import"./utils-BMeX6kjI.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./RSPContexts-CCSm4UT8.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./browser-BUXnAcqH.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./useStatic-DSG2Vd8Y.js";import"./ActionGroup-BJPHeF0U.js";import"./Alert-BrLW18t8.js";import"./AlertIcon-Db-Zh-lA.js";import"./AlertBadge-D9yH7rZh.js";import"./Align-6v3SCJ3p.js";import"./Popover-BQgBoj25.js";import"./OverlayTrigger-DqaZeyEn.js";import"./TableFooterRow-CBxQ079v.js";import"./SkeletonText-CvydbgeP.js";import"./Avatar-_7zeFz8_.js";import"./AvatarStack-CBG1tO2U.js";import"./Badge-BJlVMabo.js";import"./BigNumber-CJ9-Wooc.js";import"./Breadcrumb-BVcz-IL9.js";import"./Link-C63VPDP4.js";import"./Heading-DXCu3xfs.js";import"./Legend-B9gsZERq.js";import"./FileCardList-DyPlSIwt.js";import"./Image-DxrW6BFv.js";import"./Color-CDrqKcSm.js";import"./Content-hq-FzB-y.js";import"./CounterBadge-fUD2-v8M.js";import"./DonutChart-Dyw35JTN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-6-OTG4lb.js";import"./Header-DxKAYmWZ.js";import"./Initials-DwskPZku.js";import"./InlineCode-BLBJzgMQ.js";import"./PopoverTrigger-RQrqTxsS.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Separator-BgjeAa1-.js";import"./Message-Ji74Yk1U.js";import"./MessageSeparator-DIqoqc2T.js";import"./NavigationGroup-D8tcv3W_.js";import"./Notification-C8xMDKXr.js";import"./NotificationProvider-yYltR2ZZ.js";import"./ProgressBar-13l5oasV.js";import"./Rating-UxQEt7zP.js";import"./Skeleton-DUrZDWEK.js";import"./EmulatedBoldText-B9Wwr1Zx.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
