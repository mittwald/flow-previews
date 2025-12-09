import{j as r,r as C}from"./iframe-BfTJ8OoU.js";import{T as t,v as h,g as R}from"./TimeField-Dni6ZWL5.js";import{L as o}from"./Label-OsD2mDHN.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./clsx-B-dksMZM.js";import"./Accordion-EetxEBhv.js";import"./dynamic-BLLy2Odl.js";import"./Button-CAnEum-p.js";import"./IconWarning-CnDmU8KM.js";import"./Text-ChPpwgcs.js";import"./browser-_NOMM9Cq.js";import"./utils-CAkX6XFC.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DfwvGs8v.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./Section-ieM08Mfc.js";import"./context-DqfyIwOm.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";import"./ActionGroup-BXvzv2B4.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./AlertBadge-zn-1W_0t.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./Avatar-DBLpjnAX.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Link-fRrhQgjx.js";import"./Heading-C_Cd2XWG.js";import"./Legend-D59IIsbr.js";import"./FileCardList-Crd4-rJi.js";import"./Image-D7QRJIgn.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
