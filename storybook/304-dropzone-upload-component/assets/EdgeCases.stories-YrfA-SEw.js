import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-DPkcKhYr.js";import{B as x}from"./Button-lHNUyXCJ.js";import M from"./Default.stories-DKsY4Cy0.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ContextMenu.module-37Y7DEq9.js";import"./flowComponent-BM_bsdM-.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-DVXGO7D_.js";import"./OverlayTrigger-C-KWOtYR.js";import"./Button-i9IuKDdG.js";import"./utils-DKtCZAsl.js";import"./ProgressBar-CBi1pwqX.js";import"./Label-lrV0rU61.js";import"./Hidden-_I_3hSLB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-C4jwYeNR.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DeAGt_gp.js";import"./useFocusRing-aZOxpy_h.js";import"./usePress-RNxp3RZQ.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-8ryNgZFp.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-r12fe4yx.js";import"./CollectionBuilder-CAvuKgSt.js";import"./Header-rLZ3QEVe.js";import"./Separator-BKg-vd4z.js";import"./Text-CiYJIQMS.js";import"./SelectionManager-B5ZGOR95.js";import"./FocusScope-8TYcTRcc.js";import"./useEvent-Co9bvcjb.js";import"./useCollator-BQ65kL8x.js";import"./useDescription-BzwFPh_j.js";import"./VisuallyHidden-iqNnHKyk.js";import"./context-859mpCQj.js";import"./useSelector-B1salhvt.js";import"./Action-D0zhlgd9.js";import"./Text-Cj_eL-oH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./getActionGroupSlot-AJlcTtI2.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BsMqgwqQ.js";import"./IconWarning-QGTmOWaT.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DDWeJ3La.js";import"./LoadingSpinner-BGAqxZwj.js";import"./Separator-B8yvgtM7.js";import"./Heading-XMTR4E7a.js";import"./Heading-52Ar77Or.js";import"./Section-Bitrkqhi.js";import"./Initials-BtqBINa6.js";const Lt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
