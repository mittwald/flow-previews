import{H as a}from"./Heading-CMLTAaNQ.js";import B from"./Default.stories-DkRtuaRu.js";import"./IconApp-CHbYnbLr.js";import{R as e}from"./index-Cs7sjTYM.js";import{d as H}from"./IconWarning-DXJUFqJH.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-Ce9G34-N.js";import{a as E,C as f}from"./ContextualHelpTrigger-Dt2MYTV1.js";import{B as C}from"./Button-N_hBXId1.js";import{T as A}from"./Text-CcFqEq5L.js";import{B as y}from"./Badge-DsVEUmQx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-BPUkT_mI.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Heading-BTLVh75U.js";import"./RSPContexts-BseA8goh.js";import"./utils-BFFU14Eb.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-_cDK3B-u.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Popover-BlzCrk_Z.js";import"./OverlayTrigger-CS8JLNke.js";import"./OverlayArrow-DfSRANAL.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-B3WeE0v4.js";import"./useSelector-B7WwLw1m.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-Dv7TsfPg.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-CpSy2HXY.js";const Be={...B,title:"Content/Heading/Edge Cases",component:a},t={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.medium)},o={render:r=>e.createElement(a,{...r},e.createElement(H,null),n.long,e.createElement(T,null,"Alert"),e.createElement(y,null,"Badge"))},m={render:r=>e.createElement(a,{...r},n.long,e.createElement(E,null,e.createElement(C,null),e.createElement(f,{...r},e.createElement(A,null,n.medium))))};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
