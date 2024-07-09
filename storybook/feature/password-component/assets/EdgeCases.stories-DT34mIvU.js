import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CvYWvsom.js";import{B as x}from"./Button-D6GiwIW_.js";import M from"./Default.stories-VUPhqOO9.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-Cll4pGCY.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-C23yS8da.js";import"./OverlayTrigger-CInB0dMO.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B_2Pd_cl.js";import"./useFocusable-B1CfUGG-.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bc78XfGJ.js";import"./FocusScope-CBGue2Od.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CVANJuSe.js";import"./context-CSQJgabl.js";import"./useSelector-DpPpxyR7.js";import"./Action-CAcZ0_fm.js";import"./Text-Dgrf8S-7.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-3FUNhTNc.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DWya8WHB.js";import"./IconWarning-CVIujYNc.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";import"./Separator-DG_EV7vp.js";import"./useMenuTrigger-sTn7Pn93.js";import"./SelectionManager-CGAryKFY.js";import"./useEvent-BUAZZNDw.js";import"./LoadingSpinner-xMX5UQ9s.js";import"./Button-DvIckO9Z.js";import"./Separator-BHDwg_7o.js";import"./Heading-BCjHoBHi.js";import"./Section-DgGPYImf.js";import"./Activity-Ck-RMSDT.js";const xe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Me=["LongTexts","LongList"];export{r as LongList,t as LongTexts,Me as __namedExportsOrder,xe as default};
