import{R as t}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CkxmI6AN.js";import{B as x}from"./Button-Bq7y9BIZ.js";import M from"./Default.stories-DfAthz5e.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-Bg40pdZw.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Popover-ClYLtDjh.js";import"./OverlayTrigger-CuDFj76r.js";import"./utils-GKDLJ2vO.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-HdKIwz3h.js";import"./useFocusRing-Cx5sZpw_.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-Bhz1UQIJ.js";import"./usePress-IYK5Xs6I.js";import"./FocusScope-Dq1DdGw4.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-sPIK_yL0.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./Action-DQr6rgUQ.js";import"./Text-DZmFXo-e.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-DP1y2Dk0.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-BWLNclCp.js";import"./Separator-Cpniaoiw.js";import"./useMenuTrigger-Bu3ZT3TV.js";import"./SelectionManager-DqE4UxeO.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-BZB42ELj.js";import"./LoadingSpinner-9k8jsvZY.js";import"./Button-CB57Q0FS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Separator-CvvJpWW-.js";import"./Heading-i4QpT3vc.js";import"./Heading-Ys7-2L7-.js";import"./Section-BIykth8T.js";const Lt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const At=["LongTexts","LongList"];export{r as LongList,e as LongTexts,At as __namedExportsOrder,Lt as default};
