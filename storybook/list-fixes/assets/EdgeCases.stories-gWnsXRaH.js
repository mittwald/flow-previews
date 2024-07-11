import{R as e}from"./index-BwDkhjyp.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-C1WeLuv_.js";import{B as x}from"./Button-CE1BCqF-.js";import M from"./Default.stories-Db5rbJAB.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-L8FZPC_o.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./PopoverTrigger-Bmry37I8.js";import"./OverlayTrigger-DAcHIpQJ.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-apusqW7x.js";import"./useSelector-BudK-1xR.js";import"./Action-CGXqiLzQ.js";import"./Text-CKjZYOWy.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-C_suByGF.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-D9YGKrkS.js";import"./IconWarning-B77fLmlz.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./useMenuTrigger-CyXVQiVd.js";import"./SelectionManager-BD-OU06l.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-WO6qy2zn.js";import"./Button-BTMfZQLF.js";import"./Separator-Cv098Q8B.js";import"./Heading-lKANVE1O.js";import"./Section-BUCiQgUY.js";import"./Activity-Cov3f-FH.js";const xe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
