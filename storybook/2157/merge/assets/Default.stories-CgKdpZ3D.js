import{j as r}from"./iframe-B7faIpc2.js";import{a,v as x,g as z}from"./TimeField-DJeF6tHL.js";import{L as s}from"./Label-B8m3uYje.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./clsx-B-dksMZM.js";import"./Accordion-rRmjtL7-.js";import"./dynamic-DNE-pYSI.js";import"./Button-C65qYEPV.js";import"./IconWarning-RXBUNZpo.js";import"./Text-BW5jU57O.js";import"./browser-CF6H-xjM.js";import"./utils-Dgdioq7j.js";import"./EmulatedBoldText-C1Px7vMV.js";import"./LoadingSpinner-mrsqqnDm.js";import"./Button-Br-rQQva.js";import"./ProgressBar-Cpr3Nm-I.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BdWnF-Tv.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./Section-BRbBI6XS.js";import"./context-BRyJJeXK.js";import"./RSPContexts-Bww9Tcci.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./useStatic-d3wvmCdr.js";import"./ActionGroup-lrlsSsuG.js";import"./Alert-CsDQ-kYA.js";import"./AlertIcon-BgMVJ-0R.js";import"./AlertBadge-C_NAxNEx.js";import"./Align-DuctyuK7.js";import"./Popover-QuqvLiOu.js";import"./OverlayTrigger-mzSlkfM-.js";import"./TableFooterRow-BTQIZIFr.js";import"./SkeletonText-C_Fa3H2l.js";import"./Avatar-Dz-cMFo8.js";import"./AvatarStack-2jPjq7st.js";import"./Badge-BaUtza3s.js";import"./BigNumber-BwNV7DHD.js";import"./Breadcrumb-D-mfdRHn.js";import"./Link-BlQ-A0kF.js";import"./Heading-DQAVgOUX.js";import"./Legend-DrznEJ0f.js";import"./FileCardList-BmGtRGBl.js";import"./Image-Cw48J6Ze.js";import"./Color-COLTRY34.js";import"./Content-DYfcwBs-.js";import"./ContextualHelpTrigger-CoqA6lQ-.js";import"./CounterBadge-Bnm06nVz.js";import"./DonutChart-B4IQzO-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-eNzO0zDz.js";import"./Header-1-tOwrUd.js";import"./Initials-D1wCqKzA.js";import"./InlineCode-SGGc6CuJ.js";import"./PopoverTrigger-Btq07Gqi.js";import"./Separator-iil9Ttbd.js";import"./Message-CsQsykjC.js";import"./MessageSeparator-4ehVw1iX.js";import"./NavigationGroup-DCa422EG.js";import"./Notification-CX0MhUUz.js";import"./NotificationProvider-BfOyISvO.js";import"./ProgressBar-CKWJYevm.js";import"./Rating-Dpmi2aI5.js";import"./Skeleton-C2W_Mk7n.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/TextArea",component:a,render:e=>r.jsx(a,{onChange:f("onChange"),...e,children:r.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(a,{...e,children:[r.jsx(s,{children:"Public Key"}),r.jsx(x,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(a,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(s,{children:"Public Key"})})},l={render:e=>r.jsx(a,{...e,placeholder:"ssh-rsa...",children:r.jsx(s,{children:"Public Key"})})},m={render:e=>r.jsxs(a,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Public Key"}),r.jsx(z,{children:"Invalid Key"})]})},d={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...b.parameters?.docs?.source}}};const Ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,p as Required,h as Resizeable,d as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,c as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithPlaceholder,Ir as __namedExportsOrder,Mr as default};
