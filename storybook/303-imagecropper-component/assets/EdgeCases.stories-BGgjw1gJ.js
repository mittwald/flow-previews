import{R as t}from"./index-uCp2LrAq.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-C2y7UYa8.js";import{B as x}from"./Button-CKjWx2QM.js";import M from"./Default.stories-Dzit7PD7.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-d9koHm8X.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-6KT5KTFb.js";import"./OverlayTrigger-PMv2-p4P.js";import"./utils-CRveUs4Q.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DobB3-tX.js";import"./useFocusable-DIY1EfD0.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./FocusScope-DRFNwxZB.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-BwH5wu93.js";import"./context-DGHf5otc.js";import"./useSelector-BUIORffs.js";import"./Action-DH-nwfeD.js";import"./Text-CzfDsx2u.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-BxG67LRB.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Separator-D-FRkinj.js";import"./useMenuTrigger-BGlgYenP.js";import"./SelectionManager-ADoBXYhu.js";import"./useEvent-YC2gB4eD.js";import"./useDescription-DkXZ8A7g.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";import"./Separator-WwpLu8pv.js";import"./Heading-BTmWJFHE.js";import"./Section-C8kIh9p2.js";import"./Activity-DYbiBj6P.js";const Mt={...M,title:"Actions/ContextMenu/Edge Cases"},e={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,i.medium),t.createElement(o,null,i.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,n)=>t.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Tt=["LongTexts","LongList"];export{r as LongList,e as LongTexts,Tt as __namedExportsOrder,Mt as default};
