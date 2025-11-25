import{j as r}from"./iframe-jfiAx13E.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-CX66kXkE.js";import{L as o}from"./Label-D_WQO2Cw.js";import{B as h}from"./Button-0JA4DlHg.js";import{T as F}from"./Text-DMCt93av.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-spzJk2X2.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./index-nYZuwJQK.js";import"./context-DFW5cDY1.js";import"./Button-DYW2V96T.js";import"./utils-CFoUdj0t.js";import"./ProgressBar-DTac6yq1.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dt1an7Oo.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";import"./RSPContexts-DlUgI_bO.js";import"./Collection-CucMCaxz.js";import"./CollectionBuilder-BCsWiDMP.js";import"./SelectionIndicator-C0hj0suB.js";import"./Separator-DMHVCuKL.js";import"./browser-Cf72YD6u.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./useStatic-CVt4f_3L.js";import"./FileCardList-CAO-eKhF.js";import"./IconWarning-CLlhNyNw.js";import"./Avatar-BPXSWiS2.js";import"./AlertIcon-jVfRkC0n.js";import"./Image-47p4BbHq.js";import"./Link-DdfarbSL.js";import"./ControlledNotification-BWwueiDS.js";import"./LoadingSpinner-CJ4P62eK.js";import"./Flex-JpE5a0we.js";import"./Accordion-BYK3oF2m.js";import"./Section-Cq5txI6z.js";import"./ActionGroup-Dcl4jstL.js";import"./Alert-DCnUsegh.js";import"./AlertBadge-D_y3r1rE.js";import"./Align-mqpDKLXq.js";import"./AvatarStack-gXbUfOK9.js";import"./BigNumber-CwI26k0c.js";import"./Breadcrumb-CGMeHl1X.js";import"./Heading-CWWH-j0T.js";import"./Legend-BZvuS00K.js";import"./Color-d-NFCGEW.js";import"./TableFooterRow-DFjgJNI2.js";import"./SkeletonText-CfOW8xE6.js";import"./Content-Bomgcrt_.js";import"./CounterBadge-D5P2daU3.js";import"./DonutChart-_pq3fqGA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8tDB-OR.js";import"./Header-DTInGxSd.js";import"./Initials-CiDdSpYl.js";import"./InlineCode-DlpJG5Xb.js";import"./LayoutCard-Cw6bppbD.js";import"./Separator-ChJOjxdw.js";import"./MessageSeparator-uN66Afyw.js";import"./NavigationGroup-DlhGJFiH.js";import"./Notification-CrpH1NXe.js";import"./NotificationProvider-BXIWqn_y.js";import"./ProgressBar-zmyacfUR.js";import"./Rating-BFtwlB2F.js";import"./Skeleton-DFqhkJii.js";import"./EmulatedBoldText-FBIs6RkZ.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,_r as __namedExportsOrder,Hr as default};
