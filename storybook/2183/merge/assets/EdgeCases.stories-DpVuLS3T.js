import{j as r}from"./iframe-B4mFuudk.js";import{H as p}from"./Heading-x5KcgVW6.js";import a from"./Default.stories-DBOlw4B-.js";import{a1 as i}from"./IconWarning-BO1YoHSl.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-wyAf4fmW.js";import{C as d,a as l}from"./ContextualHelpTrigger-BgOAUkgy.js";import{B as c}from"./Button-D2oQPT9j.js";import{T as g}from"./Text-DWXiWYJa.js";import{B as x}from"./Badge-DdfeDcq0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4qYIeXY.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./RSPContexts-D4gsSVcd.js";import"./utils-DO9siV10.js";import"./Section-B901pmSP.js";import"./context-BaYvtgUx.js";import"./Button-D_IfTLYp.js";import"./ProgressBar-B9w8hpj9.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-woxbYNKN.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./browser-CSkgXx8X.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./useStatic-BNYxoolq.js";import"./dynamic-d3DzbtXD.js";import"./remote-CQQC7IgA.js";import"./AlertIcon-C2Iuu0oW.js";import"./Popover-EGtBkPGT.js";import"./OverlayTrigger-CxsOgof7.js";import"./LoadingSpinner-CkjsGIz-.js";import"./EmulatedBoldText-ekl0jVcs.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,tr as __namedExportsOrder,er as default};
