import{j as r,r as C}from"./iframe-CH4VWYyw.js";import{T as t,v as h,g as R}from"./TimeField-dOwLdr3y.js";import{L as o}from"./Label-DamxdNaK.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./clsx-B-dksMZM.js";import"./Accordion-BejuHqQb.js";import"./dynamic-BXkfH89u.js";import"./Button-CMjimR4T.js";import"./IconWarning-CUVmf0iP.js";import"./Text-DppnPY0e.js";import"./browser-DUOSIs8m.js";import"./utils-B0RtSKxF.js";import"./EmulatedBoldText-BLn1bvyP.js";import"./LoadingSpinner-CM0pL980.js";import"./Button-C7FjL3VL.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C0jF3YAi.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./Section-BYSnoqOE.js";import"./context-DhFeNNrI.js";import"./RSPContexts-COBXgLKc.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./useStatic-rQr5blZX.js";import"./ActionGroup-DDR3DkjN.js";import"./Alert-CaRi4XO8.js";import"./AlertIcon-DXRGAj5W.js";import"./AlertBadge-DfbHta5f.js";import"./Align-Cq_IfJO_.js";import"./Popover-Ca49wibL.js";import"./OverlayTrigger-yyuSztfm.js";import"./TableFooterRow-DWNQ0T6x.js";import"./SkeletonText-fbDfrtFf.js";import"./Avatar-CDLXo50I.js";import"./AvatarStack-BQGqs3x_.js";import"./Badge-BzpkmF7E.js";import"./BigNumber-B6AfKhhh.js";import"./Breadcrumb-DUw-gA4L.js";import"./Link-CdVmxRjb.js";import"./Heading-luYK-1U3.js";import"./Legend-TD40ayv3.js";import"./FileCardList-ULRzupE2.js";import"./Image-BhQQBAtK.js";import"./Color-FPQa_iiC.js";import"./Content-BEbS3ZL_.js";import"./ContextualHelpTrigger-CobzlyXE.js";import"./CounterBadge-C4x4PBwO.js";import"./DonutChart-CvMGXJVi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0rvFNSTI.js";import"./Header-Dzk2QCYF.js";import"./Initials-V1IfrL6u.js";import"./InlineCode-BzROjjVp.js";import"./PopoverTrigger-4JRh7pUL.js";import"./Separator-BvGa7liQ.js";import"./Message-BuA5oc5_.js";import"./MessageSeparator-BpgxY-nM.js";import"./NavigationGroup-C51j7e7Q.js";import"./Notification-CnHkVc1m.js";import"./NotificationProvider-ByUVCGCk.js";import"./ProgressBar-oW1SLDw-.js";import"./Rating-DJkF2UYV.js";import"./Skeleton-BPlxU9Ui.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
