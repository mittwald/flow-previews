import{R as t}from"./index-B-o1Wr-g.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CIz1ohr5.js";import"./ContextMenuSection-D9Xu0BHu.js";import{B as x}from"./Button-DozFbJ2r.js";import M from"./Default.stories-BcUsXhWb.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Cv5RgLo7.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Popover-BRJNibXf.js";import"./OverlayTrigger-OLo2cOxk.js";import"./context-CKnOEiAk.js";import"./useSelector-CPwgBGyM.js";import"./Dialog-B2ZKBZvY.js";import"./Button-CQNWHC4E.js";import"./utils-DQkeZTYT.js";import"./ProgressBar-BOrlGNM-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DbryJmtU.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-Dus-MUVG.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-BjdLMd1e.js";import"./Text-CFSbYzT7.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-BDJO7KLT.js";import"./browser-B3hGj0u-.js";import"./getActionGroupSlot-y9AUq0Sq.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Dzb5vMVI.js";import"./IconWarning-BzyYKcnD.js";import"./Text-CzvJ5BXa.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DrUraGEu.js";import"./Initials-jTmMIB7N.js";import"./Switch-NFLBgZZy.js";import"./Label-BVDa8VNw.js";import"./useToggleState-Cmu0RDcv.js";import"./useFormReset-DMREOE0P.js";import"./LoadingSpinner-BJ4QNKBa.js";import"./Separator-Cqb16lEv.js";import"./Heading-5vVsQF4p.js";import"./Heading-DbTcj_es.js";const kt={...M,title:"Actions/ContextMenu/Edge Cases"},r={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
