import{j as r,r as C}from"./iframe-6pmDYBey.js";import{T as t,v as h,g as R}from"./TimeField-DUzJzX0v.js";import{L as o}from"./Label-BogZLDOy.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Bcab5p0Y.js";import"./mergeRefs-KX5b3W0M.js";import"./index-D7Awe5Nv.js";import"./clsx-B-dksMZM.js";import"./Accordion-Buaowi87.js";import"./dynamic-PozyV8BB.js";import"./Button-Bz4oJBBk.js";import"./IconWarning-D2rzgsKD.js";import"./Text-DCl4bIjP.js";import"./browser-Curoa5u0.js";import"./utils-CclRT-8x.js";import"./EmulatedBoldText-CBUClY1I.js";import"./LoadingSpinner-D_0Hr43y.js";import"./Button-Bf_N8W1N.js";import"./ProgressBar-DSMryv5h.js";import"./Hidden-DGWIRGX2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D-9qd8rr.js";import"./useFocusRing-CIK_JYa4.js";import"./useFocusable-k6dtakHQ.js";import"./useLocalizedStringFormatter-Cc63-Qc3.js";import"./Section-Byh4aHn5.js";import"./context-CTAsMywl.js";import"./RSPContexts-BHIIqogi.js";import"./Collection-BzIHwVQs.js";import"./CollectionBuilder-s3gBlVxZ.js";import"./SelectionIndicator-BUH0wchX.js";import"./Separator-C2Ax_jJi.js";import"./useStatic-Bv4Ps5t5.js";import"./ActionGroup-8lne9rS6.js";import"./Alert-ZPf2dT69.js";import"./AlertIcon-mseo8G9-.js";import"./AlertBadge-DrOGK01L.js";import"./Align-Sifn-_cY.js";import"./Popover-Dd0-1EJu.js";import"./OverlayTrigger-DSzgE-rS.js";import"./TableFooterRow-BRY3iv1g.js";import"./SkeletonText-BkaviKx9.js";import"./Avatar-COqmIfCf.js";import"./AvatarStack-Cs-Y5kji.js";import"./Badge-B7ODamfh.js";import"./BigNumber-couKEJe3.js";import"./Breadcrumb-WdUL6sK0.js";import"./Link-CJ38LeDn.js";import"./Heading-6phWYNIK.js";import"./Legend-B78FuCBX.js";import"./FileCardList-CHBLnU9n.js";import"./Image-Dcyti7CF.js";import"./Color-BRGYsDjI.js";import"./Content-CuYBsCwt.js";import"./ContextualHelpTrigger-vqI_wpNC.js";import"./CounterBadge-DyAdtC5E.js";import"./DonutChart-DZLxrNmm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BknOPFCn.js";import"./Header-DUij04U4.js";import"./Initials-DRBi35hY.js";import"./InlineCode-DxO_Ztsz.js";import"./PopoverTrigger-BKP_QpSy.js";import"./Separator-C65il62N.js";import"./Message-A68FCta2.js";import"./MessageSeparator-YwFb4hEt.js";import"./NavigationGroup-BryWzwah.js";import"./Notification-QlklNnDw.js";import"./NotificationProvider-DiOqRdCr.js";import"./ProgressBar-bXP38px7.js";import"./Rating-DQiv0-CI.js";import"./Skeleton-BwBlZATo.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
