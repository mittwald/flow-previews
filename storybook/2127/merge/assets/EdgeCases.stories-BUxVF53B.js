import{j as r}from"./iframe-DKDdzEg2.js";import{H as i}from"./Heading-Dg8JptjO.js";import a from"./Default.stories-CxPDEttm.js";import{a2 as n}from"./IconWarning-CYZefWcZ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-qExA_A1s.js";import{C as d,a as l}from"./ContextualHelpTrigger-CVj6wYkq.js";import{B as c}from"./Button-IIDunxYf.js";import{T as g}from"./Text-CjflxeLx.js";import{B as x}from"./Badge-l5GKE6_A.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./index-BpsioLCE.js";import"./RSPContexts-CyAJ8woy.js";import"./utils-glgR2nbC.js";import"./Section-BlYXDkFo.js";import"./Action-Bo6ZQC_V.js";import"./context-CDCUS0mP.js";import"./useStatic-D7KAuRzE.js";import"./browser-CFpNIPwD.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./dynamic-Bw-gnOjZ.js";import"./Dialog-B3clCL3D.js";import"./Button-CPtKzFV4.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BHOWQ-F6.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./AlertIcon-DTKwqTaw.js";import"./Popover-FiU_odVZ.js";import"./OverlayTrigger-BFzT5tm9.js";import"./ControlledNotification-A-nlkOWl.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./EmulatedBoldText-CD_LMSIk.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
