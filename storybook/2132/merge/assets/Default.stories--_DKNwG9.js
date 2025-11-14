import{j as r,r as C}from"./iframe-7JAb-nDd.js";import{T as t,w as h,g as R}from"./TimeField-CNjMofKD.js";import{L as o}from"./Label-Cq-3tAPE.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./clsx-B-dksMZM.js";import"./utils-COcVuwM3.js";import"./Accordion-DYtLRAos.js";import"./dynamic-DAEQlq7s.js";import"./Button-C274DNXY.js";import"./IconWarning-CrvOn5qf.js";import"./Text-Cjgg9Pe-.js";import"./browser-ES8JYesh.js";import"./EmulatedBoldText-DX6Otmj0.js";import"./LoadingSpinner-Ds95wBE7.js";import"./Button-CcXbzio8.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DufoU_2Q.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./Section--2nSNqYe.js";import"./context-49irLi2e.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./useStatic-BMWFl-h1.js";import"./getActionGroupSlot-o5MzPqMr.js";import"./ActionGroup-BD30m3yb.js";import"./Alert-CLiUa977.js";import"./AlertIcon-WJ9tZl6s.js";import"./AlertBadge-AOM4FSHZ.js";import"./Align-B0gCmpdf.js";import"./Popover-BcXGNCBW.js";import"./OverlayTrigger-DS9RFxPY.js";import"./TableFooterRow-ZODofEH1.js";import"./SkeletonText-B9c0QkCc.js";import"./Avatar-6DFit7Ya.js";import"./AvatarStack-4AL_jxUF.js";import"./Badge-B1Y6ruys.js";import"./BigNumber-NgHYAh3A.js";import"./Breadcrumb-DOyzkWnN.js";import"./Link-Do3eIhQO.js";import"./Heading-CHzNLXxT.js";import"./Legend-CZxHGHa6.js";import"./FileCardList-CFeSPxGX.js";import"./Image-CFjkhrGB.js";import"./Color-xIgWNHiv.js";import"./Content-Dg81XJRV.js";import"./ContextualHelpTrigger-7crKzglp.js";import"./CounterBadge-CLW5yjQ7.js";import"./DonutChart-C7E8doOb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIdJbZ8G.js";import"./Header-DkLINSGj.js";import"./Initials-DCYS7rJh.js";import"./InlineCode-DdWzKy44.js";import"./PopoverTrigger-BiiRixsv.js";import"./Separator-DvBTZY_D.js";import"./Message-jmWJmgsi.js";import"./MessageSeparator-dTBBbTVG.js";import"./NavigationGroup-BQQpe8Hu.js";import"./Notification-CAeZO54P.js";import"./NotificationProvider-Cquom2kb.js";import"./ProgressBar-CEJMgPBt.js";import"./Rating-Bg1reZHS.js";import"./Skeleton-DiJUmzB6.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Br={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
