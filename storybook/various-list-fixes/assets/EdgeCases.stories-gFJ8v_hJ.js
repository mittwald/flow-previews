import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-Dxztq65C.js";import"./ContextMenuSection-Vfk79hmG.js";import{B as x}from"./Button-TH90Unv1.js";import M from"./Default.stories-CYac6R2v.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-SXQnFwcy.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-DAQfSrhS.js";import"./OverlayTrigger-DBMCsseW.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./Dialog-EQBJGkcZ.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-D4kl22nw.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-nwH1LYxm.js";import"./browser-B3hGj0u-.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./dynamic-DKDa4OpU.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./Text-DPEzzey4.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-D_KFb-03.js";import"./Initials-DV3qKvQK.js";import"./Switch-js7LGmEx.js";import"./Label-BFoBZBqy.js";import"./useToggleState-93Gd9adu.js";import"./useFormReset-DMREOE0P.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Separator-GRGVuDe9.js";import"./Heading-DQ0-u3p0.js";import"./Heading--STTcIhS.js";const kt={...M,title:"Actions/ContextMenu/Edge Cases"},r={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
