import{H as p}from"./Heading-DFbBdhw6.js";import T from"./Default.stories-DKUUXqrA.js";import"./IconApp-CKfGrMYq.js";import{R as e}from"./index-Cs7sjTYM.js";import{b as H}from"./IconWarning-CfieAnFV.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as E}from"./AlertBadge-CiC80Ew2.js";import{a as C,C as f}from"./ContextualHelpTrigger-Cl9f5Ryu.js";import{B as A}from"./Button-CE824h2d.js";import{T as B}from"./Text-DbnY-2dT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-CudcPQLk.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Popover-BCLqnUPh.js";import"./OverlayTrigger-CRY-wfmv.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Cn8oVN-C.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-CvKk9A5c.js";import"./Button-B89OlhFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-GQF4xS8_.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";const xe={...T,title:"Content/Heading/Edge Cases",component:p},t={render:r=>e.createElement(p,{...r},e.createElement(H,null),n.medium)},o={render:r=>e.createElement(p,{...r},e.createElement(H,null),n.long,e.createElement(E,null,"Alert"))},m={render:r=>e.createElement(p,{...r},n.long,e.createElement(C,null,e.createElement(A,null),e.createElement(f,{...r},e.createElement(B,null,n.medium))))};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,d,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const He=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,He as __namedExportsOrder,xe as default};
