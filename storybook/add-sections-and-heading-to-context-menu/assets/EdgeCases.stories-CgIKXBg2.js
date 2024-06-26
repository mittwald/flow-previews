import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuSection-Bk6V34YO.js";import{B as x}from"./Button-DMJBC97W.js";import M from"./Default.stories-DYjpd4Ut.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-S8oBNLtu.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-BdhblLz-.js";import"./OverlayTrigger-BPhu1iqi.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-FRXDLkOm.js";import"./useSelector-O6pPILhT.js";import"./Action-v64sO3Vo.js";import"./Text-CadoLc4y.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BxWtZCih.js";import"./IconWarning-D35fNG9E.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-VE9vcYgH.js";import"./Header-pUQJtpe3.js";import"./SelectionManager-C0vcxxFt.js";import"./useEvent-BUAZZNDw.js";import"./Separator-ldv7zu3q.js";import"./LoadingSpinner-BNJYvKRG.js";import"./Button-D4VcI4Uu.js";import"./Separator-CuQGKctG.js";import"./Heading-BRJ-0FTl.js";const le={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ce=["LongTexts","LongList"];export{r as LongList,t as LongTexts,ce as __namedExportsOrder,le as default};
