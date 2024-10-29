import{H as a}from"./Heading-D9Hs5Cia.js";import B from"./Default.stories-B1PNcwgg.js";import"./IconApp-Cqd50AQn.js";import{R as e}from"./index-Cs7sjTYM.js";import{b as H}from"./IconWarning-B9oov-FP.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-BS6WwonZ.js";import{a as E,C as f}from"./ContextualHelpTrigger-BIhqWeTe.js";import{B as C}from"./Button-Byi0Whzt.js";import{T as A}from"./Text-EiUZzLnr.js";import{B as y}from"./Badge-N5VVRF6Z.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-CTC1x3gN.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-y1Jdk2VD.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Popover-d71i4n1l.js";import"./OverlayTrigger-DWdVVjpE.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-BiUpVy3m.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-JxDhhupy.js";import"./useSelector-CrifC7Fx.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DyR03qbn.js";import"./Button-CROQF3YN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-GQF4xS8_.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";const Be={...B,title:"Content/Heading/Edge Cases",component:a},t={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.medium)},o={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(a,{...r},n.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,n.medium))))};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
