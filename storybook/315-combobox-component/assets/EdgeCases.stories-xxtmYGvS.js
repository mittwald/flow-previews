import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./MenuItem-BQ_UzLcm.js";import{B as x}from"./Button-kgu6ukff.js";import M from"./Default.stories-B0XMb53L.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CVx7Nq_O.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Popover-DHpMNNyD.js";import"./Dialog-DkqyJwif.js";import"./utils-VMHz66w6.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CxiI-V8Q.js";import"./useFocusable-6uy--nFO.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DI1g9pTm.js";import"./FocusScope-Bl0UA8jw.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-Dg6JcKHx.js";import"./IconApp-Bpay03mZ.js";import"./IconWarning-CbiRLlNJ.js";import"./Text-KrSbjq4H.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-CV99Jc8q.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-bm5IiiHI.js";import"./Header-DRa9GF5F.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BVYhIw4u.js";import"./LoadingSpinner-InQx5M66.js";import"./Button-D3p9ry0o.js";import"./Separator-DA-sXNaF.js";const me={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const oe=["LongTexts","LongList"];export{r as LongList,t as LongTexts,oe as __namedExportsOrder,me as default};
