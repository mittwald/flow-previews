import{R as t}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-DpTBZMjb.js";import{B as x}from"./Button-N_hBXId1.js";import M from"./Default.stories-BzGxwnNv.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-BPUkT_mI.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Popover-BlzCrk_Z.js";import"./OverlayTrigger-CS8JLNke.js";import"./utils-BFFU14Eb.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DfSRANAL.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-B3WeE0v4.js";import"./useSelector-B7WwLw1m.js";import"./Action-DgzMjhtB.js";import"./Text-CcFqEq5L.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-CpSy2HXY.js";import"./getActionGroupSlot-Bj26VJcY.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CHbYnbLr.js";import"./IconWarning-DXJUFqJH.js";import"./deepHas-C3achdHB.js";import"./react-children-utilities-CdZndyK3.js";import"./Avatar-BDkTJkOx.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-FsUjFut0.js";import"./Separator-CXlA5nwI.js";import"./useMenuTrigger-BBl0-pBT.js";import"./SelectionManager-BkcLa_O0.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-Dv7TsfPg.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Separator-C7TVh5pd.js";import"./Heading-CMLTAaNQ.js";import"./Heading-BTLVh75U.js";import"./Section-BYUl0gHB.js";const Lt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
