import{j as r,r as C}from"./iframe-Dswl8YqW.js";import{T as t,x as h,F as R}from"./Modal-CHITtey4.js";import{L as o}from"./Label-CMIuj4QW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DeI_eRCJ.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./context-BYCR6GGl.js";import"./Button-CdXhm7oQ.js";import"./utils-7BbO5OC0.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DC5A8m43.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./browser-BqLtz9Zq.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./IconWarning-Dt5PaZc0.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Image-CfXDNzs_.js";import"./Text-CuuEScv1.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./Link-2_MM-8En.js";import"./Button-BlDvIS3Y.js";import"./LoadingSpinner-B_hOay2Z.js";import"./ControlledNotification-Cdu3NdkW.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./Section-B6yNflVq.js";import"./ActionGroup-DkHaLZ1F.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
