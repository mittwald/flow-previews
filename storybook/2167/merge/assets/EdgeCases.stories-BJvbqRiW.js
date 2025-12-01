import{j as r}from"./iframe-CkaLytcH.js";import{H as p}from"./Heading-CDNPJ0iR.js";import a from"./Default.stories-Cv4C6Ad5.js";import{a2 as i}from"./IconWarning-at2C7kXG.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-EOMQWw9S.js";import{C as d,a as l}from"./ContextualHelpTrigger-O6xxa11A.js";import{B as c}from"./Button-CNnlz4DJ.js";import{T as g}from"./Text-tzLzAj2U.js";import{B as x}from"./Badge-BPLvzjro.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./RSPContexts-DGlCkRo9.js";import"./utils-Cx1NHB3m.js";import"./Section-D3xKxzs1.js";import"./context-C49kt-dL.js";import"./Button-6wBbL84E.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BgsgCuSf.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./Collection-G136PDCR.js";import"./CollectionBuilder-D5yy7zsb.js";import"./SelectionIndicator-C6-uo9TF.js";import"./Separator-BUQgzvoO.js";import"./browser-BGuPTbio.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./useStatic-CwKwrY2l.js";import"./dynamic-CuWqRT77.js";import"./AlertIcon-C1KERsp1.js";import"./Popover-O-ijI_rS.js";import"./OverlayTrigger-BAlGpEF-.js";import"./LoadingSpinner-B6kRnXp7.js";import"./EmulatedBoldText-ChGTtZfs.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,er as __namedExportsOrder,rr as default};
