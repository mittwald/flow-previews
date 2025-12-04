import{j as r,r as C}from"./iframe-HbHx0dbr.js";import{T as t,v as h,g as R}from"./TimeField-BLEhWuna.js";import{L as o}from"./Label-VVCD1n3I.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./clsx-B-dksMZM.js";import"./Accordion-Cwt2fJuI.js";import"./dynamic-CRi6gEUI.js";import"./Button-CJvGBAVv.js";import"./IconWarning-DPh3xjyu.js";import"./Text-CkAqcx4z.js";import"./browser-CXwhmTUt.js";import"./utils-CsDSVDn1.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1asaoMu.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./Section-qE36af1s.js";import"./context-CWzv3puv.js";import"./RSPContexts-B_V-VNLp.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./ActionGroup-CSmxA-fN.js";import"./Alert-CbU_YA_s.js";import"./AlertIcon-C6IAHzWi.js";import"./AlertBadge-fEpk4vNR.js";import"./Align-BAwYX1Nz.js";import"./Popover-CJs7Vohs.js";import"./OverlayTrigger-CSEkhglm.js";import"./TableFooterRow-Dxi7XPrZ.js";import"./SkeletonText-S65PrCT7.js";import"./Avatar-JTrpRsew.js";import"./AvatarStack-CSJDeeUe.js";import"./Badge-CX4hh3lM.js";import"./BigNumber-BJXYLVAq.js";import"./Breadcrumb---Gml5SM.js";import"./Link-COwhy3J8.js";import"./Heading-DMPTZuUQ.js";import"./Legend-BwAXmxEK.js";import"./FileCardList-BbAMywa1.js";import"./Image-BUcGulw7.js";import"./Color-ByIQXf4O.js";import"./Content-C349RzEO.js";import"./ContextualHelpTrigger-BipkOUK_.js";import"./CounterBadge-N87a1HO-.js";import"./DonutChart-BGqYnoyK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-bUnPZbIJ.js";import"./Header-DefiEy2z.js";import"./Initials-Du-nuxgE.js";import"./InlineCode-DJLgs5TT.js";import"./PopoverTrigger-CHVTJqWF.js";import"./Separator-BhsBp5gG.js";import"./Message-C6tvgpf9.js";import"./MessageSeparator-DbNKZGcR.js";import"./NavigationGroup-DC8ViXMv.js";import"./Notification-DEJbziLS.js";import"./NotificationProvider-BOVzW3FW.js";import"./ProgressBar-cZpj8lZD.js";import"./Rating-EYgTbQvW.js";import"./Skeleton-Bn8XpxuJ.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
