import{H as n}from"./Heading-Bn-Oekdv.js";import B from"./Default.stories-XzSJ9AAz.js";import"./IconApp-BTi5eST8.js";import{R as e}from"./index-B-o1Wr-g.js";import{e as H}from"./IconWarning-SZWhHkK8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-EMyJwwv2.js";import{a as E,C as f}from"./ContextualHelpTrigger-CG8cp3ag.js";import{B as C}from"./Button-DlduztE6.js";import{T as A}from"./Text-DSvcA5Wz.js";import{B as y}from"./Badge-BZAExfXV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./flowComponent-D6-TVbjo.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-Cv6XP_zv.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Popover-BYm3kTYN.js";import"./OverlayTrigger-BHiTqCiL.js";import"./context-Rc-flGIq.js";import"./useSelector-D83Ddg6S.js";import"./Dialog-EQBJGkcZ.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-D4kl22nw.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-CIgU99E1.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";const he={...B,title:"Content/Heading/Edge Cases",component:n},t={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.medium)},o={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(n,{...r},p.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,p.medium))))};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const We=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,We as __namedExportsOrder,he as default};