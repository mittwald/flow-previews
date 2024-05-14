import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./index-B3BNL2EQ.js";import"./index-DHPuW7GG.js";import M from"./Default.stories-cVQZZBWd.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-B3kcPtTp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-QEeDNvGW.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./index-DXlCzpEX.js";import"./useFocusable-RGXmTSaR.js";import"./utils-C7OtDhNB.js";import"./usePress-D_26Yem3.js";import"./FocusScope-CWtX81LG.js";import"./useEvent-BL9KwTgj.js";import"./Dialog-DrRXEBMJ.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-D0MIRduX.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-C0jXhLYz.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-CNR_uYUR.js";import"./VisuallyHidden-D--TIFAz.js";import"./Collection-CjvWy9qW.js";import"./Popover-CyMzr4Vs.js";import"./Text-BYJas5cX.js";import"./IconApp-Bqs2Ag64.js";import"./IconWarning-BaU_oeNF.js";import"./index-CKQW-jEo.js";import"./Text-C0DLGRNQ.js";import"./index-IVpWfQyc.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./LoadingSpinner-RZaVNG4l.js";import"./Button-Cw5E5qm1.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
