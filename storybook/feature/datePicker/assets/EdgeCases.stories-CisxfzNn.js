import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-C4l5bo88.js";import{B as x}from"./Button-ulZ4Jbdu.js";import M from"./Default.stories-CzBUFfx9.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-wUaQYyEI.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-CJjKvP3U.js";import"./Action-Benk5eLT.js";import"./Text-CkBcFDZm.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-PvbfzXMy.js";import"./utils-CblGkSXh.js";import"./OverlayTrigger-CZl3hatG.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DFzBEdBA.js";import"./useFocusable-SxMTR87z.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CELuk77o.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BPPmAJfG.js";import"./FocusScope-Be1QW02A.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CQbC_8pq.js";import"./IconApp-Cxjf7gPB.js";import"./IconWarning-2GqJK2gc.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-B_ssJImm.js";import"./Header-BW0XyIS8.js";import"./SelectionManager-Ca2csQpH.js";import"./useEvent-BUAZZNDw.js";import"./useCollator-fUoTTx-r.js";import"./Separator-DNy1xdqg.js";import"./LoadingSpinner-CTgdLL_K.js";import"./Button-EGpG9HXG.js";import"./Separator-DwUaIUI6.js";const ae={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ue=["LongTexts","LongList"];export{r as LongList,t as LongTexts,ue as __namedExportsOrder,ae as default};
