import{j as r}from"./iframe-iStLwuZ7.js";import{H as i}from"./Heading-HUlQjbPG.js";import a from"./Default.stories-CdMvW8Yq.js";import{a2 as n}from"./IconWarning-DFqNAy-A.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Cv_3_adP.js";import{C as d,a as l}from"./ContextualHelpTrigger-BKy97cgV.js";import{B as c}from"./Button-DeYIfmY1.js";import{T as g}from"./Text-Bm93Qc7O.js";import{B as x}from"./Badge-PtfBqhfx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgccJZsB.js";import"./index-BbqvJdms.js";import"./index-DcihAMJC.js";import"./RSPContexts-LTaLIYp5.js";import"./utils-En5R44lx.js";import"./Section-Dc_V4FCk.js";import"./Action-CBX9L7t4.js";import"./context-BkQICaTP.js";import"./useStatic-TN_NP4Rc.js";import"./browser-D_N9MqU0.js";import"./getActionGroupSlot-Df52Fbgc.js";import"./dynamic-BC0kG87y.js";import"./Dialog-WSuFRoqu.js";import"./Button-Cm_HfJV4.js";import"./ProgressBar-BI2riqcs.js";import"./Hidden-Dy-IvjOH.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-abCQqTkG.js";import"./useFocusRing-LOcsQEvn.js";import"./useFocusable-BrL0nAob.js";import"./OverlayArrow-SEOPpry_.js";import"./useControlledState-BI2V3xrC.js";import"./Collection-BuxUMZwe.js";import"./CollectionBuilder-CuL3Q7YH.js";import"./SelectionIndicator-BKv19ZSu.js";import"./Separator-CHkxKTJO.js";import"./useLocalizedStringFormatter-nySSu_zi.js";import"./AlertIcon-DkyVKzRm.js";import"./Popover-t8MFWx16.js";import"./OverlayTrigger-3eg2WHd6.js";import"./ControlledNotification-DvN-R_5x.js";import"./ClearPropsContextView-8CvEVPvl.js";import"./LoadingSpinner-Bbl45bGl.js";import"./EmulatedBoldText-Bxo0dRe8.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
