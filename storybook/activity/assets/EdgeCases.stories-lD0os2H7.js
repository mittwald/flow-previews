import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-Bf60JIu5.js";import"./index-DzrNjVda.js";import M from"./Default.stories-zJf_AIZ9.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-jClpZjQg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-C-onzJUu.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-BiT2TJCy.js";import"./useFocusable-B-LauCUn.js";import"./utils-DRHmYb2_.js";import"./usePress-BkIif8cm.js";import"./FocusScope-CDZwNdd7.js";import"./useEvent-qkZmU0AT.js";import"./Dialog-BRP8ORPr.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-99HcePCc.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DayyQCdx.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-Bmsr8nBw.js";import"./VisuallyHidden-DhvvBhri.js";import"./Collection-BJ-RgKfp.js";import"./Popover-G9S_LPjZ.js";import"./Text-COwT3C7Z.js";import"./IconApp-O1Ko_agd.js";import"./IconWarning-CPLPaO8l.js";import"./index--1Agfdy1.js";import"./Text-DLsw2oYK.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-BrgvgqA3.js";import"./Button-C9ymswsl.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const me=["LongTexts","LongList"];export{r as LongList,t as LongTexts,me as __namedExportsOrder,re as default};
