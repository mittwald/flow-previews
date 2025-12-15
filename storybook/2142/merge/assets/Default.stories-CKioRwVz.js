import{j as r,r as C}from"./iframe-Cir6MTA5.js";import{T as t,v as h,g as R}from"./TimeField-C03E55-6.js";import{L as o}from"./Label-CD63mnMj.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./clsx-B-dksMZM.js";import"./Accordion--LccsWdU.js";import"./dynamic-C54c6iDK.js";import"./Button-C2A0kxO-.js";import"./IconWarning-DBAWKFVr.js";import"./Text-NWoOtLYD.js";import"./browser-DYyRc_is.js";import"./utils-D3-KZmBM.js";import"./EmulatedBoldText-CMuEkZzQ.js";import"./LoadingSpinner-Cbn--oub.js";import"./Button-CVO9gXsi.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DCFpjcCd.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./Section-CsBFEvqK.js";import"./context-uB_U-Ll-.js";import"./RSPContexts-DBL9OuDo.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./useStatic-lrFYKeJo.js";import"./ActionGroup-CQUlrc02.js";import"./Alert-Cwf4c51S.js";import"./AlertIcon-THsOUfa2.js";import"./AlertBadge-DQEistgl.js";import"./Align-CbiGC6Hm.js";import"./Popover-BnMf836y.js";import"./OverlayTrigger-D8wWf3qw.js";import"./TableFooterRow-Bn7VMJfM.js";import"./SkeletonText-BA7fTM6y.js";import"./Avatar-D1LE7OHQ.js";import"./AvatarStack-BjHAHFtd.js";import"./Badge-Dhmh7ReA.js";import"./BigNumber-Bdldp5Vs.js";import"./Breadcrumb-BgYb3jvA.js";import"./Link-DL2nVgdW.js";import"./Heading-C81Sjkat.js";import"./Legend-DNzEDg1V.js";import"./FileCardList-CdiBIUzb.js";import"./Image-Bmzle01D.js";import"./Color-DwuvilaM.js";import"./Content-sj2198_-.js";import"./ContextualHelpTrigger-Sr6lf3NJ.js";import"./CounterBadge-Blil8ag9.js";import"./DonutChart-CdK4877Z.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BjZ4vO5b.js";import"./Header-BqKpe2dR.js";import"./Initials-DaUoDTnU.js";import"./InlineCode-BDWrnhvQ.js";import"./PopoverTrigger-BDtzPLEN.js";import"./Separator-DYtvdLSf.js";import"./Message-BEPzM24B.js";import"./MessageSeparator-DCUCvEOC.js";import"./NavigationGroup-BZDK6UKv.js";import"./Notification-CZZ3xhm4.js";import"./NotificationProvider-DrRbbE28.js";import"./ProgressBar-DTjakmLk.js";import"./Rating-C6rR6C1R.js";import"./Skeleton-By5OXPEA.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
