import{R as t}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-C6vO0ILE.js";import{B as x}from"./Button-BWPqBSre.js";import M from"./Default.stories-R3UMqITY.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-ioG1zo33.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Popover-CqRrDXf4.js";import"./OverlayTrigger-CnA-HwC4.js";import"./utils-Cd8r7pc9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BrbzJDKz.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-DqIY88Tb.js";import"./useSelector-CFdl5cbA.js";import"./Action-Bn6GDnZL.js";import"./Text-Kq1Uppf8.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./getActionGroupSlot-B_XxGEdc.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DqdQf8xk.js";import"./IconWarning-Bz8aDAH7.js";import"./deepHas-C3achdHB.js";import"./react-children-utilities-CdZndyK3.js";import"./Avatar-C3nnJ_Ko.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-D4Yh6o5s.js";import"./SelectionManager-BkcLa_O0.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-CKybZYMg.js";import"./LoadingSpinner-CEUYaNew.js";import"./Button-DKDQv6qd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Separator-DjnnN6s2.js";import"./Heading-DZV50dxJ.js";import"./Heading-CG14-WVD.js";import"./Section-nWyQx-6T.js";const Lt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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