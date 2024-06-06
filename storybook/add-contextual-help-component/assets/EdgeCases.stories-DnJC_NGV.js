import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-DpdexQ1M.js";import{B as x}from"./Button-DiZbRqGq.js";import M from"./Default.stories-DHOxWXKs.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Ca66243O.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-B3TQPK6z.js";import"./useOverlayController-uhA2g3Cs.js";import"./OverlayTrigger-24tbbi7g.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CQk-PceR.js";import"./useFocusable-78usWDLt.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-9lmrtZep.js";import"./FocusScope-DoABDPBn.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CB7QZ_UN.js";import"./Menu-BiN_fRnG.js";import"./Collection-B_ssJImm.js";import"./Header-Ch7wO_bV.js";import"./SelectionManager-C1hlGk95.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./Text-D6Zjnbf0.js";import"./IconApp-BaqjkNZn.js";import"./IconWarning-Bsd3dSOq.js";import"./Text-DaXThI_-.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./LoadingSpinner-C1i2Nbou.js";import"./Button-BcoQYGn5.js";import"./Separator-hsl8joAo.js";const ae={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
