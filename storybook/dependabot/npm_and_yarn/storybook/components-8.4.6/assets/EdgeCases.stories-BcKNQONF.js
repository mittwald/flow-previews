import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CDCh-FE2.js";import{B as x}from"./Button-Co3B5ZA4.js";import M from"./Default.stories-9IlnIqSt.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ContextMenu.module-37Y7DEq9.js";import"./flowComponent-DtNydOjY.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-DyNDSVv1.js";import"./OverlayTrigger-BwAo49x6.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-DRjkQoUv.js";import"./useSelector-DI6d9Mj-.js";import"./Action-C5HI1jYK.js";import"./Text-f9zdzMsn.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./getActionGroupSlot-UdnWplJ3.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Ch-QazpE.js";import"./IconWarning-BZUIPdJF.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-BeZ-27oP.js";import"./LoadingSpinner-BvVas5ee.js";import"./Separator-6N92k3uJ.js";import"./Heading-DHKNZywU.js";import"./Heading--STTcIhS.js";import"./Section-CzPgM6Py.js";import"./Initials-CMWIUdeq.js";const Bt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Lt=["LongTexts","LongList"];export{r as LongList,e as LongTexts,Lt as __namedExportsOrder,Bt as default};
