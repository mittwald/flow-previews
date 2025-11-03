import{j as r}from"./iframe-DxwcgvDR.js";import{H as i}from"./Heading-DPk654Hf.js";import a from"./Default.stories-Crkg-Ht8.js";import{a2 as n}from"./IconWarning-CXkzDcrG.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Dq9DVS5i.js";import{C as d,a as l}from"./ContextualHelpTrigger-vkCuzPHd.js";import{B as c}from"./Button-DpmT-Qin.js";import{T as g}from"./Text-0mdbe7by.js";import{B as x}from"./Badge-uzHJfnKo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./index-BbnRfAJ3.js";import"./RSPContexts-C4NdBiWw.js";import"./utils-n6_FFOiQ.js";import"./Section-DfeGZtyD.js";import"./Action-BFncm_Jw.js";import"./context-Daw8U4Js.js";import"./useStatic-CjurL4ph.js";import"./browser-Cqe1LxfT.js";import"./getActionGroupSlot-DtMTeAyj.js";import"./dynamic-BXIRoUAY.js";import"./Dialog-BIYJU2zM.js";import"./Button-DnBmTQ11.js";import"./ProgressBar-BcO4kXd3.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CGBA4dD2.js";import"./useFocusRing-CNIgQMUD.js";import"./useFocusable-CfD6tvJl.js";import"./OverlayArrow-SVlp-MsH.js";import"./useControlledState-6bl2dGVj.js";import"./Collection-DD9J8E7A.js";import"./CollectionBuilder-Du6oRztu.js";import"./SelectionIndicator-D_z5mUiE.js";import"./Separator-CYgXLQLG.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./AlertIcon-B3A4X_sK.js";import"./Popover-C115A6YY.js";import"./OverlayTrigger-DNeJhO1q.js";import"./ControlledNotification-CDkn9KZJ.js";import"./ClearPropsContextView-CAdlfc13.js";import"./LoadingSpinner-BQdOHNHu.js";import"./EmulatedBoldText-Bkaq8qYh.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
