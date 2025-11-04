import{j as r}from"./iframe-UywY67Bv.js";import{H as i}from"./Heading-DokAbZVz.js";import a from"./Default.stories-DducwAOY.js";import{a2 as n}from"./IconWarning-DwFhTB3p.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B7Gau8m7.js";import{C as d,a as l}from"./ContextualHelpTrigger-Nj7CEmIW.js";import{B as c}from"./Button-Gbk6h-JG.js";import{T as g}from"./Text-ACfuEtxv.js";import{B as x}from"./Badge-DHwTV9Zs.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./index-BZZbJWsv.js";import"./RSPContexts-DKA2ogYJ.js";import"./utils-Q3LyW17A.js";import"./Section-CaIrT3Oi.js";import"./Action-CUqRfkG0.js";import"./context-BigokEM3.js";import"./useStatic-CXquBJ6C.js";import"./browser-89HKgK6A.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./dynamic-D6UsKhYE.js";import"./Dialog-QZmtNN3w.js";import"./Button-Dm7HkgNO.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DOa8wsuE.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./OverlayArrow-B1W-06M-.js";import"./useControlledState-YHruiK90.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./AlertIcon-BnqUCYzd.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./ControlledNotification-D50j9sIR.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./LoadingSpinner-DB5NhDK9.js";import"./EmulatedBoldText-IS2YzD6-.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
      <Badge>Badge</Badge>
    </Heading>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      {dummyText.long}
      <ContextualHelpTrigger>
        <Button />
        <ContextualHelp {...props}>
          <Text>{dummyText.medium}</Text>
        </ContextualHelp>
      </ContextualHelpTrigger>
    </Heading>
}`,...m.parameters?.docs?.source}}};const ar=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,ar as __namedExportsOrder,nr as default};
