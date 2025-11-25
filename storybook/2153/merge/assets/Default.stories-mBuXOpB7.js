import{j as r,r as C}from"./iframe-D6fHsxXv.js";import{T as t,x as h,F as R}from"./Modal-CGXu-7BF.js";import{L as o}from"./Label-BFZcxZYB.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BLI65pIy.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./context-B25Uysh-.js";import"./Button-CGoM5cNA.js";import"./utils-CX0v46bh.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DBHOSboP.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./browser-CwuXyXeK.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./IconWarning-BQPhDOnw.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Text-BlUe4lOx.js";import"./EmulatedBoldText-C3KADN9z.js";import"./Link-BXLnihOz.js";import"./Button-ByZH5IaN.js";import"./LoadingSpinner-YR9PsY9I.js";import"./ControlledNotification-DW7-c_1o.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Section-DZa8lXDk.js";import"./ActionGroup-Bn5GGBe3.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Heading-CN7gV4ri.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Content-CavwTwhy.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,m as WithControlledValue,l as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,yr as __namedExportsOrder,qr as default};
