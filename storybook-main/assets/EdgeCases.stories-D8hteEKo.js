import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CWnL7GlB.js";import{B as x}from"./Button-DK5hda9W.js";import M from"./Default.stories-DVRx2RHZ.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Bwx-eWaq.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-DzH_oMO-.js";import"./OverlayTrigger-DzHiGsoK.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-4EJujaZN.js";import"./useSelector-C7-C3jKq.js";import"./Action-MJ-GzoqX.js";import"./Text-D755SsIi.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-ViJnENXQ.js";import"./IconWarning-qgw-h7pK.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";import"./Separator-DG_EV7vp.js";import"./useMenuTrigger-zIZmtw8O.js";import"./SelectionManager-C0vcxxFt.js";import"./useEvent-BUAZZNDw.js";import"./LoadingSpinner-vdHXOxCx.js";import"./Button-D4VcI4Uu.js";import"./Separator-BHDwg_7o.js";import"./Heading-BHRpEcyE.js";import"./Section-CYxcFJfL.js";import"./Activity-Ck-RMSDT.js";const de={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const xe=["LongTexts","LongList"];export{r as LongList,t as LongTexts,xe as __namedExportsOrder,de as default};
