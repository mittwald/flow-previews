import{j as r}from"./iframe-jfiAx13E.js";import{L as d}from"./Label-D_WQO2Cw.js";import{av as i,aw as l,x as u,F as T}from"./Modal-CX66kXkE.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./index-nYZuwJQK.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./context-Dt1an7Oo.js";import"./ProgressBar-DTac6yq1.js";import"./utils-CFoUdj0t.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-spzJk2X2.js";import"./context-DFW5cDY1.js";import"./Button-DYW2V96T.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";import"./RSPContexts-DlUgI_bO.js";import"./Collection-CucMCaxz.js";import"./CollectionBuilder-BCsWiDMP.js";import"./SelectionIndicator-C0hj0suB.js";import"./Separator-DMHVCuKL.js";import"./browser-Cf72YD6u.js";import"./useStatic-CVt4f_3L.js";import"./FileCardList-CAO-eKhF.js";import"./IconWarning-CLlhNyNw.js";import"./Avatar-BPXSWiS2.js";import"./AlertIcon-jVfRkC0n.js";import"./Image-47p4BbHq.js";import"./Text-DMCt93av.js";import"./EmulatedBoldText-FBIs6RkZ.js";import"./Link-DdfarbSL.js";import"./Button-0JA4DlHg.js";import"./LoadingSpinner-CJ4P62eK.js";import"./ControlledNotification-BWwueiDS.js";import"./Flex-JpE5a0we.js";import"./Accordion-BYK3oF2m.js";import"./Section-Cq5txI6z.js";import"./ActionGroup-Dcl4jstL.js";import"./Alert-DCnUsegh.js";import"./AlertBadge-D_y3r1rE.js";import"./Align-mqpDKLXq.js";import"./AvatarStack-gXbUfOK9.js";import"./BigNumber-CwI26k0c.js";import"./Breadcrumb-CGMeHl1X.js";import"./Heading-CWWH-j0T.js";import"./Legend-BZvuS00K.js";import"./Color-d-NFCGEW.js";import"./TableFooterRow-DFjgJNI2.js";import"./SkeletonText-CfOW8xE6.js";import"./Content-Bomgcrt_.js";import"./CounterBadge-D5P2daU3.js";import"./DonutChart-_pq3fqGA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8tDB-OR.js";import"./Header-DTInGxSd.js";import"./Initials-CiDdSpYl.js";import"./InlineCode-DlpJG5Xb.js";import"./LayoutCard-Cw6bppbD.js";import"./Separator-ChJOjxdw.js";import"./MessageSeparator-uN66Afyw.js";import"./NavigationGroup-DlhGJFiH.js";import"./Notification-CrpH1NXe.js";import"./NotificationProvider-BXIWqn_y.js";import"./ProgressBar-zmyacfUR.js";import"./Rating-BFtwlB2F.js";import"./Skeleton-DFqhkJii.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
