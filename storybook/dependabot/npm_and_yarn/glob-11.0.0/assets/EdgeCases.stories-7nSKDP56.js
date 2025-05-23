import{H as n}from"./Heading-DHKNZywU.js";import B from"./Default.stories-Ca5cQNWy.js";import"./IconApp-Ch-QazpE.js";import{R as e}from"./index-B-o1Wr-g.js";import{d as H}from"./IconWarning-BZUIPdJF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-kMwwa3Xn.js";import{a as E,C as f}from"./ContextualHelpTrigger-wVJLO38C.js";import{B as C}from"./Button-Co3B5ZA4.js";import{T as A}from"./Text-f9zdzMsn.js";import{B as y}from"./Badge-C9g1Tfwz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-DtNydOjY.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-CILOdubV.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Popover-DyNDSVv1.js";import"./OverlayTrigger-BwAo49x6.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-DRjkQoUv.js";import"./useSelector-DI6d9Mj-.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BvVas5ee.js";import"./EmulatedBoldText-1x_0FOGF.js";const ye={...B,title:"Content/Heading/Edge Cases",component:n},t={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.medium)},o={render:r=>e.createElement(n,{...r},e.createElement(H,null),p.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(n,{...r},p.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,p.medium))))};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const he=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,he as __namedExportsOrder,ye as default};
