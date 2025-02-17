import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-peWC0Ph2.js";import"./ContextMenuSection-VhEUIc7O.js";import{B as x}from"./Button-D98kFum8.js";import M from"./Default.stories-BqNV3woX.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Bi8R7MU8.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-Br2S83BX.js";import"./OverlayTrigger-CoRooDxr.js";import"./context-tra5QY3B.js";import"./useStatic-DVVlOpvb.js";import"./Dialog-CbvlC6bd.js";import"./Button-CPCoFgob.js";import"./utils-7gTBvjqH.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./Text-R-rrVGxo.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-_v7HSv4S.js";import"./browser-B3hGj0u-.js";import"./getActionGroupSlot-7U_pQ_UO.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-B0VM5pA-.js";import"./IconWarning-CeoFRZGA.js";import"./Switch-LAW--_h0.js";import"./Label-DMTVGheq.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Wrap-DQq6jo70.js";import"./Text-DGGzSEam.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-BIc094zz.js";import"./Separator-Dyd9PV28.js";import"./Heading-YaWWRPFG.js";import"./Heading-CrY40Q5a.js";import"./Avatar-jDmyhFwA.js";import"./react-children-utilities-xgYgah_I.js";import"./Initials-BmlCWGKS.js";const At={...M,title:"Actions/ContextMenu/Edge Cases"},r={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ht=["LongTexts","LongList"];export{e as LongList,r as LongTexts,ht as __namedExportsOrder,At as default};
