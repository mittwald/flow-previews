import{R as e}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuSection-yQw222rb.js";import{B as x}from"./Button-COr4qXCu.js";import M from"./Default.stories-DGDwPyjG.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D0hgC601.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-C35F8xkT.js";import"./OverlayTrigger-6VtsQuLn.js";import"./utils-DsDc2z3f.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-C3Uw9j7L.js";import"./useFocusRing-DQ9q31uS.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v15KrNwr.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./Action-D1MPQzaf.js";import"./Text-EyCvEgnK.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-DAlZawmB.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DZ6iFK1V.js";import"./IconWarning-D5KLWx1O.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-CPOND5Y7.js";import"./Header-CFQsHu-x.js";import"./SelectionManager-BXcc41yp.js";import"./useEvent-YC2gB4eD.js";import"./Separator-DHXedzvY.js";import"./LoadingSpinner-CsLReDiT.js";import"./Button-D3-i4KBG.js";import"./useFocusable-R-ZPDh0R.js";import"./Separator-4D_HDkvJ.js";import"./Heading-Dx4e16v2.js";import"./Section-pYJvHIu7.js";import"./Activity-DYbiBj6P.js";const ge={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const de=["LongTexts","LongList"];export{r as LongList,t as LongTexts,de as __namedExportsOrder,ge as default};
