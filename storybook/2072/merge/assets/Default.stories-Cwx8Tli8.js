import{j as r,r as C}from"./iframe-D_IiP5QF.js";import{T as t,v as h,g as R}from"./TimeField-D8SJmsIb.js";import{L as o}from"./Label-CdaBbVbz.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./clsx-B-dksMZM.js";import"./Accordion-BLud_gcY.js";import"./dynamic-0ssToOFv.js";import"./Button-DslN622a.js";import"./IconWarning-CeWNQ8u9.js";import"./Text-DtkWnfcs.js";import"./browser-Xi37Uwf1.js";import"./utils-BUDUz3oT.js";import"./EmulatedBoldText-D1D5MzAW.js";import"./LoadingSpinner-DAahn8uY.js";import"./Button-wMdqoBKT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CzHIh5kC.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./Section-DN7xTxEc.js";import"./context-DdWIe0N6.js";import"./RSPContexts-rRqbWPHZ.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./useStatic-D7hf1hLx.js";import"./ActionGroup-BXHZPnYY.js";import"./Alert-CAMU0sJf.js";import"./AlertIcon-CiVM0veU.js";import"./AlertBadge-DIoWGYfv.js";import"./Align-Dt5Z_tfD.js";import"./Popover-LH5uR-Ai.js";import"./OverlayTrigger-B9GYFSa8.js";import"./TableFooterRow-BLUBBtbs.js";import"./SkeletonText-Dp6bSbtZ.js";import"./Avatar-fgBKjcwX.js";import"./AvatarStack-DD1RlKSP.js";import"./Badge-CKHtuWwK.js";import"./BigNumber-QFeyc9Z7.js";import"./Breadcrumb-DTcVTg7F.js";import"./Link-1CuEWTvW.js";import"./Heading-DD9mIgnZ.js";import"./Legend-EDbvCt-7.js";import"./FileCardList-C_PuopUU.js";import"./Image-BxIb2zH6.js";import"./Color-Daqpvuwq.js";import"./Content-C5HeRuSJ.js";import"./ContextualHelpTrigger-Dpf2pUop.js";import"./CounterBadge-DZiQt8Xn.js";import"./DonutChart-D6ZAMqYo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CtlfmTig.js";import"./Header-DgvsXn7S.js";import"./Initials-O7Qdz8vn.js";import"./InlineCode-BQGvjfc4.js";import"./PopoverTrigger-_UX04Jxf.js";import"./Separator-DlDRANMe.js";import"./Message-Ii4ctpYX.js";import"./MessageSeparator-BTKC9hrY.js";import"./NavigationGroup-BpmkmOoX.js";import"./Notification-BI6q-vGx.js";import"./NotificationProvider-BANQjypq.js";import"./ProgressBar-pgqNFsRb.js";import"./Rating-cGBPgfkq.js";import"./Skeleton-Bw8asRqa.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
