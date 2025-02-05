import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-D--JtCgv.js";import"./ContextMenuSection-B0aP5-y_.js";import{B as x}from"./Button-CPf-QiE3.js";import M from"./Default.stories-DUSDtezz.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Bz6Io0hO.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-DTxHWriA.js";import"./OverlayTrigger-C41Jter0.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./Dialog-CbvlC6bd.js";import"./Button-CPCoFgob.js";import"./utils-7gTBvjqH.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./Text-R-rrVGxo.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./useOverlayController-K_Ts8z9R.js";import"./Action-v-b0G_7k.js";import"./browser-B3hGj0u-.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-DPCXsjOp.js";import"./Switch-DYt40Imp.js";import"./Label-D1gQZv67.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Wrap-DQq6jo70.js";import"./Text-9mML8Z29.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-DrWRflEB.js";import"./Separator-Dyd9PV28.js";import"./Heading-BDRONVjZ.js";import"./Heading-CrY40Q5a.js";import"./Avatar-Bl9Q2YEB.js";import"./react-children-utilities-xgYgah_I.js";import"./Initials-BQ3mbrw2.js";const kt={...M,title:"Actions/ContextMenu/Edge Cases"},r={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const vt=["LongTexts","LongList"];export{e as LongList,r as LongTexts,vt as __namedExportsOrder,kt as default};
