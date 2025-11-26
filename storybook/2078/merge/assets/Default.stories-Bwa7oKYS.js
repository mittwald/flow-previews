import{j as r,r as C}from"./iframe-D1IXLGfs.js";import{T as t,v as h,g as R}from"./TimeField-AGTx6k1i.js";import{L as o}from"./Label-DqDuDjZM.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./clsx-B-dksMZM.js";import"./Accordion-BzVkjqgY.js";import"./dynamic-pDnrtSWy.js";import"./Button-C4C6Tlp0.js";import"./IconWarning-BxNDhWjd.js";import"./Text-D1LKMi-w.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Co7rtKcb.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./Section-C53WOw1M.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./ActionGroup-Dy6atzM_.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./Image-BtTPpMHP.js";import"./Color-BS8KIqfb.js";import"./Content-BzpcLFjt.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,l as WithControlledValue,m as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,Ar as __namedExportsOrder,Pr as default};
