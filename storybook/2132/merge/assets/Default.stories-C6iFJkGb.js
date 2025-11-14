import{j as r,r as C}from"./iframe-DNdCOOr1.js";import{T as t,w as h,g as R}from"./TimeField-DqayqNa4.js";import{L as o}from"./Label-Bbx-tQIC.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BQ7eQhTD.js";import"./mergeRefs-BH624zqo.js";import"./index-C14X84sQ.js";import"./clsx-B-dksMZM.js";import"./utils-B65MerL9.js";import"./Accordion-GqFGURFX.js";import"./dynamic-DEywgUGw.js";import"./Button-Bi5-Bex0.js";import"./IconWarning-lDDrCB8Z.js";import"./Text-BN_zs0IC.js";import"./browser-BSEwgGQy.js";import"./EmulatedBoldText-BjpVZV9x.js";import"./LoadingSpinner-nsia9vBo.js";import"./Button-CTVqlwB9.js";import"./ProgressBar-BQC3e8cN.js";import"./Hidden-D3qCYkY1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BCLfHoxJ.js";import"./useFocusRing-D3q76LhO.js";import"./useFocusable-BkrL2nIQ.js";import"./useLocalizedStringFormatter-L5dTHvQZ.js";import"./Section-BzQXps3w.js";import"./context-EmNd6Ym2.js";import"./RSPContexts-CgZ3T_zH.js";import"./Collection-BkL2_ZU0.js";import"./CollectionBuilder-BDT3C6pE.js";import"./SelectionIndicator-CQqAu7NQ.js";import"./Separator-D7EKlcCC.js";import"./useStatic-Dgx0IMN1.js";import"./getActionGroupSlot-DNgGzsK5.js";import"./ActionGroup-BhPNcsGy.js";import"./Alert-CaxDnpaa.js";import"./AlertIcon-CYdwEvIq.js";import"./AlertBadge-CdMzeFyf.js";import"./Align-DpxI1oJO.js";import"./Popover-DIiESuql.js";import"./OverlayTrigger-BJUnFqxk.js";import"./TableFooterRow-B5x5mMbe.js";import"./SkeletonText-CqfjDCms.js";import"./Avatar-CgUdo1aQ.js";import"./AvatarStack-DWPJgHGM.js";import"./Badge-BgTTIbTx.js";import"./BigNumber-D594wqq9.js";import"./Breadcrumb-y5cZeR2r.js";import"./Link-BJ2onDEJ.js";import"./Heading-BPbMgDfP.js";import"./Legend-CaSPY0_W.js";import"./FileCardList-BejHLRjj.js";import"./Image-DK86CSv-.js";import"./Color-BOVYog2E.js";import"./Content-C8VnHirq.js";import"./ContextualHelpTrigger-D8R9IQKT.js";import"./CounterBadge-Dd6bIx0I.js";import"./DonutChart-B0C_0szQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f_Y8GvN_.js";import"./Header-DWZ-pwBZ.js";import"./Initials-D02DEgcF.js";import"./InlineCode-KPAoIiPI.js";import"./PopoverTrigger-KapNJ87s.js";import"./Separator-No_3rbsQ.js";import"./Message-D_3XrhXZ.js";import"./MessageSeparator-xZGmf5bD.js";import"./NavigationGroup-D7A_lQCG.js";import"./Notification-B1Orh41A.js";import"./NotificationProvider-DU3F8vQR.js";import"./ProgressBar-DLcywDx4.js";import"./Rating-B9dQKKgs.js";import"./Skeleton-B6xO-4q0.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Br={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Kr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,l as WithControlledValue,m as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,Kr as __namedExportsOrder,Br as default};
