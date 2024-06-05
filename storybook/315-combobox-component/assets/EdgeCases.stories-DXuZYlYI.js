import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-CIcfoFu4.js";import{B as x}from"./Button-C83TB_Br.js";import M from"./Default.stories-BQEpqZkF.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cgwf_8Pz.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-DfcoxKbn.js";import"./Action-BZHYLJuU.js";import"./Text-45YGqDyb.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-CV99Jc8q.js";import"./utils-VMHz66w6.js";import"./OverlayTrigger-Bw1ONM8y.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CzGgKwTX.js";import"./useFocusable-BnMUMntI.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BwUp6-ib.js";import"./FocusScope-CWd9kKtL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-C35j07Di.js";import"./IconApp-Bvp8_lYy.js";import"./IconWarning-B_x1GzbP.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-RpYJwiSj.js";import"./Header-CyVwCXR-.js";import"./SelectionManager-1UU5Js-l.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BfUCqNhO.js";import"./LoadingSpinner-Bqf3v_Ad.js";import"./Button-DEqt5BuM.js";import"./Separator-BevloPyC.js";const pe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ae=["LongTexts","LongList"];export{r as LongList,t as LongTexts,ae as __namedExportsOrder,pe as default};
