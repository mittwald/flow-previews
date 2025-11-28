import{j as r,r as C}from"./iframe-C3akzpV1.js";import{T as t,v as h,g as R}from"./TimeField-DAn-563Z.js";import{L as o}from"./Label-DuiJLVmM.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DqwY9XEq.js";import"./mergeRefs-BXY85axa.js";import"./index-BSfx5kph.js";import"./clsx-B-dksMZM.js";import"./Accordion-CnycAhcp.js";import"./dynamic-O2zPY50D.js";import"./Button-C_UT-1QU.js";import"./IconWarning-C4SgI6OV.js";import"./Text-ItbFkn--.js";import"./browser-mTtOjkkJ.js";import"./utils-FFzu0Pw2.js";import"./EmulatedBoldText-B3LO_M0J.js";import"./LoadingSpinner-DNlomGtB.js";import"./Button-D5o5rXyo.js";import"./ProgressBar-72_GXUSH.js";import"./Hidden-Bcrhq7St.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BgN9eCaX.js";import"./useFocusRing-DQs4OSUU.js";import"./useFocusable-CC2L6-Hl.js";import"./useLocalizedStringFormatter-BXg2U2e2.js";import"./Section-5SrLYku3.js";import"./context-CfnX_riS.js";import"./RSPContexts-DVc_zOA3.js";import"./Collection-DTGfPiJx.js";import"./CollectionBuilder-BExMR5Fd.js";import"./SelectionIndicator-B2cJMogF.js";import"./Separator-C1Ah5vxC.js";import"./useStatic-DFnfS72f.js";import"./ActionGroup-BTjiPvx2.js";import"./Alert-DSPCig_4.js";import"./AlertIcon-KuJe6yIM.js";import"./AlertBadge-DKJSIQMi.js";import"./Align-CXBZBCXD.js";import"./Popover-Ds9ANfz7.js";import"./OverlayTrigger-BeAJLsRg.js";import"./TableFooterRow-DBL3SUB0.js";import"./SkeletonText-CSIMGEyC.js";import"./Avatar-CfRfmXe3.js";import"./AvatarStack-DoZxY-NC.js";import"./Badge-A9sRZW6O.js";import"./BigNumber-DDJD3MBR.js";import"./Breadcrumb-Cdr0vGx4.js";import"./Link-Yn6v2d1m.js";import"./Heading-Dx6berQj.js";import"./Legend-D_mPT_Dz.js";import"./FileCardList-DVpuYyK9.js";import"./Image-dY_1AQAY.js";import"./Color-C0tW3a4A.js";import"./Content-D_Dg4gNK.js";import"./ContextualHelpTrigger-B4NbXTkX.js";import"./CounterBadge-2MxVkVfw.js";import"./DonutChart-DDZkVGZJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQeVhZkV.js";import"./Header-P2jmXQ5Q.js";import"./Initials-CcNlP_Ax.js";import"./InlineCode-kLchHmKQ.js";import"./PopoverTrigger-DBjbYvg8.js";import"./Separator-B02tK38r.js";import"./Message-DJdW1Dm_.js";import"./MessageSeparator-Ckz-pkPt.js";import"./NavigationGroup-G3mKXWuk.js";import"./Notification-Bn7dQSYD.js";import"./NotificationProvider-RbXQAcKo.js";import"./ProgressBar-BfOMQEaa.js";import"./Rating-DL9Taqdj.js";import"./Skeleton-sg2lGCG1.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
