import{j as r}from"./iframe-cN7Lzdqj.js";import{L as d}from"./Label-DyuE6_xN.js";import{aw as i,ax as l,x as u,F as T}from"./Modal-BvOAVp6n.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNnNn_u.js";import"./index-CXWzxOff.js";import"./index-Bef0Wflz.js";import"./useLocalizedStringFormatter-18qmqoa4.js";import"./context-B7YjNia1.js";import"./ProgressBar-CMrNr0Rm.js";import"./utils-Dbx-ArCm.js";import"./Hidden-By4OwLil.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DQRqFpn-.js";import"./context-dEL8T1DH.js";import"./Button-BpQqb0nf.js";import"./useFocusRing-Q59ju1-g.js";import"./useFocusable-DoOUadEO.js";import"./RSPContexts-ClDg08BX.js";import"./Collection-r0rjmb-q.js";import"./CollectionBuilder-_LjgOwmd.js";import"./SelectionIndicator-C0yq45Os.js";import"./Separator-UtafTuzR.js";import"./browser-Bpxr7vqL.js";import"./useStatic-DPvlriRj.js";import"./FileCardList-Dra2QlnJ.js";import"./IconWarning-CUvGDlf1.js";import"./Avatar-C0Asp2HI.js";import"./AlertIcon-C-ExwOqO.js";import"./Image-BlZiNNFc.js";import"./Text-BAPm9zxH.js";import"./EmulatedBoldText-BFt1sMFF.js";import"./Link-oX3ddIiA.js";import"./Button-BwVoLe8A.js";import"./LoadingSpinner-CTzp-c3F.js";import"./ControlledNotification-D1FOQGyy.js";import"./Flex-BoyQ6jvg.js";import"./Accordion-BMxO4mcN.js";import"./Section-DYu4NkMo.js";import"./ActionGroup-DX4E3UwM.js";import"./Alert-DRm0M_-I.js";import"./AlertBadge-CfRun1E8.js";import"./Align-IxMmEPNd.js";import"./AvatarStack-BoJnhU26.js";import"./BigNumber-CuAdmGiQ.js";import"./Breadcrumb-BkaPZxVT.js";import"./Heading-D9z7iTpY.js";import"./Legend-DfNTsat6.js";import"./Color-BKlRe18i.js";import"./TableFooterRow-NzFJ-M5U.js";import"./SkeletonText-DVQeD1Fq.js";import"./Content-D9H_HcvI.js";import"./CounterBadge-BMowvMS6.js";import"./DonutChart-Dcix-a4p.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8aSHTlq.js";import"./Header-Cqwjc9TR.js";import"./Initials-igV7Y7XO.js";import"./InlineCode-xANS0eJt.js";import"./LayoutCard-DaNXTyxD.js";import"./Separator-BbfT4Xvo.js";import"./MessageSeparator-DrM4lDRk.js";import"./NavigationGroup-B6pE0lML.js";import"./Notification-CgZQ9wbr.js";import"./NotificationProvider-CkbZ2iuD.js";import"./ProgressBar-C5OsEuon.js";import"./Rating-Bdupu4iU.js";import"./Skeleton-BvnGctBd.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:x("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const Wr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,Wr as __namedExportsOrder,Or as default};
