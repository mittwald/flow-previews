import{R as e}from"./index-BwDkhjyp.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-BtKIOhjD.js";import{B as x}from"./Button-86gkFkCw.js";import M from"./Default.stories-B863fyUh.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-B5uZ4s1Y.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./PopoverTrigger-auuHu7tU.js";import"./OverlayTrigger-B-iEVEid.js";import"./utils-CcQIssJO.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BERv84ls.js";import"./useFocusable-BcMbiAJh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CqD9eiQF.js";import"./FocusScope-BuxQ1peU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-DA6R-bu4.js";import"./context-DcNveDbd.js";import"./useSelector-Be3r6XND.js";import"./Action-CatRQW-r.js";import"./Text-xMX89lYJ.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-22vGTmcn.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-D5gedeYa.js";import"./IconWarning-DT8hSaQm.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";import"./Separator-mwJ01TZq.js";import"./useMenuTrigger-CUKl09yl.js";import"./SelectionManager-7Pq-D15P.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-5UBwHS6-.js";import"./Button-CJW8IwaF.js";import"./Separator-apJGhmsG.js";import"./Heading-BMx6bwiN.js";import"./Section-DFdFoe7O.js";import"./Activity-Cov3f-FH.js";const xe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
