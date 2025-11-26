import{j as r}from"./iframe-D9CYFPXr.js";import{N as t,v as c,g}from"./TimeField-BkJlZcm0.js";import{L as o}from"./Label-CzxcXiJX.js";import{C as x,a as b}from"./ContextualHelpTrigger-Cks81a1U.js";import{B as h}from"./Button-CT-xyYfH.js";import{T as F}from"./Text-DJSjVfmJ.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./clsx-B-dksMZM.js";import"./Accordion-BArRtOTS.js";import"./dynamic-SXs7A3g7.js";import"./IconWarning-jXguM53C.js";import"./Section-CA0EDsnV.js";import"./context-COeqZE1E.js";import"./Button-DG6HuID3.js";import"./utils-yR_DAamg.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dx6KMOks.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./RSPContexts-CiawBZSO.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./browser-D2ZJCi1x.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./useStatic-DvORlamL.js";import"./ActionGroup-Ccd39lHI.js";import"./Alert-CyjiVY23.js";import"./AlertIcon-8Ocv2v3H.js";import"./AlertBadge-CRoJOsK9.js";import"./Align-CLrsPfYt.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./TableFooterRow-OQSmAD90.js";import"./SkeletonText-Dmouj86v.js";import"./Avatar-BkdvaG88.js";import"./AvatarStack-C3tebcLD.js";import"./Badge-C2tMlnMT.js";import"./BigNumber-ijILQR_w.js";import"./Breadcrumb-BxUPCHCP.js";import"./Link-Bm2iZsG_.js";import"./Heading-CavYhFH8.js";import"./Legend-DtDM-qUx.js";import"./FileCardList-D5Ru0u2M.js";import"./Image-DgZNHogz.js";import"./Color-ykv-EnxY.js";import"./Content-2XO0f1sV.js";import"./CounterBadge-V16geG9B.js";import"./DonutChart-D89z5kPJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C5cgRyU-.js";import"./Header-qxJ8AaGd.js";import"./Initials-ft2Izcj0.js";import"./InlineCode-CDcWeZk1.js";import"./PopoverTrigger-CVb4_ztY.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Separator-BrIDoq1X.js";import"./Message-BoLQMEmF.js";import"./MessageSeparator-CgZcEmeT.js";import"./NavigationGroup-CXptzVeF.js";import"./Notification-Kh0NRtbz.js";import"./NotificationProvider-BfspMVKw.js";import"./ProgressBar-B-qkFYl5.js";import"./Rating-D8qxWgHK.js";import"./Skeleton-BBVDwrbz.js";import"./EmulatedBoldText-BO0x8ST2.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
