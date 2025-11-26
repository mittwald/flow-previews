import{j as r,r as C}from"./iframe-D9CYFPXr.js";import{T as t,v as h,g as R}from"./TimeField-BkJlZcm0.js";import{L as o}from"./Label-CzxcXiJX.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./clsx-B-dksMZM.js";import"./Accordion-BArRtOTS.js";import"./dynamic-SXs7A3g7.js";import"./Button-CT-xyYfH.js";import"./IconWarning-jXguM53C.js";import"./Text-DJSjVfmJ.js";import"./browser-D2ZJCi1x.js";import"./utils-yR_DAamg.js";import"./EmulatedBoldText-BO0x8ST2.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Button-DG6HuID3.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dx6KMOks.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./Section-CA0EDsnV.js";import"./context-COeqZE1E.js";import"./RSPContexts-CiawBZSO.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./useStatic-DvORlamL.js";import"./ActionGroup-Ccd39lHI.js";import"./Alert-CyjiVY23.js";import"./AlertIcon-8Ocv2v3H.js";import"./AlertBadge-CRoJOsK9.js";import"./Align-CLrsPfYt.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./TableFooterRow-OQSmAD90.js";import"./SkeletonText-Dmouj86v.js";import"./Avatar-BkdvaG88.js";import"./AvatarStack-C3tebcLD.js";import"./Badge-C2tMlnMT.js";import"./BigNumber-ijILQR_w.js";import"./Breadcrumb-BxUPCHCP.js";import"./Link-Bm2iZsG_.js";import"./Heading-CavYhFH8.js";import"./Legend-DtDM-qUx.js";import"./FileCardList-D5Ru0u2M.js";import"./Image-DgZNHogz.js";import"./Color-ykv-EnxY.js";import"./Content-2XO0f1sV.js";import"./ContextualHelpTrigger-Cks81a1U.js";import"./CounterBadge-V16geG9B.js";import"./DonutChart-D89z5kPJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C5cgRyU-.js";import"./Header-qxJ8AaGd.js";import"./Initials-ft2Izcj0.js";import"./InlineCode-CDcWeZk1.js";import"./PopoverTrigger-CVb4_ztY.js";import"./Separator-BrIDoq1X.js";import"./Message-BoLQMEmF.js";import"./MessageSeparator-CgZcEmeT.js";import"./NavigationGroup-CXptzVeF.js";import"./Notification-Kh0NRtbz.js";import"./NotificationProvider-BfspMVKw.js";import"./ProgressBar-B-qkFYl5.js";import"./Rating-D8qxWgHK.js";import"./Skeleton-BBVDwrbz.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
