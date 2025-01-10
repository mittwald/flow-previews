import{H as n}from"./Heading-CHAikoJ1.js";import B from"./Default.stories-5cspOccy.js";import"./IconApp-B_zPpa1A.js";import{R as e}from"./index-BbMBc-iG.js";import{e as H}from"./IconWarning-CceziLlX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-N-1nEAZt.js";import{a as E,C as f}from"./ContextualHelpTrigger-CJlYWGhn.js";import{B as C}from"./Button-1rw05oyV.js";import{T as A}from"./Text-D6naXSDy.js";import{B as y}from"./Badge-DoOs09mV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading-B6bd_0m7.js";import"./RSPContexts-CBHfX6hb.js";import"./utils-D4Vol65q.js";import"./storyBackgrounds-GFSAi-dI.js";import"./react-children-utilities-BBO5HXrA.js";import"./AlertIcon-DS_AuS91.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./Popover-DvsbnfGF.js";import"./OverlayTrigger-CO8vF-4q.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./Dialog-BQ_biHhV.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./Text-oWh285ma.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-y4xqeSCe.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";const We={...B,title:"Content/Heading/Edge Cases",component:n},t={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.medium)},o={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(n,{...r},p.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,p.medium))))};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,d,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
      <Badge>Badge</Badge>
    </Heading>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,x;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      {dummyText.long}
      <ContextualHelpTrigger>
        <Button />
        <ContextualHelp {...props}>
          <Text>{dummyText.medium}</Text>
        </ContextualHelp>
      </ContextualHelpTrigger>
    </Heading>
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const be=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,be as __namedExportsOrder,We as default};
