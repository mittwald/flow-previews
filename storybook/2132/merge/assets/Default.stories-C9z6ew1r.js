import{j as r,r as C}from"./iframe-D4i-5dyB.js";import{T as t,w as h,g as R}from"./TimeField-CIDukiAs.js";import{L as o}from"./Label-CEhfQve0.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./clsx-B-dksMZM.js";import"./utils-BWp3lM8P.js";import"./Accordion-Dj0W5Sm2.js";import"./dynamic-l-Dsj5TR.js";import"./Button-C5iEQf44.js";import"./IconWarning-CMFXnZAS.js";import"./Text-D-HEhYG-.js";import"./browser-Cwp7r97w.js";import"./EmulatedBoldText-wsap70PU.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Button-BNk2Wifn.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C76p02_s.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./Section-B45bmdbE.js";import"./context-JCcCR3kh.js";import"./RSPContexts-BOewTbeY.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./useStatic-CrV_XbcB.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./ActionGroup-DfaF4Ihs.js";import"./Alert-BxysIfVE.js";import"./AlertIcon-CoWnPqgJ.js";import"./AlertBadge-BCJFFVr-.js";import"./Align-CocHRqnc.js";import"./Popover-DY1u_i9c.js";import"./OverlayTrigger-D7YNoZK9.js";import"./TableFooterRow-BiDC_eis.js";import"./SkeletonText-BbzzKkxz.js";import"./Avatar-DYMDRQ8r.js";import"./AvatarStack-DbQ018zr.js";import"./Badge-DGIykoPb.js";import"./BigNumber-RSRBZBqi.js";import"./Breadcrumb-BFthghoN.js";import"./Link-BEGF2rB2.js";import"./Heading-CqgoaxDG.js";import"./Legend-KRzBJzCP.js";import"./FileCardList-BQXii2c7.js";import"./Image-BTNoRYQ7.js";import"./Color-Bghgw0aE.js";import"./Content-BMj6l0HC.js";import"./ContextualHelpTrigger-BRqpivsA.js";import"./CounterBadge-BbpTGMEL.js";import"./DonutChart-BnHSOvbV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-x47jZjZe.js";import"./Header-1VErbdaO.js";import"./Initials-CFmamtSv.js";import"./InlineCode-DaIVko3u.js";import"./PopoverTrigger-CYaHO_51.js";import"./Separator-D1GKViit.js";import"./Message-DJ9Qzwt8.js";import"./MessageSeparator-W1fEMKQv.js";import"./NavigationGroup-Di6mJdeB.js";import"./Notification-t1-j9nZN.js";import"./NotificationProvider-BqX1J7Mu.js";import"./ProgressBar-Def5jKMV.js";import"./Rating-DvqvLdBT.js";import"./Skeleton-B565HWGQ.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Br={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
