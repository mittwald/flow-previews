import{H as a}from"./Heading-qvgwilD1.js";import B from"./Default.stories-BJqHJ1uI.js";import"./IconApp-Ckk9YbAz.js";import{R as e}from"./index-Cs7sjTYM.js";import{d as H}from"./IconWarning-DqfkzyfE.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-CuakxWtP.js";import{a as E,C as f}from"./ContextualHelpTrigger-DilnSjx6.js";import{B as C}from"./Button-BEfjSNse.js";import{T as A}from"./Text-CBmFbDMr.js";import{B as y}from"./Badge-bk84pBwh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-BKm9-K5O.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-CzdBBVnb.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Popover-C1MaiRdf.js";import"./OverlayTrigger-C1WP8Km0.js";import"./OverlayArrow-BrbzJDKz.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-CvxQ3tPR.js";import"./useSelector-D79JxkCo.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Melgcvq6.js";import"./Button-DKDQv6qd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CKybZYMg.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";const Be={...B,title:"Content/Heading/Edge Cases",component:a},t={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.medium)},o={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(a,{...r},n.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,n.medium))))};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Te=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,Te as __namedExportsOrder,Be as default};
