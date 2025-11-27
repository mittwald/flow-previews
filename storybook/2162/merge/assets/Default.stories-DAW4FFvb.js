import{j as r,r as C}from"./iframe-CW_1kzn8.js";import{T as t,v as h,g as R}from"./TimeField-O8dBCN92.js";import{L as o}from"./Label-C6A80iGS.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./clsx-B-dksMZM.js";import"./Accordion-C2JQB3aN.js";import"./dynamic-CvIdWWig.js";import"./Button-DG8ItREn.js";import"./IconWarning-CwkyBxVN.js";import"./Text-Bt12Aiuy.js";import"./browser-DYjBW3Mh.js";import"./utils-DECz7q9i.js";import"./EmulatedBoldText-CjYCMvu1.js";import"./LoadingSpinner-DDEfeVZt.js";import"./Button-CKDlZl9E.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g9M5CTWm.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./Section-BtQd622a.js";import"./context-FK80ZNI-.js";import"./RSPContexts-jLoiaaIz.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./useStatic-CyHKbDme.js";import"./ActionGroup-CMigRbOL.js";import"./Alert-wmQE4eTZ.js";import"./AlertIcon-C9ZLFLyq.js";import"./AlertBadge-DK8CoaVP.js";import"./Align-BVXc73zR.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./TableFooterRow-Dz133oSH.js";import"./SkeletonText-bNjOl8Lj.js";import"./Avatar-nxK6ayEs.js";import"./AvatarStack-C5K3zfKN.js";import"./Badge-B4vhdI6d.js";import"./BigNumber-BCtOXUOq.js";import"./Breadcrumb-UN90IgbC.js";import"./Link-BjJvsD30.js";import"./Heading-BDPW60Tv.js";import"./Legend-Dv9medtK.js";import"./FileCardList-BzJWWuzT.js";import"./Image-B8909EtY.js";import"./Color-yZsfwNHB.js";import"./Content-NVky5ofe.js";import"./ContextualHelpTrigger-NzhCC0hh.js";import"./CounterBadge-DRnfRmyT.js";import"./DonutChart-DfWQ2yNh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_-uwk5j.js";import"./Header-CIgs80Lw.js";import"./Initials-CtZJGVAE.js";import"./InlineCode-BUUGDwVl.js";import"./PopoverTrigger-C7J2NazX.js";import"./Separator-CSUhftqZ.js";import"./Message-gD0LEZWb.js";import"./MessageSeparator-f8F7ZaUG.js";import"./NavigationGroup-kj_r2PG6.js";import"./Notification-Fp2frcIZ.js";import"./NotificationProvider-Cm0Lnyko.js";import"./ProgressBar-CKvf8kaJ.js";import"./Rating-BH2oI4ZI.js";import"./Skeleton-BlS-zqmu.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
